import buildAddToCartConsumer from "./addToCartConsume.js";
import connection from "./connect.js";
const channel = await connection.createChannel();

buildAddToCartConsumer({ channel });
