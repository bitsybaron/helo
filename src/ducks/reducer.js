const initialState = {
    id: '',
    username: '',
    profilePic: ''
}
const IDKYET = 'IDKYET'
export function idkyet(id, username, profilePic) {
    return {
        type: IDKYET,
        payload: {
            id,
            username,
            profilePic
        }
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type){
        case IDKYET:
            return {
                id: action.payload.id,
                username: action.payload.username,
                profilePic: action.payload.profilePic
            }
        default:
            return state
    }
}