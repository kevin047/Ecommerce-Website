import React, { useEffect, useMemo, useState } from "react";
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
import ProductDetails from "../scenes/ProductDetails";
import ProductInformation from "../scenes/ProductInformation";
import ProductReview from "../scenes/ProductReview";
import AboutBrand from "../scenes/AboutBrand";
import ProductShipping from "../scenes/ProductShipping";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/store";

import ImageGallery from "react-image-gallery";
import "./Product.css";
import ReactImageMagnify from 'react-image-magnify';
import { addToCartApi, getProductbyIdApi } from "../../libs/apis";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { toast } from 'react-toastify';

function Product() {
    const user = useSelector((state)=>state.user.user);
    const token = useSelector((state)=>state.token);
    const navigate = useNavigate();
    const {id} = useParams();
    const {details} = useSelector((state)=>state.products);
    let product = details.filter((product)=>product.productId=='P002')[0];
    const dispatch = useDispatch();

    const [productDetails, setProductDetails]= useState({});
    const [variantTypes,setVariantTypes] = useState({});
    const [variantAttributes,setVariantAttributes] = useState([]);
    const [initialVariant, setInitialVariant] = useState([]);
    const [currVariant, setCurrVariant] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [variantDetails,setVariantDetails] = useState({});
    const [variantCheck,setVariantCheck] = useState({});
    const [images,setImages] = useState([]);

    console.log(productDetails);
    const getProductDetails = useMemo(async ()=>{
        let productId = id;
        try{
            let formData = new FormData();
            formData.append("productId",productId)
            let fullProductDetails = await getProductbyIdApi(formData);
            if(fullProductDetails?.status){
                let product = fullProductDetails?.productList?.[0];
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
                setProductDetails({...product,
                    variantObj: variantObj,
                });

                setImages(()=>JSON.parse(product?.productGallery || "[]").map((imgURL)=>{
                    return (
                        {
                            original: `${imgURL}`,
                            thumbnail: `${imgURL}`,
                        }
                    )
                }))
                // console.log(productDetails)
            }
        }
        catch(e){
            console.log(e);
        }
    },[id])

    


    const [isMediumOrLarger, setIsMediumOrLarger] = useState(window.innerWidth >= 768);
    const [isDetails, setIsDetails] = useState(true);
    const [isMoreInfo, setIsMoreInfo] = useState(false);
    const [isReview, setIsReview] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isShip, setIsShip] = useState(false);

    const [quantity, setQuantity] = useState(1);

    const handleClick = (action) => {
        setIsDetails(() => false);
        setIsAbout(() => false);
        setIsMoreInfo(() => false);
        setIsReview(() => false);
        setIsShip(() => false);
        if (action == "Details") {
            setIsDetails(() => true);
        } else if (action == "MoreInfo") {
            setIsMoreInfo(() => true);
        } else if (action == "Review") {
            setIsReview(() => true);
        } else if (action == "About") {
            setIsAbout(() => true);
        } else if (action == "Ship") {
            setIsShip(() => true);
        }
    };

   
    useEffect(() => {
        const handleResize = () => {
          setIsMediumOrLarger(window.innerWidth >= 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const handleCart = async ()=>{
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

    const handleVariant = (value,index)=>{
        setCurrVariant((curr)=>{
            let currVar = [...curr];
            currVar[index]=value;
            if(!variantCheck[currVar.join('-')]){
                // console.log(currVar,'hey899')
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
            console.log(currVar.join('-'),'hi');
            return currVar;
        })
    }
    

        const renderImage = (item) => {
            return (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: '',
                    isFluidWidth: false,
                    src: item.original,
                  },
                  largeImage: {
                    src: item.original,
                    width: 1400,
                    height: 2300,
                  },
                  lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                }}
                // style={{ width: 'auto', height: 'auto' }}
              />
            );
          };
        
    return (
        <>
            <div className="flex flex-wrap px-10 max-lg:px-2 py-10 border-b">
                <div className="flex sm:w-1/2 overflow-visible">
                    {/* <div className="flex flex-col w-[60px]">
                        <img
                            className="my-2"
                            src={`${product.images.main}`}
                            alt=""
                        />
                        
                        {product.images.others.map((imageUrl)=>{
                            return (
                                <img
                                    className="my-2"
                                    src={`${imageUrl}`}
                                    alt=""
                                />
                            )
                        })}
                        
                    </div> */}
                    <div className="w-full relative sm:mr-10 max-sm:pb-6 border-b">
                        {/* <img
                            src={product.images.main}
                            alt=""
                        />
                        <div className="absolute top-3 right-5 p-4 rounded-full border">
                            <LuExpand size={18} />
                        </div> */}
                        <ImageGallery items={images} disableThumbnailScroll={true} thumbnailPosition={'left'} showPlayButton={false} />
                    </div>
                </div>
                <div className="sm:w-1/2 px-2 max-sm:py-6">
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
                    <div className="flex flex-wrap items-baseline font-semibold py-3 my-3">
                        <div className="text-3xl text-blue-400 mr-3">
                            ${productDetails?.minSalePrice}
                        </div>
                        <div className="text-gray-400 line-through text-xl">
                            ${productDetails?.saleStartsAt}
                        </div>
                    </div>

                        {/* {console.log(JSON?.parse(productDetails?.productDescription))} */}
                        {/* { productDetails?.productDescription} */}
                    <div className="description my-3 text-gray-700" dangerouslySetInnerHTML={{__html:JSON?.parse(productDetails?.productDescription || "[]")}} />

                    <div className="viewing flex pb-5 pt-3 text-md items-center border-b">
                        <span className="px-2 py-1 rounded-md bg-black text-white animate-pulse mr-2">
                            <LuEye size={18} />
                        </span>
                        <div>22 people are viewing this right now</div>
                    </div>

                    <div className="flex flex-wrap py-5 border-b">
                        <div className="flex mr-10 items-center">
                            <AiOutlineQuestionCircle
                                size={18}
                                className="mr-1"
                            />
                            <div>Ask a Question</div>
                        </div>
                        <div className="flex items-center">
                            <GoShareAndroid size={18} className="mr-1" />
                            <div>Share</div>
                        </div>
                    </div>

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

                    <div className="py-3">
                        <div className="text-md font-bold ">
                            Hurry Up! Only {product.stock.count} left in stock!
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex my-3">
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

                    <div className="">
                        <input
                            className="mr-3"
                            type="image"
                            data-action="checkout-form-submit"
                            data-checkout-url="https://umino.bersky.co/demo_digital_1/paypal/express/start/button/1/"
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
                            alt="Checkout with PayPal"
                            title="Checkout with PayPal"
                        />
                        <input
                            type="image"
                            data-action="checkout-form-submit"
                            data-checkout-url="https://umino.bersky.co/demo_digital_1/paypal/bml/start/button/1/"
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit-logo-medium.png"
                            alt="Checkout with PayPal"
                            title="Checkout with PayPal"
                        />
                    </div>

                    <div className="flex py-5 border-b">
                        <div className="flex mr-10 items-center">
                            <MdFavoriteBorder size={18} className="mr-1" />
                            <div>Add to Wish List</div>
                        </div>
                        <div className="flex items-center">
                            <GoStack size={18} className="mr-1" />
                            <div>Add To Compare</div>
                        </div>
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
                                        {/* {product.category.subCategory.map((value)=>{return (`, ${value}`)})} */}
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
                                    <td>{product.estimatedDelivery}</td>
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

            <div className="px-10 max-lg:px-2 py-6 border-b overflow-hidden">
            {isMediumOrLarger && (<div className="flex justify-center py-4 font-bold">
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isDetails
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("Details")}
                    >
                        Details
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isMoreInfo
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("MoreInfo")}
                    >
                        More Information
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isReview
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("Review")}
                    >
                        Reviews (1)
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isAbout
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("About")}
                    >
                        About Brand
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isShip
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("Ship")}
                    >
                        Shipping Returns
                    </button>
                </div>)}
            
                {!isMediumOrLarger && (
                    <div className="flex flex-col py-4">

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isDetails
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("Details")}
                        >
                            <span>Details</span>
                            {!isDetails ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isDetails && <ProductDetails />}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isMoreInfo
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("MoreInfo")}
                        >
                            <span>More Information</span>
                            {!isMoreInfo ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isMoreInfo && <ProductInformation info={productDetails?.additionalInformation}/>}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isReview
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("Review")}
                        >
                            <span>Reviews (1)</span>
                            {!isReview ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isReview && <ProductReview reviewDetails={productDetails?.userRatingsDetails} />}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isAbout
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("About")}
                        >
                            <span>About Brand</span>
                            {!isAbout ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isAbout && <AboutBrand />}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isShip
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("Ship")}
                        >
                            <span>Shipping Returns</span>
                            {!isShip ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isShip && <ProductShipping />}
                </div>)}

                {isMediumOrLarger && (<div className="max-md:hidden">
                    {isDetails && <ProductDetails productDetails={productDetails} />}
                    {isMoreInfo && <ProductInformation info={productDetails?.additionalInformation} />}
                    {isReview && <ProductReview reviewDetails={productDetails?.userRatingsDetails} /> }
                    {isAbout && <AboutBrand />}
                    {isShip && <ProductShipping />}
                </div>)}
            </div>
        </>
    );
}

export default Product;
