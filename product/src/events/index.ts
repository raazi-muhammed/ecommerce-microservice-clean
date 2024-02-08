import buildAddToCart from "./addToCartEvent.js";
import connection from "./connect.js";
const channel = await connection.createChannel();

export const addToCartEvent = buildAddToCart({ channel });
