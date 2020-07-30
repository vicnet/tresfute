define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("TresFute");
$pkg.imports = ["silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-tresfute"};

$core.addClass("TFAnnonceur", $globals.Object, "TresFute");
$core.setSlots($globals.TFAnnonceur, ["annonceur"]);
$core.addMethod(
$core.method({
selector: "annonce",
protocol: "annoncement",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "annonce\x0a\x09(self annonceur) announce: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announce:", "annonceur"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._annonceur())._announce_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"annonce",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFAnnonceur);

$core.addMethod(
$core.method({
selector: "annonce:",
protocol: "annoncement",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "annonce: evt\x0a\x09annonceur announce: evt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announce:"]
}, function ($methodClass){ return function (evt){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.annonceur)._announce_(evt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"annonce:",{evt:evt})});
//>>excludeEnd("ctx");
}; }),
$globals.TFAnnonceur);

$core.addMethod(
$core.method({
selector: "annonceur",
protocol: "annoncement",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "annonceur\x0a\x09^ annonceur ifNil: [ annonceur := Announcer new ]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.annonceur;
if($1 == null || $1.a$nil){
$self.annonceur=$recv($globals.Announcer)._new();
return $self.annonceur;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"annonceur",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFAnnonceur);



$core.addClass("TFDe", $globals.TFAnnonceur, "TresFute");
$core.setSlots($globals.TFDe, ["valeur", "couleur"]);
$core.addMethod(
$core.method({
selector: "couleur",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "couleur\x0a\x09^ couleur",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.couleur;

}; }),
$globals.TFDe);

$core.addMethod(
$core.method({
selector: "couleur:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "couleur: aSymbol\x0a\x09couleur := aSymbol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aSymbol){
var self=this,$self=this;
$self.couleur=aSymbol;
return self;

}; }),
$globals.TFDe);

$core.addMethod(
$core.method({
selector: "lance",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lance\x0a\x09valeur := 6 atRandom.\x0a\x09self annonce.\x0a\x09^ valeur",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["atRandom", "annonce"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.valeur=(6)._atRandom();
$self._annonce();
return $self.valeur;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lance",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe);

$core.addMethod(
$core.method({
selector: "printString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09^ (couleur copyFrom: 1 to: 3), ':', valeur asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "copyFrom:to:", "asString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv($recv($self.couleur)._copyFrom_to_((1),(3))).__comma(":")).__comma($recv($self.valeur)._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe);

$core.addMethod(
$core.method({
selector: "valeur",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valeur\x0a\x09^ valeur",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.valeur;

}; }),
$globals.TFDe);


$core.addMethod(
$core.method({
selector: "blanc",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blanc\x0a\x09^ TFDe new: #blanc",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TFDe)._new_("blanc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blanc",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);

$core.addMethod(
$core.method({
selector: "bleu",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bleu\x0a\x09^ TFDe new: #bleu",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TFDe)._new_("bleu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bleu",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);

$core.addMethod(
$core.method({
selector: "jaune",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jaune\x0a\x09^ TFDe new: #jaune",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TFDe)._new_("jaune");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jaune",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "new: aSymbol\x0a\x09^ TFDe new couleur: aSymbol; lance; yourself",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["couleur:", "new", "lance", "yourself"]
}, function ($methodClass){ return function (aSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TFDe)._new();
$recv($1)._couleur_(aSymbol);
$recv($1)._lance();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aSymbol:aSymbol})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);

$core.addMethod(
$core.method({
selector: "orange",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "orange\x0a\x09^ TFDe new: #orange",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TFDe)._new_("orange");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orange",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);

$core.addMethod(
$core.method({
selector: "vert",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vert\x0a\x09^ TFDe new: #vert",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TFDe)._new_("vert");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vert",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);

$core.addMethod(
$core.method({
selector: "violet",
protocol: "intance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "violet\x0a\x09^ TFDe new: #violet",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TFDe)._new_("violet");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"violet",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDe.a$cls);


$core.addClass("TFSetDes", $globals.TFAnnonceur, "TresFute");
$core.setSlots($globals.TFSetDes, ["des"]);
$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unDe"],
source: "ajoute: unDe\x0a\x09des add: unDe.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "annonce"]
}, function ($methodClass){ return function (unDe){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.des)._add_(unDe);
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unDe:unDe})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "ajouteTous:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desDes"],
source: "ajouteTous: desDes\x0a\x09des addAll: desDes.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "annonce"]
}, function ($methodClass){ return function (desDes){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.des)._addAll_(desDes);
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajouteTous:",{desDes:desDes})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "choisit:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["indexOuDe"],
source: "choisit: indexOuDe\x0a\x09| de index |\x0a\x09(indexOuDe isKindOf: TFDe)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09de := indexOuDe.\x0a\x09\x09\x09index := des indexOf: de\x0a\x09\x09] ifFalse: [\x0a\x09\x09\x09index := indexOuDe.\x0a\x09\x09\x09de := des at: index\x0a\x09\x09].\x0a\x09des removeIndex: index.\x0a\x09self annonce.\x0a\x09^  de",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isKindOf:", "indexOf:", "at:", "removeIndex:", "annonce"]
}, function ($methodClass){ return function (indexOuDe){
var self=this,$self=this;
var de,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(indexOuDe)._isKindOf_($globals.TFDe))){
de=indexOuDe;
index=$recv($self.des)._indexOf_(de);
index;
} else {
index=indexOuDe;
de=$recv($self.des)._at_(index);
de;
}
$recv($self.des)._removeIndex_(index);
$self._annonce();
return de;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"choisit:",{indexOuDe:indexOuDe,de:de,index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["bloc"],
source: "do: bloc\x0a\x09des do: bloc",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (bloc){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.des)._do_(bloc);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{bloc:bloc})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09des := Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$self.des=$recv($globals.Array)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "lance",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lance\x0a\x09des do: [ :de | de lance ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "lance"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.des)._do_((function(de){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(de)._lance();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({de:de},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lance",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09des \x0a\x09\x09do: [ :de | aStream nextPut: (de printString) ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "do:separatedBy:", "nextPut:", "printString"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._nextPutAll_(" (")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.des)._do_separatedBy_((function(de){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPut_($recv(de)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({de:de},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(aStream)._nextPutAll_(" ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "retireInf:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["valeur"],
source: "retireInf: valeur\x0a\x09| infs |\x0a\x09infs := des select: [ :de | de valeur < valeur ].\x0a\x09infs do: [ :de | des remove: de ].\x0a\x09self annonce.\x0a\x09^ infs",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "<", "valeur", "do:", "remove:", "annonce"]
}, function ($methodClass){ return function (valeur){
var self=this,$self=this;
var infs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
infs=$recv($self.des)._select_((function(de){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(de)._valeur()).__lt(valeur);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({de:de},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(infs)._do_((function(de){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.des)._remove_(de);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({de:de},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._annonce();
return infs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"retireInf:",{valeur:valeur,infs:infs})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "tous",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tous\x0a\x09self vide.\x0a\x09des addAll: { TFDe blanc. TFDe jaune. TFDe bleu.TFDe vert. TFDe orange. TFDe violet }.\x0a\x09self annonce",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["vide", "addAll:", "blanc", "jaune", "bleu", "vert", "orange", "violet", "annonce"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._vide();
$recv($self.des)._addAll_([$recv($globals.TFDe)._blanc(),$recv($globals.TFDe)._jaune(),$recv($globals.TFDe)._bleu(),$recv($globals.TFDe)._vert(),$recv($globals.TFDe)._orange(),$recv($globals.TFDe)._violet()]);
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tous",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);

$core.addMethod(
$core.method({
selector: "vide",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09des removeAll.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeAll", "annonce"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.des)._removeAll();
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vide",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFSetDes);



$core.addClass("TFFeuille", $globals.Object, "TresFute");
$core.setSlots($globals.TFFeuille, ["choisis"]);
$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["de"],
source: "ajoute: de\x0a\x09choisis ajoute: de",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ajoute:"]
}, function ($methodClass){ return function (de){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.choisis)._ajoute_(de);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{de:de})});
//>>excludeEnd("ctx");
}; }),
$globals.TFFeuille);

$core.addMethod(
$core.method({
selector: "choisis",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "choisis\x0a\x09^ choisis",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.choisis;

}; }),
$globals.TFFeuille);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09choisis := TFSetDes new",
referencedClasses: ["TFSetDes"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.choisis=$recv($globals.TFSetDes)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFFeuille);



$core.addClass("TFJeu", $globals.Object, "TresFute");
$core.setSlots($globals.TFJeu, ["des", "plateau", "feuille"]);
$core.addMethod(
$core.method({
selector: "choisitDe:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "choisitDe: index\x0a\x09| de infs |\x0a\x09de := des choisit: index.\x0a\x09infs := des retireInf: (de valeur).\x0a\x09plateau ajouteTous: infs.\x0a\x09feuille ajoute: de",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["choisit:", "retireInf:", "valeur", "ajouteTous:", "ajoute:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
var de,infs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
de=$recv($self.des)._choisit_(index);
infs=$recv($self.des)._retireInf_($recv(de)._valeur());
$recv($self.plateau)._ajouteTous_(infs);
$recv($self.feuille)._ajoute_(de);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"choisitDe:",{index:index,de:de,infs:infs})});
//>>excludeEnd("ctx");
}; }),
$globals.TFJeu);

$core.addMethod(
$core.method({
selector: "demarre",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "demarre\x0a\x09des := TFSetDes new tous.\x0a\x09plateau := TFSetDes new.\x0a\x09feuille := TFFeuille new",
referencedClasses: ["TFSetDes", "TFFeuille"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tous", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.des=$recv([$recv($globals.TFSetDes)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._tous();
$self.plateau=[$recv($globals.TFSetDes)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$self.feuille=$recv($globals.TFFeuille)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"demarre",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFJeu);

$core.addMethod(
$core.method({
selector: "des",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "des\x0a\x09^ des",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.des;

}; }),
$globals.TFJeu);

$core.addMethod(
$core.method({
selector: "feuille",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "feuille\x0a\x09^ feuille",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.feuille;

}; }),
$globals.TFJeu);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self demarre",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["demarre"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._demarre();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFJeu);

$core.addMethod(
$core.method({
selector: "plateau",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "plateau\x0a\x09^ plateau",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.plateau;

}; }),
$globals.TFJeu);



$core.addClass("TresFute", $globals.Object, "TresFute");
$core.addMethod(
$core.method({
selector: "start",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.TresFute);


$core.addMethod(
$core.method({
selector: "start",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.TresFute.a$cls);

});
