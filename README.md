# CactusInk Blog
This project is a blog site developed using **Node.js** on the backend and **React** on the frontend.
Users can register and share their articles. Users have the option to save their articles as drafts or publish them directly. They can visit their profiles to edit, delete, or publish their written articles. Additionally, users can comment on and like the published articles. **Redux Toolkit** is chosen for state management in the project. Additionally, the **redux-persist** library is utilized for persisting the Redux state, ensuring that the state is preserved when the application is restarted. **CRUD** operations are performed using API requests, and **Formik** along with **Yup** is preferred for form validation. The UI/UX design is crafted using libraries such as **Tailwind CSS, PrimeReact**, and more.

## Screenshots
![Project snapshot](./cactus.gif)
[CactusInk Blog Live Page](https://cactusink-esma.netlify.app/)

## Tech/framework used
***Built with:*** <br>
[React](https://reactjs.org/): A JavaScript library for building user interfaces.<br>
[React-Redux](https://react-redux.js.org/): Official React bindings for Redux.<br>
[Redux Toolkit](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.<br>
[Redux-persist](https://github.com/rt2zz/redux-persist): Persist and rehydrate a redux store.<br>
[Yup](https://github.com/jquense/yup): A JavaScript schema builder for value parsing and validation.<br>
[Formik](https://formik.org/): Build forms in React, without the tears.<br>
[react-icons](https://react-icons.github.io/react-icons/): Icon components for popular icon sets.<br>
[React Router DOM](https://reactrouter.com/): Declarative routing for React.js.<br>

***UI Libraries:***<br>
[Quill](https://quilljs.com/): A modern WYSIWYG editor.<br>
[PrimeReact](https://www.primefaces.org/primereact/): A collection of rich UI components for React.<br>
[Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.<br>
[Heroicons/React](https://heroicons.com/): A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.<br>
[Headless UI/React](https://headlessui.dev/): Completely unstyled, fully accessible UI components.<br>
[React Toastify](https://github.com/fkhadra/react-toastify): A React library for toast notifications.<br>

***Data Handling:***<br>
[Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.<br>
***Development Tools:***<br>
[Postman](https://www.postman.com/): A collaboration platform for API development.<br>
[Redux DevTools](https://redux.js.org/): DevTools for Redux.<br>
## How to use?
***Reading Blogs:***
Browse through the blogs available on the home page.
View the number of readers, likes, and comments each published blog has received.
Commenting and liking blogs is only possible after logging in.<br>
***Logging In:***
Click the "Login" link in the top right corner to log in to your account.
If you don't have an account, create a new one using the "Register" options.<br>
***Commenting and Liking Blogs:***
After logging in, you can leave comments or like published blogs.
Share your opinions by using the comment and like options on the blog detail page.<br>
***Writing Your Own Blog:***
Once logged in, create a new blog post by selecting the "New Blog" option.
Save your writing as a draft or publish it directly.<br>
***Profile Page Operations:***
Visit your profile page to see the blogs you've written.
Edit, delete, or unpublish your posts from this section.<br>
***Logging Out:***
For user security and privacy, click the "Logout" option to sign out after completing your actions.
## Description
To run the project, first install the dependencies:<br>
***`npm install`***<br>
Then start the application:<br>
***`npm start`***<br>
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## API Reference
https://36126.fullstack.clarusway.com

