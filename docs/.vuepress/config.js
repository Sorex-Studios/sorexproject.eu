module.exports = {
    lang: 'en-US',
    title: 'Sorex Studio',
    description: 'Community',
    themeConfig: {
        // LOGO
        logo: 'https://media.discordapp.net/attachments/760210364008366200/826516927367217222/LogoPNG3.png',
        // default value is true. Set it to false to hide next page links on all pages
        nextLinks: true,
        // default value is true. Set it to false to hide prev page links on all pages
        prevLinks: true,
        // You can disable the built-in search box with themeConfig.search: false, and customize how many suggestions will be shown with themeConfig.searchMaxSuggestions:
        search: true,
        searchMaxSuggestions: 10,
        // You can add links to the navbar via themeConfig.nav:
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }
        ],
        // The sidebar automatically displays links for headers in the current active page, nested under the link for the page itself. You can customize this behavior using themeConfig.sidebarDepth. The default depth is 1, which extracts the h2 headers. Setting it to 0 disables the header links, and the max value is 2 which extracts both h2 and h3 headers.
        sidebarDepth: 2,
        sidebar: [{
            title: 'TEST', // required
            children: [
                '/',
                '/T6ZB/Bank.html'
            ]
        }],


    }

}