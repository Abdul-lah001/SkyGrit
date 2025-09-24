import AddTickets from "./modules/AddTickets";
import AddCategory from "./modules/AddCategory";
import Login from "./Pages/Login";
import AddSubCategory from "./modules/AddSubCategory";

function App() {
  return (
    <>
      <Login />
      <AddTickets />
      <AddCategory />
      <AddSubCategory />
    </>
  );
}

export default App;
