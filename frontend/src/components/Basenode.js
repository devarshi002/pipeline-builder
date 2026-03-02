import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ title, inputs = [], outputs = [], children, style }) => {
  return (
    <div style={{ ...styles.node, ...style }}>
      <div style={styles.header}>{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 50 + index * 20 }}
        />
      ))}

      <div style={styles.content}>{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 50 + index * 20 }}
        />
      ))}
    </div>
  );
};

const styles = {
  node: {
    minWidth: 200,
    minHeight: 80,
    borderRadius: 12,
    padding: 12,
    background: "#0f172a",
    color: "#e2e8f0",
    border: "1px solid #1e293b",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 8,
    color: "#38bdf8",
  },
  content: {
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
};

export default BaseNode;