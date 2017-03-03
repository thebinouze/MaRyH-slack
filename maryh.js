var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false,
  stats_optout: true
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});
// connect the bot to a stream of messages
controller.spawn({
  token: "xoxb-144884287875-p2TI8tTYgel3Z6hSX2g9n7fK",
}).startRTM()
// give the bot something to listen for.
controller.hears('pwet',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Pwet yourself! Motha fucka!');

});
controller.hears('ta talala ta',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'XOUIN XOUIN !!!');

});
controller.hears('DAA',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'BLAAH !!!');

});
controller.hears('le batard',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Ah bon ? Tu ne le savais pas ?');

});
controller.hears('les batard',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Ah bon ? Tu ne le savais pas ?');

});
controller.hears('les batards',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Ah bon ? Tu ne le savais pas ?');

});
controller.hears('vraiment tres interessant',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Muzik s\'il vous plait !!!');

});
controller.hears('alcool',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Sans alcool, la fete est plus folle !!!');

});
controller.hears('aide',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Besoin d\'aide ???  --> AssistEdit !');

});
controller.hears('chu*t MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'dsl, c un reflexe :)');

});







controller.hears('!mioute',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['Miiiiiioooooouuuuuutee Miiiiiioooooouuuuuutee !!!',
	'Miiiiiiooodooouuuuuutee !!!!',
	'début septeeeemmmmmmmmbre !!!'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 3)]);

});




controller.hears('!laphrase',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var lesPhrases = ['Le Travail n\'est pas fait pour l\'homme, la preuve ca le fatigue.',
	'La plus grande maladie du cerveau, c\'est de réfléchir !!!',
	'Fuck l\'effort inutile !!!',
	'Le tramway, ca roule dans la raie du cul de la ville.',
	'Le temps perdu ne se rattrape jamais. Alors, continuons de ne rien faire.',
	'On perd notre temps a gagner notre vie...',
	'Et Dieu créa la flemme...',
	'Si l\'envie de bosser te prend... Assieds toi et attends que ca passe.',
	'Ce n\'est pas parce que tu ne trouves pas les mots pour t\'exprimer que tu n\'as rien a dire',
	'La plus grande maladie du cerveau, c\'est de réfléchir !!!',
	'Il est toujours trop tot pour se lever.',
	'L\'amour est un feu qui devore... Mais l\'envie de chier est bien pire encore.',
	'Comment voulez-vous que je tienne ma parole puisque je vous l\'ai donnée.',
	'Aujourd\'hui, c\'est déjà le lendemain d\'hier.',
	'On nait fatigué et on vit pour se reposer.',
	'Aime ton lit comme toi-même.',
	'Repose-toi le jour pour dormir la nuit.',
	'Si tu vois quelqu\'un qui se repose, aide-le.',
	'Le travail, c\'est la fatique.',
	'Ne fais pas aujourd\'hui ce que tu peux faire demain.',
	'Fais-en le moins possible et ce que tu dois faire, fais-le faire par les autres.',
	'Trop de repos n\'a jamais tué personne.',
	'Si le travail, c\'est la santé, vive la maladie !!!',
	'Rappelle-toi que le travail est sacre, n\'y touche jamais.',
	'Si par hasard tu trouves du travail, avise le bureau des objets trouves.',
	'Ne te fatigue meme pas a tuer le temps, puisque le temps travaille pour toi.',
	'Si par megarde, tu tues le temps, utilise les temps morts pour ne rien faire.',
	'Oublie les vieux travaux et laisse les nouveaux devenir vieux.',
	'Ne reste jamais debout quand tu peux t\'asseoir et ne reste jamais assis quand tu peux t\'allonger.'
	];
	
	bot.reply(message,lesPhrases[Math.floor(Math.random() * 29)]);

});




controller.hears('^re',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 're <@'+message.user+'>');
});
controller.hears('^re MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 're <@'+message.user+'>');
});
controller.hears('^re all',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 're <@'+message.user+'>');
});
controller.hears('^re tout le monde',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 're <@'+message.user+'>');
});
controller.hears('^re à tous',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 're <@'+message.user+'>');
});




controller.hears('^salut',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'salut <@'+message.user+'>');
});
controller.hears('^salut MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'salut <@'+message.user+'>');
});
controller.hears('^salut all',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'salut <@'+message.user+'>');
});
controller.hears('^salut tout le monde',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'salut <@'+message.user+'>');
});
controller.hears('^salut à tous',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'salut <@'+message.user+'>');
});




