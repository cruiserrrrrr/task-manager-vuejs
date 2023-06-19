module.exports = {
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/index.scss";`,
            },
        },
    },
};