import { SET_SEAT } from './mutations-type'

export default {
    [SET_SEAT] (state, {seat}){
        state.userState = seat
    },
}