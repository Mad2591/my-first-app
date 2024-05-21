import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogsData, titleData }) => {
  return (
    <div className="blog-list">
      <h2>{titleData}</h2>
      {blogsData.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
