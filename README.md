# Last Project — MERN E-Commerce App

A full-stack e-commerce application built as a learning/capstone project:
product catalog with reviews and ratings, cart, checkout with PayPal,
user accounts (including seller and admin roles), an admin dashboard for
managing products/orders/users, real-time chat support (via Socket.IO),
and a delivery-tracking map (Google Maps).

This is a bootcamp/self-learning capstone project, not client work — it
follows a common "MERN e-commerce" tutorial structure, extended with a
few extra features (real-time chat, map tracking).

## Tech stack

- **Frontend:** React 17, Redux + Redux Thunk, React Router, React Bootstrap,
  Material UI, Socket.IO client, `@react-google-maps/api`
- **Backend:** Node.js, Express, Mongoose (MongoDB), JWT authentication,
  bcrypt password hashing, Multer + GridFS (image uploads), Socket.IO
- **Payments:** PayPal REST API
- **Deployment target:** Heroku (see `Procfile`)

## Project structure

```
backend/    Express API (products, orders, users, "postes", uploads)
frontend/   React single-page app (Create React App)
Procfile    Heroku process declaration
```

## Running locally

### Prerequisites

- Node.js and npm
- A MongoDB database (e.g. a free MongoDB Atlas cluster)
- (Optional) PayPal and Google Maps API credentials for those features

### 1. Configure environment variables

Copy the example env files and fill in real values:

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env
```

`.env` (root, used by the backend):

- `JWT_SECRET` — secret used to sign auth tokens
- `MONGODB_URL` — your MongoDB connection string
- `PAYPAL_CLIENT_ID` — PayPal REST API client ID
- `GOOGLE_API_KEY` — Google Maps JavaScript API key

`frontend/.env`:

- `REACT_APP_GOOGLE_MAPS_API_KEY` — Google Maps JavaScript API key used by
  the map screen

### 2. Install and run the backend

```bash
npm install
npm start          # nodemon backend/server.js, http://localhost:5000
```

### 3. Install and run the frontend

```bash
cd frontend
npm install --legacy-peer-deps
npm start          # http://localhost:3000 (proxies API calls to :5000)
```

> The frontend's dependency tree includes several older/abandoned
> packages (e.g. `react-google-maps`, Material UI v4), so
> `--legacy-peer-deps` is needed for a clean `npm install` on modern npm.
> Building (`npm run build`) on Node 17+ additionally requires the
> OpenSSL legacy provider flag due to an old Webpack 4 toolchain:
> `NODE_OPTIONS=--openssl-legacy-provider npm run build`.

## Security note

This repository previously had a committed `.env` file containing real
credentials (a MongoDB connection string, a PayPal client ID, and a JWT
secret), and the backend/frontend source also had a MongoDB URI and a
Google Maps API key hardcoded directly in the code. These have been
removed from the tracked source and replaced with environment variable
reads (see `.env.example` / `frontend/.env.example` for the variables
you need to supply). Because these values were previously committed to
a public repository, they should be treated as compromised — rotate the
database password, JWT secret, and any API keys before reusing this
project with real data.

## License

MIT — see [LICENSE](./LICENSE).
