import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateMovie from "./Pages/UpdateMovie";
import RegisterPage from "./Pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./Pages/LoginPage";
import Header from "./components/Header";

import MyProfile from "./Pages/MyProfile";
import RoutesPrivees from "./components/RoutesPrivees";
import Pro from "./Pages/Pro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/new/:id"} element={<UpdateMovie />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/pro"} element={<Pro />} />
        <Route path={""} element={<RoutesPrivees />}>
          <Route path="/profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
