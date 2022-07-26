import { useEffect, useState } from 'react';
import Results from '../components/Results';

const PostsFeed = () => {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    requestPosts();
  },[])

  async function requestPosts() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const data = await res.json();
    console.log('data :', data);
    updatePosts(data);
  }

  return (
    <div className="posts-feed">
      <Results posts={posts} />
    </div>
  )
}

export default PostsFeed;
