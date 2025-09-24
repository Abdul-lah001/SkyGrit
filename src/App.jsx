import AddTickets from "./modules/AddTickets";
import AddCategory from "./modules/AddCategory";
import Login from "./Pages/Login";
import AddSubCategory from "./modules/AddSubCategory";
import RemoveTicketClass from "./modules/removeTicketClass";

function App() {
  return (
    <>
      <section>
        <Login />
        <AddTickets />
        <AddCategory />
        <AddSubCategory />
        <RemoveTicketClass />
      </section>
    </>
  );
}

export default App;
