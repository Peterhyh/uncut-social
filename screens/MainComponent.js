// import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { useState } from 'react';

const Main = () => {
    const [content, setContent] = useState();
    return (
        <ProfileScreen />
    )
};

export default Main;