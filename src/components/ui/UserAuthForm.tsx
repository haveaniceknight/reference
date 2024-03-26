import { FC } from 'react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

//calling function with argument, generic function
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {

}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    return <div className={cn('flex-justify-center', className)} {...props}>
        <Button>Google</Button></div>
}

export default UserAuthForm