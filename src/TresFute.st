Smalltalk createPackage: 'TresFute'!
(Smalltalk packageAt: 'TresFute' ifAbsent: [ self error: 'Package not created: TresFute' ]) imports: {'silk/Silk'}!
Object subclass: #TFAnnonceur
	slots: {#annonceur}
	package: 'TresFute'!

!TFAnnonceur methodsFor: 'annoncement'!

annonce
	(self annonceur) announce: self
!

annonce: evt
	(self annonceur) announce: evt
!

annonceur
	^ annonceur ifNil: [ annonceur := Announcer new ]
! !

TFAnnonceur subclass: #TFDe
	slots: {#valeur. #couleur}
	package: 'TresFute'!

!TFDe methodsFor: 'accessing'!

couleur
	^ couleur
!

valeur
	^ valeur
! !

!TFDe methodsFor: 'actions'!

lance
	valeur := 6 atRandom.
	self annonce.
	^ valeur
! !

!TFDe methodsFor: 'initialization'!

couleur: aSymbol
	couleur := aSymbol
! !

!TFDe methodsFor: 'printing'!

printString
	^ (couleur copyFrom: 1 to: 3), ':', valeur asString
! !

!TFDe class methodsFor: 'intance creation'!

blanc
	^ TFDe new: #blanc
!

bleu
	^ TFDe new: #bleu
!

jaune
	^ TFDe new: #jaune
!

new: aSymbol
	^ TFDe new couleur: aSymbol; lance; yourself
!

orange
	^ TFDe new: #orange
!

vert
	^ TFDe new: #vert
!

violet
	^ TFDe new: #violet
! !

TFAnnonceur subclass: #TFSetDes
	slots: {#des}
	package: 'TresFute'!

!TFSetDes methodsFor: 'actions'!

ajoute: unDe
	des add: unDe.
	self annonce
!

ajouteTous: desDes
	des addAll: desDes.
	self annonce
!

choisit: indexOuDe
	| de index |
	(indexOuDe isKindOf: TFDe)
		ifTrue: [
			de := indexOuDe.
			index := des indexOf: de
		] ifFalse: [
			index := indexOuDe.
			de := des at: index
		].
	des removeIndex: index.
	self annonce.
	^  de
!

dernier
	^ des last
!

do: bloc
	des do: bloc
!

lance
	des do: [ :de | de lance ]
!

retireInf: valeur
	| infs |
	infs := des select: [ :de | de valeur < valeur ].
	infs do: [ :de | des remove: de ].
	self annonce.
	^ infs
!

vide
	des removeAll.
	self annonce
! !

!TFSetDes methodsFor: 'initialization'!

initialize
	super initialize.
	des := Array new
!

tous
	self vide.
	des addAll: { TFDe blanc. TFDe jaune. TFDe bleu.TFDe vert. TFDe orange. TFDe violet }.
	self annonce
! !

!TFSetDes methodsFor: 'printing'!

printOn: aStream	
	aStream nextPutAll: ' ('.
	des 
		do: [ :de | aStream nextPut: (de printString) ]
		separatedBy: [ aStream nextPutAll: ' ' ].
	aStream nextPutAll: ')'
! !

TFAnnonceur subclass: #TFZone
	slots: {#coches. #nombre. #carre}
	package: 'TresFute'!

!TFZone methodsFor: 'as yet unclassified'!

at: pos
	^ coches at: pos
!

carre
	^ carre
!

carre: type
	carre := type
!

coche
	^ nombre not
!

coche: pos
	coches at: pos put: true.
	self annonce
!

coche: pos avec: valeur
	coches at: pos put: valeur.
	self annonce
!

ligne
	^ carre not
!

nbCoches
	^ coches size
!

nbCoches: nb
	coches := Array new: nb
!

nbRemplis
	| nb |
	nb := 0.
	coches do: [ :coche |
		coche ifNotNil: [ nb := nb + 1 ]
		].
	^ nb
!

nombre
	^ nombre
!

nombre: unNombre
	nombre := unNombre
!

score
	^ 0
! !

!TFZone class methodsFor: 'as yet unclassified'!

new: nb
	^ TFZone new nbCoches: nb
! !

TFZone subclass: #TFZoneCumul
	slots: {}
	package: 'TresFute'!

!TFZoneCumul methodsFor: 'as yet unclassified'!

score
	^ coches inject: 0 into: [ :score :valeur |
		valeur ifNil:    [ score]
			   ifNotNil: [ score + valeur ]
		]
! !

TFZoneCumul subclass: #TFZoneOrange
	slots: {#doubles}
	package: 'TresFute'!

!TFZoneOrange methodsFor: 'as yet unclassified'!

coche: pos avec: valeur
	(doubles includes: pos)
		ifTrue: [ coches at: pos put: valeur*2 ]
		ifFalse: [ coches at: pos put: valeur ].
	self annonce
!

initialize
	super initialize.
	self nbCoches: 11; carre: false; nombre: true.
	doubles := #(4 7 9 11)
! !

TFZoneCumul subclass: #TFZoneViolet
	slots: {}
	package: 'TresFute'!

!TFZoneViolet methodsFor: 'as yet unclassified'!

initialize
	super initialize.
	self nbCoches: 11; carre: false; nombre: true
! !

TFZone subclass: #TFZoneJaune
	slots: {#scores}
	package: 'TresFute'!

!TFZoneJaune methodsFor: 'as yet unclassified'!

initialize
	super initialize.
	self nbCoches: 16; carre: true; nombre: false.
	scores := {
		#(1  5  9) -> 10.
		#(2  6 14) -> 14.
		#(3 11 15) -> 16.
		#(8 12 16) -> 20.
		}
!

score
	^ scores inject: 0 into: [ :somme :score |
		(score key allSatisfy: [ :pos | (coches at: pos) notNil ])
			ifTrue: [ somme + score value ]
			ifFalse: [ somme ]
		]
! !

TFZone subclass: #TFZonePos
	slots: {#scores}
	package: 'TresFute'!

!TFZonePos methodsFor: 'as yet unclassified'!

score
	^ scores at: (self nbRemplis + 1)
! !

TFZonePos subclass: #TFZoneBleu
	slots: {}
	package: 'TresFute'!

!TFZoneBleu methodsFor: 'as yet unclassified'!

initialize
	super initialize.
	self nbCoches: 12; carre: true; nombre: false.
	scores := #(0 1 2 4 7 11 16 22 29 37 46 56)
! !

TFZonePos subclass: #TFZoneVert
	slots: {}
	package: 'TresFute'!

!TFZoneVert methodsFor: 'as yet unclassified'!

initialize
	super initialize.
	self nbCoches: 11; carre: false; nombre: false.
	scores := #(0 1 3 6 10 15 21 28 36 45 55 66)
! !

Object subclass: #TFEvenement
	slots: {}
	package: 'TresFute'!

Object subclass: #TFFeuille
	slots: {#choisis. #zones}
	package: 'TresFute'!

!TFFeuille methodsFor: 'actions'!

ajoute: de
	choisis ajoute: de
! !

!TFFeuille methodsFor: 'initialization'!

choisis
	^ choisis
!

choisit: couleur en: pos
	(zones at: couleur) coche: pos avec: (choisis dernier valeur)
!

initialize
	choisis := TFSetDes new.
	zones := Dictionary new.
	zones at: #jaune put: (TFZoneJaune new).
	zones at: #bleu put: (TFZoneBleu new).
	zones at: #vert put: (TFZoneVert new).
	zones at: #orange put: (TFZoneOrange new).
	zones at: #violet put: (TFZoneViolet new)
!

score
	^ zones inject: 0 into: [ :somme :zone |
		somme + zone score
		]
!

zone: type
	^ zones at: type
! !

Object subclass: #TFJeu
	slots: {#des. #plateau. #feuille}
	package: 'TresFute'!

!TFJeu methodsFor: 'accessing'!

des
	^ des
!

feuille
	^ feuille
!

plateau
	^ plateau
! !

!TFJeu methodsFor: 'actions'!

choisit: couleur en: pos
	feuille choisit: couleur en: pos.
	"nouveau lancer"
	des lance
!

choisitDe: index
	| de infs |
	de := des choisit: index.
	infs := des retireInf: (de valeur).
	plateau ajouteTous: infs.
	feuille ajoute: de
! !

!TFJeu methodsFor: 'initialization'!

demarre
	des := TFSetDes new tous.
	plateau := TFSetDes new.
	feuille := TFFeuille new
!

initialize
	self demarre
! !

Object subclass: #TresFute
	slots: {}
	package: 'TresFute'!

!TresFute methodsFor: 'as yet unclassified'!

start
	TFWJeu new
! !

!TresFute class methodsFor: 'as yet unclassified'!

start
	TresFute new start
! !

