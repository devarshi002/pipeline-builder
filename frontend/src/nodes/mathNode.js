import BaseNode from "../components/Basenode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-result`]}
    >
      <div>Performs mathematical operations</div>
    </BaseNode>
  );
};