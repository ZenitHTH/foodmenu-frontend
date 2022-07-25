import * as React from "react";
import { Routes , Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import MainNavBar from "./components/navbar";
import Home from "./components/home/home.component";
import TypeList from "./components/type/edit-type.component";
import TypeCreate from "./components/type/create-type.component";
import Login from "./components/login/login.component";

function App() {

  return (
 <div className="App">
      <MainNavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/type" element={<TypeList />} />
        <Route path="/type/create" element={<TypeCreate />} />
        <Route path="/subtype" />
        <Route path="/admin" element={<Login />} />
        <Route />
      </Routes>
    </div>
  )
}

export default App;
