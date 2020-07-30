Smalltalk createPackage: 'TresFute-Tests'!
TestCase subclass: #TFDeTest
	slots: {#de}
	package: 'TresFute-Tests'!

!TFDeTest methodsFor: 'runnings'!

setUp
	de := TFDe new
! !

!TFDeTest methodsFor: 'tests'!

testCouleur
	self assert: (TFDe blanc couleur = #blanc).
	self assert: (TFDe jaune couleur = #jaune).
	self assert: (TFDe bleu couleur = #bleu).
	self assert: (TFDe vert couleur = #vert).
	self assert: (TFDe orange couleur = #orange).
	self assert: (TFDe violet couleur = #violet)
!

testLancementDe
	| val |.
	100 timesRepeat: [
		val := de lance.
		self assert: (val >=1 ).
		self assert: (val <=6 ).
		self assert: (val = de valeur)
	]
! !

TestCase subclass: #TresFuteTest
	slots: {}
	package: 'TresFute-Tests'!

