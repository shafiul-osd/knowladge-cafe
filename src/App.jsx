import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmark from "./Component/Bookmark/Bookmark";
import Header from "./Component/Header/Header";

function App() {
  // bookmarks a data rakher jonno ay section a kaj korci

  const [bookmarks, setBookmarks] = useState([]);

  const [readingtime, setreadingtime] = useState(0);

  const handletoAddbookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  // reading time add korar function er kaj korci nicher ai function er moddho

  const handlereadtime = (time) => {
    // console.log(time.split(" "));
    const convertet_time = Number(time.split(" ")[0]);

    const newTime = readingtime + convertet_time;
    setreadingtime(newTime);
  };

  return (
    <>
      <div className="mx-auto container px-4 overflow-x-hidden">
        <Header></Header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16">
          <div className="lg:col-span-2">
            <Blogs
              handletoAddbookmark={handletoAddbookmark}
              handlereadtime={handlereadtime}
            ></Blogs>
          </div>
          <div className="lg:col-span-1">
            <Bookmark
              bookmarks={bookmarks}
              readingtime={readingtime}
            ></Bookmark>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
