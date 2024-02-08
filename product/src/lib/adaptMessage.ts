export function makeBuffer(any): Buffer {
    return Buffer.from(JSON.stringify(any));
}
