import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductReview({reviewDetails}) {
    const {id} = useParams();
    // Fetch review from id
    const {review} = useSelector((state)=>state.products)
    
    return (
        <>
            <div className="text-xl font-semibold py-2">Customer Reviews</div>
            <div className="text-md font-semibold mt-4 pb-2">Good Products</div>
            <div className="flex max-md:flex-col pb-6 border-b">
                <div className="md:mr-16 mb-6">
                    <table className="text-left w-fit text-nowrap">
                        <tr>
                            <th className="pr-3 text-gray-700 font-medium">
                                Quality:
                            </th>
                            <td>******</td>
                        </tr>
                        <tr>
                            <th className="pr-3 text-gray-700 font-medium">
                                Price:
                            </th>
                            <td>******</td>
                        </tr>
                        <tr>
                            <th className="pr-3 text-gray-700 font-medium">
                                Value for Money:
                            </th>
                            <td>******</td>
                        </tr>
                    </table>
                </div>
                <div className="w-full">
                    <ul>
                        {reviewDetails?.map((review)=>{
                            return (
                                <li className="pb-6 mb-6 border-b">
                                    <div className="pb-2 font-sans font-medium text-sm sm:text-base">
                                        {review?.reviewComment}
                                    </div>
                                    <div className="flex justify-between max-sm:flex-col text-xs sm:text-sm text-gray-600 italic">
                                        <div>Review by {review?.customerDetails?.customerName}</div>
                                        <div>Posted on {review?.ratingDate}</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="py-6">
                <div className="text-xl font-semibold py-4">
                    You're reviewing: Smart Watch Aluminum Case - Pride
                    Edition/41mm - S/M
                </div>
                <div className="text-md font-semibold mt-4 pb-2">
                    Your Rating *
                </div>
                <div>
                    <table className="text-left w-fit text-nowrap">
                        <tr>
                            <th className="pr-3 text-gray-700 font-medium">
                                Quality:
                            </th>
                            <td>******</td>
                        </tr>
                        <tr>
                            <th className="pr-3 text-gray-700 font-medium">
                                Price:
                            </th>
                            <td>******</td>
                        </tr>
                        <tr>
                            <th className="pr-3 text-gray-700 font-medium">
                                Value for Money:
                            </th>
                            <td>******</td>
                        </tr>
                    </table>
                </div>

                <div className="py-2">
                    <div className="flex flex-wrap -mx-3 mt-5 m-2">
                        <div className="w-full md:w-1/2 px-3 md:mb-0">
                            <label
                                className="tracking-wide mb-2"
                                htmlFor="grid-first-name"
                            >
                                Nick Name
                            </label>
                            <input
                                className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="tracking-wide mb-2"
                                htmlFor="grid-last-name"
                            >
                                Summary
                            </label>
                            <input
                                className="appearance-none rounded-full block w-full  text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="py-2">
                            <label
                                className="tracking-wide mb-2"
                                htmlFor="grid-first-name"
                            >
                                Review
                            </label>
                            <textarea className="w-full border h-[100px] rounded-3xl mt-2 p-3"></textarea>
                    </div>
                    <button className="bg-black text-white py-3 px-10 rounded-full">
                            Submit Review
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductReview;
