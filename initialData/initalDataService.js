import debug from "debug";
import { createUser, createGame } from "../model/dbAdapter.js";
import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const initialUsers = async () => {
  let users = [
    {
      name: {
        first: "Ehab",
        last: "Magdoub",
      },
      phone: "0500000000",
      email: "ehab@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: true,
    },
    {
      name: {
        first: "john",
        last: "wick",
      },
      phone: "0500000000",
      email: "john@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: true,
    },
    {
      name: {
        first: "james",
        last: "bond",
      },
      phone: "0500000000",
      email: "james@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: false,
    },
  ];
  try {
    let bizId = "";
    for (let user of users) {
      let userFromDb = await createUser(user);
      if (!user.isAdmin && user.isBusiness) {
        bizId = userFromDb._id;
      }

    }
    return bizId;
  } catch (err) {
    return "";
  }
};

const initialGames = async (bizId) => {
  let games = [
    {
      title: "game 1",
      description: "description game 1",
      category: ["Action"],
      phone: "0500000000",
      email: "game1@gmail.com",
      address: {
        country: "USA",
        city: "New York",
        street: "street 1",
        houseNumber: 10,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "game 2",
      subtitle: "sub game 2",
      description: "description game 2",
      phone: "0500000000",
      email: "card2@gmail.com",
      address: {
        country: "USA",
        city: "New York",
        street: "street 1",
        houseNumber: 10,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "a wonderful new game",
      subtitle: "a test value for this game",
      description: "a test value for new game\na test value for new game\n",
      phone: "012-3211234",
      email: "qwe@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://img.izismile.com/img/img13/20201030/640/you_have_never_seen_something_like_this_640_36.jpg",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
  ];
  try {
    for (let game of games) {
      await createGame(game);
    }
  } catch (err) {
    let log = debug("app:initialGames");
    log("error", err);
  }
};

export { initialUsers, initialGames };
