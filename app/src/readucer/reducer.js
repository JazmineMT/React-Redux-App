import {FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_START} from '../actions/index'



export const initialState =  {
    isLoading: false,
    weatherReport: [],
    weatherTemp: [],
    city: [],  
    updateCity :'Houston', 
    error: "",

}

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_WEATHER_START: 
            return{
            ...state, 
            isLoading: true
        };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weatherReport: action.payload,
                weatherTemp: action.payload2,
                city: action.payload3,
                error: ""
            }
        case FETCH_WEATHER_FAILURE: 
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }



        default:
            return state
    }
};