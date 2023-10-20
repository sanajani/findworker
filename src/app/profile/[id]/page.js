import React from 'react'
import Image from 'next/image'
import AboutUser from '../../components/AboutUser'

const Profile = () => {
    return (
        <main className='min-h-screen pt-24 w-full md:max-w-[1200px] mx-auto border-2'>
            <div className='flex items-center flex-col md:flex-row'>
                <div className=''>
                    <div className='bg-red-400 rounded-full relative md:h-56 md:w-56 h-28 w-28'>
                        <Image
                            src='/profile.jpg'
                            alt='userProfile'
                            fill={true}
                            className='rounded-full overflow-hidden absolute object-cover'
                        />
                    </div>
                </div>
                <div className='overflow-auto rounded-lg shadow md:h-fit md:m-8 my-7 hidden md:block'>
                    <table className=''>
                        <thead className='bg-black text-white text-sm font-persionFont'>
                            <tr className=''>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تجربه</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>2 شماره</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>1 شماره</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام خاص</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>وظیفه</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>موقعیت</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تخلص</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>شماره آیدی</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-300 font-persionFont'>
                            <tr>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>سال 4</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>0705669499</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>0797099060</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>sanajani</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>برنامه نویس</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>هرات</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>مبینی</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>ثناوالله</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='grid grid-cols-1 md:hidden my-3 w-[90%] mx-auto'>
                    <div className='bg-gray-200 p-4 rounded-lg shadow '>
                        <div className='flex items-center space-x-2 text-sm flex-col font-medium'>
                            <div className='text-2xl my-2'>سال 4</div>
                            <div className='text-xl my-2'>0705669499</div>
                            <div className='text-xl my-2'>0797099060</div>
                            <div className='text-xl my-2'>sanajani</div>
                            <div className='text-2xl my-2'>برنامه نویس</div>
                            <div className='text-2xl'>هرات</div>
                            <div className='text-2xl my-2'>مبینی</div>
                            <div className='text-2xl my-2'>ثناوالله</div>
                            <div className='text-xl my-2'>1</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about that user */}
            <div>
                <AboutUser />
            </div>

            {/* projects section */}
            <div className='my-8 shadow-lg bg-gray-300'>
                <h1 className='text-2xl px-12 pt-6 font-bold text-right font-persionFont'>پروژه های آخری من</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-4 md:pr-12 md:gap-6 gap-1'>
                    <div className='bg-white w-[90%] mx-auto md:m-10 p-4 shadow-xl rounded-md my-5 sm:my-0'>
                        <div className='relative w-full h-96'>
                            <Image 
                            src='/five.jpg'
                            alt='project number one'
                            fill={true}
                            className='object-cover'
                            />
                        </div>
                        <h1 className='font-semibold text-lg md:text-xl capitalize my-2 text-right font-persionFont'>نام پروژه</h1>
                        <p className='text-right text-lg md:text-xl font-persionFont'>درمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات </p>
                    </div>

                    <div className='bg-white w-[90%] mx-auto md:m-10 p-4 shadow-xl rounded-md my-5 sm:my-0'>
                        <div className='relative w-full h-96'>
                            <Image 
                            src='/two.jpg'
                            alt='project number one'
                            fill={true}
                            className='object-cover'
                            />
                        </div>
                        <h1 className='font-semibold text-lg md:text-xl capitalize my-2 text-right font-persionFont'>نام پروژه</h1>
                        <p className='text-right text-lg md:text-xl font-persionFont'>درمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات </p>
                    </div>

                    <div className='bg-white w-[90%] mx-auto md:m-10 p-4 shadow-xl rounded-md my-5 sm:my-0'>
                        <div className='relative w-full h-96'>
                            <Image 
                            src='/nine.jpg'
                            alt='project number one'
                            fill={true}
                            className='object-cover'
                            />
                        </div>
                        <h1 className='font-semibold text-lg md:text-xl capitalize my-2 text-right font-persionFont'>نام پروژه</h1>
                        <p className='text-right text-lg md:text-xl font-persionFont'>درمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات رمورد پروژه کمی معلومات </p>
                    </div>


                </div>
            </div>
        </main>
    )
}

export default Profile