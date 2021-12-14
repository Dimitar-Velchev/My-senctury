# My-senctuary
## Idea
This is a small app project for browsing, uploading and showing interest in pet adoption. It is SPA build with ReactJS. Data is fetched from a custom local server uploaded here.
## Routing 
React Router v5 is used for implementing client side routes.
## Design 
React Bootstrap as well as some custom CSS is used for styling the components. There is a global file in the public folder as well as most of the components have their own local CSS file. 
## Form Validation
The forms are validated on the client with the help of react-hook-form and yup. There is also some API errors shown in a modal when the response in not ok. 
## Public Part
Home page, catalog browsing and the options to register/login are visible without authentication. The navigation changes once we login showing the rest of the options. There is validation on the forms showing both front end errors as well as server errors.
## Private Part 
Once we have a user they can add a listing, edit or delete the listing. They have their own profile page which shows brief info about the user and holds the listings they have made.
They can also show interest in adopting a pet which they are not the owner of. These views are guarded and unauthorized user shouldn't have access to them.
