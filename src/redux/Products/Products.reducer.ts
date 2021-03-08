export interface Action<T = any> {
  type: string;
  payload?: T
}

function productsReducer(state = [], action: Action) {
  switch (action.type) {
    case "INSERT_NEW_PRODUCT":
      return [...state, action.payload]

    default:
      return state
  }
}

export default productsReducer;