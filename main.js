// JavaScript source code
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready',() => {
	console.log('Bot update is online');
});

client.on('message', message => {
	
	let args = message.content.substring().split(" ");

	switch (args[0]) {
		case("pet"):
			message.reply('Thanks for the headpat!');
			break;

		case("ping"):
			message.reply('pong');
			break;

		case("tests"):
			message.reply('\n24/2 fcr teoria temas 1 y 2\n4/3 estadistica temas 1 y 2\n5/3 fcr practica bloque 0,1 y 2\n12/3 amd tema grafos\n19/3 entrega fase 1 trabajo fcr\n26/3 ondas temas 1 y 2\n8/4 estadistica tema 3\n14/4 fcr teoria bloque 2\n15/4 amd tema automatas\n16/4 fcr practica\n19/4 metodologia practica (Herencia y Polimorfismo)\n26/4 PL3 estadistica\n28/4 PL5 ondas\n29/4 estadistica tema 4 y 5 (se cambia)\n29/4 estadistica PL5,PL2\n30/4 ondas temas 3, 4 y 5\n30/4 fcr practica\n6/5 amd tema gramaticas');
			break;

		case("campus"):
			message.reply ('https://www.campusvirtual.uniovi.es');
			break;

		case("cls"):
			if (message.member.roles.cache.has(816227192307449917) && args[1])
				message.channel.send("Clearing messages");
				message.channel.bulkDelete(Number(args[1]));			
			break;

		case("Dice.roll"):
			if(args[1])
				message.reply("Dice rolled: " + (String) ( Math.floor(Math.random() * args[1]) + 1 ));
			else
				message.reply("Dice rolled: "+ (String) ( Math.floor(Math.random() * 6) + 1 ));
			break;

			
		case("countdown"):
			if(args[1])
				for (let i=0;i<Number(args[1]);i++) {
					setTimeout(() => {
						message.channel.send('Countdown: ' + ( (String) (Number(args[1]) - Number(i) ) ) ); 
					},1000*i);
					
				}
			break;
			
	}

});

client.login('ODI3MzIxODY5NDAwOTMyNDAy.YGZViA.MHvNkjI1lDnZ8ajF-V3Sg9MZmns');
