module.exports = {
    lang: 'en-US',
    title: 'Sorex Studio',
    description: 'Community',
    port: '8080',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    theme: '@vuepress/theme-default',
    themeConfig: {
        activeHeaderLinks: false,
        // LOGO
        logo: '/logo.png',
        // default value is true. Set it ton false to hide next page links on all pages
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
        ],
    }

}