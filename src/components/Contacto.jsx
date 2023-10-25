import { Button, Form } from "react-bootstrap";

const Contacto = () => {
return (
<Form className="text-center"> 
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Correo:</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Descripción</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <div className="d-flex justify-content-center"> 
    <Button className="btn btn-danger mb-3"> Enviar </Button>
    </div>
</Form>
);
}
export default Contacto;
