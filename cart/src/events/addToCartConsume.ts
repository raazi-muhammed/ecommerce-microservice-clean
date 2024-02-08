import { Channel } from "amqplib";
import { addToCartUseCase } from "../useCases/index.js";
import { dataFromMessage } from "../lib/adaptMessage.js";

export default async function buildAddToCartConsumer({
    channel,
}: {
    channel: Channel;
}) {
    try {
        await channel.assertQueue("add-to-cart");

        channel.consume("add-to-cart", (msg) => {
            msg;
            const data = dataFromMessage(msg);
            console.log(data);

            addToCartUseCase(data).then((res) => {
                channel.ack(msg);
            });
        });
    } catch (error) {
        console.log(error);
    }
}
