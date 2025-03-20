const initialState = { contacts: [] };

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
