import './App.css';
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";

function App() {
  return (
    <>
    <main className="main">
      <h1 className="title">Registration</h1>
      <Form>
        <Form.Text className="text-muted text">
        Create your account. it's free and it takes only a minute
        </Form.Text>
        <Row>        
          <Form.Label>Full Name</Form.Label>
          <Col>            
            <FormControl placeholder="First name" />
          </Col>
          <Col>
            <FormControl placeholder="Last name" />
          </Col>
        </Row>
        <Form.Label className="label">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label className="label">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />            
        <Form.Label className="label">Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
        <Button className="register-btn btn btn-info" variant="primary" type="submit">
          Register Now
        </Button>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          I accept <span className="green">The terme of Use</span> and <span className="green">Privacy Policy</span>
        </label>
        </div>
      </Form>
    </main>
    </>
  );
}

export default App;
