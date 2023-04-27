import Blogs from "../../components/Blogs";
import Nav from "../../components/Nav";

const Home = () => {

  const authToken = false;

  return (
    <div>
      <header>
        <Nav authToken={authToken}/>
      </header>
      <main>
        <p className="center-align">
          This is a project I have built to simulate a blogsite that allows the
          user to Log in and comment on blogs.
        </p>
        <div className="container">
            <Blogs />
        </div>
      </main>
    </div>
  );
};

export default Home;
