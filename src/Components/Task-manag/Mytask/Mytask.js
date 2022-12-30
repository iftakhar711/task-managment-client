import React from 'react';
import '../../../Styels/Mytask.scss'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const Mytask = () => {


    const { data: task = [], refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await fetch('https://task-app-server-side-ebon.vercel.app/tasks');
            const data = await res.json();
            return data;
        }
    });

    const handleDeletetasks = id => {
        fetch(`https://task-app-server-side-ebon.vercel.app/tasks/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete succesfully...')
                refetch()
            })
    }

    const handelcomplete = event => {
        event.preventDefault()
        const taskInfo = {
            taskname: event.target.task.value,
            taskdetails: event.target.details.value,
        }
        console.log(taskInfo);

        fetch('https://task-app-server-side-ebon.vercel.app/completedtasks', {
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
        <div>
            {
                task?.map(task => <div className="text-center, mytask">
                    <img className='img' src={task?.image} alt="" />

                    <form action="" onClick={handelcomplete}>
                        <div className=' flex flex-col w-80 mx-auto text-center gap-y-4'>
                            <input
                                type='text'
                                name='task'
                                id='name'
                                defaultValue={task?.taskname}
                                disabled
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <input
                                type='text'
                                name='details'
                                id='name'
                                defaultValue={task?.taskdetails}
                                disabled
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className='icons'>
                            <AiOutlineEdit></AiOutlineEdit>
                            <AiOutlineDelete onClick={() => handleDeletetasks(task._id)} ></AiOutlineDelete>
                        </div>
                        <button
                            type='submit'

                            className=' m-4 w-40 px-8 py-3 font-semibold mx-auto rounded-md bg-amber-500 hover:bg-amber-400 hover:text-white text-gray-100'
                        >
                            complete
                        </button>
                    </form>

                </div>)
            }

        </div >
    );
};

export default Mytask;