import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {

        case OPEN_MODAL:
            return { isOpen: true, itemModal: action.payload }

        case CLOSE_MODAL:
            return { isOpen: false, itemModal: {} }

        default:
            return state

    }
}