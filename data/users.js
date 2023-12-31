import PROFILE_PIC from '../assets/images/profilePic.jpg';
import NUGGET from '../assets/images/nugget.png';
import NOODLES from '../assets/images/noodles.png';
import CAT from '../assets/images/cat.jpeg';
import FUNNY_NOODLES from '../assets/images/funnynoodles.png';
import NUGGET_BOOTY from '../assets/images/booty.png';
import PROFILE_NUGGET from '../assets/images/nugget.png';


export const users = [
    {
        username: 'Peterhyh',
        firstName: 'Peter',
        lastName: 'Huynh',
        profilePic: PROFILE_PIC,
        bio: 'Hello, this is my bio.',
        email: 'peterhyh@yahoo.com',
        unreadMessages: 10,
        notifications: 7,
        posts: [{
            post_image: CAT,
            likes: 1700,
            caption: 'Look at my lovely cat!',
            comments: [
                {
                    username: 'NoodlesWoodles',
                    comment: "He's mean! Don't trust him!"
                },
                {
                    username: 'BuffNugget',
                    comment: "He smells weird!"
                },
            ],
        }, {
            post_image: FUNNY_NOODLES,
            likes: 2304,
            caption: "Nooders!",
            comments: [],
        }, {
            post_image: NUGGET_BOOTY,
            likes: 2904,
            caption: "Booty booty!",
            comments: [
                {
                    username: 'Nugget',
                    comment: "You were so young!"
                },
            ],
        }, {
            post_image: PROFILE_PIC,
            likes: 3826,
            caption: "Me!",
            comments: [
                {
                    username: 'Nugget',
                    comment: "Cool!"
                },
            ],
        }, {
            post_image: PROFILE_NUGGET,
            likes: 4180,
            caption: "Me!",
            comments: [
                {
                    username: 'Nugget',
                    comment: "That's me!"
                },
            ],
        }, {
            post_image: NOODLES,
            likes: 1633,
            caption: "Me!",
            comments: [
                {
                    username: 'Noodles',
                    comment: "That's me!"
                },
            ],
        }, {
            post_image: PROFILE_PIC,
            likes: 3826,
            caption: "Me!",
            comments: [
                {
                    username: 'Nugget',
                    comment: "Cool!"
                },
            ],
        }, {
            post_image: PROFILE_NUGGET,
            likes: 4180,
            caption: "Me!",
            comments: [
                {
                    username: 'Nugget',
                    comment: "That's me!"
                },
            ],
        }, {
            post_image: NOODLES,
            likes: 1633,
            caption: "Me!",
            comments: [
                {
                    username: 'Noodles',
                    comment: "That's me!"
                },
            ],
        }]
    },
    {
        username: 'NoodlesWoodles',
        firstName: 'Noodles',
        lastName: 'Nguyen',
        profilePic: NOODLES,
        bio: 'Hello, this is my bio.',
        email: 'noodles@yahoo.com',
        unreadMessages: 12,
        notifications: 2,
        posts: [],
    },
    {
        username: 'BuffNugget',
        firstName: 'Nugget',
        lastName: 'Huynh',
        profilePic: NUGGET,
        bio: 'Hello, this is my bio.',
        email: 'nugget@yahoo.com',
        unreadMessages: 90,
        notifications: 20,
        posts: [],
    },

];