import blogPosts from "../utils/blog.json";
import "../styles/blog-cards.css";

const Blogs = () => {
  return (
    <div className="card-container">
      {blogPosts.map((blog) => {
        return (
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={blog.image} />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                {blog.name}
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                <a href={blog.link}>Link to page</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                {blog.name}<i class="material-icons right">close</i>
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
