import products from '../api/data';  // Import the data
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FILTER_SAREES = 'FILTER_SAREES';
export const FILTER_KURTI = "FILTER_KURTI"
export const FILTER_TOPWEAR = "FILTER_TOPWEAR"
export const FILTER_BOTTOMWEAR = "FILTER_BOTTOMWEAR"
export const FILTER_T_SHIRT = "FILTER_T_SHIRT"
export const FILTER_JEANS = "FILTER_JEANS"
export const FILTER_BOYS = "FILTER_BOYS"
export const FILTER_GIRLS = "FILTER_GIRLS"
export const FILTER_KITCHEN = "FILTER_KITCHEN"
export const FILTER_MAKEUP = "FILTER_MAKEUP"
export const FILTER_HOME = "FILTER_HOME"
export const FILTER_SKINCARE = "FILTER_SKINCARE"
export const FILTER_BAGS = "FILTER_BAGS"
export const FILTER_FOOTWEAR = "FILTER_FOOTWEAR"
export const FILTER_ELECTRONIC = "FILTER_ELECTRONIC"
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SORT_TYPE="SET_SORT_TYPE"
export const SET_GENDER_FILTER='SET_GENDER_FILTER'
export const SET_COLOR_FILTER='SET_COLOR_FILTER'
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,  // Using a  local products
    });
  }
};
export const filterSarees = () => {
  return {
    type: FILTER_SAREES,
  }
}

export const filterKurti = () => {
  return {
    type: FILTER_KURTI
  }
}
export const filterTopwear = () => {
  return {
    type: FILTER_TOPWEAR
  }
}

export const filterBottomwear = () => {
  return {
    type: FILTER_BOTTOMWEAR
  }
}
export const filterTshirts = () => {
  return {
    type: FILTER_T_SHIRT
  }
}
export const filterJeans = () => {
  return {
    type: FILTER_JEANS
  }
}
export const filterBoys = () => {
  return {
    type: FILTER_BOYS
  }
}
export const filterGirls = () => {
  return {
    type: FILTER_GIRLS
  }
}
export const filterKitchen = () => {
  return {
    type: FILTER_KITCHEN
  }
}
export const filterMakeup = () => {
  return {
    type: FILTER_MAKEUP
  }
}
export const filterHome = () => {
  return {
    type: FILTER_HOME
  }
}
export const filterSkincare = () => {
  return {
    type: FILTER_SKINCARE

  }
}
export const filterBags = () => {
  return {
    type: FILTER_BAGS

  }
}
export const filterFootwear = () => {
  return {
    type: FILTER_FOOTWEAR
  }
}
export const filterElectronic = () => {
  return {
    type: FILTER_ELECTRONIC
  }
}

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});


export const setSortType = (sortType) => {
  return {
    type: SET_SORT_TYPE,
    payload: sortType,
  };
};

export const setGenderFilter = (gender) => ({
    type: SET_GENDER_FILTER,
    payload: gender,
  }
)

export const setColorFilter = (colors) => ({
  type: SET_COLOR_FILTER,
  payload: colors,
});




