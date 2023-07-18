import SEARCH_INACTIVE from '../../assets/images/searchInactive.png';
import SEARCH_ACTIVE from '../../assets/images/searchActive.png';
import HOME_INACTIVE from '../../assets/images/homeInactive.png';
import HOME_ACTIVE from '../../assets/images/homeActive.png';
import PIC from '../../assets/images/profilePic.jpg';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { useState } from 'react';

const icons = [
    {
        name: 'Home',
        inactive: HOME_INACTIVE,
        active: HOME_ACTIVE,
    },
    {
        name: 'Search',
        inactive: SEARCH_INACTIVE,
        active: SEARCH_ACTIVE,
    },
    {
        name: 'Profile',
        inactive: PIC,
        active: PIC,
    },
];



const BottomTab = ({ activeTab, setActiveTab }) => {

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                style={[
                    styles.icon,
                    icon.name === 'Profile' ? styles.profilePic() : null,
                    activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null
                ]}
                source={activeTab === icon.name ? icon.active : icon.inactive}
            />
        </TouchableOpacity>
    );

    return (

        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, i) => (
                    <Icon key={i} icon={icon} />
                ))}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        zIndex: 777,
        width: '100%',
        backgroundColor: '#000',
        paddingVertical: 20,
        bottom: 0,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    icon: {
        height: 33,
        width: 33,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: activeTab === 'Profile' ? 2 : 0,
    }),
});
export default BottomTab;