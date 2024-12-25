/**
 * An array of route that accessible for public
 * this route don't require authintication
 * @type {string[]}
 */

export const publicRoute = ["/"];

/**
 * An array of route that are used for authentication
 * this route will redirect logged in users to product page
 * @type {string[]}
 */

export const authRoute = ["/auth/login", "/auth/register"];

/**
 * the prefix for apiauthintication route
 * routes that start with this prefix are used for api authintication purposes
 * @type {string}
 */

export const apiRoute = "/api/auth";

/**
 * the default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
