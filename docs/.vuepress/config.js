module.exports = {
    lang: 'en-US',
    title: 'Sorex Studio',
    description: 'Community',
    port: '8080',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        activeHeaderLinks: false,
        // LOGO
        logo: '/logo.png',
        // default value is true. Set it to false to hide next page links on all pages
        nextLinks: true,
        // default value is true. Set it to false to hide prev page links on all pages
        prevLinks: true,
        // You can disable the built-in search box with themeConfig.search: false, and customize how many suggestions will be shown with themeConfig.searchMaxSuggestions:
        // search: true,
        // searchMaxSuggestions: 10,
        // You can add links to the navbar via themeConfig.nav:
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // string - page file path
            '/bar/README.md',
        ],
        // The sidebar automatically displays links for headers in the current active page, nested under the link for the page itself. You can customize this behavior using themeConfig.sidebarDepth. The default depth is 1, which extracts the h2 headers. Setting it to 0 disables the header links, and the max value is 2 which extracts both h2 and h3 headers.
        sidebarDepth: 2,
        sidebar: [{
            title: 'Group 1', // required
            path: '/foo/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            children: [
                '/',
                '/T6ZB/Bank.html'

            ]
        }],
    }

}