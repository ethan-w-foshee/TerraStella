class Resource {
    id = "air";
    name = "Air";
    amount = 0;
    max = 10;

    // Whether this is a material i.e. should appear on the info/metric side
    isMaterial = true;

    // Whether this is a generator i.e. it produces some material over time
    isGenerator = false;

    // Resource HTML Element
    // Stored locally so that we can update it as needed :)
    resourceHTML = null;
    infoHTML = null;

    constructor(id) {
	this.id = id;
	gameData.addResource(this)
    }

    createResourceHTML() {
	this.resourceHTML = document.createElement('div');
	this.resourceHTML.classList.add("resource");
	this.resourceHTML.id = this.id;

	this.resourceHTML.onclick = this.#getResourceThen('onclick');
	
	this.resourceTitle = document.createElement('h3');
	this.resourceHTML.append(this.name);
    }

    getResourceHTML() {
	if (this.resourceHTML === null) {
	    this.createResourceHTML()
	}
	return this.resourceHTML;
    }

    createInfoHTML() {
	this.infoHTML = document.createElement('div');
	this.infoHTML.classList.add("resource-info");
	this.infoHTML.id = this.id;
	
	this.infoTitle = document.createElement('h3');
	this.infoHTML.append(this.name);

	this.infoMetric = document.createElement('p');
	this.infoAmount = document.createElement('span');
	this.infoAmount.innerHTML = this.amount;
	this.infoMax = document.createElement('span');
	this.infoMax.innerHTML = this.max;

	this.infoMetric.append(this.infoAmount);
	this.infoMetric.append(" / ");
	this.infoMetric.append(this.infoMax);

	this.infoHTML.append(this.infoMetric);
    }
    
    getInfoHTML() {
	if (this.infoHTML === null) {
	    this.createInfoHTML()
	}
	return this.infoHTML;
    }

    updateAmount(n) {
	this.amount = n;
	if (this.infoAmount != undefined) {
	    this.infoAmount.innerHTML = this.amount;
	}
    }

    canAdd(n) {
	const new_amount = this.amount + n;
	if (new_amount > this.max) {
	    return false;
	}else if (this.amount + n < 0) {
	    return false;
	}
	return true;
    }
    
    addAmount(n, onlyInRange=false) {
	const new_amount = this.amount + n;
	if (new_amount > this.max) {
	    if (onlyInRange)
		return false;
	    this.updateAmount(this.max);
	}else if (this.amount + n < 0) {
	    if (onlyInRange)
		return false;
	    this.updateAmount(0);
	}else {
	    this.updateAmount(new_amount);
	}
	return true;
    }

    #getResourceThen(funcName) {
	function getEThen(e) {
	    const resID = e.target.id;
	    const res = gameData.getResource(resID)
	    if (res == undefined)
		return
	    res[funcName]();
	}
	return getEThen
    }

    make() {
	this.addAmount(1);
    }
    
    onclick() {
	this.make()
    }

    getID() {
	return this.id
    }

    isUnlocked() {
	return false
    }

    // What information about this resource needs to be saved between states
    // Instead of saving the maximum, saving some variable about this variables state
    // or instead having that be loaded when the resource's constructor is called?
    // We can think about this
    toJSON() {
	return {
	    'id': this.id,
	    'amount': this.amount,
	    'max': this.max,
	}
    }
}

const gameData = new class {
    resources = {};
    constructor() {
	// Game data is initialized here
	// So we can load it from localStorage here too!

	// Private variables (things starting with '#') aren't saved
	// when converted to/from JSON: so if it's needed to be saved,
	// then it shouldn't have a '#'
    }

    // Adds a resource from a class of Resource
    addResource(resource) {
	if (!(resource instanceof Resource)) {
	    console.error(`Attempted to add ${JSON.stringify(resource)}, which is not instance of Resource`)
	}

	const resID = resource.getID();

	if (Object.hasOwn(this.resources, resID)) {
	    const old_resource = this.resources[resID]
	    if (!Object.is(resource, old_resource)) {
		console.error(`Adding resource ${JSON.stringify(resource)} conflicts with existing resource ${old_resource}`)
	    }
	}else {
	    this.resources[resID] = resource;
	}
    }

    getResource(resID) {
	if (Object.hasOwn(this.resources, resID)) {
	    return this.resources[resID];
	}
	return undefined;
    }

    #initResources() {
	const resourceHTML = document.getElementById('resources');
	for (const resID in this.resources) {
	    const res = this.resources[resID];
	    const resHTML = res.getResourceHTML();
	    if (!res.isUnlocked())
		resHTML.style.display = 'none';
	    resourceHTML.append(resHTML);
	}
    }

    #initInfo() {
	const resourceHTML = document.getElementById('info');
	for (const resID in this.resources) {
	    const res = this.resources[resID];
	    if (!res.isUnlocked() || !res.isMaterial)
		continue; // Skip this if it isn't unlocked yet
	    resourceHTML.append(res.getInfoHTML());
	}
    }

    startGame() {
	this.#initResources()
	this.#initInfo()
    }
}()

const Sticks = new class extends Resource {
    name = "Stick";
    constructor() {
	super("stick")
    }

    isUnlocked() {
	return true;
    }
}();

const BigSticks = new class extends Resource {
    name = "Big Stick";
    constructor() {
	super("bigstick")
    }

    isUnlocked() {
	return true;
    }

    make() {
	const sticks = gameData.getResource('stick');
	const hadem = sticks.canAdd(-2);
	const havespaceforem = this.canAdd(1);
	if (!hadem || !havespaceforem) {
	    return;
	}
	sticks.addAmount(-2);
	this.addAmount(1);

	if (this.amount > 4) {
	    const trees = gameData.getResource('tree');
	    trees.unlock()
	}
    }
}();

const StickFactories = new class extends Resource {
    name = "Stick Factory (Tree)";
    // Whether this is a material i.e. should appear on the info/metric side
    isMaterial = true;

    // Whether this is a generator i.e. it produces some material over time
    isGenerator = true;
    
    constructor() {
	super("tree")
    }

    isUnlocked() {
	return false;
    }

    unlock() {
	this.resourceHTML.style.display = '';
    }

    make() {
	const bigsticks = gameData.getResource('bigstick');
	const hadem = bigsticks.canAdd(-10);
	const havespaceforem = this.canAdd(1);
	if (!hadem || !havespaceforem) {
	    return;
	}
	bigsticks.addAmount(-10);
	this.addAmount(1);
    }
}();

window.onload = () => {
    gameData.startGame();
}
