import { useEffect, useState } from 'react';

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
      { posts && posts.map((post)=> (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsFeed;
