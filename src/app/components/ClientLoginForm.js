"use client"
import React from 'react'
import Link from 'next/link'
import { Formik, Field, Form } from 'formik'
import { loginSchema, initialValuesLogin } from '@/utils/signupSchema'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { isAuthFalse } from '../redux/isAuth'

const ClientLoginForm = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const loginFormSubmit = async (values) => {

        try {
            const res = await axios.post('http://localhost:3000/api/users/login', values);
                dispatch(isAuthFalse())
                router.push('/')
            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Formik initialValues={initialValuesLogin} validationSchema={loginSchema} onSubmit={loginFormSubmit}>
            <Form className='py-2'>
                <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                    <label className='text-white mb-1' htmlFor="username">نام خاص</label>
                    <Field 
                    name='username'
                    type="text" 
                    className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500' 
                    placeholder='نام خاص خود را وارد کنید' />
                </div>
                <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                    <label className='text-white mb-1' htmlFor="username">رمز</label>
                    <Field 
                    name='password'
                    type="password" 
                    className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500' 
                    placeholder='رمز شما' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <button type='submit' className='w-fit mb-4 bg-white px-8 py-2 text-sm md:text-base rounded-lg text-blue-500 md:font-bold tracking-wide'>وارد شدن</button>
                    <Link className='w-fit mb-4 px-8 border-b-2 rounded-lg text-white py-2 text-sm md:text-base md:font-bold tracking-wide' href='/signup'> ندارید Jobfinder آیا حساب </Link>
                </div>
            </Form>
        </Formik>
    )
}

export default ClientLoginForm