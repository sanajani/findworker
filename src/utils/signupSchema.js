import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name: Yup.string()
        .min(2, 'باید حروف نام شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف نام شما کمتر از ۲۵ حرف باشد')
        .required("نام الزامی است"),
    lastName: Yup.string()
        .min(2, 'باید حروف تخلص شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف تخلص شما کمتر از ۲۵ حرف باشد')
        .required("تخلص الزامی است"),
    username: Yup.string()
        .min(2, 'باید حروف نام خاص شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف نام خاص شما کمتر از ۲۵ حرف باشد')
        .required("نام خاص الزامی است"),
    password: Yup.string()
        .min(3, 'باید حداقل بیشتر از دو حرف باشد رمز شما')
        .max(25, 'باید رمز شما کمتر از ۲۵ حرف باشد')
        .required("رمز الزامی است"),
    job: Yup.string()
        .required("ذکر کردن نوغ وظیفه الزامی است"),
    experiance: Yup.string(),

    firstPhoneNumber: Yup.string()
    .required("شماره تماس 1 الزامی است")
    .matches(/^[0-9]+$/, "باید دقیقا ده نمبر باشد")
    .min(10, 'باید دقیقا ده نمبر باشد')
    .max(10, 'باید دقیقا ده نمبر باشد'),

    secondNumber: Yup.string()
    .required("شماره تماس 2 الزامی است")
    .matches(/^[0-9]+$/, "باید دقیقا ده نمبر باشد")
    .min(10, 'باید دقیقا ده نمبر باشد')
    .max(10, 'باید دقیقا ده نمبر باشد'),

    province: Yup.string().required('نام ولایت خود را انتخاب کنید لطفا'),
    
    aboutuser: Yup.string()
        .min(30, 'در مورد خود حداقل ۳۰ کلمه بنویسید')
        .max(100, 'در مورد خود حداقل ۱۰۰ کلمه بنویسید')
        .required("درمورد خود بنویسید این قسمت الزامی میباشد"),
})


export const initialValues = {
    name: 'sana',
    lastName: 'mobini',
    username: 'sanai',
    password: 'sana',
    job: 'good joob',
    experience: '30years',
    firstPhoneNumber: '0705669499',
    secondNumber: '0797099060',
    profile: '',
    province: '',
    aboutuser: 'رمورد خود بنویسید این قسمت الزامی میبارمورد خود بنویسید این قسمت الزامی میبا'
}

export const initialValuesLogin = {
    username: '',
    password: '',
}

export const loginSchema = Yup.object({
    username: Yup.string()
        .min(2, 'باید حروف نام خاص شما بیشتر از دو حرف باشد')
        .max(25, 'باید حروف نام خاص شما کمتر از ۲۵ حرف باشد')
        .required("نام خاص الزامی است"),
    password: Yup.string()
        .min(3, 'باید حداقل بیشتر از دو حرف باشد رمز شما')
        .max(25, 'باید رمز شما کمتر از ۲۵ حرف باشد')
        .required("رمز الزامی است"),})