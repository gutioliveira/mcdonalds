import { MenuActions } from "../../actions/menu";
import { MenuState } from "./types";

const menuInitialState: MenuState = {
  menu: {
    currency: '',
    menus: [],
  },
  modalValue: null,
  loading: false,
};

const menuReducer = (state: MenuState = menuInitialState, action) => {
  switch(action.type){
    case MenuActions.SET_MENU:
      return {
        ...state,
        menu: action.payload
      }
    case MenuActions.SET_MODAL_VALUE:
      return {
        ...state,
        modalValue: action.payload
      }
    case MenuActions.SET_LOADING_MENU:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return {
        ...state,
      }
  }
};

export default menuReducer;