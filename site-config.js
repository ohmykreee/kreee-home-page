import { HomeLinkList } from "./components/LinkList"

export const siteconf = {
    baseurl: "https://www.ohmykreee.top",

    main: {
        name: 'Main',
        bgstyle: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
        avatar: 'https://avatars.githubusercontent.com/u/76862878',
        description: 'Code with love ❤️ and paws 🐾!',
        buttons: HomeLinkList,
    },

    kblog: {
        name: 'Kreee\'s Blog',
        bgstyle: { backgroundColor: 'rgba(0, 99, 177, 0.6)' },
        avatar: 'https://blog.ohmykreee.top/avatar.jpg',
        description: 'Just a blog, blogging my life. 📚',
        buttons: [{name:'Blog', fa:'fa-solid fa-circle-arrow-right', url:'https://blog.ohmykreee.top'}],
    },

    eureka: {
        name:'Project Eureka',
        bgstyle: { backgroundColor: 'rgba(202, 80, 16, 0.6)' },
        avatar: 'https://www.proj-eureka.top/avatar.jpg',
        description: 'Together, we can create a new dimension. 🌌',
        buttons: [{name:'Eureka', fa:'fa-solid fa-circle-arrow-right', url:'https://www.proj-eureka.top'}],
    },

    footer: {
        text: 'Copyright © 2021 - 2022 Kreee Jiang.',
        url: 'https://www.ohmykreee.top'
    },
}