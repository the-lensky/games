import axios from 'axios'
import {popularGamesURL} from '../api'

//action creator

export const loadGames = () => async (dispatch) => {
    // FETCH DATA
    const popularData = await axios.get(popularGamesURL())
    console.log(popularData.data.results)
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results
        }
    })

}



