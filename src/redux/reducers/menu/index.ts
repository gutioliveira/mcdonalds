import { MenuActions } from "../../actions/menu";
import { MenuState } from "./types";

const menuInitialState: MenuState = {
  menuList: [],
  modalValue: null,
};

const menuReducer = (state: MenuState = menuInitialState, action) => {
  switch(action.type){
    case MenuActions.SET_MODAL_VALUE:
      return {
        ...state,
        modalValue: action.payload
      }
    default:
      return {
        ...state,
      }
  }
};

export default menuReducer;