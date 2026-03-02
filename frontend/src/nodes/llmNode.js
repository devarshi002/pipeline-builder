import BaseNode from "../components/Basenode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}   // two left handles
      outputs={[`${id}-response`]}               // one right handle
    >
      <div>This is a LLM.</div>
    </BaseNode>
  );
};