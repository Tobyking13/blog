import blogPosts from "../utils/blog.json";
import "../styles/blog-cards.css";

const Blogs = () => {
  return (
    <div className="card-container">
      {blogPosts.map((blog) => {
        return (
          <div className="card" key={blog.id}>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={blog.image} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {blog.name}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href={blog.link}>Link to page</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {blog.name}<i className="material-icons right">close</i>
              </span>
              <p>{blog.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
