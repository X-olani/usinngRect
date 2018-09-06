
import React from 'react';
import {connect} from 'react-redux';

const Newcounter = (props) => {
    return(
        <div>
            <h1>I  am a counter</h1>
            <p>count A:{props.countA}</p>
            <p>count B:{props.countB}</p>
            <p>sum:{props.countSum}</p>
            <p>sumA+B:{props.countSumA}</p>
            <p>sumA*B:{props.countSumB}</p>
            <p>sumA/B:{props.countSumC}</p>
            <p>countA is B:{props.countchangeA}</p>
            <p>countB is A: {props.countchangeB}</p>

            <input value={props.io}></input>
            <button onClick={props.onchangeA}>event 1</button>
            < button onClick={props.onchangeB}>event 2</button>
            <button onClick={props.onswap}>Count A and B will switch </button>
            
        </div>
    )
}


function MapStateToProps (state){
    return {
        io:state.countB,
        countA:state.countA,
        countB:state.countB,
        countSum:state.countA+ state.countB,
        countSumA:state.countA-state.countB,
        countSumB:state.countA*state.countB,
        countSumC:state.countA/state.countB,
        countchangeA:state.countB,
        countchangeB:state.countA,
        countA:state.countB,
        countB:state.countA,
        Onswap:state
    }
}
function stateprops(state2){
    return{
        newcountB: state2.newcount2

    }
}

 function mapdispatchtoprops(dispatch){
     
    function myOnchangeAFunction () {
        console.log('clicking A')
        const action = {type:'increaseA'};
        dispatch(action)
    };
    
    function myOnchangeAFunctionB() {
        console.log('clicking B')
        const action ={type: 'decreaseB'};
        dispatch(action);
    }
    function myOnchangeAandB(){
        const action={type: 'swap'};
        dispatch(action)
    }

    return {
         onchangeA: myOnchangeAFunction,
         onchangeB: myOnchangeAFunctionB,
         onswap:myOnchangeAandB
    }
 }


export default connect(MapStateToProps,mapdispatchtoprops)(Newcounter)