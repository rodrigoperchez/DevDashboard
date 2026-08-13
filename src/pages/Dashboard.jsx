import React from "react";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <section className="dashboard">

      <div className="stats-grid">

        <StatCard
          icon="◈"
          title="Proyectos"
          value="4"
          description="+2 este mes"
        />

        <StatCard
          icon="⌘"
          title="Tecnologías"
          value="8"
          description="En tu stack"
        />

        <StatCard
          icon="✓"
          title="Completados"
          value="1"
          description="25% del total"
        />

        <StatCard
          icon="↗"
          title="Actividad"
          value="+24%"
          description="vs. mes anterior"
        />

      </div>

      <div className="welcome-card">

        <p className="eyebrow">
          BIENVENIDO
        </p>

        <h2>
          Hola, Rodrigo 👋
        </h2>

        <p>
          Este es tu centro de desarrollo. Aquí podrás
          administrar tus proyectos, visualizar estadísticas,
          consultar tu actividad y mostrar tu progreso como
          desarrollador.
        </p>

      </div>

    </section>
  );
}

export default Dashboard;