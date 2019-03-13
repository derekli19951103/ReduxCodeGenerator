function _createFriendRequest() {
  const requestOptions = {
      method: POST,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _acceptFriendRequest() {
  const requestOptions = {
      method: PUT,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _ignoreFriendRequest() {
  const requestOptions = {
      method: PUT,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getAllFriends() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getAllRequests() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getStatus() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

export const friendService = {
   createFriendRequest: _createFriendRequest,
   acceptFriendRequest: _acceptFriendRequest,
   ignoreFriendRequest: _ignoreFriendRequest,
   getAllFriends: _getAllFriends,
   getAllRequests: _getAllRequests,
   getStatus: _getStatus,
}