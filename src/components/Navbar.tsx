'use client'

import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
<div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        color: "#fff",
        padding: "15px 30px",
        borderBottom: "1px solid #333",
      }}
    >
      {/* Зүүн талын Logo + F8 */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/assets/f8-icon.png" alt="F8" style={{ height: "30px" }} />
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>F8</span>
      </div>

      {/* Хайлтын хэсэг */}
      <div style={{ position: "relative", flex: 1, maxWidth: "500px", margin: "0 20px" }}>
        <input
          type="text"
          placeholder="Хайлт хийх"
          style={{
            width: "100%",
            padding: "10px 40px 10px 15px",
            borderRadius: "20px",
            border: "1px solid #444",
            backgroundColor: "#111",
            color: "#fff",
          }}
        />
        <button
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#ccc",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      {/* Нэвтрэх товч */}
      <button
        onClick={() => router.push("/login")}
        style={{
          padding: "8px 16px",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "20px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        Нэвтрэх
      </button>
    </div>
  );
}

export default Navbar