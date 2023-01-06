const initialState = {
  name: null,
  email: null,
  role: null,
  address: {
    city: null,
    // ...
  },
  // ...
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_USER_DATA": {
      return payload;
    }
    default:
      return state;
  }
};
