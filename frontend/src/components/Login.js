import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }



    inputChange = (e) => {
        const cred = this.state.credentials;
        cred[e.target.name] = e.target.value
        this.setState({ credentials: cred })
    }

    login = (e) => {
        e.preventDefault()
        console.log(e)

    }
    render() {
        return (
            <Form className="col-md-6 p-3" method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter email" name="username"

                        onChange={this.inputChange} />
                    <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password" name="pwd"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.login}>
                    <strong>Login</strong>
                </Button>
            </Form>
        )
    }
}

export default Login