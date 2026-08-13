import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main">

        <Header />

        {activePage === "Dashboard" && <Dashboard />}

        {activePage === "Proyectos" && <Projects />}

      </main>

    </div>
  );
}

export default App;