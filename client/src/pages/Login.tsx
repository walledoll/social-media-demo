import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Login() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <Card className='w-[20em]'>
            <Input type="email" placeholder='Email'/>
            <Input type='password' placeholder='Password'/>
        </Card>
    </div>
  )
}
