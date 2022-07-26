import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Results from '../components/Results';

const PostFeed = ({handlePostSelection}) => {
  const [posts, updatePosts] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    requestPosts();
  },[userId])// eslint-disable-line react-hooks/exhaustive-deps

  async function requestPosts() {
    let url = '';
    if (userId) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    } else {
      url = `https://jsonplaceholder.typicode.com/posts`
    }
    const res = await fetch(url);
    const data = await res.json();
    updatePosts(data);
  }

  return (
    <div className="posts-feed">
      { userId ? (
        <h2>Posts by user :{userId}</h2>
      ) : (
        <h2>All Posts</h2>
      )}
      <Results handlePostSelection={handlePostSelection} posts={posts} />
    </div>
  )
}

export default PostFeed;
