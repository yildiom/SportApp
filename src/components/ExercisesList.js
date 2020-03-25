import React from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';

import Exercise from "./Exercise";


class ExerciseList extends React.Component {
    state = {
        exercises: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/exercises/').then(res => {
            this.setState({ exercises: res.data })
        }).catch(err => console.log(err))
        console.log(this.state);
    }

    deleteExercise = (id) => {
        axios.delete(`http://localhost:8000/exercises/${id}`).then(res => console.log(res.data));
        this.setState({ exercises: this.state.exercises.filter(ex => ex._id !== id) })
    }


    render() {
        return (
            <Container>
                <h3>All Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises &&
                            this.state.exercises.map(currentExercise =>
                                <Exercise exercise={currentExercise}
                                    deleteExercise={this.deleteExercise}
                                    key={currentExercise._id} />
                            )}
                    </tbody>
                </table>
            </Container>

        )
    }

};

export default ExerciseList;