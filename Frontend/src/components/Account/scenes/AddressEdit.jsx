import React from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddressEdit() {

    const {id} = useParams();
    const location = useLocation();
    const isNew = location.pathname.endsWith('new');
    console.log(isNew);
  return (
    <>
        <div className="border p-10 mb-10">
            <div className="py-2 font-normal text-base">
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
                        Company
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        Street Address
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        Country
                    </label>
                    <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                        <option value="">
                            India
                        </option>
                        <option value="">
                            America
                        </option>
                    </select>

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        State/Province
                    </label>
                    <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                        <option value="">
                            Gujarat
                        </option>
                        <option value="">
                            Madhya Pradesh
                        </option>
                    </select>

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        City
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        Zip/Postal Code
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <label
                        className="mb-2"
                        htmlFor="grid-first-name"
                    >
                        Phone Number
                    </label>
                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                    <div>
                        <input type="checkbox" className='mr-2'/>
                        <label htmlFor="default-shipping-address">Set as Default Shipping Address</label>
                    </div>
                    <div className='my-1'>
                        <input type="checkbox" className='mr-2'/>
                        <label htmlFor="default-shipping-address">Set as Default Billing Address</label>
                    </div>
                </div>
                <button className='px-10 py-3 bg-black text-white hover:bg-blue-400 rounded-full my-3'>Save Address</button>
            </div>
        </div>
    </>
  )
}

export default AddressEdit