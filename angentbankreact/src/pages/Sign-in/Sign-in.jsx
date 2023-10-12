import '../Home/Home.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setError, clearError, setToken } from '../../components/redux/userSlice';

function SignIn () {

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSignIn = async (e) => { 
    e.preventDefault();
  
      
      const apiUrl = 'http://localhost:3001/api/v1/user/login';
  
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) { 
          const data = await response.json()
          const token = data.body.token

          dispatch(clearError())
          dispatch(setToken(token))
          console.log(token)
          navigate('/Dashboard')
          

        } else {
          dispatch(setError('Email ou mot de passe incorrect.'));
        }

      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
      }
    };


     return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </section>
    </main>
  );
}

export default SignIn
