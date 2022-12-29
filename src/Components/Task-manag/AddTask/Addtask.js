import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../../../Styels/Addtask.scss'
import 'react-toastify/dist/ReactToastify.css';
const Addtask = () => {

    const handelAdd = event => {
        event.preventDefault()
        const taskInfo = {
            taskname: event.target.task.value,
            image: event.target.image.value,
            taskdetails: event.target.details.value,
        }

        //post product data
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Add Succesfully.');
                }
                else {
                    toast.error(data.message);
                }
            })

    }

    return (
        <div className='task'>
            <h1 className='header'>Add Task</h1>
            <form
                onSubmit={handelAdd}
                noValidate=''
                action=''
            >
                <div>
                    <input
                        type='text'
                        name='task'
                        id='name'
                        placeholder='new task'
                        className=' w-96 px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div className=' mt-4'>
                    <input
                        type='url'
                        name='image'
                        id='image'
                        placeholder='image url'
                        className=' w-96 px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div className=' mt-4'>
                    <input
                        type='text'
                        name='details'
                        id='name'
                        placeholder='Details'
                        className=' w-96 px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div className=' mt-2'>
                    <div>
                        <button
                            type='submit'
                            className=' w-40 px-8 py-3 font-semibold rounded-md bg-amber-500 hover:bg-amber-400 hover:text-white text-gray-100'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Addtask;