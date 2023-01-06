const initialState = JSON.parse(localStorage.cart || "[]");

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let product = state.find((i) => i.id === action.payload.id);
      if (!product) {
        let newState = [...state, { ...action.payload, count: 1 }];
        localStorage.cart = JSON.stringify(newState);
        return newState;
      } else {
        let newState = state.filter((i) => i.id !== action.payload.id);
        if (!newState) return state;
        newState.push({ ...product, count: ++product.count });
        localStorage.cart = JSON.stringify(newState);
        return newState;
      }
    }
    case "REMOVE_FROM_CART": {
      return state.filter((p) => p.id !== action.payload);
    }
    case "CLEAR_CART": {
      return initialState;
    }
    case "INC_ITEM_COUNT": {
      let newState = [];
      state.forEach((p) => {
        if (p.id === action.payload) {
          newState.push({ ...p, count: p.count + 1 });
          return;
        }

        newState.push(p);
      });

      return newState;
    }
    case "DEC_ITEM_COUNT": {
      let newState = [];
      state.forEach((p) => {
        if (p.id === action.payload) {
          if (p.count === 1) return;

          newState.push({ ...p, count: p.count - 1 });
          return;
        }

        newState.push(p);
      });

      return newState;
    }
    default:
      return state;
  }
};
