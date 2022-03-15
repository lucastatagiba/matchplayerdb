# Todos List

This repository is configured with JSON Server and JSON Server Auth to setup a fake API. It permits users signup, signin and, after authentication, register, patch and delete of todos in a todo list.

## Endpoints

The base URL described below will be used as a prefix for all endpoints of the API.

Base URL: https://shrouded-chamber-97255.herokuapp.com

### User Signup

**`POST /signup`**

The method POST in the /signup endpoint will register an user on the API data base, permiting later signin and interactions with the API features.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /singup
//URI e.g.: https://shrouded-chamber-97255.herokuapp.com/singup
//Body(JSON):
    {
        "name": "Test User", //required
        "age": "27", //optional
        "gender": "Male", //optional
        "email": "testuser@email.com", //required
        "password": "197328@#TesteUser" //required
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
                "email": "testuser@email.com"
            }
    }
```

**_On Fail_**

```JSON
//Status: 400 Bad Request
//Body(JSON):
    {
	    "message": "Requisiton Error: Either of name or birthDate required propertys are missing at requisition body"
    }
```

### User Signin

**`POST /signin`**

The method POST in the /signin endpoint will login an user on the API, it's response will contain a JWT token wich should be used to interact with the authenticated routes.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /signin
//URI e.g.: https://shrouded-chamber-97255.herokuapp.com/signin
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
        "id": 1,
        "name": "Test User",
        "age": "27", //optional
        "gender": "Male", //optional
        "email": "testuser@email.com",
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

**`POST /todos`**

The method POST in the /todos endpoint will register a new todo, a user token is required to complete the operation.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /todos
//URI e.g.: https://shrouded-chamber-97255.herokuapp.com/todos
//Authentication Method: Bearer Token
//Body(JSON):
    {
        "title": "Estudar React", //required
        "description": "Preciso estudar react para fazer o capstone semana que vem.", //required
        "userId": 1 //required
    }
```

**Response Format:**

**_On Success_**

```JSON
//Status: 201 Created
//Body(JSON):
    {
        "title": "Estudar Typescript",
        "description": "Preciso estudar o conteúdo extra de Typescript",
        "userId": 1,
        "createdAt": "Thu, 10 Mar 2022 16:50:45 GMT",
        "completed": false,
        "id": 2
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

**`GET /todos`**

The method GET in the /todos endpoint will bring a response with all todos (completed or not), a user token is required to complete the operation.
It's possible to use path params (/todos/:id) and query params (/todos?property=value) to filter the results.

**Requisition Format:**

```JSON
//Method: GET
//Endpoint: /todos
//URI e.g.: https://shrouded-chamber-97255.herokuapp.com/todos
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
            "title": "Estudar React",
            "description": "Preciso estudar react para fazer o capstone semana que vem.",
            "userId": 1,
            "createdAt": "Thu, 10 Mar 2022 16:27:58 GMT",
            "completed": false,
            "id": 1
        },
        {
            "title": "Estudar Typescript",
            "description": "Preciso estudar o conteúdo extra de Typescript",
            "userId": 1,
            "createdAt": "Thu, 10 Mar 2022 16:50:45 GMT",
            "completed": false,
            "id": 2
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

**`PATCH /todos/:id`**

The method PATCH in the /todos/:id endpoint patch one or more propertys of the todo within the especified path param, a user token is required to complete the operation.

**_OBS: IT'S NOT POSSIBLE TO UPDATE ID, USERID OR CREATEDAT PROPERTYS._**

**Requisition Format:**

```JSON
//Method: PATCH
//Endpoint: /todos/:id
//URI e.g.: https://shrouded-chamber-97255.herokuapp.com/todos/1
//Authentication Method: Bearer Token
//Body:
    {
        "description": "Preciso estudar React e Context API para o capstone que começará semana que vem."
    }
```

**Response Format:**

**_On Success_**

```JSON
//Status: 200 OK
//Body(JSON):
    {
	"title": "Estudar React e ContextAPI",
	"description": "Preciso estudar React e Context API para o capstone que começará semana que vem.",
	"userId": 1,
	"createdAt": "Thu, 10 Mar 2022 16:27:58 GMT",
	"completed": false,
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

**`DELETE /todos/:id`**

The method DELETE in the /todos/:id endpoint deletes one of the todo within the especified path param, a user token is required to complete the operation.

**Requisition Format:**

```JSON
//Method: DELETE
//Endpoint: /todos/:id
//URI e.g.: https://shrouded-chamber-97255.herokuapp.com/todos/1
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
