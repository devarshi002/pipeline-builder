import BaseNode from "../components/Basenode";

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API Request"
      inputs={[`${id}-url`]}
      outputs={[`${id}-response`]}
    >
      <div>Fetches data from an API</div>
    </BaseNode>
  );
};