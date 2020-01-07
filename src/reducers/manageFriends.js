export function manageFriends(state = {
    friends: []
}, action){
    switch (action.type) {

        case "ADD_FRIEND":
            return (
                 {...state, 
                    friends: [...state.friends, action.friend]
                 }
            )
        default:
            return state

        case "REMOVE_FRIEND":
           let updatedFriends = state.friends.filter(friend => friend.id !== action.id)
                return (
                    { friends: updatedFriends
                        }
                 )

    }


}
