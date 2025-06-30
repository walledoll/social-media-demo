import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function Register() {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <Card className='w-100w gap-2 p-5'>
          <CardTitle className='text-center'>Register</CardTitle>
          <Label>Name</Label>
          <Input type='text'></Input>
          <Label>Surname</Label>
          <Input type='text'></Input>
          <Label>Phone</Label>
          <Input type='tel'></Input>
          <Label>Email</Label>
          <Input type="email"/>
          <Label>Password</Label>
          <Input type='password'/>
          <Button type='submit'>Login</Button>
        </Card>
    </div>
  )
}