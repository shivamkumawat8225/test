import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./contexts/AuthContext";
import Home from "./components/Home";

import Users from "./components/Users";
import Profile from "./components/Profile";
// import Dashbord from "./components/Dashbord";
import UsersTable from "./components/UsersTable";
import HomePage from "./components/HomePage";
import Website from "./components/Website";
import ErrorPage from "./components/ErrorPage";
import OtherComponent from "./components/Users/OtherComponent";
import UsersData from "./components/UsersData";
import Family_survey from "./components/Family_survey";
import State_familySurvey from "./components/Family_survey/State_familySurvey";
import Loksabha_familySurvey from "./components/Family_survey/Loksabha_familySurvey";

const App = () => {
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    // alert("Complete Cache Cleared");
    setTimeout(clearCacheData, 1000 * 60 * 10);
  };

  setTimeout(clearCacheData, 1000);

  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Register /> : <Navigate to="/admin" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/admin" />}
        />

        <Route
          path="/admin/"
          element={!isAuthenticated ? <Navigate to="/login" /> : <Dashboard />}
        >
          <Route path="" element={<Navigate to="/admin/dash" />}></Route>
          <Route path="/admin/dash" element={<HomePage />}></Route>
          <Route exact path="/admin/users" element={<UsersData />}></Route>
          <Route
            exact
            path="/admin/monitoringusers"
            element={<Users />}
          ></Route>
          <Route
            exact
            path="/admin/familysurvey"
            element={<Family_survey />}
          ></Route>
          <Route
            // exact
            path="/admin/state_familysurvey/:stateId"
            element={<State_familySurvey />}
          />
          <Route
            // exact
            path="/admin/loksabha_familysurvey/:stateId/:levelId"
            element={<Loksabha_familySurvey />}
          />
          <Route path="/admin/other" element={<OtherComponent />}></Route>
          <Route path="/admin/userstable" element={<UsersTable />}></Route>
        </Route>
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
