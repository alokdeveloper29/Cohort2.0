import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [ song, setSong ] = useState({
        "url": "https://ik.imagekit.io/u6tq7yjwkf/cohort-2/spotify/songs/Dhop__From__Game_Changer____Hindi__4b8hIXBzd.mp3",
        "posterUrl": "https://ik.imagekit.io/u6tq7yjwkf/cohort-2/spotify/posters/Dhop__From__Game_Changer____Hindi__Tg56Q90WL.jpeg",
        "title": "Dhop (From \"Game Changer\") (Hindi)",
        "mood": "surprised",
    })

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
            {children}
        </SongContext.Provider>
    )
}