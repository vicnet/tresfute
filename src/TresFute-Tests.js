define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("TresFute-Tests");
$pkg.transport = {"type":"amd","amdNamespace":"amber-tresfute"};

$core.addClass("TFDeTest", $globals.TestCase, "TresFute-Tests");
$core.setSlots($globals.TFDeTest, ["de"]);
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "runnings",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09de := TFDe new",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.de=$recv($globals.TFDe)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDeTest);

$core.addMethod(
$core.method({
selector: "testCouleur",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCouleur\x0a\x09self assert: (TFDe blanc couleur = #blanc).\x0a\x09self assert: (TFDe jaune couleur = #jaune).\x0a\x09self assert: (TFDe bleu couleur = #bleu).\x0a\x09self assert: (TFDe vert couleur = #vert).\x0a\x09self assert: (TFDe orange couleur = #orange).\x0a\x09self assert: (TFDe violet couleur = #violet)",
referencedClasses: ["TFDe"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "couleur", "blanc", "jaune", "bleu", "vert", "orange", "violet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_([$recv([$recv($recv($globals.TFDe)._blanc())._couleur()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["couleur"]=1
//>>excludeEnd("ctx");
][0]).__eq("blanc")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv($recv($globals.TFDe)._jaune())._couleur()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["couleur"]=2
//>>excludeEnd("ctx");
][0]).__eq("jaune")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv($recv($globals.TFDe)._bleu())._couleur()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["couleur"]=3
//>>excludeEnd("ctx");
][0]).__eq("bleu")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=3
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv($recv($globals.TFDe)._vert())._couleur()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["couleur"]=4
//>>excludeEnd("ctx");
][0]).__eq("vert")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=4
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv($recv($globals.TFDe)._orange())._couleur()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["couleur"]=5
//>>excludeEnd("ctx");
][0]).__eq("orange")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=5
//>>excludeEnd("ctx");
][0];
$self._assert_($recv($recv($recv($globals.TFDe)._violet())._couleur()).__eq("violet"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCouleur",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDeTest);

$core.addMethod(
$core.method({
selector: "testLancementDe",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLancementDe\x0a\x09| val |.\x0a\x09100 timesRepeat: [\x0a\x09\x09val := de lance.\x0a\x09\x09self assert: (val >=1 ).\x0a\x09\x09self assert: (val <=6 ).\x0a\x09\x09self assert: (val = de valeur)\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "lance", "assert:", ">=", "<=", "=", "valeur"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(100)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
val=$recv($self.de)._lance();
[$self._assert_($recv(val).__gt_eq((1)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_($recv(val).__lt_eq((6)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
return $self._assert_($recv(val).__eq($recv($self.de)._valeur()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLancementDe",{val:val})});
//>>excludeEnd("ctx");
}; }),
$globals.TFDeTest);



$core.addClass("TresFuteTest", $globals.TestCase, "TresFute-Tests");

});
