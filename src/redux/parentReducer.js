
const initialState = {
    name: null,
    age: null,
    children: []
}

const parentReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PARENT":{
            return{
                ...state,
                name: action.payload.name,
                age: action.payload.age
            }
        }
        case "ADD_CHILDREN":{
            return{
                ...state,
                children: action.payload
            }
        }
        default:
             return state;
    }
}


export const setParent = (name, age) => ({
    type: "ADD_PARENT", payload: {name, age}
})

export const setChildren = (children) => ({
    type: "ADD_CHILDREN", payload: children
})


export default parentReducer;