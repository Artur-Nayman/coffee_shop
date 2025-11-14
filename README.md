# Online Coffee Shop

Web application for browsing coffee products, user authentication (signup/login), shopping cart, and placing orders. Built with **Express.js**, **MySQL**, and **HTML + Fetch API**.

---

## 📁 Project Structure

```

coffee_shop/
│
├── public/                     # Frontend files
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── coffee/
│   │       └── coffee_images.txt
│   ├── js/
│   │   ├── cart.js
│   │   ├── loadNavbar.js
│   │   ├── login.js
│   │   ├── main.js
│   │   ├── menu.js
│   │   ├── product.js
│   │   └── signup.js
│   ├── cart.html
│   ├── index.html
│   ├── login.html
│   ├── menu.html
│   ├── navbar.html
│   ├── product.html
│   └── signup.html
│
├── src/                        # Backend files
│   ├── controllers/
│   │   ├── orderControllers.js
│   │   ├── productControllers.js
│   │   └── userControllers.js
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   └── routes/
│       ├── orderRoutes.js
│       ├── productRoutes.js
│       └── userRoutes.js
│
├── .env                        # Environment variables
├── package.json                # Node.js dependencies and scripts
├── server.js                   # Entry point: starts Express server
└── app.js                      # Express app configuration

````

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Artur-Nayman/coffee_shop.git
cd coffee_shop
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your MySQL credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=coffee_shop
PORT=3000
```

4. Run the server:

```bash
node server.js
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🔹 Notes

* **Login/Signup:** handled in `src/controllers/userControllers.js` and `public/login.html` / `public/signup.html`.
* **Navbar:** included via `public/navbar.html` + `js/loadNavbar.js` for consistent navigation.
* **Database:** `coffee_shop` with tables: `user`, `products`, `orders`, `order_items`.
* **Cart:** `public/cart.html` + `js/cart.js`.
* **Auth middleware:** `src/middleware/authMiddleware.js`.

---

## 💻 Development

* Frontend: plain HTML + CSS + Fetch API
* Backend: Node.js, Express, MySQL
