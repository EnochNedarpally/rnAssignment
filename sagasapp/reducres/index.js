import { ADD_CATEGORY,ADD_PRODUCT,DELETE_CATEGORY_SUCCESS,LIST_CATEGORIES,LIST_CATEGORIES_SUCCESS, LIST_PRODUCTS_SUCCESS} from "../constants";

import { createReducer } from "@reduxjs/toolkit";

/* Define initialstate */

const initialState = {
    categories:[], 
    category:{}, 
    products:[],
    product:{}
};


// Create reducer to update global state
export const reducers = createReducer(initialState, (builder)=>{
    builder.addCase(LIST_CATEGORIES, (state,action)=>{
        state.categories = [];
        state.category = {};
    }).addCase(LIST_CATEGORIES_SUCCESS, (state, action) => {
        state.categories = action.payload;
    }).addCase(ADD_CATEGORY, (state,action) => {
        state.category = action.payload;
    }).addCase(DELETE_CATEGORY_SUCCESS, (state,action) => {
    
    }).addCase(LIST_PRODUCTS_SUCCESS,(state,action)=>{
        state.products=action.payload
    }).addCase(ADD_PRODUCT,(state,action)=>{
        state.product = action.payload
    })
});
