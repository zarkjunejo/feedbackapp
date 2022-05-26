import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
    return (
        <Card>
            <h1>About this Project</h1>
            <p>
                this is a react app to leave feedback for a product or service
            </p>
            <p>version : 1.0.0.0</p>

            <p>
                <Link to='/'> Go Back to Home</Link>
            </p>
        </Card>
    )
}

export default About
