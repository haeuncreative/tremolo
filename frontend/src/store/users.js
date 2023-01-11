// action constants and corresponding action creators
import csrfFetch from "./csrf"
import { RECEIVE_LISTINGS } from "./listings"

export const RECEIVE_USER = "users/RECEIVE_USER"

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const getUser = (userId) => (store) => {
  console.log("haha! got your eyes!!!")
  console.log(store.users)
  if (store.users && store.users[userId]) {
    console.log("store.users[userId]")
    console.log(store.users[userId])
    console.log("======================")
    return store.users[userId]
  } else {
    return null;
  }
}


// thunk action creators
export const fetchUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`)
  if (response.ok) {
    console.log("HELLO!! HELLO!!???")
    console.log(response.json())
    const user = await response.json()
    dispatch(receiveUser(user))
  }
}
export const updateUser = (user) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${user.id}`, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const updatedUser = await response.json();
    dispatch(receiveUser(updatedUser))
  }
}

// export const addWatchlist = (user) => async dispatch => {
//   const response = await
// }
 

const usersReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return { ...newState, ...action.listings}
    case RECEIVE_USER:
      return { ...newState, [action.user.id]: action.user };
    default:
      return state;
  }
}

export default usersReducer;