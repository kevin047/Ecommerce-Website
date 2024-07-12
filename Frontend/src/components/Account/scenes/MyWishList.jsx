import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';
import { GoStack } from 'react-icons/go';
import { HiOutlineEye } from 'react-icons/hi2';
import { MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function MyWishList() {
    const {details} = useSelector((state)=>state.products);
    const navigate = useNavigate();
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {/* {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} product={productModal}/>} */}
            { details.slice(0,3).map((product)=>{
                return (
                    <>
                    
                    <div className="flex flex-col items-center place-items-center my-2 mx-auto  sm:w-[340px] max-sm:w-auto px-1">
                        <div className='h-auto w-auto relative group overflow-hidden cursor-pointer' onClick={()=>navigate(`/products/${product.productId}`)}>
                            <img className='pointer-events-none' src={`${product.images.main}`} alt=""/>
                            {/* <div className="absolute h-full flex flex-col top-0 right-0 opacity-0  group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                <button className="mb-1 mt-6 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Cart" onClick={(event)=>{handleCart(event,product)}}><FiShoppingBag /></button>
                                <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Wishlist"><MdFavoriteBorder /></button>
                                <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Compare"><GoStack /></button>
                                <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Quick View" onClick={(event)=>{openModal(event,product)}}><HiOutlineEye /></button>
                            </div> */}
                            <div className="absolute top-1 left-1">
                                <span className='rounded-full bg-blue-400 text-white font-semibold  px-2 py-0.5 text-sm'>-{product.discountPercentage}%</span>
                            </div>
                        </div>
                        <div className='flex flex-col w-full justify-between justify-items-start flex-1'>
                            {/* <div className='text-gray-400 text-xs uppercase tracking-wide font-semibold'>{product.brand}</div> */}
                            <div className='text-sm tracking-wide cursor-pointer' onClick={()=>navigate(`/products/${product.productId}`)}>{product.name}</div>
                            <div>***** {product.rating}</div>
                            <div className='text-lg flex flex-wrap items-baseline'>
                                <div>${product.discountedPrice}</div>
                                <div className='text-sm text-gray-500 font-semibold line-through px-2'>${product.price}</div>
                            </div>
                            <Link to={`/products/${product.productId}`} className='text-sm tracking-wide text-gray-500'>See Details</Link>
                            <textarea name="" id="" className='p-3 my-2 border' placeholder='Comment'></textarea>

                            <button className="bg-black text-white w-full py-2 rounded-full my-1" onClick={()=>handleCart()}>
                                Add to Cart
                            </button>
                            <button className='text-sm tracking-wide text-gray-500 w-fit'>Remove item</button>
                        </div>
                    </div>
                    </>
                )
                }) 
            }

            
            
        </div>
    </>
  )
}

export default MyWishList