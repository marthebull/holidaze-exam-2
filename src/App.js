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

function App() {
  return (
    <>
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <h4>hello</h4>
      <h5>hello</h5>
      <h5>hello</h5>
      <a>hello</a>
      <a>hello</a>
      <p>hello <a>hello</a> hello</p>
      <a>hello</a>
      <p>hello</p>
      <button className="button-outline-dark">hello</button>
      <label>hello</label>
      <input aria-label="hello" placeholder="hello"></input>
      <div className="flex-h">
      <img className="icon"
     src="https://raw.githubusercontent.com/marthebull/holidaze-exam2023/187f416b0fd1cc2255c1e2d534bf8e89b5ee8657/images/people-icon.svg"
     alt="Grapefruit slice atop a pile of other slices"></img>
     <p>hello</p>
      </div>
      <div className="flex-h">
      <img className="icon"
     src="https://raw.githubusercontent.com/marthebull/holidaze-exam2023/187f416b0fd1cc2255c1e2d534bf8e89b5ee8657/images/moon-sea-icon.svg"
     alt="Grapefruit slice atop a pile of other slices"></img>
     <p>hello</p>
      </div>
      <div className="flex-h">
      <img className="icon"
     src="https://raw.githubusercontent.com/marthebull/holidaze-exam2023/187f416b0fd1cc2255c1e2d534bf8e89b5ee8657/images/coffe-cup-icon.svg"
     alt="Grapefruit slice atop a pile of other slices"></img>
     <p>hello</p>
      </div>
      <div className="flex-h"><input type="checkbox"></input><p>hello</p></div>
      <input type="checkbox"></input>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/:id" element={<Venue />} />
        <Route path="/create-new-venue" element={<CreateNewVenue />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-booking" element={<ManageBooking />} />
        <Route path="/manage-venue" element={<ManageVenue />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
