define(["amber/boot", "require", "amber-tresfute/TresFute"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("TresFute-Web");
$pkg.transport = {"type":"amd","amdNamespace":"amber-tresfute"};

$core.addClass("TFWElement", $globals.TFAnnonceur, "TresFute-Web");
$core.setSlots($globals.TFWElement, ["elt"]);
$core.addMethod(
$core.method({
selector: "divOn:with:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk", "class"],
source: "divOn: aSilk with: class\x0a\x09elt := aSilk DIV: { 'class'->class }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->"]
}, function ($methodClass){ return function (aSilk,class_){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.elt=$recv(aSilk)._DIV_(["class".__minus_gt(class_)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divOn:with:",{aSilk:aSilk,class_:class_})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWElement);



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
source: "renderOnSilk: aSilk\x0a\x09self divOn: aSilk with: 'feuille'.\x0a\x0a\x09choisis := TFWSetDes new: feuille choisis.\x0a\x09elt << choisis.\x0a\x09\x22other parts\x22\x0a\x09TFWZone new divOn: elt with: 'tours'.\x0a\x09elt DIV: { 'class'->'relance' }.\x0a\x09elt DIV: { 'class'->'plusun' }.\x0a\x09self zone: #jaune.\x0a\x09self zone: #bleu.\x0a\x09self zone: #vert.\x0a\x09self zone: #orange.\x0a\x09self zone: #violet",
referencedClasses: ["TFWSetDes", "TFWZone"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["divOn:with:", "new:", "choisis", "<<", "new", "DIV:", "->", "zone:"]
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._divOn_with_(aSilk,"feuille")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["divOn:with:"]=1
//>>excludeEnd("ctx");
][0];
$self.choisis=$recv($globals.TFWSetDes)._new_($recv($self.feuille)._choisis());
$recv($self.elt).__lt_lt($self.choisis);
$recv($recv($globals.TFWZone)._new())._divOn_with_($self.elt,"tours");
[$recv($self.elt)._DIV_([["class".__minus_gt("relance")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.elt)._DIV_(["class".__minus_gt("plusun")]);
[$self._zone_("jaune")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["zone:"]=1
//>>excludeEnd("ctx");
][0];
[$self._zone_("bleu")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["zone:"]=2
//>>excludeEnd("ctx");
][0];
[$self._zone_("vert")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["zone:"]=3
//>>excludeEnd("ctx");
][0];
[$self._zone_("orange")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["zone:"]=4
//>>excludeEnd("ctx");
][0];
$self._zone_("violet");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWFeuille);

$core.addMethod(
$core.method({
selector: "zone:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["type"],
source: "zone: type\x0a\x09| zone |\x0a\x09zone := TFWZone new\x0a\x09\x09type: type;\x0a\x09\x09zone: (feuille zone: type).\x0a\x09elt << zone.\x0a\x09\x22retransmet l'annonce des cochages\x22\x0a\x09zone annonceur on: TFWEvtCoche do: [ :evt |\x0a\x09\x09self annonce: evt\x0a\x09\x09]",
referencedClasses: ["TFWZone", "TFWEvtCoche"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["type:", "new", "zone:", "<<", "on:do:", "annonceur", "annonce:"]
}, function ($methodClass){ return function (type){
var self=this,$self=this;
var zone;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TFWZone)._new();
$recv($1)._type_(type);
zone=[$recv($1)._zone_($recv($self.feuille)._zone_(type))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["zone:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.elt).__lt_lt(zone);
$recv($recv(zone)._annonceur())._on_do_($globals.TFWEvtCoche,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._annonce_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zone:",{type:type,zone:zone})});
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
source: "initialize\x0a\x09\x22le jeu\x22\x0a\x09jeu := TFJeu new.\x0a\x09\x22creation des elements\x22\x0a\x09des := TFWSetDes new: jeu des.\x0a\x09plateau := TFWSetDes new: jeu plateau.\x0a\x09feuille := TFWFeuille new: jeu feuille.\x0a\x09\x22partie web\x22\x09\x0a\x09elt := '#jeu' asSilk.\x0a\x09elt resetContents.\x0a\x09elt << des << feuille << plateau.\x0a\x09\x22gestion des evenements\x22\x0a\x09des annonceur on: TFWDe do: [ :evt |\x0a\x09\x09jeu choisitDe: (evt de)\x0a\x09\x09].\x0a\x09feuille annonceur on: TFWEvtCoche do: [ :evt |\x0a\x09\x09jeu choisit: evt type en: evt numero\x0a\x09\x09]\x09",
referencedClasses: ["TFJeu", "TFWSetDes", "TFWFeuille", "TFWDe", "TFWEvtCoche"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "new:", "des", "plateau", "feuille", "asSilk", "resetContents", "<<", "on:do:", "annonceur", "choisitDe:", "de", "choisit:en:", "type", "numero"]
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
[$recv([$recv($self.des)._annonceur()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["annonceur"]=1
//>>excludeEnd("ctx");
][0])._on_do_($globals.TFWDe,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.jeu)._choisitDe_($recv(evt)._de());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:do:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($self.feuille)._annonceur())._on_do_($globals.TFWEvtCoche,(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.jeu)._choisit_en_($recv(evt)._type(),$recv(evt)._numero());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)});
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
source: "actualise\x0a\x09| img |\x0a\x09elt resetContents.\x0a\x09des do: [ :de | \x0a\x09\x09img := TFWDe new: de.\x0a\x09\x09elt << img.\x0a\x09\x09\x22retransmet l'annonce des dés\x22\x0a\x09\x09img annonceur on: TFWDe do: [ :evt |\x0a\x09\x09\x09self annonce: evt\x0a\x09\x09]\x0a\x09]",
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
source: "renderOnSilk: aSilk\x0a\x09self divOn: aSilk with: 'des'.\x0a\x0a\x09self actualise",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["divOn:with:", "actualise"]
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._divOn_with_(aSilk,"des");
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


$core.addClass("TFWZone", $globals.TFWElement, "TresFute-Web");
$core.setSlots($globals.TFWZone, ["type", "zone", "coches"]);
$core.addMethod(
$core.method({
selector: "actualise",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actualise\x0a\x09coches withIndexDo: [ :coche :i |\x0a\x09\x09coche resetContents.\x0a\x09\x09(zone at: i) ifTrue: [ coche << '✗' ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "resetContents", "ifTrue:", "at:", "<<"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.coches)._withIndexDo_((function(coche,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(coche)._resetContents();
if($core.assert($recv($self.zone)._at_(i))){
return $recv(coche).__lt_lt("✗");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({coche:coche,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actualise",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWZone);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09coches := Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.coches=$recv($globals.Array)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWZone);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09| eltcoches coche |\x0a\x09self divOn: aSilk with: type.\x0a\x09eltcoches := elt DIV: { 'class'->'coches' }.\x0a\x091 to: (zone nbCoches) do: [ :i |\x0a\x09\x09coche := eltcoches DIV: { 'class'->'coche' }.\x0a\x09\x09coches add: coche.\x0a\x09\x09coche on: #click\x0a\x09\x09\x09  bind: [\x0a\x09\x09\x09\x09  self annonce: (TFWEvtCoche new: type sur: i)\x0a\x09\x09\x09      ]\x0a\x09\x09]",
referencedClasses: ["TFWEvtCoche"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["divOn:with:", "DIV:", "->", "to:do:", "nbCoches", "add:", "on:bind:", "annonce:", "new:sur:"]
}, function ($methodClass){ return function (aSilk){
var self=this,$self=this;
var eltcoches,coche;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._divOn_with_(aSilk,$self.type);
eltcoches=[$recv($self.elt)._DIV_([["class".__minus_gt("coches")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
(1)._to_do_($recv($self.zone)._nbCoches(),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
coche=$recv(eltcoches)._DIV_(["class".__minus_gt("coche")]);
$recv($self.coches)._add_(coche);
return $recv(coche)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._annonce_($recv($globals.TFWEvtCoche)._new_sur_($self.type,i));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk,eltcoches:eltcoches,coche:coche})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWZone);

$core.addMethod(
$core.method({
selector: "type:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aType"],
source: "type: aType\x0a\x09\x22type de zone, sert aussi pour la classe du div\x22\x0a\x09type := aType",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aType){
var self=this,$self=this;
$self.type=aType;
return self;

}; }),
$globals.TFWZone);

$core.addMethod(
$core.method({
selector: "zone:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["uneZone"],
source: "zone: uneZone\x0a\x09zone := uneZone.\x0a\x09zone annonceur on: TFZone do: [ :evt | self actualise ]",
referencedClasses: ["TFZone"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "annonceur", "actualise"]
}, function ($methodClass){ return function (uneZone){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.zone=uneZone;
$recv($recv($self.zone)._annonceur())._on_do_($globals.TFZone,(function(evt){
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
}, function($ctx1) {$ctx1.fill(self,"zone:",{uneZone:uneZone})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWZone);



$core.addClass("TFWEvtCoche", $globals.TFEvenement, "TresFute-Web");
$core.setSlots($globals.TFWEvtCoche, ["type", "num"]);
$core.addMethod(
$core.method({
selector: "numero",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numero\x0a\x09^ num",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.num;

}; }),
$globals.TFWEvtCoche);

$core.addMethod(
$core.method({
selector: "numero:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unNum"],
source: "numero: unNum\x0a\x09num := unNum",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (unNum){
var self=this,$self=this;
$self.num=unNum;
return self;

}; }),
$globals.TFWEvtCoche);

$core.addMethod(
$core.method({
selector: "type",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ type",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.type;

}; }),
$globals.TFWEvtCoche);

$core.addMethod(
$core.method({
selector: "type:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aType"],
source: "type: aType\x0a\x09type := aType",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aType){
var self=this,$self=this;
$self.type=aType;
return self;

}; }),
$globals.TFWEvtCoche);


$core.addMethod(
$core.method({
selector: "new:sur:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["type", "num"],
source: "new: type sur: num\x0a\x09^ (TFWEvtCoche new)\x0a\x09\x09type:type;\x0a\x09\x09numero: num",
referencedClasses: ["TFWEvtCoche"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["type:", "new", "numero:"]
}, function ($methodClass){ return function (type,num){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TFWEvtCoche)._new();
$recv($1)._type_(type);
return $recv($1)._numero_(num);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:sur:",{type:type,num:num})});
//>>excludeEnd("ctx");
}; }),
$globals.TFWEvtCoche.a$cls);

});
