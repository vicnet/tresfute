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
source: "annonce: evt\x0a\x09(self annonceur) announce: evt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announce:", "annonceur"]
}, function ($methodClass){ return function (evt){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._annonceur())._announce_(evt);
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
selector: "dernier",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dernier\x0a\x09^ des last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.des)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dernier",{})});
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



$core.addClass("TFZone", $globals.TFAnnonceur, "TresFute");
$core.setSlots($globals.TFZone, ["coches", "nombre", "carre"]);
$core.addMethod(
$core.method({
selector: "at:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pos"],
source: "at: pos\x0a\x09^ coches at: pos",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (pos){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.coches)._at_(pos);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{pos:pos})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "carre",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "carre\x0a\x09^ carre",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.carre;

}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "carre:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["type"],
source: "carre: type\x0a\x09carre := type",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (type){
var self=this,$self=this;
$self.carre=type;
return self;

}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "coche",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "coche\x0a\x09^ nombre not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.nombre)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"coche",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "coche:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pos"],
source: "coche: pos\x0a\x09coches at: pos put: true.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "annonce"]
}, function ($methodClass){ return function (pos){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.coches)._at_put_(pos,true);
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"coche:",{pos:pos})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "coche:avec:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pos", "valeur"],
source: "coche: pos avec: valeur\x0a\x09coches at: pos put: valeur.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "annonce"]
}, function ($methodClass){ return function (pos,valeur){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.coches)._at_put_(pos,valeur);
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"coche:avec:",{pos:pos,valeur:valeur})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "ligne",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ligne\x0a\x09^ carre not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.carre)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ligne",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "nbCoches",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nbCoches\x0a\x09^ coches size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.coches)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nbCoches",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "nbCoches:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "nbCoches: nb\x0a\x09coches := Array new: nb",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.coches=$recv($globals.Array)._new_(nb);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nbCoches:",{nb:nb})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "nbRemplis",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nbRemplis\x0a\x09| nb |\x0a\x09nb := 0.\x0a\x09coches do: [ :coche |\x0a\x09\x09coche ifNotNil: [ nb := nb + 1 ]\x0a\x09\x09].\x0a\x09^ nb",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifNotNil:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var nb;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
nb=(0);
$recv($self.coches)._do_((function(coche){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(coche == null || coche.a$nil){
return coche;
} else {
nb=$recv(nb).__plus((1));
return nb;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({coche:coche},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return nb;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nbRemplis",{nb:nb})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "nombre",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nombre\x0a\x09^ nombre",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.nombre;

}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "nombre:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unNombre"],
source: "nombre: unNombre\x0a\x09nombre := unNombre",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (unNombre){
var self=this,$self=this;
$self.nombre=unNombre;
return self;

}; }),
$globals.TFZone);

$core.addMethod(
$core.method({
selector: "score",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (0);

}; }),
$globals.TFZone);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nb"],
source: "new: nb\x0a\x09^ TFZone new nbCoches: nb",
referencedClasses: ["TFZone"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nbCoches:", "new"]
}, function ($methodClass){ return function (nb){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.TFZone)._new())._nbCoches_(nb);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{nb:nb})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZone.a$cls);


