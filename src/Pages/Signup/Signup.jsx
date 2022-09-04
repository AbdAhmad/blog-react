import React, { useState } from "react";

//Packages
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => console.log(values);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="text-center">
              <h3>Sign up</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  // placeholder="Enter email"
                  name="email"
                  value={values.email}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  // placeholder="Password"
                  name="password"
                  value={values.password}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  // placeholder="Password"
                  name="confirmPassword"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
