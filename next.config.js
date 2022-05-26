/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.pexels.com'],
    },
};

module.exports = nextConfig;

// module.exports = {
//     async redirects() {
//         return [
//             {
//                 source: '/',
//                 destination: '/',
//                 permanent: true,
//             },
//         ];
//     },
// };
