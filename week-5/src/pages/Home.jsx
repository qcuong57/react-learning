import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <h1>Trang chủ</h1>
      <button onClick={() => navigate("/about")}>Di toi About</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
