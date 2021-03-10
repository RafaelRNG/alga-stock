import { Action } from "..";
import { User } from "../../services/Authentication.service";

interface AuthenticationState {
   profile?: User
}

function authentication(state: AuthenticationState = {}, action: Action): AuthenticationState {
   switch (action.type) {
      case "AUTHENTICATION_LOGIN":
         return {
            profile: action.payload
         }

      case "AUTHENTICATION_LOGOUT":
         return {}
      default:
         return state
   }
}

export default authentication;