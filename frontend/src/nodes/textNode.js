import { useState, useMemo, useRef, useEffect } from "react";
import BaseNode from "../components/Basenode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // 🔍 Extract variables from {{variable}}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.push(match[1]);
    }
    return Array.from(new Set(matches)); // unique vars
  }, [currText]);

  // 📏 Auto resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [currText]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((v) => `${id}-${v}`)}
      outputs={[`${id}-output`]}
      style={{ minWidth: 220 }}
    >
      <label style={{ fontSize: 12 }}>Text:</label>
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        placeholder="Type text with {{variables}}"
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden",
          borderRadius: 6,
          border: "1px solid #334155",
          padding: "6px",
          background: "#020617",
          color: "#e2e8f0",
          fontSize: 12,
        }}
      />

      {variables.length > 0 && (
        <div style={{ marginTop: 6, fontSize: 10, color: "#94a3b8" }}>
          Variables: {variables.join(", ")}
        </div>
      )}
    </BaseNode>
  );
};