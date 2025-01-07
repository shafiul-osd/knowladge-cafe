import React from "react";
import Bookmark_items from "../Bookmark_items/Bookmark_items";

const Bookmark = ({ bookmarks, readingtime }) => {
  return (
    <div className="p-4 gap-4">
      <div>
        <h2>mark as read: {readingtime}</h2>
      </div>

      <h2>bookmars {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark_items bookmark={bookmark}></Bookmark_items>
      ))}
    </div>
  );
};

export default Bookmark;
