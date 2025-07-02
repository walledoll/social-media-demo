import A from '@/components/ui/a'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'


export default function Login() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <Card className='w-100 gap-2 p-5'>
            <CardTitle className='text-center'>Login</CardTitle>
            <form action="">
              <Label>Email</Label>
              <Input required type="email"/>
              <Label>Password</Label>
              <Input required type='password'/>
              <Button className='block w-[100%]' type='submit'>Login</Button>
              <Label className='block place-self-center'>Have not registered? <a href="/register">Register</a></Label>
            </form>
        </Card>
    </div>
  )
}
