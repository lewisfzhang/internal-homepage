//This script turns everything that each staff doesn't need grey, but leaves what they do need in color

//image URLs 
var slackURL = "https://logo.clearbit.com/slack.com";
var trelloURL = "https://logo.clearbit.com/trello.com";
var ezofficeURL = "https://logo.clearbit.com/ezofficeinventory.com";
var synergyURL = "https://logo.clearbit.com/synergyservicescorp.com"; 
var outlookURL = "https://logo.clearbit.com/outlook.com";
var pingboardURL = "https://logo.clearbit.com/pingboard.com";
var bitbucketURL = "https://logo.clearbit.com/bitbucket.com";
var zenfolioLoginURL = "https://logo.clearbit.com/zenfolio.com";
var zenfolioPublicURL = "https://logo.clearbit.com/zenfolio.com";
var wordpressURL = "https://logo.clearbit.com/wordpress.com";
var carillonURL = "https://logo.clearbit.com/thecarillon.org";
var designURL = "https://logo.clearbit.com/frontify.com";
var pinterestURL = "https://logo.clearbit.com/pinterest.com";
var twitterURL = "https://logo.clearbit.com/twitter.com";
var fbURL = "https://logo.clearbit.com/facebook.com";
var igURL = "https://logo.clearbit.com/instagram.com";

