import { useSelector } from "react-redux";

export const getMainCategoryListApi = async ()=>{
    
    const categoryList = await fetch(
        `${import.meta.env.VITE_API_URL}maincategorieslist?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                Authorization: `Token ${1}`,
            }
        }
    );
    const data = await categoryList.json();
    return data;
}

export const getFeaturedProductsApi = async ()=>{
    const FeaturedProducts = await fetch(
        `${import.meta.env.VITE_API_URL}featuredproducts?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                Authorization: `Token ${1}`,
            }
        }
    );
    const data = await FeaturedProducts.json();
    return data;
}


export const getProductsbyFilterApi = async (data)=>{
    const FeaturedProducts = await fetch(
        `${import.meta.env.VITE_API_URL}productsbycategories?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: 'POST',
            headers:{
                // "Content-Type": "application/json",
                Authorization: `Token ${1}`,
            },
            body:data,
        }
    );
    const _data = await FeaturedProducts.json();
    return _data;
}

export const getProductbyIdApi = async (data)=>{
    const ProductDetails = await fetch(
        `${import.meta.env.VITE_API_URL}productdetailsbyproduct?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: 'POST',
            headers:{
                Authorization: `Token ${1}`,
            },
            body:data,
        }
    );
    const _data = await ProductDetails.json();
    return _data;
}

export const customerSignUpApi = async (data,token)=>{
    

    const RegisterUser = await fetch(
        `${import.meta.env.VITE_API_URL}customersignup?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await RegisterUser.json();
    return _data;
}

export const customerLogInApi = async (data,token)=>{

    const LogInUser = await fetch(
        `${import.meta.env.VITE_API_URL}customerlogin?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await LogInUser.json();
    return _data;
}


export const getCartDetailsApi = async (data,token)=>{
    const cartDetails = await fetch(
        `${import.meta.env.VITE_API_URL}cartbycustomer?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await cartDetails.json();
    return _data;
}

export const updateCartDetailsApi = async (data,token)=>{
    const cartDetails = await fetch(
        `${import.meta.env.VITE_API_URL}editcart?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await cartDetails.json();
    return _data;
}


export const getAllAddressApi = async (data,token)=>{
    const addressList = await fetch(
        `${import.meta.env.VITE_API_URL}addressesbycustomer?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await addressList.json();
    return _data;
}

export const getOrderListApi = async (data,token)=>{
    const orderList = await fetch(
        `${import.meta.env.VITE_API_URL}orderbycustomer?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await orderList.json();
    return _data;
}

export const addToCartApi = async (data,token)=>{
    const addCart = await fetch(
        `${import.meta.env.VITE_API_URL}addcart?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await addCart.json();
    return _data;
}

export const getShippingChargeApi = async (data,token)=>{
    const shippingCharge = await fetch(
        `${import.meta.env.VITE_API_URL}getshippingcharge?clientId=${import.meta.env.VITE_Client_Id}&ipAddress=${'103.228.147.102'}`,
        {
            method: "POST",
            headers:{
                Authorization: `Token ${token}`,
            },
            body: data,
        }
    );
    const _data = await shippingCharge.json();
    return _data;
}