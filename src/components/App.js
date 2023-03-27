import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './';
import Navbar  from './Navbar';
import {Home} from "./Home";
import {CreatePost} from "./CreatePost";
import {PostDetail} from "./PostDetail";
import {RemoveItem } from './RemoveItem';
import {Count} from './Count';
import {MultipleReturn} from './MultipleReturn'

function App() {
  return (
    <div className="container">
      <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
        <Route exact path="/count" element={<Count/>} />
        <Route exact path="/remove-item" element={<RemoveItem/>} />
        <Route exact path="/multiple-return" element={<MultipleReturn/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
