import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div style={style.navbar}>
      <ul id='nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="create-post">Create-Post</Link>
        </li>
        <li>
          <Link to="count">Count</Link>
        </li>
        <li>
          <Link to="remove-item">Remove</Link>
        </li>
        <li>
          <Link to="multiple-return">Multi-Return</Link>
        </li>
        <li>
          <Link to="list-people">List</Link>
        </li>
        <li>
          <Link to="use-ref">UseRef</Link>
        </li>
        <li>
          <Link to="creating-form">Form</Link>
        </li>
        <li>
          <Link to="creating-form2">Form2</Link>
        </li>
        <li>
          <Link to="navbar2">Navbar</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;


const style = {
  navbar: {
    background: 'black',
    paddingTop: 1,
    height: 55
  }
}