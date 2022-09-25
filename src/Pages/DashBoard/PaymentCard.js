import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const PaymentCard = ({myOrder}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState("");
    const [processing, setProcessing] = useState(true);
    const [successPayment, setSuccessPayment] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
  
    const [user, loading] = useAuthState(auth);
  
    const { price, _id } = myOrder;
    console.log(myOrder);
  
    // const payPrice = parseInt(price);
    const payPrice = 150;
  
    useEffect(() => {
      fetch(`https://assignment-12-server-g2z9.vercel.app/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: payPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
            setProcessing(false);
            // console.log(data.clientSecret);
          }
        });
    }, [payPrice]);
  
    const date = new Date().toString().slice(0, 16);
  
    // if (processing) {
    //   return <Loading></Loading>;
    // }
  
    //
    //----------------------------------------------------------
    //
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      //
      if (!stripe || !elements) {
        setProcessing(false);
        return;
      }
  
      //
      const card = elements.getElement(CardElement);
      if (card == null) {
        setProcessing(false);
        return;
      }
  
      //
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
  
      //
      if (error) {
        // console.log("[error]", error.message);
        setPaymentError(error.message);
        setProcessing(false);
      } else {
        //
        setPaymentError("");
        setSuccessPayment("");
        console.log("[PaymentMethod]", paymentMethod);
  
        const { paymentIntent, error: intentError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: user.userName,
                email: user.email,
              },
            },
          });
  
        if (intentError) {
          setPaymentError(intentError.message);
          setProcessing(false);
        } else {
          setPaymentError("");
          setTransactionId(paymentIntent.id);
          setSuccessPayment("Congrats! Your Payment Is Completed");
  
          // payment sent database
          const payment = {
            paymentStatus: "paid",
            trxID: paymentIntent.id,
            paymentDate: date,
            transactionId: paymentIntent.id,
            PaymentType: "Card",
            paymentIntent,
          };
  
          fetch(`https://assignment-12-server-g2z9.vercel.app/paymentUpdate/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              // /*    authorization: `Bearer ${localStorage.getItem("accessToken")}*/`,
            },
            body: JSON.stringify(payment),
          })
            .then((res) => res.json())
            .then((data) => {
              //     console.log(data);
              setProcessing(false);
              toast.success("Your Payment Is Successfully Complete.");
            });
        }
      }
  
      //
    };
  
    //
    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn w-full btn-success mt-12 float-right"
          type="submit"
          // disabled={!stripe || !clientSecret}
        >
          Pay Now
        </button>
  
        {paymentError && (
          <p className="text-red-500 font-semibold">{paymentError}</p>
        )}
  
        {successPayment && (
          <div>
            <p className="text-green-500 font-semibold">{successPayment}</p>
          </div>
        )}
      </form>
    );
  };

export default PaymentCard;