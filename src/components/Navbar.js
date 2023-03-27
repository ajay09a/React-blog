import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <ul id='nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="create-post">Create Post</Link>
        </li>
        <li>
          <Link to="count">Count</Link>
        </li>
        <li>
          <Link to="remove-item">Remove</Link>
        </li>
        <li>
          <Link to="multiple-return">Multiple Return</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
