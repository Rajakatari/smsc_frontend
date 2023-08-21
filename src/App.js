import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import ClientSummary from "./components/ClientSummary";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import UserContext from "./context/UserContext";

import "./App.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [userWiseData, setUserWiseData] = useState([]);
  const changeDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    getClientReports();
  }, []);

  const getClientReports = async () => {
    const url = "http://localhost:4000/allclientreports";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();

      setUserWiseData(data);
    } else {
      setUserWiseData([]);
      console.log("fetch error");
    }
  };

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          isDark: darkTheme,
          userWiseData,
          changeDarkTheme,
        }}
      >
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route exact path="/clientsummary" element={<ClientSummary />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
