import { Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const ProfileScreen = () => {
    return (
        <ListItem>
            <Avatar />
            <ListItem.Content>
                <ListItem.Title>Name</ListItem.Title>
                <ListItem.Subtitle>Bio</ListItem.Subtitle>
            </ListItem.Content>
            <Text>Content</Text>
        </ListItem>

    );
};

export default ProfileScreen;