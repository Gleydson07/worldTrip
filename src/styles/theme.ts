import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    colors: {
        yellow: {
            900: "#FFBA08",
            50: "#FFBA0850"
        },
        dark: {
            900: "#000",
            700: "#47585B",
            500: "#999999",
            50: "#99999950"
        },
        light: {
            900: "#fff",
            400: "#F5F8FA",
            100: "#DADADA"
        }
    },
    
    fonts: {
        info: 'Poppins',
        heading: 'Poppins',
        body: 'Poppins',
        card: 'Barlow'
    },
    
    styles: {
        global: {
            body: {
                bg: 'light.400'
            }
        }
    }
})