import { useAuthContext } from "../contexts/AuthContext";

export const LoggedUser = () => {
  const { userData } = useAuthContext();


  return (
    <p className="logged-user">User logged in app {'=> '} {userData.isAuthenticated ? `${userData.email}` : 'guest'}</p>
  )
}
