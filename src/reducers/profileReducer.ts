import { reducerActionType } from '../types/reducerActionType'


export type ProfileType = {
    name: string,
    birth: string,
    discipline: string
}

export const profileInitialState: ProfileType = {
    name: "",
    birth: "",
    discipline: ""
}

export const profileReducer = (state: ProfileType, action: reducerActionType) => {
    switch(action.type){
        case "CHANGE_PROFILE":
            return {...state, ...action.payload}
    }

    return state
}