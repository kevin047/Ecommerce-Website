import React, { useEffect, useRef, useState } from 'react';
import { LuExpand } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { GoStack } from "react-icons/go";
import {
    MdFavoriteBorder,
    MdKeyboardArrowDown,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaShareAltSolid } from "react-icons/lia";
import ImageGallery from "react-image-gallery";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { addToCartApi } from '../../libs/apis';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose, productDetails }) => {
    console.log(productDetails,'hi')
    const user = useSelector((state)=>state?.user?.user);
    const token = useSelector((state)=>state?.token);
    // const [productDetails, setProductDetails]= useState({});
    const [variantTypes,setVariantTypes] = useState({});
    const [variantAttributes,setVariantAttributes] = useState([]);
    const [initialVariant, setInitialVariant] = useState([]);
    const [currVariant, setCurrVariant] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [variantDetails,setVariantDetails] = useState({});
    const [variantCheck,setVariantCheck] = useState({});
    const [images,setImages] = useState([]);
    // console.log(productDetails)
    useEffect(()=>{
            let product = {...productDetails};
            let variantObj={};
            let attribute = [];
            let variantChecks = {};
            product?.attributes?.forEach((variant)=>{
                if(!variantObj[variant.name]){
                    attribute.push(variant.name);
                    variantObj[variant.name] = [variant.value]
                }
                else{
                    variantObj[variant.name].push(variant.value);
                }
            })

            product?.variants?.forEach((variant)=>{
                let key = variant.variantkey;
                if(!variant.variantkey.startsWith(variant.attributeDetails.value)){
                    key = variant.attributeDetails.value + '-' + key;
                }
                
                // Make a variantCheck 
                variantChecks[key] = true;
                // console.log(variantCheck,'here')
                key = key.split('-');
                let checker = '';
                for(let i=0;i<key.length;i++){
                    
                    if(i>0){
                        if(i==1) checker = key[i-1];
                        else{
                            checker = checker+'-'+key[i-1];
                        }
                    }
                    // console.log(checker,'x')
                    if(!variantChecks[checker]){
                        variantChecks[checker] = new Set();
                    }
                    variantChecks[checker].add(key[i]);
                    // console.log(variantChecks,'y');
                }
                
                setVariantCheck(()=>variantChecks);
            })
            setAttributes(attribute);

            const mainAttribute = product?.variants?.[0]?.attributeDetails?.value;
            const variantKey = (!product?.variants?.[0]?.variantkey.startsWith(mainAttribute) ? mainAttribute+'-' : '') + product?.variants?.[0]?.variantkey;
            let initialVari = [...variantKey?.split('-')];
            // console.log(initialVari,'key')
            setInitialVariant(initialVari);
            setCurrVariant(initialVari);
            // console.log(variantObj);
            setVariantTypes(variantObj);
            setVariantAttributes(attributes);
            // setProductDetails({...product,
            //     variantObj: variantObj,
            // });

            setImages(()=>JSON.parse(product?.productGallery || "[]").map((imgURL)=>{
                return (
                    {
                        original: `${imgURL}`,
                        thumbnail: `${imgURL}`,
                    }
                )
            }))
            // console.log(productDetails)
    },[productDetails])

    useEffect(()=>{
        if(!currVariant) return;
        let variantKey = [...currVariant].join('-');
        let vardetails;
        productDetails?.variants?.map((variant)=>{
            let key = variant.variantkey;
            if(!variant.variantkey.startsWith(variant.attributeDetails.value)){
                key = variant.attributeDetails.value + '-' + key;
            }
            if(key===variantKey){
                vardetails = {...variant};
            }
        })
        if(vardetails){
            // vardetails?.variantImageGallery = eval(vardetails?.variantImageGallery);
            setVariantDetails(()=>vardetails);
            const images=[
                {
                    original: `${vardetails?.variantImage}`,
                    thumbnail: `${vardetails?.variantImage}`,
                },
                ...eval(vardetails?.variantImageGallery).map((imgURL)=>{
                    return (
                        {
                            original: `${imgURL}`,
                            thumbnail: `${imgURL}`,
                        }
                    )})
            ];
            setImages(images);
        }
        
    },[currVariant])

    const handleVariant = (value,index)=>{
        setCurrVariant((curr)=>{
            let currVar = [...curr];
            currVar[index]=value;
            if(!variantCheck[currVar.join('-')]){
                console.log(currVar,'hey899')
                const variants = Object.keys(variantCheck);
                for(const variant of variants){
                    if(variant.length>0 ){
                        // console.log(variant)
                        let flag=true;
                        for(let i=0;i<=index;i++){
                            // console.log(variant.split('-')?.[i],'c',currVar[i],i);
                            if(variant.split('-')?.[i]!=currVar[i]){
                                flag=false; 
                            }
                        }
                        // console.log('hey')
                        if(flag){
                            currVar = [...variant.split('-')];
                            break;
                        }
                        
                    }
                }
            }
            // console.log(currVar.join('-'));
            return currVar;
        })
    }

    const handleCart = async ()=>{
        if(!user){
            toast.error('Please Sign In');
            return;
        }
        let variantKey;
        if(Object.keys(variantTypes).length<=2){
            variantKey = currVariant.join('-');
        }
        else{
            variantKey = currVariant.slice(1).join('-');
            
        }
        const selectedVariant = productDetails?.variants?.filter((variant)=>{
            // console.log(variant.variantkey,'x',variantKey);
            return variant.variantkey==variantKey;
        })?.[0];

        let formData = new FormData();
        formData.append("customerId", user?.id);
        formData.append("clientId", import.meta.env.VITE_Client_Id);
        formData.append("productId", productDetails?.id);
        formData.append(
        "productAttributeId",
        selectedVariant?.attributeDetails?.id
        );
        formData.append("productVariantId", selectedVariant?.id);
        formData.append("qty", quantity);
        formData.append("created_by", "");
        formData.append("updated_by", "");

        const addToCart = await addToCartApi(formData,token);
        if(addToCart?.status){
            toast.success(addToCart?.message);
            console.log(addToCart);
        }
    }

    const modalRef = useRef(null);
    const closeRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef?.current?.contains(e.target) || closeRef && closeRef?.current?.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div ref={modalRef} className="bg-white relative rounded-lg z-40 max-w-[80vw] overflow-auto mx-auto p-4">
                <button ref={closeRef} className="absolute shadow-m bg-white rounded-full z-50 top-0 right-0">
                    <svg
                        className="h-6 w-6  cursor-pointer hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <div className="flex flex-wrap py-2 px-1 max-h-[70vh]">
                    
                    <div className="flex sm:w-1/2 ">
                        <div className="w-full relative sm:mr-10 max-sm:pb-6 border-b">
                            <ImageGallery items={images} disableThumbnailScroll={true} thumbnailPosition={'left'} showPlayButton={false} />
                        </div>
                    </div>
                    <div className="sm:w-1/2 px-2 max-h-[70vh] overflow-y-scroll">
                        <div className=" text-3xl font-semibold tracking-wide">
                            {productDetails?.productName}
                        </div>
                        <div className="my-3 text-sm flex py-1 items-center">
                            {productDetails?.averageRatingsDetails?.map((ratingDetails)=>{
                                const avgRating = ratingDetails.averageRating;
                                const ratings = [1,2,3,4,5];
                                const fill = Math.floor(avgRating);
                                const Hfill = Math.ceil(avgRating)-fill;
                                const Nofill = 5-fill-Hfill;
                                // console.log(fill,Hfill,Nofill)
                                return ratings.map((_,index)=>{
                                    if(index<fill){
                                        return (<RiStarFill />)
                                    }
                                    else if(index<fill+Hfill){
                                        return (<RiStarHalfFill />)
                                    }
                                    else{
                                        return (<RiStarLine />)
                                    }
                                })})}
                            
                            <span className="mx-3 text-gray-500 tracking-wide">{productDetails?.averageRatingsDetails?.[0]?.averageRating}</span>
                            <span className="text-gray-500">Add Your Review</span>
                        </div>
                        <div className="flex flex-wrap items-baseline font-semibold ">
                            <div className="text-3xl text-blue-400 mr-3">
                                ${productDetails?.minSalePrice}
                            </div>
                            <div className="text-gray-400 line-through text-xl">
                                ${productDetails?.saleStartsAt}
                            </div>
                        </div>

                        <div className="description my-3 text-gray-700" dangerouslySetInnerHTML={{__html:JSON?.parse(productDetails?.productDescription || "[]")}} />

                        <div className="py-5 border-b">
                            {attributes?.map((name,index)=>{
                                return (<div className="flex flex-row my-2 items-center">
                                    <div className="mr-5">{name} : </div>
                                    <div className="flex flex-wrap items-center">
                                    {
                                        variantTypes[name].map((value)=>{
                                            // console.log(value,'->',currVariant)
                                            let variantList = [...currVariant].slice(0,index).join('-');
                                            // console.log(variantList,'8908hello');
                                            // console.log(variantList,'---->',variantCheck[variantList]);
                                            let contains = variantCheck[variantList]?.has(value);
                                            return (
                                                <span className={`mx-1 my-1 text-black text-wrap border px-1 py-1 ${value===currVariant?.[index] ? 'bg-black text-white': ''} ${!contains ? ' bg-gray-200 cursor-not-allowed': 'cursor-pointer'}`} onClick={()=>{contains && handleVariant(value,index)}}>{value}</span>
                                            )
                                        })
                                    }
                                    </div>
                                </div>)
                            })}
                        </div>

                        <div className="flex my-4">
                            <div className="flex p-3 bg-gray-200 rounded-full mr-3">
                                <button className="" onClick={()=>{setQuantity((qty)=> qty==1 ? qty : qty-1)}}>
                                    <FiMinus />
                                </button>
                                <span className="mx-6">{quantity}</span>
                                <button onClick={()=>{setQuantity((qty)=>qty+1)}}>
                                    <IoMdAdd />
                                </button>
                            </div>
                            <button className="block bg-black text-white w-full rounded-full" onClick={()=>handleCart()}>
                                Add to Cart
                            </button>
                        </div>

                        <div className="my-3 py-2">
                            <button className="block w-full rounded-full p-3 bg-blue-400 text-white">
                                Buy it Now
                            </button>
                        </div>

                        <div className="py-4 border-b">
                            <table className="text-left table-auto">
                                <tbody>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            Availibity:
                                        </th>
                                        <td>{productDetails?.stockStatus}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            SKU:
                                        </th>
                                        <td>{productDetails?.sku}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            Categories:
                                        </th>
                                        <td>
                                            {productDetails?.mainCategoryDetails?.mainCategoryName}, {' '} 
                                            {productDetails?.categoryDetails?.categoryName}, {' '}
                                            {productDetails?.subCategoryDetails?.subCategoryName}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="py-6">
                            <table className="text-left table-auto">
                                <tbody>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            <TbTruckDelivery
                                                className="inline mr-1"
                                                size={18}
                                            />
                                            Estimated Delivery:
                                        </th>
                                        <td>10 - 20 Jun, 2024</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            <LiaShareAltSolid
                                                className="inline mr-1"
                                                size={18}
                                            />
                                            Free Shipping & Returns:
                                        </th>
                                        <td>On all orders above $350</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <fieldset className="border flex justify-center p-3">
                                <legend
                                    align="center"
                                    className="px-2 font-semibold"
                                >
                                    Guarantee Safe Checkout
                                </legend>
                                <img
                                    className=" "
                                    src="https://umino.bersky.co/media/wysiwyg/payment.png"
                                    alt=""
                                    title=""
                                    width="331"
                                    height="26"
                                    data-element="desktop_image"
                                    data-pb-style="Y9YMDHF"
                                ></img>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Modal;
