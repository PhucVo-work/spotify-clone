import { createContext } from "react";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
    const constextValue = {

    }

    return (
        <PlayerContext.Provider value={constextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider