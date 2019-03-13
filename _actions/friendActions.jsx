import friendService from '../_service/friendService'
import friendConstants from '../_constants/friendConstants'
function _createFriendRequest() {
  return dispatch => {
      dispatch(request());
      friendService.createFriendRequest()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: friendConstants.CREATEFRIENDREQUEST_REQUEST } }
  function success(temp) { return { type: friendConstants.CREATEFRIENDREQUEST_SUCCESS, temp } }
  function failure(error) { return { type: friendConstants.CREATEFRIENDREQUEST_SUCCESS, error } }
}

function _acceptFriendRequest() {
  return dispatch => {
      dispatch(request());
      friendService.acceptFriendRequest()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: friendConstants.ACCEPTFRIENDREQUEST_REQUEST } }
  function success(temp) { return { type: friendConstants.ACCEPTFRIENDREQUEST_SUCCESS, temp } }
  function failure(error) { return { type: friendConstants.ACCEPTFRIENDREQUEST_SUCCESS, error } }
}

function _ignoreFriendRequest() {
  return dispatch => {
      dispatch(request());
      friendService.ignoreFriendRequest()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: friendConstants.IGNOREFRIENDREQUEST_REQUEST } }
  function success(temp) { return { type: friendConstants.IGNOREFRIENDREQUEST_SUCCESS, temp } }
  function failure(error) { return { type: friendConstants.IGNOREFRIENDREQUEST_SUCCESS, error } }
}

function _getAllFriends() {
  return dispatch => {
      dispatch(request());
      friendService.getAllFriends()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: friendConstants.GETALLFRIENDS_REQUEST } }
  function success(temp) { return { type: friendConstants.GETALLFRIENDS_SUCCESS, temp } }
  function failure(error) { return { type: friendConstants.GETALLFRIENDS_SUCCESS, error } }
}

function _getAllRequests() {
  return dispatch => {
      dispatch(request());
      friendService.getAllRequests()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: friendConstants.GETALLREQUESTS_REQUEST } }
  function success(temp) { return { type: friendConstants.GETALLREQUESTS_SUCCESS, temp } }
  function failure(error) { return { type: friendConstants.GETALLREQUESTS_SUCCESS, error } }
}

function _getStatus() {
  return dispatch => {
      dispatch(request());
      friendService.getStatus()
      .then(
          temp => { 
              dispatch(success(temp));
          },
          error => {
              dispatch(failure(error.toString()));
          }
      );
  };
  function request() { return { type: friendConstants.GETSTATUS_REQUEST } }
  function success(temp) { return { type: friendConstants.GETSTATUS_SUCCESS, temp } }
  function failure(error) { return { type: friendConstants.GETSTATUS_SUCCESS, error } }
}

export const friendActions = {
   createFriendRequest: _createFriendRequest,
   acceptFriendRequest: _acceptFriendRequest,
   ignoreFriendRequest: _ignoreFriendRequest,
   getAllFriends: _getAllFriends,
   getAllRequests: _getAllRequests,
   getStatus: _getStatus,
}