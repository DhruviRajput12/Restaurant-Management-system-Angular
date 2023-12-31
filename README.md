Project By Group Bit-Nerds 

﻿# RestaurantManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------


## Angular Project Report: Restaurant Management System (Admin Side)

### Project Overview:
The Restaurant Management System (Admin Side) is an Angular-based web application designed to facilitate the management of a restaurant. This report provides a comprehensive summary of the project's key components, features, and technologies utilized.

### Home Component:
The Home component serves as the landing page for the application. It includes the following features:

- **Title and Introduction:** The page welcomes users with a clear and engaging title, setting the tone for the application's purpose.
- **User Interaction:** The Home component provides sections for user interaction, including options to sign up or log in.
- **Sign Up Option:** A "Get Started!" card encourages users to take action, and a "Sign Up Here!" subtitle directs users to the sign-up section.

### Authentication Components:
Authentication components handle user login and provide personalized experiences:

- **Authentication Context:** The project establishes an authentication context, AuthContext, through Angular's dependency injection mechanism, encapsulating authentication-related state and methods.
- **Login Page:** The LoginPage component manages the login process using reactive forms. It handles input fields, login state, and error handling.
- **Authentication Status Display:** AuthStatus component displays personalized welcome messages based on the user's authentication status.
- **Login Form:** The LoginForm component renders a user-friendly login form with input fields for username and password.
- **Logout Button:** The LogoutButton component enables users to log out, clearing the token and resetting the isLoggedIn state.

### Menu Component:
The MenuComponent handles dynamic menu management:

- **Fetching Menu Data:** The component fetches menu data from a RESTful API using Angular's lifecycle hooks and stores it in the menuItems property.
- **Menu Item Management:** Users can add, edit, and delete menu items. An "Add to Cart" button adds items to the cart.
- **Add to Cart Functionality:** Users can add items to their cart, enhancing their ordering experience.
- **User Feedback:** A success message confirms the successful addition of a new menu item.

### Orders Component:
The Orders component manages customer orders:

- **Order Initialization:** The component initializes order details using query parameters from the URL, setting an initial state for quantity and saved status.
- **Quantity Management:** Users can adjust order quantities using buttons or direct input.
- **Order Confirmation:** Users confirm and submit orders, triggering HTTP requests to the API and displaying success messages.
- **Order Cancellation:** Orders can be canceled, triggering HTTP DELETE requests and displaying cancellation messages.
- **Styling:** Visual styling is managed through the external CSS file `Order.css`.

### Contact Component:
The Contact component provides a contact form:

- **Form Inputs:** Users can input their name, email, and message through dedicated form fields.
- **Form Submission:** The form submission process is controlled by the `handleSubmit` event handler.
- **Console Logging:** Submitted form data is logged to the console, acting as a placeholder for more advanced actions.
- **Clearing Form Fields:** After successful submission, input fields are cleared to enhance user experience.

### Technologies Used:
The project utilizes the Angular framework, including its routing capabilities, reactive forms for input handling, and dependency injection for context creation. HttpClientModule is employed for making HTTP requests to the backend API.

### Conclusion:
The Restaurant Management System (Admin Side) is a comprehensive Angular application that provides an efficient and user-friendly platform for managing restaurant operations. The combination of well-designed components, reactive forms, and integration with RESTful APIs contributes to a robust and functional system.
