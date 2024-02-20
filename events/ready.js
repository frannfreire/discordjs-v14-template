const client = require("../index");
const { ActivityType } = require('discord.js')

client.on("ready", () => {
  console.log(`${client.user.tag} is up and ready to go!`);

  const presenceChange = () => {
    let statuses = [`Bot`, `Discord Bot`, `Bot Discord`]
    let random = statuses[Math.floor(statuses.length * Math.random())]
    client.user.setPresence({
      activities: [
        {
          name: `${random}`,
          type: ActivityType.Watching,
        },
      ],
    })
  }

  setInterval(presenceChange, 6000)
});
