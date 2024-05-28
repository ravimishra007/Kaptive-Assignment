# Kaptive-Assignment


## Introduction

This dashboard isn't just your average tool for managing money—it's a powerhouse designed to make budgeting, tracking expenses, and understanding your finances easier than ever. With its sleek design and user-friendly features, you'll find a responsive bar chart and a neat data table that make navigating your financial data a breeze. Whether you're a finance whiz or just starting out, this dashboard is here to simplify things and help you stay on top of your finances with ease.



## Deplolyed App

Frontend: https://kaptive-assignment-sooty.vercel.app/

Backend: https://kaptive-backend-a5en.onrender.com/


## Technologies Used
- *Backend*:
  - Node.js
  - Express.js
  - MongoDB
- *Frontend*:
  - JavaScript
  - React.js
  - ChakraUI
  - Redux
  
- *Other Tools*:
  - JSON Web Tokens (JWT) for authentication
  - bcrypt.js for password hashing
  - Axios for HTTP requests

## Directory Structure

```

Kaptive-Assignment
├── BackEnd/
│   ├── src
│   │  ├── config
│   │  ├── controller
│   │  ├── models
│   │  ├── routes
│   │  └── index.js
│   ├── .gitignore
│   └── package.json
│   
├── FrontEnd/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── visa.png
│   │   ├── components/
│   │   │   ├── BarGraph.jsx
│   │   │   ├── ComposedChart.jsx
│   │   │   ├── Hearder.jsx
│   │   │   ├── CashflowTable.jsx
│   │   │   ├── LineChart.jsx
│   │   │   ├── pieChart.jsx
│   │   │   ├── ReportSection.jsx
│   │   │   ├── SideBar.jsx
│   │   │   └── Visualization.jsx
│   │   ├── pages/
│   │   │   ├── DashBoard/
│   │   │   |     ├── CharPage.jsx
│   │   │   |     ├── Table.jsx
│   │   │   |     ├── Reports.jsx
│   │   │   |     └── ForeCast.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── redux/
│   │   │   ├── action.ts
│   │   │   ├── actionTypes.ts
│   │   │   ├── authReducer.ts
│   │   │   └── store.ts
│   │   ├── routes/
│   │   │   └── AllRoutes.tsx
│   │   ├── styles/
│   │   │   └── login.css
│   │   ├── img
│   │   ├── data
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── config.js
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
└── README.md

```

## Video Walkthrough of the project

A detailed walkthrough of all the features of our project can be found here:

https:

## Installation & Getting started

To run the frontend website, enter the following commands in your terminal:

```bash
# Move into the FrontEnd Directory
cd Front-end/

# Install all dependencies
npm install

# Run the dev server
npm run dev
```


If you would like to run a local server instead, use the following commands:

```bash
# Move into the BackEnd directory
cd Back-end/

# Run the server
npm run server
```


## Usage

The Assignment lands on the Login page. On the Login page, the following functions can be performed:

1. Login Page :

![Login page](./FrontEnd/src/img/keptive_signin.png)

2. Signup Page:

![Signup page](./FrontEnd/src/img/keptive_signup.png)

2. Logout:

![logout page](./FrontEnd/src/img/keptive_logout.png)


Once logged in, you will be either redirected to the Dashboard page.

3. ChartPage: where all the graphs are displayed.

![chartPage](./FrontEnd/src/img/keptive_chart.png)


4. Table page: where all the graphs are displayed related to the table
![Table page](./FrontEnd/src/img/keptive_table.png)

4. Reports: where all the graphs are displayed related to the table
![Report page](./FrontEnd/src/img/keptive_report.png)


## API Endpoints

The deployed server can be used to fetch and sort any data. Further, it can be used to log in and register a user.

API : https://kaptive-backend-a5en.onrender.com/

Endpoints: 

1. Data: 

- GET https://kaptive-backend-a5en.onrender.com/data - retrieve all items

2. users:

- GET https://kaptive-backend-a5en.onrender.com/user/users - retrieve all users
- POST https://kaptive-backend-a5en.onrender.com/user/register - register a new user
- POST https://kaptive-backend-a5en.onrender.com/user/login - log in as an existing user
