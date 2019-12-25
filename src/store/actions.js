import {SET_SEAT} from './mutations-type'

export default {
    setSeat({commit}, seat){
        commit(SET_SEAT, {seat})
    }
}