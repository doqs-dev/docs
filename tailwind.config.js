function withOpacityValue(variable) {
    return ({opacityValue}) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`;
        }
        return `rgb(var(${variable}) / ${opacityValue})`;
    };
}

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // allow tailwind opacity operator on color. need to be specified in main scss file
                primary: withOpacityValue('--color-primary'),
                secondary: withOpacityValue('--color-secondary'),
            },
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        container: {
            center: true,
            // default horizontal padding
            padding: '1rem',
        },
    },
    plugins: [],
    darkMode: 'class',
};