import React from 'react'
import { useNavigate } from 'react-router-dom'


const address = [
    {
      "firstName": "John",
      "lastName": "Doe",
      "streetAddress": "123 Main St",
      "city": "Anytown",
      "country": "USA",
      "state": "California",
      "zipCode": "12345",
      "phone": "+1-123-456-7890"
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "streetAddress": "456 Elm St",
      "city": "Otherville",
      "country": "Canada",
      "state": "Ontario",
      "zipCode": "A1B 2C3",
      "phone": "+1-987-654-3210"
    },
    {
      "firstName": "Michael",
      "lastName": "Johnson",
      "streetAddress": "789 Oak Ave",
      "city": "Another City",
      "country": "UK",
      "state": "London",
      "zipCode": "SW1A 1AA",
      "phone": "+44-20-1234-5678"
    }
    // Add more objects as needed
  ];  

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
                {address?.length ? <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className=" text-gray-700 border-b dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-2 py-2">
                                    First Name
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    Last Name
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    Street Address
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    City
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    Country
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    State
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    Zip/Postal Code
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    Phone
                                </th>
                                <th scope="col" className="px-2 py-2">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {address.map((addInfo)=>{
                                return (
                                    <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-2 py-1">{addInfo.firstName}</td>
                                        <td className="px-2 py-1">{addInfo.lastName}</td>
                                        <td className="px-2 py-1">{addInfo.streetAddress}</td>
                                        <td className="px-2 py-1">{addInfo.city}</td>
                                        <td className="px-2 py-1">{addInfo.country}</td>
                                        <td className="px-2 py-1">{addInfo.state}</td>
                                        <td className="px-2 py-1">{addInfo.zipCode}</td>
                                        <td className="px-2 py-1">{addInfo.phone}</td>
                                        <td className="px-2 py-1">
                                            <button className="mr-2 hover:text-black">Edit</button>
                                            <button className="hover:text-black">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div> : 'No Additional Entries'}
            </div>
        </div>
        <button className='px-10 py-3 bg-black text-white hover:bg-blue-400 rounded-full' onClick={()=>{navigate('./edit/new')}}>Add New Address</button>
    </>
  )
}

export default AddressBook