# Getting Started with Node server App

1. Install dependencies: `npm install`,
2. Create a `.env` file for environment variables:
PORT=3030
TOKEN_PRIVATE_KEY="waertgoipj03945e8u6"
MONGODB_CON_STR="mongodb+srv://ehabmj1212:OEAG56yEisgktMJz@cluster0.zyneamq.mongodb.net/"
3. `npm i dotenv` (if the server is not working or crash)

### <span style="color:#ff6600">Step 1: </span> Installation


- Enter the server folder
```bash
cd server
```

- Install node_modules 
```bash
npm i
```
# Available Scripts

In the project node.js, you can run:
```bash
npm start
```
- Runs the app with node.
- You should have MongoDB Atlas

to run the server:
```bash
npm run dev
```

 - Runs with nodemon

 You also need do install to run the server:
 ```bash
npm i mysql
```
```bash
npm i mongoose
```
```bash
npm install cors
```

### <span style="color:#ff6600">Step 2: </span>API for Register a new user

###  <span style="color:#FFE338">POST </span> /api/users

### Request

In the request body you will need to provide an object with the following keys and values

| index      | type    | index       | type   | min | max | remark   |
| ---------- | ------- | ----------- | ------ | --- | --- | -------- |
| name       | object  |             |        |     |     | required |
|            |         | first       | string | 2   | 256 | required |
|            |         | middle      | string | 2   | 256 |          |
|            |         | last        | string | 2   | 256 | required |
| phone      | string  |             |        | 9   | 11  | required |
| email      | string  |             |        | 5   |     | required |
| password   | string  |             |        | 7   | 20  | required |
| image      | object  |             |        |     |     |          |
|            |         | url         | string | 14  |     |          |
|            |         | alt         | string | 2   | 256 |          |
| address    | object  |             |        |     |     | required |
|            |         | state       | string | 2   | 256 |          |
|            |         | country     | string | 2   | 256 | required |
|            |         | city        | string | 2   | 256 | required |
|            |         | street      | string | 2   | 256 | required |
|            |         | houseNumber | number | 2   | 256 | required |
|            |         | zip         | number | 2   | 256 | required |
| isBusiness | boolean |             |        |     |     | required |

## Rules:
- <span style="color:#FFE338">Password: </span> it must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters <span style="color:#FFE338">!@#$%^&\*- </span>
- <span style="color:#FFE338">Email: </span> it must be a standard email 
- <span style="color:#FFE338">Phone: </span> it must be a default Israeli phone number
- <span style="color:#FFE338">Image: </span>it must be a standard URL

### <span style="color:#ff6600">Step 3: </span>API for Login a user

### <span style="color:#FFE338">POST </span> /api/users/login

- <span style="color:#FFE338">Email: </span> must be a standard email 
- <span style="color:#FFE338">Password: </span> must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters <span style="color:#FFE338">!@#$%^&\*- </span>

| index    | type   | min | max | remark   |
| -------- | ------ | --- | --- | -------- |
| email    | string | 5   |     | required |
| password | string | 7   | 20  | required |

## Login User Types as:
### Response
| index      | type    |
| ---------- | ------- |
| \_id       | string  |
| isBusiness | boolean |
| isAdmin    | boolean |

### <span style="color:#ff6600">Step 4: </span>Server Links

# Users / https://documenter.getpostman.com/view/31306865/2sA358eRzw
## <span style="color:#45FFCA">To Get all users:</span> 
### <span style="color:#45FFCA">GET </span> /api/users
================================================
## <span style="color:#45FFCA">To Get users by Id: </span>  
 1. - You need to provide a token to get an answer from this api
get an answer from this api
 2. - You need to be <span style="color:#45FFCA">user or Admin type </span> user to get an answer from this api
### <span style="color:#45FFCA">GET </span> /api/users/:id

================================================

## <span style="color:#9AC5F4">To update user:</span> 
 1. - You need to provide a token to get an answer from this api
 2. - You need to be <span style="color:#9AC5F4">Admin type </span> user to get an answer from this api

### <span style="color:#9AC5F4">PUT </span> /api/users/:id

- In the request body you will need to provide an object with the following keys and values

| index      | type    | index       | type   | min | max | remark   |
| ---------- | ------- | ----------- | ------ | --- | --- | -------- |
| name       | object  |             |        |     |     | required |
|            |         | first       | string | 2   | 256 | required |
|            |         | middle      | string | 2   | 256 |          |
|            |         | last        | string | 2   | 256 | required |
| phone      | string  |             |        | 9   | 11  | required |
| email      | string  |             |        | 5   |     | required |
| password   | string  |             |        | 7   | 20  | required |
| image      | object  |             |        |     |     | required |
|            |         | url         | string | 14  |     | required |
|            |         | alt         | string | 2   | 256 | required |
| address    | object  |             |        |     |     | required |
|            |         | state       |        | 2   | 256 |          |
|            |         | country     |        | 2   | 256 | required |
|            |         | city        |        | 2   | 256 | required |
|            |         | street      |        | 2   | 256 | required |
|            |         | houseNumber |        | 2   | 256 | required |
|            |         | zip         |        | 2   | 256 | required |
| isBusiness | boolean |             |        |     |     | required |

