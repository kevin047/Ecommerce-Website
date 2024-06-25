import React from "react";

function ProductInformation({info}) {

    return (
        <>
            <div className="relative overflow-scroll">
                {Object.entries(info).map((category)=>{

                    return (
                        <>
                        <div className="text-lg my-2 uppercase">{category[0]}</div>
                        <table className="w-full text-sm max-sm:text-xs mb-2 text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                {Object.entries(category[1]).map((value)=>{
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium capitalize text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {value[0]}
                                        </th>
                                        <td className="px-6 py-4 text-wrap">{value[1]}</td>
                                    </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                        </>
                    )
                })}
                
            </div>
        </>
    );
}

export default ProductInformation;
