import React, {useState, useEffect} from 'react';
import {firestore} from '../firebase';
import { Link } from 'react-router-dom';

export const Home = ()=>{
  const [posts, setposts] = useState([]);
  useEffect(()=>{
    firestore.collection("posts").get().then((snapshot)=>{
      const posts = snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      setposts(posts);
    })
  })
  return( <div>
    <h1>Tech Blog</h1>
    <div id='blog-by'>Ajay</div>
    {
      posts.map((post, index)=>{
        return (<>
                  <div className='post' key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                      <h3>{post.title}</h3>
                    </Link>
                    <p>{post.Subtitle}</p>
                  </div>
        </>)
      })
    }
  </div>)
}