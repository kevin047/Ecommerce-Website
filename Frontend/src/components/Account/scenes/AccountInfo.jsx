import React, { useState } from 'react'

function AccountInfo() {
    const [changeEmail,setChangeEmail] = useState(false);
    const [changePassword,setChangePassword] = useState(false);

  return (
    <>
        <div className="border p-10 mb-10">
            <div className="text-2xl font-bold py-2 text-pretty">
                Account Information
            </div>
            <div className="py-4 font-normal text-base">
                <div className="font-normal">
                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        First Name
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        Last Name
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        Phone Number
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <div className='mt-6'>
                        <input type="checkbox"  className='mr-2' value={changeEmail} onChange={(e)=>{setChangeEmail(e.target.checked)}}/>
                        <label htmlFor="default-shipping-address">Change Email</label>
                    </div>
                    <div className='my-2'>
                        <input type="checkbox" className='mr-2' value={changePassword} onChange={(e)=>{setChangePassword(e.target.checked)}} />
                        <label htmlFor="default-shipping-address">Change Password</label>
                    </div>


                    { changeEmail|changePassword ? <div className="my-10">
                        <div className="text-2xl font-bold py-2 text-pretty">
                            Change {changeEmail ? 'Email':'' } {changeEmail&changePassword ? 'and':'' } {changePassword ? 'Password':'' }
                        </div>
                    </div>:''}

                    {changeEmail && <div className="change-email">
                        <label
                            className="mb-2"
                            htmlFor="grid-first-name"
                        >
                            New Email
                        </label>
                        <input type='email' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                        <label
                            className="mb-2"
                            htmlFor="grid-first-name"
                        >
                            Current Password
                        </label>
                        <input type='password' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    </div>}

                    {changePassword && <div className="change-password">

                        { !changeEmail&changePassword ? 
                            <>
                                <label
                                    className="mb-2"
                                    htmlFor="grid-first-name"
                                >
                                    Current Password
                                </label>
                                <input type='password' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                            </>
                            :''
                        }

                        <label
                            className="mb-2"
                            htmlFor="grid-first-name"
                        >
                            New Password
                        </label>
                        <input type='password' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                        
                        <label
                            className="mb-2"
                            htmlFor="grid-first-name"
                        >
                            Confirm New Password
                        </label>
                        <input type='password' className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    </div>}


                </div>
                <button className='px-10 py-3 bg-black text-white hover:bg-blue-400 rounded-full my-3'>Save Address</button>
            </div>
        </div>
    </>
  )
}

export default AccountInfo