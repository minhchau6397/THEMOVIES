import { SET_REF } from '../constants/actionType'


export const setNav = (name, value) => {
    return { type: SET_REF, data: { [name]: value } }
}