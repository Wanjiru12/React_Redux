const { Provider, useDispatch, useSelector } = ReactRedux;

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {" "}
      {contacts.map((contact, index) => (
        <li key={index}>
          {" "}
          {contact}{" "}
          <button onClick={() => dispatch(deleteContact(index))}>
            {" "}
            Delete{" "}
          </button>{" "}
        </li>
      ))}{" "}
    </ul>
  );
}

function AddContact() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    if (name) {
      dispatch(addContact(name));
      setName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleSubmit}> Add Contact </button>{" "}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h2> Contact Manager </h2> <AddContact />
      <ContactList />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
