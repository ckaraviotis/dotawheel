## Discord DOTA Wheel

This is a simple Discord bot to play the DOTA2 chatwheel sounds.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation

1. You'll first need to set up a Discord bot, as described at https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
2. Rename config.example.json to config.json and add your token,
3. To launch the bot, run the following commands. 

```
npm install
npm start
```

## Usage

All of the sounds the bot is capable of playing are catalogued in sounds.json. To add a new sound, create a new entry as below.

```
{ "name": "commandName", "file": "./path/to/file.mp3" }
```

You can play the file by prefixing the command with whatever your config.prefix (! by default), e.g. `!commandName`.

By default, the bot can play sounds using the following commands:

```
all_dead
ayayay
bozhe
brutal
charge
crashnburn
cricket
crybaby
disastah
drumroll
gg
prosto
frog
headshake
jia
patience
poliang
rimshot
sad
sproing
tian
wan
wow
zhil
zou
crowd_1
crowd_2
```