$core.addClass("TFZoneCumul", $globals.TFZone, "TresFute");
$core.addMethod(
$core.method({
selector: "score",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ coches inject: 0 into: [ :score :valeur |\x0a\x09\x09valeur ifNil:    [ score]\x0a\x09\x09\x09   ifNotNil: [ score + valeur ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "ifNil:ifNotNil:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.coches)._inject_into_((0),(function(score,valeur){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(valeur == null || valeur.a$nil){
return score;
} else {
return $recv(score).__plus(valeur);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({score:score,valeur:valeur},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"score",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneCumul);



$core.addClass("TFZoneOrange", $globals.TFZoneCumul, "TresFute");
$core.setSlots($globals.TFZoneOrange, ["doubles"]);
$core.addMethod(
$core.method({
selector: "coche:avec:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pos", "valeur"],
source: "coche: pos avec: valeur\x0a\x09(doubles includes: pos)\x0a\x09\x09ifTrue: [ coches at: pos put: valeur*2 ]\x0a\x09\x09ifFalse: [ coches at: pos put: valeur ].\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "includes:", "at:put:", "*", "annonce"]
}, function ($methodClass){ return function (pos,valeur){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($self.doubles)._includes_(pos))){
[$recv($self.coches)._at_put_(pos,$recv(valeur).__star((2)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
} else {
$recv($self.coches)._at_put_(pos,valeur);
}
$self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"coche:avec:",{pos:pos,valeur:valeur})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneOrange);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self nbCoches: 11; carre: false; nombre: true.\x0a\x09doubles := #(4 7 9 11)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "nbCoches:", "carre:", "nombre:"]
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
$self._nbCoches_((11));
$self._carre_(false);
$self._nombre_(true);
$self.doubles=[(4), (7), (9), (11)];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneOrange);



$core.addClass("TFZoneViolet", $globals.TFZoneCumul, "TresFute");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self nbCoches: 11; carre: false; nombre: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "nbCoches:", "carre:", "nombre:"]
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
$self._nbCoches_((11));
$self._carre_(false);
$self._nombre_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneViolet);



$core.addClass("TFZoneJaune", $globals.TFZone, "TresFute");
$core.setSlots($globals.TFZoneJaune, ["scores"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self nbCoches: 16; carre: true; nombre: false.\x0a\x09scores := {\x0a\x09\x09#(1  5  9) -> 10.\x0a\x09\x09#(2  6 14) -> 14.\x0a\x09\x09#(3 11 15) -> 16.\x0a\x09\x09#(8 12 16) -> 20.\x0a\x09\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "nbCoches:", "carre:", "nombre:", "->"]
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
$self._nbCoches_((16));
$self._carre_(true);
$self._nombre_(false);
$self.scores=[[[(1), (5), (9)].__minus_gt((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],[[(2), (6), (14)].__minus_gt((14))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],[[(3), (11), (15)].__minus_gt((16))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],[(8), (12), (16)].__minus_gt((20))];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneJaune);

$core.addMethod(
$core.method({
selector: "score",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ scores inject: 0 into: [ :somme :score |\x0a\x09\x09(score key allSatisfy: [ :pos | (coches at: pos) notNil ])\x0a\x09\x09\x09ifTrue: [ somme + score value ]\x0a\x09\x09\x09ifFalse: [ somme ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "ifTrue:ifFalse:", "allSatisfy:", "key", "notNil", "at:", "+", "value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.scores)._inject_into_((0),(function(somme,score){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(score)._key())._allSatisfy_((function(pos){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($self.coches)._at_(pos))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({pos:pos},$ctx2,2)});
//>>excludeEnd("ctx");
})))){
return $recv(somme).__plus($recv(score)._value());
} else {
return somme;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({somme:somme,score:score},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"score",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneJaune);



$core.addClass("TFZonePos", $globals.TFZone, "TresFute");
$core.setSlots($globals.TFZonePos, ["scores"]);
$core.addMethod(
$core.method({
selector: "score",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ scores at: (self nbRemplis + 1)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "+", "nbRemplis"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.scores)._at_($recv($self._nbRemplis()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"score",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZonePos);



$core.addClass("TFZoneBleu", $globals.TFZonePos, "TresFute");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self nbCoches: 12; carre: true; nombre: false.\x0a\x09scores := #(0 1 2 4 7 11 16 22 29 37 46 56)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "nbCoches:", "carre:", "nombre:"]
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
$self._nbCoches_((12));
$self._carre_(true);
$self._nombre_(false);
$self.scores=[(0), (1), (2), (4), (7), (11), (16), (22), (29), (37), (46), (56)];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneBleu);



$core.addClass("TFZoneVert", $globals.TFZonePos, "TresFute");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self nbCoches: 11; carre: false; nombre: false.\x0a\x09scores := #(0 1 3 6 10 15 21 28 36 45 55 66)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "nbCoches:", "carre:", "nombre:"]
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
$self._nbCoches_((11));
$self._carre_(false);
$self._nombre_(false);
$self.scores=[(0), (1), (3), (6), (10), (15), (21), (28), (36), (45), (55), (66)];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFZoneVert);



$core.addClass("TFEvenement", $globals.Object, "TresFute");


$core.addClass("TFFeuille", $globals.Object, "TresFute");
$core.setSlots($globals.TFFeuille, ["choisis", "zones"]);
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
selector: "choisit:en:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["couleur", "pos"],
source: "choisit: couleur en: pos\x0a\x09(zones at: couleur) coche: pos avec: (choisis dernier valeur)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["coche:avec:", "at:", "valeur", "dernier"]
}, function ($methodClass){ return function (couleur,pos){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self.zones)._at_(couleur))._coche_avec_(pos,$recv($recv($self.choisis)._dernier())._valeur());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"choisit:en:",{couleur:couleur,pos:pos})});
//>>excludeEnd("ctx");
}; }),
$globals.TFFeuille);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09choisis := TFSetDes new.\x0a\x09zones := Dictionary new.\x0a\x09zones at: #jaune put: (TFZoneJaune new).\x0a\x09zones at: #bleu put: (TFZoneBleu new).\x0a\x09zones at: #vert put: (TFZoneVert new).\x0a\x09zones at: #orange put: (TFZoneOrange new).\x0a\x09zones at: #violet put: (TFZoneViolet new)",
referencedClasses: ["TFSetDes", "Dictionary", "TFZoneJaune", "TFZoneBleu", "TFZoneVert", "TFZoneOrange", "TFZoneViolet"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "at:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.choisis=[$recv($globals.TFSetDes)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$self.zones=[$recv($globals.Dictionary)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
[$recv($self.zones)._at_put_("jaune",[$recv($globals.TFZoneJaune)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($self.zones)._at_put_("bleu",[$recv($globals.TFZoneBleu)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($self.zones)._at_put_("vert",[$recv($globals.TFZoneVert)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($self.zones)._at_put_("orange",[$recv($globals.TFZoneOrange)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=4
//>>excludeEnd("ctx");
][0];
$recv($self.zones)._at_put_("violet",$recv($globals.TFZoneViolet)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFFeuille);

$core.addMethod(
$core.method({
selector: "score",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ zones inject: 0 into: [ :somme :zone |\x0a\x09\x09somme + zone score\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "+", "score"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.zones)._inject_into_((0),(function(somme,zone){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(somme).__plus($recv(zone)._score());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({somme:somme,zone:zone},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"score",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFFeuille);

$core.addMethod(
$core.method({
selector: "zone:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["type"],
source: "zone: type\x0a\x09^ zones at: type",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (type){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.zones)._at_(type);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zone:",{type:type})});
//>>excludeEnd("ctx");
}; }),
$globals.TFFeuille);



$core.addClass("TFJeu", $globals.Object, "TresFute");
$core.setSlots($globals.TFJeu, ["des", "plateau", "feuille"]);
$core.addMethod(
$core.method({
selector: "choisit:en:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["couleur", "pos"],
source: "choisit: couleur en: pos\x0a\x09feuille choisit: couleur en: pos.\x0a\x09\x22nouveau lancer\x22\x0a\x09des lance",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["choisit:en:", "lance"]
}, function ($methodClass){ return function (couleur,pos){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.feuille)._choisit_en_(couleur,pos);
$recv($self.des)._lance();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"choisit:en:",{couleur:couleur,pos:pos})});
//>>excludeEnd("ctx");
}; }),
$globals.TFJeu);

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
source: "start\x0a\x09TFWJeu new",
referencedClasses: ["TFWJeu"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.TFWJeu)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TresFute);


$core.addMethod(
$core.method({
selector: "start",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09TresFute new start",
referencedClasses: ["TresFute"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["start", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.TresFute)._new())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TresFute.a$cls);

});
