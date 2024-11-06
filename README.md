# Gadget Heaven

Welcome to the Gadget Heaven! This project is a responsive and interactive web app designed to let users explore, add gadgets to their cart, manage a wishlist, and experience seamless functionality for their shopping needs.

## 📍 Live Website
Visit the live project: [Gadget Heaven](https://gadget-heaven-using-react.netlify.app)  
(Replace "#" with your actual link)

## 📄 Requirement Document
View the complete requirements here: [Requirement Document](https://publuu.com/flip-book/708772/1576020)  
(Replace "#" with your actual link)

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [React Fundamentals Used](#react-fundamentals-used)
- [Data Handling and State Management](#data-handling-and-state-management)
- [Key Features](#key-features)


---

## 📌 Project Overview
Gadget Heaven provides a smooth shopping experience by offering features to manage a cart, create a wishlist, sort items, and calculate costs dynamically. Using a component-based structure, the project is easy to extend and modify, making it an ideal example of a scalable React application.

---

## ⚛️ React Fundamentals Used
The project demonstrates the use of essential React concepts:

- **Functional Components**: Structured with reusable and maintainable functional components.
- **React Router**: Enables seamless navigation between the Cart and Wishlist tabs.
- **useState Hook**: Manages component state, including active tabs, cart and wishlist lists, and modal visibility.
- **useEffect Hook**: Executes side effects such as retrieving data from local storage and recalculating the total cost.
- **Props & Prop Drilling**: Data is passed down through props, ensuring that each component has access to the necessary data.
- **Event Handling**: Custom event handlers manage actions like sorting, deleting items, and handling modal interactions.

---

## 🗄 Data Handling and State Management
This project uses Local Storage along with React’s state management hooks for data persistence and real-time updates.

- **Local Storage**: Persists cart and wishlist items, allowing users to maintain their lists across sessions.
- **Custom Utility Functions**: Handles data retrieval and updates, such as `getStoredCartList`, `getStoredWishlist`, `updateStoredCart`, and `updateStoredWishlist`.

---

## 🌟 Key Features
- **Cart Management**: Add items to the cart, view the total cost, sort items by price, and clear the cart upon purchase.
- **Wishlist Management**: Add items to a wishlist and manage it separately from the cart.
- **Purchase Confirmation Modal**: A confirmation modal appears after purchase, clearing the cart and providing feedback to the user.
- **Responsive Design**: The layout adjusts smoothly across devices, providing an optimal experience.
- **Tab Navigation**: Using `react-tabs`, users can easily switch between Cart and Wishlist views.

---