## Rules:
- <span style="color:#9AC5F4">Password: </span> it must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters <span style="color:#9AC5F4">!@#$%^&\*- </span>
- <span style="color:#9AC5F4">Email: </span> it must be a standard email 
- <span style="color:#9AC5F4">Phone: </span> it must be a default Israeli phone number
- <span style="color:#9AC5F4">Image: </span>it must be a standard URL

================================================
## <span style="color:#F24C3D">To delete a user:</span> 
 1. - You need to provide a token to get an answer from this api
 2. - You need to be <span style="color:#F24C3D">user or Admin type </span> user to get an answer from this api

### <span style="color:#F24C3D">DELETE </span> /api/users/:id

================================================

## <span style="color:#DD58D6">To patch a user:</span> 
 1. - You need to provide a token to get an answer from this api
 2. - You need to be <span style="color:#DD58D6">user or Admin type </span> user to get an answer from this api

### <span style="color:#DD58D6">PATCH </span> /api/users/:id

================================================
# Games / https://documenter.getpostman.com/view/31306865/2sA3JRYeJr
## <span style="color:#45FFCA">To Get all games:</span> 
### <span style="color:#45FFCA">GET </span> /api/games
================================================
## <span style="color:#45FFCA">To Get games by Id: </span>  

### <span style="color:#45FFCA">GET </span> /api/games/:id

================================================

## <span style="color:#45FFCA">To Get all my games: </span>  
 1. - You need to provide a token to get an answer from this api
get an answer from this api
### <span style="color:#45FFCA">GET </span> /api/games/my-games

================================================
## <span style="color:#FFE338">To create a new game:</span> 
 1. - You need to provide a token to get an answer from this api
 2. - You need to be <span style="color:#FFE338">Biz type </span> user to get an answer from this api

### <span style="color:#FFE338">POST </span> /api/games/

In the request body you will need to provide an object with the following keys and values

| index       | type   | index       | type   | min | max  | remark   |
| ----------- | ------ | ----------- | ------ | --- | ---- | -------- |
| title       | string |             |        | 2   | 256  | required |
| description | string |             |        | 2   | 1024 | required |
| category    | string |             |        | 2   | 1024 | required |
| rating      | number |             |        | 1   | 5    |          |
| discount    | number |             |        | 0   | 100  |          |
| price       | number |             |        | 0   | 1000 | required |
| image       | object |             |        |     |      | required |
|             |        | url         | string | 14  |      |          |
|             |        | alt         | string | 2   | 256  |          |
| trailer     | string |             |        | 14  |      |          |

## Rules:
- <span style="color:#FFE338">Password: </span> it must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters <span style="color:#FFE338">!@#$%^&\*- </span>
- <span style="color:#FFE338">Email: </span> it must be a standard email 
- <span style="color:#FFE338">Phone: </span> it must be a default Israeli phone number
- <span style="color:#FFE338">Image: </span>it must be a URL

================================================
## <span style="color:#9AC5F4">To update a game info:</span> 
 1. - You need to provide a token to get an answer from this api
 2. - You will need to be a <span style="color:#9AC5F4">Business type</span> user to get an answer from this api
### <span style="color:#9AC5F4">PUT </span> /api/games/:id

In the request body you will need to provide an object with the following keys and values

| index       | type   | index       | type   | min | max  | remark   |
| ----------- | ------ | ----------- | ------ | --- | ---- | -------- |
| title       | string |             |        | 2   | 256  | required |
| description | string |             |        | 2   | 1024 | required |
| category    | string |             |        | 2   | 1024 | required |
| rating      | number |             |        | 1   | 5    |          |
| discount    | number |             |        | 0   | 100  |          |
| price       | number |             |        | 0   | 1000 | required |
| image       | object |             |        |     |      | required |
|             |        | url         | string | 14  |      |          |
|             |        | alt         | string | 2   | 256  |          |
| trailer     | string |             |        | 14  |      |          |

- <span style="color:#9AC5F4">Password: </span> it must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters <span style="color:#9AC5F4">!@#$%^&\*- </span>
- <span style="color:#9AC5F4">Email: </span> it must be a standard email 
- <span style="color:#9AC5F4">Phone: </span> it must be a default Israeli phone number
- <span style="color:#9AC5F4">Image: </span>it must be a URL

================================================

## <span style="color:#DD58D6">To patch a game and changing business number:</span> 
 1. - You need to provide a token to get an answer from this api
### <span style="color:#DD58D6">PATCH </span> /api/games/biz-number/:id
In the request body you will need to provide an object with the following keys and values
 2. - You need to be <span style="color:#DD58D6">Admin type </span> user to get an answer from this api
| index     | type   | min | max | remark   | from    | to      |
| --------- | ------ | --- | --- | -------- | ------- | ------- |
| bizNumber | number | 7   | 7   | required | 1000000 | 9999999 |


================================================

## <span style="color:#DD58D6">To Like a game:</span> 

### <span style="color:#DD58D6">PATCH </span> /api/games/:id

================================================

## <span style="color:#F24C3D">To delete a game:</span> 

 1. - You need to provide a token to get an answer from this api
 2. - it must be the user who created the game or <span style="color:#F24C3D">Admin type </span> user to to delete the business card
### <span style="color:#F24C3D">DELETE </span> /api/games/:id
