import Link from "next/link"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/Button"
import { getAuthSession } from "@/lib/auth"

const Navbar = async () => {
    const session = await getAuthSession()
    return <div className='fixed top-2 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-5' >
        <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
            {/* logo */}
            <Link href='/' className='flex gap-2 items-center'>
                {/* <p className="hidden text-zinc-700 text-sm font-medium md:block">Reference</p> */}
                <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6"></Icons.logo>
            </Link>
            {/* search bar */}

            {session?.user ? (
                <p>youre logged in</p>) : (


                <Link href='/sign-in' className={buttonVariants()}>Sign In</Link>

            )}
        </div>
    </div>
}

export default Navbar