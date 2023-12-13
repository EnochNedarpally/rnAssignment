import { createAction } from "@reduxjs/toolkit";
import { ADD_CATEGORY,ADD_PRODUCT,DELETE_CATEGORY,DELETE_PRODUCT,LIST_CATEGORIES, LIST_PRODUCTS, UPDATE_CATEGORY, UPDATE_PRODUCT} from "../constants";


export const addCategory = createAction(ADD_CATEGORY,(category) => {
    return {
        payload: category
    };
});

export const listCategory = createAction(LIST_CATEGORIES,() => {
    
    return {
        payload: 'List Category Request is initiated'
    };
});
export const deleteCategory = createAction(DELETE_CATEGORY,(categoryId) => {
    return {
        payload: categoryId
    };
});
export const updateCategory = createAction(UPDATE_CATEGORY,(category) => {    
    return {
        payload: category
    };
});
export const listProducts = createAction(LIST_PRODUCTS,() => {
    return {
        payload: 'List Product Request is initiated'
    };
});

//Convert decimal value to integer
const stringToInteger=(priceString)=> {
    const integerValue = parseInt(priceString.replace(".", ""), 10);
    return isNaN(integerValue) ? 0 : integerValue;
  }
export const addProduct=createAction(ADD_PRODUCT,(product)=>{
    //Format the product data wrt database schema
    const formattedProduct = {...product}
    formattedProduct.Price = stringToInteger(formattedProduct.Price)
    formattedProduct.CategoryId = parseInt(formattedProduct.CategoryId)
    const {ProductUniqueId,...prodObj} = formattedProduct
    return{
        payload:prodObj
    }
})

export const updateProduct=createAction(UPDATE_PRODUCT,(product)=>{
    
    return{
        payload:product
    }
})

export const deleteProduct = createAction(DELETE_PRODUCT,(id)=>{
    return{
        payload:id
    }
})

