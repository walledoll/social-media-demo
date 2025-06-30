import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function Login() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <Card className='w-100w gap-2 p-5'>
          <CardTitle className='text-center'>Login</CardTitle>
            <Label>Email</Label>
            <Input type="email"/>
            <Label>Password</Label>
            <Input type='password'/>
            <Button type='submit'>Login</Button>
        </Card>
    </div>
  )
}
