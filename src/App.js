import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostFeed from './views/PostFeed';
import Details from './views/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav><Link to="/">Universe React</Link></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PostFeed />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
