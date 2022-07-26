import Post from './Post';

const Results = ({ posts }) => {
  return(
    <div>
      { !posts.length ? (
        <h1>No Posts Found</h1>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))
      )}
    </div>
  );
};

export default Results;
