class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const arr = new Uint8Array(this.buffer);
    return String.fromCharCode(...arr);
  }
}

export default ArrayBufferConverter;
