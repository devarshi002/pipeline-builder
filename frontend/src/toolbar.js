import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="condition" label="Condition" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="filter" label="Filter" />
      <DraggableNode type="logger" label="Logger" />
    </div>
  );
};