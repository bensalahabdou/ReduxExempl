const initialState = {
    count: 0
}

const CompteurReducer = (state= initialState, action) => {
    const newState = {...state};
if (action.type === 'INCREMENT' ){
    
    newState.count++;
}
if (action.type === 'DECREMENT' ){
    if (newState.count>0){

        newState.count--;  
    }
   
    return newState;
}


    return newState;

}
export default CompteurReducer;