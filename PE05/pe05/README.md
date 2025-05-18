# PE04-Cities React Application

## Input
The application receives the following inputs:
- User interactions through the UI (clicking on navigation links and cities in the list)
- Form data when adding a new city, including:
  - City name
  - Country
  - Population
  - Description
- URL parameters (cityId) to identify which city details to display

## Process
The application processes these inputs through:
- React Router to handle navigation between different views (Cities List, Add City, City Details)
- React state management to store and update the list of cities
- Form handling for the Add City feature, including validation and submission
- Using the useParams hook to extract the cityId from the URL and find the corresponding city data
- Implementing nested routes to display city details within the Cities List page
- Using the useNavigate hook to implement redirection after adding a new city

The application architecture follows these key processes:
1. Creating a central state for cities data in the App component
2. Setting up routes with React Router
3. Creating a shared layout with navigation
4. Implementing components for each feature (listing, adding, viewing details)
5. Managing form state and submission
6. Handling URL parameters for dynamic routing

## Output
The application produces the following outputs:
- Visual rendering of the Cities List showing all available cities
- A form for adding new cities
- Detailed view of a selected city showing all its information
- Visual feedback through UI elements (navigation highlighting, form inputs)
- URL changes that reflect the current application state
- Redirection to the newly added city's details page after submission

The UI is styled with CSS to create a clean, user-friendly interface with responsive design elements that work across different screen sizes.