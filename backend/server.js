// import express from 'express';
// import mongoose from 'mongoose';
// import productRouter from './routers/productRouter.js';
// import userRouter from './routers/userRouter.js';
// //import dotenv from 'dotenv';
// import path from 'path';
// import orderRouter from './routers/orderRouter.js';
// import uploadRouter from './routers/uploadRouter.js';

// //dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const url=`mongodb+srv://hakimch:52433202@cluster0.qz62m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongoose.connect(url,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//  //useCreateIndex: true,
// });

// app.use('/api/uploads', uploadRouter);
// app.use('/api/users', userRouter);
// app.use('/api/products', productRouter);
// app.use('/api/orders', orderRouter);
// app.get('/api/config/paypal', (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
// });
//  app.get('/api/config/google', (req, res) => {
//   res.send(process.env.GOOGLE_API_KEY || '');
// });
// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// app.use(express.static(path.join(__dirname, '/frontend/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
// );
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });



























// // const app = express();
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // const url=`mongodb+srv://hakimch:52433202@cluster0.qz62m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// // mongoose.connect(url,{
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   //useCreateIndex: true,
// // });




// import http from 'http';
// import { Server } from 'socket.io';
import express from 'express';
//import cors from 'cors';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
//import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import posteRouter from './routers/posteRouter.js';

import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

// import postRoutes from "./routers/posts.js";


// import Connection from './database/db.js';


// import Router from './routes/route.js';
//require('./db')
//import postMessageRoutes from './controllers/postMessageController'
// const morgan = require('morgan');

// const cookieParser = require('cookie-parser');



//const blogRoutes = require('./routes/blog');
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const categoryRoutes = require('./routes/category');
// const tagRoutes = require('./routes/tag');

//dotenv.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// app.use(cors());
// app.use(morgan('dev'));
// app.use(cookieParser());
// app.use('/', Router);


// app.use("/api/posts",postRoutes);
// app.get("/api/", (req, res) =>{
//   res.send("coding with hakim..");
// });
const url=`mongodb+srv://hakimch:52433202@cluster0.qz62m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
 mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
 //useCreateIndex: true,
});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/postes', posteRouter);
app.use('/api/orders', orderRouter);
// app.use('/posts',router);
//app.use('/api', blogRoutes);
// app.use('/api', authRoutes);
// app.use('/api', userRoutes);
// app.use('/api', categoryRoutes);
// app.use('/api', tagRoutes);
//app.use('/api/postMessages',postMessageRoutes)

//app.use('/api/orders', orderRouter);
const PAYPAL_CLIENT_ID=`AVXVO4ZMmE3HcDWhwgoPxJbvu630zHemSicj2eB8M9uMk-BVfWJu9coHn9eAFad3GSMEGw1uOU0Sffh1`
app.get('/api/config/paypal', (req, res) => {
  res.send(PAYPAL_CLIENT_ID || 'sb');
});
// const g=`AIzaSyAX9DZe0JBTlcw8Hntt`
// app.get('/api/config/google', (req, res) => {
//   res.send( || '');
// });
// const GOOGLE_API_KEY=`AIzaSyC0t0XwR_nDR8uNw0sarqZGIUyJUcmaUQ8`
const GOOGLE_API_KEY=`AIzaSyAYzR_auxNwyFwtJ9annwb2xm8LVE8OFR8`
app.get('/api/config/google', (req, res) => {
  res.send(GOOGLE_API_KEY || '');
});


const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
//  app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// Connection(username, password);


// const httpServer = http.Server(app);
// const io = new Server(httpServer, { cors: { origin: '*' } });
// const users = [];

// io.on('connection', (socket) => {
//   console.log('connection', socket.id);
//   socket.on('disconnect', () => {
//     const user = users.find((x) => x.socketId === socket.id);
//     if (user) {
//       user.online = false;
//       console.log('Offline', user.name);
//       const admin = users.find((x) => x.isAdmin && x.online);
//       if (admin) {
//         io.to(admin.socketId).emit('updateUser', user);
//       }
//     }
//   });
//   socket.on('onLogin', (user) => {
//     const updatedUser = {
//       ...user,
//       online: true,
//       socketId: socket.id,
//       messages: [],
//     };
//     const existUser = users.find((x) => x._id === updatedUser._id);
//     if (existUser) {
//       existUser.socketId = socket.id;
//       existUser.online = true;
//     } else {
//       users.push(updatedUser);
//     }
//     console.log('Online', user.name);
//     const admin = users.find((x) => x.isAdmin && x.online);
//     if (admin) {
//       io.to(admin.socketId).emit('updateUser', updatedUser);
//     }
//     if (updatedUser.isAdmin) {
//       io.to(updatedUser.socketId).emit('listUsers', users);
//     }
//   });

//   socket.on('onUserSelected', (user) => {
//     const admin = users.find((x) => x.isAdmin && x.online);
//     if (admin) {
//       const existUser = users.find((x) => x._id === user._id);
//       io.to(admin.socketId).emit('selectUser', existUser);
//     }
//   });

//   socket.on('onMessage', (message) => {
//     if (message.isAdmin) {
//       const user = users.find((x) => x._id === message._id && x.online);
//       if (user) {
//         io.to(user.socketId).emit('message', message);
//         user.messages.push(message);
//       }
//     } else {
//       const admin = users.find((x) => x.isAdmin && x.online);
//       if (admin) {
//         io.to(admin.socketId).emit('message', message);
//         const user = users.find((x) => x._id === message._id && x.online);
//         user.messages.push(message);
//       } else {
//         io.to(socket.id).emit('message', {
//           name: 'Admin',
//           body: 'Sorry. I am not online right now',
//         });
//       }
//     }
//   });
// });

// httpServer.listen(4000, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});


// mongoose.set("useFindAndModify", false);
