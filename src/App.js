import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import PostFeed from './views/PostFeed';
import Details from './views/Details';
import './App.css';

function App() {
  const [selectedPost, setSelectedPost] = useState({})
  return (
    <BrowserRouter>
      <header>
        <nav><Link to="/">Universe React</Link></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PostFeed handlePostSelection={setSelectedPost}/>} />
          <Route path="/details/:id" element={<Details selectedPost={selectedPost}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
