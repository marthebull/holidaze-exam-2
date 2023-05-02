import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Venues from "./pages/venues";
import Venue from "./pages/venue";
import CreateNewVenue from "./pages/create-new-venue";
import SignIn from "./pages/sign-in";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ManageBooking from "./pages/manage-booking";
import ManageVenue from "./pages/manage-venue";
import PageNotFound from "./pages/page-not-found";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venue/:id" element={<Venue />} />
          <Route path="/create-new-venue" element={<CreateNewVenue />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-booking" element={<ManageBooking />} />
          <Route path="/manage-venue" element={<ManageVenue />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
