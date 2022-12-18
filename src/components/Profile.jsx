import { useAuth0 } from '@auth0/auth0-react'

const Profile = (props) => {
  const {user , isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (
    <div className='details'>
      <img src={user.picture} alt={user.name} width="60" />
      <h1 className='heading'>{props.greet} {user.nickname}</h1>
      <p>{user.email}</p>
    </div>
    )
    )
}
export default Profile