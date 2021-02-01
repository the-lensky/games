import React, {useEffect} from 'react'
import {loadGames} from './actions/gamesAction'
import {useDispatch} from 'react-redux'


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGames())
    }, [])

    return (
        <div>
            <h1>GAMES</h1>
        </div>

    )
}

export default App
