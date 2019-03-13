import gamesService from '../_service/gamesService'
import gamesConstants from '../_constants/gamesConstants'
function _register() {
  return dispatch => {
      dispatch(request());
      gamesService.register()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: gamesConstants.REGISTER_REQUEST } }
  function success(temp) { return { type: gamesConstants.REGISTER_SUCCESS, temp } }
  function failure(error) { return { type: gamesConstants.REGISTER_SUCCESS, error } }
}

function _getAllGame() {
  return dispatch => {
      dispatch(request());
      gamesService.getAllGame()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: gamesConstants.GETALLGAME_REQUEST } }
  function success(temp) { return { type: gamesConstants.GETALLGAME_SUCCESS, temp } }
  function failure(error) { return { type: gamesConstants.GETALLGAME_SUCCESS, error } }
}

function _getGameInfoByGameName() {
  return dispatch => {
      dispatch(request());
      gamesService.getGameInfoByGameName()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: gamesConstants.GETGAMEINFOBYGAMENAME_REQUEST } }
  function success(temp) { return { type: gamesConstants.GETGAMEINFOBYGAMENAME_SUCCESS, temp } }
  function failure(error) { return { type: gamesConstants.GETGAMEINFOBYGAMENAME_SUCCESS, error } }
}

function _update() {
  return dispatch => {
      dispatch(request());
      gamesService.update()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: gamesConstants.UPDATE_REQUEST } }
  function success(temp) { return { type: gamesConstants.UPDATE_SUCCESS, temp } }
  function failure(error) { return { type: gamesConstants.UPDATE_SUCCESS, error } }
}

function __delete() {
  return dispatch => {
      dispatch(request());
      gamesService._delete()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: gamesConstants._DELETE_REQUEST } }
  function success(temp) { return { type: gamesConstants._DELETE_SUCCESS, temp } }
  function failure(error) { return { type: gamesConstants._DELETE_SUCCESS, error } }
}

export const gamesActions = {
   register: _register,
   getAllGame: _getAllGame,
   getGameInfoByGameName: _getGameInfoByGameName,
   update: _update,
   _delete: __delete,
}