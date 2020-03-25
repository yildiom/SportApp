import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Exercise = ({ exercise, deleteExercise, key }) => (
    <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${exercise._id}`}><Button>edit</Button></Link>
            <Button onClick={() => { deleteExercise(exercise._id) }}>delete</Button>
        </td>
    </tr>
);

export default Exercise;