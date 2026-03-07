(async function (Scratch) {
  const Variables = {};
  class NewExtension {
    getInfo() {
      return {
        id: "newextension",
        name: "NewExtension",
        color1: "#FF0000",
        blocks: [
          // --- Group 1 ---
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Group 1"
          },
          {
            opcode: "store",
            text: "Store [something]",
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              something: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello"
              }
            }
          },

          // --- Group 2 ---
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Group 2"
          },
          {
            opcode: "alert",
            text: "Alert",
            blockType: Scratch.BlockType.COMMAND,
            arguments: {}
          }
        ]
      }
    }

    // You did NOT want this changed, so it stays exactly as-is.
    store(args) {
      Variables.saved = args.something
    }

    // Also untouched.
    alert(args) {
      alert(Variables.saved || "Nothing saved yet");
    }
  }
  Scratch.extensions.register(new NewExtension());
})(Scratch);
