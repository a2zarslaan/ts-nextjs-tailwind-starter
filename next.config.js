/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'i.imgur.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
    ],
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },
};
