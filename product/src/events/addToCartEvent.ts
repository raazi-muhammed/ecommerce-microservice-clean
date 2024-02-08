import amqp from "amqplib";

export async function addToCartEvent(eventData) {
    try {
        const connection = await amqp.connect("amqp://rabbitmq:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("add-to-cart");

        channel.sendToQueue(
            "add-to-cart",
            Buffer.from(JSON.stringify(eventData))
        );
        console.log("job send");
    } catch (error) {
        console.log(error);
    }
}
