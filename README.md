# SurveyCalc API

## Description

**SurveyCalc API** is a RESTful backend service designed to compute the area of a land parcel from a set of geographic coordinates. The API accepts coordinate points representing the boundary of a parcel and processes them to determine the enclosed land area.

The system also includes a basic authentication and authorization mechanism, allowing users to register and log in to access the service. Administrators have additional privileges to manage the platform by viewing registered users and deleting accounts when necessary.

This API can be integrated into applications related to surveying, land management, and geospatial analysis where polygon based area calculations are required.

## Architecture

**Tech Stack**

_Backend_

- Node.js
- Express.js

_Database_

- MongoDB
- Mongoose

_Authentication & Security_

- bcryptjs
- jsonwebtoken (JWT)
- cookie-parser

_Validation & Configuration_

- express-validator
- dotenv

_Development Tools_

- VS Code
- Git & GitHub

**STRUCTURE**

```
SURVEYCALC API/
    config/             # Database configuration
    controllers/        # Application logic (handle requests,computation and responses)
    middlewares/        # Custom middleware (authentication, authorization, etc.)
    models/             # Database schemas and models
    routes/             # API endpoint definitions

    .gitignore
    app.js              # Main application entry point
    package.json
    package-lock.json
    README.md
```

## HOW IT WORKS

This project is a RESTful backend API built with Express.js that calculates the area of a land parcel based on coordinates provided by users. Below is an overview of how the system works:

### 1. Router Setup

- We create a router using express.Router()
- All routes are defined in the routes folder
- Each route is connected to a controller function that handles the logic

**API Endpoint / Routes**

_ADMIN_

- GET /admin/users (displays the complete list of users)
- GET /admin/projects (provides access to all users projects)
- GET admin/project?search=projectName (retrieves a specific project by ID)
- DELETE admin/users/:id (delete a user by id)

_GENERAL_

- POST /auth/register # registers new user

```
    _sample request_
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "password123"
    }

    _sample response_
    {
        "message": "USER REGISTERED SUCCESFULLY",
        "_id": "69b3f...6ea6d3",
        "name": "John Doe",
        "email": "johndoe@example.com"
    }
```

- POST /auth/login # users login incl admin

```
    _sample request_
        {
            "email": "johndoe@example.com",
            "password": "password123"
        }

    _sample response_
        {
            "message": "LOGIN SUCCESFUL",
            "name": "John Doe",
            "email": "johndoe@example.com",
            "role": "surveyor"
        }
```

_USERS_

- GET /api/projects # retrieves all projects belonging to a user
- GET /api/project?search=projectname # retrieves a specific project
- POST /api/project # Calculates the area of a project from coordinates and saves it to the database

```
    _sample request_
        {
        "data": {
            "name": "john doe plot",
            "coordinates": [
            { "easting": 10000, "northing": 10000 },
            { "easting": 10000, "northing": 25000 },
            { "easting": 20000, "northing": 30000 },
            { "easting": 35000, "northing": 28000 },
            { "easting": 40000, "northing": 15000 },
            { "easting": 30000, "northing": 8000 },
            { "easting": 15000, "northing": 7000 },
            { "easting": 10000, "northing": 10000 }
            ]
        }
        }

    _sample response_
        {
            "message": "PROJECT SAVED",
            "newProject": {
                "name": "john doe plot",
                "coordinates": [
                    {
                        "easting": 10000,
                        "northing": 10000
                    },
                    {
                        "easting": 10000,
                        "northing": 25000
                    },
                    {
                        "easting": 20000,
                        "northing": 30000
                    },
                    {
                        "easting": 35000,
                        "northing": 28000
                    },
                    {
                        "easting": 40000,
                        "northing": 15000
                    },
                    {
                        "easting": 30000,
                        "northing": 8000
                    },
                    {
                        "easting": 15000,
                        "northing": 7000
                    },
                    {
                        "easting": 10000,
                        "northing": 10000
                    }
                ],
                "area": 547500000,
                "userId": "69b3ff47e9af5d733b6ea6d8",
                "_id": "69b40072e9af5d733b6ea6db",
                "createdAt": "2026-03-13T12:17:54.243Z",
                "updatedAt": "2026-03-13T12:17:54.243Z",
                "__v": 0
            }
        }
```

### 2. Request Flow

1. _Incoming Request_ --> The request hits the Express server
2. _Router Matches Endpoint_ --> Express looks up the route in pageRouter
3. _middleware runs authorization_ --> Middleware checks authentication and authorization (e.g., JWT verification, admin privileges)
4. _Controller Handles Logic_ --> The appropriate controller processes the request and retrieves data
5. _Response Sent_ --> Data is sent back to the client (JSON or rendered page)

## HELP

If you encounter any issues or need assistance, please contact me via the email below. Be sure to include a clear description of your problem so I can provide the best support possible.

## DEVELOPER

This project was developed by MUSTAPHA BUSARI Back-End students at TECHCRUSH.

**CONTACT**

- <mustaphabusari2005@gmail.com>

## VERSION HISTORY

1.0.0

- Initial Release
