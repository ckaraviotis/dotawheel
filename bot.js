var Discord = require('discord.js');
var logger = require('winston');
var config = require('./config.json');
var sounds = require('./sounds.json');

// Logger activate!
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'info';

// Start the bot
const bot = new Discord.Client();
bot.login(config.token);

bot.on('ready', function (evt) {
    logger.info('Connected');
});

bot.on('message', message => {
    // Ignore bot chatter
    if (message.author.bot) return;

    // Ignore non-prefixed 
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'random') {
        var r = randomInt(0, sounds.items.length);
        logger.info(sounds.items[r]);
        playSound(message, sounds.items[r].file);
    }
    else if (command == 'dc') {
        message.member.voiceChannel.leave();
    }
    else if (hasSound(command)) {
        var sound = sounds.items.filter(function(v) { return v["name"] == command; });
        playSound(message, sound[0].file);
    }
    
});

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function playSound(message, file) {
    logger.debug("Playing: " + file);
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join().then(connection => {          
            const dispatcher = connection.playFile(file);

            dispatcher.on("error", e => {
                return logger.error(e);
            });

            dispatcher.on('end', () => {
                
            });

        }).catch(logger.error);
    }
}

function hasSound(input) {
    for (var i = 0; i < sounds.items.length; i++) {
        if (sounds.items[i].name === input) {
            return true;
        }
    }
    return false;
}