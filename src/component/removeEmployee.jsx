import React from "react";

const RemoveEmployee = (props) => {
  const handleRemove = () => {
    props.removeEmployee(props.id);
  };

  return (
    <button
      onClick={handleRemove}
      className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white font-bold hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Remove
    </button>
  );
};

export default RemoveEmployee;
