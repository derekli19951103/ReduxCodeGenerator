function _authenticate() {
  const requestOptions = {
      method: POST,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _register() {
  const requestOptions = {
      method: POST,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getAllUser() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getUserGamesByUsername() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getUserFriendsByUsername() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getUserInfoByUsername() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getUserInvitationsByUsername() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getUserHashById() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _update() {
  const requestOptions = {
      method: PUT,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function __delete() {
  const requestOptions = {
      method: DELETE,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

export const usersService = {
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