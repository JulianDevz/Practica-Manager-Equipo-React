import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "ASENSIO",
            foto: "https://i.ibb.co/NKzywVx/ASENSIO-380-X501-Thumb.jpg"
        },
        {
            id: 2,
            nombre: "BENZEMA",
            foto: "https://i.ibb.co/k4kTNhc/BENZEMA-380-X501-Thumb.jpg"
        },
        {
            id: 3,
            nombre: "CARVAJAL",
            foto: "https://i.ibb.co/hdNKL7M/CARVAJAL-380-X501-Thumb.jpg"
        },
        {
            id: 4,
            nombre: "CASEMIRO",
            foto: "https://i.ibb.co/M65yrsF/CASEMIRO-380-X501-Thumb.jpg"
        },
        {
            id: 5,
            nombre: "COURTOIS",
            foto: "https://i.ibb.co/W6jtM5Y/COURTOIS-380-X501-Thumb.jpg"
        },
        {
            id: 6,
            nombre: "HAZARD",
            foto: "https://i.ibb.co/6H9PHYQ/HAZARD-380-X501-Thumb.jpg"
        },
        {
            id: 7,
            nombre: "ISCO",
            foto: "https://i.ibb.co/8jprKv6/ISCO-380-X501-Thumb.jpg"
        },
        {
            id: 8,
            nombre: "KROOS",
            foto: "https://i.ibb.co/7RQgCf1/KROOS-380-X501-Thumb.jpg"
        },
        {
            id: 9,
            nombre: "LUCAS",
            foto: "https://i.ibb.co/124nq9r/LUCAS-380-X501-Thumb.jpg"
        },
        {
            id: 10,
            nombre: "MENDY",
            foto: "https://i.ibb.co/BsPVpPB/MENDY-380-X501-Thumb.jpg"
        },
        {
            id: 11,
            nombre: "LUNIN",
            foto: "https://i.ibb.co/0QcxkS2/LUNIN-380-X501-Thumb.jpg"
        },
        {
            id: 12,
            nombre: "MARCELO",
            foto: "https://i.ibb.co/9qC0Jfh/MARCELO-380-X501-Thumb.jpg"
        },
        {
            id: 13,
            nombre: "MARIANO",
            foto: "https://i.ibb.co/3f6NLWR/MARIANO-380-X501-Thumb.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState , action) => {
    
    if (action.type === "AGREGAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    return state
}

export default createStore(reducerEntrenador);