// dashboard.jsx
"use client";

function DashboardAdmin() {
  console.log("Projects in Dashboard:");

  return (
    <div>
      <h2 className="mb-10">Dashboard</h2>
      <div className="grid grid-cols-3 gap-6 ">
        <div className=" border p-4">
          <p>Mes projets</p>
        </div>
        <div className=" border p-4">
          <p>Diaporama des projets</p>
        </div>
        <div className=" border p-4">
          <p>Mes Technos</p>
        </div>
        <div className=" border p-4">
          <p>Mes collaborations "Freelance, Team ou autres ..."</p>
        </div>
        <div className=" border p-4">
          <p>Mon CV</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
