import React from "react";

const Bookmark_items = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-400 mb-2 p-4 rounded-xl">
      <h2>{title}</h2>
    </div>
  );
};

export default Bookmark_items;
