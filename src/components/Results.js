import Post from './Post';

const Results = ({ posts, handlePostSelection }) => {
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
            handlePostSelection={handlePostSelection}
          />
        ))
      )}
    </div>
  );
};

export default Results;
