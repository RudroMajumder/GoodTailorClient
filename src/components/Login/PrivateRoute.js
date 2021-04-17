import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    const email = sessionStorage.getItem("email");
    return (
      <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser.email|| (email && email!=="undefined"))  ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;