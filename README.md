# Restfull API Documentation

Welcome to the API Documentation. This guide provides details about the API endpoints and their usage.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [API Data Format and Data Types](#format)
- [Endpoints](#endpoints)
  - [User Registration](#user-registration)
  - [User Login](#user-login)
  - [Get All Employees](#get-all-employees)
  - [Get Single Employee](#get-single-employee)
  - [Update Employee](#update-employee)
  - [Delete Employee](#delete-employee)
- [Response Formats](#response-formats)
- [Error Handling](#error-handling)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Introduction <a name="introduction"></a>

The Employee Management API is a set of RESTful endpoints that allow you to manage employee records. It provides functionality for user registration, authentication, and CRUD operations on employee data.

## Getting Started <a name="getting-started"></a>

To start using API, refer to the endpoints section below. No authentication tokens are required, as the API relies on session-based authentication.

1. **Installation**: Clone the repository and install dependencies using the following commands:

   ```bash
   git clone https://github.com/nishchalbasyal/restful-api-mysql.git
   cd restful-api-mysql
   npm install
   
2. Database Configuration: Update your database credentials in the `config/config.json` file.
3. Start the API: `npm start`

# API Data Format and Data Types <a name="format"></a>

This section provides detailed information about the format and data types required when sending data to the Employee Management API endpoints.

## Data Format

The API endpoints expect data to be sent in JSON format. When sending data in requests, make sure to set the `Content-Type` header to `application/json`.

## Data Types

Here are the expected data types for various fields when sending data to different endpoints:

### User Registration - `POST /register`

- `name`: String (required) - Name of the user.
- `email`: String (required) - User's email address.
- `password`: String (required) - User's password.
- `phone`: String (required) - User's phone number.

Example Request Body:

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "secretpassword",
  "phone":"123232323"
}
```

## Endpoints <a name="endpoints"></a>

### User Registration <a name="user-registration"></a>

- **URL**: `/register`
- **Method**: POST
- **Usage**: Create a new employee account.

### User Login <a name="user-login"></a>

- **URL**: `/login`
- **Method**: POST
- **Usage**: Authenticate and log in a user.

### Get All Employees <a name="get-all-employees"></a>

- **URL**: `/api`
- **Method**: GET
- **Usage**: Fetch a list of all employees.

### Get Single Employee <a name="get-single-employee"></a>

- **URL**: `/api/:id`
- **Method**: GET
- **Usage**: Fetch details of a single employee by ID.

### Update Employee <a name="update-employee"></a>

- **URL**: `/api/:id`
- **Method**: PUT
- **Usage**: Update details of a single employee by ID.

### Delete Employee <a name="delete-employee"></a>

- **URL**: `/api/:id`
- **Method**: DELETE
- **Usage**: Delete a single employee by ID.

## Response Formats <a name="response-formats"></a>

Responses are provided in JSON format. Successful responses include a `message` field indicating the status, while error responses include relevant error messages.

## Error Handling <a name="error-handling"></a>

Error responses include appropriate HTTP status codes and descriptive error messages. Refer to the status codes and error messages to troubleshoot effectively.

## Authentication <a name="authentication"></a>

The API uses session-based authentication to secure access to protected endpoints. Make sure to handle session management properly in your application.

 
 
