import { useState } from "react"
import {firestore} from '../firebase';

export const CreatePost = ()=>{
  const [title, setTitle] = useState('');
  const [SubTitle, setSubTitle] = useState('');
  const [Content, setContent] = useState('');

  function handleTitle(e){
    setTitle(e.target.value);
  }
  function handleSubTitle(e){
    setSubTitle(e.target.value);
  }
  function handleContent(e){
    setContent(e.target.value);
  }
  function handlesubmitbtn(e){
    e.preventDefault();
    console.log('title', title);
    console.log('SubTitle', SubTitle);
    console.log('Content', Content);

    firestore.collection('posts').add({
      title,
      SubTitle,
      Content,
      CreatedAt: new Date(),
    })
  }
  return(
    <div>
      <h2>Create post</h2>
      <form onSubmit={handlesubmitbtn}>
      <div>
        <label>Title</label>
        <input value={title} onChange={handleTitle} />
      </div>
      <div>
        <label>Sub-title</label>
        <input value={SubTitle} onChange={handleSubTitle} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={Content} onChange={handleContent} />
      </div>
      <button>Create</button>
      </form>
    </div>
  )
}