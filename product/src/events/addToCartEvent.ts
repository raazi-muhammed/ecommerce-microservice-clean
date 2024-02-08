import { makeBuffer } from "../lib/adaptMessage.js";
import { Channel } from "amqplib";

export default function buildAddToCart({ channel }: { channel: Channel }) {
    return async function addToCart(eventData) {
        try {
            await channel.assertQueue("add-to-cart");
            channel.sendToQueue("add-to-cart", makeBuffer(eventData));
        } catch (error) {
            console.log(error);
            return error;
        }
    };
}
