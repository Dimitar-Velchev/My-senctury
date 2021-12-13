import { useEffect, useContext} from 'react';
   
import {logout} from '../../services/userService';
import { AuthContext } from '../../contexts/AuthContext';

const Logout = ({history}) => {
    const { user, logoutUser } = useContext(AuthContext);
    
    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                logoutUser();
                history.push('/');
            })
    }, [])

    return null;
};

export default Logout;