import React from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';


class CreateUser extends React.Component {
    state = {
        username: '',
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username,
        };
        console.log(user);

        axios.post('http://localhost:8000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
        })
    }



    render() {
        return (
            <Container>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input
                            required
                            onChange={this.onChangeUsername}
                            type="text"
                            className="form-control"
                            value={this.state.username}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="submit"
                            value='Create User'
                            className='btn btn-primary'
                        />
                    </div>
                </form>
            </Container>
        )
    }

};

export default CreateUser;