import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {firestore} from '../firebase';

export const PostDetail = ()=>{
  const [post, setpost] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    firestore.collection("posts").doc(postId).get().then((snapshot)=>{
      setpost(snapshot.data());
    })
  })
  return( <div>
            <h1>{post.title}</h1>
            <p>{post.Content}</p>
  </div>)
}