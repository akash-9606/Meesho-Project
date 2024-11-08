
import {
  FETCH_PRODUCTS,
  FILTER_SAREES,
  FILTER_KURTI,
  FILTER_TOPWEAR,
  FILTER_BOTTOMWEAR,
  FILTER_T_SHIRT,
  FILTER_JEANS,
  FILTER_BOYS,
  FILTER_GIRLS,
  FILTER_KITCHEN,
  FILTER_MAKEUP,
  FILTER_HOME,
  FILTER_SKINCARE,
  FILTER_BAGS,
  FILTER_FOOTWEAR,
  FILTER_ELECTRONIC,
  SET_SEARCH_QUERY,
  SET_SORT_TYPE,
  SET_GENDER_FILTER,
  SET_COLOR_FILTER
} from '../actions/productActions';


const initialState = {
  products: [],
  filteredProducts: [],
  searchQuery: '',
  selectedGenders: [],
  selectedColors: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,  // Store all products
        filteredProducts: action.payload,  // Initially show all products
      };
    case FILTER_SAREES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Sarees'),
      };
    case FILTER_KURTI:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Kurti'),
      };
    case FILTER_TOPWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Topwear'),
      };
    case FILTER_BOTTOMWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Bottomwear'),
      };
    case FILTER_T_SHIRT:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'tshirts'),
      };
    case FILTER_JEANS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'menjeans'),
      };
    case FILTER_BOYS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Boys'),
      };
    case FILTER_GIRLS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Girls'),
      };
    case FILTER_KITCHEN:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Kitchen'),
      };
    case FILTER_MAKEUP:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Makeup'),
      };
    case FILTER_HOME:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Home'),
      };
    case FILTER_SKINCARE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Skincare'),
      };
    case FILTER_BAGS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'Bags'),
      };
    case FILTER_FOOTWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'Footwear'),
      };
    case FILTER_ELECTRONIC:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'Electronic'),
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        filteredProducts: state.products.filter(product =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };


    case SET_GENDER_FILTER:
      const { gender } = action.payload;
      const selectedGenders = state.selectedGenders.includes(gender)
        ? state.selectedGenders.filter(g => g !== gender)
        : [...state.selectedGenders, gender];
      return {
        ...state,
        selectedGenders
      };


    case SET_COLOR_FILTER:
      const { colors } = action.payload;
      //toggling here
      const selectedColors = state.selectedColors.includes(colors)
        ? state.selectedColors.filter(c => c !== colors)
        : [...state.selectedColors, colors];
      return { ...state, selectedColors };

    default:
      return state;
  }



};

export default productReducer;