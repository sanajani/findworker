'use client'
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from 'firebase/storage'
import { useDispatch } from 'react-redux'
import { isLoadingFalse, isLoadingTrue } from '../redux/slice'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik'
import ErrorMessges from './ErrorMessges'
import { list_of_districts } from './ProvinceName'
import { signupSchema } from '@/utils/signupSchema'
import { initialValues } from '@/utils/signupSchema'
import axios from 'axios'
import { useState } from 'react'
import { app } from '@/utils/firebase_app'
import { ToastContainer, toast } from 'react-toastify'


const ClientSignupForm = () => {
    const [profilePic, setProfilePic] = useState(null)
    const dispatch = useDispatch()
    const storage = getStorage(app)
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')

    // upload image url to backend
    const signupFormSubmit = async (values) => {
        try {

            dispatch(isLoadingFalse())
            // Storage
            const fileAddress = new Date().getTime() + profilePic?.name
            // const snapshot = await uploadBytesResumable(fileRef, profilePic);
            // const photoURL = await getDownloadURL(fileRef);

            const fileRef = ref(storage, fileAddress);
            const uploadTask = await uploadBytesResumable(fileRef, profilePic);
            const photoURL = await getDownloadURL(fileRef);

            const postResponse = await axios.post('http://localhost:3000/api/users/signup', { ...values, profile: photoURL })
            router.push('/login')
            toast.success("Signup Successfully",{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            })
        } catch (error) {
            setErrorMessage(error?.response)
            toast.error(error?.response?.data?.message || 'Something went wrong in Login Process',{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            })
        }
        finally{
            dispatch(isLoadingTrue())
        }
    }
    console.log('this is error::::: ',errorMessage);
    return (
            <Formik initialValues={initialValues} onSubmit={signupFormSubmit} validationSchema={signupSchema}>
                <Form className='py-2' autoComplete='off'>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='name'>نام</label>
                        <Field
                            name='name'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='نام شما'
                        />
                        <ErrorMessges name='name' />
                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right '>
                        <label className='text-white mb-1' htmlFor='lastname'> تخلص</label>
                        <Field
                            name='lastName'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='تخلص شما'
                        />
                        <ErrorMessges name='lastName' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='username'>
                            نام خاص
                        </label>
                        <Field
                            name='username'
                            autoComplete='false'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='نام خاص شما باید انگلیسی باشد'
                        />
                        <ErrorMessges name='username' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='password'>
                            رمز
                        </label>
                        <Field
                            name='password'
                            autoComplete='false'
                            type='password'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='رمز شما'
                        />
                        <ErrorMessges name='password' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='job'>
                            وظیفه
                        </label>
                        <Field
                            name='job'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='وظیفه شما'
                        />
                        <ErrorMessges name='job' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='experience'>
                            تجربه
                        </label>
                        <Field
                            name='experiance'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='چند سال تجربه دارین'
                        />
                        <ErrorMessges name='experience' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='firstPhoneNumber'>
                            شماره 1
                        </label>
                        <Field
                            id='firstPhoneNumber'
                            name='firstPhoneNumber'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='شماره تماس 1'
                        />
                        <ErrorMessges name='firstPhoneNumber' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='secondNumber'>
                            شماره 2
                        </label>
                        <Field
                            name='secondNumber'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='شماره تماس 2'
                        />
                        <ErrorMessges name='secondNumber' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='profile'>
                            عکس برای پروفایل
                        </label>
                        <input
                            onChange={(e) => setProfilePic(e.target.files[0])}
                            accept='image/*'
                            name='profile'
                            type='file'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none'
                        />
                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='province'>
                            لطفا ولایت خود را انتخاب کنید
                        </label>
                        <Field as='select' className='outline-none mt-3 rounded-lg px-4 py-1' id='province' name="province">
                            {
                                list_of_districts.map(selectOption => {
                                    return <option key={selectOption.label} value={selectOption.value}>{selectOption.label}</option>
                                })
                            }
                        </Field>
                        <ErrorMessges name='province' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label htmlFor='aboutuser' className='text-white mb-1'>
                            لطفا درمورد خود بنویسید
                        </label>
                        <Field
                            as='textarea'
                            name='aboutuser'
                            className='text-right py-1 px-3 border-b-2 outline-none resize-none'
                            rows={8}
                            placeholder='درمورد خود معلومات بدهید بطور مثال کی استین از کجا استین چی میکنین وغیره'
                        ></Field>
                        <ErrorMessges name='aboutuser' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button type='submit' className='w-fit mb-4 bg-white px-8 py-2 text-sm md:text-base rounded-lg text-blue-500 md:font-bold tracking-wide'>
                            درست کردن حساب
                        </button>
                        <Link
                            href='/login'
                            className='w-fit mb-4 px-8 border-b-2 rounded-lg text-white py-2 text-sm md:text-base md:font-bold tracking-wide'
                        >
                            آیا قبلا حساب داشته اید
                        </Link>
                        <ToastContainer 
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                    />
                    </div>
                </Form>
            </Formik>
    )
}

export default ClientSignupForm