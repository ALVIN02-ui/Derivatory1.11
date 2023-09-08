import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";

//Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
//Components

//Pages
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Datool from "./pages/Tools/Datool";
import Evenodd from "./pages/Tools/Evenodd";
import Freestrat from "./pages/Tools/Freestrat";
import Inclusivex from "./pages/Tools/Inclusivex";
import Overunder from "./pages/Tools/Overunder";
//Pages

import "./App.css";

function App() {
  const {
    open,
    setOpen,
    screenSize,
    setScreenSize
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 480) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [screenSize]);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen bg-sidebar">
      <BrowserRouter>
        <div className={`flex relative ${open ? "w-72" : "w-20"}`}>
          <div className="fixed sidebar h-screen border-r border-slate-200">
            <Sidebar />
          </div>

          <div>
            <Routes>
              {/* Home*/}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account/>} />
              <Route path="/reports" element={<Reports />} />
              {/* Home*/}

              {/* Tools */}
              <Route path="/datool" element={<Datool />} />
              <Route path="/evenodd" element={<Evenodd />} />
              <Route path="/freestrat" element={<Freestrat/>} />
              <Route path="/inclusivex" element={<Inclusivex />} />
              <Route path="/overunder" element={<Overunder />} />
              {/* Tools */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
