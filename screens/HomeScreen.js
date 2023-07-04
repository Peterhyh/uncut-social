import { ListItem } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    return (
        <ListItem onPress={() => navigation.navigate('Profile')}>
            <ListItem.Content>
                <ListItem.Title>
                    Profile
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
};

export default HomeScreen;