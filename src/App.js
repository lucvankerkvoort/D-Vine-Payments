import React, { useContext } from "react";
import Login from "./Components/Login/login";
import { HashRouter, Route } from "react-router-dom";
import Stock from "./Pages/Stock";
import Input from "./Pages/Input";
import Home from "./Pages/Home";
import "./Styles/import.scss";
import Navbar from "./Components/Navbar/navbar";
import { UserContext } from "./Services/Context/Auth";
import { DbProvider } from "./Services/Context/Db";
import { InputProvider } from "./Services/Context/Input";

const App = () => {
  const user = useContext(UserContext);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <DbProvider>
          <HashRouter>
            <Navbar />
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path="/stock" render={(props) => <Stock {...props} />} />
            <Route
              path="/input"
              render={(props) => (
                <InputProvider>
                  <Input {...props} />
                </InputProvider>
              )}
            />
          </HashRouter>
        </DbProvider>
      )}
    </div>
  );
};
export default App;
