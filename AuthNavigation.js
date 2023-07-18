import { SignedInStack, SignedOutStack } from "./navigation";
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './App';

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(null);

    const userHandler = (user) => {
        user ? setCurrentUser(user) : setCurrentUser(null);
    };

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, user => userHandler(user));
    }, []);

    return (
        <>
            {
                currentUser
                    ?
                    <SignedInStack />
                    :
                    <SignedOutStack />
            }
        </>
    )
};

export default AuthNavigation;