// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
      style={{
        cursor: "grab",
        minWidth: "100px",
        height: "60px",
        padding: "6px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        border: "1px solid #334155",
        color: "#e2e8f0",
        fontSize: "13px",
        fontWeight: 500,
        boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.3)";
      }}
    >
      {label}
    </div>
  );
};