import React, { useEffect, useState } from 'react'
import MyAccount from './scenes/MyAccount'
import MyOrders from './scenes/MyOrders';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUser } from '../../store/store';


function Account() {
    const token = useSelector((state)=>state?.token)
    const navigate = useNavigate();

    const SignInToast = ({ onNavigate }) => (
        <div>
          <button onClick={onNavigate} className='font-bold underline'>
            Sign In
          </button>
           &nbsp; First
        </div>
      );
    useEffect(()=>{
        if(!token){
            navigate('/');
            const handleNavigate = () => {
                navigate('/login');
                toast.dismiss('accountError');
            };
            toast.error(<SignInToast onNavigate={handleNavigate} />, {
                toastId: "accountError",
              });
        }
    },[token])

    const dispatch = useDispatch();
    
    const handleSignOut = ()=>{
        dispatch(
            setUser(
                {
                    user:null,
                    token:'',
                }
            )
        )
        toast.warn('Sign Out')
        navigate('/');
    }
  return (
    <>
        <div className=" h-32 max-sm:h-24  flex flex-col justify-center items-center ">
            <h1 className=" text-3xl font-bold">My Account</h1>
            <p>Home / My Account</p>
        </div>

        <div className="px-8 max-lg:px-2">
            <div className='flex max-lg:flex-col'>
                <div className="nav lg:w-3/12 max-lg:mb-10 lg:pr-10 ">
                    <div className='border'>
                        <ul className='p-5'>
                            <li className='my-1 font-semibold text-blue-500'><Link to='/account'>My Account</Link></li>
                            <li className='my-1 text-gray-500' ><Link to='./orders'>My Orders</Link></li>
                            <li className='my-1 text-gray-500' ><Link to='./wishlist'>My WishList</Link></li>
                            <li className='my-1 text-gray-500'><Link to='./address'>Address Book</Link></li>
                            <li className='my-1 text-gray-500'><Link to='./account/edit'>Account Information</Link></li>
                            <li className='my-1 text-gray-500' onClick={()=>handleSignOut()}>Sign Out</li>
                        </ul>
                    </div>
                </div>

                <div className='lg:pl-10 w-full justify-center'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}


export default Account