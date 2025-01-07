import { PiBookmarkSimpleBold } from "react-icons/pi";

const Blog = ({ blog, handletoAddbookmark, handlereadtime }) => {
  const {
    title,
    cover,
    author_img,
    reading_time,
    author,
    posted_date,
    hashtag,
  } = blog;
  return (
    <div className="mt-5">
      <img className="rounded-lg" src={cover} alt="" />

      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <img className="w-16 rounded-full" src={author_img} alt="" />
          </div>
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} read</p>

          <button
            className="p-4 text-red-500"
            onClick={() => handletoAddbookmark(blog)}
          >
            <PiBookmarkSimpleBold></PiBookmarkSimpleBold>
          </button>
        </div>
      </div>

      <h2>{title}</h2>

      <p>
        {hashtag.map((hash) => (
          <span>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handlereadtime(reading_time)}
        className="bg-purple-800 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
