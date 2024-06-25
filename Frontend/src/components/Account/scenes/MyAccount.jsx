import React from "react";

function MyAccount() {
    return (
        <>
            <div className="border p-10 mb-10">
                <div className="text-2xl font-bold py-2">
                    Account Information
                </div>
                <div className="flex max-md:flex-col">
                    <div className="md:w-1/2 max-md:pb-5">
                        <div className="font-semibold py-1 text-lg">
                            Contact Information
                        </div>
                        <div className="py-2 tracking-wide">
                            <p>fname lname</p>
                            <p>abc@gmail.com</p>
                        </div>
                        <div className="flex text-sm">
                            <button className="mr-2">Edit</button>
                            <button>Change Password</button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="font-semibold py-1 text-lg">
                            Newsletters
                        </div>
                        <div className="py-2">
                            <p>You aren't subscribed to our newsletter.</p>
                        </div>
                        <div className="flex text-sm">
                            <button className="">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-10 mb-10">
                <div className="text-2xl font-bold py-2 text-pretty">
                    Address Book{" "}
                    <span className="text-sm tracking-wide font-normal">
                        Manage Address
                    </span>
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
                            <button className="mr-2">Edit Address</button>
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
                            <button className="mr-2">Edit Address</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-10 mb-10">
                <div className="text-2xl font-bold py-2 text-pretty">
                    Recent Orders <span className="text-sm tracking-wide font-normal">
                        View all
                    </span>
                </div>
                <div className="my-4">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class=" text-gray-700 border-b dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-2">
                                        Order#
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Ship To
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Order Total
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-2">12000000034</td>
                                    <td class="px-6 py-2">6/12/24</td>
                                    <td class="px-6 py-2">fname lname</td>
                                    <td class="px-6 py-2">$300.00</td>
                                    <td class="px-6 py-2">Pending</td>
                                    <td class="px-6 py-2">
                                        <button className="mr-2 hover:text-black">View Order</button>
                                        <button className="hover:text-black">Reorder</button>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-2">12000000034</td>
                                    <td class="px-6 py-2">6/12/24</td>
                                    <td class="px-6 py-2">fname lname</td>
                                    <td class="px-6 py-2">$300.00</td>
                                    <td class="px-6 py-2">Pending</td>
                                    <td class="px-6 py-2">
                                        <button className="mr-2 hover:text-black">View Order</button>
                                        <button className="hover:text-black">Reorder</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccount;
