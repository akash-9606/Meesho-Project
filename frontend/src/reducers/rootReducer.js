import { combineReducers } from "redux";
import currentProductReducer from "./currentProductReducer"
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"
// import searchReducer from "./searchReducer"


const rootReducer=combineReducers({
    currentProduct:currentProductReducer,
    products: productReducer,
    cart: cartReducer,
    // search: searchReducer,
    
    
})
export default rootReducer