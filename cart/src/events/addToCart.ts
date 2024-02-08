import amqp from "amqplib";
import { addToCartUseCase } from "../useCases/index.js";

async function connect() {
    try {
        const connection = await amqp.connect("amqp://rabbitmq:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("add-to-cart");

        channel.consume("add-to-cart", (msg) => {
            console.log(msg.content.toString());
            const data = JSON.parse(msg.content.toString());
            channel.ack(msg);
            addToCartUseCase(data);
        });
    } catch (error) {
        console.log(error);
    }
}
connect();
