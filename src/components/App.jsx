import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { isLoading , isAuthenticated} = useAuth0()
  if (isLoading) return <div className='loading'>Loading...</div>
  const heading = "Welcome to React Auth0 Login Page"
  const greet = 'Welcome'
  return (
    <main className='main'>
      <Profile greet={greet} />
      <LoginBtn heading={heading}/>
      <LogoutBtn />
    </main>
    )
}

export default App