import React, { useEffect, useState } from 'react';
import '../../../Styels/Mytask.scss'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { toast } from 'react-toastify';

const Mytask = () => {

    const [task, setTasks] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])

    const handleDeletetasks = id => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete succesfully...')
                data.preventDefault()
            })
    }
    return (
        <div>
            {
                task?.map(task => <div className="text-center, mytask">
                    <img className='img' src={task?.image} alt="" />
                    <p className="mb-2 font-bold text-md">{task?.taskname}</p>
                    <p className="text-gray-700">
                        {task?.taskdetails}
                    </p>
                    <div className='icons'>
                        <AiOutlineEdit></AiOutlineEdit>
                        <AiOutlineDelete onClick={() => handleDeletetasks(task._id)} ></AiOutlineDelete>
                    </div>

                </div>)
            }

        </div >
    );
};

export default Mytask;