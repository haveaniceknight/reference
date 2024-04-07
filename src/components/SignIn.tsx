import { Icons } from '@/components/Icons'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'

const SignIn = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <Icons.logo className='mx-auto h-16 w-16' />
                <h1 className='text-2xl font-semibold tracking-tight'>Connect to Reference</h1>
                <p className='text-sm max-w-xs mx-auto'>
                    Sign in / Sign up to your account with Google.
                </p>
            </div>
            <UserAuthForm />
        </div>
    )
}

export default SignIn