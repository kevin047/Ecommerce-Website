import React from "react";

function ProductInformation({info}) {

    return (
        <>
            <div className="overflow-auto">
                {/* <div className="text-lg my-2 uppercase">{productInfo?.productDetails?.productName}</div> */}
                {info?.map((productInfo)=>{
                    return (
                        <>
                        <table className="w-full text-sm max-sm:text-xs mb-2 table-fixed text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium capitalize text-gray-900 dark:text-white">
                                        {productInfo?.title}
                                    </td>
                                    <td className="px-6 py-4 text-wrap">{productInfo?.value}</td>
                                </tr>
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
