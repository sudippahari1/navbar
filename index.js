const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore= redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM='BUY_ICECREAM'

function buycake (){
    return{
    type: BUY_CAKE,
    info: 'First Redux Action'
}
}
function buyicecream (){
    return{
        type:BUY_ICECREAM
    }
}


// const initialState={
//     noOfCakes:10,
//     noOfIceCreams: 20
// }
const initialCakeState={
    noOfCakes:10
}
const initialIceCreamState={
    noOfIceCreams:20
}

// const reducer =(state = initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             noOfCakes: state.noOfCakes - 1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             noOfIceCreams: state.noOfIceCreams - 1
//         }
//         default: return state
//     }
// }
const cakeReducer =(state = initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
      
        default: return state
    }
}
const icecreamReducer =(state = initialIceCreamState,action)=>{
    switch(action.type){
       
        case BUY_ICECREAM: return{
            ...state,
            noOfIceCreams: state.noOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake()) 
store.dispatch(buyicecream()) 
store.dispatch(buyicecream()) 
unsubscribe()