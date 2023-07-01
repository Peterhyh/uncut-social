import { View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const ProfileScreen = () => {
    return (
        <View>
            <ListItem>
                <Avatar />
                <ListItem.Content>
                    <ListItem.Title>Name</ListItem.Title>
                    <ListItem.Subtitle>Bio</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
};

export default ProfileScreen;