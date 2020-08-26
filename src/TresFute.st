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

nombre
	^ nombre
!

nombre: unNombre
	nombre := unNombre
! !

!TFZone class methodsFor: 'as yet unclassified'!

new: nb
	^ TFZone new nbCoches: nb
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
	zones at: #jaune put: (TFZone new nbCoches: 16; carre: true; nombre: false).
	zones at: #bleu put: (TFZone new nbCoches: 12; carre: true; nombre: false).
	zones at: #vert put: (TFZone new nbCoches: 11; carre: false; nombre: false).
	zones at: #orange put: (TFZone new nbCoches: 11; carre: false; nombre: true).
	zones at: #violet put: (TFZone new nbCoches: 11; carre: false; nombre: true)
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
! !

