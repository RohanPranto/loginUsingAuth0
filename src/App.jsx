import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User, useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

function App() {
  const { isAuthenticated , user } = useAuth0(); // Move it inside the component

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <a className="navbar-brand" href="#">
            NeighbourGoods!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">

              <li>
                {isAuthenticated && <p> {user.name} </p> }
              </li>

              {isAuthenticated ? (
                <li className="nav-item">
                  <LogoutButton />
                </li>
              ) : (
                <li className="nav-item">
                  <LoginButton />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
