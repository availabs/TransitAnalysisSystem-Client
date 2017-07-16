const stopTables = Object.freeze({
	'fourTrain' : {
		'S': [
			['401S',"Woodlawn",40.886037,-73.878751],
			['402S',"Mosholu Pkwy",40.87975,-73.884655],
			['405S',"Bedford Park Blvd - Lehman College",40.873412,-73.890064],
			['406S',"Kingsbridge Rd",40.86776,-73.897174],
			['407S',"Fordham Rd",40.862803,-73.901034],
			['408S',"183 St",40.858407,-73.903879],
			['409S',"Burnside Av",40.853453,-73.907684],
			['410S',"176 St",40.84848,-73.911794],
			['411S',"Mt Eden Av",40.844434,-73.914685],
			['412S',"170 St",40.840075,-73.917791],
			['413S',"167 St",40.835537,-73.9214],
			['414S',"161 St - Yankee Stadium",40.827994,-73.925831],
			['415S',"149 St - Grand Concourse",40.818375,-73.927351],
			['416S',"138 St - Grand Concourse",40.813224,-73.929849],
			['621S',"125 St",40.804138,-73.937594],
			['622S',"116 St",40.798629,-73.941617],
			['623S',"110 St",40.79502,-73.94425],
			['624S',"103 St",40.7906,-73.947478],
			['625S',"96 St",40.785672,-73.95107],
			['626S',"86 St",40.779492,-73.955589],
			['627S',"77 St",40.77362,-73.959874],
			['628S',"68 St - Hunter College",40.768141,-73.96387],
			['629S',"59 St",40.762526,-73.967967],
			['630S',"51 St",40.757107,-73.97192],
			['631S',"Grand Central - 42 St",40.751776,-73.976848],
			['632S',"33 St",40.746081,-73.982076],
			['633S',"28 St",40.74307,-73.984264],
			['634S',"23 St",40.739864,-73.986599],
			['635S',"14 St - Union Sq",40.734673,-73.989951],
			['636S',"Astor Pl",40.730054,-73.99107],
			['637S',"Bleecker St",40.725915,-73.994659],
			['638S',"Spring St",40.722301,-73.997141],
			['639S',"Canal St",40.718803,-74.000193],
			['640S',"Brooklyn Bridge - City Hall",40.713065,-74.004131],
			['232S',"Borough Hall",40.693219,-73.989998],
			['234S',"Nevins St",40.688246,-73.980492],
			['235S',"Atlantic Av - Barclays Ctr",40.684359,-73.977666],
			['236S',"Bergen St",40.680829,-73.975098],
			['237S',"Grand Army Plaza",40.675235,-73.971046],
			['238S',"Eastern Pkwy - Brooklyn Museum",40.671987,-73.964375],
			['239S',"Franklin Av",40.670682,-73.958131],
			['248S',"Nostrand Av",40.669847,-73.950466],
			['249S',"Kingston Av",40.669399,-73.942161],
			['250S',"Crown Hts - Utica Av",40.668897,-73.932942],
			['251S',"Sutter Av - Rutland Rd",40.664717,-73.92261],
			['252S',"Saratoga Av",40.661453,-73.916327],
			['253S',"Rockaway Av",40.662549,-73.908946],
			['254S',"Junius St",40.663515,-73.902447],
			['255S',"Pennsylvania Av",40.664635,-73.894895],
			['256S',"Van Siclen Av",40.665449,-73.889395],
			['257S',"New Lots Av",40.666235,-73.884079]
		],
		N :[
			["257N","New Lots Av",40.666235,-73.884079],
			["256N","Van Siclen Av",40.665449,-73.889395],
			["255N","Pennsylvania Av",40.664635,-73.894895],
			["254N","Junius St",40.663515,-73.902447],
			["253N","Rockaway Av",40.662549,-73.908946],
			["252N","Saratoga Av",40.661453,-73.916327],
			["251N","Sutter Av - Rutland Rd",40.664717,-73.92261],
			["250N","Crown Hts - Utica Av",40.668897,-73.932942],
			["249N","Kingston Av",40.669399,-73.942161],
			["248N","Nostrand Av",40.669847,-73.950466],
			["239N","Franklin Av",40.670682,-73.958131],
			["238N","Eastern Pkwy - Brooklyn Museum",40.671987,-73.964375],
			["237N","Grand Army Plaza",40.675235,-73.971046],
			["236N","Bergen St",40.680829,-73.975098],
			["235N","Atlantic Av - Barclays Ctr",40.684359,-73.977666],
			["234N","Nevins St",40.688246,-73.980492],
			["232N","Borough Hall",40.693219,-73.989998],
			["640N","Brooklyn Bridge - City Hall",40.713065,-74.004131],
			["639N","Canal St",40.718803,-74.000193],
			["638N","Spring St",40.722301,-73.997141],
			["637N","Bleecker St",40.725915,-73.994659],
			["636N","Astor Pl",40.730054,-73.99107],
			["635N","14 St - Union Sq",40.734673,-73.989951],
			["634N","23 St",40.739864,-73.986599],
			["633N","28 St",40.74307,-73.984264],
			["632N","33 St",40.746081,-73.982076],
			["631N","Grand Central - 42 St",40.751776,-73.976848],
			["630N","51 St",40.757107,-73.97192],
			["629N","59 St",40.762526,-73.967967],
			["628N","68 St - Hunter College",40.768141,-73.96387],
			["627N","77 St",40.77362,-73.959874],
			["626N","86 St",40.779492,-73.955589],
			["625N","96 St",40.785672,-73.95107],
			["624N","103 St",40.7906,-73.947478],
			["623N","110 St",40.79502,-73.94425],
			["622N","116 St",40.798629,-73.941617],
			["621N","125 St",40.804138,-73.937594],
			["416N","138 St - Grand Concourse",40.813224,-73.929849],
			["415N","149 St - Grand Concourse",40.818375,-73.927351],
			["414N","161 St - Yankee Stadium",40.827994,-73.925831],
			["413N","167 St",40.835537,-73.9214],
			["412N","170 St",40.840075,-73.917791],
			["411N","Mt Eden Av",40.844434,-73.914685],
			["410N","176 St",40.84848,-73.911794],
			["409N","Burnside Av",40.853453,-73.907684],
			["408N","183 St",40.858407,-73.903879],
			["407N","Fordham Rd",40.862803,-73.901034],
			["406N","Kingsbridge Rd",40.86776,-73.897174],
			["405N","Bedford Park Blvd - Lehman College",40.873412,-73.890064],
			["402N","Mosholu Pkwy",40.87975,-73.884655],
			["401N","Woodlawn",40.886037,-73.878751]]
	},
	'fiveTrain':{
		S:[
			["501S","Eastchester - Dyre Av",40.8883,-73.830834],
			["502S","Baychester Av",40.878663,-73.838591],
			["503S","Gun Hill Rd",40.869526,-73.846384],
			["504S","Pelham Pkwy",40.858985,-73.855359],
			["505S","Morris Park",40.854364,-73.860495],
			["204S","Nereid Av",40.898379,-73.854376],
			["205S","233 St",40.893193,-73.857473],
			["206S","225 St",40.888022,-73.860341],
			["207S","219 St",40.883895,-73.862633],
			["208S","Gun Hill Rd",40.87785,-73.866256],
			["209S","Burke Av",40.871356,-73.867164],
			["210S","Allerton Av",40.865462,-73.867352],
			["211S","Pelham Pkwy",40.857192,-73.867615],
			["212S","Bronx Park East",40.848828,-73.868457],
			["213S","E 180 St",40.841894,-73.873488],
			["214S","West Farms Sq - E Tremont Av",40.840295,-73.880049],
			["215S","174 St",40.837288,-73.887734],
			["216S","Freeman St",40.829993,-73.891865],
			["217S","Simpson St",40.824073,-73.893064],
			["218S","Intervale Av",40.822181,-73.896736],
			["219S","Prospect Av",40.819585,-73.90177],
			["220S","Jackson Av",40.81649,-73.907807],
			["221S","3 Av - 149 St",40.816109,-73.917757],
			["222S","149 St - Grand Concourse",40.81841,-73.926718],
			["416S","138 St - Grand Concourse",40.813224,-73.929849],
			["621S","125 St",40.804138,-73.937594],
			["626S","86 St",40.779492,-73.955589],
			["629S","59 St",40.762526,-73.967967],
			["631S","Grand Central - 42 St",40.751776,-73.976848],
			["635S","14 St - Union Sq",40.734673,-73.989951],
			["640S","Brooklyn Bridge - City Hall",40.713065,-74.004131],
			["418S","Fulton St",40.710368,-74.009509],
			["419S","Wall St",40.707557,-74.011862],
			["420S","Bowling Green",40.704817,-74.014065],
			["423S","Borough Hall",40.692404,-73.990151],
			["234S","Nevins St",40.688246,-73.980492],
			["235S","Atlantic Av - Barclays Ctr",40.684359,-73.977666],
			["236S","Bergen St",40.680829,-73.975098],
			["239S","Franklin Av",40.670682,-73.958131],
			["241S","President St",40.667883,-73.950683],
			["242S","Sterling St",40.662742,-73.95085],
			["243S","Winthrop St",40.656652,-73.9502],
			["244S","Church Av",40.650843,-73.949575],
			["245S","Beverly Rd",40.645098,-73.948959],
			["246S","Newkirk Av",40.639967,-73.948411],
			["247S","Flatbush Av - Brooklyn College",40.632836,-73.947642]
		],
		N:[
			["247S","Flatbush Av - Brooklyn College",40.632836,-73.947642],
			["246N","Newkirk Av",40.639967,-73.948411],
			["245N","Beverly Rd",40.645098,-73.948959],
			["244N","Church Av",40.650843,-73.949575],
			["243N","Winthrop St",40.656652,-73.9502],
			["242N","Sterling St",40.662742,-73.95085],
			["241N","President St",40.667883,-73.950683],
			["239N","Franklin Av",40.670682,-73.958131],
			["236N","Bergen St",40.680829,-73.975098],
			["235N","Atlantic Av - Barclays Ctr",40.684359,-73.977666],
			["234N","Nevins St",40.688246,-73.980492],
			["423N","Borough Hall",40.692404,-73.990151],
			["420N","Bowling Green",40.704817,-74.014065],
			["419N","Wall St",40.707557,-74.011862],
			["418N","Fulton St",40.710368,-74.009509],
			["640N","Brooklyn Bridge - City Hall",40.713065,-74.004131],
			["635N","14 St - Union Sq",40.734673,-73.989951],
			["631N","Grand Central - 42 St",40.751776,-73.976848],
			["629N","59 St",40.762526,-73.967967],
			["626N","86 St",40.779492,-73.955589],
			["621N","125 St",40.804138,-73.937594],
			["416N","138 St - Grand Concourse",40.813224,-73.929849],
			["221N","3 Av - 149 St",40.816109,-73.917757],
			["220N","Jackson Av",40.81649,-73.907807],
			["219N","Prospect Av",40.819585,-73.90177],
			["218N","Intervale Av",40.822181,-73.896736],
			["217N","Simpson St",40.824073,-73.893064],
			["216N","Freeman St",40.829993,-73.891865],
			["215N","174 St",40.837288,-73.887734],
			["214N","West Farms Sq - E Tremont Av",40.840295,-73.880049],
			["213N","E 180 St",40.841894,-73.873488],
			["212N","Bronx Park East",40.848828,-73.868457],
			["211N","Pelham Pkwy",40.857192,-73.867615],
			["210N","Allerton Av",40.865462,-73.867352],
			["209N","Burke Av",40.871356,-73.867164],
			["208N","Gun Hill Rd",40.87785,-73.866256],
			["207N","219 St",40.883895,-73.862633],
			["206N","225 St",40.888022,-73.860341],
			["205N","233 St",40.893193,-73.857473],
			["204N","Nereid Av",40.898379,-73.854376],
			["505N","Morris Park",40.854364,-73.860495],
			["504N","Pelham Pkwy",40.858985,-73.855359],
			["503N","Gun Hill Rd",40.869526,-73.846384],
			["502N","Baychester Av",40.878663,-73.838591],
			["501N","Eastchester - Dyre Av",40.8883,-73.830834]]
	},
	'sixTrain': {
		'S': [
			['601S',"Pelham Bay Park",40.852462,-73.828121,0,601],
			['602S',"Buhre Av",40.84681,-73.832569,0,602],
			['603S',"Middletown Rd",40.843863,-73.836322,0,603],
			['604S',"Westchester Sq - E Tremont Av",40.839892,-73.842952,0,604],
			['606S',"Zerega Av",40.836488,-73.847036,0,606],
			['607S',"Castle Hill Av",40.834255,-73.851222,0,607],
			['608S',"Parkchester",40.833226,-73.860816,0,608],
			['609S',"St Lawrence Av",40.831509,-73.867618,0,609],
			['610S',"Morrison Av- Sound View",40.829521,-73.874516,0,610],
			['611S',"Elder Av",40.828584,-73.879159,0,611],
			['612S',"Whitlock Av",40.826525,-73.886283,0,612],
			['613S',"Hunts Point Av",40.820948,-73.890549,0,613],
			['614S',"Longwood Av",40.816104,-73.896435,0,614],
			['615S',"E 149 St",40.812118,-73.904098,0,615],
			['616S',"E 143 St - St Mary's St",40.808719,-73.907657,0,616],
			['617S',"Cypress Av",40.805368,-73.914042,0,617],
			['618S',"Brook Av",40.807566,-73.91924,0,618],
			['619S',"3 Av - 138 St",40.810476,-73.926138,0,619],
			['621S',"125 St",40.804138,-73.937594,0,621],
			['622S',"116 St",40.798629,-73.941617,0,622],
			['623S',"110 St",40.79502,-73.94425,0,623],
			['624S',"103 St",40.7906,-73.947478,0,624],
			['625S',"96 St",40.785672,-73.95107,0,625],
			['626S',"86 St",40.779492,-73.955589,0,626],
			['627S',"77 St",40.77362,-73.959874,0,627],
			['628S',"68 St - Hunter College",40.768141,-73.96387,0,628],
			['629S',"59 St",40.762526,-73.967967,0,629],
			['630S',"51 St",40.757107,-73.97192,0,630],
			['631S',"Grand Central - 42 St",40.751776,-73.976848,0,631],
			['632S',"33 St",40.746081,-73.982076,0,632],
			['633S',"28 St",40.74307,-73.984264,0,633],
			['634S',"23 St",40.739864,-73.986599,0,634],
			['635S',"14 St - Union Sq",40.734673,-73.989951,0,635],
			['636S',"Astor Pl",40.730054,-73.99107,0,636],
			['637S',"Bleecker St",40.725915,-73.994659,0,637],
			['638S',"Spring St",40.722301,-73.997141,0,638],
			['639S',"Canal St",40.718803,-74.000193,0,639],
			['640S',"Brooklyn Bridge - City Hall",40.713065,-74.004131,0,640]
		],
		'N': [
			["640N","Brooklyn Bridge - City Hall",40.713065,-74.004131,0,640],
			["639N","Canal St",40.718803,-74.000193,0,639],
			["638N","Spring St",40.722301,-73.997141,0,638],
			["637N","Bleecker St",40.725915,-73.994659,0,637],
			["636N","Astor Pl",40.730054,-73.99107,0,636],
			["635N","14 St - Union Sq",40.734673,-73.989951,0,635],
			["634N","23 St",40.739864,-73.986599,0,634],
			["633N","28 St",40.74307,-73.984264,0,633],
			["632N","33 St",40.746081,-73.982076,0,632],
			["631N","Grand Central - 42 St",40.751776,-73.976848,0,631],
			["630N","51 St",40.757107,-73.97192,0,630],
			["629N","59 St",40.762526,-73.967967,0,629],
			["628N","68 St - Hunter College",40.768141,-73.96387,0,628],
			["627N","77 St",40.77362,-73.959874,0,627],
			["626N","86 St",40.779492,-73.955589,0,626],
			["625N","96 St",40.785672,-73.95107,0,625],
			["624N","103 St",40.7906,-73.947478,0,624],
			["623N","110 St",40.79502,-73.94425,0,623],
			["622N","116 St",40.798629,-73.941617,0,622],
			["621N","125 St",40.804138,-73.937594,0,621],
			["619N","3 Av - 138 St",40.810476,-73.926138,0,619],
			["618N","Brook Av",40.807566,-73.91924,0,618],
			["617N","Cypress Av",40.805368,-73.914042,0,617],
			["616N","E 143 St - St Mary's St",40.808719,-73.907657,0,616],
			["615N","E 149 St",40.812118,-73.904098,0,615],
			["614N","Longwood Av",40.816104,-73.896435,0,614],
			["613N","Hunts Point Av",40.820948,-73.890549,0,613],
			["612N","Whitlock Av",40.826525,-73.886283,0,612],
			["611N","Elder Av",40.828584,-73.879159,0,611],
			["610N","Morrison Av- Sound View",40.829521,-73.874516,0,610],
			["609N","St Lawrence Av",40.831509,-73.867618,0,609],
			["608N","Parkchester",40.833226,-73.860816,0,608],
			["607N","Castle Hill Av",40.834255,-73.851222,0,607],
			["606N","Zerega Av",40.836488,-73.847036,0,606],
			["604N","Westchester Sq - E Tremont Av",40.839892,-73.842952,0,604],
			["603N","Middletown Rd",40.843863,-73.836322,0,603],
			["602N","Buhre Av",40.84681,-73.832569,0,602],
			["601N","Pelham Bay Park",40.852462,-73.828121,0,601]
		]
	}
})

export default stopTables 
