import { createSelector } from "reselect";

const selectuser = state => state.usersInfo

export const selectUserById = createSelector(
    [selectuser,(state,userId)=>userId],
    (users,userId)=> users.find(user=>user.id==userId)
)