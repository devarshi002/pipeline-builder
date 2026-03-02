import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div style={styles.app}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>⚡ Pipeline Builder</h2>
        <span style={{ opacity: 0.7 }}>VectorShift Assessment</span>
      </div>

      {/* Main Layout */}
      <div style={styles.main}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h4>Nodes</h4>
          <PipelineToolbar />
        </div>

        {/* Canvas */}
        <div style={styles.canvas}>
          <PipelineUI />
        </div>
      </div>

      {/* Footer Submit */}
      <div style={styles.footer}>
        <SubmitButton />
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: "#020617",
    color: "#e2e8f0",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    height: 60,
    padding: "0 20px",
    borderBottom: "1px solid #1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#020617",
  },
  main: {
    flex: 1,
    display: "flex",
  },
  sidebar: {
    width: 220,
    borderRight: "1px solid #1e293b",
    padding: 16,
    background: "#020617",
  },
  canvas: {
    flex: 1,
  },
  footer: {
    height: 60,
    borderTop: "1px solid #1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 20px",
    background: "#020617",
  },
};

export default App;