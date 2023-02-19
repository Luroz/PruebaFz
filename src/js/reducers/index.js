
export const change_counter = (state = {}, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        value: state.value + 1
      };
    case "DECREMENT":
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};

let nextId = 0;
export const counters = (state = [], action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, { id: nextId++, value: 0 }];
    case "INCREMENT":
      return state.map(counter => change_counter(counter, action));
    case "DECREMENT":
      return state.map(counter => change_counter(counter, action));
    default:
      return state;
  }
}
