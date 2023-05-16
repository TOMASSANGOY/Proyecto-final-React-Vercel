import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext() //creo mi cintexto
 
export const useDarkModeContext = () => useContext(DarkModeContext) //Creo una funcion para poder consultar mi contexto

export const DarkModeProvider = (props) => { //forma de proveer el contexto en mi app, puede recibir prop si es necesario

    const [darkMode, setDarkMode] = useState(false); //defino el valor inicial de darkMode

    //funciones para modificar mi state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); //Si estaba en V lo paso a F y viceversa

        //Agregacion de class de css por temas de bootswatch
        if(!darkMode){
            document.body.classList.add(`darkMode`)
        } else {
            document.body.classList.remove(`darkMode`)
        }
    }
        //Agrego que valores y funciones van a ser exportados
    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}
