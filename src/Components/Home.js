import React, { useState } from 'react';
import Calender from './Calender';
import ToDoList from './ToDoList';

const Home = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='flex justify-around items-center'>
                <div>
                    <p>
                        Select a date to maintain your to_do list.
                    </p>
                </div>
            <Calender date={date} setDate={setDate}></Calender>
            </div>
            <ToDoList date={date}></ToDoList>
            
        </div>
    );
};

export default Home;