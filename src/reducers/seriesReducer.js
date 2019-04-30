import { SET_SERIES } from '../actions'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SERIES:
            return action.series
        default:
            return state
    }
}