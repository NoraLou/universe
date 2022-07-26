//import './Post.css';

const Post = ({ userId, id, title, body }) => {
  return (
    <div className="wrapper">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
