import Bookmark_items from "../Bookmark_items/Bookmark_items";

const Bookmark = ({ bookmarks, readingtime }) => {
  return (
    <div className="p-4 gap-4 mt-10">
      <div className="mt-10">
        <h2 className="text-2xl text-purple-800">
          Spent time on read: {readingtime}
        </h2>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mt-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>

        {bookmarks.map((bookmark) => (
          <Bookmark_items bookmark={bookmark}></Bookmark_items>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
