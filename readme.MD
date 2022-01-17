# Rest API with Node Express & Mongoose 

Env Variables managed with dotenv

```
process.env.VARIABLE 
```

## Endpoints

Get All Owners
`https://pethouse1.herokuapp.com/owner/` 

Get Owner by ID
`https://pethouse1.herokuapp.com/owner/61e5162e4a31aacf8aa88ab7` 

Post Owner
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

## Todos

Pets 
Auth
GraphQL