import { getUserFromStorage } from '../../utils/getUserStorage';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {
    const token = getUserFromStorage();

    if(token){
        return children;
    } else {
        return <Navigate to='/login'/>
    }
    
}

export default AuthRoute