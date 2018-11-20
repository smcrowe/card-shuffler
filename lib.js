// JS for Persona card shuffler

// originally 2013-07-26 @ Moment Design
// Sean Crowe
// updated: 2018-11-20



var deckCount = 9;
var deckName = "deckName";


// =====================
// ==== Data arrays ====
// =====================
// Generational context and goals arrays
	var pStageImg = ['01_card_01.jpg', '01_card_02.jpg', '01_card_03.jpg', '01_card_04.jpg', '01_card_05.jpg'];

// Portfolio strategy arrays
	var pPortfolioImg = ['03_card_01.jpg', '03_card_02.jpg', '03_card_03.jpg', '03_card_04.jpg'];

// Wealth accumulation arrays
	var pCareerImg = ['07_card_01.jpg', '07_card_02.jpg', '07_card_03.jpg', '07_card_04.jpg'] ;

// Login frequency arrays
	var pDTImg = ['04_card_01.jpg', '04_card_02.jpg', '04_card_03.jpg', '04_card_04.jpg', '04_card_05.jpg', '04_card_06.jpg'];

// Advisor relationship arrays
	var pEmotionImg = ['06_card_01.jpg', '06_card_02.jpg', '06_card_03.jpg', '06_card_04.jpg', '06_card_05.jpg'];		

// Investing Mentality arrays
	var pMImg = ['02_card_01.jpg', '02_card_02.jpg', '02_card_03.jpg', '02_card_04.jpg', '02_card_05.jpg', '02_card_06.jpg'];

// Access at work array
    var pAccessImg = ['08_card_01.jpg','08_card_02.jpg','08_card_03.jpg','08_card_04.jpg']
    
// Platform adoption array
    var pPlatformAdoptionImg = ['05_card_01.jpg', '05_card_02.jpg', '05_card_03.jpg', '05_card_04.jpg', '05_card_05.jpg']

// Scenario arrays
	var pSImg = ['09_card_01.jpg', '09_card_02.jpg', '09_card_03.jpg', '09_card_04.jpg', '09_card_05.jpg', '09_card_06.jpg', '09_card_07.jpg', '09_card_08.jpg', '09_card_09.jpg', '09_card_10.jpg', '09_card_11.jpg', '09_card_12.jpg', '09_card_13.jpg', '09_card_14.jpg', '09_card_15.jpg', '09_card_16.jpg', '09_card_17.jpg', '09_card_18.jpg', '09_card_19.jpg', '09_card_20.jpg', '09_card_21.jpg', '09_card_22.jpg', '09_card_23.jpg', '09_card_24.jpg', '09_card_25.jpg'];

// ===============
// == set number of active decks
// ================

function updateDeckCount () {
    document.getElementById("shuffleZone").className = "cards" + deckCount;
}

// ========================
// == Show/hide individual decks
// ==========================

function toggleDeck(deckName){
    var deckID = deckName.slice(0,-6);   
    var deckState = document.getElementById(deckName).checked;

    if (deckState == false){
        document.getElementById(deckID).className = "card off";
		deckCount = deckCount - 1;
    }else {
        document.getElementById(deckID).className = "card on";
        deckCount = deckCount + 1;
    }
        
    updateDeckCount();
}


// ===========================
// ==== Shuffle Functions ====
// ===========================
	
// Generation context shuffle
function randomLifeStage() {	
	var pStageRand = Math.floor(Math.random() * pStageImg.length);	
	document.getElementById("LifeStageImg").src= "JPEG/" + pStageImg[pStageRand];
};

// Portfolio Strategy shuffle
function randomPortfolio() {	
	var pPortfolioRand = Math.floor(Math.random() * pPortfolioImg.length);	
	document.getElementById("PortfolioImg").src= "JPEG/" + pPortfolioImg[pPortfolioRand];
};

// Wealth accumulation shuffle
function randomCareer() {	
	var pCareerRand = Math.floor(Math.random() * pCareerImg.length);	
	document.getElementById("CareerImg").src= "JPEG/" + pCareerImg[pCareerRand];
};

// Login frequency shuffle
function randomDigitalTool() {	
	var pDTRand = Math.floor(Math.random() * pDTImg.length);	
	document.getElementById("DTImg").src= "JPEG/" + pDTImg[pDTRand];
};

