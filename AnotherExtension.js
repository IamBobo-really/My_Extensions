(async function (Scratch) {
  class AnotherExtension {
    getInfo() {
      return {
        id: "anotherextension",
        name: "AnotherExtension",
        color1: "#FF0000",
        blocks: [
          {
            opcode: "runjs",
            text: "Run Js [code]",
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              code: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "alert(\"Hello!\");"
              }
            }
          }
        ]
      }
    }

    runjs(args) {
      try {
        eval(args.code);
      } catch (e) {
        console.error("Error in Run Js block:", e);
      }
    }
  }

  Scratch.extensions.register(new AnotherExtension());
})(Scratch);
