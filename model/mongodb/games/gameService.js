import debug from "debug";
const log = debug("app:model:gameService");
import Game from "./Game.js";

//create
const createGameMongo = (gameData) => {
  log(gameData);
  let game = new Game(gameData);
  return game.save();
};

//read
const getAllGamesMongo = () => {
  return Game.find();
};
//read
const getGameByIdMongo = (id) => {
  console.log("id from mongo", id);
  return Game.findById(id);
};
const getGameByBizNumberMongo = (bizNumber) => {
  return Game.findOne({ bizNumber });
};

const getAllMyGamesMongo = (user_id) => {
  return Game.find({ user_id });
};
//update
const updateGameMongo = (id, gameData) => {
  return Game.findByIdAndUpdate(id, gameData, { new: true });
};

const updateLikeGameMongo = (id, likes) => {
  return Game.findByIdAndUpdate(id, { likes }, { new: true });
};
//delete
const deleteGameMongo = (id) => {
  return Game.findByIdAndDelete(id);
};
export {
  createGameMongo,
  getAllGamesMongo,
  getGameByIdMongo,
  getGameByBizNumberMongo,
  getAllMyGamesMongo,
  updateGameMongo,
  updateLikeGameMongo,
  deleteGameMongo,
};
