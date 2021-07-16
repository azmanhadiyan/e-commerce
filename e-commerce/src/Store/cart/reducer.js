const initialState ={
    dataCart: [],
}

export const cartActionTypes ={
    ADD_CART : "ADD_CART",
    REMOVE_CART : "REMOVE_CART"
}

export default function reducer(state = initialState, action){
    console.log(action.type)

    switch (action.type){
        case cartActionTypes.ADD_CART:
            return{
                ...state,
                dataCart: [
                    ...state.dataCart,
                    action.dataCart,
                ]
            }
        case cartActionTypes.REMOVE_CART:
            console.log(action.dataCart)
            return state

        default:
            return state
    }
}