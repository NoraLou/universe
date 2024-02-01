import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import './Details.css';

const Details = ({selectedPost}) => {
  const [postComments, setComments] = useState([]);
  const { id } = useParams();
  const { userId } = selectedPost

  useEffect(() => {
    requestPostComments();
  },[]);// eslint-disable-line react-hooks/exhaustive-deps

  async function requestPostComments() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await res.json();
    console.log(`data ${data}`);
    setComments(data);
  }

  return (
    <div>
      <h2>Post Details</h2>
      <div className="details">
        <div className="content">
          <div className="header">
            <h3>{selectedPost.title}</h3>
            <Link to={`/${userId}`} className="details-btn">More</Link>
          </div>
          {selectedPost.body}
        </div>
        <div className="comments">
          { !postComments.length ? (
            <h4>No Comments on this Post</h4>
          ) : (
            <div>
              <h4>{postComments.length} Comments:</h4>
               { postComments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <span>{comment.name}</span>
                    <span>{comment.email}</span>
                    <p>Name{comment.body}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Details;
