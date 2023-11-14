# Express Auth API

This API provides user registration, login, and logout functionality with MongoDB, Mongoose, bcrypt, JWT, and session cookies.

## Endpoints

### POST /register

Register a new user.

**Request:**

```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
Response:

201 Created: User registered successfully
500 Internal Server Error: An error occurred during registration
```

## POST /login

## Login with existing user credentials.

**Request:**

```json

Copy code
{
"email": "john.doe@example.com",
"password": "password123"
}
Response:

200 OK: Login successful
401 Unauthorized: Invalid email or password
500 Internal Server Error: An error occurred during login
```

## GET /logout

Logout and clear the session and cookie.

**Request:**

```json
{
  "message": "Logout successful"
}

200 OK: Logout successful
```
