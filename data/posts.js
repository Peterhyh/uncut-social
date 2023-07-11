import PETER from '../assets/images/profilePic.jpg';
import NUGGET from '../assets/images/nugget.png';
import NOODLES from '../assets/images/noodles.png';
import FUNNY_NOODLES from '../assets/images/funnynoodles.png';
import NUGGET_BOOTY from '../assets/images/booty.png';
import CAT from '../assets/images/cat.jpeg';

export const POST = [
    {
        username: 'Peterhyh',
        profile_picture: PETER,
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
    },
    {
        username: 'NoodlesWoodles',
        profile_picture: NOODLES,
        post_image: FUNNY_NOODLES,
        likes: 2304,
        caption: "That's me!",
        comments: [],
    },
    {
        username: 'BuffNugget',
        profile_picture: NUGGET,
        post_image: NUGGET_BOOTY,
        likes: 2904,
        caption: "Booty booty!",
        comments: [
            {
                username: 'Peterhyh',
                comment: "You were so young!"
            },
        ],
    }
]; 