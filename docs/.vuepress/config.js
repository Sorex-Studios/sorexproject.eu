module.exports = {
    lang: 'en-US',
    title: 'Sorex Studios',
    description: 'Community',
    port: '8080',
    head: [
        ['link', { rel: 'icon', href: '/assets/images/logo.png' }]
    ],
    theme: '@vuepress/theme-default',
    // theme: '@vuepress/plugin-medium-zoom',

    // wait the new version
    // plugins: [
    //     [
    //         '@vuepress/docsearch',
    //         {
    //             apiKey: 'd14e9c7c45cd5150e55361797a89cc2b',
    //             indexName: 'Sorex Studios',
    //             locales: {
    //                 '/': {
    //                     placeholder: 'Search Documentation',
    //                 },
    //             },
    //         },
    //     ],
    // ],

    themeConfig: {
        activeHeaderLinks: true,
        // LOGO
        logo: '/assets/images/logo.png',
        // default value is true. Set it ton false to hide next page links on all pages
        nextLinks: true,
        // default value is true. Set it to false to hide prev page links on all pages
        prevLinks: true,

        docsRepo: 'https://github.com/SorexProject/sorexproject.eu',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        repo: 'https://github.com/SorexProject/sorexproject.eu',

        //If you want to set different sidebar for different sub paths, you can set this option to a sidebar object:
        // The key should be the path prefix.
        // The value should be a sidebar array.       
        sidebar: [
            '/README.md',
            {
                text: 'Black ops II Servers',
                link: '/t6',
                children: [
                    {
                        text: 'Zombies Servers',
                        link: '/t6/zombies',
                        children: [
                            "/t6/zombies/features.md",
                            "/t6/zombies/ranks.md",
                            "/t6/zombies/perks.md",
                            "/t6/zombies/bank.md",
                            "/t6/zombies/challenge.md",
                        ]
                    },
                    {   
                        text: 'Multplayer Servers',
                        link: '/t6/multiplayer',
                        children: [
                            "/t6/multiplayer/features.md",
                            "/t6/multiplayer/ranks.md",
                        ]
                    },
                   
                ]
            },
            {
                text: 'Server Hosting',
                link: '/hosting',
                children: [
                    "/hosting/clients/T6.md", 
                    "/hosting/clients/T4.md",
                ]
            }

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