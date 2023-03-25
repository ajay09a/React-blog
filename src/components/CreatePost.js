import {firestore} from '../firebase';
import { useFormInput } from "../hook";

export const CreatePost = ()=>{
  const title = useFormInput('');
  const SubTitle = useFormInput('');
  const Content = useFormInput('');

  function handlesubmitbtn(e){
    e.preventDefault();
    console.log('title', title);
    console.log('SubTitle', SubTitle);
    console.log('Content', Content);

    firestore.collection('posts').add({
      title: title,
      Subtitle: SubTitle,
      Content: Content,
      CreatedAt: new Date(),
    })
  }
  return(
    <div>
      <h2>Create post</h2>
      <form onSubmit={handlesubmitbtn}>
      <div>
        <label>Title</label>
        <input {...title} />
      </div>
      <div>
        <label>Sub-title</label>
        <input {...SubTitle} />
      </div>
      <div>
        <label>Content</label>
        <textarea {...Content} />
      </div>
      <button>Create</button>
      </form>
    </div>
  )
}