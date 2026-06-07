const LABEL_MAP = { 'classes': 'Classes', 'functions': 'Functions', 'type-aliases': 'Type Aliases' };

const config = {
    title: 'Discord Message Builder',
    tagline: 'Construct Discord messages using a builder pattern',
    url: 'https://dogicing.github.io',
    baseUrl: '/discord-message-builder/',
    onBrokenLinks: 'warn',
    favicon: 'img/favicon.ico',
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
        },
        navbar: {
            title: 'Discord Message Builder',
        },
    },
    markdown: {
        parseFrontMatter: async (props) => {
            const baseResult = await props.defaultParseFrontMatter(props);
            
            if (props.filePath.endsWith('index.md')) {
                baseResult.frontMatter.slug = '/';
                baseResult.frontMatter.title = 'Discord Message Builder';
            }
            
            return baseResult;
        },
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    path: './api',
                    routeBasePath: '/',
                    sidebarItemsGenerator: async ({ defaultSidebarItemsGenerator, ...args }) => {
                        const sidebarItems = await defaultSidebarItemsGenerator(args);
                        
                        const filteredItems = sidebarItems
                            .filter(({ type, id }) => type !== 'doc' || id !== 'index')
                            .map(item => {
                                if (item.type === 'category') {
                                    item.label = LABEL_MAP[item.label.toLowerCase()] || item.label;
                                }
                                return item;
                            });

                        return [
                            {
                                type: 'doc',
                                id: 'index',
                                label: 'Home',
                            },
                            ...filteredItems
                        ];
                    },
                },
            }
        ],
    ],
};

module.exports = config;
