import { cookies } from 'next/headers'
import Home from './home/page'
import Login from './login/page'

export default async function App() {
  const isAuthenticated = cookies().get('token')

  return <main>{isAuthenticated ? <Home /> : <Login />}</main>
}
