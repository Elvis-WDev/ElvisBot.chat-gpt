


// Obtener global variable de .ENV

export const getEnvVariables = () => {

    // import.meta.env;

    return {

        VITE_API_URL_BASE: import.meta.env.VITE_API_URL_BASE,
        VITE_API_TOKEN: import.meta.env.VITE_API_TOKEN,

    }
}
