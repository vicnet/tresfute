Smalltalk createPackage: 'TresFute-Web'!
TFAnnonceur subclass: #TFWElement
	slots: {#elt}
	package: 'TresFute-Web'!

!TFWElement methodsFor: 'as yet unclassified'!

divOn: aSilk with: class
	elt := aSilk DIV: { 'class'->class }
! !

TFWElement subclass: #TFWDe
	slots: {#de}
	package: 'TresFute-Web'!

!TFWDe methodsFor: 'initialization'!

de
	^ de
!

de: unDe
	de := unDe.
	de annonceur on: TFDe do: [ :evt | self actualise ]
! !

!TFWDe methodsFor: 'silk'!

actualise
	| nom |
	nom := 'img/de-', de couleur, '-', de valeur asString, '.webp'.
	elt << { 'src'->nom }
!

renderOnSilk: aSilk
	elt := aSilk IMG: { 'class'->'de'}.
	elt	on: #click
		bind: [ self annonce ].
	self actualise
! !

!TFWDe class methodsFor: 'instance creation'!

new: de
	^ TFWDe new
		de: de;
		yourself
! !

TFWElement subclass: #TFWFeuille
	slots: {#feuille. #choisis}
	package: 'TresFute-Web'!

!TFWFeuille methodsFor: 'as yet unclassified'!

feuille: uneFeuille
	feuille := uneFeuille
!

renderOnSilk: aSilk
	self divOn: aSilk with: 'feuille'.

	choisis := TFWSetDes new: feuille choisis.
	elt << choisis.
	"other parts"
	TFWZone new divOn: elt with: 'tours'.
	elt DIV: { 'class'->'relance' }.
	elt DIV: { 'class'->'plusun' }.
	self zone: #jaune.
	self zone: #bleu.
	self zone: #vert.
	self zone: #orange.
	self zone: #violet
!

zone: type
	| zone |
	zone := TFWZone new
		type: type;
		zone: (feuille zone: type).
	elt << zone.
	"retransmet l'annonce des cochages"
	zone annonceur on: TFWEvtCoche do: [ :evt |
		self annonce: evt
		]
! !

!TFWFeuille class methodsFor: 'as yet unclassified'!

new: feuille
	^ TFWFeuille new
		feuille: feuille;
		yourself
! !

TFWElement subclass: #TFWJeu
	slots: {#jeu. #des. #plateau. #feuille}
	package: 'TresFute-Web'!

!TFWJeu methodsFor: 'as yet unclassified'!

initialize
	| ihmjeu ihmscores |
	"le jeu"
	jeu := TFJeu new.
	"creation des elements"
	des := TFWSetDes new: jeu des.
	plateau := TFWSetDes new: jeu plateau.
	feuille := TFWFeuille new: jeu feuille.
	"partie web"	
	elt := '#tresfute' asSilk.
	elt resetContents.
	
	ihmjeu := (elt DIV: { 'class'->'jeu'}).
	ihmjeu << des << feuille << plateau.
	
	ihmscores := TFWScores new: jeu feuille.
	elt << ihmscores.
	
	"gestion des evenements"
	des annonceur on: TFWDe do: [ :evt |
		jeu choisitDe: (evt de)
		].
	feuille annonceur on: TFWEvtCoche do: [ :evt |
		jeu choisit: evt type en: evt numero
		]
! !

TFWElement subclass: #TFWScores
	slots: {#feuille. #total}
	package: 'TresFute-Web'!

!TFWScores methodsFor: 'as yet unclassified'!

actualise: div avec: zone
	div resetContents.
	div << zone score asString.
	self actualiseTotal
!

actualiseTotal
	total ifNil: [ ^ self ].
	total resetContents.
	total << feuille score asString
!

feuille: uneFeuille
	feuille := uneFeuille
!

renderOnSilk: aSilk
	self divOn: aSilk with: 'scores'.
	#(#jaune #bleu #vert #orange #violet #renard #total) do: [ :zone |
		self zone: zone
		].
	self actualiseTotal
!

zone: couleur
	| div zone |
	div := elt DIV: { 'class'->('score ',couleur) }.
	couleur=#renard ifTrue: [ ^ self ].
	couleur=#total ifTrue: [ total := div. ^ self ].
	zone := (feuille zone: couleur).
	zone annonceur on: TFZone do: [ :evt | self actualise: div avec: zone ].
	self actualise: div avec: zone
! !

!TFWScores class methodsFor: 'as yet unclassified'!

new: feuille
	^ TFWScores new
		feuille: feuille;
		yourself
! !

TFWElement subclass: #TFWSetDes
	slots: {#des}
	package: 'TresFute-Web'!

!TFWSetDes methodsFor: 'as yet unclassified'!

actualise
	| img |
	elt resetContents.
	des do: [ :de | 
		img := TFWDe new: de.
		elt << img.
		"retransmet l'annonce des dés"
		img annonceur on: TFWDe do: [ :evt |
			self annonce: evt
		]
	]
!

des: desDes
	des := desDes.
	des annonceur on: TFSetDes do: [ :evt | self actualise ]
!

renderOnSilk: aSilk
	self divOn: aSilk with: 'des'.

	self actualise
! !

!TFWSetDes class methodsFor: 'as yet unclassified'!

new: desDes
	^ TFWSetDes new
		des: desDes;
		yourself
! !

TFWElement subclass: #TFWZone
	slots: {#type. #zone. #coches}
	package: 'TresFute-Web'!

!TFWZone methodsFor: 'as yet unclassified'!

actualise
	coches withIndexDo: [ :coche :i |
		coche resetContents.
		(zone at: i) ifNotNil: [ :val |
			zone nombre
				ifTrue: [ coche << val asString ]
				ifFalse: [ coche << '✗' ]
			]
		]
!

initialize
	coches := Array new
!

renderOnSilk: aSilk
	| eltcoches coche class |
	class := type,' ',
			(zone nombre ifTrue: [ 'nombre' ] ifFalse: [ 'croix' ]), ' ',
			(zone ligne ifTrue: [ 'ligne' ] ifFalse: [ 'carre' ]).
	self divOn: aSilk with: class.
	eltcoches := elt DIV: { 'class'->'coches' }.
	1 to: (zone nbCoches) do: [ :i |
		coche := eltcoches DIV: { 'class'->'coche' }.
		coches add: coche.
		coche on: #click
			  bind: [
				  self annonce: (TFWEvtCoche new: type sur: i)
			      ]
		]
!

type: aType
	"type de zone, sert aussi pour la classe du div"
	type := aType
!

zone: uneZone
	zone := uneZone.
	zone annonceur on: TFZone do: [ :evt | self actualise ]
! !

TFEvenement subclass: #TFWEvtCoche
	slots: {#type. #num}
	package: 'TresFute-Web'!

!TFWEvtCoche methodsFor: 'as yet unclassified'!

numero
	^ num
!

numero: unNum
	num := unNum
!

type
	^ type
!

type: aType
	type := aType
! !

!TFWEvtCoche class methodsFor: 'as yet unclassified'!

new: type sur: num
	^ (TFWEvtCoche new)
		type:type;
		numero: num
! !

