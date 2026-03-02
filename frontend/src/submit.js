import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://pipeline-builder-tw15.onrender.com/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await res.json();
      console.log("API RESPONSE:", data); // 🔍 debug

      alert(
        `Pipeline Info:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "white",
          borderRadius: "10px",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(37, 99, 235, 0.5)",
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};