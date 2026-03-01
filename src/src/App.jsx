import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const boysFee = 2510;
  const girlsFee = 2210;

  const boysCount = 112;
  const girlsCount = 246;

  const totalRevenue =
    boysFee * boysCount + girlsFee * girlsCount;

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>PUGKC ERP</h2>

        <button style={styles.button} onClick={() => setActiveTab("dashboard")}>
          Dashboard
        </button>

        <button style={styles.button} onClick={() => setActiveTab("boys")}>
          Boys Section
        </button>

        <button style={styles.button} onClick={() => setActiveTab("girls")}>
          Girls Section
        </button>
      </div>

      <div style={styles.main}>
        {activeTab === "dashboard" && (
          <>
            <h1 style={styles.title}>Mess Overview</h1>

            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <h3>Total Students</h3>
                <p>{boysCount + girlsCount}</p>
              </div>

              <div style={styles.card}>
                <h3>Total Revenue (Basic)</h3>
                <p>₹ {totalRevenue}</p>
              </div>

              <div style={styles.card}>
                <h3>Boys Revenue</h3>
                <p>₹ {boysFee * boysCount}</p>
              </div>

              <div style={styles.card}>
                <h3>Girls Revenue</h3>
                <p>₹ {girlsFee * girlsCount}</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "boys" && (
          <>
            <h1 style={styles.title}>Boys Section</h1>
            <p>Basic Fee: ₹ {boysFee}</p>
            <p>Total Boys: {boysCount}</p>
            <p>Total Revenue: ₹ {boysFee * boysCount}</p>
          </>
        )}

        {activeTab === "girls" && (
          <>
            <h1 style={styles.title}>Girls Section</h1>
            <p>Basic Fee: ₹ {girlsFee}</p>
            <p>Total Girls: {girlsCount}</p>
            <p>Total Revenue: ₹ {girlsFee * girlsCount}</p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    fontFamily: "Arial"
  },
  sidebar: {
    width: "220px",
    backgroundColor
