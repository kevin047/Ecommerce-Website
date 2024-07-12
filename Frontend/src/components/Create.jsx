import React, { useRef, useState } from 'react'
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

import { customerSignUpApi, getProductbyIdApi } from '../../libs/apis';
import { useSelector } from 'react-redux';

function Create() {
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const token = useSelector((state)=>state.token);
    const navigate = useNavigate();

    const handleSignUp = async ()=>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
        if(nameRef.current.value.length<=3){
            toast.error("Enter Name correctly");
        }
        else if(!passwordRegex.test(password)){
            toast.error('Enter password correctly')
        }
        else if(!emailPattern.test(emailRef.current.value)){
            toast.error('Enter email correctly')
        }
        else if(password!=confirmPassword){
            toast.error('Password not matching')
        }
        else{
            let formData = new FormData();
            formData.append('customerName',nameRef.current.value);
            formData.append("customerEmail", emailRef.current.value);
            formData.append("password", password);
            formData.append("clientId", import.meta.env.VITE_Client_Id);
            formData.append("created_by", "Customer");

            const registerUser = await customerSignUpApi(formData,token);
            if(registerUser?.status){
                toast.success('SignUp Successful')
                navigate('/login');
                
            }
            else{
                toast.error('SignUp Failed')
            }
        }
    }

  return (
    <>
        <div className=" h-32 max-sm:h-24  flex flex-col justify-center items-center ">
            <h1 className=" text-3xl font-bold">Customer Login</h1>
            <p>Home / Create Account</p>
        </div>

        <div className="flex max-md:flex-col lg:px-24 px-10">
            <div className="md:w-1/2 md:pr-10 max-md:py-10">
                <div className='text-2xl font-semibold py-2 '>Personal Indivation</div>
                <div className="space-y-4 md:space-y-6 py-4" action="#">
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            First Name *
                        </label>
                        <input ref={nameRef} type='text' required className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            Last Name *
                        </label>
                        <input type='text' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>
                    <div className="">
                        <div className="flex items- py-1">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember-1"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                    required=""
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="remember"
                                    className="text-gray-500 "
                                >
                                    Sign up for Newsletter
                                </label>
                            </div>
                        </div>
                        <div className="flex items-start py-1">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember-2"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                    required=""
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="remember"
                                    className="text-gray-500 "
                                >
                                    Allow remote shopping assistance
                                </label>
                            </div>
                        </div>
                        <p className="text-sm font-light text-gray-500 my-2">
                                Already have an account?{" "}
                                <Link
                                    to='/login'
                                    className="font-medium text-primary-600 hover:underline "
                                >
                                    Sign in
                                </Link>
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="md:w-1/2 md:pl-10">
            <div className='text-2xl font-semibold py-2 '>Sign-in Indivation</div>
                <div className="space-y-4 md:space-y-6 py-4" action="#">
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            Email *
                        </label>
                        <input ref={emailRef} type='email' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            Password *
                        </label>
                        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                        <PasswordStrengthBar password={password} />
                    </div>
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            Confirm Password *
                        </label>
                        <input type='password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}  className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>
                    <div className="">
                        <div className="flex items- py-1">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                    required=""
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="remember"
                                    className="text-gray-500 "
                                >
                                    Show Password
                                </label>
                            </div>
                        </div>
                        
                        <button onClick={()=>handleSignUp()} className="w-full my-6 py-3 rounded-full bg-black text-white hover:bg-blue-400 font-semibold transition duration-300 ease-in border border-gray-400">
                            Create an Account
                        </button>
                    </div>
                    
                </div>
            </div>

        </div>
        
    </>
  )
}

export default Create