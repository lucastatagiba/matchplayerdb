# Todos List

This repository is configured with JSON Server and JSON Server Auth to setup a fake API. It permits users signup, signin and, after authentication, register, patch and delete of todos in a todo list.

## Endpoints

The base URL described below will be used as a prefix for all endpoints of the API.

Base URL: https://matchplayersdb.herokuapp.com/

### User Register

**`POST /users`**

The method POST in the /register endpoint will register an user on the API data base, permiting later signin and interactions with the API features.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /users
//URI e.g.: https://matchplayersdb.herokuapp.com/users
//Body(JSON):
    {
      "email": "teste@teste.com",
      "password": "senhaforte",
      "name": "teste",
      "nickname": "teste1"      
    }
```

**Response Format:**

**_On Success_**

```JSON
//Status: 201 Created
//Body(JSON):
    {
        "accessToken": "xxx.xxx.xxx",
        "user": {
                "id": 1,
                "email": "teste@teste.com",
                "name": "teste",
                "nickname": "teste1",
                "profileIMG": "urlImage",
                "posts": [],
                "friendList": [],
                "gameList": [],
                "plataformList": [],
                "timeAvailability": [],
            }
    }
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):
    {
	    "message": "Email and password are required"
    }
```

### User Login

**`POST /Login`**

The method POST in the /login endpoint will login an user on the API, it's response will contain a JWT token wich should be used to interact with the authenticated routes.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /login
//URI e.g.: https://matchplayersdb.herokuapp.com/login
//Body(JSON):
    {
        "email": "testuser@email.com", //required
        "password": "197328@#TesteUser" //required
    }
```

**Response Format:**

**_On Success_**

```JSON
//Status: 200 OK
//Body(JSON):
    {
    "accessToken": "xxx.xxx.xxx",
    "user": {
        "email": "teste@teste.com",
		"name": "teste",
		"nickname": "teste1",
		"profileIMG": "urlImage",
		"posts": [],
		"friendList": [],
		"gameList": [],
		"plataformList": [],
		"timeAvailability": [],
		"id": 1
    }
    }
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):
    "Incorrect password"

```

### Todos Registering

**`POST /posts`**

The method POST in the /posts endpoint will register a new todo, a user token is required to complete the operation.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /posts
//URI e.g.: https://matchplayersdb.herokuapp.com/posts
//Authentication Method: Bearer Token
//Body(JSON):
    {
	"foto": "fotoURL",
	"description": "teste1",
	"comments": [],
	"userId": 1
}
```

**Response Format:**

**_On Success_**

```JSON
//Status: 201 Created
//Body(JSON):
    {
	"foto": "foto",
	"description": "teste1",
	"comments": [],
	"userId": 1,
	"id": 1
}
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):
    {
        "message": "Requisiton Error: Either of title or description required propertys are missing at requisition body"
    }
```

### Todos Reading

**`GET /posts`**

The method GET in the /posts endpoint will bring a response with all todos (completed or not), a user token is required to complete the operation.
It's possible to use path params (/posts/:id) and query params (/ṕosts?property=value) to filter the results.

**Requisition Format:**

```JSON
//Method: GET
//Endpoint: /posts
//URI e.g.: https://matchplayersdb.herokuapp.com/posts
//Authentication Method: Bearer Token
//Body: No body
```

**Response Format:**

**_On Success_**

```JSON
//Status: 200 OK
//Body(JSON):
    [
	{
		"foto": "foto4",
		"userId": 2,
		"id": 1
	}
]
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):

    "Missing token"

```

### Todos Updating

**`PUT /posts/:id`**

The method PUT in the /posts/:id endpoint edit one or more propertys of the post within the especified path param, a user token is required to complete the operation.

**_OBS: IT'S NOT POSSIBLE TO UPDATE ID, USERID OR CREATEDAT PROPERTYS._**

**Requisition Format:**

```JSON
//Method: put
//Endpoint: /posts/:id
//URI e.g.: https://matchplayersdb.herokuapp.com/posts/1
//Authentication Method: Bearer Token
//Body:
    {
	"foto": "foto4",
	"userId":1
}
```

**Response Format:**

**_On Success_**

```JSON
//Status: 200 OK
//Body(JSON):
    {
	"foto": "foto4",
	"userId": 2,
	"id": 1
}
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):
    "Missing token"

//or

    {
        "message": "Requisiton Error: It's not possible to update id, userId or createdAt propertys"
    }

```

### Todos Deleting

**`DELETE /posts/:id`**

The method DELETE in the /posts/:id endpoint deletes one of the todo within the especified path param, a user token is required to complete the operation.

**Requisition Format:**

```JSON
//Method: DELETE
//Endpoint: /posts/:id
//URI e.g.: https://matchplayersdb.herokuapp.com/posts/1
//Authentication Method: Bearer Token
//Body: No Body
```

**Response Format:**

**_On Success_**

```JSON
//Status: 200 OK
//Body(JSON):
    {}
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):
    "Missing token"

//or

//Status: 404 Not Found
//Body(JSON):
    {}
```
