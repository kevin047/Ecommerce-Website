import React, { useEffect, useState } from 'react'

function MyOrders() {

    const [isMediumOrLarger, setIsMediumOrLarger] = useState(
        window.innerWidth >= 640
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMediumOrLarger(window.innerWidth >= 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
        <div className="overflow-x-auto">
            {isMediumOrLarger &&  
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-gray-700 border dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-2 border">
                            Order#
                        </th>
                        <th scope="col" class="px-6 py-2 border">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-2 border">
                            Ship To
                        </th>
                        <th scope="col" class="px-6 py-2 border">
                            Order Total
                        </th>
                        <th scope="col" class="px-6 py-2 border">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-2 border">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-2 border">12000000034</td>
                        <td class="px-6 py-2 border">6/12/24</td>
                        <td class="px-6 py-2 border">fname lname</td>
                        <td class="px-6 py-2 border">$300.00</td>
                        <td class="px-6 py-2 border">Pending</td>
                        <td class="px-6 py-2 border">
                            <button className="mr-2 hover:text-black">View Order</button>
                            <button className="hover:text-black">Reorder</button>
                        </td>
                    </tr>
                    <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-2 border">12000000034</td>
                        <td class="px-6 py-2 border">6/12/24</td>
                        <td class="px-6 py-2 border">fname lname</td>
                        <td class="px-6 py-2 border">$300.00</td>
                        <td class="px-6 py-2 border">Pending</td>
                        <td class="px-6 py-2 border">
                            <button className="mr-2 hover:text-black">View Order</button>
                            <button className="hover:text-black">Reorder</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>}

            {!isMediumOrLarger && 
                <>
                    <div className="flex flex-col">
                        <table class="w-full my-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody class="text-gray-700 border dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-2 border">
                                        Order#
                                    </th>
                                    <td class="px-6 py-2 border">12000000034</td>
                                </tr>
                                <tr>
                                    <th scope="col" class="px-6 py-2 border">
                                        Date
                                    </th>
                                    <td class="px-6 py-2 border">6/12/24</td>
                                </tr>
                                <tr>
                                    <th scope="col" class="px-6 py-2 border">
                                        Ship To
                                    </th>
                                    <td class="px-6 py-2 border">fname lname</td>
                                </tr>
                                <tr>
                                    <th scope="col" class="px-6 py-2 border">
                                        Order Total
                                    </th>
                                    <td class="px-6 py-2 border">$300.00</td>
                                </tr>
                                <tr>
                                    <th scope="col" class="px-6 py-2 border">
                                        Status
                                    </th>
                                    <td class="px-6 py-2 border">Pending</td>
                                </tr>
                                <tr>
                                    <th scope="col" class="px-6 py-2 border">
                                        Action
                                    </th>
                                    <td class="px-6 py-2 border">
                                        <button className="mr-2 hover:text-black">View Order</button>
                                        <button className="hover:text-black">Reorder</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            }

        </div>
    </>
  )
}

export default MyOrders