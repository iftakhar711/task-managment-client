import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/Authprovider';

const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const registerUser = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        //1. Create new account
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                //2. Update Name
                updateUserProfile(name)
                    .then(
                        toast.success('user created succesfully'),
                        navigate(from, { replace: true })
                    )
                    .catch(err => toast.error(err))
            })
            .catch(error =>
                toast.error(error.message)
            )

    }

    return (
        <div>
            <div className='flex justify-center items-center pt-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-stone-200 text-red-600'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    </div>
                    <form
                        onSubmit={registerUser}
                        noValidate=''
                        action=''
                        className='space-y-12 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label htmlFor='password' className='text-sm'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='Strong Password(rec)'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                />
                            </div>

                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account yet?
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;