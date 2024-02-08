import { ConsumeMessage } from "amqplib";

export function makeBuffer(any): Buffer {
    return Buffer.from(JSON.stringify(any));
}

export function dataFromMessage(data: ConsumeMessage) {
    return JSON.parse(data.content.toString());
}
