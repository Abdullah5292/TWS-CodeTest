# Item Management App

## Project Overview 
The Inventory Management System is a user-friendly web application designed to help businesses efficiently track and manage their inventory. Built with React.js on the frontend, Node.js on the backend, and MSSQL as the database, it provides an intuitive interface for adding, viewing, updating, and deleting inventory items.

## Architecture:
The application follows the MVC design pattern, which helps in maintaining clear separation of concerns for scalability and maintainability:

**Model**: Represents the data structure. In this case, it maps to the inventory items stored in the MSSQL database.
**View**: The frontend, built with React.js, renders the user interface, presenting inventory data and allowing users to interact with it.
**Controller**: Handles the logic behind API requests, processes the data, and communicates with the model to perform CRUD operations.

## Key Features:
**CRUD Operations**: Manage inventory items by adding, updating, deleting, and viewing item details.
**Database Integration**: Uses MSSQL to store and retrieve inventory items, ensuring secure and efficient data management.
**MVC Structure**: Clear separation of concerns between the frontend (View), backend API (Controller), and data (Model).
**RESTful API**: The backend uses Express.js to implement RESTful API endpoints that interact with the frontend and database.
**User-friendly UI**: Built with React.js, the frontend offers a simple and intuitive interface.


## Technologies Used:
**Frontend**: React.js, JavaScript, HTML, CSS
**Backend**: Node.js, Express.js, SQL
**Database**: MSSQL
**Others**: Axios (for API calls), React Router (for navigation)




## Setup Instructions

### **Prerequisites**
- Node.js & npm installed
- **Microsoft SQL Server (MSSQL)** installed 
- `mssql` Node.js package installed



### **Installation**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abdullah5292/TWS-CodeTest.git

2. **Install Dependencies**
- Navigate to the project directory and install the necessary dependencies
- npm install

3. **Connect to Database**
- Create a .env file in the root directory
- Add the following environment variables to the .env file
    
    DB_HOST=localhost
    DB_PORT=1433
    DB_USER= 'sa', 
    DB_PASSWORD= 'DB_Password', 
    DB_NAME= 'TWS_Db'

4. **Run the Backend**
- npm index.js / nodemon index.js
- Backend will run on : http://localhost:5001 

5. **Run the Frontend**
- npm start
- Frontend will run on : http://localhost:3000

6. **Access the Application**
- Once both the frontend and backend servers are running, open your browser and go to:
- http://localhost:3000


## Assumptions Made 
- **Database**: The app assumes that an MSSQL database is already set up and running.
- **Environment Variables**: The application uses a .env file to store sensitive information like database credentials.
- **Application Directory Structure**: The project is split into frontend and backend directories.
- **Node packages** : User has installed latest version node on their local system.

## Project File Structure 

/Project-root
│── /backend
│   ├── /models
│   ├── /routes
|   ├── /controller
│   ├── /utils
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│── /frontend
│   ├── /src
|       ├── /components
|       ├── /pages
|       ├── /services
|   ├── index.css
│   ├── App.js
│   ├── index.js
│── README.md
│── package.json
│── .gitignore

