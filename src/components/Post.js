import './Post.css';

const Post = ({ userId, id, title, body }) => {
  return (
    <div className="post">
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
