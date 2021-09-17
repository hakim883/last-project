import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Poste from '../models/posteModel.js';
import User from '../models/userModel.js';
import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';

const posteRouter = express.Router();

posteRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const name = req.query.name || '';
    const seller = req.query.seller || '';
    
    const rating =
      req.query.rating && Number(req.query.rating) !== 0
        ? Number(req.query.rating)
        : 0;

    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const sellerFilter = seller ? { seller } : {};
    const ratingFilter = rating ? { rating: { $gte: rating } } : {};
    
    const count = await Poste.count({
      ...sellerFilter,
      ...nameFilter,
    
      ...ratingFilter,
    });
    const postes = await Poste.find({
      ...sellerFilter,
      ...nameFilter,
    
      ...ratingFilter,
    })
      .populate('seller', 'seller.name seller.logo')
      
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    res.send({ postes, page, pages: Math.ceil(count / pageSize) });
  })
);



posteRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const seller = await User.findOne({ isSeller: true });
    if (seller) {
      const postes = data.postes.map((poste) => ({
        ...poste,
        seller: seller._id,
      }));
      const createdPostes = await Poste.insertMany(postes);
      res.send({ createdPostes });
    } else {
      res
        .status(500)
        .send({ message: 'No seller found. first run /api/users/seed' });
    }
  })
);

posteRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const poste = await Poste.findById(req.params.id).populate(
      'seller',
      'seller.name seller.logo seller.rating seller.numReviews'
    );
    if (poste) {
      res.send(poste);
    } else {
      res.status(404).send({ message: 'Poste Not Found' });
    }
  })
);

posteRouter.post(
  '/',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const poste = new Poste({
      name: 'sample name ' + Date.now(),
      seller: req.user._id,
      image: '/images/p1.jpg',
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const createdPoste = await poste.save();
    res.send({ message: 'Poste Created', poste: createdPoste });
  })
);
posteRouter.put(
  '/:id',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const posteId = req.params.id;
    const poste = await Poste.findById(posteId);
    if (poste) {
      poste.name = req.body.name;
      poste.image = req.body.image;
      poste.description = req.body.description;
      const updatedPoste = await poste.save();
      res.send({ message: 'Poste Updated', poste: updatedPoste });
    } else {
      res.status(404).send({ message: 'Poste Not Found' });
    }
  })
);

posteRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const poste = await Poste.findById(req.params.id);
    if (poste) {
      const deletePoste = await poste.remove();
      res.send({ message: 'Poste Deleted', poste: deletePoste });
    } else {
      res.status(404).send({ message: 'Poste Not Found' });
    }
  })
);

posteRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const posteId = req.params.id;
    const poste = await Poste.findById(posteId);
    if (poste) {
      if (poste.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: 'You already submitted a review' });
      }
      const review = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      poste.reviews.push(review);
      poste.numReviews = poste.reviews.length;
      poste.rating =
        poste.reviews.reduce((a, c) => c.rating + a, 0) /
        poste.reviews.length;
      const updatedPoste = await poste.save();
      res.status(201).send({
        message: 'Review Created',
        review: updatedPoste.reviews[updatedPoste.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: 'Poste Not Found' });
    }
  })
);

export default posteRouter;
