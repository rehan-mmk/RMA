
# Restaurant Management App (RMA)

### Author: Rehanullah Khan

## Project Overview
The Restaurant Management App (RMA) is a Vue.js 3 application designed to manage a list of restaurants. 
This is my first Vue.js testing project and is not intended to be a real-time production application.

## Features
- **Restaurant Listing:** Displays a list of restaurants on the home page.
- **Add, Update, Delete Restaurants:** Allows users to add new restaurants, update existing ones, and delete restaurants from the list.
- **User Authentication:** Includes login and signup functionality for users.
- **Logout Functionality:** Users can log out of the application.

## Technology Stack
- **Frontend:** Vue.js 3
- **API:** JSON Server (used instead of a traditional backend like Laravel for simplicity)
- **Database:** The API data is stored in a `db.json` file located in the root directory for testing purposes.

## Installation Instructions
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/rehan-mmk/rma.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install axios package for apis:
   ```bash
   npm install axios
   ```
4. Install routing package:
   ```bash
   npm install vue-router
   ```
5. Install the JSON Server
    ```bash
   npm install -g json-server
   ```   
6. Start the JSON Server:
   ```bash
   json-server --watch db.json
   ```
7. Run the Vue.js development server:
   ```bash
   npm run serve
   ```

## Accessing the Application
1. Navigate to the login page:
   - The application will typically run on `http://localhost:8080` after running the development server.
2. Login or sign up to access the application features.

## Testing
Feel free to test the project and explore its features. The `db.json` file is provided in the root directory for testing purposes.

## License
This project is licensed under the MIT License.

## Contact
For any questions or support, please contact Rehanullah Khan at [reh1hat@gmail.com].
