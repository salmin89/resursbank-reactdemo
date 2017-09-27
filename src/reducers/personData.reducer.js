export default (state = [], action) => {
    switch (action.type) {
      case "GET_ALL_PEOPLE":
        return { ...state, people: action.payload };
      case "SELECT_PERSON":
        return { ...state, personData: action.payload };
      case "UNSELECT_PERSON":
        return { ...state, personData: action.payload };
      default:
        return state;
    }
  };