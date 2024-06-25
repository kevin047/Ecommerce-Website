import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddressBook() {
    const navigate = useNavigate();

  return (
    <>
        <div className="border p-10 mb-10">
            <div className="text-2xl font-bold py-2 text-pretty">
                Default Addresses
            </div>
            <div className="flex max-md:flex-col">
                <div className="md:w-1/2 max-md:pb-5">
                    <div className="font-semibold py-1 text-lg">
                        Default Billing Address
                    </div>
                    <div className="py-2 tracking-wide">
                        <p>fname lname</p>
                        <p>abc@gmail.com</p>
                        <p>Address</p>
                        <p>City, State, Pincode</p>
                        <p>Country</p>
                        <p>
                            T: <a href="tel:+1234567890">1234567890</a>
                        </p>
                    </div>
                    <div className="flex text-sm">
                        <button className="mr-2" onClick={()=>{navigate(`./edit/${1}`)}}>Edit Address</button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="font-semibold py-1 text-lg">
                        Default Shipping Address
                    </div>
                    <div className="py-2 tracking-wide">
                        <p>fname lname</p>
                        <p>abc@gmail.com</p>
                        <p>Address</p>
                        <p>City, State, Pincode</p>
                        <p>Country</p>
                        <p>
                            T: <a href="tel:+1234567890">1234567890</a>
                        </p>
                    </div>
                    <div className="flex text-sm">
                        <button className="mr-2" onClick={()=>{navigate(`./edit/${1}`)}}>Edit Address</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="border p-10 mb-10">
            <div className="text-2xl font-bold py-2 text-pretty">
                Additional Address Entries
            </div>
            <div className="my-4">
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class=" text-gray-700 border-b dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-2 py-2">
                                    First Name
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    Last Name
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    Street Address
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    City
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    Country
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    State
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    Zip/Postal Code
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    Phone
                                </th>
                                <th scope="col" class="px-2 py-2">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-2 py-1">fname</td>
                                <td class="px-2 py-1">lname</td>
                                <td class="px-2 py-1">addresshufkdavnjdkavnjfkda</td>
                                <td class="px-2 py-1">city</td>
                                <td class="px-2 py-1">Country</td>
                                <td class="px-2 py-1">State</td>
                                <td class="px-2 py-1">Zip/Postal Code</td>
                                <td class="px-2 py-1">Phone</td>
                                <td class="px-2 py-1">
                                    <button className="mr-2 hover:text-black">Edit</button>
                                    <button className="hover:text-black">Delete</button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button className='px-10 py-3 bg-black text-white hover:bg-blue-400 rounded-full' onClick={()=>{navigate('./edit/new')}}>Add New Address</button>
    </>
  )
}

export default AddressBook