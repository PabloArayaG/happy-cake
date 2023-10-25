import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
return (
<Navbar 
    bg="danger" variant="dark">
    <Container className="justify-content-between">
    <div> 
    <Link 
    to="/"
    className="text-white text-decoration-none ms-3 "
    >
    🏠Home
    </Link>
    <Link
    to="/Contacto"
    className="text-white text-decoration-none ms-3"> 
    📒Contacto
    </Link>
    </div>
    <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
    </Container>
</Navbar>
);
};
export default Navigation;
