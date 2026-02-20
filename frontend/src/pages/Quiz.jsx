import React from 'react'
import { useParams } from "react-router-dom";

function Quiz() {
    const { slug } = useParams();

    console.log(slug);

    return (
        <div>
            <h1>Quiz: {slug}</h1>
        </div>
    );
}

export default Quiz;