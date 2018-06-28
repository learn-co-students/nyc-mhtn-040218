// import songs from '../data/songs';

const initialKaraokeState = {
  songs: [],
  currentSong: null,
}

const karaokeReducer = (state = initialKaraokeState, action) => {
  switch(action.type) {
    case "PLAY_SONG":
      return {...state, currentSong: action.payload };
    case "SET_SONGS":
      // throw new Error("boom!!!!")
      return { ...state, songs: action.payload }
    default:
      return state;
  }
}

export default karaokeReducer;
