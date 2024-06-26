import { buttonVariants } from '@/components/ui/Button'
import { FC } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import SignIn from '@/components/SignIn'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='absolute inset-0'>
        <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-0'>
            <Link
                href='/'
                className={cn(buttonVariants({}))}></Link>
            <SignIn />
        </div>

    </div>
}

export default page