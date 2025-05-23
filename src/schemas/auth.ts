import * as yup from 'yup'


export const LoginSchema = yup.object({
    email:yup.string().email('Enter a valid email').required('Email is required'),
    password:yup.string().required('Password is required')
})

export const RegisterSchema = yup.object({
    email:yup.string().email('Enter a valid email').required('Email is required'),
    password:yup.string().required('Password is required').min(6,'Password must be 6 character long.'),
    confirmPassword:yup.string().required('Password is required').oneOf([yup.ref('password'),''],'Password must match.'),
    fullName:yup.string().required('Name in required.')

})