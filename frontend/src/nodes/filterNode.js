import BaseNode from "../components/Basenode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      inputs={[`${id}-items`]}
      outputs={[`${id}-filtered`]}
    >
      <div>Filters incoming data</div>
    </BaseNode>
  );
};