import { Link } from "react-router-dom";
import './Post.css';

const Post = ({ userId, id, title, body, handlePostSelection }) => {
  return (
    <Link to={`/details/${id}`} className="post" onClick={()=>{handlePostSelection({userId, body, title})}}>
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default Post;
