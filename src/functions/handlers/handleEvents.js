const fs = require("fs");

module.exports = (client) => {
  client.handleEvents = async () => {
    const eventFiles = fs
      .readdirSync("./src/events")
      .filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = fs.readdirSync(`../events/${file}`).filter((file) => file.endsWith(".js"));
      
      switch(folder){
        case "client":
            for (const file of eventFiles) {
                const event = require(`../events/client/${file}`);
                if (event.once) {
                  client.once(event.name, (...args) => event.execute(...args, client));
                } else {
                  client.on(event.name, (...args) => event.execute(...args, client));
                }
                console.log(`Event loaded: ${event.name}`);
            }
            break;
        default:
            for (const file of eventFiles) {
                const event = require(`../events/${file}`);
                if (event.once) {
                  client.once(event.name, (...args) => event.execute(...args, client));
                } else {
                  client.on(event.name, (...args) => event.execute(...args, client));
                }
                console.log(`Event loaded: ${event.name}`);
            }
            break;
      }
    }
  };
};
