import i18n from "i18next"
import {CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes} from './languageActions'

interface languageState {
  language: "en" | "zh",
  languageList: {name: string, code: string}[]
}

const defaultState : languageState = { 
  language:"en",
  languageList:[{
    name:"中文",
    code:"zh"
  },{
    name:"English",
    code:"en"
  }]
}
export default (state = defaultState, action:LanguageActionTypes) => {
  if(action.type=== CHANGE_LANGUAGE) {
    i18n.changeLanguage(action.payload);
    const newState = {...state, language: action.payload}
    return newState
  }
  if(action.type === ADD_LANGUAGE) {
    const newState = {...state, languageList: [...state.languageList, action.payload]}
    return newState
  }
  return state
}