module.exports = {
    purge: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'logo': ['Shadows Into Light', 'cursive'],
                'default': ['ABeeZee', 'sans-serif']
            },
            colors: {
                'black': '#404040',
                'white': '#FBFAF5',
                'turquoise': '#2c6d88',
                'yellow': '#fcf6d6',
                'yellow--dark': '#fdea9d'
            },
            fill: {
                'white': '#FBFAF5',
                'black': '#404040'
            }
        }
    },
    variants: {
        extend: {
            svgFill: ['hover', 'focus']
        }
    },
    plugins: [],
}