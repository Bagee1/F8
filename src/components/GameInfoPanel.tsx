import React from "react";

type GameInfoPanelProps = {
  title: string;
  description: string;
  features: string[];
  controls: string[];
};

const GameInfoPanel: React.FC<GameInfoPanelProps> = ({
  title,
  description,
  features,
  controls,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "15px",
        padding: "25px",
        color: "#fff",
        lineHeight: "1.8",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          marginBottom: "15px",
          borderBottom: "1px solid #444",
          paddingBottom: "8px",
        }}
      >
        {title}
      </h2>

      <p style={{ marginBottom: "20px", color: "#ccc", fontSize: "15px" }}>
        {description}
      </p>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            fontSize: "16px",
            color: "#FFD700",
            marginBottom: "8px",
          }}
        >
          🎮 Онцлогууд
        </h3>
        <ul style={{ paddingLeft: "20px", color: "#eee", fontSize: "14px" }}>
          {features.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              • {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3
          style={{
            fontSize: "16px",
            color: "#FFD700",
            marginBottom: "8px",
          }}
        >
          🕹️ Удирдлага
        </h3>
        <ul style={{ paddingLeft: "20px", color: "#eee", fontSize: "14px" }}>
          {controls.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameInfoPanel;
