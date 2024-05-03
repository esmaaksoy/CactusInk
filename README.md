# CactusInk Blog
This project is a blog site developed using **Node.js** on the backend and **React** on the frontend.
Users can register and share their articles. Users have the option to save their articles as drafts or publish them directly. They can visit their profiles to edit, delete, or publish their written articles. Additionally, users can comment on and like the published articles. **Redux Toolkit** is chosen for state management in the project. Additionally, the **redux-persist** library is utilized for persisting the Redux state, ensuring that the state is preserved when the application is restarted. **CRUD** operations are performed using API requests, and **Formik** along with **Yup** is preferred for form validation. The UI/UX design is crafted using libraries such as **Tailwind CSS, PrimeReact**, and more.

## Screenshots
![Project snapshot](./cactus.gif)
[CactusInk Blog Live Page](https://cactusink-esma.netlify.app/) <br><br>

If you prefer to see Redoc or JSON instead of Swagger, simply replace 'swagger' in the endpoint with 'redoc' or 'json'.<br>
[Swagger Documents](https://cactusink-backend.onrender.com/documents/swagger/)

## Project Skeleton

```
CactusInk Blog (folder)
|
|
├── public
│    └── index.html
├── src
│    ├── app
│    │    └──  store.jsx
│    ├── assets
│    │     ├──avatar.webp
│    │     ├──ink.webp
│    │     ├──pen.webp
│    │     └──logo.png
│    ├── components
│    │     ├──auth
│    │     │     ├──LoginForm.jsx
│    │     │     └──RegisterForm.jsx
│    │     ├──BlogForm.jsx
│    │     ├──Card.jsx
│    │     ├──Comments.jsx
│    │     ├──CreateComment.jsx
│    │     ├──Footer.jsx
│    │     ├──Footer.jsx
│    │     ├──Modal.jsx
│    │     ├──MyComponent.jsx
│    │     ├──Navbar.jsx
│    │     └──RightSide.jsx
│    ├── features
│    │     ├──authSlice.js
│    │     └──blogSlice.jsx
│    ├── helpers
│    │     ├── icon.js
│    │     └──ToastNotify.js
│    ├── pages
│    │     ├──About.jsx
│    │     ├──Dashboard.jsx
│    │     ├──Detail.jsx
│    │     ├──Home.jsx
│    │     ├──Login.jsx
│    │     ├──NewBlog.jsx
│    │     ├──NotFound.jsx
│    │     ├──Profile.jsx
│    │     └──ScroolToTop.jsx
│    ├── router
│    │     ├── PrivateRouter.jsx
│    │     └── AppRouter.jsx
│    ├── service
│    │     ├── useAuthCalls.js
│    │     ├── useAxios.js
│    │     └── useBlogCalls.jsx
│    ├── App.js
│    ├── index.js
│    ├── index.css
├── .env
├── package-lock-json
├── package.json
├── tailwind.config.js
└── README.md
```

## Tech/framework used
***Built with:*** <br>
- **React**: A JavaScript library for building user interfaces.<br>
- **React-Redux**: Official React bindings for Redux.<br>
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.<br>
- **Redux-persist**: Persist and rehydrate a redux store.<br>
- **Yup**: A JavaScript schema builder for value parsing and validation.<br>
- **Formik**: Build forms in React, without the tears.<br>
- **React Icons**: Icon components for popular icon sets.<br>
- **React Router DOM**: Declarative routing for React.js.<br>
- **Quill**: A modern WYSIWYG editor.<br>
- **PrimeReact**: A collection of rich UI components for React.<br>
- **Tailwind CSS**: A utility-first CSS framework.<br>
- **Heroicons/React**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.<br>
- **Headless UI/React**: Completely unstyled, fully accessible UI components.<br>
- **React Toastify**: A React library for toast notifications.<br>
- **Axios**:A promise-based HTTP client for the browser and Node.js.<br>
- **Postman**:A collaboration platform for API development.<br>
- **Redux DevTools**:DevTools for Redux.<br>

## How to use?
- **Reading Blogs:**
Browse through the blogs available on the home page.
View the number of readers, likes, and comments each published blog has received.
Commenting and liking blogs is only possible after logging in.<br>
- **Logging In:**
Click the "Login" link in the top right corner to log in to your account.
If you don't have an account, create a new one using the "Register" options.<br>
- **Commenting and Liking Blogs:**
After logging in, you can leave comments or like published blogs.
Share your opinions by using the comment and like options on the blog detail page.<br>
- **Writing Your Own Blog:**
Once logged in, create a new blog post by selecting the "New Blog" option.
Save your writing as a draft or publish it directly.<br>
- **Profile Page Operations:**
Visit your profile page to see the blogs you've written.
Edit, delete, or unpublish your posts from this section.<br>
- **Logging Out:**
For user security and privacy, click the "Logout" option to sign out after completing your actions.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/esmaaksoy/CactusInk
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file in home directory.
   ```sh
   REACT_APP_BASE_URL=https://cactusink-backend.onrender.com/
   ```
5. The project is ready, you can start using it now.
   You can run:

   `npm start`

   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Reference
https://cactusink-backend.onrender.com/

## İMPORTANT NOTES !

To use the application, you can log in with the following email and password <br>
email: emily@gmail.com <br>
password: aA@gmail1234 <br>
 

