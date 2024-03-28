import { Icons } from "./Icons"
// import Link from "next/link"
import UserAuthForm from "./UserAuthForm"



const SignIn = () => {
    return <div className="container mx-autp flex w-full flex-col justify-center space-y-6 sm:w-[400px] ">
        <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className='mx-auto h-12 w-12' />
            {/* <h1 className="text-2xl font semibold tracking-tight">Welcome</h1> */}
            <p className="text-sm max-w-xs mx-auto "> Sign In or Sign Up with Google</p>
            {/* sign in form */}
            <UserAuthForm />
            {/* use this style for sign in button */}
            {/* <p className='px-8 text-center text-sm text-zinc-700'>New to Reference?{' '}
                <Link href='/sign-up' className='hover:text-zinc-800 text-sm underline underline-offset'>
                    Sign Up
                </Link></p> */}
        </div>



    </div >
}

export default SignIn