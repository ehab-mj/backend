import mongoose from "mongoose";
import Image from "../users/Image.js";
import Address from "../users/Address.js";
import phoneRegex from "../../../utils/phoneRegex.js";
import URL from "../helper/urlStringValidation.js";
import { DEFAULT_REQUIRED_STRING_VALIDATION, DEFAULT_STRING_VALIDATION } from "../helper/defaultStringValidation.helper.js";


const GameSchema = new mongoose.Schema({
  title: DEFAULT_REQUIRED_STRING_VALIDATION,
  // subtitle: DEFAULT_REQUIRED_STRING_VALIDATION,
  description: {
    ...DEFAULT_REQUIRED_STRING_VALIDATION,
    maxLength: 1024,
  },
  trailer: URL,
  category: [DEFAULT_STRING_VALIDATION],
  rating: {
    type: Number,
    min: 3,
    max: 6,
    required: true,
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    max: 1000,
    required: true,
  },
  image: Image,
  likes: [],
  Carts: [],
  createAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Game = mongoose.model("game", GameSchema);

export default Game;
