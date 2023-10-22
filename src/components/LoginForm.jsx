import { useAuthContext } from '../contexts/AuthContext';

export const LoginForm = () => {

    const { loginHandler } = useAuthContext();

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <p>You can login with "test@abv.bg" and "123456"</p>
            <form onSubmit={loginHandler}>
                <input type="text" name='email' placeholder="Email..." />
                <input type="password" name='password' placeholder="Password..." />

                <button>
                    Next
                </button>
            </form>
        </div>
    )
}


//signInWithEmailAndPassword function
// При НЕУСПЕШНА заявка: Функцията хвърля грешка която хващаме в catch блока и в кода
// по-горе се вижда как взимаме инфото каква е грешката
// При УСПЕШНА заявка: Функцията логва потребителя в аппа
