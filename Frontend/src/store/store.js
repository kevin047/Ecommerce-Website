import {createSlice} from "@reduxjs/toolkit"

import { products } from "./products";
import { shopping } from "./shopping";
import { users } from "./user";



const initialState = {
    user: null,
    token:'',
    products:products,
    shopping: shopping,
    users: users,
    cart:[],
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setSignout: (state,action)=>{
            state.user=null
            state.token=null
        },
        setCart: (state,action)=>{
            state.cart = action.payload.cart;
        },
        setItem: (state,action)=>{
            console.log('hey')
        },
    }
})

export const {setUser, setSignout, setItem, setCart} = authSlice.actions;

export default authSlice.reducer;



// setCart old
// console.log(action.payload)
        //     const product = action.payload.product;
        //     if(action.payload.action==='INC'){
        //         let flag=false;
        //         let cart = state.shopping.cart;
        //         cart.items.forEach((item)=>{
        //             if(item.productId === product.productId){
        //                 item.quantity+=product.quantity;
        //                 item.subtotal= +(item.subtotal + item.unitPrice).toFixed(2);
        //                 cart.totalQuantity+=1;
        //                 cart.totalAmount= +(cart.totalAmount+item.unitPrice).toFixed(2);
        //                 flag=true;
        //             }
        //         })
        //         if(!flag){
        //             // console.log(product,'hey')
        //             cart.items.push(product);
        //             cart.totalQuantity= +(cart.totalQuantity + product.quantity).toFixed(2);
        //             cart.totalAmount= +(cart.totalAmount + product.subtotal).toFixed(2);
        //         }
        //     }
        //     else if(action.payload.action==='DEC'){
        //         let flag=false;
        //         let cart = state.shopping.cart;
        //         cart.items.forEach((item)=>{
        //             if(item.productId === product.productId){
        //                 item.quantity-=product.quantity;
        //                 if(item.quantity==0){
        //                     flag=true;
        //                 }
        //                 item.subtotal= +(item.subtotal - item.unitPrice).toFixed(2);
        //                 cart.totalQuantity-=1;
        //                 cart.totalAmount= +(cart.totalAmount - item.unitPrice).toFixed(2);
        //             }
        //         })
        //         if(flag){
        //             // console.log(flag,product.productId)
        //             // cart.items = cart.items.filter((item)=>{
        //             //     console.log(item.productId,product.productId)
        //             //     return item.productId!=product.productId
        //             // });

        //             const index = cart.items.findIndex(item => item.productId === product.productId);
        //             if (index !== -1) {
        //                 cart.items.splice(index, 1);
        //             }
        //         }
        //     }
        //     else if(action.payload.action=='DEL'){
        //         let cart = state.shopping.cart;
        //         const index = cart.items.findIndex(item => item.productId === product.productId);
        //         cart.totalQuantity-=cart.items[index].quantity;
        //         cart.totalAmount= +(cart.totalAmount - cart.items[index].subtotal).toFixed(2);
        //         if (index !== -1) {
        //             cart.items.splice(index, 1);
        //         }
        //     }
        // }
