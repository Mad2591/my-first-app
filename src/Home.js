import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  const [name, setName] = useState("luffy");

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // runs evertime it renders

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && <BlogList blogsData={blogs} titleData="All BLogs!" />}
      <br />
      <br />
      <br />
      <br />
      {blogs && (
        <BlogList
          blogsData={blogs.filter((blog) => blog.author === "mario")}
          titleData="Mario's BLogs!"
        />
      )}

      <button
        className="button"
        onClick={() => {
          setName("MOJO");
        }}
      >
        Change Name
      </button>

      <p>{name}</p>
    </div>
  );
};

export default Home;
