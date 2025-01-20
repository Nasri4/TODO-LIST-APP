import React from 'react';

const AllDeleteButton = ({ clearAll }) => {
  return (
    <button
      onClick={clearAll}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
    >
      Delete All Tasks
    </button>
  );
};

export default AllDeleteButton;

