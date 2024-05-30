import Game from "../model/mongodb/games/Game.js";

const UniqBizNum = async (bizNumber) => {
    let gamebiznumber = await Game.findOne({ bizNumber })

    return gamebiznumber
};

export default UniqBizNum;