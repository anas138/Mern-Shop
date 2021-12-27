import { createStore } from 'redux'

const initialState = {
    counter: 10,
    name: 'anas',
    singleProduct:[],
    token:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter": {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case "get singlr product":{
            return{
                ...state,
                singleProduct:action.payload
            }

        }
        case "remove product data":{
            return{
                ...state,
                singleProduct:[]
            }
        }
        case "setToken":{
            return{
                ...state,
                token:localStorage.getItem("token")
            }
        }
        default: {
            return state
        }
    }

}

const store = createStore(reducer);
export default store