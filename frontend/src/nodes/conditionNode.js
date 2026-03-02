import BaseNode from "../components/Basenode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[`${id}-input`]}
      outputs={[`${id}-true`, `${id}-false`]}
    >
      <div>Branch logic based on condition</div>
    </BaseNode>
  );
};