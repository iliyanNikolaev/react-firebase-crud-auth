import { useAuthContext } from '../contexts/AuthContext'

export const LogoutBtn = () => {

    const { logoutHandler } = useAuthContext();
    
    return (
        <button onClick={logoutHandler} className='logout-btn'>
            Logout
        </button>
    )
}
