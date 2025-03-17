# ReactJS Shopping Cart Application

This is a ReactJS application that fetches product data from the [Fake Store API](https://fakestoreapi.com/) and allows users to add, view, and remove products from the cart through a modal interface. The application has separate pages for products and cart functionality, with proper routing between them.

## Features
- Fetches a list of products from the Fake Store API and displays them.
- Users can view product details in a modal.
- Users can add products to the shopping cart.
- Cart management functionality: users can view and remove items from the cart.
- React Router is used for navigation between the product page and the cart page.

## Tech Stack
- **ReactJS**: JavaScript library for building the user interface.
- **React Router**: For handling navigation and routing between pages.
- **Axios**: For making HTTP requests to the Fake Store API.
- **React Modal**: For displaying product details in a modal.
- **useState and useEffect hooks**: For managing state and side-effects in the app.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prasanna0401/E-commerce-store.git
   ```

2. Install Dependencies 
Once you've cloned the repository, navigate to the project directory and install the required dependencies:
    ```bash
    npm install
    ```

3. Run the Application
After installing the dependencies, you can start the development server with:
    ```bash
    npm start
   ```
   The app will be available at http://localhost:3000 in your browser.


## Key Components
- ProductCard.js: Fetches and displays a list of products.
- ProductPage.js: The main page that displays all the products and allows users to add them to the cart.
- CartPage.js: Displays all items in the cart with options to remove them.

## Routing
- ```/``` - ProductPage: Displays a list of products fetched from the Fake Store API.
- ```/cart``` - CartPage: Displays the shopping cart, where users can remove items.

## License
This project is open-source and free to use.