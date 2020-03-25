import React from "react";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';


class EditExercise extends React.Component {

    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/exercises/${this.props.match.params.id}`).then(res => {
            this.setState({
                username: res.data.username,
                description: res.data.description,
                duration: res.data.duration,
                date: new Date(res.data.date),
            })

        });
        axios.get('http://localhost:8000/users/').then(res => {
            if (res.data.length > 0) {
                this.setState({
                    users: res.data.map(user => user.username),
                    username: res.data[0].username
                })
            }
        })
    }


    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate = (date) => {
        this.setState({
            date: date
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };
        console.log(exercise);
        axios.post('http://localhost:8000/exercises/update/' + this.props.match.params.id, exercise)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <Container>
                <h3>Edit Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username:</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {this.state.users.map(user =>
                                <option key={user} value={user}>
                                    {user}
                                </option>)}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input
                            required
                            onChange={this.onChangeDescription}
                            type="text"
                            className="form-control"
                            value={this.state.description}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Duration (in minutes):</label>
                        <input
                            onChange={this.onChangeDuration}
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Date:</label>
                        <DatePicker
                            onChange={this.onChangeDate}
                            selected={this.state.date}

                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="submit"
                            value='Edit Exercise Log'
                            className='btn btn-primary'
                        />
                    </div>
                </form>
            </Container >
        )
    }

};

export default EditExercise;