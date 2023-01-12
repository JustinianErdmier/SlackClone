module.exports = {
    content: [
        './**/*.{cshtml,razor}',
    ],
    theme:   {
        extend: {
            colors:     {
                'slackBg':  '#3e103f',
                'slackNav': '#2b092a',
            },
            fontFamily: {
                sans: [
                    'Montserrat',
                    'sans-serif'
                ]
            },
        }
    },
    plugins: [
        require('tailwindcss-textshadow'),
    ]
};