controller.hears('^hello',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'hello <@'+message.user+'>');
});
controller.hears('^hello MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'hello <@'+message.user+'>');
});
controller.hears('^hello all',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'hello <@'+message.user+'>');
});
controller.hears('^hello tout le monde',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'hello <@'+message.user+'>');
});
controller.hears('^hello à tous',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'hello <@'+message.user+'>');
});




controller.hears('^yo',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'yo <@'+message.user+'>');
});
controller.hears('^yo MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'yo <@'+message.user+'>');
});
controller.hears('^yo all',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'yo <@'+message.user+'>');
});
controller.hears('^yo tout le monde',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'yo <@'+message.user+'>');
});
controller.hears('^yo à tous',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'yo <@'+message.user+'>');
});




controller.hears('^bonjour',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonjour <@'+message.user+'>');
});
controller.hears('^bonjour MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonjour <@'+message.user+'>');
});
controller.hears('^bonjour all',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonjour <@'+message.user+'>');
});
controller.hears('^bonjour tout le monde',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonjour <@'+message.user+'>');
});
controller.hears('^bonjour à tous',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonjour <@'+message.user+'>');
});




controller.hears('bonne nuit',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonne nuit <@'+message.user+'>');
});
controller.hears('bonne nuit MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonne nuit <@'+message.user+'>');
});
controller.hears('bonne nuit all',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonne nuit <@'+message.user+'>');
});
controller.hears('bonne nuit tout le monde',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonne nuit <@'+message.user+'>');
});
controller.hears('bonne nuit à tous',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'bonne nuit <@'+message.user+'>');
});




controller.hears('pwet MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'pouet <@'+message.user+'>');
});
controller.hears('pouet MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'pwet <@'+message.user+'>');
});




controller.hears('kt',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['kt ;)',
	'kt <@'+message.user+'> ;)'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 2)]);

});




controller.hears('!zef',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['Le vent souffle <@'+message.user+'>...',
	'Est-ce ke tu sent le veeeent ?',
	'Il répond rien, t\'as gagné <@'+message.user+'>, tu l\'as Kc... ;)',
	'wwooooooooOOOOOOOOOOUUuuuuuuuuuuu... ',
	'ya des courants d\'air ici, hein <@'+message.user+'> ? ;)'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 5)]);

});




controller.hears('MaRyH',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['Qui m\'appelle ?',
	'oui <@'+message.user+'> ?',
	'c moi !',
	'chui occupée, j\'suis aux toilettes',
	'présente !',
	'chui occupée désolé'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 6)]);

});



controller.hears('!gpodami',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['gpodami ... je m\'appelle <@'+message.user+'> ',
	'ohhhhhhhh   tu veux un calin <@'+message.user+'> ?',
	'ta ta tata ... ta ta ta ta ta taaa ',
	'tant pis pour toi <@'+message.user+'> ...'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 4)]);

});



controller.hears('!chicha',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['SAY MY NAME !!!',
	'Smoke WEED every day !!!',
	'BiAtch !!!!!'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 3)]);

});


controller.hears('!kc',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	var mioute = ['En mouvement c\'est completement pareil, tu mets un pied devant l\'autre et si tu fais confiance a la gravité ... ca risque de bien se passer !!!',
	'Excuse moi <@'+message.user+'> je t\'observe depuis un petit moment et je trouve que tu fait completement ton crâneur ! Tu te prends pour un mannequin ??? Laisse moi te dire que tu ressembles a rien ...',
	'<@'+message.user+'> répond rien, j\'ai gagné, j\'l\'ai Kc... Tu peux y arriver',
	'Tu sais <@'+message.user+'> ...? Tu es comme le H de hawai... Tu sers a rien !'
	];
	
	bot.reply(message,mioute[Math.floor(Math.random() * 4)]);

});


controller.hears('!CrAckance',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'mmmhhhhh .... c bon les crackance !!!');
});

controller.hears('!biere',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'encore une biere ? ROGER !!!!');
});






controller.hears('Whatsapp',['direct_message','direct_mention','mention','ambient'],function(bot, message) {
  bot.reply(message, 'Whatsapp c\'est par la =================> :door:');
});








//Using attachments
controller.hears('another_keyword','direct_message,direct_mention',function(bot,message) {
  var reply_with_attachments = {
    'username': 'My bot' ,
    'text': 'This is a pre-text',
    'attachments': [
      {
        'fallback': 'To be useful, I need you to invite me in a channel.',
        'title': 'How can I help you?',
        'text': 'To be useful, I need you to invite me in a channel ',
        'color': '#7CD197'
      }
    ],
    'icon_url': 'http://lorempixel.com/48/48'
    }

  bot.reply(message, reply_with_attachments);
});

