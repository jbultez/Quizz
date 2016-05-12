angular.module('app.services', [])

.factory('quiz', [function(){
    
 
	var questions = [
		{
			question: 'Depuis quand connaît-on l’impact de l’homme sur le réchauffement climatique ?',
			reponses: [
				'2005',
				'1930',
                '1950',
				'1990'
			],
            resp:'Le GIEC affirme que le réchauffement climatique depuis 1950 est très probablement dû à l’augmentation des gaz à effet de serre d origine anthropique.',
			vrai: 2

		},
		{
			question: 'Le déréglement climatique est-il réel ?',
			reponses: [
				'Oui',
				'Non',
				'Partiellement',
				'Pourquoi pas'
			],
            resp: 'Le réchauffement climatique est un phénomène naturel. La terre a des phases de réchauffement et de glaciation, nous sommes dans une phase de réchauffement climatique. La pollution par gaz à effet de serre (GES) accélère dangereusement la monté des températures moyennes enregistrées sur le globe. Ses conséquences sont l’augmentation du niveau des océans, la fonte des glaciers, l’impact sur la biodiversité, l’augmentation des catastrophes naturelles.',
			vrai: 0
		},
		{
			question: 'Le réchauffement des océans provoque t-il des phénomènes climatiques ? (Tornade, typhon, ouragan) ',
			reponses: [
				'Non',
				'Oui',
				'Je ne sais pas',
                'Non car il existe depuis longtemps'
			],
            resp:'Effectivement, le réchauffement des océans augmente la force et le pouvoir de création de catastrophe naturelle',
			vrai: 1
 
		},
		{
			question: 'Quel pourcentage de la population serait prêt à changer leur mode de vie pour lutter contre le réchauffement de la planète ? ',
			reponses: [
				'45%',
				'65%',
				'85%',
                '95%'
			],
            resp: 'Tout le monde en parle, personne ne sait comment agir ! Une forte volonté politique avec un plan d’action cohérent pour les gens et les industries permettrait de faire évoluer les choses de façon plus drastique.  ',
			vrai: 2
            
		},
		{
			question: 'Une hausse des températures de 0.85°C de plus en 130 ans, est-ce si préoccupant ? ',
			reponses: [
				'Oui, mais ça va se réguler avec le temps',
				'Non, on a l’habitude d écart de température entre l’été et l’hiver',
				'Oui, car le phénomène risque de s amplifier',
				'Non, ce n’est même pas un degrès de différence'
			],
            resp: 'Quand la température s’élève, l’eau s’évapore d’avantage, entrainant une augmentation de la quantité de vapeur d eau dans l’atmosphère. L’effet de serre est plus important, et ne fera que renforcer le réchauffement initiale. De plus, la fonte des glaces et des glaciers va s’accélérer. Une petite élévation de température peut donc conduire à un déséquilibre climatique mondiale.',
			vrai: 2
		},
        {
			question: 'La température moyenne au col de Porte (parc régional de la Chartreuse) est montée de 2°C depuis 1960. Quelle est la conséquence pour les stations de ski ?',
			reponses: [
				'Fermeture des stations et/ou compensation par neige artificielle',
				'Juste une mauvaise période',
				'2°C en 55 ans c est négligeable',
                'Je ne sais pas'
			],
            resp:'Certaines stations de basse altitude ont fermé par manque de neige, d’autres utilisent des canons à neige pour compenser le manque, mais elles perdent des clients car ils vont dans les stations d’haute altitude. Par exemple : la station d’avoriaz en Haute Savoie récupère les skieurs de station fermée dans la région à cause du manque de neige. Elle doit établir des quotas afin de limiter l’affluence (source; 20 minutes).',
			vrai: 0
		},
        {
			question: 'Quelle a été l’année la plus chaude en France depuis 1960 ?',
			reponses: [
				'1992',
				'1998',
				'2003',
                '2015'
			],
            resp:'1,1°C au dessus de la moyenne de 1981 à 2010',
			vrai: 3
		},
        {
			question: 'Quelle a été l’année la plus chaude depuis 1960 au niveau mondial ?',
			reponses: [
				'1992',
				'1998',
				'2003',
                '2015'
			],
            resp:'0,76°C de plus que la température moyenne mondiale de 1961 à 1990',
			vrai: 3
		},
        {
			question: 'Ce siècle enregistre des records de températures moyennes mondiale. D’après vous, sur la période 2000-2015, combien d’années constituent le top 15 des années les plus chaudes jamais enregistrées?',
			reponses: [
				'2',
				'5',
				'7',
                '14'
			],
            resp:'En effet, 14 des années les plus chaudes jamais enregistrées ont été mesuré ces 15 dernières années !',
			vrai: 3
		},
        {
			question: 'Quelle est la diminution de la surface de la banquise Arctique par décennie ? ',
			reponses: [
				'4%',
				'8%',
				'10%',
                '15%'
			],
            resp:'C’est au Pôle-Nord que le réchauffement est le plus marqué en amplitude et en vitesse ',
			vrai: 2
		},
                {
			question: 'Depuis 1970, l’épaisseur de la banquise a diminuée de… ? ',
			reponses: [
				'3%',
				'5%',
				'10%',
                '40%'
			],
            resp:'D’ici 50 à 70ans elle pourrait totalement fondre en hiver. Le soleil est capté par la mer libre, ce qui réchauffe l’eau et accélère la fonte des glaciers. Des ours polaires se noient car ils ne trouvent plus de glace.',
			vrai: 3
		},
                {
			question: 'La teneur en CO2 dans l’atmosphère était inférieure à 300ppm pendant 650.000 ans (couvrant 7 périodes glacières), de combien est elle de nos jours… ? ',
			reponses: [
				'Identique',
				'Un peu plus',
				'Deux fois plus',
                'Je ne sais pas'
			],
			vrai: 2
		},
                {
			question: 'Que prédisent les modèles pour les 50 prochaines années ?',
			reponses: [
				'Un peu plus encore',
				'Quatre fois plus',
				'Que le taux soit quatre à cinq fois supérieur',
                'Je ne sais pas'
			],
			vrai: 2
		},
                {
			question: 'Combien d’hectars de fôret sont détruits par an ? ',
			reponses: [
				'5 millions',
				'12 millions',
				'18 millions',
                '25 millions'
			],
            resp:'Soit 2 fois la surface du Portugal.',
			vrai: 2
		},
                {
			question: 'En Afrique, le lac Tchad est une ressource essentielle pour les pays du Niger, du Cameroun, du Nigeria et du Tchad. En 1960 sa superficie était d environ 25 000 Km², de combien est-elle aujourd’hui ? ',
			reponses: [
				'2500 Km²',
				'5000 Km²',
				'10 000 Km²',
                '30 000 Km²'
			],
            resp:'Sa superficie a été divisé par 10 ! C’est un constat effrayant !',
			vrai: 0
		},
                {
			question: 'De combien de % la concentration en gaz à effet de serre a évolué depuis 1950 ?  ',
			reponses: [
				'10%',
				'15%',
				'22.5%',
                '28.5%'
			],
            resp:'Les faits sont mesurés et prouvés, l’impact humain sur le réchauffement climatique est réel !',
			vrai: 2
		},
                        {
			question: 'Quelles sont les conséquences de la fonte du permafrost en zone Arctique ?',
			reponses: [
				'Aucun impact',
				'Elevation du niveau des océans, dégagement de gaz à effet de serre',
				'Elevation du niveau des océans, augmentation de la quantité d eau potable sur Terre',
                'Un ciel bleu, des nuages'
			],
            resp:'La fonte des glaces entrainent une augmentation du niveau des océans, la fonte du permafrost entraine une émission massive de Gaz à Effet de Serre. Effectivement ces GES sont emprisonné dans la glace du permafrost depuis des milliers d années',
			vrai: 1
		},
                        {
			question: 'Suite à la COP21 qui s’est déroulée à Paris en décembre 2015, les chefs d’états présents se sont engagés à limiter la hausse de la température à 2°C d ici 2100. Pourquoi ?',
			reponses: [
				'Vendre des journaux',
				'Sauver les animaux',
				'Contenir et diminuer l’impact humain sur le réchauffement climatique',
                'Je ne sais pas'
			],
            resp: 'Il s’agit de réduire les émissions de gaz à effet de serre dans le monde, 195 états plus l’Europe étaient présent et ont signé un accord pour contenir l’élévation de la température à moins de 2°C. La COP 21 s’appuie sur le constat alarmant du Groupe d’Expert Intergouvernemental sur l’évolution du Climat (GIEC).',
			vrai: 2
		},
                        {
			question: 'Quel est la ministre de l’environnement au sein du gouvernement de 2015 ? ',
			reponses: [
				'Ségolène Royale',
				'Manuel Valls',
				'Christiane Tobira',
                'Laurent Fabius'
			],
			vrai: 0
		},
                        {
			question: 'La loi sur la transition énergétique en France implique :',
			reponses: [
				'Multiplier par 100 le nombre d’éolienne',
				'Une réduction du nucléaire',
				'Une augmentation de l utilsation du charbon',
                'Demain utiliser sa voiture pour aller faire ses courses'
			],
			vrai: 1
		},
                        {
			question: 'Quel est le danger du nucléaire ? ',
			reponses: [
				'Réchauffement de l’eau des mers',
				'Les poissons brillent la nuit',
				'Explosion nucléaire, vieillissement des centrales',
                'Pas de problème, les moyens pour entretenir les centrales sont suffisant'
			],
            resp:'Dans les pays équipés du nucléaire, tous hormis la France ont connu des explosion nucléaire. Les facteurs de ces explosions ont été la baisse des moyens financiers et humains, le vieillissement des centrales, les malfaçons non connue des ingénieurs. Pour rappel, en France en ce moment nous augmentons la durée de vie des centrales tout en diminuant les moyens liée à la maintenance et à l’humain. La centrale de Fesseheim devrait fermer car l’Allemagne met la pression pour la fermer, à votre avis pourquoi ? (Jalousie ou réalisme ?)',
			vrai: 2
		},
                                {
			question: 'Faut-il prendre le virage de la transition énergétique ? ',
			reponses: [
				'Oui, les energies nouvelles sont l avenir',
				'Non',
				'Le nucléaire c’est bien',
                'Je ne sais pas'
			],
            resp:'Pour faire fonctionner une centrale nucléaire il faut de l’uranium ! Pour rappel, nous avons jamais trouvé d’uranium en France. Par contre en France avant la vente d’Alstom aux géant américain General Electric nous fabriquions les turbines d’éoliennes et d’hydrolienne ...',
			vrai: 0
		},
                                {
			question: 'Quel est la part d’énergie renouvelable dans la consommation finale d’énergie en France ? ',
			reponses: [
				'29.2%',
				'25,7%',
				'19,4%',
                '14,6%'
			],
            resp: 'La part des énergies renouvelables dans la consommation finale brute d’énergie est de 14,6% en 2014 (soit 22 Mtep contre 16 en 2005). Ce pourcentage est de 14,5% en moyenne pour l’Union européenne en 2012',
			vrai: 3
		},
                                {
			question: 'Quel est la part de l’énergie dans la répartition des sources d émission de GES en France ? ',
			reponses: [
				'50%',
				'60%',
				'70%',
                '80%'
			],
            resp:'Voir le schéma répartition des sources d’émission de GES en France en 2011',
			vrai: 2
		},
                                {
			question: 'Combien de litres contient un baril de pétrole ? ',
			reponses: [
				'100 L',
				'139 L',
				'159 L',
                '179 L'
			],
			vrai: 2
		},
                                {
			question: 'Quel mot équivaut "situation où un pays dispose d’assez d’énergie pour sa population" ? ',
			reponses: [
				'Gros producteur d’énergie',
				'Autosuffisance',
				'Dépendance énergétique',
                'Inégalité énergétique'
			],
			vrai: 1
		},
                                {
			question: 'Quels sont les effets négatifs de l’exploitation du gaz de schiste pour les Etats-Unis ? ',
			reponses: [
				'Impact néfaste sur le paysage, l’environnement et la santé',
				'Impact néfaste sur la fertilité agricole',
				'Impact néfaste sur la fertilité des femmes',
                'Impact néfaste sur les cours d eau près des exploitations'
			],
			vrai: 0
		},
                                {
			question: 'L’uranium est une énergie :',
			reponses: [
				'Renouvelable',
				'Fossile',
				'Chimique',
                'Non renouvelable'
			],
			vrai: 3
		},
                                {
			question: 'Quel terme signifie "en mer" quand on parle d’éolienne ?',
			reponses: [
				'Off-shore',
				'Off-shire',
				'Off-share',
                'Off-shure'
			],
			vrai: 0
		},
                                {
			question: 'La planète dispose d’une ressource définie de pétrole. En 2015, les scientifiques ont estimé que nous en avons consommé… ',
			reponses: [
				'10%',
				'70%',
				'80%',
                '90%'
			],
            resp:'En effet le pétrole s’épuise. Nous découvrons de nouveaux moyens coûteux permettant de fabriquer du pétrole cependant ces ressources restent limitées.',
			vrai: 2
		},
                                      {
			question: 'Suite à la croissance démographique importante que nous connaissons, pensez-vous que la viande sera disponible pour tous dans 50 ans ?',
			reponses: [
				'Oui, bien sûr',
				'Des steacks Hachés pour tout le monde',
				'Personne ne peut prédire l’avenir',
                'Non, ce n’est déjà pas le cas'
			],
            resp:'Un effort mondial est possible, nous pouvons répartir les ressources de façon équitable cependant même dans les meilleurs des cas des études révélent que nous allons devoir nous diriger vers la consommation d’insectes !',
			vrai: 3
		},
                                      {
			question: ' Parmi les ressources suivantes, laquelle n’est pas renouvelable?',
			reponses: [
				'Soleil',
				'Gaz',
				'Biomasse',
                'Hydrolique'
			],
            resp:'Les réserves mondiales de gaz sont estimées à 2 749 Milliards de m3. Avec la consommation actuelle, les réserves couvrent environ 70 années de production',
			vrai: 1
		},
                                      {
			question: 'Sur les 1608 espèces évaluées en France Métropolitaine, quel est le pourcentage d’espèces menacées ?',
			reponses: [
				'Moins de 2%',
				'5%',
				'10%',
                '20%'
			],
            resp:'20 % des espèces sont considérées comme menacées. La répartition est la suivante: 20 % des espèces de vertébrés évaluées, 17 % des orchidées, 28 % des crustacés d’eau douce et 6 % des papillons de jour. Les territoires d’outre-mer présentent aussi un important nombre d’espèces menacées. ',
			vrai: 3
		},
                                      {
			question: 'Le développement de l’industrie automobile électrique induit quelles conséquences ? ',
			reponses: [
				'L’extraction intensive du lithium cause un impact sur la biodiversité',
				'Le developpement des industries en France',
				'Ce n est pas chez nous ça ne nous regarde pas',
                'Je ne sais pas'
			],
            resp:'Les gisements de lithium sont assez rares et se trouvent très loin des principaux constructeurs de batteries. La Bolivie, possède 40 % du lithium de la planète. Le plus grand gisement au monde est le Salar de Uyuni, dans le département de Potosí, au sud-ouest de la Bolivie. On a aussi découvert d’immenses réserves de lithium en Afghanistan (mais également du fer, du cuivre, de l’or, du niobium et du cobalt).',
			vrai: 0
		},
                                      {
			question: 'L’empreinte écologique calcule la surface terrestre utilisée par chacun pour satisfaire ses besoins. Si tous les terriens vivaient comme les Français, combien de planètes seraient nécessaires ?',
			reponses: [
				'6',
				'5',
				'4',
                '3'
			],
            resp:'En revanche, si tous les hommes adoptaient le mode de vie du Quatar, 6 planètes seraient nécessaires pour satisfaire les besoins des hommes (en terme de ressources). Ce chiffre est de 4 planètes pour les USA, 3,5 planètes pour l’Australie, 1,5 planète pour la Chine et 0,5 planète pour le Bengladesh ou les Philippines. Ces 2 derniers pays ont donc un mode de vie "écologique" qui pèse très peu sur les ressources terrestres.',
			vrai: 3
		},
                                      {
			question: 'Lequel de ces deux cas offrent un meilleur profil par rapport à la biodiversité : Les paysages homogènes (champs de maïs) ou les paysages hétérogènes (cultures différentes) ',
			reponses: [
				'Champs de maïs homogène',
				'Zone boisée étérogène',
				'Je ne sais pas',
                'Le ciel est bleu comme le fromage'
			],
            resp:'Dans les deux cas se sont des zones rurales, elles sont bénéfiques pour l’environnement et la biodiversité cependant le meilleur profil en terme de biodiversité est la zone hétérogène. Elle favorise de développement de la faune ainsi que la flore. ',
			vrai: 1
		},
                                      {
			question: 'Faut-il protéger la biodiversité ?',
			reponses: [
				'Non, le maintien de l’homme suffit',
				'Oui, car c’est l assurance du maintient de la vie sur notre planète ',
				'Quelques espèces en moins ce n’est pas très grave',
                'De toute façon la biodiversité n’est pas menacé'
			],
			vrai: 1
		},
                                      {
			question: 'Quand la terre s’est elle formée ? ',
			reponses: [
				'2.4 milliards d années',
				'4.6 milliards d années',
				'8.2 milliards d années',
                '11 milliards d années'
			],
			vrai: 1
		},
                                      {
			question: 'Qu’est-ce qui a entraîné, le long des côtes de l’Alaska, la disparition des algues géantes (qui constituent un abri et une source de nourriture pour de nombreuses espèces marines) ? ',
			reponses: [
				'La baisse de l’activité touristique',
				'Une pollution plus importante de la mer',
				'Les plats composés d algues se sont développés',
                'La pullulation des oursins, la surpêche, la disparition des loutres de mer'
			],
            resp:'La disparition des algues géantes s’explique par un ensemble de facteurs qui découlent les uns des autres. La surpêche a entraîné la raréfaction des poissons ; les orques ont donc modifié leur alimentation en s’attaquant plus fréquemment aux loutres de mer qui ont vu leur population s’effondrer; par conséquent, les oursins consommés par les loutres ont pullulé et entraîné la disparition des algues géantes dont ils se nourrissent. Une véritable réaction en chaîne qui démarre par une activité humaine non responsable !',
			vrai: 1
		},
                                      {
			question: 'En 2010 la population mondiale était de 7 milliards d habitants, les projections l’estiment à environ combien en 2050?',
			reponses: [
				'6 milliards',
				'7 milliards',
				'8 milliards',
                '10 milliards'
			],
            resp:'Il existe plusieurs modèles estimant la population mondiale pour les années futures, la plupart s’accordent à dire qu’en 2050 la population sera d’environ 10 milliards d’habitants.',
			vrai: 3
		},
                                              {
			question: 'Quels sont les cinq plus gros émetteurs de CO2 dans le monde ? ',
			reponses: [
				'Chine, USA, Europe, Inde, Russie',
				'Inde, USA, Japon, Allemagne, Russie',
				'USA, Chine, Brésil, Russie, Europe',
                'USA, Chine, Moyen-Orient, Russie, Europe'
			],
            resp: 'Par habitant, l’Inde émet dix fois moins que les USA, et la chine deux fois moins.',
			vrai: 0
		},
                                              {
			question: 'Pensez-vous que le facteur climatique peut engendrer des mouvements massifs de population ? ',
			reponses: [
				'Non, l’humain peut s’adapter au changement climatique',
				'Oui, mais il faut sauver les pandas. C’est mignon un panda',
				'Oui, le terme "refugié climatique" devrait prochainement apparaître',
                'Je ne sais pas'
			],
            resp:'Des études révèlent que des mouvements massifs de population à cause du climat pourraient apparaître dans les prochaines décennies. Les pays les plus touchés, sont les pays pauvres !',
			vrai: 2
		},
                                              {
			question: 'Qu’appelle t-on le 7eme continent?',
			reponses: [
				'Une accumulation de déchet dans l’ocean',
				'La possibilité d aller vivre sur Mars un jour',
				'Un volcan marin de faible activité',
                'Une nouvelle Terre totalement protégée de l’Homme'
			],
            resp:'En réalité, il ne s’agit pas réellement d’un continent mais d’une accumulation de déchets au sein des océans, dans des eaux peu concernées par la navigation marchande et touristique. Certains scientifiques estiment que si nous ne faisons rien, ce "continent" pourrait être aussi grand que l’Europre dans 20ans (il serait déjà 6 fois plus grand que la France).',
			vrai: 0
		},
                                              {
			question: 'Quelles quantités approximatives d’ordures ménagères un français génére t-il par an ?',
			reponses: [
				'50 kg',
				'150 kg',
				'250 kg',
                '350 kg'
			],
            resp:'Environ 350kg par habitant. Si cette moyenne par habitant prendrait également en compte les déchets générés par les municipalité alors ce chiffre grimperait à environ 540kg par habitant. Enfin, si on prend en compte les secteurs du BTP, industrie, agriculture, activités de soin alors la quantité de déchet généré est d’environ 14 tonnes par an et par habitant!',
			vrai: 3
		},
                                              {
			question: 'En France, quelle quantité de déchet suit la filière du recyclage ?',
			reponses: [
				'5%',
				'20%',
				'60%',
                '80%'
			],
            resp:' Le recyclage ne concerne que 20% des déchets. La répartition pour le reste est la suivante: Incinération 30%; Décharges 36 %; Gestion biologique (compostage/méthanisation des déchets organiques) : 14 %',
			vrai: 1
		},
                                              {
			question: 'Depuis 1950, la croissance démographique a évolué, de combien a t elle été multiplié ?',
			reponses: [
				'1.5',
				'2',
				'3',
                '4'
			],
            resp:'La population mondiale est passée de 3 milliards de personnes à 6 milliards en 50 ans ! ',
			vrai: 1
		},
                                              {
			question: 'Quelle ville américaine, située en plein désert, est connue pour ses gaspillages d’eau liés au tourisme ?',
			reponses: [
				'Las Vegas',
				'San Francisco',
				'Phoenix',
                'Chicago'
			],
            resp:'Dans cette ville américaine, le tourisme épuise les ressources hydriques provenant nappes d’eau souterraines et du Colorado (qui ne se renouvellent pas assez vite par rapport à la consommation urbaine)',
			vrai: 0
		},
                                              {
			question: 'Dans le domaine social, le développement durable consiste à :',
			reponses: [
				'Créer des emplois dans les pays d’occident',
				'Développer les activités des multi-nationales',
				'Supprimer la législation du travail',
                'Apporter à tous des progrès sanitaires, culturels et materiels'
			],
			vrai: 3
		},
                                              {
			question: 'Quelles sont les conséquences de l’industrialisation des pays émergents ?',
			reponses: [
				'Emission de GES, concurrence, délocalisation',
				'Produire des biens avec une faible empreinte écologique',
				'Amélioration des conditions de travail en France',
                'Je ne sais pas'
			],
            resp:'Ces pays sont conscients de leurs pollutions et mettent des moyens en place pour limiter leurs émissions de GES. (Parc éolien, photovoltaïque)',
			vrai: 0
		},
	];

	return {
		getQuestion: function (index) {
			return questions[index];
		},
		getMax: function () {
			return questions.length;
		}
	};
	
}])

.service('resultats', [function(){

	var vrai = 0;
	var faux = 0;

	return {
		getVrai: function () {
			return vrai;
		},
		incrementeVrai: function () {
			++vrai;
		},
		resetVrai: function () {
			vrai = 0;
		},
		getFaux: function () {
			return faux;
		},
		incrementeFaux: function () {
			++faux;
		},
		resetFaux: function () {
			faux = 0;
		}
	}
}])

;

