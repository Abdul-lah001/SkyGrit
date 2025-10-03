import AddTickets from "./modules/AddTickets";
import AddCategory from "./modules/AddCategory";
import Login from "./Pages/Login";
import AddSubCategory from "./modules/AddSubCategory";
import RemoveTicketClass from "./modules/removeTicketClass";
import Request from "./dashboards/Request";
import Sidebar from "./components/Sidebar";
import UserManagement from "./dashboards/UserManagement";

function App() {
  return (
    <>
      <main className="flex flex-col gap-6">
        {/* <section>
          <Login />
          <AddTickets />
          <AddCategory />
          <AddSubCategory />
          <RemoveTicketClass />
          <Request />
        </section> */}
        <UserManagement />
      </main>
    </>
  );
}

export default App;
