import {createStore} from 'redux'

const initialState={
    counter:10,
    name:'anas'
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "counter":{
            return {
                ...state,
                counter:state.counter + action.payload
            }
        }
        default:{
            return state
        }
    }

}

const store=createStore(reducer);
export default store