function staff(staffName){
	if(staffName == "photo"){
		//alert("Photo");
		/*turn everything grayscale excpet:
		Zenfolio login
		Zenfolio public
		WP
		Carillon
		Pinterest
		Twitter
		FB
		IG
		*/
		document.getElementById("slack").src = slackURL + "?greyscale=true";
		document.getElementById("trello").src = trelloURL + "?greyscale=true"; 
		document.getElementById("ezoffice").src = ezofficeURL + "?greyscale=true"; 
		document.getElementById("synergy").src = synergyURL + "?greyscale=true"; 
		document.getElementById("outlook").src = outlookURL + "?greyscale=true"; 
		document.getElementById("pingboard").src = pingboardURL + "?greyscale=true"; 
		document.getElementById("bitbucket").src = bitbucketURL + "?greyscale=true"; 
		document.getElementById("zenfoliologin").src = zenfolioLoginURL;
		document.getElementById("zenfoliopublic").src = zenfolioPublicURL; 
		document.getElementById("wordpress").src = wordpressURL;
		document.getElementById("carillon").src = carillonURL; 
		document.getElementById("design").src = designURL + "?greyscale=true"; 
		document.getElementById("pinterest").src = pinterestURL; 
		document.getElementById("twitter").src = twitterURL; 
		document.getElementById("fb").src = fbURL; 
		document.getElementById("ig").src = igURL; 
	}
	
	else if(staffName == "design"){
		//alert("Design");
		/*turn everything grayscale excpet:
		WP
		Carillon
		Design Style Guide
		Pinterest
		Twitter
		FB
		IG
		*/
		document.getElementById("slack").src = slackURL + "?greyscale=true";
		document.getElementById("trello").src = trelloURL + "?greyscale=true"; 
		document.getElementById("ezoffice").src = ezofficeURL + "?greyscale=true"; 
		document.getElementById("synergy").src = synergyURL + "?greyscale=true"; 
		document.getElementById("outlook").src = outlookURL + "?greyscale=true"; 
		document.getElementById("pingboard").src = pingboardURL + "?greyscale=true"; 
		document.getElementById("bitbucket").src = bitbucketURL + "?greyscale=true"; 
		document.getElementById("zenfoliologin").src = zenfolioLoginURL + "?greyscale=true";
		document.getElementById("zenfoliopublic").src = zenfolioPublicURL + "?greyscale=true"; 
		document.getElementById("wordpress").src = wordpressURL;
		document.getElementById("carillon").src = carillonURL; 
		document.getElementById("design").src = designURL; 
		document.getElementById("pinterest").src = pinterestURL; 
		document.getElementById("twitter").src = twitterURL; 
		document.getElementById("fb").src = fbURL; 
		document.getElementById("ig").src = igURL; 
	}
	
	else if(staffName == "journalism"){
		//alert("Journalism");
		/*turn everything grayscale excpet:
		WP
		Carillon
		Twitter
		FB
		*/
		document.getElementById("slack").src = slackURL + "?greyscale=true";
		document.getElementById("trello").src = trelloURL + "?greyscale=true"; 
		document.getElementById("ezoffice").src = ezofficeURL + "?greyscale=true"; 
		document.getElementById("synergy").src = synergyURL + "?greyscale=true"; 
		document.getElementById("outlook").src = outlookURL + "?greyscale=true"; 
		document.getElementById("pingboard").src = pingboardURL + "?greyscale=true"; 
		document.getElementById("bitbucket").src = bitbucketURL + "?greyscale=true"; 
		document.getElementById("zenfoliologin").src = zenfolioLoginURL + "?greyscale=true";
		document.getElementById("zenfoliopublic").src = zenfolioPublicURL + "?greyscale=true"; 
		document.getElementById("wordpress").src = wordpressURL;
		document.getElementById("carillon").src = carillonURL; 
		document.getElementById("design").src = designURL + "?greyscale=true"; 
		document.getElementById("pinterest").src = pinterestURL + "?greyscale=true"; 
		document.getElementById("twitter").src = twitterURL; 
		document.getElementById("fb").src = fbURL; 
		document.getElementById("ig").src = igURL + "?greyscale=true"; 
	}
	else if(staffName == "software"){
		//alert("Software");
		/*turn everything grayscale excpet:
		Synergy Server
		Bitbucket
		WP
		Carillon
		*/
		document.getElementById("slack").src = slackURL + "?greyscale=true";
		document.getElementById("trello").src = trelloURL + "?greyscale=true"; 
		document.getElementById("ezoffice").src = ezofficeURL + "?greyscale=true"; 
		document.getElementById("synergy").src = synergyURL; 
		document.getElementById("outlook").src = outlookURL + "?greyscale=true"; 
		document.getElementById("pingboard").src = pingboardURL + "?greyscale=true"; 
		document.getElementById("bitbucket").src = bitbucketURL; 
		document.getElementById("zenfoliologin").src = zenfolioLoginURL + "?greyscale=true";
		document.getElementById("zenfoliopublic").src = zenfolioPublicURL + "?greyscale=true"; 
		document.getElementById("wordpress").src = wordpressURL;
		document.getElementById("carillon").src = carillonURL; 
		document.getElementById("design").src = designURL + "?greyscale=true"; 
		document.getElementById("pinterest").src = pinterestURL + "?greyscale=true"; 
		document.getElementById("twitter").src = twitterURL + "?greyscale=true"; 
		document.getElementById("fb").src = fbURL + "?greyscale=true"; 
		document.getElementById("ig").src = igURL + "?greyscale=true"; 
	}
	
	else{
		//turn everything back to color
		document.getElementById("slack").src = slackURL;
		document.getElementById("trello").src = trelloURL; 
		document.getElementById("ezoffice").src = ezofficeURL; 
		document.getElementById("synergy").src = synergyURL; 
		document.getElementById("outlook").src = outlookURL; 
		document.getElementById("pingboard").src = pingboardURL; 
		document.getElementById("bitbucket").src = bitbucketURL; 
		document.getElementById("zenfoliologin").src = zenfolioLoginURL;
		document.getElementById("zenfoliopublic").src = zenfolioPublicURL; 
		document.getElementById("wordpress").src = wordpressURL;
		document.getElementById("carillon").src = carillonURL; 
		document.getElementById("design").src = designURL; 
		document.getElementById("pinterest").src = pinterestURL; 
		document.getElementById("twitter").src = twitterURL; 
		document.getElementById("fb").src = fbURL; 
		document.getElementById("ig").src = igURL; 
	}
}