import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    const [currentRatings, setCurrentRatings] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
  
    const reviewDate = new Date().toString();
  
    const newDate = reviewDate.slice(0, 16);
  
    // const reviewDate = new Date().toString().slice(0, 16);
  
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const ratings = ["1", "2", "3", "4", "5"];
  
    const handleClick = (value) => {
      setCurrentRatings(value);
      // console.log(currentRatings);
    };
    const handleMouseHover = (value) => {
      setHoverValue(value);
      // console.log(hoverValue);
    };
    const handleMouseLave = (value) => {
      setHoverValue(undefined);
      // console.log(hoverValue);
    };
  
    const onSubmit = async (data) => {
      const ReviewAdd = {
        userName: user.displayName,
        userEmail: user.email,
        userImg: user.photoURL,
        reviewDate: newDate,
        reviewHeading: data.heading,
        userReviews: data.reviews,
        ratings: currentRatings,
      };
      fetch(`https://assignment-12-server-g2z9.vercel.app/review`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ReviewAdd),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success(" Thanks for  your important review");
        });
    };
  
    return (
      <div className=" shadow-2xl my-4 w-6/12 mx-auto rounded-md p-10">
        <div className="my-8 title1 text-4xl text-center font-bold text-gray-700">
          <h1> Please give us your reviews</h1>
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  */}
          {/*  */}
          <div className="my-8">
            <span className="  text-3xl flex justify-center gap-14">
              {ratings.map((r, index) => (
                <li key={index} className=" list-none">
                  <i
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseHover(index + 1)}
                    onMouseLeave={() => handleMouseLave()}
                    class={` fa-star ${
                      (hoverValue || currentRatings) > index
                        ? "text-orange-500 fa-solid"
                        : "text-gray-400 fa-solid"
                    }    `}
                  ></i>
                </li>
              ))}
  
              {/* <i class=" fa-star"></i> */}
              {/* <i class="fa-solid fa-star-half-stroke"></i> */}
            </span>
          </div>
  
          <div className=" justify-between">
            {/*  */}
            <div className=" my-3">
              <label class="label">
                <span class="label-text text-lg font-medium">Heading:</span>
              </label>
              <input
                type="text"
                placeholder="Heading"
                {...register("heading", { required: true })}
                class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
              />
            </div>
          </div>
  
          <div className=" my-3">
            <label class="label">
              <span class="label-text text-lg font-medium">Reviews:</span>
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              type="text"
              placeholder=" White Here Your Reviews . . ."
              {...register("reviews", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
            ></textarea>
          </div>
  
          {/*  */}
          <div className=" text-center">
            <input
              type="submit"
              value="Submit Review"
              className=" btn m-2 px-10 w-full  border-0 text-white bg-orange-400 hover:bg-orange-500"
            />
          </div>
        </form>
      </div>
    );
  };

export default AddReview;