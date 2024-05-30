import connectToMongo from "./mongodb/dbConnect.js";
import connectToMySQL from "./mysql/dbConnect.js";
import {
  createUserMongo,
  deleteUserMongo,
  getAllUsersMongo,
  getUserByEmailMongo,
  getUserByIdMongo,
  patchIsBizMongo,
  updateUserMongo,
} from "./mongodb/users/userService.js";
import {
  createGameMongo,
  getGameByBizNumberMongo,
  getAllGamesMongo,
  getGameByIdMongo,
  getAllMyGamesMongo,
  updateGameMongo,
  updateLikeGameMongo,
  deleteGameMongo,
} from "./mongodb/games/gameService.js";
import normalizeUser from "./../normalize/user.normalize.js";
import normalizeGames from "../normalize/game.normalize.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
  if (DB === "mysql") {
    return connectToMySQL();
  }
};
const getAllUsers = () => {
  if (DB === "mongo") {
    return getAllUsersMongo();
  }
};
const getUserById = (id) => {
  if (DB === "mongo") {
    return getUserByIdMongo(id);
  }
};

const createUser = (user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return createUserMongo(user);
  }
};

const updateUser = (id, user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return updateUserMongo(id, user);
  }
};

const getUserByEmail = (email) => {
  if (DB === "mongo") {
    return getUserByEmailMongo(email);
  }
};

const deleteUser = (id) => {
  if (DB === "mongo") {
    return deleteUserMongo(id);
  }
};

const patchIsBiz = (id, isBusiness) => {
  if (DB === "mongo") {
    return patchIsBizMongo(id, isBusiness);
  }
};

//games
const createGame = async (game) => {

  game = await normalizeGames(game);
  if (DB === "mongo") {
    return createGameMongo(game);
  }

};

const getGameByBizNumber = (bizNumber) => {
  //normalizeGame
  if (DB === "mongo") {
    return getGameByBizNumberMongo(bizNumber);
  }
};

const getAllGames = () => {
  if (DB === "mongo") {
    return getAllGamesMongo();
  }
};

const getGameById = (id) => {
  if (DB === "mongo") {
    return getGameByIdMongo(id);
  }
};

const getAllMyGames = (user_id) => {
  if (DB === "mongo") {
    return getAllMyGamesMongo(user_id);
  }
};

const updateGame = (game_id, game) => {
  if (DB === "mongo") {
    return updateGameMongo(game_id, game);
  }
};

const updateLikeGame = (game_id, likes) => {
  if (DB === "mongo") {
    return updateLikeGameMongo(game_id, likes);
  }
};

const deleteGame = (id) => {
  if (DB === "mongo") {
    return deleteGameMongo(id);
  }
};

export default connectToDb;
export {
  createUser,
  createGame,
  getGameByBizNumber,
  getAllGames,
  getUserByEmail,
  updateUser,
  deleteUser,
  patchIsBiz,
  getGameById,
  getAllMyGames,
  updateGame,
  updateLikeGame,
  deleteGame,
  getUserById,
  getAllUsers,
};
