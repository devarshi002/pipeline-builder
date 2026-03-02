import BaseNode from "../components/Basenode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>Logs data for debugging</div>
    </BaseNode>
  );
};