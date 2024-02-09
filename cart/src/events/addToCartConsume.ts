import { Channel } from "amqplib";
import { addToCartUseCase } from "../useCases/index.js";
import { dataFromMessage } from "../lib/adaptMessage.js";
import makeCallback from "../lib/expressCallback.js";

export default async function buildAddToCartConsumer({
    channel,
}: {
    channel: Channel;
}) {
    try {
        await channel.assertQueue("add-to-cart");
        channel.consume("add-to-cart", async (msg) => {
            const data = dataFromMessage(msg);

            try {
                await addToCartUseCase(data);
            } catch (error) {
                console.log(error);
            } finally {
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.log(error);
    }
}
