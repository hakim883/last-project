import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'hakim',
      email: 'hakim@admin.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'chaabani',
      email: 'chaabani@admin.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p.jpg',
        price: 120,
        countInStock: 20,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p.jpg',
        price: 220,
        countInStock: 20,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p.jpg',
        price: 78,
        countInStock: 20,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/p.jpg',
        price: 65,
        countInStock: 20,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/p.jpg',
        price: 139,
        countInStock: 2,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;