// Advisor relationship shuffl
function randomEmotion() {	
	var pEmotionRand = Math.floor(Math.random() * pEmotionImg.length);	
	document.getElementById("EmotionImg").src= "JPEG/" + pEmotionImg[pEmotionRand];
};

// Investor mentality shuffle
function randomMentality() {		
	var pMRand = Math.floor(Math.random() * pMImg.length);	
	document.getElementById("MImg").src= "JPEG/" + pMImg[pMRand];
};

// Access at Work shuffle
function randomAccessAtWork() {		
	var pAccessRand = Math.floor(Math.random() * pAccessImg.length);	
	document.getElementById("AccessAtWorkImg").src= "JPEG/" + pAccessImg[pAccessRand];
};

// Platform adoption shuffle
function randomPlatformAdoption() {		
	var pPlatfromRand = Math.floor(Math.random() * pPlatformAdoptionImg.length);	
	document.getElementById("PlatformAdoptionImg").src= "JPEG/" + pPlatformAdoptionImg[pPlatfromRand];
};

// Scenario shuffle
function randomScenario() {
	var pSRand = Math.floor(Math.random() * pSImg.length);
	document.getElementById("ScenarioImg").src= "JPEG/" + pSImg[pSRand];
	
};


// =========================
// ==== Reset Functions ====
// =========================

function resetLifeStage() {
	document.getElementById("LifeStageImg").src= "JPEG/01_titleCard.jpg";
};

function resetPortfolio() {
	document.getElementById("PortfolioImg").src= "JPEG/03_titleCard.jpg";
};

function resetCareer() {	
	document.getElementById("CareerImg").src= "JPEG/07_titleCard.jpg";
};

function resetDigitalTool() {	
	document.getElementById("DTImg").src= "JPEG/04_titleCard.jpg";
};

function resetEmotion() {	
	document.getElementById("EmotionImg").src= "JPEG/06_titleCard.jpg";
};

function resetMentality() {		
	document.getElementById("MImg").src= "JPEG/02_titleCard.jpg";
};

function resetAccessAtWork() {		
	document.getElementById("AccessAtWorkImg").src= "JPEG/08_titleCard.jpg";
};

function resetPlatformAdoption() {		
	document.getElementById("PlatformAdoptionImg").src= "JPEG/05_titleCard.jpg";
};

function resetScenario() {
	document.getElementById("ScenarioImg").src= "JPEG/09_titleCard.jpg";
};

// ============================
// === Groups of functions ===
// ===========================

function randomAll() {    
    randomAccessAtWork();
    randomCareer();
    randomDigitalTool();
    randomEmotion();
    randomLifeStage();
    randomMentality();
    randomPortfolio();
    randomScenario();
    randomPlatformAdoption();
}

function resetAll() {	  
	resetLifeStage();
	resetPortfolio();	
	resetCareer();
	resetDigitalTool();
	resetEmotion();
	resetMentality();
    resetAccessAtWork();
    resetPlatformAdoption();
	resetScenario();
};


// ==========================
// == toggle filters ========
// ========================

function showFilters() {
    document.getElementById("Filters").className = "visible";
};

function hideFilters() {
    document.getElementById("Filters").className = "hidden";  
}


// ========================
// ==== Preload Images ====
// ========================

// JavaScript Document
function preloadImagesFromDirectory(dir){
	if(!dir) return;
	function getJSON(URL,success){
		// Create new function (within global namespace) (With unique name):
		var uniqueID = 'json'+(+(new Date()));
			window[uniqueID] = function(data){
				success && success(data);
			};

		// Append new SCRIPT element to DOM:
		document.getElementsByTagName('body')[0].appendChild((function(){
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = URL.replace('callback=?','callback=' + uniqueID);
			return script;
		})());
	}

	function preload(srcArray){
		for(var i = 0; i < srcArray.length; i++){
			(new Image()).src = srcArray[i];
		}
	}

	// Get that JSON data:
	getJSON('scanImageDirectory.json.php?directory=' + encodeURIComponent(dir) + '&callback=?', function(data){
		return data.images ? preload( data.images ) : false;
	});
}


window.onload = function(){
	preloadImagesFromDirectory('JPEG');
}