import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handletoAddbookmark, handlereadtime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-10">
      {blogs.map((blog) => (
        <Blog
          key={blogs.id}
          blog={blog}
          handletoAddbookmark={handletoAddbookmark}
          handlereadtime={handlereadtime}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
