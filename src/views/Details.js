import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import './Details.css';

const Details = ({selectedPost}) => {
  // const [loading, setLoading] = useState(true);
  const [postComments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    requestPostComments();
  },[]);// eslint-disable-line react-hooks/exhaustive-deps

  async function requestPostComments() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await res.json();
    console.log('data :', data)
    setComments(data);
  }

  return (
    <div>
      <h2>Post Details</h2>
      <div className="details">
       <div className="details-header">
          <h3>{selectedPost.title}</h3>
          {/* <Link to={``} className="details-btn"> More By this User</Link> */}
       </div>
       {selectedPost.body}
      </div>
      {/* { postComments && postComments.map((comment) => (
        <div key={comment.id}>
          <p>Name{comment.name}</p>
          <p>Name{comment.email}</p>
          <p>Name{comment.body}</p>
        </div>
      ))} */}
    </div>
  )


}

export default Details;
