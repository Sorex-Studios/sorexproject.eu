module.exports = {
    lang: 'en-US',
    title: 'Sorex Studio',
    description: 'Community',
    themeConfig: {
        logo: 'https://media.discordapp.net/attachments/760210364008366200/826516927367217222/LogoPNG3.png',
        displayAllHeaders: true,
        sidebar: [
            '/',
            '/page-a', ['/page-b', 'Explicit link text'],
        ],
        nav: [{
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }

        ]
    }

}