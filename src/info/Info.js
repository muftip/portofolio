import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(160, 183, 202)", "rgb(46, 7, 221)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mufti",
    lastName: "Purwalaksana",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "it support with web development skills",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
      
        {
            emoji: '🌎',
            text: 'based in the Bandung'
        },
        {
            emoji: "💼",
            text: "it support Remula"
        },
        {
            emoji: "📧",
            text: "muftipurwa4@gmail.com",
            link: "mailto:muftipurwa4@gmail.com"  // Tambahkan ini
          }
    ],
    socials: [
        {
            link: "https://instagram.com/mufti__p",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/muftip",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:muftipurwa4@gmail.com",
            icon: "fa fa-envelope", // Ganti dengan icon email
            label: 'email' // Ganti label
          }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm mufti. I have a background in fine arts, which I later applied in IT support. This experience sparked my passion for web development, where I now focus on blending creativity with technology.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'laravel', 'mysql', 'tailwind'],
            exposedTo: ['nodejs', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'skateboarding',
            emoji: '🛹'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'painting',
            emoji: '🎨'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            source: "https://muftip.github.io/", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            source: "https://github.com/muftip/kelas-tambahan",
            image: mock2
        },
        {
            title: "Project 3",
            source: "https://github.com/muftip/toko-bunga",
            image: mock3
        },
        {
            title: "Project 4",
            source: "https://github.com/muftip/klinik",
            image: mock4
        },
        {
            title: "Project 5",
            source: "https://github.com/muftip/donasi",
            image: mock5
        }
    ]
}