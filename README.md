<img src="https://raw.githubusercontent.com/nikhilz/ng8-myEMS/master/src/assets/images/logo-small.jpg" width="100" height="100">

# ng8-JwtAuth

Backend : https://github.com/nikhilz/springboot2-security-jwt
 
 `Summary :`

* JWT Authentication Flow for User Signup & User Login
* Project Structure for Angular 8 Authentication with HttpInterceptor, Router
* How to implement HttpInterceptor
* Creating Login, Signup Components with Form Validation
* Angular Components for accessing protected Resources
* How to add a dynamic Navigation Bar to Angular App
* Working with Browser Session Storage


# Flow for User Registration and User Login
For JWT Authentication, we’re gonna call 2 endpoints:

* POST api/auth/signup for User Registration
* POST api/auth/signin for User Login

<img src="https://github.com/nikhilz/ng8-JwtAuth-Frontend/blob/master/src/assets/images/angular-8-jwt-authentication-flow.png">


# Angular App Diagram with Router and HttpInterceptor

<img src="https://github.com/nikhilz/ng8-JwtAuth-Frontend/blob/master/src/assets/images/angular-8-jwt-authentication-overview.png">

– The App component is a container using Router. It gets user token & user information from Browser Session Storage via token-storage.service. Then the navbar now can display based on the user login state & roles.

– Login & Register components have form for submission data (with support of Form Validation). They use token-storage.service for checking state and auth.service for sending signin/signup requests.

– auth.service uses Angular HttpClient ($http service) to make authentication requests.
– every HTTP request by $http service will be inspected and transformed before being sent by auth-interceptor.

– Home component is public for all visitor.

– Profile component get user data from Session Storage.

– BoardUser, BoardModerator, BoardAdmin components will be displayed depending on roles from Session Storage. In these components, we use user.service to get protected resources from API.
