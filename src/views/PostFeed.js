import { useEffect, useState } from 'react';
import Results from '../components/Results';

const PostFeed = ({handlePostSelection}) => {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    requestPosts();
  },[])

  async function requestPosts() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const data = await res.json();
    updatePosts(data);
  }

  return (
    <div className="posts-feed">
      <Results handlePostSelection={handlePostSelection} posts={posts} />
    </div>
  )
}

export default PostFeed;
