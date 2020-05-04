(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Asset5 = function() {
	this.initialize(img.Asset5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,240);


(lib.Asset6 = function() {
	this.initialize(img.Asset6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,564);


(lib.beeboxBG = function() {
	this.initialize(img.beeboxBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,998,736);


(lib.beePillow = function() {
	this.initialize(img.beePillow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,576);


(lib.lightUpRing = function() {
	this.initialize(img.lightUpRing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,633);


(lib.ninjaCrawler = function() {
	this.initialize(img.ninjaCrawler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,1000);


(lib.playdohImg = function() {
	this.initialize(img.playdohImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.slime = function() {
	this.initialize(img.slime);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,430);


(lib.smellyMarkers = function() {
	this.initialize(img.smellyMarkers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,598);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E000FF").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E000FF").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE0000").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE0000").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EAIFA1BQhIjdgyh9QiimfjNi2QkQjymQBgQnZBxqdJJQAZhjBIiyQBZjUAthwQCmmkgNjlQgUlElfhcQmkhuuWDSQCQhUCtiKQFckTCSkNQDMl3jkkzQkcmAuxj/QDYgKIwAdQIAAND1hXQFVh5gIlSQgImRntrcQBRAxDACNQDaCgBxBKQGvEeEbASQGCAZDEm0QDtoNgcytQAlCDA0EBQBMFvARBPQB+IrCoD9QDlFbF0hKQG6hYKcqqQirGegxCwQhpFzBFDvQC9KPXpjRQnEEtjNCmQmaFNijEtQnKNPWSKWQg7gDiYgSQitgUhXgHQlMgaibBFQnNDKNaRAQhahCiZiNQjsjXgigfQlZktjqg9QlEhTjsE1QkYFwiwOuQgghRhKjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339999").s().p("EAIEA1BQhHjdgyh9QiimfjOi2QkPjymRBgQnYBxqdJJQAYhjBJiyQBZjUAshwQCnmkgOjlQgSlElfhcQmlhuuXDSQCRhUCuiKQFbkTCRkNQDMl3jikzQkcmAuyj/QDYgKIvAdQIBAND2hXQFUh5gHlSQgJmRnsrcQBPAxDBCNQDaCgBxBKQGuEeEcASQGCAZDEm0QDsoNgcytQAnCDAzEBQBLFvATBPQB9IrCnD9QDmFbF0hKQG6hYKcqqQirGegxCwQhoFzBFDvQC8KPXpjRQnEEtjNCmQmaFNijEtQnLNPWUKWQg8gDiZgSQisgUhXgHQlMgaibBFQnNDKNZRAQhYhCibiNQjqjXgkgfQlXktjrg9QlEhTjsE1QkYFwixOuQgehRhMjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339999").s().p("EAIEA1BQhHjdgyh9QiimfjOi2QkPjymRBgQnYBxqdJJQAYhjBJiyQBZjUAshwQCnmkgOjlQgSlElfhcQmlhuuXDSQCRhUCuiKQFbkTCRkNQDMl3jikzQkcmAuyj/QDYgKIvAdQIBAND2hXQFUh5gHlSQgJmRnsrcQBPAxDBCNQDaCgBxBKQGuEeEcASQGCAZDEm0QDsoNgcytQAnCDAzEBQBLFvATBPQB9IrCnD9QDmFbF0hKQG6hYKcqqQirGegxCwQhoFzBFDvQC8KPXpjRQnEEtjNCmQmaFNijEtQnLNPWUKWQg8gDiZgSQisgUhXgHQlMgaibBFQnNDKNZRAQhYhCibiNQjqjXgkgfQlXktjrg9QlEhTjsE1QkYFwixOuQgehRhMjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-370.4,710.8,740.8);
p.frameBounds = [rect];


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Ai2BqIknjTIFrgBIBvleIByFdIFvgCIgwAkIj4C0IByFYIkmjUIkoDag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Ai2BqIknjSIFrgCIBvldIByFbIFvgBIgwAjIj4C0IByFZIkmjUIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ai2BqIknjTIFrgCIBvldIByFdIFvgCIgwAkIj4C0IByFYIkmjUIkoDag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ai2BqIknjSIFrgCIBvldIByFbIFvgBIgwAjIj4C0IByFZIkmjUIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF66FF").s().p("Ai2BqIknjTIFrgCIBvldIByFcIFvgBIgwAkIj4C0IByFXIkmjTIkoDag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF66FF").s().p("Ai2BqIknjSIFrgCIBvldIByFbIFvgBIgwAjIj4C0IByFZIkmjUIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("Ai2BqIknjSIFrgDIBvlcIByFbIFvgBIgwAjIh3BXIiBBdIByFYIkmjTIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("Ai2DvIknjUIFrgCIBvlcIByFbIFvgBIgwAjIh3BXIiBBeIByFYIkmjTIkoDZgAC6pMIARAAIgWAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-58.9,95.7,117.8);
p.frameBounds = [rect];


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900CC").s().p("Ai2BqIknjSIFrgDIBvlcIByFbIFvgBIgwAjIj4C0IByFYIkmjTIkfDTIgJAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900CC").s().p("AgNBqIkojSIFqgCIBwldIBzFbIFvgBIgxAjIj3C0IByFZIknjUIkfDTIgJAGgAqGB5IAYAAIgYARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-45.6,129.4,91.3);
p.frameBounds = [rect];


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai2BqIknjSIFrgDIBvlcIByFbIFvgBIgwAjIj4C0IByFYIkmjTIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai2BqIknjTIFrgBIBvldIByFcIFvgCIgwAjIj4C1IByFYIkmjUIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai2BqIknjTIFrgCIBvldIByFcIFvgBIgwAkIj4CzIByFYIkmjTIkoDag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai2BqIknjTIFrgBIBvldIByFcIFvgCIgwAjIj4C1IByFYIkmjUIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFCC").s().p("Ai2BqIknjSIFrgDIBvlcIByFbIFvgBIgwAjIiyCCIhGAyIByFYIkmjTIkoDZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFCC").s().p("Ai2BqIknjSIFrgDIBvlcIByFbIFvgBIgwAjIiyCBIhGAzIByFYIkmjTIkoDag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3);
p.frameBounds = [rect];


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset5();
	this.instance.parent = this;
	this.instance.setTransform(-44.7,-123.9,1,1,0,-16.7,163.3);

	this.instance_1 = new lib.Asset5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.5,-131.8,1,1,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.9,-131.8,261.9,263.7);
p.frameBounds = [rect];


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset5();
	this.instance.parent = this;
	this.instance.setTransform(-41.7,-131.1,1,1,0,-7,173);

	this.instance_1 = new lib.Asset5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.6,-124.4,1,1,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.1,-131.1,262.3,262.3);
p.frameBounds = [rect];


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset5();
	this.instance.parent = this;
	this.instance.setTransform(-43.3,-126.5,1,1,0,-11.5,168.5);

	this.instance_1 = new lib.Asset5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,-126.5,1,1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.5,-126.5,263,253.1);
p.frameBounds = [rect];


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ego6ACSIA2q5MBQ/AGWIg2K5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-261.9,-55.2,523.8,110.4);
p.frameBounds = [rect];


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EgonAFeIAAq7MBRPAAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-35,520,70);
p.frameBounds = [rect];


(lib.pickAPrize_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdEAQgOgMAAgPQAAgRAOgMQANgMASAAQASAAALAMQANAMAAARQAAAPgNAMQgLAMgSAAQgSAAgNgMgAgdBwQAAg1gFh3QgFh3ABg1QgBgQAMgKQALgIASgBQASAAAIAKQAJAKAAAPIgCCsIgBCsQAAAKgLAGQgKAGgLAAQggAAABgWg");
	this.shape.setTransform(699.3,435.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjCIQgvgoAAg/IAAhEQAAg5AsgpQAsgpA9AAQA7gBAqAmQArAmAAA4QAAAXgFANQgGAMgKAGQgLAFgJACQgKACgPgBIiXAAIAAARQAAAkAaAVQAaAWApAAQAdAAAagOQAbgOAFABQANgBAIAMQAJAMAAALQAAARgiATQgjASgzAAQhIAAgvgogAgwhjQgWATAAAdIAAAYIB3AAQAPgBAGgEQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_1.setTransform(674.7,444.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhuCrQgNAAgGgIQgIgIABgLQgBgMANgSICZjfIiHAAQgKAAgHgJQgHgJAAgNQAAgMAGgJQAHgJALAAIDPAAQALAAAHAHQAIAHAAAMQAAAQgLAPIiaDfICXAAQAKAAAIAJQAGAJAAANQABANgHAIQgHAJgLAAg");
	this.shape_2.setTransform(642.2,444.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaD1QgLgIAAgKIAAkiQAAgLALgGQALgIAPAAQARAAAKAIQAMAGAAALIAAEiQAAAKgMAIQgLAIgQAAQgPAAgLgIgAgei5QgNgMAAgPQAAgRANgMQANgLARAAQASAAANALQANAMAAARQAAAPgNAMQgNAMgSAAQgRAAgNgMg");
	this.shape_3.setTransform(619,436.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_4.setTransform(600.1,444.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiXEBQgMgHAAgMIAAnbQAAgLAJgHQAIgHANAAICLAAQBIAAArAmQArAmAABSIAAAGQAABSgsAmQgtAmhJAAIhYAAIAACyQAAAMgMAHQgLAGgPAAQgQAAgLgGgAhWAAIBYAAQApAAAWgXQAXgXAAgvIAAgIQAAgvgXgXQgWgXgpAAIhYAAg");
	this.shape_5.setTransform(567.3,435.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaEIQgLgIAAgKIAAntQAAgKALgIQAKgGAQAAQAQAAALAGQALAIAAAKIAAHtQAAAKgMAIQgLAIgPAAQgPAAgLgIg");
	this.shape_6.setTransform(523.3,434.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhuCXQgbgYAAgvQAAg5ArgXQArgVBRAAIAhAAIAAgOQAAgggSgXQgSgYgiAAQggAAgXAMQgYAMgBAAQgNgBgHgLQgIgMAAgOQAAgTAjgOQAjgNAnAAQBJAAAjAoQAkAnAAA8IAACzQAAALgKAHQgLAIgPAAQgPAAgLgIQgKgHAAgLIAAgZQgvA4g9ABQgpAAgbgZgAgHAXQgWACgPAMQgRANAAAVQAAAXANAMQANAMAVAAQAbAAAZgXQAZgXAAgaIAAgbIgSAAQgiAAgSAEg");
	this.shape_7.setTransform(497.5,444.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhnCDQgtgqAAg5IAAizQAAgKAMgHQAMgJAPAAQAPABALAHQALAIAAAKIAACyQAAAcAWAYQAWAXAcAAQAfAAAVgWQAWgYAAgdIAAizQAAgKALgHQALgIAQAAQAQAAAKAIQALAHAAAKIAAC0QAAA4gsArQgsAqg9ABQg7gBgsgqg");
	this.shape_8.setTransform(463.3,444.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAiD5Qh9AAAAhwIAAloQAAgKALgIQAMgHAOAAQAOAAAMAHQANAIAAAKIAACDIBWAAQAKAAAFAJQAGAIAAAMQAAALgGAIQgFAJgKAAIhWAAIAACsQgBAaAMAKQAKALAcAAIAZAAQAQAAAIAKQAJAJAAANQAAAOgJAJQgIAKgQAAg");
	this.shape_9.setTransform(434.2,436.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_10.setTransform(409.8,444.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaD1QgKgIgBgKIAAkiQABgLAKgGQALgIAPAAQARAAAKAIQAMAGAAALIAAEiQAAAKgMAIQgLAIgQAAQgPAAgLgIgAgei5QgNgMAAgPQAAgRANgMQANgLARAAQASAAANALQANAMAAARQAAAPgNAMQgNAMgSAAQgRAAgNgMg");
	this.shape_11.setTransform(387.4,436.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvDvIiQnRIgBgGQABgNAPgKQAOgJASAAQAVAAAFAQIB2GZIB3mZQAFgQAUAAQARAAAQAJQAQAKAAANIgCAGIiOHRQgEANgOAHQgOAGgRAAQgmAAgJgag");
	this.shape_12.setTransform(359.5,435.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_13.setTransform(648,351.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhnCDQgtgrAAg4IAAizQAAgKAMgHQAMgIAPAAQAPgBALAIQALAIAAAJIAACzQAAAcAWAYQAWAXAcAAQAfAAAVgXQAWgXAAgdIAAizQAAgKALgIQALgGAQAAQAQAAAKAGQALAIAAAKIAAC0QAAA4gsArQgsAqg9AAQg7AAgsgqg");
	this.shape_14.setTransform(614.8,351.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhnCEQgtgrAAg5IAAhBQAAg4AsgrQAsgrA8AAQA8ABAsAqQAtAqAAA5IAABBQAAA4gtAsQgtArg7AAQg6ABgtgsgAgzhUQgVAXgBAcIAABBQABAdAVAXQAWAYAdAAQAdAAAXgYQAVgXABgdIAAhBQgBgcgVgXQgXgXgdABQgdgBgWAXg");
	this.shape_15.setTransform(578.7,351.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZEBQgLgHAAgMIAAi2IgDgIIiUkLQgDgGgBgFQAAgNAQgKQAQgJARAAQAPAAAKARIB2DkIB2jkQAJgRAQAAQAQAAAQAJQAPAKAAANQAAAGgCAFIiVELIgBAIIAAC2QAAAMgMAHQgMAGgOAAQgPAAgLgGg");
	this.shape_16.setTransform(541.1,342.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABWEIIhpidIg1AwIAABaQAAAJgLAIQgMAIgQAAQgQAAgKgIQgKgIAAgJIAAnuQAAgKAKgHQAKgHAQAAQARAAALAHQALAHAAAKIAAE/ICWiJQAGgGAKAAQAMAAAMAMQAMALAAAMQAAAKgGAGIhdBSIBxCjQAEAGAAAIQAAANgOAMQgOAMgOAAQgMAAgIgKg");
	this.shape_17.setTransform(490.9,341.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhdCJQgmgoAAhBIAAhAQAAhAAmgnQAlgoBJAAQAvABAgAPQAfARAAAUQAAAMgJAMQgIAMgNAAQgDAAgWgKQgWgKgbAAQhOgBAABMIAAA/QAABMBPAAQAbAAAWgMQAWgLAEAAQAPAAAJALQAJAMAAANQAAAUghARQghASgwgBQhKABglgng");
	this.shape_18.setTransform(457.4,351.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaD1QgKgIgBgJIAAkjQABgKAKgIQALgGAPAAQARAAAKAGQAMAIAAAKIAAEjQAAAJgMAIQgLAIgQAAQgPAAgLgIgAgei4QgNgNAAgPQAAgRANgLQANgMARAAQASAAANAMQANALAAARQAAAPgNANQgNALgSAAQgRAAgNgLg");
	this.shape_19.setTransform(433.6,343.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AiXEBQgMgHAAgMIAAnbQAAgLAJgHQAIgHANAAICLAAQBIAAArAmQArAmAABSIAAAGQAABSgsAmQgtAmhJAAIhYAAIAACyQAAAMgMAHQgLAGgPAAQgQAAgLgGgAhWAAIBYAAQApAAAWgXQAXgXAAgvIAAgIQAAgvgXgXQgWgXgpAAIhYAAg");
	this.shape_20.setTransform(407.8,342.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AnxfXQgDgDAAgEQAAgEADgDQADgDAEAAIA/gBQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAIg/ABQgEAAgDgDgAomfZIg8gDQgEgBgCgDQgDgDAAgEIAAAAQAAgEAEgDQADgDAEABIA7ADQAEAAADADQADADgBAEIAAAAQAAAEgDADQgDADgDAAIgBAAgAl1fUQgEgDAAgEIAAgBQAAgDADgDQACgDAEgBIA7gFQAFAAADADQADACAAAEIAAAAQABAEgDADQgCAEgFAAIg7AFIgBAAQgEAAgCgCgAqdfRIg8gHQgEgBgDgDQgCgDAAgDIAAgBQABgFADgCQADgDAEABIA7AHQAFAAACADQADAEgBAEIAAABQAAADgDADQgDACgDAAIgBAAgAj+fIQgDgCgBgFQgBgEADgDQADgDAEgBIA7gIQAEgBADACQAEACAAAFQABAEgCADQgDADgEABIg8AJIgBAAQgDAAgDgCgAsUfAIg7gKQgEgBgCgEQgCgDAAgDIAAgBQABgEAEgCQADgDAEABIA6ALQAEABADADQACADgBAEIAAACQgBADgDACQgCACgDAAIgCgBgAiIe1QgDgDgBgEQgBgEADgDQACgEAEAAIA6gOQAEAAAEACQADACABAEIAAAAQABAEgCAEQgCADgEABIg7ANIgCAAQgDAAgDgBgAuKeoIg6gOQgEgCgCgDQgBgDAAgEIAAgBQACgEADgCQAEgCAEABIA5APQAEABACAEQACADgBAEIAAACQgBADgDABQgDACgCAAIgDgBgAgSeZQgDgDgBgDIAAgBQgCgEACgDQACgEAEgBIA4gSQAEgBAEACQAEACABADQABAEgCAEQgBAEgEABIg5ASIgDABIgFgBgAv9eIIg5gUQgEgBgBgEQgCgDABgEIAAgBQACgEADgBQAEgCAEABIA4AUQAEACACADQACAEgCAEIAAABQgBADgDACIgFABIgDgBgABgdzQgEgCgBgEIAAAAQgCgEACgDQACgEADgCIA4gVQAEgCADACQAEABACADIAAABQABAEgBADQgCAEgEACIg3AWIgEABIgEgBgAxudeIg3gYQgEgCgBgEQgBgDABgEIABAAQABgEAEgCQAEgBAEACIA2AXQAEACABAEQACAEgCADIAAACQgCADgDABIgEABIgEgBgADPdFQgEgCgCgDIAAgBQgCgDACgEQABgEAEgCIA1gbQADgBAEABQAEABACADIAAABQACADgBAEQgBAEgEACIg2AbIgEABIgDAAgAzbcsQgagOgbgPQgDgCgBgEQgBgEACgDIAAgBQACgDAEgCQAEgBADACQAaAPAaAOQAEACACAEQABAEgCADIAAABQgCADgEABIgDABIgFgBgAE5cNQgEgBgCgEQgCgDABgEQABgEAEgDIAzgeQADgCAEAAQAEABACAEIAAAAQADADgBAFQgBAEgEACIg0AfIgEABIgDAAgA1CbxIgygiQgEgCAAgEQgBgEACgDIAAAAQADgEAEgBQAEAAADACIAyAhQADACABAEQABAEgDAEQgCADgEABIgCAAQgDAAgCgBgAGfbNQgEgBgDgDQgCgDABgEQAAgFAEgCIAwgjQADgCAEAAQAFABACADQADAEgBAEQgBAEgDACIgxAkQgCABgDAAIgCAAgA2latIgwgmQgEgCAAgEQAAgEACgDIAAAAQADgEAEAAQAEgBADADIAwAlQADACABAEQABAEgDAEIAAAAQgDADgEABIgBAAQgDAAgDgCgAH/aFQgEAAgDgDIAAAAQgCgEAAgEQAAgEAEgDIASgPIAAAAIAbgXQADgCAEAAQAFAAACADQADADAAAEQAAAEgDADIgcAYIAAAAIgTAPQgDACgDAAIgBAAgAUIaFQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAEAAIA5gBQAEAAADADQADADAAAEIAAAAQABAEgDADQgDADgEAAIg6ABIgEAAgATMaEIg7gDQgEAAgDgDQgCgDAAgEQAAgEADgDQADgDAEAAIA7ADQAEAAADADQADADgBAEQAAAEgDADQgDADgDAAIgBAAgAV7Z/QgDgDAAgEQgBgEADgDQADgEAEAAQAegBAdgDQAFgBADADQADADABAEIAAAAQAAAEgDADQgCADgEABQgeADgfABIgBAAQgDAAgDgCgARTZ8Ig8gHQgEAAgDgEQgCgDABgEIAAAAQAAgEADgDQAEgCAEAAIA7AHQAEABADADQACADAAAEIAAAAQgBAEgDADQgDACgDAAIgBAAgAX0Z0QgEgCgBgFIAAAAQAAgEACgDQADgDAEgBIA7gJQAEAAAEACQADACABAFQABAEgDADQgCADgEABIg8AJIgCAAQgDAAgCgCgAPcZsIg6gLQgFgBgCgDQgCgEABgDIAAgBQABgEADgCQADgCAEABIA7AKQAEABACADQADAEgBAEIAAAAQgBAEgDACQgDACgDAAIgCAAgAZqZhQgDgDgBgEQgBgEACgDQADgEADAAIA7gOQAEAAADACQAEACABAEQABAEgCADQgDAEgEABIg6ANIgDAAQgCAAgDgBgA4HZeIgsgpQgDgCAAgFQAAgEADgCIAAgBQADgDAEAAQAEAAADADIAsAoQADADAAAEQAAAEgDAEQgCADgEAAIgBAAQgEAAgDgDgANoZUIg6gPQgEgBgCgEQgCgDABgFQABgDADgCQAEgDAEACIA5AOQAEABACAEQADAEgBAEIAAAAQgBAEgEACQgCABgDAAIgCAAgAbfZFQgEgCgBgEQgBgEACgEQACgDAEgBQAdgIAcgKQAEgBAEACQAEACABAEQABADgBAEQgCAEgEABQgdAKgdAIIgDAAIgFgBgAJaY2QgEAAgDgDQgDgDAAgEQAAgEADgDIArgrQADgDAEAAQAEAAADADQADADAAAEIAAABQAAAEgDACIgrAsQgDACgEAAIAAAAgAL0YzIg4gUQgEgCgCgEQgBgDABgEIAAAAQACgEADgCQAEgBAEABIA4AUQAEABACAEQABAEgBADIAAABQgBADgEACIgEABIgEAAgAdRYgQgDgCgCgEIAAAAQgBgEACgEQACgDAEgCIALgEIAAAAIAqgRQAEgBADABQAEACABAEIABAAQABAEgBAEQgCADgEACIgpAQIAAAAIgNAFIgDABIgFgBgA5XYPQgEAAgDgDIgogsQgDgDAAgEQABgEADgDIAAgBQADgCAEAAQAEAAADADIAoAsQADADgBAEQAAAEgCADIAAAAQgDADgEAAIgBAAgAfAXyQgEgBgCgEIAAAAQgBgEABgEQABgDAEgCIA1gbQAEgCAEABQAEABACAEIAAAAQACAEgCAEQgBAEgDACIg2AbIgFABIgDgBgEAgrAW7QgEgBgDgEIAAAAQgCgDABgEQABgEAEgDIAzgeQAEgCAEABQAEAAACAEQACADgBAEQgBAFgDACIg0AfIgFABIgCAAgA6mW2QgEgBgDgDQgTgYgRgYQgCgDABgFQAAgEAEgCIAAAAQADgCAEAAQAEABADAEQARAXASAXQACAEAAAEQAAAEgEACIAAABQgDACgDAAIgBAAgEAiRAV7QgEgBgCgDIAAAAQgDgDABgFQABgEADgCIAwgjQAEgCAEAAQAEABACADQADAEAAAEQgBAEgEACIgwAjQgDACgDAAIgCAAgA7sVUQgEAAgCgEQgRgZgOgaQgCgEABgEQABgEADgCIABAAQADgCAEABQAEABACAEQAPAaAPAYQADAEgBAEQgBAEgEACIAAAAQgCACgDAAIgCgBgEAjyAUzQgEAAgDgEQgCgDAAgEQAAgEAEgDIAWgSIAWgSQADgDAEAAQAEABADACIAAABQADADgBAEQAAAEgDADIgXATIgWASQgDACgDAAIgBAAgA8oTtQgEgCgCgDQgNgbgLgbQgCgEACgEQABgEAEgBQAEgCAEACQAEABABAEQAMAaAMAbQACAEgBAEQgBADgEACIAAAAIgFABIgDAAgEAlLATmQgEAAgDgDQgDgDABgEQAAgFACgCIAsgsQADgDAEAAQAEAAADADIAAAAQADADAAAEQAAAEgDADIgsAsQgCADgEAAIgBAAgEAmaASMIAAgBQgDgDgBgEQAAgEADgDIAmgtQADgDAEgBQAEAAADACQAEADAAAEQAAAEgCAEIgnAuQgDADgEAAIgBAAQgDAAgDgCgA9XSAQgEgCgBgEIgDgJIgQgzQgBgEACgEQACgDAEgBIAAAAQAEgBADACQAEACABAEIAQAxIADAJQABAEgCAEQgBAEgEABIAAAAIgEABIgEgBgEAnmAQuIAAAAQgEgDAAgEQgBgEADgDQARgZAQgZQACgEAEAAQAEgBAEACIAAAAQADACABAEQABAEgCADQgQAagTAZQgCAEgEABIgCAAQgDAAgCgCgA95QKQgEgCgBgEQgGgegFgeQgBgEACgDQADgDAEgBIAAAAQAEgBADADQAEACAAAEQAFAdAHAdQABAEgDAEQgCADgEABIAAAAIgCAAQgDAAgCgBgEAooAPHIAAAAQgEgCgBgEQgBgEACgDQAPgaANgbQACgEAEgBQAEgCADACIAAAAQAEACABAEQACAEgCAEQgNAbgPAbQgCADgEABIgDABIgFgCgA+OOSQgDgCgBgEQgDgegCgfQAAgEADgDQADgEAEAAQAEAAADADQADADABAEQABAeADAdQABAFgDADQgCADgEABIgBAAIAAAAQgEAAgDgDgEApeANcIAAAAQgEgCgCgEQgBgEABgDQAMgcAJgdQACgDAEgCQADgCAEABIAAAAQAEACACADQACAEgCAEQgKAdgLAcQgCAEgEACIgDAAIgEAAgA+VMaQgDgDAAgEQAAgeABgeQABgEADgDQADgDAEAAQAEAAADAEQADADAAAEQgCAdAAAeQAAAEgDADQgDADgEAAQgEAAgDgDgEAqHALqIgBAAQgEgBgCgEQgCgDABgEQAIgdAHgdQABgFADgCQAEgCAEABQAEABACADQACAEgBAEQgGAegIAdQgBAEgEACIgFABIgCAAgA+JKlIAAAAQgEAAgDgEQgCgDAAgEQADgeAFgdQABgFADgCQAEgCAEABQAEAAACADQADAEgBAEQgFAdgDAdQAAAEgEADQgCACgEAAIgBAAgEAqhAJ1QgEgBgDgDQgCgEABgEQAEgdADgeQAAgEAEgCQADgDAEAAIAAAAQAEABADADQACADAAAEQgDAfgFAdQAAAEgEADQgCACgEAAIgBAAgA+vJUIg7gNQgEAAgCgEQgCgDABgFIAAAAQABgEADgCQAEgCAEABIA6AMQAEABACADQADADgBAFIAAAAQgBAEgDACQgDACgDAAIgCAAgEggkAI5Ig6gRQgDgCgCgDQgCgEABgEQABgEAEgBQAEgCADABIA6ARQAEABACADQACAEgBAEIAAAAQgBAEgEACIgFABIgDAAgEgiWAIVIg4gWQgEgBgCgEQgBgEABgDQACgEAEgCQADgCAEACIA3AVQAEABACAEQACAEgCADIAAABQgBADgEACIgEABIgDAAgEAquAH+IAAAAQgEAAgDgDQgDgEAAgEQACgaAAgcIAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAEQAAAcgCAbQAAAEgDADQgDADgDAAIgBAAgEgkGAHoIg1gaQgEgCgCgEQgBgEACgEIAAAAQACgDAEgCQAEgBAEACIA1AaQAEABABAEQABAEgCAEIAAAAQgBAEgEABIgDABIgFgBgEglwAGyIg0geQgEgCgBgEQgBgEACgDIABgBQACgEAEgBQAEAAADACIAzAeQAEACABADQABAEgCAEIAAAAQgCAEgEABIgDAAIgEgBgEAqnAGEQgDgDAAgEQgCgdgDgeQAAgEADgDQACgDAEgBIAAAAQAFAAADACQADADABAEQADAeABAeQAAAEgDAEQgCACgEABIgBAAIAAAAQgEAAgDgDgEgnXAF0IgxgiQgDgCgBgEQgBgEADgDIAAgBQACgDAEgBQAEAAAEACIAwAhQADACABAEQABAEgCAEIAAAAQgDADgEABIgCAAQgCAAgDgBgEgo3AEuIgpghIgBAAIAAgBIgtgmQgDgDAAgEQAAgEACgDIABAAQADgDAEAAQAEAAADACIArAmIABABIAAAAIAoAgQAEADAAAEQABAEgDADIAAABQgCADgEAAIgCAAQgDAAgCgCgEAqbAENQgDgCgBgEQgFgegGgdQgBgEACgEQACgDAEgBIAAAAQAEgBAEACQADACABAFQAHAdAFAeQAAAFgCADQgCADgEABIgCAAQgDAAgDgCgEgq6AC9IgpgrQgDgDAAgEQAAgEADgDIABgBQADgCADAAQAEAAADADIAqArQACADAAAEQABAEgDACIAAABQgDADgFAAIAAAAQgEAAgDgDgEAqBACYQgDgCgBgEQgJgdgKgcQgBgEACgDQABgEAEgCIAAAAQAEgBAEACQAEACABAEQAKAcAJAdQABAEgCAEQgCAEgEABIgDAAIgFgBgEgsEABpQgEgBgDgDIgmgvQgCgDABgEQAAgEADgDIABAAQADgCAEAAQAEABADADIAlAuQACADAAAEQAAAEgDADIAAAAQgDADgEAAIgBAAgEAqAAAxQgEAAgDgDIAAAAQgDgDAAgEQABgEADgDIArgoQAEgDAEAAQAEAAADADIAAAAQADADgBAEQAAAEgCACIgtAqQgDACgDAAIgBAAgEgtNAAKQgEgBgCgEQgRgXgQgZQgCgEABgEQABgEAEgCIAAAAQAEgCAEABQADAAACAEQAPAZARAYQADADgBAEQgBAEgDACQgDACgDAAIgCAAgEArQgAlQgDgDAAgEQAAgEADgDIAogtQADgDAEgBQAEAAADADQADACAAAEQABAFgDADIgpAtQgDAEgEAAIAAAAQgEAAgDgDgEguLgBbQgEgBgCgDQgOgbgNgbQgCgEABgEQACgEAEgCQAEgCAEACQADABACAEQAMAbAOAaQACAEgBAEQgBAEgEABIgEACIgDgBgEAsggCBIAAAAQgEgCgBgFQAAgEACgDQATgYARgYQACgDAEgBQAEgBAEADIAAAAQADACABAEQABAEgDADQgRAZgTAYQgCAEgEAAIgCAAQgDAAgCgCgEgu+gDIQgEgCgCgDIgPgoIgGgSQgBgEACgEQACgDAEgCIAAAAQAEgBAEACQADACABADIAGASIAPAnQABAEgBAEQgCADgEACIAAAAIgEABIgDgBgEAtlgDjQgDgCgBgFQgBgDACgEQAQgaAOgaQACgEADgBQAFgBADACQAEACABAEQABAEgCAEQgOAagQAbQgCADgEABIgDAAQgCAAgDgBgEgvlgE7QgDgCgBgEIgOg7QgBgEADgDQACgEAEAAIAAAAQAEgBAEACQADACABAEIANA6QABAEgCADQgCAEgEABIgCAAQgDAAgDgBgEAufgFNIAAAAQgEgCgBgDQgBgEABgEQANgbALgbQABgEAEgCQAEgCADACIABAAQAEABABAEQACAEgCAEQgLAcgNAcQgBADgEACIgDAAIgFgBgEgv9gGxQgDgDgBgEQgEgegDgeQAAgEADgDQACgDAEgBIABAAQAEAAADADQADACAAAFQADAdAEAdQABAFgDADQgDADgEABIAAAAIgBAAQgDAAgDgCgEAvMgG8IAAAAQgEgBgCgEQgBgEABgDQAJgdAIgcQABgEAEgCQADgCADABIABAAQAEABACADQACAEgBAEQgHAdgKAdQgBAEgEACIgEABIgEgBgEgwIgIpQgDgDAAgFIAAgjIAAgZQAAgEADgDQADgDAEAAIABAAQAEAAACAEQADADAAAEIAAAYIAAAjQAAAEgDADQgDADgEAAIAAAAQgEAAgDgCgEAvsgIwIgBAAQgDAAgCgEQgDgDABgEQAGgdAEgeQABgEADgDQADgCAEAAIAAAAQAEABADADQADADgBAFQgEAegGAeQgBAEgEACQgCACgDAAIgCgBgEgv/gKeIAAAAQgEgBgDgDQgDgDAAgEQADgeAEgeQABgEADgDQADgCAEAAIAAAAQAEABADADQADADgBAEQgEAegDAeQAAAEgDADQgDACgDAAIgBAAgEAv+gKmIgBAAQgEgBgCgDQgDgDAAgEQADgdABgeQAAgEADgDQADgDAEAAQAEAAADAEQADACAAAEQgBAfgCAdQgBAFgDADQgDACgDAAIgBAAgEgvwgMVIgBAAQgEgBgCgEQgCgDABgEQAFgeAHgdQABgFAEgCQADgCAEABQAEABACADQADAEgBAEQgHAdgGAeQAAAEgEACQgCACgDAAIgCAAgEAv7gMbQgCgDAAgEQgBgfgCgdQAAgFADgDQACgDAEAAQAEgBADADQAEADAAAEQACAeAAAfQABAFgDADQgDADgEAAIgBAAIAAAAQgEAAgDgDgEgvUgOLIgBAAQgDgCgCgDQgCgEABgEIAIgbIALgcQACgEAEgCQADgCAEACIAAAAQAEABACAEQABAEgBAEIgLAcIgIAaQgBAEgEACIgEABIgDAAgEAv0gOTQgEgDAAgEQgDgegGgeQgBgEADgDQACgDAEgBQAEgBAEACQADADABAEQAFAeAEAfQAAAEgCADQgDADgEABIAAAAIgBAAQgDAAgDgCgEgusgP6IAAAAQgEgCgBgEQgCgEACgDQAMgcAPgbQABgEAEgBQAEgBAEABIAAAAQAEACABAEQABAEgBAEQgOAbgNAbQgCAEgEABIgDABIgEgBgEAvfgQJQgDgCgBgEQgHgdgJgcQgBgEACgEQACgDADgCIABAAQAEgBADACQAEACABAEQAJAdAHAdQABAEgCADQgCAEgEABIAAAAIgDAAQgCAAgDgBgEgt1gRmQgEgCgBgEQgBgEACgDQAQgaARgZQACgEAEAAQAEgBADACQAEACABAEQABAEgDAEQgRAZgOAZQgDADgEABIgCABQgDAAgCgCgEAu9gR8QgEgBgBgEQgLgcgMgbQgBgEABgEQACgEAEgBQADgCAEACQAEABACAEQAMAbAKAdQACAEgCADQgCAEgDACIgBAAIgDAAIgEgBgEgszgTJQgEgDgBgEQAAgEACgDIAmgwQACgDAEAAQAFgBADADIAAAAQADADAAAEQABAEgDADIglAvQgCADgEABIgBAAQgEAAgCgCgEAuOgTpQgEgBgCgEQgNgagQgaQgCgDABgEQABgEAEgCQAEgCADABQAEABACADQAQAbAOAaQACAEgCAEQgBAEgDACIgFABIgDgBgEgrogUmIAAAAQgDgDAAgFQAAgEADgDIApgqQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgpAqQgDADgEAAIAAAAQgEAAgDgCgEAtSgVQQgEAAgCgEQgRgYgSgYQgCgEABgEQAAgEADgCIABAAQADgDAEABQAEAAADAEQASAYAQAZQADAEgBAEQgBAEgDACIgBAAQgCACgDAAIgCgBgEgqOgV3QgEAAgDgDIAAAAQgDgDAAgEQABgEACgDQAWgVAYgTQADgDAEAAQAFABACADIAAAAQADADgBAEQAAAEgDADQgXATgVAVQgDACgEAAIgBAAgEAsMgWwQgEAAgDgEIgngtQgDgDAAgEQABgEACgCIABgBQADgCAEAAQAEAAADADIAoAuQACADAAAEQAAAEgEADIAAAAQgDACgDAAIgBAAgEgovgXIQgEAAgDgDIAAgBQgCgDAAgEQAAgEAEgDIAvgkQAEgCAEABQAEAAADADIAAABQACADgBAEQAAAEgDACIgwAkQgDACgDAAIgBAAgEAq1gYMIgrgpQgDgDAAgEQAAgEACgDIABAAQADgDAEAAQAEAAADACIArAqQADADAAAEQAAAEgDADIAAAAQgDADgEAAQgEAAgDgDgEgnPgYOQgEgBgCgDIAAAAQgDgEABgEQABgEAEgCIAyggQAEgCAEAAQAEABACAEIAAAAQACAEgBAEQgBAEgDACIgzAfQgCACgDAAIgCAAgEglqgZMQgDgBgCgDIgBgBQgCgEACgDQABgEADgDQAbgOAbgNQAEgCAEABQAEACACAEIAAAAQABADgBAEQgBAEgEACQgbANgaAOIgFABIgDAAgEApegZcIgJgHIAAAAIghgbQgDgDgBgEQAAgEADgEQACgDAEAAQAEgBAEADIAhAbIAAAAIAJAIQADADAAAEQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAuA5hIgLgGQgDgCgCgDQgBgEACgDIAAgBQACgEAEgBQAEgBAEACIAFADIAhgWQADgCAFAAQAEABACAEIAAAAQACADgBAEQgBAEgDACIglAaQgDACgDAAIAAAAIgFgCgAvA5/QgbgNgcgLQgEgBgBgEQgCgEACgDIAAgBQABgDAEgCQAEgCAEACQAcALAcANQADABACAEQABAEgCAEQgBAEgEABIgEABIgEgBgEgj/gaCQgDgBgCgDIAAgBQgCgEACgDQABgEAEgCIA4gXQAEgCADACQAEACACADQABAEgBAEQgCAEgEACIg3AWIgEABIgEgBgAsl6XQgEgCgDgDIAAAAQgCgEABgEQABgEAEgCIA1gdQADgCAEABQAEABACAEQACAEgBAEQgBAEgEACIg0AdIgFABIgCAAgEAoFgaiIgxgjQgDgCgBgEQgBgEACgEQADgDADgBQAFgBADACIAyAkQADACABAEQABAEgDADIAAABQgCADgFABIgBAAQgDAAgDgCgAwv6sIg5gTQgDgBgCgEQgCgDABgEQABgEAEgCQAEgCAEABIA4ATQAEACACADQACAEgBAEIAAAAQgCAEgEACIgEABIgDgBgEgiPgauQgEgCgCgDQgBgEACgEQACgEAEgBQAcgKAegJQAEgBADACQAEACABAEIAAAAQABAEgCAEQgCADgEABQgdAJgcAKIgDAAIgEgBgALd7DIgkgRQgEgCgCgEQgBgEACgDQACgEAEgCQAEgBADACIAfAPIALgIQAEgCAEABQAEABACADIAAAAQACAEgBAEQgBAEgDACIgPAKQgCACgDAAIgBAAIgEgBgAq87QQgEgBgCgEQgCgEACgEQABgDAEgCIA2gZQAEgCAEACQAEABACAEIAAAAQABAEgBADQgCAEgEACIg2AZIgEABIgDgBgAyg7PIg7gPQgEAAgCgEQgCgDABgEQABgFADgCQAEgCAEABIA6AOQAEABADAEQACADgBAEIAAABQgCADgDACQgCACgDAAIgCAAgEggcgbRQgEgCgBgEIAAAAQgBgEACgEQADgDAEgCIA5gNQAEgBAEACQADACABAEIAAAAQABAEgCAEQgCADgEABIg6AOIgCAAQgDAAgCgBgEAmigblIg1gfQgDgCgBgEQgBgEACgEQACgDAEgBQAEgCAEADIA0AfQAEACABAEQABAEgCAEQgDADgEABIgCAAQgDAAgCgBgA0W7pIg7gKQgEgBgCgDQgDgEABgEQABgEADgCQADgDAEABIA8AKQAEABACADQADADgBAEIAAABQgBAEgDACQgDACgDAAIgCAAgA+o7rQgDgDgBgEIAAAAQAAgEACgDQACgEAEAAIA3gKIACAAIADAAQAEAAADADQACACABADIAAACQAAAEgDADQgDADgEAAIgDAAIg1AJIgCAAQgDAAgDgBgAKD7sIg5gWQgDgBgCgEQgCgEACgEIAAAAQABgEAEgBQAEgCADABIA5AWQAEACACAEQABAEgBAEQgCADgEACIgEABIgDgBgAMk7vQgEgBgCgDIAAgBQgCgDABgEQABgEADgCIA1geQAEgCAEABQAEABACADIAAABQACADgBAEQgCAEgDACIg1AeQgCABgDAAIgCAAgA2J77Ig7gGQgEAAgDgDQgDgDAAgFIAAAAQABgEADgDQADgCAEAAIA9AGQAEABACADQADADgBAEIAAABQAAAEgDACQgDACgEAAIgBAAgA8y79QgDgDgBgEIAAgBQAAgDADgEQACgDAEAAIA9gGQAEgBAEADQACADABAEIAAAAQAAAEgCADQgDADgEABIg8AGIgBAAQgEAAgDgCgApP8AQgEgBgBgEIgBAAQgBgEACgEQACgEAEgBIA5gUQAEgCAEACQAEACABAEIAAAAQABAEgCAEQgBADgEACIg6AUIgDAAIgEgBgA4B8FIg8gCQgEAAgDgDQgDgDABgEQAAgEACgDQAEgDAEAAIA9ACQAEAAACAEQADADAAAEIAAAAQAAAEgDADQgDACgEAAIgBAAgA658IQgDgDAAgEIAAAAQgBgEADgDQADgDAEAAIA9gCQAEAAADADQADACABAEIAAABQAAAEgDADQgDADgEAAIg9ACIgBAAQgDAAgDgDgAIS8WIg5gSQgEgBgCgEQgCgDABgEQACgEADgCQAEgCAEABIA6ASQAEACACADQABAEgBADIAAABQgBAEgEACIgEABIgEgBgEAk5gcgIg3gaQgDgCgCgEQgBgEABgDIABgBQABgDAEgBQAEgCAEACIA3AaQADACABADQACAEgCAEQgCAEgEABIgDABIgEgBgAnd8mQgDgCgBgEQgCgEACgDQACgEAEgBQAdgJAegHQAEgBAEACQADACABAEIAAAAQABAEgCAEQgCAEgEAAQgdAHgdAJIgDAAIgFgBgAON8pQgDgBgCgEIAAAAQgCgEABgEQABgDAEgCIA3gZQAEgCAEACQAEABABAEQACAEgCADQgBAEgEACIg2AZIgFABIgDgBgAGf83Ig6gMQgEgBgCgEQgDgDABgEIAAgBQABgDAEgCQADgDAEABIA7ANQAEABACAEQACADgBAEIAAAAQgBAEgDACQgDACgCAAIgDgBgAlo9DQgDgDgBgEIAAAAQgBgEACgDQACgEAFAAQAegHAfgFQAEgBADADQADACABAEIAAAAQABAEgDADQgCAEgEABQgfAFgeAGIgCAAQgDAAgCgBgAEq9OIgGgCIgSgDIABABIghgFQgEAAgDgEQgCgDAAgEQAAgEAEgCQADgDAEAAIAhAFIABAAIASADIAGABQAEABACADQACADAAAEIAAABQgBADgDADQgDACgDAAIgCAAgEAjLgdSIg4gWQgEgBgBgEQgCgEABgEIAAAAQABgEAEgBQAEgCAEABIA5AWQAEACABAEQACAEgCADIAAABQgBADgEACIgEABIgEgBgAjy9YQgDgDgBgEIAAAAQgBgEADgDQADgEAEAAIA9gHQAEgBADADQADADABAEIAAAAQAAAEgDADQgCADgEABIg9AHIgBAAQgDAAgDgCgAP69ZQgDgCgCgDIAAgBQgBgEABgDQACgEAEgCIA5gVQAEgBADACQAEACABAEQACADgCAEQgCAEgEABIg4AVIgEABIgEgBgAC29dQgegDgegCQgEAAgDgDQgDgDAAgEIAAgBQABgDADgDQADgDAEAAQAfACAeADQAEAAADADQACAEAAAEQAAAEgEADQgDACgDAAIgBAAgAh69kQgDgDAAgEIAAAAQAAgEADgDQACgEAEAAIA9gCQAEAAADACQADADAAAFQABAEgDADQgDADgEAAIg9ACIAAAAQgEAAgDgCgAA+9kIg5gBQgEAAgCgDQgCgDAAgEQAAgEACgDQACgDAEAAIA5ABQAEAAADADQADADAAAEIAAAAQAAAEgDADQgDADgEAAIAAAAgEAhagd7Ig5gQQgEgCgCgDQgCgEABgEQABgEADgCQAEgCAEABIA6ARQAEACACADQACAEgCAEIAAAAQgBAEgDACIgFABIgDgBgARs+AQgEgDgBgEIAAAAQgBgEACgDQACgEAEgBIA6gQQAEgBAEACQADACABAEIABAAQABAEgDAEQgCADgEABIg6AQIgDABIgEgBgAfn+bIg6gLQgEgBgDgEQgCgDABgEIAAAAQAAgEAEgCQADgDAEABIA7AMQAEABACADQADAEgBAEIAAAAQgBAEgEACQgCACgDAAIgCgBgATg+fQgDgCgBgEIgBgBQAAgDACgEQACgDAEgBIA8gMQAEgBAEACQADADABAEIAAAAQABAEgDAEQgCADgEAAIg7ANIgDAAQgCAAgDgCgAdy+wIgHgBIgygHQgEAAgDgEQgCgDAAgEIAAAAQABgEADgCQADgDAEAAIAzAHIAHABQAEAAACAEQADADgBAEQAAAEgEADQgCACgEAAIgBAAgAVU+1QgDgCgBgEQAAgEADgEQACgDAEgBQAegEAfgDQAEgBADADQAEADAAAEQAAAEgCADQgDADgEABQgeADgeAEIgBAAQgEAAgDgCgAb+++Ig9gEQgEAAgCgEQgDgDAAgEQAAgEADgDQADgCAFAAIA8AEQAEAAADADQADADgBAEIAAABQAAAEgDADQgDACgDAAIgBAAgAXN/CQgDgDgBgEQAAgEADgDQADgDAEgBIA8gDQAEAAADACQADADAAAEIAAAAQAAAEgDADQgCAEgEAAIg8ADIAAAAQgEAAgDgCgAaF/EIgngBIgTAAQgEAAgCgDQgDgDgBgEIAAAAQABgEADgDQACgDAEAAIATAAIAoABQAEAAADADQADADgBAEIAAAAQAAAEgCADQgDADgEAAIgBAAg");
	this.shape_21.setTransform(514.6,425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("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BADAEABQAEACAEgCIA3gXQAEgBACgEQABgEgBgEIAlgOQACAEADACQAEACAEgBQAcgKAdgJQAEgBACgEQACgDgBgEIAAgBIAngLIAAABQABAEAEACQADACAEgBIA5gOQAFgBACgEQACgDgBgEIAAAAIAogIIAAAAQABAEADACQADADAEgBIA2gJIADAAQAEAAADgDQADgDAAgEIgBgCIApgGIAAABQABAEADACQADADAEAAIA9gGQAEgBACgDQADgDAAgEIAAgBIAogCIAAAAQAAAEAEADQADADAEAAIA8gCQAFAAACgDQADgDAAgEIAOAAIAXAAQAAAEADADQADADAEAAIA8ACQAEAAADgCQAEgDAAgEIAAgBIAoADIAAAAQAAAEACAEQADADAFAAIA7AGQAEABADgDQAEgDAAgEIAAAAIAlAFQgBAEADAEQACADAEABIA7AJQAEABADgCQAEgDABgEIAAAAIAoAIQgBAFACADQACAEAEAAIA6AOQAEABAEgCQADgCACgDIAmALQgBAEABADQACAEAEABIA5ATQADABAEgBQAEgCABgEIAAAAIAnAOIAAAAQgCAEACAEQABAEAEABQAcALAbANQAEABAEgBQAEgCABgDIAkARQgCADABADQABAEAEACIALAGQACACADAAQADgBADgBIAlgaQADgCABgEQABgEgCgDIAbgQIAGgEQACADAEABQAEABAEgCIA0gdQAEgCABgDQABgEgCgEIAkgSQACAEADABQAEABAEgBIA2gZQAEgCACgEQABgDgBgEIAlgPQABAEADABQAEACAEgBIA5gUQAEgCACgDQACgEgBgEIAAAAIAmgMQABAEAEACQAEACAEgBQAcgJAdgHQAFgBACgDQACgEgBgEIAAAAIAngJIAAAAQABAEAEADQADACAEgBQAegHAfgFQAEAAACgEQADgDgBgEIAAAAIAVgDIARgDQABAEADADQADACAEAAIA8gHQAEgBADgDQACgDAAgEIApgDQAAAEADADQADACAEAAIA9gCQAEgBADgDQACgDAAgEIApAAQAAAEADADQACADAEAAIA5ABQAEAAADgDQADgDAAgEIAAAAIAoABIAAABQAAAEADADQADADAEAAQAeACAeADQAEAAADgDQADgCABgEIAoAEQgBAEADADQACAEAFAAIAgAFIAAgBIASADIAGABQAEABADgCQAEgDAAgEIAAAAIAoAHIAAABQgBAEACADQADAEAEAAIA6ANQAEABAEgCQADgCABgEIAAAAIAnAKQgBAEACADQACAEAEABIA5ASQAEABAEgBQADgCACgEIAAgBIAmAOIgBAAQgBAEACAEQABAEAEABIA4AWQAEABAEgBQAEgCACgEIAkAQQgCAEABAEQACAEADACIAkARQADABADAAQACAAADgCIAOgKQAEgCABgEQABgEgCgEIAAAAIAlgXQACADAEABQAEABADgCIA0geQAEgCABgEQABgEgBgDIAjgTQACAEAEABQAEABAEgBIA2gZQAEgCABgEQACgEgCgDIAlgQIAAAAQABAEAEACQAEABAEgBIA4gVQAEgBACgEQACgEgCgEIAngMIAAAAQABAEAEACQADACAEgBIA6gQQAEgBACgDQACgEAAgEIgBgBIAngJIAAABQABAEAEACQADACAFgBIA6gMQAFAAACgEQACgDAAgEIAAAAIAlgGQABAEADACQAEADAEgBQAdgEAfgDQAEgBADgDQACgDAAgEIAogEQABAEADADQADACAEAAIA7gDQAEgBADgDQADgDAAgEIAogBQAAAEADADQADADAEAAIATAAIAnABQAEAAADgDQADgDAAgEIAAAAIApABQAAAEACADQADADAEABIA9AEQAEAAADgDQADgCAAgEIAoAEIAAAAQgBAEADADQACAEAEAAIAzAHIAHABQAEAAADgCQAEgDAAgEIABAAIAmAHIAAAAQAAAEACADQACAEAEAAIA7AMQAEABADgCQADgCABgEIAnAKQgBAEADAEQACADADABIA6ARQAEABADgCQAEgBABgEIAAgBIAnANQgCAEACAEQACAEAEABIA4AWQAEABADgBQAEgCACgEIAAAAIAmAQIgBABQgBADABAEQABAEAEACIA2AaQAEABAEgBQAEgBACgEIAkATQgDAEACAEQABAEADACIA0AfQAEACAEgBQAEgBACgEIAiAWQgCAEAAAEQABAEAEACIAxAjQADACAEAAQAEgBADgDIAAgBIAfAYQgCAEAAAEQABAEADACIAhAbIAAABIAJAHQADACAEAAQAEAAADgDIAdAaQgCADAAAEQAAAEADADIArApQADADAEAAQAEAAACgDIAcAdQgDADAAAEQAAAEADADIAnAtQADAEAEAAQAEABADgDIAZAfIgBABQgDACgBAEQAAAEACAEQASAXAQAZQADAEAEAAQAEABADgCIABAAIAVAiQgEACgBAEQgBAEACADQAPAaAOAaQACAEAEABQAEABADgBIARAjQgEACgBAEQgCAEACAEQAMAbAKAcQACADAEACQADACAEgCIABAAIANAnIgBAAQgEABgBAEQgCAEABAEQAJAcAGAcQABAEAEADQAEACAEgBIAAAAIAIAnQgEABgCADQgDADABAEQAFAeAEAeQAAAEAEACQADADAEAAIAAAAIAEAoQgEAAgDADQgDADABAEQACAeAAAfQAAAEADADQADADAEAAIAAAHIAAAbQgEAAgDADQgDADAAAEQgBAegDAdQAAAEACADQADADAEABIgEAnQgEAAgDACQgEADAAAEQgEAdgGAeQgBAEACADQADADADABIgJAnQgDAAgEACQgDACgBAEQgIAcgJAcQgCAEACAEQACAEAEABIgOAmQgEgCgDACQgEACgBADQgLAcgNAbQgCAEACAEQABADAEACIgSAkQgEgCgEABQgEABgCAEQgNAagQAaQgCADABAEQAAAEAEADIgWAiIAAgBQgEgCgEABQgEABgDADQgQAYgTAYQgCADAAAEQABAFADACIAAAAIgZAgQgDgDgEAAQgFAAgCAEIgoAtQgDADAAAEQAAAEADADIgdAdQgDgDgDAAQgFAAgDADIgsAoQgDACAAAFQAAAEADADIgQANIAHARQgEACgCADQgCAEACAEQAKAcAIAdQABAEAEACQAEACAEgBIAKAnQgEABgCADQgCAEABAEQAGAdAFAeQABAEADACQADADAFgBIAFAoQgEABgDADQgCADAAAEQADAdACAeQAAAEADADQADADAEAAIABAAIABAoQgEAAgDADQgDADAAAEIAAAEQAAAbgCAbQAAAEADADQADADAEABIAAAAIgDAnIAAAAQgEAAgDACQgEADAAAEQgDAegFAdQAAAEACAEQADADAEABIgHAnQgFgBgDACQgEACgBAEQgGAegIAcQgBAEACAEQACAEAEABIAAAAIgMAmIAAAAQgEgBgEACQgDABgCAEQgKAdgLAbQgCAEACAEQACAEAEABIAAAAIgRAlIAAAAQgEgCgEACQgDABgCAEQgNAagPAbQgCADABAEQABAEAEACIAAAAIgVAkIAAAAQgEgDgEABQgEABgCAEQgQAZgSAZQgCADAAAEQABAEAEADIAAAAIgZAgQgDgCgEAAQgEABgDADIgmAtQgDADAAAEQAAAEADADIABAAIgcAeIAAAAQgDgDgFAAQgEAAgDADIgrArQgDADAAAEQAAAFADADIgeAaQgCgDgEAAQgEAAgDADIgXASIgVASQgEADAAAEQgBAEADADIggAZQgCgDgEgBQgEAAgEACIgwAjQgDACgBAEQgBAEACAEIghAWQgCgEgEgBQgFgBgDADIgzAeQgEADgBAEQgBAEACADIAAAAIgiATIAAAAQgCgEgEgBQgEgBgEACIg1AbQgEABgBAEQgCAEACAEIgmARQgBgEgEgCQgEgBgEABIgpARIAAAAIgMAEQgDABgCAEQgCAEABAEIAAAAIglANQgCgEgDgBQgEgCgEABQgcAJgdAIQgEABgCAEQgCAEABAEIgmAKQgBgEgEgCQgEgDgEABIg6ANQgEABgCAEQgCADABAEIgnAHQgBgEgEgCQgDgCgEAAIg7AJQgEABgDADQgCADAAAEIgoAEQAAgEgEgCQgDgDgEABQgdADgeABQgEAAgDADQgDADAAAFIgoABQAAgDgDgDQgDgDgEAAIg5ABIgEAAQgEAAgDADQgDADAAAEIgogBQAAgEgDgDQgCgDgEAAIg7gDQgEAAgDADQgDACAAAFIgBAAIgpgEIAAAAQAAgEgDgDQgCgDgEgBIg7gHQgFAAgDACQgDADgBAEIAAAAIgngGIAAAAQABgEgCgEQgCgDgFgBIg6gLQgEAAgDACQgEACgBAEIAAAAIgmgIIAAgBQABgEgCgDQgCgEgEgBIg5gPQgEgBgEACQgDACgBAEIgmgLIAAgBQABgEgCgDQgCgEgDgBIg4gUQgEgCgEACQgEACgBAEIAAAAIgngQIAAgBQAAgEgDgDQgDgDgEAAQgFAAgCADIgrArQgDADAAAEQAAAEACADIgdAbQgDgDgEAAQgEgBgDADIgbAXIAAAAIgTAPQgDADAAAEQgBAEADADIAAABIgfAYQgDgDgEgBQgEAAgDACIgwAjQgEACgBAEQAAAEACAEIghAWQgCgEgEgBQgEgBgEADIgzAeQgDADgCAEQgBAEACADIgiATQgCgDgEgBQgEgCgDACIg1AbQgEACgCAEQgBAEABADIgkAQQgBgDgEgCQgEgBgDABIg4AWQgEACgBAEQgCADABAEIglANQgCgEgDgBQgEgCgEABIg4ASQgEABgCAEQgCADABAEIgnALQgBgEgDgCQgEgDgEABIg6ANQgEABgCAEQgDADABAEIgnAHQgBgEgDgCQgDgCgEAAIg8AJQgEABgCADQgDADABAEIgoAFQAAgEgEgDQgDgCgEAAIg7AFQgEAAgDAEQgCADAAADIgoACQAAgEgEgDQgCgCgFAAIg+ABQgEAAgDADQgDADAAAEIgogBg");
	this.shape_22.setTransform(514.6,425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(206.2,224.1,616.9,402);
p.frameBounds = [rect];


(lib.OpenMe_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdEAQgOgMAAgPQAAgRAOgMQANgMASAAQASAAALAMQANAMAAARQAAAPgNAMQgLAMgSAAQgSAAgNgMgAgdBwQAAg1gFh3QgFh3ABg1QgBgQAMgKQALgIASgBQASAAAIAKQAJAKAAAPIgCCsIgBCsQAAAKgLAGQgKAGgLAAQggAAABgWg");
	this.shape.setTransform(640.8,453.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABOCnIhOh3IhNB3QgGAJgOAAQgOAAgQgNQgRgMAAgNQAAgHAFgGIBZh/IhVh6QgFgGAAgGQAAgOARgMQARgMAQAAQAMgBAGAJIBIBzIBKhyQAFgKANABQAPAAARAMQARAMAAAOQAAAGgFAGIhWB6IBaB/QAFAGAAAHQAAAMgQANQgRANgPAAQgNAAgGgJg");
	this.shape_1.setTransform(617.1,462.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhnCFQgtgsAAg4IAAhCQAAg4AsgrQAsgqA8AAQA8AAAtApQAsArAAA5IAABCQAAA4gtArQgtArg7ABQg7AAgsgrgAgzhUQgVAXgBAcIAABBQABAeAVAWQAWAYAdAAQAdAAAXgYQAVgWABgeIAAhBQgBgcgVgXQgXgXgdAAQgdAAgWAXg");
	this.shape_2.setTransform(583.6,462.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah/EHQgPAAgJgHQgKgHAAgKIAAncQAAgLAKgHQAKgHAOAAICCAAQBDAAAnAbQAoAcAABGQAABZg+AbQAlAPATAaQATAbAAAzIAAAOQAABPgnAkQgnAkhCAAgAhVDDIBZAAQBRAAAAhZIAAgLQAAgugUgVQgVgUgoAAIhZAAgAhVgzIBVAAQBIAAAAhKQAAhFhJAAIhUAAg");
	this.shape_3.setTransform(547.2,453.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhjCIQgvgoAAg/IAAhEQAAg5AsgpQAsgpA9AAQA7gBAqAmQArAmAAA4QAAAXgFANQgGAMgKAGQgLAFgJACQgKACgPgBIiXAAIAAARQAAAkAaAVQAaAWApAAQAdAAAagOQAbgOAFABQANgBAIAMQAJAMAAALQAAARgiATQgjASgzAAQhIAAgvgogAgwhjQgWATAAAdIAAAYIB3AAQAPgBAGgEQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_4.setTransform(495,462.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhjCIQgvgoAAg/IAAhEQAAg5AsgpQAsgpA9AAQA7gBAqAmQArAmAAA4QAAAXgFANQgGAMgKAGQgLAFgJACQgKACgPgBIiXAAIAAARQAAAkAaAVQAaAWApAAQAdAAAagOQAbgOAFABQANgBAIAMQAJAMAAALQAAARgiATQgjASgzAAQhIAAgvgogAgwhjQgWATAAAdIAAAYIB3AAQAPgBAGgEQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_5.setTransform(460.9,462.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah/EHQgPAAgJgHQgKgHAAgKIAAncQAAgLAKgHQAKgHAOAAICCAAQBDAAAnAbQAoAcAABGQAABZg+AbQAlAPATAaQATAbAAAzIAAAOQAABPgnAkQgnAkhCAAgAhVDDIBZAAQBRAAAAhZIAAgLQAAgugUgVQgVgUgoAAIhZAAgAhVgzIBVAAQBIAAAAhKQAAhFhJAAIhUAAg");
	this.shape_6.setTransform(424.7,453.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhjCIQgvgoAAhAIAAhDQAAg5AsgpQAsgqA9AAQA7AAAqAmQArAmAAA5QAAAWgFANQgGAMgKAGQgLAGgJABQgKABgPABIiXAAIAAAQQAAAlAaAUQAaAWApAAQAdAAAagOQAbgOAFAAQANAAAIANQAJAKAAALQAAATgiARQgjATgzgBQhIAAgvgngAgwhiQgWASAAAeIAAAXIB3AAQAPAAAGgFQAFgEAAgNQAAgcgUgUQgWgUgeAAQgeAAgVATg");
	this.shape_7.setTransform(637.9,369.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABSEJQgMgHAAgMIAAixQAAgdgUgXQgWgWgdAAQgbAAgVATQgVAVAAAiIAACxQAAAJgMAJQgLAHgQAAQgPAAgLgHQgLgJABgJIAAntQAAgKAKgHQAKgGAQAAQARAAALAGQALAHAAALIAADlQALgYAYgQQAZgQAfAAQAzAAAlAqQAlAoAAA6IAACzQAAAMgMAHQgLAGgPAAQgOAAgMgGg");
	this.shape_8.setTransform(602.3,359.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAiD5Qh9AAAAhwIAAloQAAgKAMgIQALgHAPAAQAOAAALAHQAMAIABAKIAACDIBXAAQAIAAAGAJQAGAIAAAMQAAALgGAIQgGAJgIAAIhXAAIAACsQAAAaALAKQAKALAcAAIAZAAQAQAAAIAKQAJAJAAANQAAAOgJAJQgIAKgQAAg");
	this.shape_9.setTransform(573,361.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABSCmQgLgHAAgLIAAixQAAgdgVgXQgWgXgdAAQgbAAgVAUQgUAVgBAiIAACxQAAAJgMAIQgLAIgPAAQgQAAgLgIQgLgIABgKIAAkiQgBgLALgHQAKgHARAAQAPAAAKAHQAJAHAAALIAAAbQAMgYAZgQQAZgQAiAAQAyAAAlAqQAlAqAAA6IAACxQAAAMgLAHQgLAHgQAAQgOAAgMgHg");
	this.shape_10.setTransform(527.1,369.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhjCIQgvgoAAhAIAAhDQAAg5AsgpQAsgqA9AAQA7AAAqAmQArAmAAA5QAAAWgFANQgGAMgKAGQgLAGgJABQgKABgPABIiXAAIAAAQQAAAlAaAUQAaAWApAAQAdAAAagOQAbgOAFAAQANAAAIANQAJAKAAALQAAATgiARQgjATgzgBQhIAAgvgngAgwhiQgWASAAAeIAAAXIB3AAQAPAAAGgFQAFgEAAgNQAAgcgUgUQgWgUgeAAQgeAAgVATg");
	this.shape_11.setTransform(491.7,369.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiJD2QgLgHABgKIAAnFQgBgLALgHQAKgHAQAAQAPAAAJAHQALAHAAALIAAAbQANgYAZgQQAagQAfAAQA2AAAmAqQAmApAAA7IAABCQAAA3gnAsQgmArgyAAQgeAAgbgQQgagRgLgYIAAC9QAAAKgLAHQgMAIgQAAQgQAAgKgIgAgzilQgVAVAAAhIAABSQAAAQAWAVQAWAWAcAAQAdAAAWgYQAWgWAAgdIAAhCQAAgcgWgXQgWgXgeAAQgcAAgWAUg");
	this.shape_12.setTransform(456.8,377.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah0DiQgsgmgBhTIAAjQQABhTAsgnQArgnBJAAQBJAAAsAnQAsAnABBTIAADQQgBBTgsAmQgsAnhJAAQhJAAgrgngAhUhnIAADQQAABdBUAAQApAAAWgXQAWgXAAgvIAAjQQAAgvgWgXQgWgXgpAAQhUAAAABdg");
	this.shape_13.setTransform(417.6,360.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AnxfXQgDgDAAgEQAAgEADgDQADgDAEAAIA/gBQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAIg/ABQgEAAgDgDgAomfZIg8gDQgEgBgCgDQgDgDAAgEIAAAAQAAgEAEgDQADgDAEABIA7ADQAEAAADADQADADgBAEIAAAAQAAAEgDADQgDADgDAAIgBAAgAl1fUQgEgDAAgEIAAgBQAAgDADgDQACgDAEgBIA7gFQAFAAADADQADACAAAEIAAAAQABAEgDADQgCAEgFAAIg7AFIgBAAQgEAAgCgCgAqdfRIg8gHQgEgBgDgDQgCgDAAgDIAAgBQABgFADgCQADgDAEABIA7AHQAFAAACADQADAEgBAEIAAABQAAADgDADQgDACgDAAIgBAAgAj+fIQgDgCgBgFQgBgEADgDQADgDAEgBIA7gIQAEgBADACQAEACAAAFQABAEgCADQgDADgEABIg8AJIgBAAQgDAAgDgCgAsUfAIg7gKQgEgBgCgEQgCgDAAgDIAAgBQABgEAEgCQADgDAEABIA6ALQAEABADADQACADgBAEIAAACQgBADgDACQgCACgDAAIgCgBgAiIe1QgDgDgBgEQgBgEADgDQACgEAEAAIA6gOQAEAAAEACQADACABAEIAAAAQABAEgCAEQgCADgEABIg7ANIgCAAQgDAAgDgBgAuKeoIg6gOQgEgCgCgDQgBgDAAgEIAAgBQACgEADgCQAEgCAEABIA5APQAEABACAEQACADgBAEIAAACQgBADgDABQgDACgCAAIgDgBgAgSeZQgDgDgBgDIAAgBQgCgEACgDQACgEAEgBIA4gSQAEgBAEACQAEACABADQABAEgCAEQgBAEgEABIg5ASIgDABIgFgBgAv9eIIg5gUQgEgBgBgEQgCgDABgEIAAgBQACgEADgBQAEgCAEABIA4AUQAEACACADQACAEgCAEIAAABQgBADgDACIgFABIgDgBgABgdzQgEgCgBgEIAAAAQgCgEACgDQACgEADgCIA4gVQAEgCADACQAEABACADIAAABQABAEgBADQgCAEgEACIg3AWIgEABIgEgBgAxudeIg3gYQgEgCgBgEQgBgDABgEIABAAQABgEAEgCQAEgBAEACIA2AXQAEACABAEQACAEgCADIAAACQgCADgDABIgEABIgEgBgADPdFQgEgCgCgDIAAgBQgCgDACgEQABgEAEgCIA1gbQADgBAEABQAEABACADIAAABQACADgBAEQgBAEgEACIg2AbIgEABIgDAAgAzbcsQgagOgbgPQgDgCgBgEQgBgEACgDIAAgBQACgDAEgCQAEgBADACQAaAPAaAOQAEACACAEQABAEgCADIAAABQgCADgEABIgDABIgFgBgAE5cNQgEgBgCgEQgCgDABgEQABgEAEgDIAzgeQADgCAEAAQAEABACAEIAAAAQADADgBAFQgBAEgEACIg0AfIgEABIgDAAgA1CbxIgygiQgEgCAAgEQgBgEACgDIAAAAQADgEAEgBQAEAAADACIAyAhQADACABAEQABAEgDAEQgCADgEABIgCAAQgDAAgCgBgAGfbNQgEgBgDgDQgCgDABgEQAAgFAEgCIAwgjQADgCAEAAQAFABACADQADAEgBAEQgBAEgDACIgxAkQgCABgDAAIgCAAgA2latIgwgmQgEgCAAgEQAAgEACgDIAAAAQADgEAEAAQAEgBADADIAwAlQADACABAEQABAEgDAEIAAAAQgDADgEABIgBAAQgDAAgDgCgAH/aFQgEAAgDgDIAAAAQgCgEAAgEQAAgEAEgDIASgPIAAAAIAbgXQADgCAEAAQAFAAACADQADADAAAEQAAAEgDADIgcAYIAAAAIgTAPQgDACgDAAIgBAAgAUIaFQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAEAAIA5gBQAEAAADADQADADAAAEIAAAAQABAEgDADQgDADgEAAIg6ABIgEAAgATMaEIg7gDQgEAAgDgDQgCgDAAgEQAAgEADgDQADgDAEAAIA7ADQAEAAADADQADADgBAEQAAAEgDADQgDADgDAAIgBAAgAV7Z/QgDgDAAgEQgBgEADgDQADgEAEAAQAegBAdgDQAFgBADADQADADABAEIAAAAQAAAEgDADQgCADgEABQgeADgfABIgBAAQgDAAgDgCgARTZ8Ig8gHQgEAAgDgEQgCgDABgEIAAAAQAAgEADgDQAEgCAEAAIA7AHQAEABADADQACADAAAEIAAAAQgBAEgDADQgDACgDAAIgBAAgAX0Z0QgEgCgBgFIAAAAQAAgEACgDQADgDAEgBIA7gJQAEAAAEACQADACABAFQABAEgDADQgCADgEABIg8AJIgCAAQgDAAgCgCgAPcZsIg6gLQgFgBgCgDQgCgEABgDIAAgBQABgEADgCQADgCAEABIA7AKQAEABACADQADAEgBAEIAAAAQgBAEgDACQgDACgDAAIgCAAgAZqZhQgDgDgBgEQgBgEACgDQADgEADAAIA7gOQAEAAADACQAEACABAEQABAEgCADQgDAEgEABIg6ANIgDAAQgCAAgDgBgA4HZeIgsgpQgDgCAAgFQAAgEADgCIAAgBQADgDAEAAQAEAAADADIAsAoQADADAAAEQAAAEgDAEQgCADgEAAIgBAAQgEAAgDgDgANoZUIg6gPQgEgBgCgEQgCgDABgFQABgDADgCQAEgDAEACIA5AOQAEABACAEQADAEgBAEIAAAAQgBAEgEACQgCABgDAAIgCAAgAbfZFQgEgCgBgEQgBgEACgEQACgDAEgBQAdgIAcgKQAEgBAEACQAEACABAEQABADgBAEQgCAEgEABQgdAKgdAIIgDAAIgFgBgAJaY2QgEAAgDgDQgDgDAAgEQAAgEADgDIArgrQADgDAEAAQAEAAADADQADADAAAEIAAABQAAAEgDACIgrAsQgDACgEAAIAAAAgAL0YzIg4gUQgEgCgCgEQgBgDABgEIAAAAQACgEADgCQAEgBAEABIA4AUQAEABACAEQABAEgBADIAAABQgBADgEACIgEABIgEAAgAdRYgQgDgCgCgEIAAAAQgBgEACgEQACgDAEgCIALgEIAAAAIAqgRQAEgBADABQAEACABAEIABAAQABAEgBAEQgCADgEACIgpAQIAAAAIgNAFIgDABIgFgBgA5XYPQgEAAgDgDIgogsQgDgDAAgEQABgEADgDIAAgBQADgCAEAAQAEAAADADIAoAsQADADgBAEQAAAEgCADIAAAAQgDADgEAAIgBAAgAfAXyQgEgBgCgEIAAAAQgBgEABgEQABgDAEgCIA1gbQAEgCAEABQAEABACAEIAAAAQACAEgCAEQgBAEgDACIg2AbIgFABIgDgBgEAgrAW7QgEgBgDgEIAAAAQgCgDABgEQABgEAEgDIAzgeQAEgCAEABQAEAAACAEQACADgBAEQgBAFgDACIg0AfIgFABIgCAAgA6mW2QgEgBgDgDQgTgYgRgYQgCgDABgFQAAgEAEgCIAAAAQADgCAEAAQAEABADAEQARAXASAXQACAEAAAEQAAAEgEACIAAABQgDACgDAAIgBAAgEAiRAV7QgEgBgCgDIAAAAQgDgDABgFQABgEADgCIAwgjQAEgCAEAAQAEABACADQADAEAAAEQgBAEgEACIgwAjQgDACgDAAIgCAAgA7sVUQgEAAgCgEQgRgZgOgaQgCgEABgEQABgEADgCIABAAQADgCAEABQAEABACAEQAPAaAPAYQADAEgBAEQgBAEgEACIAAAAQgCACgDAAIgCgBgEAjyAUzQgEAAgDgEQgCgDAAgEQAAgEAEgDIAWgSIAWgSQADgDAEAAQAEABADACIAAABQADADgBAEQAAAEgDADIgXATIgWASQgDACgDAAIgBAAgA8oTtQgEgCgCgDQgNgbgLgbQgCgEACgEQABgEAEgBQAEgCAEACQAEABABAEQAMAaAMAbQACAEgBAEQgBADgEACIAAAAIgFABIgDAAgEAlLATmQgEAAgDgDQgDgDABgEQAAgFACgCIAsgsQADgDAEAAQAEAAADADIAAAAQADADAAAEQAAAEgDADIgsAsQgCADgEAAIgBAAgEAmaASMIAAgBQgDgDgBgEQAAgEADgDIAmgtQADgDAEgBQAEAAADACQAEADAAAEQAAAEgCAEIgnAuQgDADgEAAIgBAAQgDAAgDgCgA9XSAQgEgCgBgEIgDgJIgQgzQgBgEACgEQACgDAEgBIAAAAQAEgBADACQAEACABAEIAQAxIADAJQABAEgCAEQgBAEgEABIAAAAIgEABIgEgBgEAnmAQuIAAAAQgEgDAAgEQgBgEADgDQARgZAQgZQACgEAEAAQAEgBAEACIAAAAQADACABAEQABAEgCADQgQAagTAZQgCAEgEABIgCAAQgDAAgCgCgA95QKQgEgCgBgEQgGgegFgeQgBgEACgDQADgDAEgBIAAAAQAEgBADADQAEACAAAEQAFAdAHAdQABAEgDAEQgCADgEABIAAAAIgCAAQgDAAgCgBgEAooAPHIAAAAQgEgCgBgEQgBgEACgDQAPgaANgbQACgEAEgBQAEgCADACIAAAAQAEACABAEQACAEgCAEQgNAbgPAbQgCADgEABIgDABIgFgCgA+OOSQgDgCgBgEQgDgegCgfQAAgEADgDQADgEAEAAQAEAAADADQADADABAEQABAeADAdQABAFgDADQgCADgEABIgBAAIAAAAQgEAAgDgDgEApeANcIAAAAQgEgCgCgEQgBgEABgDQAMgcAJgdQACgDAEgCQADgCAEABIAAAAQAEACACADQACAEgCAEQgKAdgLAcQgCAEgEACIgDAAIgEAAgA+VMaQgDgDAAgEQAAgeABgeQABgEADgDQADgDAEAAQAEAAADAEQADADAAAEQgCAdAAAeQAAAEgDADQgDADgEAAQgEAAgDgDgEAqHALqIgBAAQgEgBgCgEQgCgDABgEQAIgdAHgdQABgFADgCQAEgCAEABQAEABACADQACAEgBAEQgGAegIAdQgBAEgEACIgFABIgCAAgA+JKlIAAAAQgEAAgDgEQgCgDAAgEQADgeAFgdQABgFADgCQAEgCAEABQAEAAACADQADAEgBAEQgFAdgDAdQAAAEgEADQgCACgEAAIgBAAgEAqhAJ1QgEgBgDgDQgCgEABgEQAEgdADgeQAAgEAEgCQADgDAEAAIAAAAQAEABADADQACADAAAEQgDAfgFAdQAAAEgEADQgCACgEAAIgBAAgA+vJUIg7gNQgEAAgCgEQgCgDABgFIAAAAQABgEADgCQAEgCAEABIA6AMQAEABACADQADADgBAFIAAAAQgBAEgDACQgDACgDAAIgCAAgEggkAI5Ig6gRQgDgCgCgDQgCgEABgEQABgEAEgBQAEgCADABIA6ARQAEABACADQACAEgBAEIAAAAQgBAEgEACIgFABIgDAAgEgiWAIVIg4gWQgEgBgCgEQgBgEABgDQACgEAEgCQADgCAEACIA3AVQAEABACAEQACAEgCADIAAABQgBADgEACIgEABIgDAAgEAquAH+IAAAAQgEAAgDgDQgDgEAAgEQACgaAAgcIAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAEQAAAcgCAbQAAAEgDADQgDADgDAAIgBAAgEgkGAHoIg1gaQgEgCgCgEQgBgEACgEIAAAAQACgDAEgCQAEgBAEACIA1AaQAEABABAEQABAEgCAEIAAAAQgBAEgEABIgDABIgFgBgEglwAGyIg0geQgEgCgBgEQgBgEACgDIABgBQACgEAEgBQAEAAADACIAzAeQAEACABADQABAEgCAEIAAAAQgCAEgEABIgDAAIgEgBgEAqnAGEQgDgDAAgEQgCgdgDgeQAAgEADgDQACgDAEgBIAAAAQAFAAADACQADADABAEQADAeABAeQAAAEgDAEQgCACgEABIgBAAIAAAAQgEAAgDgDgEgnXAF0IgxgiQgDgCgBgEQgBgEADgDIAAgBQACgDAEgBQAEAAAEACIAwAhQADACABAEQABAEgCAEIAAAAQgDADgEABIgCAAQgCAAgDgBgEgo3AEuIgpghIgBAAIAAgBIgtgmQgDgDAAgEQAAgEACgDIABAAQADgDAEAAQAEAAADACIArAmIABABIAAAAIAoAgQAEADAAAEQABAEgDADIAAABQgCADgEAAIgCAAQgDAAgCgCgEAqbAENQgDgCgBgEQgFgegGgdQgBgEACgEQACgDAEgBIAAAAQAEgBAEACQADACABAFQAHAdAFAeQAAAFgCADQgCADgEABIgCAAQgDAAgDgCgEgq6AC9IgpgrQgDgDAAgEQAAgEADgDIABgBQADgCADAAQAEAAADADIAqArQACADAAAEQABAEgDACIAAABQgDADgFAAIAAAAQgEAAgDgDgEAqBACYQgDgCgBgEQgJgdgKgcQgBgEACgDQABgEAEgCIAAAAQAEgBAEACQAEACABAEQAKAcAJAdQABAEgCAEQgCAEgEABIgDAAIgFgBgEgsEABpQgEgBgDgDIgmgvQgCgDABgEQAAgEADgDIABAAQADgCAEAAQAEABADADIAlAuQACADAAAEQAAAEgDADIAAAAQgDADgEAAIgBAAgEAqAAAxQgEAAgDgDIAAAAQgDgDAAgEQABgEADgDIArgoQAEgDAEAAQAEAAADADIAAAAQADADgBAEQAAAEgCACIgtAqQgDACgDAAIgBAAgEgtNAAKQgEgBgCgEQgRgXgQgZQgCgEABgEQABgEAEgCIAAAAQAEgCAEABQADAAACAEQAPAZARAYQADADgBAEQgBAEgDACQgDACgDAAIgCAAgEArQgAlQgDgDAAgEQAAgEADgDIAogtQADgDAEgBQAEAAADADQADACAAAEQABAFgDADIgpAtQgDAEgEAAIAAAAQgEAAgDgDgEguLgBbQgEgBgCgDQgOgbgNgbQgCgEABgEQACgEAEgCQAEgCAEACQADABACAEQAMAbAOAaQACAEgBAEQgBAEgEABIgEACIgDgBgEAsggCBIAAAAQgEgCgBgFQAAgEACgDQATgYARgYQACgDAEgBQAEgBAEADIAAAAQADACABAEQABAEgDADQgRAZgTAYQgCAEgEAAIgCAAQgDAAgCgCgEgu+gDIQgEgCgCgDIgPgoIgGgSQgBgEACgEQACgDAEgCIAAAAQAEgBAEACQADACABADIAGASIAPAnQABAEgBAEQgCADgEACIAAAAIgEABIgDgBgEAtlgDjQgDgCgBgFQgBgDACgEQAQgaAOgaQACgEADgBQAFgBADACQAEACABAEQABAEgCAEQgOAagQAbQgCADgEABIgDAAQgCAAgDgBgEgvlgE7QgDgCgBgEIgOg7QgBgEADgDQACgEAEAAIAAAAQAEgBAEACQADACABAEIANA6QABAEgCADQgCAEgEABIgCAAQgDAAgDgBgEAufgFNIAAAAQgEgCgBgDQgBgEABgEQANgbALgbQABgEAEgCQAEgCADACIABAAQAEABABAEQACAEgCAEQgLAcgNAcQgBADgEACIgDAAIgFgBgEgv9gGxQgDgDgBgEQgEgegDgeQAAgEADgDQACgDAEgBIABAAQAEAAADADQADACAAAFQADAdAEAdQABAFgDADQgDADgEABIAAAAIgBAAQgDAAgDgCgEAvMgG8IAAAAQgEgBgCgEQgBgEABgDQAJgdAIgcQABgEAEgCQADgCADABIABAAQAEABACADQACAEgBAEQgHAdgKAdQgBAEgEACIgEABIgEgBgEgwIgIpQgDgDAAgFIAAgjIAAgZQAAgEADgDQADgDAEAAIABAAQAEAAACAEQADADAAAEIAAAYIAAAjQAAAEgDADQgDADgEAAIAAAAQgEAAgDgCgEAvsgIwIgBAAQgDAAgCgEQgDgDABgEQAGgdAEgeQABgEADgDQADgCAEAAIAAAAQAEABADADQADADgBAFQgEAegGAeQgBAEgEACQgCACgDAAIgCgBgEgv/gKeIAAAAQgEgBgDgDQgDgDAAgEQADgeAEgeQABgEADgDQADgCAEAAIAAAAQAEABADADQADADgBAEQgEAegDAeQAAAEgDADQgDACgDAAIgBAAgEAv+gKmIgBAAQgEgBgCgDQgDgDAAgEQADgdABgeQAAgEADgDQADgDAEAAQAEAAADAEQADACAAAEQgBAfgCAdQgBAFgDADQgDACgDAAIgBAAgEgvwgMVIgBAAQgEgBgCgEQgCgDABgEQAFgeAHgdQABgFAEgCQADgCAEABQAEABACADQADAEgBAEQgHAdgGAeQAAAEgEACQgCACgDAAIgCAAgEAv7gMbQgCgDAAgEQgBgfgCgdQAAgFADgDQACgDAEAAQAEgBADADQAEADAAAEQACAeAAAfQABAFgDADQgDADgEAAIgBAAIAAAAQgEAAgDgDgEgvUgOLIgBAAQgDgCgCgDQgCgEABgEIAIgbIALgcQACgEAEgCQADgCAEACIAAAAQAEABACAEQABAEgBAEIgLAcIgIAaQgBAEgEACIgEABIgDAAgEAv0gOTQgEgDAAgEQgDgegGgeQgBgEADgDQACgDAEgBQAEgBAEACQADADABAEQAFAeAEAfQAAAEgCADQgDADgEABIAAAAIgBAAQgDAAgDgCgEgusgP6IAAAAQgEgCgBgEQgCgEACgDQAMgcAPgbQABgEAEgBQAEgBAEABIAAAAQAEACABAEQABAEgBAEQgOAbgNAbQgCAEgEABIgDABIgEgBgEAvfgQJQgDgCgBgEQgHgdgJgcQgBgEACgEQACgDADgCIABAAQAEgBADACQAEACABAEQAJAdAHAdQABAEgCADQgCAEgEABIAAAAIgDAAQgCAAgDgBgEgt1gRmQgEgCgBgEQgBgEACgDQAQgaARgZQACgEAEAAQAEgBADACQAEACABAEQABAEgDAEQgRAZgOAZQgDADgEABIgCABQgDAAgCgCgEAu9gR8QgEgBgBgEQgLgcgMgbQgBgEABgEQACgEAEgBQADgCAEACQAEABACAEQAMAbAKAdQACAEgCADQgCAEgDACIgBAAIgDAAIgEgBgEgszgTJQgEgDgBgEQAAgEACgDIAmgwQACgDAEAAQAFgBADADIAAAAQADADAAAEQABAEgDADIglAvQgCADgEABIgBAAQgEAAgCgCgEAuOgTpQgEgBgCgEQgNgagQgaQgCgDABgEQABgEAEgCQAEgCADABQAEABACADQAQAbAOAaQACAEgCAEQgBAEgDACIgFABIgDgBgEgrogUmIAAAAQgDgDAAgFQAAgEADgDIApgqQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgpAqQgDADgEAAIAAAAQgEAAgDgCgEAtSgVQQgEAAgCgEQgRgYgSgYQgCgEABgEQAAgEADgCIABAAQADgDAEABQAEAAADAEQASAYAQAZQADAEgBAEQgBAEgDACIgBAAQgCACgDAAIgCgBgEgqOgV3QgEAAgDgDIAAAAQgDgDAAgEQABgEACgDQAWgVAYgTQADgDAEAAQAFABACADIAAAAQADADgBAEQAAAEgDADQgXATgVAVQgDACgEAAIgBAAgEAsMgWwQgEAAgDgEIgngtQgDgDAAgEQABgEACgCIABgBQADgCAEAAQAEAAADADIAoAuQACADAAAEQAAAEgEADIAAAAQgDACgDAAIgBAAgEgovgXIQgEAAgDgDIAAgBQgCgDAAgEQAAgEAEgDIAvgkQAEgCAEABQAEAAADADIAAABQACADgBAEQAAAEgDACIgwAkQgDACgDAAIgBAAgEAq1gYMIgrgpQgDgDAAgEQAAgEACgDIABAAQADgDAEAAQAEAAADACIArAqQADADAAAEQAAAEgDADIAAAAQgDADgEAAQgEAAgDgDgEgnPgYOQgEgBgCgDIAAAAQgDgEABgEQABgEAEgCIAyggQAEgCAEAAQAEABACAEIAAAAQACAEgBAEQgBAEgDACIgzAfQgCACgDAAIgCAAgEglqgZMQgDgBgCgDIgBgBQgCgEACgDQABgEADgDQAbgOAbgNQAEgCAEABQAEACACAEIAAAAQABADgBAEQgBAEgEACQgbANgaAOIgFABIgDAAgEApegZcIgJgHIAAAAIghgbQgDgDgBgEQAAgEADgEQACgDAEAAQAEgBAEADIAhAbIAAAAIAJAIQADADAAAEQABAEgDADQgDADgEAAIgBAAQgDAAgDgCgAuA5hIgLgGQgDgCgCgDQgBgEACgDIAAgBQACgEAEgBQAEgBAEACIAFADIAhgWQADgCAFAAQAEABACAEIAAAAQACADgBAEQgBAEgDACIglAaQgDACgDAAIAAAAIgFgCgAvA5/QgbgNgcgLQgEgBgBgEQgCgEACgDIAAgBQABgDAEgCQAEgCAEACQAcALAcANQADABACAEQABAEgCAEQgBAEgEABIgEABIgEgBgEgj/gaCQgDgBgCgDIAAgBQgCgEACgDQABgEAEgCIA4gXQAEgCADACQAEACACADQABAEgBAEQgCAEgEACIg3AWIgEABIgEgBgAsl6XQgEgCgDgDIAAAAQgCgEABgEQABgEAEgCIA1gdQADgCAEABQAEABACAEQACAEgBAEQgBAEgEACIg0AdIgFABIgCAAgEAoFgaiIgxgjQgDgCgBgEQgBgEACgEQADgDADgBQAFgBADACIAyAkQADACABAEQABAEgDADIAAABQgCADgFABIgBAAQgDAAgDgCgAwv6sIg5gTQgDgBgCgEQgCgDABgEQABgEAEgCQAEgCAEABIA4ATQAEACACADQACAEgBAEIAAAAQgCAEgEACIgEABIgDgBgEgiPgauQgEgCgCgDQgBgEACgEQACgEAEgBQAcgKAegJQAEgBADACQAEACABAEIAAAAQABAEgCAEQgCADgEABQgdAJgcAKIgDAAIgEgBgALd7DIgkgRQgEgCgCgEQgBgEACgDQACgEAEgCQAEgBADACIAfAPIALgIQAEgCAEABQAEABACADIAAAAQACAEgBAEQgBAEgDACIgPAKQgCACgDAAIgBAAIgEgBgAq87QQgEgBgCgEQgCgEACgEQABgDAEgCIA2gZQAEgCAEACQAEABACAEIAAAAQABAEgBADQgCAEgEACIg2AZIgEABIgDgBgAyg7PIg7gPQgEAAgCgEQgCgDABgEQABgFADgCQAEgCAEABIA6AOQAEABADAEQACADgBAEIAAABQgCADgDACQgCACgDAAIgCAAgEggcgbRQgEgCgBgEIAAAAQgBgEACgEQADgDAEgCIA5gNQAEgBAEACQADACABAEIAAAAQABAEgCAEQgCADgEABIg6AOIgCAAQgDAAgCgBgEAmigblIg1gfQgDgCgBgEQgBgEACgEQACgDAEgBQAEgCAEADIA0AfQAEACABAEQABAEgCAEQgDADgEABIgCAAQgDAAgCgBgA0W7pIg7gKQgEgBgCgDQgDgEABgEQABgEADgCQADgDAEABIA8AKQAEABACADQADADgBAEIAAABQgBAEgDACQgDACgDAAIgCAAgA+o7rQgDgDgBgEIAAAAQAAgEACgDQACgEAEAAIA3gKIACAAIADAAQAEAAADADQACACABADIAAACQAAAEgDADQgDADgEAAIgDAAIg1AJIgCAAQgDAAgDgBgAKD7sIg5gWQgDgBgCgEQgCgEACgEIAAAAQABgEAEgBQAEgCADABIA5AWQAEACACAEQABAEgBAEQgCADgEACIgEABIgDgBgAMk7vQgEgBgCgDIAAgBQgCgDABgEQABgEADgCIA1geQAEgCAEABQAEABACADIAAABQACADgBAEQgCAEgDACIg1AeQgCABgDAAIgCAAgA2J77Ig7gGQgEAAgDgDQgDgDAAgFIAAAAQABgEADgDQADgCAEAAIA9AGQAEABACADQADADgBAEIAAABQAAAEgDACQgDACgEAAIgBAAgA8y79QgDgDgBgEIAAgBQAAgDADgEQACgDAEAAIA9gGQAEgBAEADQACADABAEIAAAAQAAAEgCADQgDADgEABIg8AGIgBAAQgEAAgDgCgApP8AQgEgBgBgEIgBAAQgBgEACgEQACgEAEgBIA5gUQAEgCAEACQAEACABAEIAAAAQABAEgCAEQgBADgEACIg6AUIgDAAIgEgBgA4B8FIg8gCQgEAAgDgDQgDgDABgEQAAgEACgDQAEgDAEAAIA9ACQAEAAACAEQADADAAAEIAAAAQAAAEgDADQgDACgEAAIgBAAgA658IQgDgDAAgEIAAAAQgBgEADgDQADgDAEAAIA9gCQAEAAADADQADACABAEIAAABQAAAEgDADQgDADgEAAIg9ACIgBAAQgDAAgDgDgAIS8WIg5gSQgEgBgCgEQgCgDABgEQACgEADgCQAEgCAEABIA6ASQAEACACADQABAEgBADIAAABQgBAEgEACIgEABIgEgBgEAk5gcgIg3gaQgDgCgCgEQgBgEABgDIABgBQABgDAEgBQAEgCAEACIA3AaQADACABADQACAEgCAEQgCAEgEABIgDABIgEgBgAnd8mQgDgCgBgEQgCgEACgDQACgEAEgBQAdgJAegHQAEgBAEACQADACABAEIAAAAQABAEgCAEQgCAEgEAAQgdAHgdAJIgDAAIgFgBgAON8pQgDgBgCgEIAAAAQgCgEABgEQABgDAEgCIA3gZQAEgCAEACQAEABABAEQACAEgCADQgBAEgEACIg2AZIgFABIgDgBgAGf83Ig6gMQgEgBgCgEQgDgDABgEIAAgBQABgDAEgCQADgDAEABIA7ANQAEABACAEQACADgBAEIAAAAQgBAEgDACQgDACgCAAIgDgBgAlo9DQgDgDgBgEIAAAAQgBgEACgDQACgEAFAAQAegHAfgFQAEgBADADQADACABAEIAAAAQABAEgDADQgCAEgEABQgfAFgeAGIgCAAQgDAAgCgBgAEq9OIgGgCIgSgDIABABIghgFQgEAAgDgEQgCgDAAgEQAAgEAEgCQADgDAEAAIAhAFIABAAIASADIAGABQAEABACADQACADAAAEIAAABQgBADgDADQgDACgDAAIgCAAgEAjLgdSIg4gWQgEgBgBgEQgCgEABgEIAAAAQABgEAEgBQAEgCAEABIA5AWQAEACABAEQACAEgCADIAAABQgBADgEACIgEABIgEgBgAjy9YQgDgDgBgEIAAAAQgBgEADgDQADgEAEAAIA9gHQAEgBADADQADADABAEIAAAAQAAAEgDADQgCADgEABIg9AHIgBAAQgDAAgDgCgAP69ZQgDgCgCgDIAAgBQgBgEABgDQACgEAEgCIA5gVQAEgBADACQAEACABAEQACADgCAEQgCAEgEABIg4AVIgEABIgEgBgAC29dQgegDgegCQgEAAgDgDQgDgDAAgEIAAgBQABgDADgDQADgDAEAAQAfACAeADQAEAAADADQACAEAAAEQAAAEgEADQgDACgDAAIgBAAgAh69kQgDgDAAgEIAAAAQAAgEADgDQACgEAEAAIA9gCQAEAAADACQADADAAAFQABAEgDADQgDADgEAAIg9ACIAAAAQgEAAgDgCgAA+9kIg5gBQgEAAgCgDQgCgDAAgEQAAgEACgDQACgDAEAAIA5ABQAEAAADADQADADAAAEIAAAAQAAAEgDADQgDADgEAAIAAAAgEAhagd7Ig5gQQgEgCgCgDQgCgEABgEQABgEADgCQAEgCAEABIA6ARQAEACACADQACAEgCAEIAAAAQgBAEgDACIgFABIgDgBgARs+AQgEgDgBgEIAAAAQgBgEACgDQACgEAEgBIA6gQQAEgBAEACQADACABAEIABAAQABAEgDAEQgCADgEABIg6AQIgDABIgEgBgAfn+bIg6gLQgEgBgDgEQgCgDABgEIAAAAQAAgEAEgCQADgDAEABIA7AMQAEABACADQADAEgBAEIAAAAQgBAEgEACQgCACgDAAIgCgBgATg+fQgDgCgBgEIgBgBQAAgDACgEQACgDAEgBIA8gMQAEgBAEACQADADABAEIAAAAQABAEgDAEQgCADgEAAIg7ANIgDAAQgCAAgDgCgAdy+wIgHgBIgygHQgEAAgDgEQgCgDAAgEIAAAAQABgEADgCQADgDAEAAIAzAHIAHABQAEAAACAEQADADgBAEQAAAEgEADQgCACgEAAIgBAAgAVU+1QgDgCgBgEQAAgEADgEQACgDAEgBQAegEAfgDQAEgBADADQAEADAAAEQAAAEgCADQgDADgEABQgeADgeAEIgBAAQgEAAgDgCgAb+++Ig9gEQgEAAgCgEQgDgDAAgEQAAgEADgDQADgCAFAAIA8AEQAEAAADADQADADgBAEIAAABQAAAEgDADQgDACgDAAIgBAAgAXN/CQgDgDgBgEQAAgEADgDQADgDAEgBIA8gDQAEAAADACQADADAAAEIAAAAQAAAEgDADQgCAEgEAAIg8ADIAAAAQgEAAgDgCgAaF/EIgngBIgTAAQgEAAgCgDQgDgDgBgEIAAAAQABgEADgDQACgDAEAAIATAAIAoABQAEAAADADQADADgBAEIAAAAQAAAEgCADQgDADgEAAIgBAAg");
	this.shape_14.setTransform(514.6,425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("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BADAEABQAEACAEgCIA3gXQAEgBACgEQABgEgBgEIAlgOQACAEADACQAEACAEgBQAcgKAdgJQAEgBACgEQACgDgBgEIAAgBIAngLIAAABQABAEAEACQADACAEgBIA5gOQAFgBACgEQACgDgBgEIAAAAIAogIIAAAAQABAEADACQADADAEgBIA2gJIADAAQAEAAADgDQADgDAAgEIgBgCIApgGIAAABQABAEADACQADADAEAAIA9gGQAEgBACgDQADgDAAgEIAAgBIAogCIAAAAQAAAEAEADQADADAEAAIA8gCQAFAAACgDQADgDAAgEIAOAAIAXAAQAAAEADADQADADAEAAIA8ACQAEAAADgCQAEgDAAgEIAAgBIAoADIAAAAQAAAEACAEQADADAFAAIA7AGQAEABADgDQAEgDAAgEIAAAAIAlAFQgBAEADAEQACADAEABIA7AJQAEABADgCQAEgDABgEIAAAAIAoAIQgBAFACADQACAEAEAAIA6AOQAEABAEgCQADgCACgDIAmALQgBAEABADQACAEAEABIA5ATQADABAEgBQAEgCABgEIAAAAIAnAOIAAAAQgCAEACAEQABAEAEABQAcALAbANQAEABAEgBQAEgCABgDIAkARQgCADABADQABAEAEACIALAGQACACADAAQADgBADgBIAlgaQADgCABgEQABgEgCgDIAbgQIAGgEQACADAEABQAEABAEgCIA0gdQAEgCABgDQABgEgCgEIAkgSQACAEADABQAEABAEgBIA2gZQAEgCACgEQABgDgBgEIAlgPQABAEADABQAEACAEgBIA5gUQAEgCACgDQACgEgBgEIAAAAIAmgMQABAEAEACQAEACAEgBQAcgJAdgHQAFgBACgDQACgEgBgEIAAAAIAngJIAAAAQABAEAEADQADACAEgBQAegHAfgFQAEAAACgEQADgDgBgEIAAAAIAVgDIARgDQABAEADADQADACAEAAIA8gHQAEgBADgDQACgDAAgEIApgDQAAAEADADQADACAEAAIA9gCQAEgBADgDQACgDAAgEIApAAQAAAEADADQACADAEAAIA5ABQAEAAADgDQADgDAAgEIAAAAIAoABIAAABQAAAEADADQADADAEAAQAeACAeADQAEAAADgDQADgCABgEIAoAEQgBAEADADQACAEAFAAIAgAFIAAgBIASADIAGABQAEABADgCQAEgDAAgEIAAAAIAoAHIAAABQgBAEACADQADAEAEAAIA6ANQAEABAEgCQADgCABgEIAAAAIAnAKQgBAEACADQACAEAEABIA5ASQAEABAEgBQADgCACgEIAAgBIAmAOIgBAAQgBAEACAEQABAEAEABIA4AWQAEABAEgBQAEgCACgEIAkAQQgCAEABAEQACAEADACIAkARQADABADAAQACAAADgCIAOgKQAEgCABgEQABgEgCgEIAAAAIAlgXQACADAEABQAEABADgCIA0geQAEgCABgEQABgEgBgDIAjgTQACAEAEABQAEABAEgBIA2gZQAEgCABgEQACgEgCgDIAlgQIAAAAQABAEAEACQAEABAEgBIA4gVQAEgBACgEQACgEgCgEIAngMIAAAAQABAEAEACQADACAEgBIA6gQQAEgBACgDQACgEAAgEIgBgBIAngJIAAABQABAEAEACQADACAFgBIA6gMQAFAAACgEQACgDAAgEIAAAAIAlgGQABAEADACQAEADAEgBQAdgEAfgDQAEgBADgDQACgDAAgEIAogEQABAEADADQADACAEAAIA7gDQAEgBADgDQADgDAAgEIAogBQAAAEADADQADADAEAAIATAAIAnABQAEAAADgDQADgDAAgEIAAAAIApABQAAAEACADQADADAEABIA9AEQAEAAADgDQADgCAAgEIAoAEIAAAAQgBAEADADQACAEAEAAIAzAHIAHABQAEAAADgCQAEgDAAgEIABAAIAmAHIAAAAQAAAEACADQACAEAEAAIA7AMQAEABADgCQADgCABgEIAnAKQgBAEADAEQACADADABIA6ARQAEABADgCQAEgBABgEIAAgBIAnANQgCAEACAEQACAEAEABIA4AWQAEABADgBQAEgCACgEIAAAAIAmAQIgBABQgBADABAEQABAEAEACIA2AaQAEABAEgBQAEgBACgEIAkATQgDAEACAEQABAEADACIA0AfQAEACAEgBQAEgBACgEIAiAWQgCAEAAAEQABAEAEACIAxAjQADACAEAAQAEgBADgDIAAgBIAfAYQgCAEAAAEQABAEADACIAhAbIAAABIAJAHQADACAEAAQAEAAADgDIAdAaQgCADAAAEQAAAEADADIArApQADADAEAAQAEAAACgDIAcAdQgDADAAAEQAAAEADADIAnAtQADAEAEAAQAEABADgDIAZAfIgBABQgDACgBAEQAAAEACAEQASAXAQAZQADAEAEAAQAEABADgCIABAAIAVAiQgEACgBAEQgBAEACADQAPAaAOAaQACAEAEABQAEABADgBIARAjQgEACgBAEQgCAEACAEQAMAbAKAcQACADAEACQADACAEgCIABAAIANAnIgBAAQgEABgBAEQgCAEABAEQAJAcAGAcQABAEAEADQAEACAEgBIAAAAIAIAnQgEABgCADQgDADABAEQAFAeAEAeQAAAEAEACQADADAEAAIAAAAIAEAoQgEAAgDADQgDADABAEQACAeAAAfQAAAEADADQADADAEAAIAAAHIAAAbQgEAAgDADQgDADAAAEQgBAegDAdQAAAEACADQADADAEABIgEAnQgEAAgDACQgEADAAAEQgEAdgGAeQgBAEACADQADADADABIgJAnQgDAAgEACQgDACgBAEQgIAcgJAcQgCAEACAEQACAEAEABIgOAmQgEgCgDACQgEACgBADQgLAcgNAbQgCAEACAEQABADAEACIgSAkQgEgCgEABQgEABgCAEQgNAagQAaQgCADABAEQAAAEAEADIgWAiIAAgBQgEgCgEABQgEABgDADQgQAYgTAYQgCADAAAEQABAFADACIAAAAIgZAgQgDgDgEAAQgFAAgCAEIgoAtQgDADAAAEQAAAEADADIgdAdQgDgDgDAAQgFAAgDADIgsAoQgDACAAAFQAAAEADADIgQANIAHARQgEACgCADQgCAEACAEQAKAcAIAdQABAEAEACQAEACAEgBIAKAnQgEABgCADQgCAEABAEQAGAdAFAeQABAEADACQADADAFgBIAFAoQgEABgDADQgCADAAAEQADAdACAeQAAAEADADQADADAEAAIABAAIABAoQgEAAgDADQgDADAAAEIAAAEQAAAbgCAbQAAAEADADQADADAEABIAAAAIgDAnIAAAAQgEAAgDACQgEADAAAEQgDAegFAdQAAAEACAEQADADAEABIgHAnQgFgBgDACQgEACgBAEQgGAegIAcQgBAEACAEQACAEAEABIAAAAIgMAmIAAAAQgEgBgEACQgDABgCAEQgKAdgLAbQgCAEACAEQACAEAEABIAAAAIgRAlIAAAAQgEgCgEACQgDABgCAEQgNAagPAbQgCADABAEQABAEAEACIAAAAIgVAkIAAAAQgEgDgEABQgEABgCAEQgQAZgSAZQgCADAAAEQABAEAEADIAAAAIgZAgQgDgCgEAAQgEABgDADIgmAtQgDADAAAEQAAAEADADIABAAIgcAeIAAAAQgDgDgFAAQgEAAgDADIgrArQgDADAAAEQAAAFADADIgeAaQgCgDgEAAQgEAAgDADIgXASIgVASQgEADAAAEQgBAEADADIggAZQgCgDgEgBQgEAAgEACIgwAjQgDACgBAEQgBAEACAEIghAWQgCgEgEgBQgFgBgDADIgzAeQgEADgBAEQgBAEACADIAAAAIgiATIAAAAQgCgEgEgBQgEgBgEACIg1AbQgEABgBAEQgCAEACAEIgmARQgBgEgEgCQgEgBgEABIgpARIAAAAIgMAEQgDABgCAEQgCAEABAEIAAAAIglANQgCgEgDgBQgEgCgEABQgcAJgdAIQgEABgCAEQgCAEABAEIgmAKQgBgEgEgCQgEgDgEABIg6ANQgEABgCAEQgCADABAEIgnAHQgBgEgEgCQgDgCgEAAIg7AJQgEABgDADQgCADAAAEIgoAEQAAgEgEgCQgDgDgEABQgdADgeABQgEAAgDADQgDADAAAFIgoABQAAgDgDgDQgDgDgEAAIg5ABIgEAAQgEAAgDADQgDADAAAEIgogBQAAgEgDgDQgCgDgEAAIg7gDQgEAAgDADQgDACAAAFIgBAAIgpgEIAAAAQAAgEgDgDQgCgDgEgBIg7gHQgFAAgDACQgDADgBAEIAAAAIgngGIAAAAQABgEgCgEQgCgDgFgBIg6gLQgEAAgDACQgEACgBAEIAAAAIgmgIIAAgBQABgEgCgDQgCgEgEgBIg5gPQgEgBgEACQgDACgBAEIgmgLIAAgBQABgEgCgDQgCgEgDgBIg4gUQgEgCgEACQgEACgBAEIAAAAIgngQIAAgBQAAgEgDgDQgDgDgEAAQgFAAgCADIgrArQgDADAAAEQAAAEACADIgdAbQgDgDgEAAQgEgBgDADIgbAXIAAAAIgTAPQgDADAAAEQgBAEADADIAAABIgfAYQgDgDgEgBQgEAAgDACIgwAjQgEACgBAEQAAAEACAEIghAWQgCgEgEgBQgEgBgEADIgzAeQgDADgCAEQgBAEACADIgiATQgCgDgEgBQgEgCgDACIg1AbQgEACgCAEQgBAEABADIgkAQQgBgDgEgCQgEgBgDABIg4AWQgEACgBAEQgCADABAEIglANQgCgEgDgBQgEgCgEABIg4ASQgEABgCAEQgCADABAEIgnALQgBgEgDgCQgEgDgEABIg6ANQgEABgCAEQgDADABAEIgnAHQgBgEgDgCQgDgCgEAAIg8AJQgEABgCADQgDADABAEIgoAFQAAgEgEgDQgDgCgEAAIg7AFQgEAAgDAEQgCADAAADIgoACQAAgEgEgDQgCgCgFAAIg+ABQgEAAgDADQgDADAAAEIgogBg");
	this.shape_15.setTransform(514.6,425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(206.2,224.1,616.9,402);
p.frameBounds = [rect];


(lib.musicNote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-446,700.1,892.2);
p.frameBounds = [rect];


(lib.congrats_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdEAQgOgMAAgQQAAgQAOgMQANgLASAAQASAAAMALQAMAMAAAQQAAAQgMAMQgMAMgSAAQgSAAgNgMgAgdBvQAAg1gFh2QgFh3ABg1QAAgQALgKQALgJASAAQASAAAIAKQAJAJAAAQIgCCsIgBCrQAAALgLAGQgKAGgLABQggAAABgYg");
	this.shape.setTransform(723.7,621.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjCIQgvgoAAhAIAAhDQAAg5AsgpQAsgqA9AAQA7AAAqAmQArAmAAA5QAAAVgFAOQgGAMgKAGQgLAGgJABQgKABgPABIiXAAIAAAQQAAAlAaAUQAaAWApAAQAdAAAagOQAbgOAFAAQANAAAIANQAJAKAAALQAAATgiARQgjATgzgBQhIAAgvgngAgwhiQgWASAAAdIAAAYIB3AAQAPAAAGgFQAFgEAAgNQAAgcgUgUQgWgUgeAAQgeAAgVATg");
	this.shape_1.setTransform(699.1,630.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AC4ClQgMgIAAgJIAAixQAAgkgUgUQgUgUgbAAQgaAAgVAUQgUAUAAAiIAACzQAAAMgMAHQgLAGgPAAQgOAAgLgGQgMgHAAgMIAAiyQAAgggUgVQgUgVgbAAQgbAAgUAUQgUAUAAAjIAACxQAAAJgMAIQgLAIgPAAQgQAAgLgIQgLgIAAgKIAAkiQAAgLALgHQAKgHARAAQANAAALAHQAKAHAAALIAAAbQAfg4BAAAQAgAAAZAUQAYAUANAhQASgkAdgSQAdgTAhAAQAzAAAlAnQAlAmAABBIAACxQAAAKgMAIQgLAIgPAAQgPAAgLgIg");
	this.shape_2.setTransform(653.4,630.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhuCXQgbgYAAguQAAg6ArgXQAsgVBRgBIAgAAIAAgMQAAghgSgXQgSgYgiAAQggAAgXAMQgYAMgBAAQgNAAgHgNQgIgLAAgPQAAgSAjgOQAjgOAnAAQBJABAjAoQAkAnAAA8IAAC0QAAAKgKAIQgLAHgPAAQgPAAgLgHQgKgIAAgKIAAgaQgwA4g7AAQgqAAgbgYgAgHAWQgWADgPANQgRAMAAAVQAAAYANALQANAMAVAAQAaAAAagXQAZgXAAgZIAAgbIgSAAQgiAAgSACg");
	this.shape_3.setTransform(607.2,630.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_4.setTransform(580.3,630.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhUEKQgKgIAAgKIAAl+QAAg5AlgoQAmgoAzAAIAhAAQAOAAAIAJQAIAKAAANQAAANgIAJQgIAKgOAAIgTAAQgcAAgSATQgSASAAAdIAABJIBcAAQAJgBAGAJQAGAIAAAMQAAALgGAIQgGAJgJAAIhcAAIAAEEQAAAKgMAIQgMAGgQAAQgQAAgKgGg");
	this.shape_5.setTransform(555.6,620.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah2DiQgsgmAAhTIAAjQQAAhTAsgnQAsgnBKAAQBKAAAtAnQAsAnAABTIAADQQAABTgsAmQgtAnhKAAQhKAAgsgngAhVhnIAADQQAABdBVAAQApAAAXgXQAXgXAAgvIAAjQQAAgvgXgXQgXgXgpAAQhVAAAABdgAgWAXQgJgJAAgOQAAgMAJgIQAJgIANAAQAPAAAIAIQAJAIAAAMQAAAOgJAJQgIAIgPAAQgNAAgJgIg");
	this.shape_6.setTransform(508,621.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAHEBQgLgHAAgMIAAmPIgZAgQgIAHgHAAQgMAAgHgKQgIgKABgLQAAgTAPgLIBKhIQAHgHALAAQANgBALAHQALAHAAAMIAAHbQAAAMgMAHQgMAGgOAAQgRAAgKgGg");
	this.shape_7.setTransform(476.5,621.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_8.setTransform(920.2,537.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhnCDQgtgqAAg5IAAizQAAgKAMgIQAMgHAPgBQAPAAALAIQALAIAAAJIAACzQAAAdAWAXQAWAXAcAAQAfAAAVgWQAWgYAAgdIAAizQAAgKALgIQALgGAQgBQAQABAKAGQALAIAAAKIAAC0QAAA4gsArQgsArg9AAQg7AAgsgrg");
	this.shape_9.setTransform(886.9,537.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhnCEQgtgrAAg5IAAhBQAAg5AsgqQAsgqA8AAQA8gBAsArQAtAqAAA5IAABBQAAA4gtAsQgtAsg7AAQg7gBgsgrgAgzhUQgVAXgBAdIAABAQABAeAVAXQAWAXAdAAQAdAAAXgXQAVgXABgeIAAhAQgBgdgVgXQgXgWgdgBQgdABgWAWg");
	this.shape_10.setTransform(850.9,537.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AicDeQAAggAVAAQAhAAAfgfQAggfAHg4Ih5kXQgDgDAAgHQAAgOARgLQARgLAQAAQASAAAFAOIBaDqIBOjqQAGgOAPAAQAPAAASALQASALAAAQQAAAGgCACIhqEZIgNAgIgNAfQgJAVgHALIgQAaQgKARgLAIIgZARQgOAJgQAEQgRAEgSAAQgkAAAAggg");
	this.shape_11.setTransform(816.8,545.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhuDvQgsgaAAgtQAAgzA5gbQgggOAAgiQAAggAhgWQgrghAAg6IAAgUQAAg0AlghQAlghA8AAQAxAAAhAZQAVgxAaAAQAOAAAJAJQAIAIAAAJQAAAMgMAGQgXAKgNATQAXAdAAAoIAAAUQAAA0gmAiQgmAhg7AAQgcAAgWgJQgNAKAAAKQAAAPAWAHQAXAGAfAEQAgAEAgAGQAgAHAXAXQAWAWAAAmQAAA1gqAbQgrAbhBAAQhBAAgsgbgAhTCgQAAAaAXAQQAXAQAkAAQAiAAAVgQQAWgPAAgaQAAgRgKgLQgKgMgUgFQgUgGgOgBQgNgCgYgBQgwASAAAkgAgxitQgQAUAAAeIAAAUQAAAfAQAVQARAUAcAAQAcAAAQgUQARgUAAggIAAgUQAAgegRgUQgQgUgcAAQgcAAgRAUg");
	this.shape_12.setTransform(769.6,544.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABSCmQgLgHAAgLIAAixQAAgdgWgXQgVgXgdAAQgbAAgVAUQgVAVAAAiIAACxQABAJgMAIQgMAIgPAAQgQAAgKgIQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAALAHQAJAHAAALIAAAbQALgYAagQQAagQAgAAQAzAAAlAqQAmAqgBA6IAACxQABAMgMAHQgLAHgPAAQgPAAgMgHg");
	this.shape_13.setTransform(734.4,537.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZD1QgMgIAAgKIAAkiQAAgKAMgIQAJgGAQgBQARABALAGQAKAIABAKIAAEiQAAAKgMAIQgLAIgQAAQgPAAgKgIgAgei4QgNgMAAgQQAAgRANgMQANgLARAAQASAAANALQANAMAAARQAAAQgNAMQgNALgSAAQgRAAgNgLg");
	this.shape_14.setTransform(708,529.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaEIQgLgIAAgKIAAntQAAgLALgGQAKgHAQAAQAQAAALAHQALAGAAALIAAHtQAAAKgMAIQgLAIgPAAQgPAAgLgIg");
	this.shape_15.setTransform(691.8,527.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaEIQgLgIAAgKIAAntQAAgLALgGQAKgHAQAAQAQAAALAHQALAGAAALIAAHtQAAAKgMAIQgLAIgPAAQgPAAgLgIg");
	this.shape_16.setTransform(675,527.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaD1QgLgIABgKIAAkiQgBgKALgIQAKgGAQgBQARABAKAGQALAIAAAKIAAEiQAAAKgLAIQgLAIgQAAQgPAAgLgIgAgei4QgNgMAAgQQAAgRANgMQANgLARAAQASAAANALQANAMAAARQAAAQgNAMQgNALgSAAQgRAAgNgLg");
	this.shape_17.setTransform(658.9,529.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhUEKQgKgIAAgKIAAl+QAAg6AlgnQAmgoAzAAIAhAAQAOAAAIAKQAIAJAAANQAAANgIAKQgIAKgOAAIgTAAQgcgBgSATQgSATAAAcIAABIIBcAAQAJAAAGAJQAGAIAAAMQAAALgGAJQgGAIgJAAIhcAAIAAEEQAAAKgMAIQgMAGgQAAQgQAAgKgGg");
	this.shape_18.setTransform(641.1,527.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABTCmQgMgHAAgLIAAixQAAgdgVgXQgWgXgdAAQgbAAgVAUQgUAVAAAiIAACxQAAAJgNAIQgLAIgPAAQgQAAgLgIQgLgIAAgKIAAkiQAAgLALgHQALgHAQAAQAOAAAKAHQAKAHAAALIAAAbQALgYAagQQAZgQAiAAQAzAAAlAqQAkAqABA6IAACxQAAAMgMAHQgKAHgRAAQgOAAgLgHg");
	this.shape_19.setTransform(594.8,537.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhoCEQgsgrAAg5IAAhBQAAg5AsgqQAsgqA8AAQA8gBAsArQAtAqAAA5IAABBQAAA4gtAsQgtAsg7AAQg7gBgtgrgAgzhUQgVAXAAAdIAABAQAAAeAVAXQAWAXAdAAQAdAAAXgXQAWgXAAgeIAAhAQAAgdgWgXQgXgWgdgBQgdABgWAWg");
	this.shape_20.setTransform(558.7,537.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglECQgbgRgMgYIAAAaQAAAKgKAIQgMAIgNAAQgQAAgKgIQgKgIAAgKIAAnsQgBgLALgHQAKgGAQAAQARAAALAGQALAHAAALIAADlQAMgYAYgQQAZgQAfAAQA1AAAmAqQAmAoAAA7IAABCQgBA4glAsQgnArgyAAQgfAAgcgQgAgyAMQgWAVAAAgIAABSQAAAQAXAWQAWAWAbAAQAdAAAWgYQAWgXAAgdIAAhCQAAgcgWgXQgWgWgdAAQgbAAgXAUg");
	this.shape_21.setTransform(509.2,527.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhnCEQgtgrAAg5IAAhBQAAg5AsgqQAsgqA8AAQA8gBAtArQAsAqAAA5IAABBQAAA4gtAsQgtAsg7AAQg7gBgsgrgAgzhUQgWAXAAAdIAABAQAAAeAWAXQAWAXAdAAQAdAAAXgXQAVgXAAgeIAAhAQAAgdgVgXQgXgWgdgBQgdABgWAWg");
	this.shape_22.setTransform(472.8,537.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhJEvQAAgPAJgJQAIgKANAAQAXAAAGgRQAIgSgBgkIAAlWQAAgKAKgIQAKgGARgBQARABAKAGQALAIAAAKIAAFWQAAA+gZAlQgaAlgzAAQgnAAAAgfgAAAkJQgNgMAAgQQAAgRANgMQAMgLASAAQASAAANALQANAMAAARQAAAQgNAMQgNALgSAAQgSAAgMgLg");
	this.shape_23.setTransform(444.5,537.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiD5Qh9AAAAhwIAAloQAAgKAMgIQALgHAPAAQAOAAAMAHQAMAIAAAKIAACDIBXAAQAIAAAGAJQAGAIAAAMQAAALgGAIQgGAJgIAAIhXAAIAACsQAAAaALAKQAKALAcAAIAZAAQAPAAAJAKQAIAJAAANQAAAOgIAJQgJAKgPAAg");
	this.shape_24.setTransform(414.8,529.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhuCXQgbgYAAgvQAAg5ArgXQArgWBRABIAhAAIAAgOQgBgggRgYQgSgXgiAAQgfAAgYAMQgXALgDAAQgMAAgHgLQgIgMAAgOQAAgTAjgOQAjgNAmAAQBKgBAjAoQAkAoAAA8IAACzQAAALgLAHQgKAIgQAAQgOAAgLgIQgJgHgBgLIAAgYQgvA4g9AAQgpgBgbgYgAgHAXQgWACgPANQgRAMAAAVQAAAXANAMQANAMAVAAQAbAAAYgXQAagXAAgZIAAgbIgSAAQgiAAgSADg");
	this.shape_25.setTransform(384.2,537.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhjCIQgvgnAAhBIAAhDQAAg5AsgpQAsgpA9AAQA7AAAqAlQArAlAAA6QAAAVgFAOQgGANgKAFQgLAFgJACQgKACgPAAIiXAAIAAAQQAAAlAaAVQAaAVApAAQAdAAAagNQAbgOAFgBQANABAIALQAJALAAAMQAAASgiASQgjARgzABQhIAAgvgogAgwhjQgWATAAAeIAAAWIB3AAQAPABAGgFQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_26.setTransform(351.7,537.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_27.setTransform(323.2,537.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah1DiQgrgmAAhTIAAjQQAAhTArgnQAtgnBGAAQBIAAAuAkQAtAlAAA8QAAAVgJAIQgIAIgVAAQglAAgBgZQgIhNhNAAQhUAAAABdIAADQQAABdBUAAQAoAAAXgYQAXgXgBgvIAAg7IhIAAQgLAAgGgJQgHgJAAgNQAAgLAHgIQAGgJALAAIB8AAQALAAAHAHQAHAHgBALIAABeQAABTgrAmQgtAnhJAAQhIAAgtgng");
	this.shape_28.setTransform(288.9,528.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdEAQgOgMAAgPQAAgRAOgMQANgMATAAQAQAAANAMQAMAMAAARQAAAPgMAMQgNAMgQAAQgTAAgNgMgAgdBwQgBg1gEh3QgEh3gBg1QABgQALgKQAMgIARgBQASAAAJAKQAIAKAAAPIgCCsIgCCsQAAAKgKAGQgKAGgLAAQgfAAAAgWg");
	this.shape_29.setTransform(811.3,435.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABOCnIhOh3IhNB3QgGAJgOAAQgOAAgQgNQgRgMAAgNQAAgHAFgGIBZh/IhVh6QgFgGAAgGQAAgOARgMQARgMAQAAQAMgBAGAJIBIBzIBKhyQAFgKANABQAPAAARAMQARAMAAAOQAAAGgFAGIhWB6IBaB/QAFAGAAAHQAAAMgQANQgRANgPAAQgNAAgGgJg");
	this.shape_30.setTransform(787.6,444.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhoCFQgsgsAAg4IAAhCQAAg4AsgrQAsgqA8AAQA8AAAsApQAtArAAA5IAABCQAAA4gtArQgtArg7ABQg6AAgugrgAgzhUQgVAXAAAcIAABBQAAAeAVAWQAWAYAdAAQAdAAAXgYQAWgWgBgeIAAhBQABgcgWgXQgXgXgdAAQgdAAgWAXg");
	this.shape_31.setTransform(754.1,444.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ah/EHQgPAAgJgHQgKgHAAgKIAAncQAAgLAKgHQAKgHAOAAICCAAQBDAAAnAbQAoAcAABGQAABZg+AbQAlAPATAaQATAbAAAzIAAAOQAABPgnAkQgnAkhCAAgAhVDDIBZAAQBRAAAAhZIAAgLQAAgugUgVQgVgUgoAAIhZAAgAhVgzIBVAAQBIAAAAhKQAAhFhJAAIhUAAg");
	this.shape_32.setTransform(717.7,435.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhjCIQgvgoAAg/IAAhEQAAg5AsgpQAsgpA9AAQA7gBAqAmQArAmAAA4QAAAXgFANQgGAMgKAGQgLAFgJACQgKACgPgBIiXAAIAAARQAAAkAaAVQAaAWApAAQAdAAAagOQAbgOAFABQANgBAIAMQAJAMAAALQAAARgiATQgjASgzAAQhIAAgvgogAgwhjQgWATAAAdIAAAYIB3AAQAPgBAGgEQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_33.setTransform(665.5,444.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhjCIQgvgoAAg/IAAhEQAAg5AsgpQAsgpA9AAQA7gBAqAmQArAmAAA4QAAAXgFANQgGAMgKAGQgLAFgJACQgKACgPgBIiXAAIAAARQAAAkAaAVQAaAWApAAQAdAAAagOQAbgOAFABQANgBAIAMQAJAMAAALQAAARgiATQgjASgzAAQhIAAgvgogAgwhjQgWATAAAdIAAAYIB3AAQAPgBAGgEQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_34.setTransform(631.4,444.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ah/EHQgPAAgJgHQgKgHAAgKIAAncQAAgLAKgHQAKgHAOAAICCAAQBDAAAnAbQAoAcAABGQAABZg+AbQAlAPATAaQATAbAAAzIAAAOQAABPgnAkQgnAkhCAAgAhVDDIBZAAQBRAAAAhZIAAgLQAAgugUgVQgVgUgoAAIhZAAgAhVgzIBVAAQBIAAAAhKQAAhFhJAAIhUAAg");
	this.shape_35.setTransform(595.2,435.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhjCIQgvgoAAg/IAAhEQAAg5AsgpQAsgpA9AAQA7gBAqAmQArAmAAA4QAAAXgFANQgGAMgKAGQgLAFgJACQgKACgPgBIiXAAIAAARQAAAkAaAVQAaAWApAAQAdAAAagOQAbgOAFABQANgBAIAMQAJAMAAALQAAARgiATQgjASgzAAQhIAAgvgogAgwhjQgWATAAAdIAAAYIB3AAQAPgBAGgEQAFgEAAgMQAAgdgUgUQgWgUgeAAQgeAAgVASg");
	this.shape_36.setTransform(543,444.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ABSEJQgLgHgBgLIAAiyQAAgdgUgYQgXgVgcAAQgbAAgVATQgVAUAAAjIAACyQAAAIgMAJQgLAIgQgBQgPABgLgIQgLgJABgJIAAnsQAAgLAKgHQAKgGAQgBQARABALAGQALAHAAALIAADkQAMgXAXgQQAZgQAfAAQAzAAAlAqQAmAoAAA7IAACyQAAAMgNAHQgLAHgPgBQgOABgMgHg");
	this.shape_37.setTransform(507.4,434.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAiD5Qh9AAAAhwIAAloQAAgKAMgIQALgHAPAAQAOAAAMAHQALAIABAKIAACDIBXAAQAIAAAGAJQAGAIAAAMQAAALgGAIQgGAJgIAAIhXAAIAACsQAAAaALAKQAKALAcAAIAZAAQAQAAAIAKQAJAJAAANQAAAOgJAJQgIAKgQAAg");
	this.shape_38.setTransform(478.1,436.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AicDeQAAggAVAAQAhAAAfgfQAggfAHg4Ih5kXQgDgDAAgHQAAgOARgLQARgLAQAAQASAAAFAOIBaDqIBOjqQAGgOAPAAQAPAAASALQASALAAAQQAAAGgCACIhqEZIgNAgIgNAfQgJAVgHALIgQAaQgKARgLAIIgZARQgOAJgQAEQgRAEgSAAQgkAAAAggg");
	this.shape_39.setTransform(434.1,452.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AglECQgbgRgMgYIAAAaQAAAKgKAIQgLAIgOAAQgQAAgKgIQgLgIAAgKIAAnsQAAgLAKgHQAKgGARAAQARAAALAGQALAHAAALIAADlQANgYAYgQQAYgQAfAAQA1AAAmAqQAlAoAAA7IAABCQABA4gmAsQgnArgyAAQggAAgbgQgAgyAMQgWAVAAAgIAABSQAAAQAXAWQAXAWAbAAQAdAAAVgYQAWgXAAgdIAAhCQAAgcgWgXQgWgWgdAAQgcAAgWAUg");
	this.shape_40.setTransform(400.2,434.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhuDvQgsgaAAgtQAAgzA5gbQgggOAAgiQAAggAhgWQgrghAAg6IAAgUQAAg0AlghQAlghA8AAQAxAAAhAZQAVgxAaAAQAOAAAJAJQAIAIAAAJQAAAMgMAGQgXAKgNATQAXAdAAAoIAAAUQAAA0gmAiQgmAhg7AAQgcAAgWgJQgNAKAAAKQAAAPAWAHQAXAGAfAEQAgAEAgAGQAgAHAXAXQAWAWAAAmQAAA1gqAbQgrAbhBAAQhBAAgsgbgAhTCgQAAAaAXAQQAXAQAkAAQAiAAAVgQQAWgPAAgaQAAgRgKgLQgKgMgUgFQgUgGgOgBQgNgCgYgBQgwASAAAkgAgxitQgQAUAAAeIAAAUQAAAfAQAVQARAUAcAAQAcAAAQgUQARgUAAggIAAgUQAAgegRgUQgQgUgcAAQgcAAgRAUg");
	this.shape_41.setTransform(912.4,358.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ABSCmQgLgHAAgLIAAixQAAgdgVgXQgWgXgdAAQgbAAgVAUQgUAVgBAiIAACxQAAAJgLAIQgMAIgPAAQgQAAgLgIQgLgIABgKIAAkiQgBgLALgHQAKgHARAAQAPAAAKAHQAJAHAAALIAAAbQAMgYAZgQQAZgQAiAAQAzAAAkAqQAlAqAAA6IAACxQAAAMgLAHQgLAHgQAAQgOAAgMgHg");
	this.shape_42.setTransform(877.2,351.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZD1QgLgIAAgJIAAkjQAAgKALgIQAKgGAPAAQARAAALAGQALAIgBAKIAAEjQAAAJgLAIQgLAIgQAAQgPAAgKgIgAgei4QgNgNAAgPQAAgRANgLQANgMARAAQATAAAMAMQANALAAARQAAAPgNANQgMALgTAAQgRAAgNgLg");
	this.shape_43.setTransform(850.8,343.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AiJD2QgKgHAAgKIAAnFQAAgLAKgHQAKgHAQAAQAPAAAKAHQAKAHAAALIAAAbQANgYAZgQQAagQAfAAQA2AAAmAqQAmApAAA7IAABCQgBA3glAsQgnArgyAAQgeAAgbgQQgagRgLgYIAAC9QAAAKgLAHQgMAIgQAAQgQAAgKgIgAgyilQgWAVAAAhIAABSQAAAQAWAVQAWAWAcAAQAdAAAWgYQAWgWAAgdIAAhCQAAgcgWgXQgWgXgeAAQgcAAgVAUg");
	this.shape_44.setTransform(825.6,359.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AiJD2QgKgHAAgKIAAnFQAAgLAKgHQAKgHAQAAQAPAAAKAHQAKAHAAALIAAAbQANgYAZgQQAagQAfAAQA2AAAmAqQAmApAAA7IAABCQgBA3glAsQgnArgyAAQgeAAgbgQQgagRgLgYIAAC9QAAAKgLAHQgMAIgQAAQgQAAgKgIgAgyilQgWAVAAAhIAABSQAAAQAWAVQAWAWAcAAQAdAAAWgYQAWgWAAgdIAAhCQAAgcgWgXQgWgXgeAAQgcAAgVAUg");
	this.shape_45.setTransform(789.1,359.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhnCEQgtgrAAg5IAAhBQAAg4AsgrQAsgrA8AAQA8ABAtAqQAsAqAAA5IAABBQAAA4gtAsQgtArg7AAQg7ABgsgsgAgzhUQgWAXAAAcIAABBQAAAdAWAXQAWAYAdAAQAdAAAXgYQAVgXAAgdIAAhBQAAgcgVgXQgXgXgdABQgdgBgWAXg");
	this.shape_46.setTransform(752.7,351.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAiD5Qh9AAAAhwIAAloQAAgKALgIQAMgHAOAAQAOAAANAHQAMAIgBAKIAACDIBYAAQAIAAAHAJQAFAIAAAMQAAALgFAIQgHAJgIAAIhYAAIAACsQAAAaAMAKQAKALAcAAIAZAAQAPAAAJAKQAIAJAAANQAAAOgIAJQgJAKgPAAg");
	this.shape_47.setTransform(724.6,343.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhYCdQgkgRAAgWQAAgKAHgMQAIgMALAAQAGAAAMAIQAMAJAUAJQATAIAcAAQA8AAAAgnQAAgVgSgMQgRgMgZgGIgzgRQgagIgRgUQgSgVAAghQAAgrAegeQAegeA+gBQApAAAhANQAiAMAAASQAAAKgJANQgHANgNABQgEAAgZgLQgagLgXAAQgcAAgPANQgOANAAAQQAAASASAJQASAKAZAHQAaAHAZAJQAZAJARAXQASAXAAAkQAAAughAbQghAag7AAQg0ABgkgTg");
	this.shape_48.setTransform(696.7,351.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhfClQgLgIAAgKIAAkiQAAgLALgHQAKgHAQAAQAOAAAKAHQAKAHAAALIAAAgQANgZAXgSQAZgSAeAAIAXAAQALAAAJAKQAIAKAAAOQAAAOgIAKQgJAKgLAAIgXAAQgjAAgZAeQgaAdAAAtIAACUQAAAJgMAIQgMAIgPAAQgQAAgKgIg");
	this.shape_49.setTransform(656.7,351.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhnCEQgtgrAAg5IAAhBQAAg4AsgrQAsgrA8AAQA8ABAtAqQAsAqAAA5IAABBQAAA4gtAsQgtArg7AAQg7ABgsgsgAgzhUQgWAXAAAcIAABBQAAAdAWAXQAWAYAdAAQAdAAAXgYQAVgXABgdIAAhBQgBgcgVgXQgXgXgdABQgdgBgWAXg");
	this.shape_50.setTransform(624.5,351.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhTEKQgLgIAAgKIAAl+QAAg5AlgoQAmgoAzAAIAhAAQAOAAAIAJQAIAKAAANQAAANgIAJQgIAKgOAAIgTAAQgcABgSASQgTASAAAdIAABJIBdAAQAJgBAGAJQAGAIAAAMQAAALgGAIQgGAJgJAAIhdAAIAAEEQAAAKgLAIQgMAGgPAAQgQAAgKgGg");
	this.shape_51.setTransform(597,341.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhnCDQgtgrAAg4IAAizQAAgKAMgHQAMgIAPAAQAPgBALAIQALAIAAAJIAACzQAAAcAWAYQAWAXAcAAQAfAAAVgXQAWgXAAgdIAAizQAAgKALgIQALgGAQAAQAQAAAKAGQALAIAAAKIAAC0QAAA4gsArQgsAqg9AAQg7AAgsgqg");
	this.shape_52.setTransform(550.4,351.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhnCEQgtgrAAg5IAAhBQAAg4AsgrQAsgrA8AAQA8ABAsAqQAtAqAAA5IAABBQAAA4gtAsQgtArg7AAQg6ABgtgsgAgzhUQgVAXgBAcIAABBQABAdAVAXQAWAYAdAAQAdAAAXgYQAVgXABgdIAAhBQgBgcgVgXQgXgXgdABQgdgBgWAXg");
	this.shape_53.setTransform(514.4,351.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AicDeQAAggAVAAQAhAAAfgfQAggfAHg4Ih5kXQgDgDAAgHQAAgOARgLQARgLAQAAQASAAAFAOIBaDqIBOjqQAGgOAPAAQAPAAASALQASALAAAQQAAAGgCACIhqEZIgNAgIgNAfQgJAVgHALIgQAaQgKARgLAIIgZARQgOAJgQAEQgRAEgSAAQgkAAAAggg");
	this.shape_54.setTransform(480.3,359.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ABWEIIhpidIg1AwIAABaQAAAJgLAIQgMAIgQAAQgQAAgKgIQgKgIAAgJIAAnuQAAgKAKgHQAKgHAQAAQARAAALAHQALAHAAAKIAAE/ICWiJQAGgGAKAAQAMAAAMAMQAMALAAAMQAAAKgGAGIhdBSIBxCjQAEAGAAAIQAAANgOAMQgOAMgOAAQgMAAgIgKg");
	this.shape_55.setTransform(433.9,341.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("ABTCmQgMgHAAgLIAAixQAAgdgWgXQgVgXgdAAQgbAAgVAUQgVAVABAiIAACxQgBAJgLAIQgMAIgPAAQgQAAgKgIQgMgIAAgKIAAkiQAAgLAMgHQAJgHARAAQAPAAAJAHQAKAHAAALIAAAbQAMgYAZgQQAagQAgAAQAzAAAmAqQAlAqgBA6IAACxQABAMgLAHQgMAHgPAAQgPAAgLgHg");
	this.shape_56.setTransform(396.7,351.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhuCXQgbgYAAguQAAg6ArgXQAsgVBRgBIAgAAIAAgMQAAghgSgXQgSgYgiAAQggAAgXAMQgYAMgBAAQgNAAgHgNQgIgLAAgPQAAgSAjgOQAjgOAnAAQBJABAjAoQAkAnAAA8IAAC0QAAAKgKAIQgLAHgPAAQgPAAgLgHQgKgIAAgKIAAgZQgwA3g7AAQgqABgbgZgAgHAWQgWADgPANQgRAMAAAVQAAAYANALQANAMAVAAQAaAAAagXQAZgXAAgZIAAgbIgSAAQgiAAgSACg");
	this.shape_57.setTransform(360.6,351.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("ABSEJQgMgHABgMIAAixQAAgdgWgXQgWgWgcAAQgbAAgVATQgVAVAAAiIAACxQAAAJgLAJQgMAHgPAAQgQAAgKgHQgLgJAAgJIAAntQAAgKAKgHQAKgGARAAQAQAAALAGQALAHAAALIAADlQALgYAZgQQAYgQAfAAQAzAAAlAqQAmAogBA6IAACzQABAMgMAHQgMAGgPAAQgOAAgMgGg");
	this.shape_58.setTransform(326.7,341.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaEBQgLgHAAgMIAAmtIhvAAQgMAAgHgLQgHgKAAgPQAAgOAHgKQAGgLANAAIEpAAQANAAAGAKQAHAKAAAOQAAAQgHAKQgHALgMAAIhvAAIAAGtQAAAMgLAHQgMAGgOAAQgQAAgLgGg");
	this.shape_59.setTransform(289.5,342.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("EgK2ArdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAPAAIAzAAQAFAAADADQADACAAAFQAAAEgDADQgDADgEAAIg0AAIgPAAgEgLyArcIg8gCQgEAAgDgEQgCgDAAgEIAAAAQAAgEADgDQADgCAEAAIA7ACQAFAAACAEQADACAAAFQAAAEgDACQgDADgEAAIAAAAgEgI+ArYQgDgDAAgEIAAAAQAAgEACgDQADgDAFAAIA6gDQAFgBADADQADADAAAEQABAEgDADQgDADgEABIg8ADIAAAAQgEAAgDgDgEgNpArWIg8gFQgEAAgDgEQgDgDABgEQAAgEAEgCQADgDAEAAIA7AFQAEABADADQADADgBAEQAAAEgDADQgDACgEAAIAAAAgEgHGArQQgDgCgBgEIAAAAQAAgFACgDQADgDAEAAIA8gGQAEgBAEADQADACAAAFIAAAAQABAEgDADQgCADgFABIg8AGIgBAAQgEAAgCgDgEgPhArLIg7gIQgEgBgDgDQgCgEAAgEQABgEADgCQAEgDAEABIA7AIQAEAAACADQADAEgBAEQAAAEgEADQgCACgEAAIgBAAgEgFOArDQgDgCgBgEIAAgBQgBgEADgDQACgDAEgBIA7gJQAEAAAEACQADACAAAFIAAAAQABAEgCADQgCADgFABIg7AJIgBAAQgEAAgCgCgEgRXAq5Ig7gLQgEgBgCgDQgCgEAAgEQABgEAEgCQADgCAEAAIA7AMQAEAAACADQACAEAAAEQgBAEgEADQgCABgDAAIgCAAgEgDYAqwQgEgCgBgEIAAgBQAAgEACgDQACgDAEgBIA7gMQAEgBAEACQADACABAEIAAABQABAEgCADQgCAEgFABIg7AMIgCAAQgDAAgCgCgEgTMAqhIg6gNQgEgCgCgDQgCgEAAgEQACgEADgCQAEgCAEABIA6AOQAEABACAEQACADgBAEQgBAEgEACQgCACgDAAIgCgBgEgBjAqXQgDgCgBgFQgBgDACgEQACgEAEAAIA6gQQAEgBADACQAEACABAEIAAAAQABAFgCADQgCAEgEABIg6APIgCAAQgDAAgDgBgEgVAAqDIg5gRQgEgCgCgDQgCgEABgDIAAgBQACgEADgBQAEgCAEABIA4ARQAEABADAEQABAEgBADIAAABQgBAEgEACIgEABIgDgBgEAAQAp3QgDgCgCgEIAAAAQgBgEACgDQACgEAEgBIA4gTQAEgBAEACQAEACABADIAAAAQACAEgCAEQgCAEgEABIg5ATIgDAAIgFgBgEgWyApfIg5gVQgEgBgBgEQgCgEABgEQACgEAEgBQADgCAEABIA5AVQADABACAEQACAEgBADIgBABQgBAEgDABIgFABIgDAAgEACCApRQgEgCgBgEIAAAAQgBgEABgDQACgEAEgCIA3gVQAEgCAEACQADABACAEIAAAAQACAEgCADQgCAEgDACIg4AWIgEABIgEgBgEgYjAo0Ig3gYQgDgCgCgEQgBgEACgDQABgEAEgCQAEgBAEACIA2AXQAEACACAEQABAEgBADQgCAEgEACIgEABIgEgBgEADxAojQgEgBgCgDIAAgBQgCgEACgDQABgEAEgCIA3gZQADgCAEACQAEABACAEQACAEgCAEQgBADgEACIg3AZIgEABIgDgBgEgaQAoCIg1gbQgDgCgBgEQgBgEABgDIAAgBQADgDAEgBQADgBAEACIA0AaQAEACABAEQACAEgCAEIAAAAQgCADgEACIgDAAIgFgBgEAFdAnwQgEgBgCgEQgCgDACgEQABgEAEgCIA0gcQAEgCADABQAEABACAEQACAEgBAEQgBADgDACIg1AdIgFABIgDgBgEgb5AnKIg0geQgEgCgBgFQAAgDACgEIAAAAQACgEAEAAQAEgBADACIA0AdQADADABADQABAEgCAEIAAABQgCADgEABIgCAAIgFgBgEAHGAm2QgEgBgCgDIAAAAQgCgEABgEQABgEAEgCIAzgfQADgCAFAAQAEABACAEQACADgBAFQgBAEgEACIgzAfQgDACgCAAIgDgBgEgdgAmMIgyghQgDgDgBgEQgBgEACgDQADgEAEAAQAEgBADACIAyAiQAEACABAEQAAAEgCADQgCAEgEABIgCAAQgDAAgDgCgEAItAl2QgEgBgDgDQgCgEABgEQABgEADgCIAxgjQAEgCAEABQAEABACADQADADgBAEQgBAFgDACIgyAjQgCABgDAAIgCAAgEgfDAlIIgvgkQgEgCAAgFQgBgEADgDIAAAAQADgDADgBQAFAAADACIAvAkQADACABAEQABAEgDAEQgCADgEABIgCAAQgDAAgDgCgEAKPAkwQgEAAgDgEQgCgDAAgEQABgEADgDIAvglQADgCAEAAQAEABADADQADADgBAEQAAAEgDADIgwAlQgCACgEAAIgBAAgEAb+AkFIgpAAQgEAAgDgDQgDgDAAgEIAAgBQAAgDADgDQADgDAEAAIApAAIAUAAQAEAAADADQADADAAADIAAABQAAAEgDADQgDADgEAAIgUAAgEAdIAkBQgDgDAAgEIAAAAQAAgEACgDQADgDAFAAIA7gDQAEAAADADQAEADAAAEIAAAAQAAAEgDADQgDADgEAAIg8ADIAAAAQgEAAgDgDgEAaaAkDIg8gDQgEAAgDgDQgCgDAAgEIAAAAQAAgFADgCQADgDAEAAIA7ADQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAIAAAAgEggiAj/IgTgQIgfgcQgDgCgBgFQAAgEADgDQACgDAFAAQAEAAADACIAfAbIATAQQADADABAEQAAAEgCADIgBAAQgCADgFABIgBAAQgDAAgDgCgEAfAAj7QgDgDAAgEQgBgEADgDQADgDAEgBIA8gFQAEgBADADQADADABAEIAAAAQAAAEgCADQgDADgEABIg9AFIgBAAQgDAAgDgCgEAYgAj8Ig7gFQgEgBgDgDQgDgDABgEIAAAAQAAgEADgDQAEgDAEABIA7AFQAEABADADQADADgBAEIAAAAQAAAEgDADQgDACgDAAIgCAAgEAg5AjvQgDgCgBgFQAAgEADgDQACgDAEgBIA7gIQAEAAAEACQADADABADIAAABQAAAEgCADQgDAEgEAAIg7AIIgCAAQgDAAgDgCgEAWpAjvIg7gIQgEgBgCgDQgDgEABgEIAAAAQABgEADgCQADgDAEABIA6AIQAFABACADQADADgBAEQAAAFgEACQgCACgEAAIgBAAgEALrAjlQgDAAgDgDIAAAAQgDgDAAgEQABgFADgCIAtgoQADgDAEAAQAEAAADAEIAAAAQADADAAAEQAAAEgEADIgtAoQgDACgEAAIgBAAgEAivAjeQgDgCAAgFIAAAAQgBgEACgDQACgDAFgBIA7gLQAEgBADACQAEACAAAEQABAEgCAEQgCADgEABIg8ALIgCABQgDAAgDgCgEAU0AjdIg8gMQgEgBgCgEQgCgDABgFQABgEADgCQAEgCAEABIA6AMQAEABACADQADADgBAEIAAABQgBAEgDACQgDACgCAAIgCAAgEAkmAjGQgDgCgBgEIAAAAQgBgEACgEQACgEAEgBIA6gOQAEgBAEACQADACABAEQABAEgCAEQgCADgEACIg7AOIgCAAQgDAAgCgBgEAS+AjDIg7gPQgDgBgCgEQgDgDACgEQABgEADgDQAEgCAEABIA5AQQAFAAACAEQACAEgBADQgBAFgDACQgDABgDAAIgCAAgEgiBAirIgrgoQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAADADIArApQADADAAAEQAAAEgCADQgDADgEAAIgBAAQgEAAgDgDgEAmaAioQgDgDgBgEQgBgDACgEQACgEADgBIA6gRQAEgBADABQAEACABAEIAAAAQABAEgCAEQgBADgEACIg6ARIgDABIgFgBgEARKAijIg5gSQgEgBgCgEQgCgEABgEIAAAAQACgDADgCQAEgCAEABIA5ASQADABACAEQACAEgBAEQgBADgDACIgFACIgDgBgEANFAiVQgEAAgDgDIAAAAQgDgDAAgEQAAgEADgEIArgpQADgDAEAAQAEAAADADIAAAAQADADAAAEQAAAEgDADIgrAqQgDADgEAAIAAAAgEAoNAiDQgEgCgBgEIAAAAQgCgEACgEQACgDAEgCIAqgPIAAAAIAOgGQAEgCAEACQAEACACADIAAABQABADgBAEQgCAEgEACIgPAFIAAAAIgqAQIgEABIgEgBgEAPYAh9Ig3gVQgEgCgBgEQgCgDACgEQABgEAEgBQAEgCADACIA3AUQAEACABAEQACADgBAEIAAAAQgCAEgEACIgEABIgDgBgEgjPAhbQgEAAgDgDIgogsQgDgDAAgEQAAgEADgDIABAAQADgCAEAAQAEAAADADIAnArQADADAAAEQAAAEgDADIAAAAQgDADgEAAIAAAAgEAp/AhWQgEgBgCgEQgCgEACgDQACgEADgCIA4gZQADgCAEACQAEABACAEQACAEgCAEQgBADgEACIg4AZIgEABIgDgBgEArtAgkQgEgCgCgDIAAAAQgCgEABgEQACgEADgCIA0gbQAEgCAEABQAEABACAEQACAEgBAEQgBADgEACIg1AcIgEABIgDAAgEgkfAgDQgEgBgCgDIgmgvQgCgDAAgEQABgEADgDQADgCAFAAQAEABACADIAlAvQADADgBAEQAAAEgDACIgBAAQgCADgEAAIgBAAgEAtWAfrQgEgBgCgEQgCgDABgEQABgEAEgCIAzgfQADgCAEABQAEABACADQACAEAAAEQgBAEgEACIgzAfQgDABgCAAIgDAAgEAu8AesQgEAAgCgEIAAAAQgCgDABgEQAAgEAEgDIAxghQADgCAFAAQADABADADIAAABQACADAAAEQgBAEgEACIgxAiQgDACgDAAIgCgBgEgloAekQgEgBgDgDIgigxQgCgDABgEQAAgEAEgCIAAgBQAEgCADABQAEABADADIAhAwQADAEgBAEQgBAEgDACQgCACgEAAIgBAAgEAwfAdoQgEAAgDgEIAAAAQgCgDAAgEQABgEADgDIAwgkQADgDAEABQAEAAACAEQADADAAAEQgBAEgDACIgwAlQgDACgDAAIgBAAgEgmrAdBQgEgBgCgDIgeg0QgCgEABgEQABgEADgCIABAAQADgCAEABQAEABACAEIAeAzQACAEgBADQgBAEgDADIAAAAQgDABgDAAIgCAAgEAx9AceQgEAAgCgDIAAAAQgDgEAAgEQABgEADgCIAHgGIAAAAIApgjQADgDAEAAQAEABADADIAAAAQADADgBAEQAAAEgDADIgpAjIAAAAIgHAGQgDACgEAAIgBAAgEgnmAbZQgDgCgCgDQgOgcgMgbQgCgEACgEQABgEAEgCQAEgBAEABQAEACABAEQAMAbAOAbQACAEgCAEQgBADgDACIgBAAIgEABIgEAAgEAzbAbNQgFAAgCgDIgBgBQgCgDAAgEQAAgEADgDIArgpQADgDAEAAQAEAAACADIABAAQADADAAAEQAAAEgDADIgsAqQgCADgEAAIAAAAgEA0pAZ1QgDgDAAgEQAAgEACgDIApgtQADgDAEAAQAEAAADADIAAAAQAEADAAAEQAAAEgDADIgpAtQgDADgEAAIAAAAQgEAAgDgDgEgoXAZrQgEgBgBgEIgVg2QgBgEACgEQABgEAEgBIABAAQADgCAEACQAEACABAEIAUA2QACADgCAEQgBAEgEABIgEABIgEgBgEA15AYbIAAAAQgDgDAAgEQgBgEADgDIAlgvQADgEAEAAQAEgBADACIAAABQAEACAAAEQABAEgDAEQgSAYgTAYQgDADgEAAIgBAAQgEAAgDgCgEgpAAX2QgEgCgBgDIgQg6QgBgEACgEQACgDAEgBQAEgBAEACQADACABAEIAQA5QABAEgBAEQgDADgEABIgCABIgFgCgEA3DAW7IAAAAQgDgCgBgEQgBgEACgEQASgYAQgZQACgDAEgBQAEgBADACIABAAQADACABAEQABAFgCADQgQAZgSAZQgCADgFABIgBAAQgDAAgDgCgEgpeAWCQgEgCAAgEIgMg7QAAgEACgDQACgDAEgBIABAAQAEgBADACQADADABAEIALA6QABAEgCADQgDAEgEABIgCAAQgDAAgCgCgEA4FAVXIgBAAQgDgCgBgEQgBgEACgDQAQgaAOgbQABgDAEgBQAEgBADABIABABQAEABABAEQABAEgCAEQgOAbgQAaQgCADgEACIgCAAQgDAAgCgCgEgpyAUMQgEgCAAgEIgGg8QgBgFADgDQADgDAEAAIAAAAQAEgBADADQADADABAEIAGA7QAAAEgDADQgCAEgEAAIgBAAQgEAAgCgCgEA4+ATuIgBgBQgDgBgBgEQgCgEACgDIAZg3QACgEAEgBQADgCAEACIAAAAQAEACABAEQACADgCAEIgZA3QgCAEgEABIgDABIgEgBgEgp9ASUQgDgDAAgEIgCg8QAAgEACgDQADgDAEAAIABAAQAEAAADADQADACAAAFIACA7QAAAEgDADQgDAEgEAAIAAAAIAAAAQgEAAgDgDgEA5uASAIAAAAQgEgCgBgDQgCgEACgEIATg4QACgEADgCQAEgCAEACIAAAAQAEABACAEQACAEgCAEIgUA4QgBAEgEACIgEABIgEgBgEgp4AQeIAAAAQgEAAgDgDQgDgDAAgEIADg9QABgEADgCQADgDAEAAQAEABADADQADADgBAEIgDA7QAAAEgDADQgDADgEAAIAAAAgEA6VAQOIAAAAQgEgBgCgDQgCgEABgEIAPg5QABgEADgCQAEgCAEABQAEAAACAEQACAEAAADIgQA6QgBAEgDACIgFACIgDgBgEgpxAOnQgEgBgDgDQgCgDAAgEQADgfAFgdQAAgEAEgDQADgCAEAAIAAAAQAEABADADQACAEAAAEQgFAdgDAeQAAAEgDACQgDADgEAAIgBAAgEA6yAOaIAAAAQgEAAgDgEQgCgDABgEIAKg7QABgEADgCQADgDAEABIABAAQAEAAACAEQADADgBAEIgLA8QAAAEgEACQgCACgDAAIgCgBgEgp2AM+Ig6gKQgEgBgDgEQgCgDABgEIAAAAQABgEADgCQAEgDAEABIA6ALQAEABADADQACADgBAEQgBAFgDACQgDACgCAAIgDgBgEgrrAMnIg6gOQgEgBgCgEQgCgDABgDIAAgBQABgEAEgCQADgCAEABIA6ANQAEABACAEQACADAAAFIAAAAQgCAEgDACQgCABgDAAIgDAAgEA7FAMkIgBAAQgDAAgDgDQgCgEAAgEQAEgdACgeQAAgEADgDQADgCAEAAIAAAAQAFAAACADQADADAAAFQgCAegEAdQAAAFgEACQgCACgEAAIgBAAgEgteAMJIg6gRQgEgBgBgEQgCgDAAgEIABAAQABgEAEgCQADgCAEABIA5ARQAEABACAEQACADgBAEIAAABQgCAEgDABIgFACIgCgBgEgvQALmIg5gVQgEgBgBgEQgCgDABgEIAAAAQACgEAEgCQADgBAEABIA4AUQAEABACAEQACAEgCAEIAAAAQgBAEgEABIgEABIgDAAgEgxBAK8Ig2gYQgEgCgBgEQgCgDACgEIAAAAQABgEAEgBQAEgCAEACIA2AXQAEACACADQABAEgBAEIgBAAQgBAEgEACIgEAAIgEAAgEA7OAKtIAAAAQgEAAgDgDQgCgDAAgEIABg6IAAgBQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAABIgBA6QAAAEgEADQgCADgEAAIgBAAgEgyuAKLIg2gcQgDgBgBgEQgBgEABgDIABgBQABgEAEgBQAEgBAEACIA1AbQAEACABAEQACADgCAEIAAAAQgCAEgEABIgDABIgFgBgEg0YAJUIg0geQgDgCgCgEQAAgEACgEQACgDAEgBQAEgBADACIA0AdQADACABAEQABAEgCAEIAAAAQgCADgEABIgCABIgFgBgEA7IAIzQgDgCAAgEQgBgfgDgeQAAgEADgDQACgDAEAAIABAAQAEgBADADQADADAAAEQADAeABAfQAAAEgDADQgDADgEAAIAAAAQgEAAgDgDgEg1/AIXIgyghQgDgCgBgEQgBgEACgEIABAAQACgDAEgBQAEgBADADIAyAgQADACABAEQABAEgCAEIAAAAQgCADgEABIgDAAQgDAAgCgBgEg3iAHUIgxgkQgDgDgBgEQAAgEACgDIAAgBQADgDAEAAQAEgBADADIAwAjQAEADABAEQAAAEgCADIAAABQgDADgDAAIgDABQgCAAgDgCgEA6/AG7QgDgCgBgFQgDgegFgdQgBgFADgDQACgDAEgBIAAAAQAEgBAEADQADACAAAEQAGAeADAfQABAEgDAEQgCADgFAAIAAAAIgBAAQgDAAgDgCgEg5CAGMIgegaIAAAAIgtgnQgDgDAAgEQgBgEADgDIAAAAQADgDAEAAQAEAAAEACIArAmIABAAIABABIAdAZQADADABAEQAAAEgCADIgBAAQgCADgEABIgBAAQgEAAgDgCgEA6tAFEQgEgDgBgEIgNg6QgBgEACgEQACgDAEgCIAAAAQAEAAAEACQADACACAEIANA7QABAEgDAEQgCADgEABIAAAAIgCAAQgDAAgCgBgEg65AEjIgrgqQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIArAqQADACAAAEQAAAEgDADIAAAAQgDAEgEAAIAAAAQgEAAgDgDgEg8GADSQgFAAgCgDIgpgtQgDgDABgFQAAgEADgCIAAgBQAEgCADAAQAFABACADIAoAsQADADAAAEQAAAEgDADIgBAAQgCADgEAAIAAAAgEA6QADPQgDgCgBgEIgSg5QgCgEACgEQACgDAEgCIAAAAQAEgBAEACQADACACADIASA7QABADgCAEQgCAEgEABIgDAAIgFgBgEg9VAB4QgEgBgDgDIglgvQgDgDABgEQAAgEAEgDIAAAAQADgCAEAAQAEABADADIAlAuQACAEAAAEQgBAEgDADQgDACgDAAIgBAAgEA5rABeQgDgCgCgDIgBgCQgCgDABgEQABgDACgCIAugoQADgDAEAAQAEAAACADIABABQACADAAAEQAAAEgDADIgpAkIgBACQgBADgEACIgBABIgDAAIgEAAgEg+eAAZQgEgBgCgDIgigxQgCgDABgEQABgFADgCQAEgCAEABQAEABACADIAhAxQACADAAAEQgBAEgDACIAAAAQgDACgDAAIgCAAgEA7GAAMQgEAAgDgDQgDgDAAgEQAAgDADgEIAqgqQADgDAEAAQAEAAADADIABAAQACADAAAEQAAAEgCADIgrAqQgDADgDAAIgBAAgEA8TgBMIAAAAQgEgDAAgEQAAgEADgDIAogtQACgDAFAAQAEgBADADQADADAAAEQABAEgDADIgoAtQgDAEgEAAIgBAAQgEAAgCgDgEg/fgBKQgEgBgCgEIgdg0QgCgEABgEQABgDAEgCQADgCAEABQAEABACADIAdA0QACAEAAAEQgCAEgDACIgBAAQgCABgCAAIgDAAgEA9hgCnIAAAAQgDgDgBgEQAAgEACgDIAlgvQACgDAEgBQAEgBAEACIAAABQADACAAAEQABAEgCAEQgSAYgTAYQgDADgEAAIgBAAQgDAAgDgCgEhAYgCzQgEgCgCgEIgZg2QgCgEACgEQABgEAEgBQAEgCAEACQAEABACAEIAYA2QACAEgBADQgCAEgEACIgEABIgDAAgEA+pgEIQgEgCAAgEQgBgEACgDIAhgzQACgDAEgBQAEgBADACIAAAAQAEACABAFQABAEgCADIgiAzQgCADgEABIgCAAQgDAAgCgCgEhBJgEiQgEgBgBgEIgRguIgFgOQgBgEACgEQACgDADgCIABAAQADgBAEACQAEACABAEIAFANIAQAuQACAEgCADQgBAEgEACIAAAAIgEAAIgEgBgEA/pgFuIAAAAQgDgCgCgEQgBgEACgEIAdg0QACgEAEgBQADgCAEACIAAAAQAEACABAEQACAEgCAEIgdA1QgCAEgEABIgDAAIgFgBgEhBxgGWQgDgCgBgEIgQg6QAAgEACgDQACgEAEgBQAEgBAEACQADACABAEIAPA5QABAFgCADQgCAEgEABIAAAAIgDAAIgFgBgEBAhgHZIAAgBQgEgBgCgEQgBgEACgDIAYg3QABgEAEgCQAEgCADACIAAAAQAEACACAEQACADgCAEIgYA4QgCAEgEABIgDABIgEgBgEhCOgIKQgDgDAAgEIgLg7QAAgEACgEQADgDADgBIABAAQAEAAADACQAEADAAAEIAKA7QABAEgCADQgDADgDABIgBAAIgCAAQgDAAgDgBgEBBPgJIIAAAAQgEgCgCgEQgCgDACgEIATg5QABgEAEgCQADgCAEABIAAAAQAEABACAEQACAEgBAEIgTA5QgCAEgDACIgFABIgDAAgEhCggKCQgDgCgBgEQgDgegCgeQgBgFADgDQADgDAEAAIAAAAQAEgBADADQADADABAEQACAeADAdQABAEgDADQgCAEgEAAIgBAAIgBAAQgDAAgDgCgEBBzgK7IAAAAQgEgBgCgEQgCgDABgEIAOg7QABgEADgCQAEgCADABIABAAQAEABACADQACAEAAAEIgPA7QgBAEgDACQgDABgCAAIgDAAgEhCqgL6QgDgDAAgEIgBg5IAAgGQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAGIABA4QAAAFgCADQgDADgEAAIgBAAQgEAAgDgDgEBCOgMxIgBAAQgEAAgCgDQgCgEABgEIAIg7QABgEADgDQADgCAEAAIAAAAQAFABACADQADADgBAEIgJA8QgBAFgDACQgDACgCAAIgCgBgEhCjgNxIAAAAQgEAAgDgEQgDgCAAgEQABgfADgeQAAgEADgDQADgCAEAAIABAAQAEABACADQADADAAAEQgDAdgBAeQAAAEgDADQgDADgEAAIAAAAgEBCegOnIgBAAQgDgBgDgDQgDgDABgEIAEg7QAAgEADgDQADgDAEAAIAAAAQAEAAADADQADAEAAAEIgEA8QgBAEgDADQgDACgDAAIgBAAgEhCagPoIAAAAQgFgBgCgDQgDgDABgFQADgeAGgdQAAgFADgCQAEgCAEABIAAAAQAEAAADADQACAEgBAEQgFAdgDAeQgBAEgDACQgDADgDAAIgBAAgEBCkgQeQgDAAgDgDQgDgDAAgEIAAgYIgBgcQAAgFADgCQADgEAEAAIAAAAQAEAAADADQADADAAAEIABAdIAAAYQAAAEgDADQgDADgEAAgEhCIgRfIAAAAQgEgBgDgDQgCgEABgEIANg6QABgEAEgCQADgCAEABIABAAQADABACADQACAEgBAEIgNA5QAAAEgEACQgCACgDAAIgCAAgEBCbgSSQgDgDAAgEQgBgegDgeQgBgEADgDQADgDAEgBQAEAAADACQADADABAEQADAeABAfQAAAEgCAEQgDADgEAAIgBAAQgEAAgDgDgEhBsgTSIAAAAQgEgBgDgEQgBgEABgEIASg5QACgEAEgCQADgCAEACIAAAAQAEABACAEQACAEgCAEIgSA4QgBAEgEACIgEABIgDAAgEBCRgUKQgEgDAAgEIgJg8QgBgEACgDQACgDAFgBQAEgBADADQADACABAEIAKA8QAAAFgCADQgDADgEABIgBAAQgEAAgCgCgEhBGgVEIgBAAQgEgCgCgEQgBgEABgEIAYg3QABgEAEgBQAEgCAEACIAAAAQAEABABAEQACAEgCAEIgXA3QgBAEgEACIgEAAIgDAAgEBB8gWAQgEgCgBgEIgNg6QgBgEACgEQACgDAEgBQAEgBADACQAEACABAEIAOA6QABAEgCAEQgCADgEABIAAAAIgDAAQgDAAgCgBgEhAXgWzQgEgCgBgEQgCgDACgEQANgbAPgbQACgEAEgBQAEgBADACIABAAQADACABAEQABAEgBADQgPAbgNAaQgCAEgEACIgDAAIgEgBgEBBegX1QgEgBgBgEQgJgdgLgcQgBgEACgEQABgEAEgBIABAAQADgCAEACQAEACABAEQALAcAJAeQABAEgCAEQgCADgEABIgDABIgEgCgEg/egYdIgBAAQgEgCgBgFQAAgDACgEIAggzQACgEAEgBQAEAAAEACIAAAAQADACABAEQABAEgCAEIggAyQgCAEgFABIgCAAIgEgBgEBA1gZlQgDgCgCgEIgYg3QgBgEABgEQABgDAEgCIAAAAQAEgCAEACQAEABABADIAZA4QABAEgBAEQgCAEgEACIAAAAIgEAAIgEAAgEg+dgaCIAAAAQgEgCgBgEQAAgFACgDIAkgwQACgEAEAAQAFgBADADIAAAAQADACABAEQAAAFgCADIgkAvQgCAEgEABIgCAAQgDAAgCgCgEBAEgbTQgEgCgCgDQgOgbgOgZQgDgEACgEQABgEADgCIAAAAQAEgCAEABQAEABACAEQAPAaAOAbQACADgCAEQgBAEgEACIAAAAIgEABIgDAAgEg9VgbiIAAAAQgDgDgBgEQAAgEADgDIAnguQADgDAEAAQAEAAADACIAAAAQADADAAAEQAAAEgCAEIgnAtQgDADgEAAIgBAAQgDAAgDgCgEg8Ggc8IAAAAQgDgDAAgEQAAgEADgDIAqgrQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgqArQgDADgEAAIAAAAQgEAAgDgDgEA/Jgc7QgEgBgCgDIghgzQgCgDABgEQAAgEAEgDQADgCAEABQAEABADADIAhAzQACADgBAEQgBAFgDACQgDABgDAAIgCAAgEg6qgeNQgFAAgCgDIAAAAQgDgDAAgEQAAgEADgDIAugpQADgDAEAAQAEABADADIAAAAQADADgBAEQAAAEgDADIgtApQgDACgEAAIAAAAgEA+GgefQgEgBgDgDIgjgvQgDgDAAgFQABgDADgDIAAAAQADgDAFABQAEAAACAEIAkAvQADAEgBAEQgBAEgDACQgCACgDAAIgCAAgEg5NgffQgEgBgDgDQgDgDABgEQAAgEAEgDIAuglQADgDAFAAQAEABACADQADADgBAFQAAAEgEACIguAmQgDACgDAAIgBAAgEA88gf8QgEgBgCgDIgogsQgDgDAAgEQAAgEADgDQADgDAEAAQAFAAADAEIAoAsQADADgBAFQAAAEgDACIgBAAQgCADgEAAIgBAAgEg3wggpQgEAAgCgEIAAAAQgDgDABgEQAAgEAEgDIAwgjQAEgCAEABQAEAAADADQACAEgBAEQgBAEgDADIgwAiQgDACgDAAIgCAAgEA7sghUQgEAAgDgDIgqgqQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADACIAqArQADADAAAEQAAAEgDADQgDADgDAAIgBAAgEg2OghtQgEgBgCgDIgBgBQgCgDABgEQABgEADgDIA0ggQADgCAEABQAEABACAEIAAAAQACADgBAEQAAAEgEACIgzAgQgCACgDAAIgCAAgEA6PgipIgsgoQgDgCgBgFQAAgEADgDQACgDAFAAQAEgBADADIAtAoQADADAAAEQAAAEgCADQgDADgEAAIgBAAQgEAAgDgCgEg0ogisQgEgBgCgDIAAgBQgDgDACgEQABgEADgCIA1gdQAEgCAEABQAEABACADIAAABQABADgBAEQgBAEgEACIg0AdIgFABIgCAAgEgTYgjaIgugXQgDgCgCgDQgBgEACgEQACgEADgBQAEgCAEACIApAVIABAAQADgCAEABQAEAAACADIAAABQACAEgBAEQAAAEgEACIgFADIgFABIAAAAIgFgBgEgy/gjkQgEgCgCgDIAAgBQgCgDACgEQABgEAEgCIA2gaQAEgBAEABQAEABACAEIAAAAQABAEgBAEQgBAEgEABIg2AaIgFABIgDAAgEA45gj0IgwgmQgDgCgBgFQAAgEACgDQADgDAEgBQAEAAADACIAwAmQAEADAAAEQABAEgDAEIAAAAQgDADgEAAIgBAAQgDAAgDgCgEgSdgj+QgEgBgDgDIAAgBQgCgDABgEQABgEADgCIAugcIAAAAIAFgDQAEgCAEAAQAEACACADQACAEgBAEQgBAEgEACIgEADIgBAAIgtAcQgCABgDAAIgCAAgEgU9gkKIg2gXQgEgBgCgEQgBgEABgEIAAAAQACgEAEgCQAEgBAEABIA2AYQAEABABAEQACAEgCAEQgBAEgEABIgEABIgEgBgEgxSgkXQgEgBgBgEIAAAAQgCgEACgDQABgEAEgCIA4gWQADgCAEACQAEABABAEIAAAAQACAEgCAEQgBAEgEABIg4AWIgDABIgEgBgEgWrgk3Ig5gUQgDgCgCgDQgCgEABgEQACgEADgCQAEgCAEACIA5AUQAEACACADQACAEgCAEQgBAEgEACIgEABIgEgBgEgQ3gk7QgEgBgCgEQgCgEABgDQABgEAEgDIA1gcQADgCAEABQAEABACAEIAAAAQACAEgBAEQgBAEgEACIg0AcIgFABIgDAAgEA3Zgk9IgxgjQgDgCgBgFQgBgDACgEIAAAAQADgDAEgBQAEgBAEACIAwAjQAEACABAFQAAAEgCADQgDADgDABIgDAAQgCAAgDgBgEgviglCQgEgCgCgEIAAAAQgBgEACgDQACgEADgCIA5gTQAEgBAEACQADACACADIAAABQABAEgCADQgCAEgEABIg4ATIgDABIgEgBgEgYdgleIg5gRQgEgBgCgDQgCgEABgEQABgEAEgCQADgCAEABIA6ARQAEACACADQACAEgBAEIAAAAQgCAEgDABIgFACIgDgBgEAP5gliIgQgIQgEgCgBgEQgCgEACgEQACgDAEgCQAEgBAEACIAKAFIAcgTQAEgCAEABQAEABACADIAAABQACADgBAEQAAAEgEACIggAWIgFACIgBAAIgEgBgEgtxglnQgEgCgBgEIAAAAQgBgEACgDQACgEAEgBIA7gRQAEAAADACQAEACABADIAAABQABAEgCADQgCAEgEABIg7AQIgCAAIgFgBgEgPNglzQgEgBgCgEIAAAAQgCgEABgDQACgEAEgCIA2gaQAEgBAEABQAEACABAEQACAEgCAEQgBADgEACIg2AZIgEABIgDgBgEgaQgl9Ig6gOQgEgBgCgDQgCgEAAgEQABgEAEgCQADgCAEAAIA7AOQAEABACADQACAEAAAEQgBAEgEACQgCACgDAAIgDAAgEA12gmBIgzgfQgEgCgBgEQgBgEACgEIABAAQACgDADgBQAEgBAEACIAzAfQAEACABAEQABAFgCADQgCAEgEABIgDAAQgDAAgCgCgEAOzgmDIg3gZQgEgCgBgDQgCgEACgEIAAAAQABgEAEgCQAEgBAEABIA4AaQAEABABAEQACAEgCAEIAAAAQgCAEgEABIgDABIgFgBgEgr9gmFQgDgCgBgFIAAAAQgBgEACgDQACgEAFAAIA6gNQAEgBADADQADACABADIABABQAAAEgCADQgCAEgEABIg6AMIgCAAQgDAAgDgBgEgcFgmXIg7gKQgEgBgDgEQgCgDABgEIAAAAQAAgEADgCQAEgDAEABIA8ALQAEAAACADQACAEAAAEQgBAEgEADQgCABgDAAIgCAAgEARQgmYQgEgBgDgDIAAgBQgCgDABgDQABgFADgCIAMgHIgBAAIAngWQAEgCAEABQAEABACADIAAAAQACAEgBAEQgBAEgEACIgnAWIAAABIgJAGQgDABgDAAIgCAAgEgqGgmeQgEgCgBgEIAAgBQAAgDACgDQACgEAEgBIA6gKQAEAAADACQADADABAEQABAEgDADQgCAEgEAAIg5AKIgCAAQgDAAgCgCgEgNggmjQgEgCgCgEQgBgEABgEQACgDAEgCIA4gWQAEgBAEABQAEACABAEQABAEgBADQgCAEgEABIg3AXIgEAAIgEAAgEgd5gmqIg7gHQgEgBgDgDQgCgDAAgEIAAAAQABgFADgCQADgDAEABIA8AHQAEABADADQACADAAAFIAAAAQgBAEgDACQgDACgDAAIgCAAgEgoTgmxQgDgCgBgEIAAAAQAAgEACgDQADgEAEAAIA9gHQAEAAADADQADACABAEIAAAAQAAAEgCADQgDAEgEAAIg9AHIgBAAQgDAAgDgDgEANFgmyIg4gVQgEgCgCgDQgCgEABgEIAAAAQACgEAEgCQADgCAEACIA5AVQAEABABAEQACAEgCAEQgBAEgEACIgEAAIgDAAgEgfwgm3Ig8gFQgEAAgDgDQgDgDABgEQAAgFADgCQADgDAFAAIA8AFQAEAAADADQADADgBAEIAAABQAAAEgDACQgDADgDAAIgCAAgEgmbgm9QgDgCAAgFQgBgEADgDQADgDAEAAIA9gEQAEAAADADQADADAAADIAAABQAAAEgCADQgDADgEAAIg8AEIgBAAQgEAAgDgDgEA0Pgm+Ig1gdQgEgCgBgEQgBgEABgDIABAAQACgEADgBQAEgCAEACIA2AeQADACABADQACAEgCAEIAAAAQgDAEgEABIgCAAIgFgBgEghogm/Ig8gCQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA9ACQAEAAADAEQACACAAAEIAAABQAAAEgDADQgDACgEAAIAAAAgEgkignDQgDgDAAgEQAAgEACgDQADgDAFAAIA8gBQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIg8ABIAAAAQgEAAgDgDgEgLwgnOQgEgCgBgEIAAAAQgCgEACgDQACgEAEgBIA6gTQAEgBAEACQADACABADIAAABQABAEgCADQgBAEgEABIg6ATIgDAAIgEgBgEAS1gnSQgEgBgCgEIAAAAQgCgEABgEQABgEAEgCIA2gbQAEgCAEABQADACACADQACAEgBAEQgCAEgDACIg1AbIgFABIgDAAgEALUgnaIg6gSQgDgBgDgEQgBgDABgEIAAAAQABgEAEgCQADgCAEABIA6ASQAEABACAEQABADgBAEIAAABQgBADgEACIgEABIgDAAgEgJ+gnxQgDgDgBgEIAAAAQgBgEACgDQACgEADgBIA7gQQAEAAAEACQADACABAEIAAAAQABAEgCADQgCAEgEABIg6APIgDABIgFgBgEAylgn2Ig3gZQgEgCgBgEQgBgEABgDQACgEAEgBQAEgCAEACIA2AZQAEACABAEQACAEgCAEQgCADgEACIgDAAIgEgBgEAJhgn7Ig6gPQgEAAgCgEQgCgDAAgEIAAAAQABgFAEgCQADgCAFABIA6AOQAEABACAEQACADgBAEIAAAAQgBAEgEACQgCACgDAAIgCAAgEAUggoIQgDgBgCgEIAAAAQgCgEABgEQACgEAEgBIA3gYQAEgCAEACQADABACAEQACAEgCADQgCAEgDACIg3AYIgEABIgEgBgEgIJgoPQgEgCAAgEIAAAAQgBgEACgEQACgDAEgBIA8gNQAEAAAEACQADACABAEQABAEgDAEQgCADgEABIg8ANIgCAAQgDAAgCgCgEAHtgoWIg8gLQgDgBgDgDQgCgDAAgEIAAgBQABgDAEgDQADgCAEAAIA8AMQAEAAACAEQACADgBAEIAAAAQAAAEgEADQgCABgDAAIgCAAgEgGRgomQgDgDAAgEIAAAAQgBgEACgDQADgDAEgBIAdgFIAZgEQAFAAADACQADADABAEQAAAEgCAEQgDADgEAAIgYAEIgeAEIgCABQgDAAgDgCgEAw3gomIg4gWQgEgCgCgDQgCgEACgEIAAgBQABgDAEgCQAEgCAEACIA4AWQAEACACAEQACADgCAEIAAAAQgCAEgEACIgDAAIgEAAgEAF5goqIg8gIQgEAAgDgEQgCgDAAgEQABgEADgDQADgCAFAAIA7AIQAFABACADQADADgBAFIAAAAQAAAEgEACQgCACgEAAIgBAAgEgEego3QgDgCgBgEQAAgEADgDQACgEAEAAIA9gGQAEgBADADQADADABAEQAAAEgDADQgCADgEABIg9AGIgBAAQgDAAgDgDgEAWOgo3QgDgBgCgEIAAAAQgBgEABgEQACgEAEgBIA4gVQAEgBAEACQAEACABADIAAABQACADgCAEQgCAEgEABIg4AUIgEABIgEgBgEAEBgo4Ig8gFQgEgBgDgDQgDgDABgEQAAgEADgDQADgDAEABIA9AFQAEAAADADQADAEgBAEQAAAEgEADQgCACgEAAIgBAAgEgClgpBQgDgDgBgEQAAgEADgDQACgDAEgBIA9gDQAFAAADADQADADAAAEQAAAEgDADQgDADgEAAIg8ADIgBAAQgDAAgDgCgEACJgpBIg7gCQgFAAgCgEQgDgCAAgEIAAAAQAAgFADgCQADgDAEAAIA8ACQAEAAADADQADAEAAAEQAAAEgEADQgCACgEAAIgBAAgEgAtgpGQgDgDAAgEIAAAAQAAgEADgDQADgDAEAAIAugBIAKAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgKAAIgtABIgBAAQgEAAgDgDgEAvHgpRIg6gTQgEgBgBgDQgCgEABgEQABgEADgCQAEgCAEABIA6ATQAEACACAEQACADgCAEIAAAAQgBAEgEACIgEABIgDgBgEAX/gpeQgDgCgCgEIAAgBQgBgDACgEQACgDAEgCIA5gRQAEgBAEACQADABACAEIAAABQABADgCAEQgCAEgEABIg5ARIgDABIgFgBgEAtUgp1Ig6gPQgEgBgCgEQgCgDABgEQABgEADgCQAEgCAEAAIA7AQQADABADAEQACADgBAFQgCADgDACIgFACIgDgBgEAZzgqAQgEgCgBgEIAAgBQgBgDACgEQACgDAEgCIA7gOQAEAAAEACQADACABADIAAABQABAEgCAEQgCADgEABIg7AOIgCAAQgDAAgCgBgEArfgqSIg6gLQgEgBgDgEQgCgDABgEIAAgBQABgDADgCQADgDAEABIA8AMQAEABACADQACAEAAADIAAABQgBAEgEACQgCACgDAAIgDgBgEAbngqbQgDgCgBgEIAAgBQgBgDACgEQADgDAEgBIA9gLQAEgBADACQADACABAFQABAEgCADQgDADgEABIg8ALIgCABQgDAAgDgCgEAppgqoIgIgCIgZgDIABAAIgXgDQgFgBgCgDQgDgDABgFIAAAAQABgEADgCQADgDAEABIAXADIABAAIAYADIABAAIAJACQAEABACAEQACADAAAEIAAABQgBAEgEACQgCABgDAAIgDAAgEAdbgqwQgDgDgBgDIAAgBQAAgEACgDQADgEAEAAIA8gIQAEgBADADQAEACAAAFIAAAAQABAEgDADQgCADgEABIg8AIIgCAAQgDAAgDgCgEAn2gq4Ig7gGQgEAAgDgDQgDgDABgEIAAgBQAAgEADgDQADgCAEAAIA9AGQAEABACADQADADgBAEIAAABQAAAEgEACQgCACgEAAIgBAAgEAfUgq/QgEgDAAgEIAAAAQgBgEADgDQADgDAEgBIA9gFQAEAAADADQADACAAAFIAAAAQAAAEgCADQgDADgEAAIg8AFIgBAAQgEAAgCgCgEAl/grDIg8gDQgEAAgDgDQgDgDAAgEIAAAAQABgEADgDQACgDAFAAIA8ADQAFABACADQADADAAAEQgBAEgDADQgDACgDAAIgBAAgEAhMgrIQgDgDAAgEQAAgEACgDQADgDAEAAIA8gCQAFAAADACQADADAAAEIAAAAQAAAFgDADQgDADgEAAIg8ACIAAAAQgEAAgDgDgEAkHgrIIgzAAIgIAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAIAAIA0AAQAEAAADADQACADAAAEQAAAFgDADQgDACgEAAIAAAAg");
	this.shape_60.setTransform(581.7,504.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("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nQAEAAADgDQADgCABgEQADgeAFgdQABgEgCgEQgDgDgEAAIAAAAIAHgoQAEABADgDQAEgCABgEIANg5QABgEgDgEQgCgDgDgBIAKgmQAEABADgCQAEgCABgEIASg4QACgEgCgEQgCgEgEgBIAAAAIAOgmQADABAEgBQAEgCABgEIAXg3QACgEgCgEQgBgEgEgBIARglQAEACAEgBQAEgCABgEQANgaAPgbQACgDgCgEQgBgEgDgCIAUgjQADACAEgBQAEgBACgEIAggyQACgEgBgEQgBgEgDgCIAXghQADACAEAAQAEgBADgEIAjgvQACgDAAgFQgBgEgDgCIAZggQADADAEgBQAEAAADgDIAngtQADgEgBgEQAAgEgDgDIAbgdQADADAEAAQAEAAADgDIAqgrQADgDAAgEQAAgEgDgDIAdgbIAAAAQACADAFAAQAEAAADgCIAtgpQADgDAAgEQABgEgDgDIAAAAIAcgZIAFgEQADADAEABQAEAAADgCIAvgmQADgCAAgEQABgFgDgDIAggYIAAAAQACAEAEAAQAEABAEgDIAwgiQADgDABgEQABgEgCgEIAhgVQACADAEABQAEAAADgCIAzggQAEgCABgEQABgEgDgDIAjgUQACADAEABQAEABADgCIA1gdQADgCABgEQACgEgCgDIAjgTIAAABQACADAEACQAEABAEgCIA2gaQAEgBABgEQACgEgCgEIAAAAIAlgQIAAAAQABAEAEABQAEACAEgCIA3gWQAEgBACgEQABgEgBgEIAAAAIAlgOIAAAAQACAEAEACQADACAEgCIA4gTQAEgBACgEQACgDgBgEIAAgBIAmgLIAAAAQACAEADACQAEACAEgBIA6gQQAEgBACgEQACgDgBgEIAAgBIAngJIAAAAQABAFAEACQADACAEgBIA6gMQAEgBACgEQACgDAAgEIgBgBIApgIIABABQAAAEAEACQADADAEgBIA5gKQAEAAACgEQADgDgBgEIAngGQABAEADACQADADAFAAIA8gHQAEAAADgEQACgDAAgEIAAAAIAogEQAAAFADACQAEADAEAAIA8gEQAEAAADgDQADgDgBgEIAAgBIApgBQAAAEADADQADADAEAAIA8gBQAEAAADgDQADgDAAgEIACAAIAlAAQAAAEADADQADADAEAAIA8ACQAEAAADgCQADgDAAgEIAAgBIApADQAAAEACADQADADAEAAIA9AFQAEAAADgDQADgCAAgEIAoAEQAAAEADADQACADAEABIA8AHQAEABADgDQADgCABgEIARACIAUADQgBAEACADQADAEAEABIA7AKQAEABAEgCQADgDABgEIAoAIQgBAEACAEQACADAEABIA7AOQAEAAADgCQAEgCABgEIAmAKQgBAEACAEQACADAEABIA5ARQAEABAEgCQAEgBABgEIAAAAIAmAMQgBAEACAEQACADAEACIA4AUQAEACAEgCQAEgCABgEIAmAPIAAAAQgCAEACAEQABAEAEABIA2AXQAEACAEgCQAEgBACgEIAlARQgCAEABAEQACADAEACIAtAXIAFABIAFgBIAFgDQAEgCABgEQABgEgDgEIAAgBIAigXIAAABQADADAEABQAEABADgCIAtgcIABAAIAFgDQADgCABgEQABgEgCgEIAjgUQACAEAEABQAEABAEgCIA0gcQAEgCABgEQABgEgCgEIAkgSQACAEAEABQADACAEgCIA2gZQAEgCACgDQABgEgBgEIAlgQQABAEAEACQAEABAEgBIA3gXQAEgBACgEQACgDgCgEIAmgOIAAAAQABAEAEACQAEACAEgBIA5gTQAEgBACgEQACgDgCgEIAAgBIAngLIAAAAQABAEADADQAEACAEgCIA6gPQAEgBACgEQADgDgBgEIAAAAIAngJIAAAAQAAAEAEACQADACAEAAIA8gNQAEgBADgDQACgEgBgEIAqgHIAAAAQAAAEAEADQADACAEgBIAegEIAYgEQAEAAADgDQACgEAAgEIAogFQABAEADACQADADAFAAIA8gGQAEgBACgDQADgDAAgEIAogDQABAEADADQADACAEAAIA8gDQAEAAADgDQADgDAAgEIAogBIAAAAQAAAEADADQADADAFAAIAtgBIAKAAQAEAAADgDQADgDAAgEIAoABQAAAEADACQACAEAFAAIA7ACQAFAAADgCQADgDAAgEIAoACQAAAEACADQADADAEABIA8AFQAEAAAEgCQADgDAAgEIAoAEQAAAEACADQADAEAEAAIA8AIQAEABADgDQAEgCAAgEIATADIATADQgBAEACADQADADAEABIA7ALQAEABADgCQAEgDABgEIAnAJQgBAEACADQACAEAEAAIA6APQAEAAADgCQAEgCABgEIAnALQgBAEACADQACAEAEABIA5ASQAEABADgCQAEgCABgDIAmAMQgBAEACADQACAEAEACIA4AVQAEABADgBQAEgCACgEIAlAPQgCAEACAEQABADAEACIA4AZQADACAEgCQAEgBACgEIAAAAIAjAQQgBAEABAEQABAEAEACIAQAIIAFABIAFgCIAggWQAEgCABgEQAAgEgCgDIAjgXIABABQACADAEABQAEABAEgCIAJgHIAAAAIAngWQAEgCABgEQABgEgCgEIAAAAIAjgTIAAAAQACAEAEABQAEABAEgCIA1gbQAEgCABgEQABgEgCgEIAlgRQACAEADABQAEABAEgBIA3gYQADgCACgEQACgDgCgEIAlgPQACAEADABQAEACAEgCIA4gUQAEgBACgEQACgEgCgDIAAgBIAmgNIAAABQACAEADACQAEABAEgBIA5gRQAEgBACgEQACgEgBgDIAAgBIAngLIAAABQABAEAEACQADACAEgBIA7gOQAEgBACgDQACgEgBgEIAAgBIAngIIAAABQABAEADACQAEACAEgBIA8gLQAEgBADgDQACgDgBgEIAkgGQABADADADQAEACAEAAIA8gIQAEgBACgDQADgDgBgEIApgFQAAAEAEADQADADAEgBIA8gFQAEAAADgDQADgDgBgEIApgDQAAAEADADQADADAEAAIA8gCQAEAAADgDQADgDAAgFIAAAAIApAAQAAAEADADQADADAEAAIAIAAIAzAAQAEAAADgCQADgDAAgFIAoACIAAAAQAAAEADADQADADAEAAIA8ADQAEAAADgCQAEgDAAgEIAoADIAAABQgBAEADADQADADAEAAIA7AGQAEABAEgDQADgCAAgEIAAgBIAoAFIAAAAQgBAFADADQACADAFABIAXADIgBgBIAaAEIAIACQAEABADgCQAEgCABgEIAAgBIAnAGIAAABQgBAEADADQACAEAEABIA7ALQAEABADgCQAEgCABgEIAAgBIAnAKQgBAEACADQACAEAEABIA6APQAEACAEgDQADgCACgDIAmALQgBAEACAEQACADADABIA6ATQADACAEgCQAEgCABgEIAAAAIAmANIAAABQgBAEABAEQACADAEACIA4AVQAEACAEgCQADgBACgEIAAAAIAlAQQgBADABAEQABAEAEACIA3AZQADACAEgBQAEgCACgDIAkASIAAAAQgCADABAEQABAEAEACIA1AdQAEACAEgBQAEgBACgEIAAAAIAjAUIgBAAQgCAEABAEQABAEAEACIAzAfQAEACAEAAQAEgBACgEIAhAWQgCAEABADQABAFADACIAxAjQAEACAEgBQAEgBACgDIAgAYQgCADAAAEQABAFADACIAwAmQADADAEgBQAEAAADgDIATAQIAIAGQgDADAAAEQABAFADACIAtAoQADACAEAAQAEAAADgDIAdAbQgDADAAAEQAAAEADADIAqAqQADADAEAAQAEAAADgDIAcAdQgDADgBAEQAAAEADADIAoAsQADADAEABQAEAAADgDIAZAfQgDADgBADQAAAFADADIAjAvQADADAEABQAEABADgDIAYAhQgEADAAAEQgBAEACADIAhAzQACADAEABQAEABAEgCIAUAiQgDACgBAEQgBAEACAEQAOAZAOAbQACADAEACQAEABADgCIASAlQgDACgCADQgBAEABAEIAYA3QACAEAEACQADABAEgBIAAAAIAPAlIgBAAQgDABgCAEQgCAEABAEQALAcAJAdQABAEAEABQADACAEgBIAMAoQgEABgCADQgCAEABAEIAOA6QABAEADACQAEACAEgBIAAAAIAIAnQgEABgDADQgCADABAEIAJA8QABAEADADQADACAEAAIAFAoQgEABgDADQgDADABAEQADAeABAeQABAEADADQADADAEAAIABAoIAAAAQgEAAgDAEQgDACAAAFIABAcIAAAYQAAAEADADQADADAEAAIgCAnQgEAAgDADQgDADAAAEIgEA7QgBAEADADQADADADABIgEAnQgEAAgDACQgDADgBAEIgIA7QgBAEACAEQACADAEAAIgIAoQgDgBgEACQgDACgBAEIgOA7QgBAEACADQACAEAEABIgLAmQgEgBgDACQgEACgBAEIgTA5QgBAEABADQACAEAEACIgPAlQgDgCgEACQgEACgBAEIgYA3QgCADACAEQABAEAEABIgSAlQgDgCgEACQgEABgCAEIgcA0QgCAEABAEQABAEADACIgVAjQgDgCgEABQgEABgCADIghAzQgCADABAEQAAAEAEACIgXAhQgEgCgEABQgEABgCADIgkAvQgDADAAAEQABAEADADIAAAAIgZAfQgDgDgEABQgEAAgDADIgoAtQgDADAAAEQABAEADADIAAAAIgbAdIgBAAQgDgDgEAAQgEAAgDADIgqAqQgDAEAAADQAAAEADADIgcAaQgDgDgEAAQgEAAgDADIguAoQgCACgBADQgBAEACADIABACQACADAEACQADABADgBIAOAlQgEACgCADQgBAEABAEIASA5QABAEAEACQADACAEgBIALAmIgBAAQgEACgCADQgCAEABAEIAOA6QAAAEAEADQADACAEgBIAHAoIAAAAQgEABgCADQgDADABAFQAFAdADAeQABAFADACQADADAEgBIAEApQgEAAgCADQgDADAAAEQADAeABAfQAAAEADACQADADAEAAIABAoQgEAAgDADQgDADAAAEIAAABIgBA6QAAAEADADQACADAEAAIgCAoQgEAAgDACQgDADAAAEQgCAegEAdQAAAEADAEQACADAEAAIgGAoQgDgBgEADQgDACgBAEIgKA7QgBAEADADQACAEAEAAIgJAoQgEgBgDACQgEACgBAEIgPA5QgBAEACAEQACADAEABIgMAnQgEgCgEACQgDACgCAEIgTA4QgCAEACAEQABADAEACIgPAlQgEgCgDACQgEABgCAEIgZA3QgBADABAEQABAEAEABIgTAkQgDgBgEABQgDABgCADQgOAbgQAaQgCADABAEQABAEADACIgVAiQgDgCgEABQgEABgCADQgQAZgRAYQgDAEABAEQABAEADACIgYAgQgDgCgEABQgEAAgDAEIglAvQgDADABAEQAAAEADADIgaAfQgDgDgEAAQgEAAgDADIgoAtQgDADAAAEQAAAEADADIgcAdQgDgDgEAAQgEAAgDADIgrApQgDADAAAEQAAAEACADIgdAcQgDgDgEgBQgEAAgDADIgpAjIAAAAIgHAGQgDACgBAEQAAAEADAEIgfAZQgDgEgEAAQgEgBgDADIgwAkQgDADgBAEQAAAEACADIggAXQgCgDgEgBQgEAAgEACIgxAhQgEADAAAEQgBAEACADIgiAVQgCgDgEgBQgEgBgDACIgzAfQgEACgBAEQgBAEACADIgjAUQgCgEgEgBQgEgBgDACIg1AbQgDACgCAEQgBAEACAEIgkARQgCgEgEgBQgEgCgDACIg4AZQgDACgCAEQgBADABAEIglAQIAAgBQgCgDgEgCQgDgCgEACIgPAGIAAAAIgqAPQgEACgCADQgBAEABAEIAAAAIgmANQgBgEgEgCQgDgBgEABIg5ARQgEABgCAEQgCAEABADIgmALQgBgEgEgCQgEgCgEABIg6AOQgEABgCAEQgCAEABAEIAAAAIgnAIQgBgEgEgCQgDgCgEABIg7ALQgEABgDADQgCADABAEIgnAGQgBgDgDgDQgEgCgEAAIg7AIQgEABgCADQgDADAAAEIgoAFIAAAAQgBgEgDgDQgDgDgEABIg8AFQgEABgDADQgDADABAEIgoADQAAgEgDgDQgDgDgFAAIg7ADQgFAAgCADQgDADAAAEIgpAAQAAgDgDgDQgDgDgEAAIgUAAIgpAAQgEAAgDADQgCADgBADIgngBQAAgEgDgDQgDgDgEAAIg6gDQgFAAgDADQgDACAAAFIAAAAIgPgBIgbgCIAAAAQABgEgDgDQgDgDgEgBIg7gFQgEgBgDADQgEADAAAEIgogGQABgEgDgDQgCgDgEgBIg7gIQgEgBgDADQgDACgBAEIgngHQABgEgCgDQgDgDgEgBIg6gMQgEgBgDACQgEACgBAEIgngJQABgDgCgEQgCgEgEAAIg6gQQgEgBgEACQgDADgBADIgngKQACgEgCgEQgCgEgEgBIg5gSQgEgBgEACQgDACgCADIglgNQABgEgCgDQgBgEgEgCIg2gUQgEgCgEACQgEABgBAEIgbgLIgKAKIAAAAQgDgDgEAAQgEAAgDADIgrApQgDAEAAAEQAAAEADADIAAAAIgcAbIgBAAQgCgEgFAAQgEAAgDADIgtAoQgDACgBAFQAAAEADADIAAAAIgGAFIgYAUQgDgDgEgBQgEAAgDACIgvAlQgDADgBAEQAAAEACADIggAYQgCgDgEgBQgEgBgDACIgyAjQgDACgBAEQgBAEADAEIgiAWQgCgEgEgBQgEAAgEACIgzAfQgEACgBAEQgBAEACAEIAAAAIgiAUQgCgEgEgBQgEgBgEACIg0AcQgEACgBAEQgBAEABADIgjASQgCgEgEgBQgEgCgDACIg3AZQgDACgCAEQgBADABAEIAAABIgkAPQgCgEgDgBQgEgCgEACIg3AVQgEACgCAEQgBADABAEIgmANQgBgDgEgCQgDgCgEABIg5ATQgEABgCAEQgCADABAEIglALQgBgEgEgCQgDgCgEABIg5AQQgEAAgDAEQgCAEABADIgnAKIAAgBQgBgEgDgCQgEgCgEABIg6AMQgEABgDADQgCADABAEIAAABIgnAHIAAAAQgBgFgDgCQgEgCgEAAIg6AJQgFABgCADQgDADABAEIAAABIgoAFIAAAAQAAgFgDgCQgEgDgEABIg7AGQgFAAgCADQgDADAAAFIAAAAIgoADQAAgEgDgDQgDgDgEABIg7ADQgFAAgCADQgDADAAAEIAAAAIgoACQAAgFgDgCQgDgDgEAAIg0AAIgPAAQgEAAgDADQgDADAAAEIgoAAg");
	this.shape_61.setTransform(581.7,504.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(154.6,226,854.2,556.3);
p.frameBounds = [rect];


(lib.beeBoxWings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset6();
	this.instance.parent = this;
	this.instance.setTransform(-158.5,-282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-282,317,564);
p.frameBounds = [rect];


(lib.beeBoxLid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EgonAFeIAAq7MBRPAAAIAAK7g");
	this.shape.setTransform(245,-63);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ears
	this.instance = new lib.Asset5();
	this.instance.parent = this;
	this.instance.setTransform(202.2,-328.5,1,1,0,-11.5,168.5);

	this.instance_1 = new lib.Asset5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288.8,-328.5,1,1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-328.5,520,300.5);
p.frameBounds = [rect];


(lib.beeBox_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AP3bWIAAAAIALAAMAAAg2rIK8AAMAAAA2rIg6AAIAAAAgAkbbWIAAAAIhbAAMAAAg2rIK7AAMAAAA2rIAtAAIAAAAgA4tbWIAAAAIjAAAMAAAg2rIK8AAMAAAA2rICSAAIAAAAgAt/SpQAAhFgwgxQgxgwhFAAIAAgBQBFAAAxgwQAwgxAAhFIABAAQAABFAxAxQAxAwBEAAIAAABQhEAAgxAwQgxAxAABFgEAidAFrQAAhFgwgxQgygwhEAAIAAgBQBEAAAygwQAwgxAAhFIABAAQgBBFAxAxQAxAwBEAAIAAABQhEAAgxAwQgxAxABBFgEgicgGgQAAhFgxgxQgxgwhFAAIAAgBQBFAAAxgwQAxgxAAhFIAAAAQAABFAwAxQAyAwBEAAIAAABQhEAAgyAwQgwAxAABFgAKZncQgBhFgwgxQgxgwhFAAIAAgBQBFAAAxgwQAwgxABhFIAAAAQAABFAwAxQAyAwBEAAIAAABQhEAAgyAwQgwAxAABFg");
	this.shape.setTransform(-13.5,68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AadbWIAAAAIA5AAMAAAg2rIK8AAMAAAA2rIjHAAIAAAAgEAiFACUQgxAwhFAAIAAABQBFAAAxAwQAwAxAABFIABAAQAAhFAxgxQAxgwBEAAIAAgBQhEAAgxgwQgxgxAAhFIgBAAQAABFgwAxgAGLbWIAAAAIgtAAMAAAg2rIK8AAMAAAA2rIgLAAIAAAAgAKBqzQgyAwhEAAIAAABQBEAAAyAwQAwAxAABFIAAAAQABhFAwgxQAxgwBFAAIAAgBQhFAAgxgwQgwgxgBhFIAAAAQAABFgwAxgAuHbWIAAAAIiSAAMAAAg2rIK8AAMAAAA2rIBbAAIAAAAgAuWPSQgyAwhEAAIAAABQBEAAAyAwQAwAxAABFIAAAAQAAhFAxgxQAxgwBEAAIAAgBQhEAAgxgwQgxgxAAhFIAAAAQAABFgwAxgEgjIAbWIAAAAIjJAAMAAAg2rIK8AAMAAAA2rIDBAAIAAAAgEgi1gJ3QgwAwhFAAIAAABQBFAAAwAwQAxAxAABFIAAAAQABhFAwgxQAxgwBFAAIAAgBQhFAAgxgwQgwgxgBhFIAAAAQAABFgxAxg");
	this.shape_1.setTransform(-16,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-261,-107,490,350.1);
p.frameBounds = [rect];


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, rect = new cjs.Rectangle(-47.8,-45.6,95.7,91.3), [rect]);


(lib.Stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Star Orange1
	this.instance = new lib.Tween29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-77.2,1006.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween30("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123.4,-117.6);

	this.instance_2 = new lib.Tween31("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.5,1019.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween32("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-388.5,-252.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},29).to({state:[]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,x:-123.4,y:-117.6},29).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({_off:true,x:-388.5,y:-252.5},29).wait(8));

	// Star Purple
	this.instance_4 = new lib.Tween27("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-71.5,1021.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween28("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(384.9,277.1,1,1,0,0,0,14.3,-5.7);

	this.instance_6 = new lib.Tween29("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-77.2,1006.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween30("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-123.4,-117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},29).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},29).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true,regX:14.3,regY:-5.7,x:384.9,y:277.1},29).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({_off:true,x:-123.4,y:-117.6},29).wait(3));

	// Star Pink1
	this.instance_8 = new lib.Tween31("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-5.5,1019.7);

	this.instance_9 = new lib.Tween32("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-388.5,-252.5);

	this.instance_10 = new lib.Tween35("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-88.3,1019.7);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween36("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(47.8,-326.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},29).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},29).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:-388.5,y:-252.5},29).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).to({_off:true,x:47.8,y:-326.4},29).wait(9));

	// Star Green1
	this.instance_12 = new lib.Tween33("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-101.2,1019.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween34("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(83.5,63.7);

	this.instance_14 = new lib.Tween23("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-101.2,1019.7);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween24("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(325,-235.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},29).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},29).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({_off:true,x:83.5,y:63.7},29).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},0).to({_off:true,x:325,y:-235.1},29).wait(5));

	// Star Blue1
	this.instance_16 = new lib.Tween35("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-88.3,1019.7);

	this.instance_17 = new lib.Tween36("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(47.8,-326.4);

	this.instance_18 = new lib.Tween27("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-71.5,1021.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween28("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(384.9,277.1,1,1,0,0,0,14.3,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},29).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},29).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,x:47.8,y:-326.4},29).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(31).to({_off:false},0).to({_off:true,regX:14.3,regY:-5.7,x:384.9,y:277.1},29).wait(9));

	// Star Yellow
	this.instance_20 = new lib.Tween23("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-101.2,1019.7);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween24("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(325,-235.1);

	this.instance_22 = new lib.Tween21("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-28.1,1019.9);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween22("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-620.1,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},8).to({state:[{t:this.instance_21}]},29).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(8).to({_off:false},0).to({_off:true,x:325,y:-235.1},29).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(39).to({_off:false},0).to({_off:true,x:-620.1,y:155},29).wait(1));

	// Star Red1
	this.instance_24 = new lib.Tween21("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-28.1,1019.9);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween22("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-620.1,155);

	this.instance_26 = new lib.Tween23("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-101.2,1019.7);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween24("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(325,-235.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},29).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},29).to({state:[]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({_off:false},0).to({_off:true,x:-620.1,y:155},29).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(34).to({_off:false},0).to({_off:true,x:325,y:-235.1},29).wait(6));

	// Star Teal
	this.instance_28 = new lib.Tween17("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-28.1,1019.9);

	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(-273.4,191.5);

	this.instance_29 = new lib.Tween33("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-101.2,1019.7);
	this.instance_29._off = true;

	this.instance_30 = new lib.Tween34("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(83.5,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28}]}).to({state:[{t:this.movieClip_2}]},29).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},29).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({_off:true,x:-273.4,y:191.5,mode:"independent"},29).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(31).to({_off:false},0).to({_off:true,x:83.5,y:63.7},29).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.2,974.1,178.5,91.5);
p.frameBounds = [rect, new cjs.Rectangle(-131.5,927.7,160.6,137.7), new cjs.Rectangle(-126.8,881.2,142.7,145.4), new cjs.Rectangle(-128.3,834.8,148,230.8), new cjs.Rectangle(-149,788.4,148.3,276.9), new cjs.Rectangle(-142.7,742,135.9,325.2), new cjs.Rectangle(-137.2,695.6,146.2,346), new cjs.Rectangle(-157.6,649.2,182.3,366.7), new cjs.Rectangle(-178,602.7,218.5,462.6), new cjs.Rectangle(-198.4,556.3,254.6,465.8), new cjs.Rectangle(-218.9,509.9,290.8,468.9), new cjs.Rectangle(-239.3,463.5,326.9,472.1), new cjs.Rectangle(-259.7,417.1,363,475.2), new cjs.Rectangle(-280.1,370.7,399.2,491.2), new cjs.Rectangle(-300.5,324.2,435.4,511.9), new cjs.Rectangle(-320.9,277.8,471.5,532.7), new cjs.Rectangle(-341.3,231.4,507.7,553.4), new cjs.Rectangle(-361.7,185,543.8,574.2), new cjs.Rectangle(-382.2,138.6,580,594.9), new cjs.Rectangle(-402.6,92.2,616.1,615.6), new cjs.Rectangle(-423,45.7,652.2,636.4), new cjs.Rectangle(-443.4,-0.7,688.3,657.1), new cjs.Rectangle(-463.8,-47.1,724.6,677.9), new cjs.Rectangle(-484.2,-93.5,760.7,698.6), new cjs.Rectangle(-504.6,-139.9,796.8,719.3), new cjs.Rectangle(-525,-186.4,833,740.2), new cjs.Rectangle(-545.5,-232.8,869.1,760.8), new cjs.Rectangle(-565.9,-279.2,905.3,781.6), new cjs.Rectangle(-586.3,-325.6,941.4,802.3), new cjs.Rectangle(-606.7,-372,977.6,823.1), new cjs.Rectangle(-627.1,-372,1013.7,797.5), new cjs.Rectangle(-647.5,-163.2,1049.9,1230.4), new cjs.Rectangle(-667.9,-64.4,1086,1129.8), new cjs.Rectangle(-667.9,-107.7,1101.7,1129.2), new cjs.Rectangle(-149,-150.9,567.5,1216.3), new cjs.Rectangle(-149,-194.2,567.5,1259.6), new cjs.Rectangle(-134.3,-237.5,552.8,1259.6), new cjs.Rectangle(-125.1,-280.7,497.9,1346.1), new cjs.Rectangle(-132.6,-280.7,505.5,1307.4), new cjs.Rectangle(-145.8,602.7,265,462.8), new cjs.Rectangle(-159,556.3,293.9,479.4), new cjs.Rectangle(-172.2,509.9,322.8,496.1), new cjs.Rectangle(-185.4,463.5,351.8,512.6), new cjs.Rectangle(-198.6,417.1,380.7,529.2), new cjs.Rectangle(-211.8,370.7,409.6,545.8), new cjs.Rectangle(-225,324.2,438.6,562.4), new cjs.Rectangle(-238.2,277.8,467.5,579), new cjs.Rectangle(-251.5,231.4,496.5,595.6), new cjs.Rectangle(-264.7,185,525.4,612.2), new cjs.Rectangle(-280.1,138.6,556.5,628.8), new cjs.Rectangle(-300.5,92.2,592.7,645.3), new cjs.Rectangle(-320.9,45.7,628.8,661.9), new cjs.Rectangle(-341.3,-0.7,665,678.5), new cjs.Rectangle(-361.7,-47.1,701.1,695.2), new cjs.Rectangle(-382.2,-93.5,737.3,711.7), new cjs.Rectangle(-402.6,-139.9,773.5,728.3), new cjs.Rectangle(-423,-186.4,809.6,744.9), new cjs.Rectangle(-443.4,-232.8,845.7,761.5), new cjs.Rectangle(-463.8,-279.2,881.9,778.1), new cjs.Rectangle(-484.2,-325.6,918,794.7), new cjs.Rectangle(-504.6,-372,923.1,811.3), new cjs.Rectangle(-525,-298.2,868.4,707.6), new cjs.Rectangle(-545.5,-237.5,903.6,617.1), new cjs.Rectangle(-565.9,-280.7,938.7,630.5), new cjs.Rectangle(-586.3,-280.7,959.1,600.7), new cjs.Rectangle(-606.7,-137.7,532.7,427.9), new cjs.Rectangle(-627.1,-163.2,551.5,423.5), new cjs.Rectangle(-647.5,139.2,95.6,91.3), new cjs.Rectangle(-667.9,109.3,95.7,91.3)];


(lib.playBtn_gphc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.musicNote("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.3,5.3,0.429,0.429);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgK2ArdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAPAAIAzAAQAFAAADACQADADAAAEQAAAFgDADQgDADgEAAIg0AAIgPAAgEgLyArcIg8gCQgEAAgDgDQgCgEAAgDIAAgBQAAgEADgDQADgCAEAAIA7ACQAFAAACADQADADAAAEQAAAFgDADQgDACgEAAIAAAAgEgI+ArYQgDgDAAgEIAAAAQAAgEACgDQADgDAEAAIA8gDQAEAAADACQADADAAAEQABAEgDADQgDADgEABIg8ADIAAAAQgEAAgDgDgEgNqArWIg7gFQgEAAgDgDQgDgEABgEQAAgEAEgDQADgCAEAAIA7AFQAEABADADQADADgBAEQAAAEgDADQgDACgEAAIgBAAgEgHGArRQgDgDgBgEIAAgBQAAgEADgDQACgDAEAAIA8gGQAEgBAEADQADACAAAEIAAABQAAAEgCADQgCADgFABIg8AGIgBAAQgDAAgDgCgEgPhArLIg7gIQgEgBgDgDQgCgEAAgEQABgEADgCQAEgDAEABIA6AIQAFAAACADQADAEgBAEQAAAEgDACQgDADgEAAIgBAAgEgFOArDQgDgCgBgEIAAAAQgBgFADgDQACgDAFgBIA6gJQAEAAAEACQADACAAAEIAAABQABAEgCADQgCADgFABIg7AJIgBAAQgEAAgCgCgEgRXAq5Ig7gLQgEgBgCgDQgCgEAAgDIAAgBQABgEAEgCQADgCAEABIA6AKQAFABACAEQACADgBAEQAAAEgDACQgDACgDAAIgCAAgEgDZAqwQgDgCAAgEIAAAAQgBgFACgDQACgDAFgBIA6gMQAEgBAEACQADACABAFIAAAAQABAEgCADQgCAEgEAAIg8AMIgCABQgDAAgDgCgEgTMAqiIg6gPQgEgBgCgDQgCgEAAgEQACgEADgCQAEgCAEABIA5AOQAFABACADQACAEgBAEIAAAAQgBAEgDACQgDACgDAAIgCAAgEgBjAqXQgDgCgBgEIAAAAQgBgEACgEQACgEAFgBIA5gOQAEgCADADQAEACABAEQABAEgCADQgCAEgEABIg6APIgCAAQgDAAgDgBgEgVAAqDIg5gRQgEgCgCgDQgCgEABgEIAAAAQACgEADgCQAEgBAEABIA4ARQAEABACAEQACAEgBAEIAAAAQgBAEgDABIgFACIgDgBgEAAQAp3QgDgCgCgEQgBgEACgDQACgEAEgBIA5gTQADgBAEACQAEACABAEQACADgCAEQgCAEgEABIg5ATIgDAAIgFgBgEgWyApfIg5gVQgEgBgBgEQgCgEABgEQACgEAEgBQADgCAEACIA5AUQADABACAEQACAEgBAEIAAAAQgCAEgEABIgEABIgDAAgEACCApRQgEgCgBgEIAAAAQgBgEABgDQACgEAEgBIA3gXQAEgBAEABQADACACAEIAAAAQACAEgCAEQgCADgDACIg4AWIgEABIgEgBgEgYiAo0Ig3gYQgEgCgCgEQgBgEACgEQABgDAEgCQAEgBAEACIA2AXQAEACABAEQACAEgCADIAAABQgBADgEACIgEABIgDgBgEADwAokQgDgCgCgEIAAAAQgCgEACgEQABgDAEgCIA3gZQADgCAEACQAEABACAEQACAEgCADQgBAEgEACIg3AaIgEAAIgEAAgEgaQAoCIg0gbQgEgCgBgEQgBgEABgDIAAgBQADgDAEgBQADgBAEABIA0AbQAEACABAEQACAEgCADIAAABQgCADgEACIgDAAIgFgBgEAFdAnwQgEgBgCgEQgCgDACgEQABgEAEgCIA0gcQAEgCAEABQADABACAEIAAAAQACAEgBADQgBAEgDADIg1AcIgFABIgDgBgEgb5AnKIg0geQgEgCAAgEQgBgEACgEIAAAAQACgEAEgBQAEAAADACIA0AeQADACABADQABAEgCAEIAAAAQgCAEgDABIgDAAIgFgBgEAHGAm3QgEgCgCgDQgCgEABgEQABgEAEgCIAzgfQAEgCAEABQADAAADAEIAAAAQACADgBAEQgBAFgEACIgzAfQgDACgCAAIgDAAgEgdgAmMIgygiQgDgCgBgEQgBgEADgDQACgEAEgBQAEAAADACIAyAhQAEADAAAEQABAEgCADQgCAEgEAAIgCABQgDAAgDgCgEAItAl2QgEgBgDgDIAAAAQgCgEABgEQABgEADgCIAxgiQAEgDAEABQAEABACADIAAAAQADADgBAFQgBAEgDACIgyAiQgCACgDAAIgCAAgEgfDAlIIgvgkQgEgCAAgEQgBgFADgDIAAAAQADgDAEgBQAEAAADACIAvAkQADACABAEQABAEgDAEQgCADgEAAIgCABQgDAAgDgCgEAKPAkwQgEAAgDgEIAAAAQgCgDAAgEQABgEADgDIAvgkQADgDAEAAQAEABADADQADADgBAEQAAAEgEADIgvAlQgCACgEAAIgBAAgEAb+AkFIgpAAQgEAAgDgDQgDgDAAgEIAAgBQAAgEADgCQADgDAEAAIApAAIAUAAQAEAAADADQADADAAAEIAAAAQAAAEgDADQgDADgEAAIgUAAgEAdIAkBQgDgDAAgEIAAAAQAAgEACgDQADgDAEAAIA8gDQAEAAAEADQACADABADIAAABQAAAEgDADQgDADgEAAIg8ADIAAAAQgEAAgDgDgEAaZAkDIg7gDQgEAAgDgDQgCgDAAgEIAAgBQAAgEADgCQADgDAFAAIA6ADQAEAAADAEQADACAAAFQAAAEgDACQgDADgEAAIgBAAgEggiAj+IgTgQIgfgbQgDgCgBgEQAAgFADgDQACgDAFAAQAEAAADACIAfAbIATAQQADADABAEQAAAEgCADIgBAAQgCADgEABIgCAAQgDAAgDgDgEAfAAj7QgDgDAAgEQgBgEADgDQADgDAEgBIA8gFQAEgBADADQADADABAEIAAAAQAAAEgCADQgDADgEABIg8AFIgCAAQgDAAgDgCgEAYhAj8Ig8gFQgEgBgDgDQgDgDABgEIAAAAQAAgEADgDQAEgDAEABIA7AFQAEABADADQADADgBAEIAAAAQAAAEgDADQgDACgDAAIgBAAgEAg5AjvQgDgCgBgEQAAgFADgDQACgDAEgBIA7gIQAEAAAEACQADADABADIAAABQAAAEgCADQgDAEgEAAIg8AIIgBAAQgDAAgDgCgEAWpAjvIg7gIQgEgBgCgDQgDgEABgEIAAAAQABgEADgCQADgDAEABIA7AIQAEABACADQADADgBAEQAAAFgEACQgCACgEAAIgBAAgEALrAjlQgDAAgDgDIAAAAQgDgDAAgFQABgEADgCIAtgoQADgDAEAAQAEAAADADIAAABQADADAAAEQAAAEgEADIgtAoQgDACgEAAIgBAAgEAivAjeQgDgCAAgEIAAgBQgBgEACgDQACgDAFgBIA7gMQAEAAADACQAEACABAEIAAAAQAAAEgCAEQgCADgEABIg8AMIgCAAQgDAAgDgCgEAUzAjcIg6gLQgFgBgCgEQgCgDABgEQABgFADgCQAEgCAEABIA6AMQAEABACADQADADgBAEIAAAAQgBAFgDACQgDACgCAAIgDgBgEAkmAjGQgEgCgBgFQAAgDACgEQACgEAEAAIA6gPQAEgBAEACQADACACAEQAAAEgCAEQgCADgEABIg7APIgCAAQgDAAgCgBgEAS+AjDIg6gPQgEgBgDgEQgCgDACgFQABgDADgCQAEgDAEACIA6AOQAEABACAEQACAEgBAEQgBAEgEACQgCABgDAAIgCAAgEgiBAisIgrgqQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIArApQADADAAAEQAAAEgCADQgDADgFAAIAAAAQgEAAgDgCgEAmaAinQgDgCgBgDQgBgEABgEQADgEAEgBIA5gRQAEgBADACQAEABABAEIAAAAQABAEgCAEQgBADgEACIg6ARIgDABIgFgCgEARKAijIg5gSQgEgBgCgEQgCgEABgDIAAgBQACgDADgCQAEgCAEABIA5ASQADABADAEQABAEgBADQgBAEgEADIgEABIgDgBgEANFAiVQgEAAgDgDIAAAAQgDgDAAgEQAAgEADgEIArgpQADgDAEAAQAEAAADADIAAAAQADADAAAEQAAAEgDADIgrAqQgDADgDAAIgBAAgEAoNAiDQgEgCgBgEIAAAAQgCgEACgDQACgEAEgCIAqgPIAAAAIAPgGQADgCAEACQAEACACAEIAAAAQABADgBAEQgCAEgEABIgPAHIAAAAIgrAPIgDABIgEgBgEAPYAh9Ig3gVQgEgCgBgDQgCgEACgEQABgEAEgCQAEgBADABIA3AVQAEACABADQACAEgBAEIAAAAQgCAEgEACIgEABIgDgBgEgjPAhbQgEAAgDgDIgogrQgDgEAAgEQAAgEADgDIABAAQADgCAEAAQAEAAADADIAnArQADADAAAFQAAADgCADIgBABQgDACgEAAIAAAAgEAp/AhWQgEgBgCgEQgCgEACgDQACgEADgCIA4gZQADgCAEACQAEABACAEIAAAAQACAEgCAEQgBADgEACIg4AZIgEABIgDgBgEArtAgkQgEgCgCgDQgCgEABgEQACgEADgCIA1gbQADgCAEABQAEABACAEQACAEgBADQgBAEgEADIg1AbIgEABIgDAAgEgkfAgDQgEgBgDgDIglgvQgCgDAAgEQABgEADgDQADgCAFAAQAEABACADIAlAuQADAEgBAEQAAAEgDACIAAABQgDACgEAAIgBAAgEAtWAfrQgEgBgCgEQgCgDABgEQABgEAEgCIAygfQAEgCAEABQAEABACADIAAABQACADAAAEQgBAEgEACIgzAfQgDABgCAAIgDAAgEAu8AetQgEgBgCgEQgCgDAAgEQABgEAEgCIAxgiQADgCAEABQAFAAACADQACAEAAAEQgBAEgEADIgxAhQgDACgDAAIgCAAgEgloAekQgEgBgDgDIgigxQgCgDABgEQAAgEAEgDIAAAAQAEgCADABQAEABADADIAhAwQADAEgBAEQgBAEgDACQgCACgDAAIgCAAgEAwfAdoQgEAAgDgEQgCgDAAgEQABgEADgDIAwgkQADgDAEABQAEAAACADQADAEAAAEQgBAEgDADIgwAkQgDACgDAAIgBAAgEgmrAdBQgEgBgCgEIgfg0QgBgDABgEQABgEAEgCIAAAAQADgCAEABQAEABACAEIAeAzQACAEgBAEQgBADgDACIgBABQgCABgDAAIgCAAgEAx+AceQgFAAgCgDIAAgBQgDgDAAgDQABgFADgCIAHgGIAAgBIApgiQADgDAEAAQAEABADACIAAABQADADgBAEQAAAEgDADIgpAjIAAAAIgHAGQgDACgEAAIAAAAgEgnlAbZQgEgCgCgDQgOgbgMgcQgCgEACgEQABgEAEgBQAEgCAEACQAEABABAEQAMAbAOAbQACAEgCADQgBAEgDACIgBAAIgEABIgDAAgEAzbAbNQgFAAgDgEIAAAAQgCgDAAgDQAAgFADgCIArgqQADgDAEAAQAEAAACADIABAAQADADAAAEQAAAEgDADIgrAqQgDADgEAAIAAAAgEA0pAZ1IAAAAQgDgDAAgEQAAgEADgDIAogtQADgDAEAAQAEAAADACIABABQADADAAAEQAAAEgDADIgpAtQgDADgEAAIAAAAQgEAAgDgDgEgoXAZsQgEgCgBgEIgVg2QgBgEACgEQABgEAEgBIAAAAQAEgCAEACQAEACABAEIAVA1QABAEgBAEQgCAEgEACIgEAAIgEAAgEA16AYbIgBAAQgDgDAAgEQgBgEADgDIAlgvQADgEAEAAQAEgBADADIAAAAQAEACAAAEQABAEgDAEIgmAwQgCADgEAAIgBAAQgEAAgCgCgEgpAAX3QgEgDgBgEIgQg5QgBgEACgEQACgDAEgCQAEAAAEACQADACABAEIAQA5QABAEgCADQgCAEgEABIgCABIgFgBgEA3DAW7IAAAAQgDgCgBgEQgBgEACgDQASgZAQgZQACgDAEgBQAEgBADACIABAAQADACABAFQABAEgCADQgQAZgSAZQgCADgEABIgCAAQgDAAgDgCgEgpeAWCQgEgCAAgEIgLg6QgBgFACgDQACgDAEgBQAFgBADADQADACABAEIALA6QABAEgCADQgDAEgEAAIgCABQgDAAgCgCgEA4FAVXIgBAAQgDgCgBgEQgBgEACgDQAQgaAOgaQABgEAEgBQAEgBADABIABAAQAEACABAEQABAEgCAEQgOAbgQAaQgCADgEABIgCABQgDAAgCgCgEgpzAUMQgDgCAAgFIgGg8QgBgEADgDQADgDAEAAIAAAAQAEgBADADQADADABAEIAGA7QAAAEgCAEQgDADgEAAIAAAAIgBAAQgEAAgDgCgEA4+ATuIgBgBQgDgBgBgEQgCgEACgDIAZg3QACgEADgBQAEgCAEACIAAAAQAEACACADQABAEgBAEIgaA3QgCAEgEABIgDABIgEgBgEgp9ASUQgDgDAAgEIgCg8QAAgEADgDQACgDAEAAIABAAQAEAAADACQADADAAAEIACA8QAAAEgDADQgDAEgEAAIAAAAIAAAAQgEAAgDgDgEA5uASAIAAAAQgEgCgBgDQgCgEABgEIAUg4QACgEADgCQAEgCAEACIAAAAQAEABACAEQACAEgCADIgUA5QgBAEgEACIgEABIgEgBgEgp4AQeIAAAAQgEAAgDgEQgDgCAAgFIADg7QABgFADgCQADgDAEAAQAEABADADQADADgBAEIgDA7QAAAEgDADQgDADgEAAIAAAAgEA6VAQOIAAAAQgEgBgCgDQgCgEABgEIAPg5QABgEADgCQAEgCAEAAQAEABACAEQACAEgBADIgPA7QgBADgDADIgFABIgDgBgEgpxAOnQgEgBgDgDQgCgDAAgEQADgfAFgdQAAgEAEgDQADgCAEAAIAAAAQAEABADADQACAEAAAEQgFAdgDAeQAAAEgEADQgCACgEAAIgBAAgEA6yAObIgBAAQgDgBgCgEQgDgDABgEIAKg7QABgEADgCQAEgDAEABIAAAAQAEAAACAEQADADgBAEIgKA8QgBAEgEACQgCACgDAAIgCAAgEgp1AM/Ig7gMQgEAAgDgEQgCgDABgEIAAAAQABgEADgDQAEgCAEABIA6ALQAEABADADQACADgBAFQgBAEgDACQgDACgCAAIgCAAgEgrqAMnIg7gOQgEgBgCgEQgCgDABgEIAAAAQABgEAEgCQADgCAEAAIA6APQAEAAACAEQACADgBAEIAAABQgBAEgDACQgCABgDAAIgCAAgEA7FAMkIAAAAQgEAAgCgEQgDgDAAgEQAEgdACgeQAAgEADgDQADgCAEAAIAAAAQAFAAACADQADADAAAEQgCAfgEAeQAAAEgEACQgCACgEAAIgBAAgEgteAMKIg6gSQgEgBgBgEQgCgDABgEIAAAAQABgEAEgCQADgCAEABIA5ARQAEABACAEQACADgBAFIgBAAQgBAEgDACIgFABIgCAAgEgvRALmIg4gVQgEgBgBgEQgCgDABgEIAAAAQACgEAEgCQADgBAEABIA4AUQAEABACAEQACAEgCADIAAABQgBAEgEABIgEABIgEAAgEgxAAK7Ig3gXQgEgCgCgEQgBgDABgEIAAAAQACgEAEgCQAEgBAEABIA2AYQAEACABAEQACADgCAEIAAAAQgBAEgEABIgEABIgDgBgEA7OAKtQgEAAgCgEQgDgCAAgFIABg5IAAgBQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAABIgBA6QAAAEgEADQgCADgEAAIgBAAgEgytAKLIg2gbQgEgCgBgEQgBgEABgDIAAgBQACgEAEgBQAEgBAEACIA1AbQAEACABADQACAEgCAEIgBAAQgBAEgEABIgDABIgEgBgEg0YAJTIg0gdQgDgCgCgEQAAgEACgEQACgDAEgCQAEAAADACIA0AdQADACABAEQABAEgCADIAAABQgCADgDABIgDABIgFgCgEA7IAI0QgDgDAAgFQgBgegDgeQAAgEACgDQADgDAEAAQAFgBADADQADADAAAEQADAeABAfQAAAEgDADQgDADgEAAIAAAAQgEAAgDgCgEg1/AIXIgyghQgDgCgBgEQgBgEACgEIABAAQACgDAEgBQAEgBADACIAyAhQADACABAEQABAEgCADIAAABQgCADgFABIgCAAQgDAAgCgBgEg3iAHUIgxgkQgDgDgBgEQAAgEACgDIABAAQACgEAEAAQAEgBADADIAxAjQADADAAAEQABAEgCADIAAABQgDADgEAAIgCABQgCAAgDgCgEA6/AG7QgDgCgBgEQgDgfgFgeQgBgEADgDQACgDAEgBIAAAAQAEgBADADQAEACABAEQAFAeADAfQABAEgDADQgCAEgEAAIgCAAQgDAAgDgCgEg5CAGLIgegZIAAgBIgtgmQgDgDAAgEQAAgEACgDIAAAAQADgDAEAAQAEAAAEACIAsAmIAAABIABAAIAdAZQADADABAEQAAAEgCADIgBAAQgCADgEABIgBAAQgEAAgDgDgEA6tAFDQgEgCgBgEIgNg6QgBgEACgEQACgDAEgBIABAAQADgBAEACQADACACAEIANA7QABAEgDAEQgCADgEABIgCAAQgDAAgCgCgEg65AEjIgrgqQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIArApQADADAAAFQAAADgDADIAAABQgDADgEAAIAAAAQgEAAgDgDgEg8GADSQgFAAgDgEIgogsQgDgDABgFQAAgEADgCIABAAQADgDADAAQAFABACADIAoAsQADADAAAEQAAAEgDACIAAABQgDADgEAAIAAAAgEA6RADPQgEgCgBgEIgSg5QgCgEACgEQACgDAEgCQAEgBAEACQADACACAEIASA5QABAEgCAEQgCAEgEABIAAAAIgDAAIgEgBgEg9VAB4QgEgBgDgDIglgvQgDgDABgEQAAgEAEgDIAAAAQADgCAEAAQAEABADADIAkAvQADADAAAEQgBAEgDACQgDADgDAAIgBAAgEA5rABeQgDgCgCgDIgBgCQgCgDABgEQABgDACgCIAtgoQAEgDAEAAQAEAAADADIAAAAQADAEgBAEQAAAEgDADIgpAkIgBABQgBAEgEACIgBABIgDAAIgEAAgEg+eAAZQgEgBgDgDIghgxQgCgDABgFQABgEADgCQAEgCAEABQAEABACADIAhAwQACAEgBAEQAAAEgDACIAAABQgDABgDAAIgCAAgEA7GAAMQgEAAgDgDQgDgDAAgEQAAgDADgDIAqgrQADgDAEAAQAEAAADADIAAAAQADADAAAEQAAAEgDADIgqAqQgDADgDAAIgBAAgEA8TgBLIAAgBQgEgDAAgEQAAgEADgDIAogtQACgDAEAAQAFgBADADQADADAAAEQABAEgDADIgoAuQgDADgEAAIgBAAQgEAAgCgCgEg/fgBKQgEgBgCgEIgdg0QgCgEABgDQABgEADgDQAEgBAEABQAEABACAEIAdAzQACAEgBAEQgBAEgDACIAAAAQgDABgCAAIgDAAgEA9hgCnIAAAAQgDgDgBgEQAAgEADgDIAkgvQACgDAEgBQAEgBADADIABAAQADACABAEQAAAEgCAEQgSAYgTAXQgDAEgEAAIgBAAQgDAAgDgCgEhAYgCzQgEgCgCgDIgZg3QgCgEACgEQABgEAEgCQAEgBAEABQAEACABAEIAZA2QACAEgBAEQgCADgEACIgEABIgDAAgEA+pgEHQgEgDgBgEQAAgEACgDIAhgyQACgEAEgBQAEgBADACIABAAQADACABAEQABAEgCAEIgiAzQgCADgEABIgCAAQgDAAgCgBgEhBJgEiQgEgBgBgEIgRguIgFgOQgBgEACgDQACgEAEgCIAAAAQADgBAEACQAEACABADIAFAPIAQAtQACAEgCADQgBAEgEABIAAAAIgEABIgEgBgEA/pgFuIAAAAQgDgCgCgEQgBgEACgEIAdg0QACgEAEgBQAEgCADACIAAAAQAEACABAEQACAEgCAEIgdA1QgCAEgEABIgDAAIgFgBgEhBxgGWQgDgCgCgEIgPg6QAAgEACgEQACgDAEgBQAEgBADACQAEACABAEIAPA6QABAEgCADQgCAEgEABIAAAAIgDAAIgFgBgEBAhgHZQgEgCgCgEQgBgEACgEIAXg3QACgDAEgCQAEgCAEACQADACACADQACAEgCAEIgYA4QgCAEgEABIgDABIgEgBgEhCOgILQgDgCAAgEIgLg7QAAgEACgEQADgDAEgBIAAAAQAEAAADACQAEADAAAEIAKA6QABAFgCADQgDADgEABIAAAAIgCAAQgDAAgDgCgEBBPgJIIAAgBQgEgBgCgDQgCgEACgEIATg5QABgEADgCQAEgCAEABIAAAAQAEABACAEQACAEgBAEIgTA6QgCADgEACIgEABIgDAAgEhCggKCQgDgCgBgFQgDgdgCgfQgBgEADgDQADgDAEAAIAAAAQAEgBADADQADADABAEQACAeADAdQABAEgDAEQgCADgFAAIAAAAIgBAAQgDAAgDgCgEBBzgK7IAAAAQgEgBgCgEQgCgDABgEIAOg6QABgFADgCQAEgCADABIABAAQAEABACADQACAEgBAEIgNA7QgCAEgDACQgDABgCAAIgDAAgEhCqgL6QgDgDAAgEIgBg5IAAgGQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAGIABA5QAAAEgCACQgDAEgFAAIAAAAQgEAAgDgDgEBCNgMxIAAAAQgEAAgCgEQgCgDAAgEIAJg7QABgEADgDQADgCAEAAIAAAAQAFABACADQADADgBAFIgJA8QgBAEgDACQgDACgCAAIgDgBgEhCjgNxIAAAAQgEAAgDgDQgDgDAAgFQABgeADgeQAAgEADgCQADgDAEAAIABAAQAEABACADQADADAAAEQgDAdgBAeQAAAEgDADQgDADgEAAIAAAAgEBCegOnIAAAAQgEgBgDgDQgDgDABgEIAEg7QAAgEADgDQADgDAEAAQAEAAADAEQADADAAAEIgEA7QgBAFgDACQgDADgDAAIgBAAgEhCagPoIAAAAQgFgBgCgDQgDgDABgEQADgfAGgeQAAgEADgCQAEgCAEAAIAAAAQAEABADAEQACADgBAEQgFAdgDAeQgBAEgDADQgDACgDAAIgBAAgEBClgQeQgEAAgDgDQgDgDAAgEIAAgYIgBgdQAAgEADgDQADgDAEAAIAAAAQAEAAADADQADADAAAEIABAdIAAAYQAAAEgDADQgDADgEAAgEhCIgRfIAAAAQgEgBgDgDQgCgEABgEIANg6QABgEADgCQAEgCAEABQAEABACAEQACADAAAEIgOA5QAAAEgEADQgCABgDAAIgCAAgEBCcgSSQgEgDAAgEQgBgegDgeQgBgEADgDQADgDAEgBQAEAAADADQADACABAEQADAeABAfQAAAEgCADQgDAEgEAAIgBAAQgEAAgCgDgEhBsgTSIgBAAQgDgBgDgEQgBgEABgDIASg6QACgEAEgCQADgCAEACIAAAAQAEABACAEQACAEgCADIgSA5QgBAEgEACIgEABIgDAAgEBCRgUKQgEgDAAgEIgKg8QAAgEACgDQACgDAFgBQAEgBADACQADADABAEIAKA9QAAAEgCADQgDADgEABIgBAAQgEAAgCgCgEhBHgVEIAAgBQgEgBgBgEQgCgEACgDIAWg4QACgEAEgCQAEgBAEABIAAABQAEABABAEQACAEgCAEIgXA3QgBAEgEABIgEABIgEAAgEBB8gWAQgEgCAAgFIgPg5QAAgEACgEQACgDAEgCQAEAAADACQAEACABAEIAOA6QABAEgCADQgCAEgEABIgBAAIgCAAQgDAAgCgBgEhAXgWzQgEgCgBgEQgCgDACgEQANgbAPgbQACgEAEgBQAEgBAEACIAAAAQADACABAEQABAEgCAEQgOAagNAbQgCADgEACIgDAAIgEgBgEBBegX0QgEgCgBgEQgJgdgLgcQgBgEACgEQABgEAEgBIABAAQADgCAEACQAEACABAEQALAcAJAeQABAEgCADQgCAEgDABIgBAAIgDABIgEgBgEg/egYdIgBAAQgEgCgBgEQAAgEACgEIAggzQACgEAEAAQAEgBAEACIAAAAQADACABAEQABAEgCAEIggAzQgCADgEABIgDAAIgEgBgEBA1gZmQgDgBgCgEIgYg3QgBgEABgEQABgDAEgCIAAAAQAEgCAEABQAEACABAEIAZA4QABADgBAEQgCAEgEABIgEABIgEgBgEg+dgaCIgBAAQgDgCAAgFQgBgEACgDIAkgwQACgEAEAAQAFgBADADIAAAAQADACABAFQAAAEgCADIgjAwQgDADgEAAIgCABQgDAAgCgCgEBAEgbTQgEgCgCgDQgOgagPgaQgCgEACgEQABgEADgCIAAAAQAEgCAEABQAEABACAEQAPAaAOAbQACADgCAEQgBAEgEACIAAAAIgEABIgDAAgEg9VgbiIAAAAQgDgDgBgEQAAgEADgDIAnguQADgDAEAAQAEAAADACIAAABQADACAAAEQAAAEgCADIgnAtQgDAEgEAAIgBAAQgDAAgDgCgEg8Ggc8IAAAAQgDgDAAgEQAAgEADgDIAqgrQADgDAEAAQAEAAADADQADADAAAEQAAAEgDAEIgqAqQgDADgEAAIAAAAQgEAAgDgDgEA/Jgc7QgEgBgCgEIghgyQgCgDABgEQAAgEAEgCQADgDAEABQAEABADADIAhAzQACAEgBAEQgBAEgEACQgCABgDAAIgCAAgEg6rgeNQgEAAgDgDIAAAAQgCgDAAgEQAAgEADgDIAugpQADgDAEAAQAEABADACIAAABQADADgBAEQAAAEgDADIgtAoQgDADgEAAIgBAAgEA+GgefQgEgBgDgDIgkgvQgCgDAAgEQABgEADgDIAAAAQADgDAEABQAFAAACADIAkAwQADAEgBAEQgBAEgDACQgCACgDAAIgCAAgEg5NgffQgEgBgDgDQgDgDABgEQAAgEAEgDIAugmQADgCAFAAQAEABACADQADADgBAEQAAAFgEACIguAlQgDADgDAAIgBAAgEA89gf8QgFgBgCgDIgogsQgDgDAAgEQAAgEAEgDQACgDAEAAQAFAAACADIApAtQADADgBAEQAAAFgDACIgBABQgCACgEAAIAAAAgEg3wggpQgEAAgCgEIAAAAQgDgDABgEQAAgEAEgDIAxgjQADgCAEAAQAEABACADIAAABQADADgBAEQgBAEgDACIgwAjQgDACgDAAIgCAAgEA7sghUQgEAAgDgDIgqgqQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIArAqQACADAAAEQAAAEgDADQgDADgDAAIgBAAgEg2OghuQgEAAgCgEIgBAAQgCgDABgEQABgEADgDIA0ggQADgCAEABQAEABACADQACAEAAAEQgBAEgEACIgzAgQgCACgDAAIgCgBgEA6PgipIgsgoQgDgCgBgEQAAgFADgDQACgDAEAAQAFgBADADIAtAoQADADAAAEQAAAEgCADQgDADgEAAIgBAAQgEAAgDgCgEg0ogisQgEgBgDgEQgCgDABgEQACgEADgDIA1gdQAEgBAEABQAEABABAEIAAAAQACADgBAEQgBAEgDACIg1AdIgFABIgCAAgEgTYgjaIgugXQgDgCgCgEQgBgDACgEQACgEADgBQAEgCAEACIApAVIABAAQADgCAEAAQAEABACADIAAABQACAEAAAEQgBAEgEACIgFADIgFABIAAAAIgFgBgEgy/gjkQgEgCgCgDIAAAAQgCgEACgEQABgEAEgCIA3gaQADgBAEABQAEABACAEIAAAAQABAEgBAEQgBAEgEABIg2AaIgFABIgDAAgEA45gj0IgwgmQgDgCgBgEQAAgFACgDQADgDAEgBQAEAAADACIAwAnQAEACAAAEQABAEgDADIAAABQgDADgEAAIgBAAQgDAAgDgCgEgSdgj+QgEgBgDgDIAAAAQgCgEABgEQABgEADgCIAugcIAAAAIAFgDQAEgCAEABQAEABACADQACAEgBAEQgBAEgEACIgEADIgBAAIgtAcQgCABgDAAIgCAAgEgU9gkKIg2gXQgEgBgBgEQgCgEACgEIAAAAQABgEAEgCQAEgBADABIA3AXQAEACACAEQABAEgBAEQgCAEgEABIgEABIgEgBgEgxSgkWQgEgCgCgEIAAAAQgBgEABgEQACgDAEgCIA4gXQADgBAEABQAEACABAEIAAAAQACAEgCAEQgBAEgEABIg3AXIgEAAIgEAAgEgWrgk3Ig4gUQgEgCgCgEQgCgDABgEQACgEAEgCQADgCAEACIA5AUQAEACACAEQACADgCAEQgBAEgEACIgEABIgEgBgEgQ3gk7QgEgBgCgEQgCgEABgEQABgDAEgCIA1gdQADgCAEABQAEABACAEIAAAAQACAEgBAEQgBAEgEABIg1AdIgEABIgDAAgEA3Zgk+IgxgiQgDgCgBgEQgBgEACgEIAAAAQADgDAEgBQAEgBADADIAxAiQAEACABAEQAAAFgCADQgDADgEABIgCAAQgCAAgDgCgEgvjglCQgDgCgCgEIAAAAQgBgEACgEQACgDADgCIA5gTQAEgBAEACQADACACADIAAABQABAEgCADQgCAEgEABIg4ATIgDABIgFgBgEgYdgleIg5gQQgEgCgCgDQgCgEABgEQABgEAEgCQADgCAFABIA5ARQAEACACADQACAEgBADIAAABQgCAEgDACIgFABIgDgBgEAP5gliIgQgIQgEgCgBgEQgCgEACgEQACgDAEgCQAEgBAEACIALAFIAbgSQAEgDAEABQAEABACADIAAABQACADgBAEQAAAEgEACIggAWIgFACIgBAAIgEgBgEgtxglnQgEgCgBgEIAAgBQgBgDACgEQACgDAEgBIA7gQQAEgBADACQAEACABADIAAABQABAEgCADQgCAEgEABIg6AQIgDAAIgFgBgEgPOglzQgDgBgCgEIAAAAQgCgEABgEQACgDAEgCIA2gZQAEgCAEACQAEABABAEQACAEgCADQgBAEgEACIg2AZIgEABIgEgBgEgaPgl+Ig7gNQgEgBgCgDQgCgEAAgEQABgEAEgCQADgCAFABIA6ANQAEABACAEQACADAAAEQgBAEgEACQgCACgDAAIgCgBgEA12gmBIgzgfQgEgCgBgEQgBgEACgEIAAAAQADgDADgCQAEAAAEACIAzAfQAEACABAFQABAEgCADQgCAEgEAAIgDABQgDAAgCgCgEAO0gmDIg4gZQgEgCgBgEQgCgDACgEIAAAAQABgEAEgBQAEgCAEACIA4AZQAEABABAEQACAEgCADIAAABQgCAEgEABIgDABIgEgBgEgr8gmFQgEgCgBgEIAAgBQgBgEACgDQACgEAEgBIA7gMQAEgBADACQADACABAEIABABQAAAEgCADQgCAEgEAAIg6ANIgCAAQgDAAgCgBgEgcFgmXIg7gLQgEAAgDgDQgCgEAAgEIAAAAQABgEADgCQAEgDAEABIA8AKQAEABACAEQACADAAAEQgBAEgEACQgCACgDAAIgCAAgEARQgmYQgEgBgDgDIAAAAQgCgEABgEQABgEADgCIAMgHIgBAAIAngXQAEgBAEABQAEABACADIAAAAQACAEgBAEQgBAEgEACIgnAWIAAAAIgJAGQgDACgDAAIgCAAgEgqGgmdQgEgDgBgEIAAgBQAAgDACgDQACgEAEAAIA6gLQAEAAADACQADADABAEQABAEgDADQgCAEgEAAIg5AKIgCAAQgDAAgCgBgEgNggmkQgEgBgBgEQgCgEACgDQABgEAEgCIA4gWQAEgBAEABQAEACABAEQABAEgBADQgCAEgEACIg4AVIgDABIgEgBgEgd4gmqIg8gHQgEgBgDgDQgCgDAAgFQABgEADgCQADgDAEABIA8AHQAEABADADQACADAAAEIAAABQgBAEgDACQgDACgDAAIgBAAgEgoTgmwQgDgDgBgEIAAAAQAAgEACgEQADgDAEAAIA9gHQAEAAADACQADADABAEQAAAEgCAEQgDADgEAAIg9AHIgBAAQgDAAgDgCgEANEgmzIg4gUQgDgCgCgEQgCgDABgEQACgEAEgCQADgCAEACIA5AVQAEABACAEQABAEgBAEQgCAEgEABIgEABIgEgBgEgfwgm3Ig8gFQgEAAgDgDQgDgDABgFIAAAAQAAgEADgCQADgDAFAAIA8AFQAEAAADADQADADgBAFQAAAEgDADQgDACgDAAIgCAAgEgmbgm9QgDgCAAgEIAAgBQgBgEADgDQADgDAEAAIA9gEQAEAAADADQADADAAAEIAAAAQAAAEgCADQgDADgEAAIg8AEIgBAAQgEAAgDgDgEA0Pgm+Ig1gdQgEgCgBgEQgBgEABgDIABgBQACgDADgBQAEgCAEACIA2AdQADADABAEQACADgCAEIgBAAQgCAEgDABIgDAAIgFgBgEghogm/Ig8gCQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA9ACQAEAAADADQACADAAAEIAAABQAAAEgDADQgDACgEAAIAAAAgEgkignDQgDgDAAgEQAAgEACgDQADgDAEAAIA9gBQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIg8ABIAAAAQgEAAgDgDgEgLwgnOQgEgCgBgDIAAgBQgCgEACgDQACgEAEgBIA6gTQAEgBADACQAEACABADIAAABQABAEgCAEQgBADgEABIg6ATIgDAAIgEgBgEAS1gnSQgEgBgCgEIAAAAQgCgEABgEQABgEAEgBIA2gcQAEgCAEABQADACACADQACAEgBAEQgCAEgDACIg1AbIgFABIgDAAgEALUgnaIg6gSQgDgBgCgEQgCgDABgEQABgEADgCQAEgCAEABIA6ASQAEABABAEQACADgBAEQgBAEgEACIgEABIgDAAgEgJ+gnyQgDgCgBgDIAAgBQgBgEACgDQACgEAEgBIA6gPQAEgBAEACQADACABADIAAABQABAEgCADQgCAEgEABIg6APIgDABIgFgCgEAylgn2Ig3gZQgEgCgBgEQgBgEABgDQACgEAEgCQAEgBAEACIA2AZQAEACABAEQACAEgCADQgCAEgEACIgDAAIgEgBgEAJhgn8Ig6gNQgEgBgCgEQgCgDABgEIAAgBQAAgEAEgCQADgCAFABIA6AOQAEABACAEQACADgBAEIAAAAQgBAEgEACQgCACgDAAIgCgBgEAUggoIQgDgBgCgEIAAAAQgCgEABgEQACgEAEgBIA3gZQAEgBADABQAEACACAEQACAEgCAEQgCADgEACIg2AYIgEABIgEgBgEgIJgoPQgEgCAAgEIAAgBQgBgDACgEQACgDAEgBIA8gMQAEgBAEACQADACABAEQABAEgDAEQgCADgEABIg8AMIgCABQgDAAgCgCgEAHtgoWIg8gLQgDgBgDgDQgCgDABgEIAAAAQAAgEADgDQAEgCAEABIA8AKQAEABACAEQACADgBAEIAAAAQAAAEgEACQgCACgDAAIgCAAgEgGQgomQgEgDgBgDIAAgBQAAgEACgDQADgDADgBIAegFIAZgEQAFAAADADQADACABAEQAAAEgDADQgCAEgEAAIgYADIgeAGIgCAAQgDAAgCgCgEAw3gonIg4gVQgEgCgCgEQgCgDACgEIAAgBQABgDAEgCQAEgCAEACIA5AWQADACACADQACAEgCAEIAAAAQgCAEgDABIgEABIgEgBgEAF5goqIg8gIQgEAAgDgEQgCgDAAgEQABgEADgDQADgCAFAAIA7AIQAFABACADQADADgBAEIAAABQAAAEgEACQgCACgEAAIgBAAgEgEego2QgDgDgBgEQAAgEACgEQADgDAEAAIA9gGQAEgBADADQADADABAEQAAAEgDADQgCADgEABIg9AGIgBAAQgDAAgDgCgEAWOgo3QgDgBgCgEIAAAAQgBgEABgEQACgEAEgBIA5gVQADgBAEACQAEACABADIAAAAQACAEgCAEQgCAEgEABIg4AVIgEAAIgEgBgEAEBgo4Ig8gFQgEgBgDgDQgCgDAAgEIAAAAQAAgEADgDQADgDAEABIA9AFQAEAAADAEQADADgBAEQAAAEgDACQgDADgEAAIgBAAgEgClgpBQgDgDgBgEQAAgEADgDQACgDAEgBIA9gDQAFAAACADQAEADAAAEQAAAEgDADQgDADgEAAIg8ADIgBAAQgDAAgDgCgEACJgpBIg7gCQgFAAgDgDQgCgDAAgEIAAgBQAAgEADgDQADgCAEAAIA8ACQAEAAADAEQADADAAAEQAAAEgEADQgCACgEAAIgBAAgEgAtgpGQgDgDAAgEIAAAAQAAgEADgDQADgDAEAAIAugBIAKAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgKAAIgtABIgBAAQgEAAgDgDgEAvGgpRIg5gTQgEgBgCgEQgBgDABgEQABgEAEgCQADgCAEABIA6ATQAEACACADQACAEgCAEIAAAAQgBAEgEACIgEABIgEgBgEAX/gpfQgDgBgCgEIAAAAQgBgEACgEQACgDAEgCIA5gRQAEgBAEABQADACACAEIAAAAQABAEgCAEQgCAEgEABIg5ARIgDABIgFgCgEAtUgp0Ig6gQQgEgBgCgEQgCgDAAgEQACgEADgCQAEgCAEABIA6APQAEABADAEQACADgBAEQgCAEgDADIgFABIgDAAgEAZzgqAQgEgCgBgEIAAAAQgBgEACgEQACgDAEgCIA7gNQAEgBAEACQADACABAEIAAAAQABAEgCAEQgCADgEABIg7AOIgCAAQgDAAgCgBgEArggqRIg7gNQgEAAgDgDQgCgEABgEIAAAAQABgEADgDQADgCAEABIA8AMQAEABACADQACAEAAAEIAAAAQgBAEgEACQgCACgDAAIgCAAgEAbngqbQgDgCgBgEIAAgBQgBgEACgDQADgDAEgBIA9gMQAEAAADACQADACABAEQABAFgCADQgDADgEABIg8AMIgCAAQgDAAgDgCgEAppgqoIgHgCIgagEIABABIgYgDQgEgBgCgDQgDgDABgEIAAgBQABgEADgCQADgDAEABIAXADIABAAIAYADIABABIAJACQAEAAACAEQACADAAADIAAABQgBAFgEACQgCABgDAAIgDAAgEAdbgqwQgDgDgBgDIAAgBQAAgEACgDQADgEAEAAIA8gIQAEgBAEADQADACAAAEIAAABQABAEgDADQgCADgFABIg7AIIgCAAQgDAAgDgCgEAn2gq4Ig7gGQgEAAgDgDQgDgDABgFIAAAAQAAgEADgCQADgDAEAAIA9AGQAEABACADQADADgBAEIAAAAQAAAFgEACQgCACgEAAIgBAAgEAfUgq/QgEgDAAgDIAAgBQgBgEADgDQADgDAEgBIA8gFQAFAAADADQADACAAAEIAAABQAAAEgCADQgDADgEAAIg8AFIgBAAQgEAAgCgCgEAl/grDIg8gDQgEAAgDgDQgDgDAAgEIAAAAQABgEACgDQADgDAFAAIA9ADQAEABACADQADADAAAEQgBAEgDADQgDACgDAAIgBAAgEAhMgrIQgDgDAAgEQAAgEACgDQADgDAEAAIA9gCQAEAAADADQADACAAAEIAAAAQAAAFgDADQgDADgEAAIg8ACIAAAAQgEAAgDgDgEAkHgrIIgzAAIgIAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAIAAIAzAAQAFAAADADQACADAAAEQAAAFgDACQgDADgEAAIAAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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gDQgDgDgEgBIAEgnQAEAAADgCQADgDABgEQADgeAFgdQABgEgCgDQgDgEgEgBIAAAAIAHgnQAEABADgCQAEgDABgEIANg5QABgEgDgDQgCgEgEgBIALgmQAEABADgCQAEgCABgEIASg5QACgDgCgEQgCgEgEgBIAAAAIAOgmQADABAEgCQAEgBABgEIAXg3QACgEgCgEQgBgEgEgBIARglQAEACAEgBQAEgCABgDQANgbAPgaQACgEgCgEQgBgEgDgCIAUgjQADACAEgBQAEgBACgDIAggzQACgEgBgEQgBgEgDgCIAXghQADACAEgBQAEAAADgDIAjgwQACgDAAgEQgBgFgDgCIAZggQADADAEgBQAEAAADgEIAngtQADgDgBgEQAAgEgDgCIAbgeQADADAEAAQAEAAADgDIAqgqQADgEAAgEQAAgEgDgDIAdgbIAAAAQACADAFAAQAEAAADgDIAtgoQADgDAAgEQABgEgDgDIAAgBIAcgYIAFgEQADADAEABQAEAAADgDIAvglQADgCAAgFQABgEgDgDIAggYIAAAAQACAEAEAAQAFABADgDIAwgjQADgCABgEQABgEgCgDIAhgXQACAEAEAAQAEABADgCIAzggQAEgCABgEQABgEgDgEIAjgUQACAEAEABQAEABADgCIA1gdQADgCABgEQACgEgCgDIAjgSIAAAAQACADAEACQAEABAEgCIA2gaQAEgBABgEQACgEgCgEIAAAAIAlgQIAAAAQABAEAEACQAEABAEgBIA3gXQAEgBACgEQABgEgBgEIAAAAIAlgOIAAAAQACAEAEACQADACAEgCIA4gTQAEgBACgEQACgDgBgEIAAgBIAmgMIAAABQACAEADACQAEACAEgBIA6gQQAEgBACgEQACgDgBgEIAAgBIAngJIAAABQABAEAEACQADACAEgBIA6gNQAEAAACgEQACgDAAgEIgBgBIApgIIABABQAAAEAEADQADACAEgBIA5gKQAEAAACgEQADgDgBgEIAngGQABAEADADQADACAFAAIA8gHQAEAAADgDQACgEAAgEIAogDQAAAEADACQAEADAEAAIA8gEQAEAAADgDQADgDgBgEIAAAAIApgCQAAAEADADQADADAEAAIA8gBQAEAAADgDQADgDAAgEIACAAIAlAAQAAAEADADQADADAEAAIA8ACQAEAAADgCQADgDAAgEIAAgBIApACIAAAAQAAAFACADQADADAEAAIA9AFQAEAAADgCQADgDAAgEIAoADQAAAFADADQACADAEABIA8AHQAEABADgDQADgCABgEIARACIAUADQgBAEACAEQADADAEAAIA7ALQAEABAEgDQADgCABgEIAoAIQgBAEACAEQACADAEABIA7ANQAEABADgCQAEgCABgEIAmAKQgBAEACAEQACADAEACIA5AQQAEABAEgBQAEgCABgEIAAgBIAmANQgBAEACADQACAEAEACIA4AUQAEACAEgCQAEgCABgEIAmAPIAAAAQgCAEACAEQABAEAEABIA2AXQAEACAEgCQAEgBACgEIAlARQgCAEABADQACAEAEACIAtAXIAFABIAFgBIAFgDQAEgCABgEQABgEgDgEIAAgBIAigWIAAAAQADADAEABQAEABADgCIAtgcIABAAIAFgDQADgCABgEQABgEgCgEIAjgUQACAEAEABQAEABAEgCIA0gdQAEgBABgEQABgEgCgEIAkgSQACAEAEABQADACAEgCIA2gZQAEgCACgEQABgDgBgEIAlgQQABAEAEABQAEACAEgCIA3gVQAEgCACgEQACgDgCgEIAmgOIAAABQABADAEACQAEACAEgBIA5gTQAEgBACgDQACgEgCgEIAAgBIAngLIAAABQABADADACQAEADAEgCIA6gPQAEgBACgEQADgDgBgEIAAgBIAngJIAAABQAAAEAEACQADACAEgBIA8gMQAEgBADgDQACgEgBgEIAqgHIAAABQAAADAEADQADACAEAAIAegGIAYgDQAEAAADgEQACgDAAgEIAogFQABAEADADQADACAFAAIA8gGQAEgBACgDQADgDAAgEIAogDQABAEADADQADADAEgBIA8gDQAEAAADgDQADgDAAgEIAogBIAAAAQAAAEADADQADADAFAAIAtgBIAKAAQAEAAADgDQADgDAAgEIAoABQAAAEADADQACADAFAAIA7ACQAFAAADgCQADgDAAgEIAoACQAAAEACADQADADAEABIA8AFQAEAAAEgDQADgCAAgEIAoAEQAAAEACADQADAEAEAAIA8AIQAEABADgDQAEgCAAgEIATADIATADQgBAEACADQADADAEABIA7ALQAEABADgDQAEgCABgEIAnAJQgBAEACADQACAEAEABIA6ANQAEABADgCQAEgCABgEIAnALQgBAEACADQACAEAEABIA5ASQAEABADgCQAEgCABgEIAmANQgBAEACADQACAEAEACIA4AUQAEACADgCQAEgBACgEIAlAPQgCAEACADQABAEAEACIA4AZQADACAEgCQAEgBACgEIAAgBIAjARQgBAEABAEQABAEAEACIAQAIIAFABIAFgCIAggWQAEgCABgEQAAgEgCgDIAjgWIABAAQACADAEABQAEABAEgDIAJgGIAAAAIAngWQAEgCABgEQABgEgCgEIAAAAIAjgTIAAAAQACAEAEABQAEABAEgCIA1gbQAEgCABgEQABgEgCgEIAlgRQACAEADABQAEABAEgBIA3gYQADgCACgDQACgEgCgEIAlgPQACAEADABQAEACAEgBIA4gVQAEgBACgEQACgEgCgEIAAAAIAmgMIAAAAQACAEADABQAEACAEgBIA5gRQAEgBACgEQACgEgBgEIAAAAIAngKIAAAAQABAEAEACQADACAEgBIA7gOQAEgBACgDQACgEgBgEIAAAAIAngJIAAABQABAEADACQAEACAEAAIA8gMQAEgBADgDQACgDgBgFIAkgFQABADADADQAEACAEAAIA8gIQAEgBACgDQADgDgBgEIApgEQAAADAEADQADADAEgBIA8gFQAEAAADgDQADgDgBgEIApgDQAAAEADADQADADAEAAIA8gCQAEAAADgDQADgDAAgFIAAAAIApAAQAAAEADADQADADAEAAIAIAAIAzAAQAEAAADgDQADgCAAgFIAoACIAAAAQAAAEADADQADADAEAAIA8ADQAEAAADgCQAEgDAAgEIAoADIAAAAQgBAFADADQADADAEAAIA7AGQAEABAEgDQADgCAAgFIAAAAIAoAFIAAABQgBAEADADQACADAFABIAXADIgBgBIAaAEIAIACQAEABADgCQAEgCABgFIAAgBIAnAIIAAAAQgBAEADAEQACADAEAAIA7ANQAEAAADgCQAEgCABgEIAAAAIAnAJQgBAEACADQACAEAEABIA6AQQAEABAEgCQAEgDABgEIAmAMQgBAEACADQACAEADABIA6ATQADACAEgCQAEgCABgEIAAAAIAmANIAAABQgBAEABADQACAEAEACIA4AVQAEACAEgCQADgBACgEIAAAAIAlAQQgBADABAEQABAEAEACIA3AZQADACAEgBQAEgCACgEIAkASIAAABQgCADABAEQABAEAEACIA1AdQAEACAEgBQAEgBACgEIAAAAIAjAUIgBAAQgCAEABAEQABAEAEACIAzAfQAEACAEgBQAEAAACgEIAiAWQgDAEABAEQABAEADACIAxAiQAEADAEgBQAEgBACgDIAgAYQgCADAAAFQABAEADACIAwAmQADADAEgBQAEAAADgDIATAQIAIAGQgDADAAAFQABAEADACIAtAoQADACAEAAQAEAAADgDIAdAbQgDADAAAEQAAAEADADIAqAqQADADAEAAQAEAAADgDIAcAdQgDADgBAEQAAAEADADIAoAsQADADAEABQADAAADgCIAaAeQgDADgBAEQAAAEADADIAjAvQADADAEABQAEABADgDIAYAiQgEACAAAEQgBAEACADIAhAyQACAEAEABQAEABAEgCIAUAiQgDACgBAEQgBAEACAEQAOAaAOAaQACADAEACQAEABADgCIASAlQgDACgCADQgBAEABAEIAYA3QACAEAEABQADACAEgCIAPAmIgBAAQgDABgCAEQgCAEABAEQALAcAJAdQABAEAEACQADABAEgBIABAAIALAnQgEACgCADQgCAEABAEIAOA5QABAFADACQAEACAEgBIAAAAIAIAnQgEABgDADQgCADABAEIAJA8QABAEADADQADACAEAAIAFAoQgEABgDADQgDADABAEQADAeABAeQABAEADADQADADAEAAIABAoIAAAAQgEAAgDADQgDADAAAEIABAdIAAAYQAAAEADADQADADAEAAIgCAnQgEAAgDADQgDADAAAEIgEA7QgBAEADADQADADAEABIgFAnQgEAAgDACQgDADgBAEIgIA7QgBAEACADQACAEAEAAIgHAoQgEgBgEACQgDACgBAFIgOA6QgBAEACADQACAEAEABIgLAmQgEgBgDACQgEACgBAEIgTA5QgBAEABAEQACADAEABIgOAmQgEgCgEACQgEACgBADIgYA3QgCAEACAEQABAEAEACIgSAkQgDgCgEACQgEABgCAEIgcA0QgCAEABAEQABAEADACIgVAjQgDgCgEABQgEABgCAEIghAyQgCADABAEQAAAEAEADIgXAhQgEgDgEABQgEABgCADIgkAvQgDADAAAEQABAEADADIAAAAIgZAfQgDgDgEABQgEAAgDADIgoAtQgDADAAAEQABAEADADIAAABIgbAcIgBAAQgDgDgEAAQgEAAgDADIgqArQgDADAAADQAAAEADADIgcAaQgDgDgEAAQgEAAgDADIguAoQgCACgBADQgBAEACADIABACQACADAEACQADABADgBIAOAlQgEACgCADQgBAEABAEIASA5QABAEAEACQADACAEgBIAAAAIALAnIgBAAQgEABgCADQgCAEABAEIAOA6QAAAEAEACQADADAEgBIAIAoIgBAAQgEABgCADQgDADABAEQAFAeADAfQABAEADACQADADAFgBIAEApQgFAAgCADQgDADAAAEQADAeABAeQAAAFADADQADACAEAAIABAoQgEAAgDADQgDADAAAEIAAABIgBA5QAAAFADACQACAEAFAAIgDAoQgEAAgDACQgDADAAAEQgCAegEAdQAAAEADADQACAEAEAAIgFAoQgEgBgEADQgDACgBAEIgKA7QgBAEADADQACAEAEABIgJAmQgEAAgDACQgEACgBAEIgPA5QgBAEACAEQACADAEABIgMAnQgEgCgEACQgDACgCAEIgTA4QgCAEACAEQABADAEACIgPAlQgEgCgDACQgEABgCAEIgZA3QgBADABAEQABAEAEABIgTAkQgDgBgEABQgDABgCAEQgOAagQAaQgCADABAEQABAEADACIgVAiQgDgCgEABQgEABgCADQgQAZgRAZQgDADABAEQABAEADACIgYAhQgDgDgEABQgEAAgDAEIglAvQgDADABAEQAAAEADADIgaAeQgDgCgEAAQgEAAgDADIgoAtQgDADAAAEQAAAEADADIAAAAIgcAdQgDgDgEAAQgEAAgDADIgrAqQgDACAAAFQAAADACADIgdAbQgDgCgEgBQgEAAgDADIgpAiIAAABIgHAGQgDACgBAFQAAADADADIgfAZQgDgDgEAAQgEgBgDADIgwAkQgDADgBAEQAAAEACADIggAXQgCgDgEAAQgEgBgEACIgxAiQgEACAAAEQgBAEACADIgiAWIAAgBQgCgDgEgBQgEgBgDACIgzAfQgEACgBAEQgBAEACADIgjAUQgCgEgEgBQgEgBgDACIg1AbQgDACgCAEQgBAEACAEIgkARIAAAAQgCgEgEgBQgEgCgDACIg4AZQgDACgCAEQgBADABAEIglAQIAAAAQgCgEgEgCQgDgCgEACIgPAGIAAAAIgqAPQgEACgCAEQgBADABAEIAAAAIgmANQgBgEgEgBQgDgCgEABIg5ARQgEABgCAEQgCAEABAEIgmAKQgBgEgEgCQgEgCgEABIg6APQgEAAgCAEQgCAEABADIgnAJQgBgEgEgCQgDgCgEAAIg7AMQgEABgDADQgCADABAEIgnAGQgBgDgDgDQgEgCgEAAIg7AIQgEABgCADQgDADAAAFIgoAEIAAAAQgBgEgDgDQgDgDgEABIg8AFQgEABgDADQgDADABAEIgoACQAAgDgDgDQgDgDgFAAIg7ADQgFAAgCADQgDADAAAEIgpABQAAgEgDgDQgDgDgEAAIgUAAIgpAAQgEAAgDADQgCACgBAEIgnAAQAAgFgDgCQgDgEgEAAIg6gDQgFAAgDADQgDACAAAEIAAABIgPgBIgbgCIAAAAQABgEgDgDQgDgDgEgBIg7gFQgEgBgDADQgEADAAAEIgogGQABgEgDgDQgCgDgEgBIg7gIQgEgBgDADQgDACgBAEIgngHQABgEgCgDQgDgDgEgBIg6gMQgEgBgDACQgEACgBAFIgngJQABgEgCgEQgCgEgEgBIg6gOQgEgCgEADQgDACgBADIgngLQACgDgCgEQgCgEgEgBIg5gSQgEgBgEACQgDACgCADIglgNQABgEgCgEQgBgDgEgCIg2gVQgEgBgEABQgEACgBAEIgbgLIgKAKIAAAAQgDgDgEAAQgEAAgDADIgrApQgDAEAAAEQAAAEADADIAAAAIgcAbIgBgBQgCgDgFAAQgEAAgDADIgtAoQgDACgBAEQAAAFADADIAAAAIgGAFIgYAUQgDgDgEgBQgEAAgDADIgvAkQgDADgBAEQAAAEACADIggAYQgCgDgEgBQgEgBgDADIgyAiQgDACgBAEQgBAEADAEIgiAWQgDgEgDAAQgEgBgEACIgzAfQgEACgBAEQgBAEACAEIgjAUQgCgEgDgBQgEgBgEACIg0AcQgEACgBAEQgBAEABADIgjASQgCgEgEgBQgEgCgDACIg3AZQgDACgCADQgBAEABAEIAAAAIgkAQQgCgEgDgCQgEgBgEABIg3AXQgEABgCAEQgBADABAEIgmAOQgBgEgEgCQgDgCgEABIg5ATQgEABgCAEQgCADABAEIglAMQgBgEgEgCQgDgDgEACIg5AOQgEABgDAEQgCAEABAEIAAAAIgnAJIAAAAQgBgFgDgCQgEgCgEABIg6AMQgEABgDADQgCADABAFIAAAAIgnAHIAAgBQgBgEgDgCQgEgCgEAAIg6AJQgFABgCADQgDADABAFIAAAAIgoAFIAAgBQAAgEgDgCQgEgDgEABIg7AGQgFAAgCADQgDADAAAEIAAABIgoADQAAgEgDgDQgDgCgEAAIg7ADQgFAAgCADQgDADAAAEIAAAAIgoABQAAgEgDgDQgDgCgEAAIg0AAIgPAAQgEAAgDADQgDADAAAEIgogBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-427,-278.1,854.2,556.3);
p.frameBounds = [rect];


(lib.playBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beeBoxBGAudioSmall");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.playBtn_gphc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(581.7,504.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(154.6,226,854.2,556.3);
p.frameBounds = [rect, rect, rect, rect];


(lib.itemSlime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.slime();
	this.instance.parent = this;
	this.instance.setTransform(287.8,649.9,0.456,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 2
	this.instance_1 = new lib.Tween39("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(418,734.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(62.6,364,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(71.6,365.4,709.4,743.9), new cjs.Rectangle(83.9,370.7,700.5,738.8), new cjs.Rectangle(77.8,380.6,706,724.8), new cjs.Rectangle(75.7,394,703.4,724.2), new cjs.Rectangle(77.4,411.8,692.5,717.7), new cjs.Rectangle(83,419.9,674.2,716.1), new cjs.Rectangle(83.7,417.6,662.1,720.6), new cjs.Rectangle(74.9,418.9,674,716.8), new cjs.Rectangle(70.1,406.6,677.9,722.1), new cjs.Rectangle(69.3,392.2,674.1,724.9), new cjs.Rectangle(72.4,382,683.6,721.3), new cjs.Rectangle(79.3,375.7,690.7,722.7), new cjs.Rectangle(65.4,373.3,715,715.7), new cjs.Rectangle(53.7,375.1,732.8,706.4), new cjs.Rectangle(46,380.9,742.4,711.2), new cjs.Rectangle(42.7,390.8,743.3,707.8), new cjs.Rectangle(43.5,398.4,736.2,702.6), new cjs.Rectangle(45.2,393.3,723.6,706), new cjs.Rectangle(31,392.1,723.4,701.5), new cjs.Rectangle(20.8,394.9,714.9,688.6), new cjs.Rectangle(15.4,401.4,718.1,668.4), new cjs.Rectangle(14.4,397.6,720.4,665.7), new cjs.Rectangle(18.1,389.7,714.8,675.6), new cjs.Rectangle(26.1,386,723.5,677.7), new cjs.Rectangle(38.9,386.1,724.2,673.2), new cjs.Rectangle(50,390.1,722.4,686.1), new cjs.Rectangle(56,393.6,721.7,695.7), new cjs.Rectangle(66.3,378.5,712.7,720.2), new cjs.Rectangle(67.9,367.8,708.4,736), new cjs.Rectangle(58.3,361.3,711.1,743.3), new cjs.Rectangle(52.8,358.9,705.7,742.3), new cjs.Rectangle(51.4,360.9,704.3,732.6), new cjs.Rectangle(54.1,357.7,705.6,724.3), new cjs.Rectangle(60.9,344.5,699.1,722.2), new cjs.Rectangle(72,335.5,684.3,711.5), new cjs.Rectangle(86.6,331.1,662.3,719.4), new cjs.Rectangle(88.1,331.3,669.2,719.7), new cjs.Rectangle(87.1,336.1,676.9,717.7), new cjs.Rectangle(89.7,345.2,677.1,724.5), new cjs.Rectangle(88.6,359.1,677.1,723.1), new cjs.Rectangle(72.6,367.4,688.1,723.1), new cjs.Rectangle(60.1,374.8,703.2,720.1), new cjs.Rectangle(52,385.9,725,709.2), new cjs.Rectangle(48,381.5,738.7,709.8), new cjs.Rectangle(48.2,373,743.9,710.5), new cjs.Rectangle(52.7,368.5,740.7,703.1), new cjs.Rectangle(61.4,368.1,728.9,705.4), new cjs.Rectangle(73.9,371.8,724.6,704.7), new cjs.Rectangle(90.1,379.6,720.4,696.3), new cjs.Rectangle(104.6,391.7,713.9,679.4), new cjs.Rectangle(101.5,407.3,720.2,658.7), new cjs.Rectangle(101.8,403.9,718.5,671.9), new cjs.Rectangle(94.3,403.8,720.2,677.6), new cjs.Rectangle(79.3,407.4,724.9,675.9), new cjs.Rectangle(67.8,400.6,721.5,680.5), new cjs.Rectangle(60.4,385.6,723.1,689.6), new cjs.Rectangle(57.1,374.1,718.1,709.4), new cjs.Rectangle(57.9,367.1,705.3,729.1), new cjs.Rectangle(62.6,364,710.8,740.8)];


(lib.itemRings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.lightUpRing();
	this.instance.parent = this;
	this.instance.setTransform(310.5,638.8,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 2
	this.instance_1 = new lib.Tween37("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(417.7,733.8);

	this.instance_2 = new lib.Tween38("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(417.7,733.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(62.3,363.4,710.8,740.9);
p.frameBounds = [rect, new cjs.Rectangle(71.2,364.8,709.4,743.9), new cjs.Rectangle(83.5,370.2,700.5,738.7), new cjs.Rectangle(77.4,379.9,706,724.9), new cjs.Rectangle(75.3,393.5,703.3,724.2), new cjs.Rectangle(77,411.2,692.5,717.8), new cjs.Rectangle(82.6,419.4,674.2,716.1), new cjs.Rectangle(83.4,417,662.1,720.6), new cjs.Rectangle(74.5,418.4,674,716.7), new cjs.Rectangle(69.8,406,677.9,722.1), new cjs.Rectangle(68.9,391.5,674.1,724.8), new cjs.Rectangle(72,381.3,683.5,721.4), new cjs.Rectangle(78.9,375.1,690.7,722.7), new cjs.Rectangle(65,372.7,715.1,715.7), new cjs.Rectangle(53.3,374.5,732.9,706.3), new cjs.Rectangle(45.7,380.2,742.3,711.2), new cjs.Rectangle(42.3,390.2,743.4,707.8), new cjs.Rectangle(43.2,397.8,736.1,702.6), new cjs.Rectangle(44.9,392.7,723.6,706), new cjs.Rectangle(30.6,391.5,723.4,701.5), new cjs.Rectangle(20.4,394.3,714.9,688.6), new cjs.Rectangle(15,400.7,718,668.5), new cjs.Rectangle(14,397,720.4,665.8), new cjs.Rectangle(17.7,389.1,714.7,675.7), new cjs.Rectangle(25.8,385.3,723.5,677.7), new cjs.Rectangle(38.6,385.5,724.2,673.2), new cjs.Rectangle(49.6,389.5,722.5,686.1), new cjs.Rectangle(55.6,393.1,721.8,695.6), new cjs.Rectangle(65.9,377.9,712.7,720.2), new cjs.Rectangle(67.6,367.1,708.3,736.1), new cjs.Rectangle(57.9,360.6,711.1,743.4), new cjs.Rectangle(52.5,358.3,705.7,742.3), new cjs.Rectangle(51,360.3,704.4,732.6), new cjs.Rectangle(53.7,357.1,705.7,724.3), new cjs.Rectangle(60.5,343.9,699.1,722.1), new cjs.Rectangle(71.6,334.8,684.3,711.5), new cjs.Rectangle(86.2,330.5,662.2,719.3), new cjs.Rectangle(87.7,330.7,669.3,719.7), new cjs.Rectangle(86.7,335.4,676.9,717.7), new cjs.Rectangle(89.4,344.6,677.1,724.5), new cjs.Rectangle(88.2,358.5,677.1,723.1), new cjs.Rectangle(72.2,366.8,688.1,723.1), new cjs.Rectangle(59.8,374.1,703.1,720.2), new cjs.Rectangle(51.7,385.2,725,709.2), new cjs.Rectangle(47.7,380.9,738.7,709.8), new cjs.Rectangle(47.9,372.4,743.9,710.4), new cjs.Rectangle(52.3,367.9,740.8,703.2), new cjs.Rectangle(61,367.4,729,705.4), new cjs.Rectangle(73.6,371.2,724.5,704.8), new cjs.Rectangle(89.9,379,720.4,696.3), new cjs.Rectangle(104.3,391,713.9,679.5), new cjs.Rectangle(101.2,406.6,720.2,658.7), new cjs.Rectangle(101.5,403.3,718.5,671.8), new cjs.Rectangle(94,403.2,720.2,677.6), new cjs.Rectangle(79,406.7,724.9,676), new cjs.Rectangle(67.4,400,721.5,680.5), new cjs.Rectangle(60.2,385,723.1,689.6), new cjs.Rectangle(56.8,373.5,718.1,709.3), new cjs.Rectangle(57.6,366.4,705.3,729.1), new cjs.Rectangle(62.3,363.4,710.8,740.9)];


(lib.itemPlaydoh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.playdohImg();
	this.instance.parent = this;
	this.instance.setTransform(-101.9,-92.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 1
	this.instance_1 = new lib.Tween49("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);

	this.instance_2 = new lib.Tween50("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.9,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.6,709.3,743.9), new cjs.Rectangle(-334.1,-363.2,700.5,738.7), new cjs.Rectangle(-340.2,-353.4,706,724.8), new cjs.Rectangle(-342.4,-339.9,703.4,724.2), new cjs.Rectangle(-340.5,-322.1,692.5,717.8), new cjs.Rectangle(-335,-314,674.2,716.1), new cjs.Rectangle(-334.3,-316.3,662.1,720.6), new cjs.Rectangle(-343.1,-315,674,716.8), new cjs.Rectangle(-347.8,-327.3,677.9,722.2), new cjs.Rectangle(-348.7,-341.8,674.1,724.9), new cjs.Rectangle(-345.6,-351.9,683.5,721.3), new cjs.Rectangle(-338.7,-358.2,690.7,722.7), new cjs.Rectangle(-352.6,-360.6,715.1,715.7), new cjs.Rectangle(-364.3,-358.8,732.8,706.4), new cjs.Rectangle(-372,-353.1,742.4,711.2), new cjs.Rectangle(-375.3,-343.2,743.4,707.8), new cjs.Rectangle(-374.5,-335.6,736.2,702.6), new cjs.Rectangle(-372.7,-340.7,723.6,706.1), new cjs.Rectangle(-387,-341.8,723.4,701.5), new cjs.Rectangle(-397.2,-339.1,714.8,688.7), new cjs.Rectangle(-402.6,-332.6,718.1,668.5), new cjs.Rectangle(-403.6,-336.3,720.5,665.7), new cjs.Rectangle(-399.9,-344.2,714.8,675.7), new cjs.Rectangle(-391.9,-347.9,723.5,677.7), new cjs.Rectangle(-379,-347.8,724.2,673.2), new cjs.Rectangle(-368,-343.8,722.5,686.1), new cjs.Rectangle(-362,-340.3,721.7,695.7), new cjs.Rectangle(-351.7,-355.4,712.7,720.2), new cjs.Rectangle(-350.1,-366.2,708.4,736), new cjs.Rectangle(-359.6,-372.7,711.1,743.3), new cjs.Rectangle(-365.1,-375,705.7,742.3), new cjs.Rectangle(-366.5,-373,704.3,732.6), new cjs.Rectangle(-363.8,-376.3,705.7,724.4), new cjs.Rectangle(-357.1,-389.4,699.1,722.2), new cjs.Rectangle(-346,-398.5,684.3,711.6), new cjs.Rectangle(-331.4,-402.8,662.3,719.4), new cjs.Rectangle(-329.9,-402.6,669.2,719.7), new cjs.Rectangle(-330.9,-397.8,676.9,717.7), new cjs.Rectangle(-328.3,-388.7,677.1,724.5), new cjs.Rectangle(-329.4,-374.8,677.1,723.2), new cjs.Rectangle(-345.4,-366.5,688.1,723.1), new cjs.Rectangle(-357.8,-359.1,703.2,720.1), new cjs.Rectangle(-365.9,-348,725,709.3), new cjs.Rectangle(-370,-352.4,738.7,709.8), new cjs.Rectangle(-369.7,-360.9,743.9,710.5), new cjs.Rectangle(-365.3,-365.4,740.8,703.2), new cjs.Rectangle(-356.6,-365.7,729,705.4), new cjs.Rectangle(-344.1,-362,724.5,704.7), new cjs.Rectangle(-327.8,-354.3,720.4,696.3), new cjs.Rectangle(-313.4,-342.3,713.8,679.5), new cjs.Rectangle(-316.5,-326.7,720.2,658.7), new cjs.Rectangle(-316.1,-330,718.5,671.8), new cjs.Rectangle(-323.6,-330.1,720.2,677.6), new cjs.Rectangle(-338.7,-326.6,724.9,676), new cjs.Rectangle(-350.2,-333.3,721.5,680.5), new cjs.Rectangle(-357.6,-348.4,723.1,689.7), new cjs.Rectangle(-360.9,-359.8,718.1,709.3), new cjs.Rectangle(-360.1,-366.9,705.3,729.1), new cjs.Rectangle(-355.4,-369.9,710.8,740.8)];


(lib.itemPillow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.beePillow();
	this.instance.parent = this;
	this.instance.setTransform(-108.4,-90.3,0.393,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 1
	this.instance_1 = new lib.Tween47("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);

	this.instance_2 = new lib.Tween48("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.9,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.6,709.3,743.9), new cjs.Rectangle(-334.1,-363.2,700.5,738.7), new cjs.Rectangle(-340.2,-353.4,706,724.8), new cjs.Rectangle(-342.4,-339.9,703.4,724.2), new cjs.Rectangle(-340.5,-322.1,692.5,717.8), new cjs.Rectangle(-335,-314,674.2,716.1), new cjs.Rectangle(-334.3,-316.3,662.1,720.6), new cjs.Rectangle(-343.1,-315,674,716.8), new cjs.Rectangle(-347.8,-327.3,677.9,722.2), new cjs.Rectangle(-348.7,-341.8,674.1,724.9), new cjs.Rectangle(-345.6,-351.9,683.5,721.3), new cjs.Rectangle(-338.7,-358.2,690.7,722.7), new cjs.Rectangle(-352.6,-360.6,715.1,715.7), new cjs.Rectangle(-364.3,-358.8,732.8,706.4), new cjs.Rectangle(-372,-353.1,742.4,711.2), new cjs.Rectangle(-375.3,-343.2,743.4,707.8), new cjs.Rectangle(-374.5,-335.6,736.2,702.6), new cjs.Rectangle(-372.7,-340.7,723.6,706.1), new cjs.Rectangle(-387,-341.8,723.4,701.5), new cjs.Rectangle(-397.2,-339.1,714.8,688.7), new cjs.Rectangle(-402.6,-332.6,718.1,668.5), new cjs.Rectangle(-403.6,-336.3,720.5,665.7), new cjs.Rectangle(-399.9,-344.2,714.8,675.7), new cjs.Rectangle(-391.9,-347.9,723.5,677.7), new cjs.Rectangle(-379,-347.8,724.2,673.2), new cjs.Rectangle(-368,-343.8,722.5,686.1), new cjs.Rectangle(-362,-340.3,721.7,695.7), new cjs.Rectangle(-351.7,-355.4,712.7,720.2), new cjs.Rectangle(-350.1,-366.2,708.4,736), new cjs.Rectangle(-359.6,-372.7,711.1,743.3), new cjs.Rectangle(-365.1,-375,705.7,742.3), new cjs.Rectangle(-366.5,-373,704.3,732.6), new cjs.Rectangle(-363.8,-376.3,705.7,724.4), new cjs.Rectangle(-357.1,-389.4,699.1,722.2), new cjs.Rectangle(-346,-398.5,684.3,711.6), new cjs.Rectangle(-331.4,-402.8,662.3,719.4), new cjs.Rectangle(-329.9,-402.6,669.2,719.7), new cjs.Rectangle(-330.9,-397.8,676.9,717.7), new cjs.Rectangle(-328.3,-388.7,677.1,724.5), new cjs.Rectangle(-329.4,-374.8,677.1,723.2), new cjs.Rectangle(-345.4,-366.5,688.1,723.1), new cjs.Rectangle(-357.8,-359.1,703.2,720.1), new cjs.Rectangle(-365.9,-348,725,709.3), new cjs.Rectangle(-370,-352.4,738.7,709.8), new cjs.Rectangle(-369.7,-360.9,743.9,710.5), new cjs.Rectangle(-365.3,-365.4,740.8,703.2), new cjs.Rectangle(-356.6,-365.7,729,705.4), new cjs.Rectangle(-344.1,-362,724.5,704.7), new cjs.Rectangle(-327.8,-354.3,720.4,696.3), new cjs.Rectangle(-313.4,-342.3,713.8,679.5), new cjs.Rectangle(-316.5,-326.7,720.2,658.7), new cjs.Rectangle(-316.1,-330,718.5,671.8), new cjs.Rectangle(-323.6,-330.1,720.2,677.6), new cjs.Rectangle(-338.7,-326.6,724.9,676), new cjs.Rectangle(-350.2,-333.3,721.5,680.5), new cjs.Rectangle(-357.6,-348.4,723.1,689.7), new cjs.Rectangle(-360.9,-359.8,718.1,709.3), new cjs.Rectangle(-360.1,-366.9,705.3,729.1), new cjs.Rectangle(-355.4,-369.9,710.8,740.8)];


(lib.itemNinja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ninjaCrawler();
	this.instance.parent = this;
	this.instance.setTransform(-35.1,-111.8,0.262,0.262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 1
	this.instance_1 = new lib.Tween41("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);

	this.instance_2 = new lib.Tween42("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.9,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.6,709.3,743.9), new cjs.Rectangle(-334.1,-363.2,700.5,738.7), new cjs.Rectangle(-340.2,-353.4,706,724.8), new cjs.Rectangle(-342.4,-339.9,703.4,724.2), new cjs.Rectangle(-340.5,-322.1,692.5,717.8), new cjs.Rectangle(-335,-314,674.2,716.1), new cjs.Rectangle(-334.3,-316.3,662.1,720.6), new cjs.Rectangle(-343.1,-315,674,716.8), new cjs.Rectangle(-347.8,-327.3,677.9,722.2), new cjs.Rectangle(-348.7,-341.8,674.1,724.9), new cjs.Rectangle(-345.6,-351.9,683.5,721.3), new cjs.Rectangle(-338.7,-358.2,690.7,722.7), new cjs.Rectangle(-352.6,-360.6,715.1,715.7), new cjs.Rectangle(-364.3,-358.8,732.8,706.4), new cjs.Rectangle(-372,-353.1,742.4,711.2), new cjs.Rectangle(-375.3,-343.2,743.4,707.8), new cjs.Rectangle(-374.5,-335.6,736.2,702.6), new cjs.Rectangle(-372.7,-340.7,723.6,706.1), new cjs.Rectangle(-387,-341.8,723.4,701.5), new cjs.Rectangle(-397.2,-339.1,714.8,688.7), new cjs.Rectangle(-402.6,-332.6,718.1,668.5), new cjs.Rectangle(-403.6,-336.3,720.5,665.7), new cjs.Rectangle(-399.9,-344.2,714.8,675.7), new cjs.Rectangle(-391.9,-347.9,723.5,677.7), new cjs.Rectangle(-379,-347.8,724.2,673.2), new cjs.Rectangle(-368,-343.8,722.5,686.1), new cjs.Rectangle(-362,-340.3,721.7,695.7), new cjs.Rectangle(-351.7,-355.4,712.7,720.2), new cjs.Rectangle(-350.1,-366.2,708.4,736), new cjs.Rectangle(-359.6,-372.7,711.1,743.3), new cjs.Rectangle(-365.1,-375,705.7,742.3), new cjs.Rectangle(-366.5,-373,704.3,732.6), new cjs.Rectangle(-363.8,-376.3,705.7,724.4), new cjs.Rectangle(-357.1,-389.4,699.1,722.2), new cjs.Rectangle(-346,-398.5,684.3,711.6), new cjs.Rectangle(-331.4,-402.8,662.3,719.4), new cjs.Rectangle(-329.9,-402.6,669.2,719.7), new cjs.Rectangle(-330.9,-397.8,676.9,717.7), new cjs.Rectangle(-328.3,-388.7,677.1,724.5), new cjs.Rectangle(-329.4,-374.8,677.1,723.2), new cjs.Rectangle(-345.4,-366.5,688.1,723.1), new cjs.Rectangle(-357.8,-359.1,703.2,720.1), new cjs.Rectangle(-365.9,-348,725,709.3), new cjs.Rectangle(-370,-352.4,738.7,709.8), new cjs.Rectangle(-369.7,-360.9,743.9,710.5), new cjs.Rectangle(-365.3,-365.4,740.8,703.2), new cjs.Rectangle(-356.6,-365.7,729,705.4), new cjs.Rectangle(-344.1,-362,724.5,704.7), new cjs.Rectangle(-327.8,-354.3,720.4,696.3), new cjs.Rectangle(-313.4,-342.3,713.8,679.5), new cjs.Rectangle(-316.5,-326.7,720.2,658.7), new cjs.Rectangle(-316.1,-330,718.5,671.8), new cjs.Rectangle(-323.6,-330.1,720.2,677.6), new cjs.Rectangle(-338.7,-326.6,724.9,676), new cjs.Rectangle(-350.2,-333.3,721.5,680.5), new cjs.Rectangle(-357.6,-348.4,723.1,689.7), new cjs.Rectangle(-360.9,-359.8,718.1,709.3), new cjs.Rectangle(-360.1,-366.9,705.3,729.1), new cjs.Rectangle(-355.4,-369.9,710.8,740.8)];


(lib.itemMarkers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.smellyMarkers();
	this.instance.parent = this;
	this.instance.setTransform(-82,-72.3,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 1
	this.instance_1 = new lib.Tween43("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);

	this.instance_2 = new lib.Tween44("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.9,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.6,709.3,743.9), new cjs.Rectangle(-334.1,-363.2,700.5,738.7), new cjs.Rectangle(-340.2,-353.4,706,724.8), new cjs.Rectangle(-342.4,-339.9,703.4,724.2), new cjs.Rectangle(-340.5,-322.1,692.5,717.8), new cjs.Rectangle(-335,-314,674.2,716.1), new cjs.Rectangle(-334.3,-316.3,662.1,720.6), new cjs.Rectangle(-343.1,-315,674,716.8), new cjs.Rectangle(-347.8,-327.3,677.9,722.2), new cjs.Rectangle(-348.7,-341.8,674.1,724.9), new cjs.Rectangle(-345.6,-351.9,683.5,721.3), new cjs.Rectangle(-338.7,-358.2,690.7,722.7), new cjs.Rectangle(-352.6,-360.6,715.1,715.7), new cjs.Rectangle(-364.3,-358.8,732.8,706.4), new cjs.Rectangle(-372,-353.1,742.4,711.2), new cjs.Rectangle(-375.3,-343.2,743.4,707.8), new cjs.Rectangle(-374.5,-335.6,736.2,702.6), new cjs.Rectangle(-372.7,-340.7,723.6,706.1), new cjs.Rectangle(-387,-341.8,723.4,701.5), new cjs.Rectangle(-397.2,-339.1,714.8,688.7), new cjs.Rectangle(-402.6,-332.6,718.1,668.5), new cjs.Rectangle(-403.6,-336.3,720.5,665.7), new cjs.Rectangle(-399.9,-344.2,714.8,675.7), new cjs.Rectangle(-391.9,-347.9,723.5,677.7), new cjs.Rectangle(-379,-347.8,724.2,673.2), new cjs.Rectangle(-368,-343.8,722.5,686.1), new cjs.Rectangle(-362,-340.3,721.7,695.7), new cjs.Rectangle(-351.7,-355.4,712.7,720.2), new cjs.Rectangle(-350.1,-366.2,708.4,736), new cjs.Rectangle(-359.6,-372.7,711.1,743.3), new cjs.Rectangle(-365.1,-375,705.7,742.3), new cjs.Rectangle(-366.5,-373,704.3,732.6), new cjs.Rectangle(-363.8,-376.3,705.7,724.4), new cjs.Rectangle(-357.1,-389.4,699.1,722.2), new cjs.Rectangle(-346,-398.5,684.3,711.6), new cjs.Rectangle(-331.4,-402.8,662.3,719.4), new cjs.Rectangle(-329.9,-402.6,669.2,719.7), new cjs.Rectangle(-330.9,-397.8,676.9,717.7), new cjs.Rectangle(-328.3,-388.7,677.1,724.5), new cjs.Rectangle(-329.4,-374.8,677.1,723.2), new cjs.Rectangle(-345.4,-366.5,688.1,723.1), new cjs.Rectangle(-357.8,-359.1,703.2,720.1), new cjs.Rectangle(-365.9,-348,725,709.3), new cjs.Rectangle(-370,-352.4,738.7,709.8), new cjs.Rectangle(-369.7,-360.9,743.9,710.5), new cjs.Rectangle(-365.3,-365.4,740.8,703.2), new cjs.Rectangle(-356.6,-365.7,729,705.4), new cjs.Rectangle(-344.1,-362,724.5,704.7), new cjs.Rectangle(-327.8,-354.3,720.4,696.3), new cjs.Rectangle(-313.4,-342.3,713.8,679.5), new cjs.Rectangle(-316.5,-326.7,720.2,658.7), new cjs.Rectangle(-316.1,-330,718.5,671.8), new cjs.Rectangle(-323.6,-330.1,720.2,677.6), new cjs.Rectangle(-338.7,-326.6,724.9,676), new cjs.Rectangle(-350.2,-333.3,721.5,680.5), new cjs.Rectangle(-357.6,-348.4,723.1,689.7), new cjs.Rectangle(-360.9,-359.8,718.1,709.3), new cjs.Rectangle(-360.1,-366.9,705.3,729.1), new cjs.Rectangle(-355.4,-369.9,710.8,740.8)];


(lib.beeBoxOpening = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.instance = new lib.beeBox_g("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-16,68,1,1,0,0,0,-16,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({startPosition:0},0).wait(1));

	// wings
	this.instance_1 = new lib.beeBoxWings("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-245.3,-29.7,1.015,1,0,0,-170.2);

	this.instance_2 = new lib.beeBoxWings("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.3,-29.7,1.015,1,0,0,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-403.8,-339.1,779.6,618.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.beeBoxLid_hover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lid
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(245,-63);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(236,-63.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:236,y:-63.3},5).to({_off:false,x:245,y:-63},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},5).to({_off:true,x:245,y:-63},5).wait(1));

	// Ears
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(245.5,-201.9);

	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.8,-200.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(231.8,-201.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:255.8,y:-200.2},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},5).to({_off:true,x:231.8,y:-201.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-328.5,520,300.5);
p.frameBounds = [rect, new cjs.Rectangle(-16.8,-328.1,520,300.1), new cjs.Rectangle(-18.6,-327.8,520,299.7), new cjs.Rectangle(-20.4,-327.5,520,299.3), new cjs.Rectangle(-22.2,-327.1,520,298.8), new cjs.Rectangle(-25.9,-331.4,523.9,323.2), new cjs.Rectangle(-24.1,-331.6,523.9,323.5), new cjs.Rectangle(-22.3,-331.9,523.9,323.8), new cjs.Rectangle(-20.5,-332.1,523.9,324.1), new cjs.Rectangle(-18.7,-332.3,523.9,324.5), new cjs.Rectangle(-15,-333.3,520,305.3)];


(lib.beeBoxComplete_graphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lid
	this.instance = new lib.beeBoxLid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-16,-73,1,1,0,0,0,245,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({startPosition:0},0).wait(1));

	// box
	this.instance_1 = new lib.beeBox_g("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,68,1,1,0,0,0,-16,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({startPosition:0},0).wait(1));

	// wings
	this.instance_2 = new lib.beeBoxWings("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-245.3,-29.7,1.015,1,0,0,-170.2);

	this.instance_3 = new lib.beeBoxWings("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(217.3,-29.7,1.015,1,0,0,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-403.8,-339.1,779.6,618.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.beeBoxComplete_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lid
	this.instance = new lib.beeBoxLid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-16,-73,1,1,0,0,0,245,-63);

	this.instance_1 = new lib.beeBoxLid_hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-218.3,1,1,0,0,0,245,-178.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// box
	this.instance_2 = new lib.beeBox_g("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16,68,1,1,0,0,0,-16,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// wings
	this.instance_3 = new lib.beeBoxWings("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-245.3,-29.7,1.015,1,0,0,-170.2);

	this.instance_4 = new lib.beeBoxWings("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(217.3,-29.7,1.015,1,0,0,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-403.8,-339.1,779.6,618.9);
p.frameBounds = [rect, new cjs.Rectangle(-403.8,-368.5,779.6,648.3), rect=new cjs.Rectangle(-403.8,-339.1,779.6,618.9), rect];


(lib.beeBoxComplete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lid
	this.instance = new lib.beeBoxLid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-16,-73,1,1,0,0,0,245,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1));

	// box
	this.instance_1 = new lib.beeBox_g("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,68,1,1,0,0,0,-16,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1));

	// wings
	this.instance_2 = new lib.beeBoxWings("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-245.3,-29.7,1.015,1,0,0,-170.2);

	this.instance_3 = new lib.beeBoxWings("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(217.3,-29.7,1.015,1,0,0,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:1.015,skewY:-9.8,x:217.3}},{t:this.instance_2,p:{scaleX:1.015,skewY:-170.2,x:-245.3}}]}).to({state:[{t:this.instance_3,p:{scaleX:1.022,skewY:11.8,x:217.4}},{t:this.instance_2,p:{scaleX:1.022,skewY:168.2,x:-249.7}}]},3).to({state:[{t:this.instance_3,p:{scaleX:1.015,skewY:-9.8,x:217.3}},{t:this.instance_2,p:{scaleX:1.015,skewY:-170.2,x:-245.3}}]},3).to({state:[{t:this.instance_3,p:{scaleX:1.022,skewY:11.8,x:217.4}},{t:this.instance_2,p:{scaleX:1.022,skewY:168.2,x:-249.7}}]},3).to({state:[{t:this.instance_3,p:{scaleX:1.015,skewY:-9.8,x:217.3}},{t:this.instance_2,p:{scaleX:1.015,skewY:-170.2,x:-245.3}}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-403.8,-339.1,779.6,618.9);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-408.2,-344.8,784.1,630.3), rect, rect, rect=new cjs.Rectangle(-403.8,-339.1,779.6,618.9), rect, rect, rect=new cjs.Rectangle(-408.2,-344.8,784.1,630.3), rect, rect, new cjs.Rectangle(-403.8,-339.1,779.6,618.9)];


(lib.itemSlime_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.itemSlime();
	this.instance.parent = this;
	this.instance.setTransform(72.7,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:418,regY:734.4,x:490.7,y:796.1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(135.3,425.7,710.8,740.8);
p.frameBounds = [rect, rect, rect, rect];


(lib.itemRings_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.itemRings("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(417.7,733.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(479.9,1097.2,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(488.8,1098.5,709.4,743.9), new cjs.Rectangle(501.2,1103.9,700.5,738.7), new cjs.Rectangle(495.1,1113.7,706,724.8)];


(lib.itemPlaydoh_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.itemPlaydoh("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.4,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.1,709.3,743.9), new cjs.Rectangle(-334.1,-362.7,700.5,738.7), new cjs.Rectangle(-340.2,-352.9,706,724.8)];


(lib.itemPillow_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.itemPillow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.4,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.1,709.3,743.9), new cjs.Rectangle(-334.1,-362.7,700.5,738.7), new cjs.Rectangle(-340.2,-352.9,706,724.8)];


(lib.itemNinja_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.itemNinja("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.4,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.1,709.3,743.9), new cjs.Rectangle(-334.1,-362.7,700.5,738.7), new cjs.Rectangle(-340.2,-352.9,706,724.8)];


(lib.itemMarkers_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.itemMarkers("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355.4,-369.4,710.8,740.8);
p.frameBounds = [rect, new cjs.Rectangle(-346.4,-368.1,709.3,743.9), new cjs.Rectangle(-334.1,-362.7,700.5,738.7), new cjs.Rectangle(-340.2,-352.9,706,724.8)];


// stage content:
(lib.beeBoxAnimation2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.audioPlayBtn.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.audioPlayBtn.visible = false;	
		}
	}
	this.frame_278 = function() {
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.beeBox_Btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(280);
			this.beeBox_Btn.Visible = false;
			
		}
		playSound("openTheBeeBoxSmall");
	}
	this.frame_334 = function() {
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		
		this.slime_Item.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(337);
		}
		
		this.markers_Item.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(430);
		}
		
		this.pillow_Item.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(461);
		}
		
		this.playdoh_Item.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(492);
		}
		
		this.ninja_Item.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(399);
		}
		
		this.rings_Item.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(367);
		}
	}
	this.frame_365 = function() {
		this.stop();
	}
	this.frame_396 = function() {
		this.stop();
	}
	this.frame_427 = function() {
		this.stop();
	}
	this.frame_458 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_520 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(278).call(this.frame_278).wait(56).call(this.frame_334).wait(31).call(this.frame_365).wait(31).call(this.frame_396).wait(31).call(this.frame_427).wait(31).call(this.frame_458).wait(31).call(this.frame_489).wait(31).call(this.frame_520).wait(2));

	// bgaudio
	this.audioPlayBtn = new lib.playBtn();
	this.audioPlayBtn.parent = this;
	this.audioPlayBtn.setTransform(828.7,-9.9,0.15,0.15);
	new cjs.ButtonHelper(this.audioPlayBtn, 0, 1, 2, false, new lib.playBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.audioPlayBtn).to({_off:true},277).wait(245));

	// itemRings
	this.instance = new lib.itemRings();
	this.instance.parent = this;
	this.instance.setTransform(539.2,523.3,0.051,0.051,0,0,0,418.9,778.4);
	this.instance._off = true;

	this.rings_Item = new lib.itemRings_btn();
	this.rings_Item.parent = this;
	this.rings_Item.setTransform(706.9,-224.7,0.217,0.217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},295).to({state:[{t:this.instance}]},13).to({state:[{t:this.rings_Item}]},26).to({state:[]},1).to({state:[{t:this.instance}]},31).to({state:[{t:this.instance}]},30).to({state:[]},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(295).to({_off:false},0).to({regX:0,regY:0,scaleX:0.22,scaleY:0.22,x:797.4,y:-65.8},13,cjs.Ease.quadInOut).to({_off:true},26).wait(32).to({_off:false},0).to({regX:0.4,regY:0.1,scaleX:0.59,scaleY:0.59,x:10.3,y:-179.9},30,cjs.Ease.quadInOut).to({_off:true},1).wait(125));

	// itemSlime
	this.instance_1 = new lib.itemSlime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(511.4,515.3,0.051,0.051,0,0,0,417.6,735.5);
	this.instance_1._off = true;

	this.slime_Item = new lib.itemSlime_btn();
	this.slime_Item.parent = this;
	this.slime_Item.setTransform(90.6,79.7,0.217,0.217,0,0,0,418.2,733.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},301).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.slime_Item}]},21).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},30).to({state:[]},1).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(301).to({_off:false},0).to({regX:418.2,regY:733.8,scaleX:0.22,scaleY:0.22,x:106.6,y:93},12,cjs.Ease.quadInOut).to({_off:true},21).wait(1).to({_off:false},0).to({regY:733.7,scaleX:0.59,scaleY:0.59,x:257.1,y:253.5},30,cjs.Ease.quadInOut).to({_off:true},1).wait(156));

	// itemNinja
	this.instance_2 = new lib.itemNinja();
	this.instance_2.parent = this;
	this.instance_2.setTransform(508,523.5,0.051,0.051,0,0,0,-1,1);
	this.instance_2._off = true;

	this.ninja_Item = new lib.itemNinja_btn();
	this.ninja_Item.parent = this;
	this.ninja_Item.setTransform(778.9,248.6,0.217,0.216,0,0,0,-0.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},307).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.ninja_Item}]},16).to({state:[]},1).to({state:[{t:this.instance_2}]},62).to({state:[{t:this.instance_2}]},30).to({state:[]},1).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(307).to({_off:false},0).to({regX:-0.3,regY:1.6,scaleX:0.22,scaleY:0.22,x:778.9,y:248.6},11,cjs.Ease.quadInOut).to({_off:true},16).wait(63).to({_off:false},0).to({regX:-0.1,scaleX:0.59,scaleY:0.59,x:256.7,y:254.4},30,cjs.Ease.quadInOut).to({_off:true},1).wait(94));

	// itemMarkers
	this.instance_3 = new lib.itemMarkers();
	this.instance_3.parent = this;
	this.instance_3.setTransform(513.2,519.7,0.051,0.051,0,0,0,0,1);
	this.instance_3._off = true;

	this.markers_Item = new lib.itemMarkers_btn();
	this.markers_Item.parent = this;
	this.markers_Item.setTransform(250.4,239.5,0.217,0.216,0,0,0,0.3,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},313).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.markers_Item}]},11).to({state:[]},1).to({state:[{t:this.instance_3}]},93).to({state:[{t:this.instance_3}]},30).to({state:[]},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(313).to({_off:false},0).to({regX:0.3,regY:1.2,scaleX:0.22,scaleY:0.22,x:250.4,y:239.5},10,cjs.Ease.quadInOut).to({_off:true},11).wait(94).to({_off:false},0).to({regY:1.1,scaleX:0.59,scaleY:0.59,x:257.1,y:254.1},30,cjs.Ease.quadInOut).to({_off:true},1).wait(63));

	// itemPillow
	this.instance_4 = new lib.itemPillow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(506.2,529.9,0.051,0.051,0,0,0,1,1);
	this.instance_4._off = true;

	this.pillow_Item = new lib.itemPillow_btn();
	this.pillow_Item.parent = this;
	this.pillow_Item.setTransform(404.6,113.4,0.217,0.216,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},319).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.pillow_Item}]},6).to({state:[]},1).to({state:[{t:this.instance_4}]},124).to({state:[{t:this.instance_4}]},30).to({state:[]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319).to({_off:false},0).to({regX:1.2,regY:1.2,scaleX:0.22,scaleY:0.22,x:404.6,y:113.4},9,cjs.Ease.quadInOut).to({_off:true},6).wait(125).to({_off:false},0).to({regY:1.1,scaleX:0.59,scaleY:0.59,x:257.7,y:253.8},30,cjs.Ease.quadInOut).to({_off:true},1).wait(32));

	// itemPlaydoh
	this.instance_5 = new lib.itemPlaydoh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(489.2,529.9,0.051,0.051,0,0,0,1,1);
	this.instance_5._off = true;

	this.playdoh_Item = new lib.itemPlaydoh_btn();
	this.playdoh_Item.parent = this;
	this.playdoh_Item.setTransform(613.2,148.9,0.217,0.216,0,0,0,0.9,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},325).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.playdoh_Item}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},155).to({state:[{t:this.instance_5}]},30).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(325).to({_off:false},0).to({regX:0.9,regY:1.2,scaleX:0.22,scaleY:0.22,x:613.2,y:148.9},8,cjs.Ease.quadInOut).to({_off:true},1).wait(156).to({_off:false},0).to({regX:1,regY:1.1,scaleX:0.59,scaleY:0.59,x:257.6,y:254.4},30,cjs.Ease.quadInOut).to({_off:true},1).wait(1));

	// beeBoxOpenMe
	this.instance_6 = new lib.OpenMe_txt("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(493.7,230.9,0.666,0.666,0,0,0,514.5,425);

	this.instance_7 = new lib.pickAPrize_txt("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(501.2,439.2,0.678,0.678,0,0,0,514.6,425);

	this.instance_8 = new lib.congrats_txt("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(691.4,222.3,0.581,0.581,0,0,0,514.7,425);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},278).to({state:[]},1).to({state:[{t:this.instance_7}]},55).to({state:[]},1).to({state:[{t:this.instance_8}]},30).to({state:[]},1).to({state:[{t:this.instance_8}]},30).to({state:[]},1).to({state:[{t:this.instance_8}]},30).to({state:[]},1).to({state:[{t:this.instance_8}]},30).to({state:[]},1).to({state:[{t:this.instance_8}]},30).to({state:[]},1).to({state:[{t:this.instance_8}]},30).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(365).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(1));

	// beeBoxExplosion
	this.instance_9 = new lib.beeBoxLid("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(507.2,458.5,0.465,0.465,0,0,0,245.4,-178);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(279).to({_off:false},0).to({regX:245.3,regY:-178.1,rotation:-414.2,x:-167.9,y:-107.7},29,cjs.Ease.quadInOut).to({_off:true},1).wait(213));

	// beeBoxBtn
	this.beeBox_Btn = new lib.beeBoxComplete_btn();
	this.beeBox_Btn.parent = this;
	this.beeBox_Btn.setTransform(515.3,-208.7,0.465,0.465,0,0,0,0.2,0);
	this.beeBox_Btn._off = true;
	new cjs.ButtonHelper(this.beeBox_Btn, 0, 1, 2, false, new lib.beeBoxComplete_btn(), 3);

	this.instance_10 = new lib.beeBoxOpening();
	this.instance_10.parent = this;
	this.instance_10.setTransform(508.8,531.5,0.465,0.465,0,0,0,-13.9,-29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.beeBox_Btn}]},219).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.beeBox_Btn}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},242).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.beeBox_Btn).wait(219).to({_off:false},0).wait(1).to({regX:-14.1,regY:-46.8,x:508.7,y:-220.2},0).wait(1).to({y:-208.8},0).wait(1).to({y:-196.4},0).wait(1).to({y:-183.1},0).wait(1).to({y:-169.1},0).wait(1).to({y:-154.3},0).wait(1).to({y:-138.7},0).wait(1).to({y:-122.5},0).wait(1).to({y:-105.4},0).wait(1).to({y:-87.6},0).wait(1).to({y:-69.1},0).wait(1).to({y:-49.7},0).wait(1).to({y:-29.6},0).wait(1).to({y:-8.7},0).wait(1).to({y:13.1},0).wait(1).to({y:35.8},0).wait(1).to({y:59.4},0).wait(1).to({y:83.9},0).wait(1).to({y:109.4},0).wait(1).to({y:136},0).wait(1).to({y:163.6},0).wait(1).to({y:192.3},0).wait(1).to({y:222.2},0).wait(1).to({y:253.4},0).wait(1).to({y:286},0).wait(1).to({y:320},0).wait(1).to({y:355.5},0).wait(1).to({y:392.6},0).wait(1).to({y:431.5},0).wait(1).to({y:472.4},0).wait(1).to({y:515.4},0).wait(1).to({y:507.6},0).wait(1).to({y:489.1},0).wait(1).to({y:472.7},0).wait(1).to({y:460.3},0).wait(1).to({y:453.6},0).wait(1).to({y:452.9},0).wait(1).to({y:457.6},0).wait(1).to({y:466.3},0).wait(1).to({y:477.9},0).wait(1).to({y:491.6},0).wait(1).to({y:506.6},0).wait(1).to({y:522.5},0).wait(1).to({y:513.3},0).wait(1).to({y:504.5},0).wait(1).to({y:498.3},0).wait(1).to({y:494.9},0).wait(1).to({y:494.6},0).wait(1).to({y:497.7},0).wait(1).to({y:504.4},0).wait(1).to({y:515.3},0).wait(1).to({y:523.4},0).wait(7).to({regX:0.2,regY:0,x:515.3,y:545.2},0).to({_off:true},1).wait(243));

	// beeBox
	this.instance_11 = new lib.beeBoxComplete_graphic("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(479.9,436,0.18,0.18,0,0,0,-15.3,26.1);

	this.instance_12 = new lib.beeBoxComplete("synched",3);
	this.instance_12.parent = this;
	this.instance_12.setTransform(479.7,435.7,0.18,0.18,0,0,0,-15,26.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},29).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},22).to({state:[]},312).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).wait(1).to({regX:-14.7,regY:26.7,x:479,y:433.5,startPosition:4},0).wait(1).to({y:431.2,startPosition:5},0).wait(1).to({x:479.1,y:428.8,startPosition:6},0).wait(1).to({y:426.5,startPosition:7},0).wait(1).to({x:479.2,y:424.1,startPosition:8},0).wait(1).to({y:421.7,startPosition:9},0).wait(1).to({x:479.3,y:419.3,startPosition:10},0).wait(1).to({y:416.9,startPosition:11},0).wait(1).to({x:479.4,y:414.4,startPosition:12},0).wait(1).to({y:412,startPosition:0},0).wait(1).to({y:409.4,startPosition:1},0).wait(1).to({x:479.5,y:406.9,startPosition:2},0).wait(1).to({y:404.4,startPosition:3},0).wait(1).to({x:479.6,y:401.8,startPosition:4},0).wait(1).to({y:399.2,startPosition:5},0).wait(1).to({y:396.6,startPosition:6},0).wait(1).to({x:479.7,y:394,startPosition:7},0).wait(1).to({y:391.3,startPosition:8},0).wait(1).to({y:388.6,startPosition:9},0).wait(1).to({y:385.9,startPosition:10},0).wait(1).to({x:479.8,y:383.2,startPosition:11},0).wait(1).to({y:380.4,startPosition:12},0).wait(1).to({y:377.6,startPosition:0},0).wait(1).to({y:374.8,startPosition:1},0).wait(1).to({x:479.9,y:371.8,startPosition:2},0).wait(1).to({y:368.9,startPosition:3},0).wait(1).to({y:365.9,startPosition:4},0).wait(1).to({y:362.9,startPosition:5},0).wait(1).to({y:359.9,startPosition:6},0).wait(1).to({y:356.9,startPosition:7},0).wait(1).to({y:353.9,startPosition:8},0).wait(1).to({y:350.8,startPosition:9},0).wait(1).to({y:347.8,startPosition:10},0).wait(1).to({y:344.7,startPosition:11},0).wait(1).to({y:341.5,startPosition:12},0).wait(1).to({x:480,y:338.4,startPosition:0},0).wait(1).to({y:335.2,startPosition:1},0).wait(1).to({y:331.9,startPosition:2},0).wait(1).to({y:328.7,startPosition:3},0).wait(1).to({y:325.4,startPosition:4},0).wait(1).to({y:322,startPosition:5},0).wait(1).to({y:318.7,startPosition:6},0).wait(1).to({y:315.3,startPosition:7},0).wait(1).to({y:311.9,startPosition:8},0).wait(1).to({x:482,y:310.3,startPosition:9},0).wait(1).to({x:485.3,y:309.8,startPosition:10},0).wait(1).to({x:488.6,y:309.3,startPosition:11},0).wait(1).to({x:491.9,y:308.8,startPosition:12},0).wait(1).to({x:495.3,y:308.2,startPosition:0},0).wait(1).to({x:498.8,y:307.6,startPosition:1},0).wait(1).to({x:502.3,y:306.8,startPosition:2},0).wait(1).to({x:506.1,y:306.7,startPosition:3},0).wait(1).to({x:509.8,startPosition:4},0).wait(1).to({x:513.6,y:307.1,startPosition:5},0).wait(1).to({x:517.2,y:307.9,startPosition:6},0).wait(1).to({x:520.9,y:309,startPosition:7},0).wait(1).to({x:524.5,y:310.4,startPosition:8},0).wait(1).to({x:527.9,y:312.2,startPosition:9},0).wait(1).to({x:531.4,y:314.2,startPosition:10},0).wait(1).to({x:534.8,y:316.2,startPosition:11},0).wait(1).to({x:538.3,y:318.3,startPosition:12},0).wait(1).to({x:541.7,y:320.5,startPosition:0},0).wait(1).to({x:545.2,y:322.6,startPosition:1},0).wait(1).to({x:548.9,y:324.5,startPosition:2},0).wait(1).to({x:552.6,y:326.3,startPosition:3},0).wait(1).to({x:556.5,y:327.9,startPosition:4},0).wait(1).to({x:560.4,y:329.4,startPosition:5},0).wait(1).to({x:564.4,y:330.8,startPosition:6},0).wait(1).to({x:568.6,y:332,startPosition:7},0).wait(1).to({x:572.8,y:333.1,startPosition:8},0).wait(1).to({x:577.2,y:334,startPosition:9},0).wait(1).to({x:581.6,y:334.8,startPosition:10},0).wait(1).to({x:586.1,y:335.5,startPosition:11},0).wait(1).to({x:590.7,y:336,startPosition:12},0).wait(1).to({x:595.3,y:336.5,startPosition:0},0).wait(1).to({x:599.9,y:336.8,startPosition:1},0).wait(1).to({x:604.6,y:337,startPosition:2},0).wait(1).to({x:609.4,y:337.2,startPosition:3},0).wait(1).to({x:614.1,startPosition:4},0).wait(1).to({x:618.9,y:336.9,startPosition:5},0).wait(1).to({x:623.6,y:335.5,startPosition:6},0).wait(1).to({x:628,y:333.2,startPosition:7},0).wait(1).to({x:631.8,y:330.1,startPosition:8},0).wait(1).to({x:635.2,y:326.3,startPosition:9},0).wait(1).to({x:638,y:322.1,startPosition:10},0).wait(1).to({x:640.3,y:317.5,startPosition:11},0).wait(1).to({x:642.1,y:312.6,startPosition:12},0).wait(1).to({x:643.2,y:307.5,startPosition:0},0).wait(1).to({x:643.8,y:302.2,startPosition:1},0).wait(1).to({x:643.7,y:296.9,startPosition:2},0).wait(1).to({x:642.6,y:291.7,startPosition:3},0).wait(1).to({x:640.1,y:286.8,startPosition:4},0).wait(1).to({x:636.3,y:282.8,startPosition:5},0).wait(1).to({x:631.5,y:280,startPosition:6},0).wait(1).to({x:626,y:278.3,startPosition:7},0).wait(1).to({x:620.3,y:277.5,startPosition:8},0).wait(1).to({x:614.4,y:277.4,startPosition:9},0).wait(1).to({x:608.4,y:278.5,startPosition:10},0).wait(1).to({x:602.5,y:280.3,startPosition:11},0).wait(1).to({x:596.8,y:282.6,startPosition:12},0).wait(1).to({x:591.2,y:285.1,startPosition:0},0).wait(1).to({x:585.7,y:287.9,startPosition:1},0).wait(1).to({x:580.3,y:290.8,startPosition:2},0).wait(1).to({x:574.9,y:293.8,startPosition:3},0).wait(1).to({x:569.5,y:296.8,startPosition:4},0).wait(1).to({x:564,y:299.9,startPosition:5},0).wait(1).to({x:558.4,y:303,startPosition:6},0).wait(1).to({x:552.8,y:306.1,startPosition:7},0).wait(1).to({x:547,y:309.3,startPosition:8},0).wait(1).to({x:541.2,y:312.6,startPosition:9},0).wait(1).to({x:535.2,y:315.8,startPosition:10},0).wait(1).to({x:529.1,y:319,startPosition:11},0).wait(1).to({x:523,y:322.2,startPosition:12},0).wait(1).to({x:516.7,y:325.2,startPosition:0},0).wait(1).to({x:510.3,y:328.3,startPosition:1},0).wait(1).to({x:503.7,y:331.2,startPosition:2},0).wait(1).to({x:496.9,y:334.1,startPosition:3},0).wait(1).to({x:490,y:336.8,startPosition:4},0).wait(1).to({x:482.9,y:339.4,startPosition:5},0).wait(1).to({x:475.6,y:341.7,startPosition:6},0).wait(1).to({x:468.1,y:343.8,startPosition:7},0).wait(1).to({x:460.5,y:345.6,startPosition:8},0).wait(1).to({x:452.7,y:347.1,startPosition:9},0).wait(1).to({x:444.7,y:348.3,startPosition:10},0).wait(1).to({x:436.5,y:349,startPosition:11},0).wait(1).to({x:428.1,y:349.2,startPosition:12},0).wait(1).to({x:419.6,y:348.9,startPosition:0},0).wait(1).to({x:411.1,y:348.2,startPosition:1},0).wait(1).to({x:402.5,y:346.9,startPosition:2},0).wait(1).to({x:393.8,y:345.1,startPosition:3},0).wait(1).to({x:385.1,y:342.5,startPosition:4},0).wait(1).to({x:376.5,y:339.2,startPosition:5},0).wait(1).to({x:368,y:335,startPosition:6},0).wait(1).to({x:359.8,y:330.1,startPosition:7},0).wait(1).to({x:351.8,y:324.6,startPosition:8},0).wait(1).to({x:344.3,y:318.4,startPosition:9},0).wait(1).to({x:336.7,y:312.2,startPosition:10},0).wait(1).to({x:328.9,y:306.1,startPosition:11},0).wait(1).to({x:320.1,y:300.8,startPosition:12},0).wait(1).to({x:310.1,y:297.6,startPosition:0},0).wait(1).to({x:299.4,y:297.7,startPosition:1},0).wait(1).to({x:288.8,y:300.8,startPosition:2},0).wait(1).to({x:279,y:306.6,startPosition:3},0).wait(1).to({x:270.7,y:314.3,startPosition:4},0).wait(1).to({x:265,y:324.4,startPosition:5},0).wait(1).to({x:264.4,y:336.2,startPosition:6},0).wait(1).to({x:269.3,y:347.4,startPosition:7},0).wait(1).to({x:279.1,y:355.5,startPosition:8},0).wait(1).to({x:291.1,y:360.4,startPosition:9},0).wait(1).to({x:304.3,y:363.1,startPosition:10},0).wait(1).to({x:317.9,y:363.9,startPosition:11},0).wait(1).to({x:332,y:362.5,startPosition:12},0).wait(1).to({x:346.2,y:358.7,startPosition:0},0).wait(1).to({x:360.1,y:353,startPosition:1},0).wait(1).to({x:373.7,y:345.8,startPosition:2},0).wait(1).to({x:387.1,y:337.4,startPosition:3},0).wait(1).to({x:400.5,y:327.8,startPosition:4},0).wait(1).to({regX:-15,regY:26.4,x:413.8,y:317.3,startPosition:12},0).to({regX:-14.7,regY:26.1,scaleX:0.29,scaleY:0.29,guide:{path:[413.8,317.2,428.3,305.1,443.7,290.1,470.6,263.5,494.5,233.3,515,207.3,521.2,194.6,543.2,149.4,553.6,126.2,570.1,89.4,580.6,58.3,605.9,-17.1,607.8,-97.1]},startPosition:1},22).to({_off:true},312).wait(1));

	// stars
	this.instance_13 = new lib.Stars();
	this.instance_13.parent = this;
	this.instance_13.setTransform(505,571.6,0.503,0.503,0,0,0,-47,1019.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(290).to({_off:false},0).wait(44).to({_off:true},187).wait(1));

	// bg
	this.instance_14 = new lib.beeboxBG();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-20,1.002,1.002);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(219).to({_off:true},302).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(500,330,1000,737.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(500,307.9,1000,759.6), new cjs.Rectangle(500,285.5,1000,782), new cjs.Rectangle(500,261.3,1000,806.2), new cjs.Rectangle(500,238.5,1000,829), new cjs.Rectangle(500,215.4,1000,852.1), new cjs.Rectangle(500,193.7,1000,873.8), new cjs.Rectangle(500,170.5,1000,897), rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, new cjs.Rectangle(500,-30.1,1000,1097.5), new cjs.Rectangle(500,-19.9,1000,1087.3), new cjs.Rectangle(500,-8.4,1000,1075.9), new cjs.Rectangle(500,4,1000,1063.5), new cjs.Rectangle(500,17.3,1000,1050.2), new cjs.Rectangle(500,31.3,1000,1036.2), new cjs.Rectangle(500,46.1,1000,1021.4), new cjs.Rectangle(500,61.6,1000,1005.9), new cjs.Rectangle(500,77.9,1000,989.6), new cjs.Rectangle(500,94.9,1000,972.5), new cjs.Rectangle(500,112.8,1000,954.7), new cjs.Rectangle(500,131.3,1000,936.2), rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, new cjs.Rectangle(493.1,145,1006.9,922.5), new cjs.Rectangle(488.7,145,1011.4,922.5), new cjs.Rectangle(412,145,1088.1,922.5), new cjs.Rectangle(357.5,146.6,1142.6,920.9), new cjs.Rectangle(322.9,146.6,1177.1,920.9), new cjs.Rectangle(304.6,146.6,1195.5,920.9), new cjs.Rectangle(294,146.6,1206.1,920.9), new cjs.Rectangle(287.3,145,1212.8,922.5), new cjs.Rectangle(285.4,145,1214.7,922.5), new cjs.Rectangle(271.8,145,1228.3,922.5), new cjs.Rectangle(259.9,146.6,1240.1,920.9), new cjs.Rectangle(252.2,146.6,1247.8,920.9), new cjs.Rectangle(247.9,146.6,1252.2,920.9), new cjs.Rectangle(246.3,145,1253.7,922.5), rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, rect, rect=new cjs.Rectangle(500,145,1000,922.5), rect, rect, rect=new cjs.Rectangle(500,146.6,1000,920.9), rect, null];
// library properties:
lib.properties = {
	id: '0290AE55EA144D4186F8E3F428CD03CA',
	width: 1000,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Asset5.png", id:"Asset5"},
		{src:"images/Asset6.png", id:"Asset6"},
		{src:"images/beeboxBG.png", id:"beeboxBG"},
		{src:"images/beePillow.png", id:"beePillow"},
		{src:"images/lightUpRing.png", id:"lightUpRing"},
		{src:"images/ninjaCrawler.png", id:"ninjaCrawler"},
		{src:"images/playdohImg.png", id:"playdohImg"},
		{src:"images/slime.png", id:"slime"},
		{src:"images/smellyMarkers.png", id:"smellyMarkers"},
		{src:"sounds/beeBoxBGAudioSmall.mp3", id:"beeBoxBGAudioSmall"},
		{src:"sounds/openTheBeeBoxSmall.mp3", id:"openTheBeeBoxSmall"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0290AE55EA144D4186F8E3F428CD03CA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;