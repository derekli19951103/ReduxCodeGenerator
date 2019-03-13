import friendConstants from '../_constants/friendConstants'
export function friend(state = {}, action) {
    switch (action.type) {
   case friendConstants.CREATEFRIENDREQUEST_SUCCESS:
      return {
          temp: action.temp
      };
   case friendConstants.CREATEFRIENDREQUEST_FAILURE:
      return {
          error: action.error
      };
   case friendConstants.CREATEFRIENDREQUEST_REQUEST:
      return {
          loading: true
      };

   case friendConstants.ACCEPTFRIENDREQUEST_SUCCESS:
      return {
          temp: action.temp
      };
   case friendConstants.ACCEPTFRIENDREQUEST_FAILURE:
      return {
          error: action.error
      };
   case friendConstants.ACCEPTFRIENDREQUEST_REQUEST:
      return {
          loading: true
      };

   case friendConstants.IGNOREFRIENDREQUEST_SUCCESS:
      return {
          temp: action.temp
      };
   case friendConstants.IGNOREFRIENDREQUEST_FAILURE:
      return {
          error: action.error
      };
   case friendConstants.IGNOREFRIENDREQUEST_REQUEST:
      return {
          loading: true
      };

   case friendConstants.GETALLFRIENDS_SUCCESS:
      return {
          temp: action.temp
      };
   case friendConstants.GETALLFRIENDS_FAILURE:
      return {
          error: action.error
      };
   case friendConstants.GETALLFRIENDS_REQUEST:
      return {
          loading: true
      };

   case friendConstants.GETALLREQUESTS_SUCCESS:
      return {
          temp: action.temp
      };
   case friendConstants.GETALLREQUESTS_FAILURE:
      return {
          error: action.error
      };
   case friendConstants.GETALLREQUESTS_REQUEST:
      return {
          loading: true
      };

   case friendConstants.GETSTATUS_SUCCESS:
      return {
          temp: action.temp
      };
   case friendConstants.GETSTATUS_FAILURE:
      return {
          error: action.error
      };
   case friendConstants.GETSTATUS_REQUEST:
      return {
          loading: true
      };

    default:
        return state
    }
}