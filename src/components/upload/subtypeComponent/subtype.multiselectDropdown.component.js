import Multiselect from "multiselect-react-dropdown";
import { React } from "react";

function SubType({ setSelectIdSubType , subtype}) {
  return (
    <Multiselect
      options={subtype}
      displayValue="name"
      closeIcon="close"
      onSelect={(selectedList, selectedItem) => {
        const result = selectedList.map((data, index) => {
          return [...[data._id]];
        });
        setSelectIdSubType(result);
      }}
      onRemove={(selectedList, removedItem) => {
        const result = selectedList.map((data, index) => {
          return [...[data._id]];
        });
        setSelectIdSubType(result);
      }}
    />
  );
}

export default SubType;
