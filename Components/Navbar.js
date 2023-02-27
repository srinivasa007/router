
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ram() {
    return (
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item >
          <Link to='/'>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to ="/About">About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Contact">Contactus</Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default ram;