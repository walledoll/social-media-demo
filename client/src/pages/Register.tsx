import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { useState } from 'react';

export default function Register() {
  const [theme, setTheme] = useState({mode: '', icon: 'sun'});
  const toggleTheme = () =>{
    setTheme((prev) =>(prev.mode === '' ? {mode: 'dark', icon: 'moon'} : {mode: '', icon: 'sun'}))
  };
  return (
    <div className={`flex h-[100vh] justify-center items-center  ${theme.mode}`}>
      <Card className='w-100 p-5'>
          <Button onClick={toggleTheme} className='absolute ml-69 '><img src='../assets/moon.png' alt="" /></Button>
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
            <Button className='mt-3 w-[100%]' type='submit'>Register</Button>
            <Label className='block place-self-center'>Already have account? <a href="/login">Login</a></Label>
          </form>
        </Card>
    </div>
    
  )
}