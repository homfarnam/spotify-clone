export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // REMOVE after finished developing
    token:'BQCOrYk8KJ3M--T9iMp36q2cC0NVdpI4PkUhaWfZjAuKJduljRhH9gzJFPaO-n7iTqbocZP5CpEXcDFLglg1W249fFtOxthpQaVx-3cKG5wTHKpovA5JLSt598fvw4XZu4RYRxRQgogw-xZ8fjXHKcavBhveczdy9w'
}


const reducer = (state,action) => {
    console.log(action)
 
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token

            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        
        
        default:
            return state
    }
}


export default reducer