// JavaScript source code
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready',() => {
	console.log('Bot update is online');
});


function conversor (args) {

	client.on('message', message => {
	
		let args = message.content.substring().split(" ");

		switch (args[0]) {

			case ("bin"):
							
				switch (args[1]) {
					case ('hex'):
						message.channel.send(ConvertBase.bin2hex((String) (args[2]) ));
						break;
					case ('dec'):
						message.channel.send(ConvertBase.bin2dec((String) (args[2]) ));
						break;
				}
				break;

			case ("hex"):
				
				switch (args[1]) {
					case ('bin'):
						message.channel.send(ConvertBase.hex2bin((String) (args[2]) ));
						break;
					case ('dec'):
						message.channel.send(ConvertBase.hex2dec((String) (args[2]) ));
						break;
				}
				break;

			case ("dec"):
				
				switch (args[1]) {
					case ('bin'):
						message.channel.send(ConvertBase.dec2bin((String) (args[2]) ));
						break;
					case ('hex'):
						message.channel.send(ConvertBase.dec2hex((String) (args[2]) ));
						break;
				}
				break;

		}
	})
}


(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
        
    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };
    
    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };
    
    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };
    
    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };
    
    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };
    
    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };
    
    this.ConvertBase = ConvertBase;
    
})(this);

client.on('message', message => {
	
	let args = message.content.substring().split(" ");

	switch (args[0]) {
				
		case ("conversor"):
			message.channel.send("Este es el conversor de valores.");
			message.channel.send("Introduzca la base original del valor (bin\thex\tdec), la final y el valor.");
			conversor();
			break;

		case ("github"):
			message.channel.send("https://github.com/alexZeLoCO");
			break;

		case ("help"):
			message.channel.send("</Lista de comandos>\n\tDice.roll (int)\n\tpet\n\tping\n\ttests\n\tcampus\n\tcls int\n\tcountdown int\n\tconversor\n\tgithub\n</Fin lista de comandos>")
			break;
		
		case("pet"):
			message.reply('Gracias por el cabezazo!');
			break;

		case("ping"):
			message.reply('pong');
			break;

		case("tests"):
			if (message.member.roles.cache.some(r => r.name === "Organizacion Industrial"))
				message.channel.send ("\n14/04 PL quimica\n26/04 PL estadistica");
			else 
				message.channel.send('\n24/2 fcr teoria temas 1 y 2\n4/3 estadistica temas 1 y 2\n5/3 fcr practica bloque 0,1 y 2\n12/3 amd tema grafos\n19/3 entrega fase 1 trabajo fcr\n26/3 ondas temas 1 y 2\n8/4 estadistica tema 3\n14/4 fcr teoria bloque 2\n15/4 amd tema automatas\n16/4 fcr practica\n19/4 metodologia practica (Herencia y Polimorfismo)\n26/4 PL3 estadistica\n28/4 PL5 ondas\n29/4 estadistica tema 4 y 5 (se cambia)\n29/4 estadistica PL5,PL2\n30/4 ondas temas 3, 4 y 5\n30/4 fcr practica\n6/5 amd tema gramaticas');
			break;

		case("campus"):
			message.channel.send ('https://www.campusvirtual.uniovi.es');
			break;

		case("cls"):
			if (message.member.roles.cache.has(816227192307449917) && args[1])
				message.channel.send();
				message.channel.bulkDelete(Number(args[1])+1);			
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
