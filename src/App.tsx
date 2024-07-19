import { FC } from "react";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

const App: FC = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
