import { useAuth0 } from '@auth0/auth0-react'

const LoginBtn = (props) => {
  const {loginWithRedirect , isAuthenticated} = useAuth0()
  return (
    !isAuthenticated && (
      <>
      <h1 className="login-heading">{props.heading}</h1>
    <button className='btns' onClick={() => loginWithRedirect()}>Login</button>
    </>
    )
    )
}
export default LoginBtn