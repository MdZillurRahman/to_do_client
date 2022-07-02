import React from 'react';

const About = () => {
    return (
        <div className='m-8'>
            <p className='text-xl mb-3'>What this website contains-</p>
            <ul>
                <li>1. A responsive navbar which contains 4 routes.</li>
                <li>2. User can add their task list in the home page and in ToDo route.</li>
                <li>3. User can select the date to maintain their task list.</li>
                <li>4. User can edit any task information.</li>
                <li>5. If user select any radio button beside task, it will be saved as completed task.</li>
                <li>6. In Completed task route, user can see their completed task according to date.</li>
            </ul>
        </div>
    );
};

export default About;