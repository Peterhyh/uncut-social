import HomeScreen from './HomeScreen';
import { useState } from 'react';

const Main = () => {
    const [content, setContent] = useState();
    return (
        <HomeScreen />
    )
};

export default Main;