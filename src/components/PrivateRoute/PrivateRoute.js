import { AuthContext } from './../../context/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}  ) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(!user){
        return <useNavigate to='/login' state={{from: location}} replace></useNavigate>
    }
    return children;

};

export default PrivateRoute;