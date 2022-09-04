import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'srishtishukla66721@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aditya Raj',
    email: 'rajadityapqrst@gmail.com',
    password: bcrypt.hashSync('poiuyt', 10),
  },
  {
    name: 'Admin account',
    email: 'admind@gmail.com',
    password: bcrypt.hashSync('admin1234', 10),
    isAdmin: true,
  },
];
export default users;
