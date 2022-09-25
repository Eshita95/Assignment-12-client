import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';
import profile from '../../Assets/Image/profile.jpg';

const SignUp = () => {
  const [imgUrl, setImgUrl] = useState(profile);
  const [imageUrl, setImageUrl] = useState();
  const [fromData, setFromData] = useState();
  const [Name, setName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [passCFocus, setPassCFocus] = useState(false);

  const [createUserWithEmailAndPassword, CrUser, CLoading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  const [user, loading] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if ((loading, CLoading)) {
    return <Loading></Loading>;
  }

  const imageStorageKey = "554340da0ae4107e57d6910247c7dbb5";

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgUrl(URL.createObjectURL(file));

    const image = file;
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    setFromData(formData);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const email = data.userEmail;
    const displayName = data.userName;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image", result);
        setImageUrl(result.data.display_url);

        const user = {
          email,
          displayName,
          photoURL: result.data.display_url,
        };

        if (result.data.display_url) {
          updateProfile({
            displayName: displayName,
            photoURL: result.data.display_url,
          });

          fetch(`https://assignment-12-server-g2z9.vercel.app/user/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          });
        }
      });
  };

  return (
    <div className="  px-10 lg:px-10 ">
      {/* <div className="lg:flex-1 lg:flex hidden">
        <img
          src={"https://www.cssscript.com/demo/login-page-template/img/bg.svg"}
          alt=""
          className=" lg:w-full"
        />
      </div> */}
      <div className="flex-1 mt-16 text-center">
        <div className=" w-full md:w-[500px] lg:w-[350px] mx-auto">
          <div>
            <h2 class=" mb-8 text-3xl font-bold ">Please Register</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className=" text-gray-500 ">
            <div class=" my-6">
              <div class="w-36 mb-8 mx-auto relative">
                <div class="avatar w-36 h-36 mx-auto ">
                  <img src={imgUrl} className="rounded-full" />
                </div>
                <div className="absolute bottom-14 right-8 w-16">
                  <i class="fa-solid fa-camera ml-7 text-gray-400 text-[32px] absolute"></i>
                  <input
                    type="file"
                    onChange={onImageChange}
                    className="absolute w-full lg:scale-150 opacity-0"
                  />
                </div>
              </div>

              <div class="div relative">
                <input
                  type="text"
                  onFocus={() => setName(true)}
                  onBlurCapture={() => setName(false)}
                  placeholder="User Name"
                  {...register("userName", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${errors.userName?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                    }`}
                />
                <div
                  class={`${errors.userName?.type ? "text-red-600" : "border-gray-400"
                    } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-user text-[16px] ${Name && " text-success"
                      } ${errors.userName?.type === "required" && "text-red-600"
                      }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class=" my-6">
              <div class="div relative">
                <input
                  type="email"
                  onFocus={() => setEmailFocus(true)}
                  onBlurCapture={() => setEmailFocus(false)}
                  placeholder="User Email"
                  {...register("userEmail", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${errors.userEmail?.type
                      ? "border-red-600"
                      : "border-gray-400"
                    }`}
                />
                {/* <p className=" text-base font-[600] text-red-600">
                    {errors.password?.type === "required" &&
                      "password is required"}
                  </p> */}
                <div
                  class={`${errors.userEmail?.type ? "text-red-600" : "border-gray-400"
                    } absolute top-2 left-3 `}
                >
                  <i
                    class={` fa-sharp fa-solid fa-envelope text-[16px] ${emailFocus && " text-success"
                      }  ${errors.userEmail?.type === "required" && "text-red-600"
                      }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class=" mt-5 mb-5">
              <div class="div relative">
                <input
                  type="password"
                  onFocus={() => setPassFocus(true)}
                  onBlurCapture={() => setPassFocus(false)}
                  placeholder="Type Password"
                  {...register("password", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${errors.password?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                    }`}
                />
                <div
                  class={`${errors.password?.type ? "text-red-600" : "border-gray-400"
                    } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-lock text-[16px] ${passFocus && " text-success"
                      } ${errors.password?.type === "required" && "text-red-600"
                      }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class=" mt-5 mb-5">
              <div class="div relative">
                <input
                  type="password"
                  onFocus={() => setPassCFocus(true)}
                  onBlurCapture={() => setPassCFocus(false)}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${errors.confirmPassword?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                    }`}
                />
                <div
                  class={`${errors.confirmPassword?.type
                      ? "text-red-600"
                      : "border-gray-400"
                    } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-lock text-[16px] ${passCFocus && " text-success"
                      } ${errors.confirmPassword?.type === "required" &&
                      "text-red-600"
                      }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class="my-3 text-right font-medium text-gray-400"></div>

            <div>
              <input
                type="submit"
                class="btn bg-pink-600 hover:bg-pink-700 border-0 w-full text-white font-bold text-lg rounded-full my-3"
                value="Register"
              />
            </div>
          </form>

          <div className=" my-3 font-semibold">
            <p>
              Already Registered?
              <Link
                to="/login"
                className=" my-3 font-bold mx-1 text-pink-600 cursor-pointer"
              >
                Login Now
              </Link>
            </p>
          </div>

          <div class="divider my-5 font-semibold text-gray-400">OR</div>

          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;