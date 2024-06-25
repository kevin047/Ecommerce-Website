import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
  return (
    <>
        <div className=" h-32 max-sm:h-24  flex flex-col justify-center items-center ">
            <h1 className=" text-3xl font-bold">Customer Login</h1>
            <p>Home / Customer Login</p>
        </div>

        <div className="flex max-md:flex-col lg:px-24 px-10">
            <div className="md:w-1/2 md:pr-10 max-md:py-10">
                <div className='text-2xl font-semibold py-2 '>Registered Customers</div>
                <p className='text-sm text-gray-600 py-2'>If you have an account, sign in with your email address.</p>
                <form className="space-y-4 md:space-y-6 py-4" action="#">
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            Email *
                        </label>
                        <input type='email' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>
                    <div>
                        <label
                            className="mb-2 text-base"
                            htmlFor="grid-first-name"
                        >
                            Password *
                        </label>
                        <input type='password' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
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
                        <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline "
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button type='submit' className="w-full py-3 rounded-full bg-black text-white hover:bg-blue-400 font-semibold transition duration-300 ease-in border border-gray-400">
                        Sign In
                    </button>
                    <p className="text-sm font-light text-gray-500 ">
                        Don't have an account yet?{" "}
                        <Link
                            to='/create'
                            className="font-medium text-primary-600 hover:underline "
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>

            <div className="md:w-1/2 md:pl-10">
                <div className='text-2xl font-semibold py-2 '>Create an Account</div>
                <p className='text-sm text-gray-600 py-2'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails. </p>
                
                <button type='submit' onClick={()=>navigate('/create')} className="w-full my-6 py-3 rounded-full bg-black text-white hover:bg-blue-400 font-semibold transition duration-300 ease-in border border-gray-400">
                    Create an Account
                </button>
            </div>

        </div>
    </>
  )
}

export default Login