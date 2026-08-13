import React from "react";

function Sidebar({ activePage, setActivePage }) {
  const menu = [
    {
      name: "Dashboard",
      icon: "⌂",
    },
    {
      name: "Proyectos",
      icon: "▦",
    },
    {
      name: "Actividad",
      icon: "◷",
    },
    {
      name: "Configuración",
      icon: "⚙",
    },
  ];

  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">
          D
        </div>

        <div>
          <strong>DevDashboard</strong>
          <small>Developer Portfolio</small>
        </div>
      </div>

      <nav>
        {menu.map((item) => (
          <button
            key={item.name}
            className={
              activePage === item.name
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActivePage(item.name)}
          >
            <span>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="online"></span>
        Sistema operativo
      </div>

    </aside>
  );
}

export default Sidebar;