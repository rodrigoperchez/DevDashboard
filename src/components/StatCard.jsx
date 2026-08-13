import React from "react";

function StatCard({
  icon,
  title,
  value,
  description,
}) {
  return (
    <article className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <p>
          {title}
        </p>

        <h2>
          {value}
        </h2>

        <span>
          {description}
        </span>

      </div>

    </article>
  );
}

export default StatCard;