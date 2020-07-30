define(["amber/boot", "require", "amber-tresfute/TresFute"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("TresFute-Web");
$pkg.transport = {"type":"amd","amdNamespace":"amber-tresfute"};

$core.addClass("TFWElement", $globals.TFAnnonceur, "TresFute-Web");
$core.setSlots($globals.TFWElement, ["elt"]);


$core.addClass("TFWDe", $globals.TFWElement, "TresFute-Web");
$core.setSlots($globals.TFWDe, ["de"]);
$core.addMethod(
$core.method({
selector: "actualise",
protocol: "silk",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actualise\x0a\x09| nom |\x0a\x09nom := 'img/de-', de couleur, '-', de valeur asString, '.webp'.\x0a\x09elt << { 'src'->nom }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "couleur", "asString", "valeur", "<<", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var nom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
nom=[$recv([$recv([$recv("img/de-".__comma($recv($self.de)._couleur())).__comma("-")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma($recv($recv($self.de)._valeur())._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(".webp")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
$recv($self.elt).__lt_lt(["src".__minus_gt(nom)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actualise",{nom:nom})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWDe);

$core.addMethod(
$core.method({
selector: "de",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "de\x0a\x09^ de",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.de;

}; }),
$globals.TFWDe);

$core.addMethod(
$core.method({
selector: "de:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unDe"],
source: "de: unDe\x0a\x09de := unDe.\x0a\x09de annonceur on: TFDe do: [ :evt | self actualise ]",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "annonceur", "actualise"]
}, function ($methodClass){ return function (unDe){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.de=unDe;
$recv($recv($self.de)._annonceur())._on_do_($globals.TFDe,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._actualise();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"de:",{unDe:unDe})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWDe);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "silk",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09elt := aSilk IMG: { 'class'->'de'}.\x0a\x09elt\x09on: #click\x0a\x09\x09bind: [ self annonce ].\x0a\x09self actualise",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->", "on:bind:", "annonce", "actualise"]
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.elt=$recv(aSilk)._IMG_(["class".__minus_gt("de")]);
$recv($self.elt)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._annonce();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._actualise();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWDe);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["de"],
source: "new: de\x0a\x09^ TFWDe new\x0a\x09\x09de: de;\x0a\x09\x09yourself",
referencedClasses: ["TFWDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["de:", "new", "yourself"]
}, function ($methodClass){ return function (de){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TFWDe)._new();
$recv($1)._de_(de);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{de:de})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWDe.a$cls);


$core.addClass("TFWFeuille", $globals.TFWElement, "TresFute-Web");
$core.setSlots($globals.TFWFeuille, ["feuille", "choisis"]);
$core.addMethod(
$core.method({
selector: "feuille:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["uneFeuille"],
source: "feuille: uneFeuille\x0a\x09feuille := uneFeuille",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (uneFeuille){
var self=this,$self=this;
$self.feuille=uneFeuille;
return self;

}; }),
$globals.TFWFeuille);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09elt := aSilk DIV: { 'class'->'feuille' }.\x0a\x09choisis := TFWSetDes new: feuille choisis.\x0a\x09elt << choisis",
referencedClasses: ["TFWSetDes"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "new:", "choisis", "<<"]
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.elt=$recv(aSilk)._DIV_(["class".__minus_gt("feuille")]);
$self.choisis=$recv($globals.TFWSetDes)._new_($recv($self.feuille)._choisis());
$recv($self.elt).__lt_lt($self.choisis);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWFeuille);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["feuille"],
source: "new: feuille\x0a\x09^ TFWFeuille new\x0a\x09\x09feuille: feuille;\x0a\x09\x09yourself",
referencedClasses: ["TFWFeuille"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["feuille:", "new", "yourself"]
}, function ($methodClass){ return function (feuille){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TFWFeuille)._new();
$recv($1)._feuille_(feuille);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{feuille:feuille})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWFeuille.a$cls);


$core.addClass("TFWJeu", $globals.TFWElement, "TresFute-Web");
$core.setSlots($globals.TFWJeu, ["jeu", "des", "plateau", "feuille"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22le jeu\x22\x0a\x09jeu := TFJeu new.\x0a\x09\x22creation des elements\x22\x0a\x09des := TFWSetDes new: jeu des.\x0a\x09plateau := TFWSetDes new: jeu plateau.\x0a\x09feuille := TFWFeuille new: jeu feuille.\x0a\x09\x22partie web\x22\x09\x0a\x09elt := '#jeu' asSilk.\x0a\x09elt resetContents.\x0a\x09elt << des << feuille << plateau.\x0a\x09\x22gestion des evenements\x22\x0a\x09des annonceur on: TFWDe do: [ :evt |\x0a\x09\x09jeu choisitDe: (evt de)\x0a\x09]",
referencedClasses: ["TFJeu", "TFWSetDes", "TFWFeuille", "TFWDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "new:", "des", "plateau", "feuille", "asSilk", "resetContents", "<<", "on:do:", "annonceur", "choisitDe:", "de"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.jeu=$recv($globals.TFJeu)._new();
$self.des=[$recv($globals.TFWSetDes)._new_($recv($self.jeu)._des())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0];
$self.plateau=[$recv($globals.TFWSetDes)._new_($recv($self.jeu)._plateau())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0];
$self.feuille=$recv($globals.TFWFeuille)._new_($recv($self.jeu)._feuille());
$self.elt="#jeu"._asSilk();
$recv($self.elt)._resetContents();
[$recv([$recv($recv($self.elt).__lt_lt($self.des)).__lt_lt($self.feuille)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0]).__lt_lt($self.plateau)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($self.des)._annonceur())._on_do_($globals.TFWDe,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.jeu)._choisitDe_($recv(evt)._de());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWJeu);



$core.addClass("TFWSetDes", $globals.TFWElement, "TresFute-Web");
$core.setSlots($globals.TFWSetDes, ["des"]);
$core.addMethod(
$core.method({
selector: "actualise",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actualise\x0a\x09| img |\x0a\x09elt resetContents.\x0a\x09des do: [ :de | \x0a\x09\x09img := TFWDe new: de.\x0a\x09\x09elt << img.\x0a\x09\x09img annonceur on: TFWDe do: [ :evt |\x0a\x09\x09\x09self annonce: evt\x0a\x09\x09]\x0a\x09]",
referencedClasses: ["TFWDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "do:", "new:", "<<", "on:do:", "annonceur", "annonce:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var img;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.elt)._resetContents();
$recv($self.des)._do_((function(de){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
img=$recv($globals.TFWDe)._new_(de);
$recv($self.elt).__lt_lt(img);
return $recv($recv(img)._annonceur())._on_do_($globals.TFWDe,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._annonce_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({evt:evt},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({de:de},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actualise",{img:img})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWSetDes);

$core.addMethod(
$core.method({
selector: "des:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desDes"],
source: "des: desDes\x0a\x09des := desDes.\x0a\x09des annonceur on: TFSetDes do: [ :evt | self actualise ]",
referencedClasses: ["TFSetDes"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "annonceur", "actualise"]
}, function ($methodClass){ return function (desDes){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.des=desDes;
$recv($recv($self.des)._annonceur())._on_do_($globals.TFSetDes,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._actualise();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"des:",{desDes:desDes})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWSetDes);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09elt := aSilk DIV: { 'class'->'des'}.\x0a\x09self actualise",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "actualise"]
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.elt=$recv(aSilk)._DIV_(["class".__minus_gt("des")]);
$self._actualise();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWSetDes);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desDes"],
source: "new: desDes\x0a\x09^ TFWSetDes new\x0a\x09\x09des: desDes;\x0a\x09\x09yourself",
referencedClasses: ["TFWSetDes"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["des:", "new", "yourself"]
}, function ($methodClass){ return function (desDes){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TFWSetDes)._new();
$recv($1)._des_(desDes);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{desDes:desDes})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWSetDes.a$cls);

});
