import React from "react";

function Header() {
  return (
    <header className="header">

      <div>
        <p className="eyebrow">
          PANEL DE DESARROLLADOR
        </p>

        <h1>
          Dashboard
        </h1>
      </div>

      <div className="profile">

        <div className="avatar">
          RP
        </div>

        <div>
          <strong>
            Rodrigo
          </strong>

          <span>
            Frontend Developer
          </span>
        </div>

      </div>

    </header>
  );
}

export default Header;