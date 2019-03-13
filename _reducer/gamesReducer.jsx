import gamesConstants from '../_constants/gamesConstants'
export function games(state = {}, action) {
    switch (action.type) {
   case gamesConstants.REGISTER_SUCCESS:
      return {
          temp: action.temp
      };
   case gamesConstants.REGISTER_FAILURE:
      return {
          error: action.error
      };
   case gamesConstants.REGISTER_REQUEST:
      return {
          loading: true
      };

   case gamesConstants.GETALLGAME_SUCCESS:
      return {
          temp: action.temp
      };
   case gamesConstants.GETALLGAME_FAILURE:
      return {
          error: action.error
      };
   case gamesConstants.GETALLGAME_REQUEST:
      return {
          loading: true
      };

   case gamesConstants.GETGAMEINFOBYGAMENAME_SUCCESS:
      return {
          temp: action.temp
      };
   case gamesConstants.GETGAMEINFOBYGAMENAME_FAILURE:
      return {
          error: action.error
      };
   case gamesConstants.GETGAMEINFOBYGAMENAME_REQUEST:
      return {
          loading: true
      };

   case gamesConstants.UPDATE_SUCCESS:
      return {
          temp: action.temp
      };
   case gamesConstants.UPDATE_FAILURE:
      return {
          error: action.error
      };
   case gamesConstants.UPDATE_REQUEST:
      return {
          loading: true
      };

   case gamesConstants._DELETE_SUCCESS:
      return {
          temp: action.temp
      };
   case gamesConstants._DELETE_FAILURE:
      return {
          error: action.error
      };
   case gamesConstants._DELETE_REQUEST:
      return {
          loading: true
      };

    default:
        return state
    }
}