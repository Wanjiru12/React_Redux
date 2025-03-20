const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";

const addContact = (name) => ({ type: ADD_CONTACT, payload: name });
const deleteContact = (index) => ({ type: DELETE_CONTACT, payload: index });
