import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

// https://auth0.github.io/nextjs-auth0/types/helpers_with_middleware_auth_required.WithMiddlewareAuthRequired.html
export default withMiddlewareAuthRequired()

// export default withAuth({
//   secret: process.env.AUTH0_SECRET,
//   pages: {
//     login: '/api/auth/login', // Redirect to Auth0 login if unauthenticated
//   },
// });

// Optionally, specify routes to apply the middleware to
// export const config = {
//   matcher: ['/dashboard/:path*', '/profile/:path*'], // Apply to specific routes
// };
