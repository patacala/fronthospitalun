import { useEffect, useState } from 'react';
//  Interfaces
import { IUser } from '../components/user/user.interface';
export const useLoggedUser = () => {
    const [user, setUser] = useState<IUser>({
        fullname: '',
        firstName: '',
        role: '',
        ccid: ''
    });

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user') as string);

        setUser({
            fullname: user.fullname + ' ' + user.lastname,
            firstName: user.fullname,
            role: user.role,
            ccid: user.ccid
        })
    }, []);

    return user;
}