import {createStore} from 'redux';
import {connect} from 'react-redux';

const initial ={
    countA:4,
    countB: 67

};

const reducer = (state=initial, action)=>{
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'increaseA':
            return {
                countA: state.countA+1, 
                countB: state.countB*2
            };
        case 'decreaseB':
            return  {...state, countB: state.countB-1,
            countA:state.countA/4};  
            
        case 'swap': 
            return{
                countA:state.countB,
                countB:state.countA
            }
            default:
            return state;


         
    }
}


const store = createStore(reducer);
export default store;
