import React from 'react';
import Order from './Order';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import useOrder from '../Hooks/UseOrder';


const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [myOrders] = useOrder(user);
  
    // const {
    //   data: myOrders,
    //   isLoading,
    //   error,
    //   refetch,
    // } = useQuery("orders", () =>
    //   fetch(`http://localhost:5000/orders/${user?.email}`).then((res) =>
    //     res.json()
    //   )
    // );
  
    // if (isLoading || loading) {
    //   return <Loading></Loading>;
    // }
  
    return (
      <div className=" px-4 title1">
        <div>
          {myOrders?.length === 0 ? (
            <>
              <h1 className="  text-3xl font-semibold text-center my-10">
                You Have No Any Order
              </h1>
            </>
          ) : (
            <>
              <h1 className="  text-3xl font-semibold text-center my-10">
                My all Order Here (<span>{myOrders?.length}</span>)
              </h1>
            </>
          )}
        </div>
        <div>
          {myOrders?.length === 0 ? (
            <></>
          ) : (
            <>
              {myOrders?.map((orders) => (
                <Order key={orders._id} orders={orders}></Order>
              ))}
            </>
          )}
        </div>
      </div>
    );
  };

export default MyOrder;