Smalltalk createPackage: 'TresFute-Web'!
TFAnnonceur subclass: #TFWElement
	slots: {#elt}
	package: 'TresFute-Web'!

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
	elt := aSilk DIV: { 'class'->'feuille' }.
	choisis := TFWSetDes new: feuille choisis.
	elt << choisis
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
	"le jeu"
	jeu := TFJeu new.
	"creation des elements"
	des := TFWSetDes new: jeu des.
	plateau := TFWSetDes new: jeu plateau.
	feuille := TFWFeuille new: jeu feuille.
	"partie web"	
	elt := '#jeu' asSilk.
	elt resetContents.
	elt << des << feuille << plateau.
	"gestion des evenements"
	des annonceur on: TFWDe do: [ :evt |
		jeu choisitDe: (evt de)
	]
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
	elt := aSilk DIV: { 'class'->'des'}.
	self actualise
! !

!TFWSetDes class methodsFor: 'as yet unclassified'!

new: desDes
	^ TFWSetDes new
		des: desDes;
		yourself
! !

