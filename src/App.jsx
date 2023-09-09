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
import ThemeSettings from "./components/ThemeSettings";
import About from "./pages/Others/About";
import Help from "./pages/Others/Help";
import Login from "./pages/Others/Login";
//Pages

import "./App.css";

function App() {
  const {
    open,
    setOpen,
    screenSize,
    setScreenSize,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
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
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Home*/}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account/>} />
              <Route path="/reports" element={<Reports />} />
              {/* Home*/}

              {/* Tools */}
              <Route path="/digit analysis tool" element={<Datool />} />
              <Route path="/free even odd bot" element={<Evenodd />} />
              <Route path="/free strategy" element={<Freestrat/>} />
              <Route path="/inclusive x bot" element={<Inclusivex />} />
              <Route path="/free over under bot" element={<Overunder />} />
              {/* Tools */}

              {/* Other */}
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/login" element={<Login/>} />
              {/* Other */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
