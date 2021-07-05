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
        // If you set it in the form of `organization/repository`
        // we will take it as a GitHub repo
        // You can also set it to a URL directly
        repo: 'https://github.com/SorexProject/sorexproject.eu',

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