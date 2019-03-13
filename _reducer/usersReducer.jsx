import usersConstants from '../_constants/usersConstants'
export function users(state = {}, action) {
    switch (action.type) {
   case usersConstants.AUTHENTICATE_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.AUTHENTICATE_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.AUTHENTICATE_REQUEST:
      return {
          loading: true
      };

   case usersConstants.REGISTER_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.REGISTER_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.REGISTER_REQUEST:
      return {
          loading: true
      };

   case usersConstants.GETALLUSER_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.GETALLUSER_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.GETALLUSER_REQUEST:
      return {
          loading: true
      };

   case usersConstants.GETUSERGAMESBYUSERNAME_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.GETUSERGAMESBYUSERNAME_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.GETUSERGAMESBYUSERNAME_REQUEST:
      return {
          loading: true
      };

   case usersConstants.GETUSERFRIENDSBYUSERNAME_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.GETUSERFRIENDSBYUSERNAME_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.GETUSERFRIENDSBYUSERNAME_REQUEST:
      return {
          loading: true
      };

   case usersConstants.GETUSERINFOBYUSERNAME_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.GETUSERINFOBYUSERNAME_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.GETUSERINFOBYUSERNAME_REQUEST:
      return {
          loading: true
      };

   case usersConstants.GETUSERINVITATIONSBYUSERNAME_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.GETUSERINVITATIONSBYUSERNAME_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.GETUSERINVITATIONSBYUSERNAME_REQUEST:
      return {
          loading: true
      };

   case usersConstants.GETUSERHASHBYID_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.GETUSERHASHBYID_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.GETUSERHASHBYID_REQUEST:
      return {
          loading: true
      };

   case usersConstants.UPDATE_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants.UPDATE_FAILURE:
      return {
          error: action.error
      };
   case usersConstants.UPDATE_REQUEST:
      return {
          loading: true
      };

   case usersConstants._DELETE_SUCCESS:
      return {
          temp: action.temp
      };
   case usersConstants._DELETE_FAILURE:
      return {
          error: action.error
      };
   case usersConstants._DELETE_REQUEST:
      return {
          loading: true
      };

    default:
        return state
    }
}