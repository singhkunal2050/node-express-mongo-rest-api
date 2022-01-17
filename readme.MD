# Rest API with Node Express & Mongoose 

Env Variables managed with dotenv

```
process.env.VARIABLE 
```

## Endpoints

Get All Owners(GET)
`https://pethouse1.herokuapp.com/owner/` 

Get Owner by ID(GET)
`https://pethouse1.herokuapp.com/owner/61e5162e4a31aacf8aa88ab7` 

Post Owner(POST)
`https://pethouse1.herokuapp.com/owner`

Body
```
{
    "name": "Amar",
    "gender": "Male",
    "petCount": 3,
    "address": "Kerala"
}
``` 

Update Owner(PUT)
`https://pethouse1.herokuapp.com/owner/id`

Body
```
{
    "name": "Amar",
    "gender": "Male",
    "petCount": 3,
    "address": "Kerala"
}
``` 

Delete Owner(DELETE)
`https://pethouse1.herokuapp.com/owner/id`


## Todos

- Pets 
- Auth
- GraphQL