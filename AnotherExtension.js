(async function (Scratch) {
  class AnotherExtension {
    getInfo() {
      return {
        id: "anotherextension",
        name: "AnotherExtension",
        color1: "#FFFFFF",
        blocks: [
          {
            opcode: "runjs",
            text: "Run Js []",
            type: Scratch.BlockType.COMMAND,
            arguments: {}
          }
        ]
      }
    }
    runjs(args) {}
  }
  Scratch.extensions.register(new AnotherExtension());
})(Scratch)
