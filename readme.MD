# Rest API with Node Express & Mongoose 

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Type-graphql](https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge)


Env Variables managed with dotenv

```
process.env.VARIABLE 
```

## Endpoints

#### Get All Owners(GET)
```
https://pethouse1.herokuapp.com/api/v1/owner/
``` 

#### Get Owner by ID(GET)
```
https://pethouse1.herokuapp.com/api/v1/owner/61e5162e4a31aacf8aa88ab7
``` 

#### Post Owner(POST)
```
https://pethouse1.herokuapp.com/api/v1/owner
```

Body
```json
{
    "name": "Amar",
    "gender": "Male",
    "petCount": 3,
    "address": "Kerala"
}
``` 

#### Update Owner(PUT)
```
https://pethouse1.herokuapp.com/api/v1/owner/id
```

Body
```json
{
    "name": "Amar",
    "gender": "Male",
    "petCount": 3,
    "address": "Kerala"
}
``` 

#### Delete Owner(DELETE)
```
https://pethouse1.herokuapp.com/owner/api/v1/id
```

## Same for `/pets`

```
https://pethouse1.herokuapp.com/api/v1/pet/
```

## Graphql

```
https://pethouse1.herokuapp.com/api/v2/graphql/
```



## Todos

- Auth
- GraphQL

- Hubspot Learnings 
- store locater 
- animations GSAP Scroll Anims

workflows
zoom 
tax related 
