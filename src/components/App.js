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
import { ListPeople } from './ListPeople';
import { UseRef } from './UseRef';
import { Form } from './Form';
import { Form2 } from './Form2';
import { Navbar2 } from './navbar2/Navbar2';
import { UseReducer } from './UseReducer';

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
        <Route exact path="/list-people" element={<ListPeople/>} />
        <Route exact path="/use-ref" element={<UseRef/>} />
        <Route exact path="/creating-form" element={<Form/>} />
        <Route exact path="/creating-form2" element={<Form2/>} />
        <Route exact path="/navbar2" element={<Navbar2/>} />
        <Route exact path="/use-reducer" element={<UseReducer/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
