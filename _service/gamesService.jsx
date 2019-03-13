function _register() {
  const requestOptions = {
      method: POST,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getAllGame() {
  const requestOptions = {
      method: GET,
      headers:{ },
      body:{ }
  };
  return fetch('',requestOptions);
}

function _getGameInfoByGameName() {
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

export const gamesService = {
   register: _register,
   getAllGame: _getAllGame,
   getGameInfoByGameName: _getGameInfoByGameName,
   update: _update,
   _delete: __delete,
}