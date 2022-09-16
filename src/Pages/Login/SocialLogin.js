import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import google from '../../Assets/Icon/google.jpg';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, GLoading, error] = useSignInWithGoogle(auth);
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className=" text-center flex items-center justify-around my-8">
            <button onClick={() => signInWithGoogle()}>
                <img src={google} alt="" className=" w-8" />{" "}
            </button>

        </div>
    );
};
export default SocialLogin;