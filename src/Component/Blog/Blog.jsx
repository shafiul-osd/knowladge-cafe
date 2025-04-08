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
      <img className="rounded-lg h-96 object-cover w-full" src={cover} alt="" />

      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="mt-2">
            <img
              className="w-16 rounded-full h-14 object-cover"
              src={author_img}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold">{author}</h2>
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

      <h2 className="text-2xl font-bold mt-4">{title}</h2>

      <p className="mt-2">
        {hashtag.map((hash) => (
          <span>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <div className="mt-2">
        <button
          onClick={() => handlereadtime(reading_time)}
          className="text-purple-800 font-bold underline"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
