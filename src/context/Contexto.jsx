import { createContext } from "react"

export const Api = createContext();

export function Contexto({children}){
    const equipo = [
        {
            'Nombre':'Jimenez Walter',
            'Titulo':'Desarrollador Front-End',
            'Portafolio':'',
            'Contacto':''
        },
        {
            'Nombre':'Licona Andrés',
            'Titulo':'Desarrollador Front-End',
            'Portafolio':'',
            'Contacto':''
        },
        {
            'Nombre':'Pinilla Daniel',
            'Titulo':'Desarrollador Back-End',
            'Portafolio':'',
            'Contacto':''
        }
    ]
    const servicios = [
        {
            'Titulo':'Diseño Web',
            'img':''
        },
        {
            'Titulo':'Desarrollo Web',
            'img':''
        },
        {
            'Titulo':'Desarrollo App Móviles',
            'img':''
        },
        {
            'Titulo':'Desarrollo de SoftWare',
            'img':''
        },
        {
            'Titulo':'Tienda en linea',
            'img':''
        },
        {
            'Titulo':'Gestión de Hosting y Dominio web',
            'img':''
        },

    ]
    return(
        <Api.Provider value={{equipo,servicios}}>
            {children}
        </Api.Provider>
    )
}