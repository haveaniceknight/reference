import { Sign } from 'crypto'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from '@/ui/button'
// import  from '@/components/sigin'
// import SignOutButton from '@/components/signout'


const Navbar = async ({ }) => {
    const session = await getServerSession()
    return (<div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between 
    '>
        <div className='container max-w-7xl mx-auto w-full dlex justify-between items-center'>
            <Link href='/' className={buttonVariants({ variant: 'link' })}>
                Text Reference 1.0
            </Link>
            <div className='md:hidden'>
                {/* <ThemeToggle /> */}
            </div>


            {/* <div className='hidden md:flex gap-4'> <ThemeToggle /> */}
            <Link href='/documentation' className={buttonVariants({ variant: 'ghost' })}>
                Documentation
            </Link>
            {/* {session ? (

                <>
                    <Link className={buttonVariants({ variant: 'ghost' })} href='/dashboard'>Dashboard
                    </Link> */}
            {/* <SignOutButton />
                </>
            ) : (
                <SignInbutton />
            ) */}
            {/* } */}

        </div>
    </div>
        // </div >
    )
}

export default Navbar