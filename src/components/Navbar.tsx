import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
// import SearchBar from './SearchBar'

const Navbar = async () => {
    const session = await getServerSession(authOptions)
    return (
        <div className='fixed top-0 inset-x-0 h-fit bg-white border-b border-white z-[10] py-8'>
            <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
                <Link href='/' className='flex gap-2 items-center'>
                    <Icons.logo className='h-10 w-10 sm:h-10 sm:w-10' />
                    {/* <p className='hidden text-zinc-700 text-sm font-medium md:block'>Reference</p> */}
                </Link>

                {/* search bar */}
                {/* <SearchBar /> */}

                {/* actions */}
                {session?.user ? (
                    <UserAccountNav user={session.user} />
                ) : (
                    <Link href='/sign-in' className={`${buttonVariants()} text-base`}>
                        Connect
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar