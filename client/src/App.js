import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allDogs, allTemperaments } from "./redux/actions";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import AddDog from "./components/AddDog/AddDog";
import Detail from "./components/Detail/Detail";
import Nav from "./components/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    try {
      axios.get(`http://localhost:3001/dogs`).then(async (results) => {
        await dispatch(allDogs(results.data));
      });
      axios.get(`http://localhost:3001/temperaments`).then(async (results) => {
        await dispatch(allTemperaments(results.data));
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes location={background || location}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddDog />} />
      </Routes>
      {location && (
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
