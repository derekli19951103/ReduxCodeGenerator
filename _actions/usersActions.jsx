import usersService from '../_service/usersService'
import usersConstants from '../_constants/usersConstants'
function _authenticate() {
  return dispatch => {
      dispatch(request());
      usersService.authenticate()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.AUTHENTICATE_REQUEST } }
  function success(temp) { return { type: usersConstants.AUTHENTICATE_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.AUTHENTICATE_SUCCESS, error } }
}

function _register() {
  return dispatch => {
      dispatch(request());
      usersService.register()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.REGISTER_REQUEST } }
  function success(temp) { return { type: usersConstants.REGISTER_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.REGISTER_SUCCESS, error } }
}

function _getAllUser() {
  return dispatch => {
      dispatch(request());
      usersService.getAllUser()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.GETALLUSER_REQUEST } }
  function success(temp) { return { type: usersConstants.GETALLUSER_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.GETALLUSER_SUCCESS, error } }
}

function _getUserGamesByUsername() {
  return dispatch => {
      dispatch(request());
      usersService.getUserGamesByUsername()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.GETUSERGAMESBYUSERNAME_REQUEST } }
  function success(temp) { return { type: usersConstants.GETUSERGAMESBYUSERNAME_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.GETUSERGAMESBYUSERNAME_SUCCESS, error } }
}

function _getUserFriendsByUsername() {
  return dispatch => {
      dispatch(request());
      usersService.getUserFriendsByUsername()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.GETUSERFRIENDSBYUSERNAME_REQUEST } }
  function success(temp) { return { type: usersConstants.GETUSERFRIENDSBYUSERNAME_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.GETUSERFRIENDSBYUSERNAME_SUCCESS, error } }
}

function _getUserInfoByUsername() {
  return dispatch => {
      dispatch(request());
      usersService.getUserInfoByUsername()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.GETUSERINFOBYUSERNAME_REQUEST } }
  function success(temp) { return { type: usersConstants.GETUSERINFOBYUSERNAME_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.GETUSERINFOBYUSERNAME_SUCCESS, error } }
}

function _getUserInvitationsByUsername() {
  return dispatch => {
      dispatch(request());
      usersService.getUserInvitationsByUsername()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.GETUSERINVITATIONSBYUSERNAME_REQUEST } }
  function success(temp) { return { type: usersConstants.GETUSERINVITATIONSBYUSERNAME_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.GETUSERINVITATIONSBYUSERNAME_SUCCESS, error } }
}

function _getUserHashById() {
  return dispatch => {
      dispatch(request());
      usersService.getUserHashById()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.GETUSERHASHBYID_REQUEST } }
  function success(temp) { return { type: usersConstants.GETUSERHASHBYID_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.GETUSERHASHBYID_SUCCESS, error } }
}

function _update() {
  return dispatch => {
      dispatch(request());
      usersService.update()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants.UPDATE_REQUEST } }
  function success(temp) { return { type: usersConstants.UPDATE_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants.UPDATE_SUCCESS, error } }
}

function __delete() {
  return dispatch => {
      dispatch(request());
      usersService._delete()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: usersConstants._DELETE_REQUEST } }
  function success(temp) { return { type: usersConstants._DELETE_SUCCESS, temp } }
  function failure(error) { return { type: usersConstants._DELETE_SUCCESS, error } }
}

export const usersActions = {
   authenticate: _authenticate,
   register: _register,
   getAllUser: _getAllUser,
   getUserGamesByUsername: _getUserGamesByUsername,
   getUserFriendsByUsername: _getUserFriendsByUsername,
   getUserInfoByUsername: _getUserInfoByUsername,
   getUserInvitationsByUsername: _getUserInvitationsByUsername,
   getUserHashById: _getUserHashById,
   update: _update,
   _delete: __delete,
}