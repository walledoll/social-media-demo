import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function Register() {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <Card className='w-100 gap-2 p-5'>
          <CardTitle className='text-center'>Register</CardTitle>
          <form action="">
            <Label>Name</Label>
            <Input required type='text'></Input>
            <Label>Surname</Label>
            <Input required type='text'></Input>
            <Label>Phone</Label>
            <Input required type='tel'></Input>
            <Label>Email</Label>
            <Input required type="email"/>
            <Label>Password</Label>
            <Input required type='password'/>
            <Button className='block w-[100%]' type='submit'>Register</Button>
            <Label className='block place-self-center'>Already have account? <a href="/login">Login</a></Label>
          </form>
        </Card>
    </div>
    
  )
}