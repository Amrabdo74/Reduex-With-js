// let button =document.querySelector("#icrese");
// button.onclick=()=>{
//     console.log("7");
// }
const iniState = { counter: 0 };
const counterReducer = (state = iniState, action) => {
    if (action.type === "icrese") {
        return {...state,counter: state.counter + action.payload }
    }
    if (action.type === "decrment") {
        return {...state,counter: state.counter - action.payload}
    }
    return state;
};
const store = Redux.createStore(counterReducer);
const spanFun = () => {
    document.querySelector("#Counter").innerHTML = store.getState().counter;
};
spanFun();
store.subscribe(spanFun);
document.querySelector("#icrese").addEventListener("click", () => {
    const action = { type: "icrese",payload:1 };
    store.dispatch(action);
});
document.querySelector("#decrment").addEventListener("click", () => {
    const action = { type: "decrment",payload:1 };
    store.dispatch(action);
});
