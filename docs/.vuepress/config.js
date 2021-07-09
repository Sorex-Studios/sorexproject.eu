module.exports = {
    lang: 'en-US',
    title: 'Sorex Studio',
    description: 'Community',
    port: '8080',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    theme: '@vuepress/theme-default',
    // theme: '@vuepress/plugin-medium-zoom',
    themeConfig: {
        activeHeaderLinks: false,
        // LOGO
        logo: '/logo.png',
        // default value is true. Set it ton false to hide next page links on all pages
        nextLinks: true,
        // default value is true. Set it to false to hide prev page links on all pages
        prevLinks: true,

        docsRepo: 'https://github.com/SorexProject/sorexproject.eu',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/-/edit/:branch/:path',
        repo: 'https://github.com/SorexProject/sorexproject.eu',

        //If you want to set different sidebar for different sub paths, you can set this option to a sidebar object:
        // The key should be the path prefix.
        // The value should be a sidebar array.       
        sidebar: [
            '/README.md',
            {
                text: 'Zombies',
                link: '/Zombies',
                children: [
                    "/Zombies/Features",
                    "/Zombies/Ranks.md",
                    "/Zombies/Bank.md",
                    "/Zombies/Custom-Perks.md",
                    "/Zombies/Challenge.md",
                ]
            },
        ],


        // You can add links to the navbar via themeConfig.nav:
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/',
            },
        ],
    }

}