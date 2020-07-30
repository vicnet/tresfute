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
	annonceur announce: evt
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

Object subclass: #TFFeuille
	slots: {#choisis}
	package: 'TresFute'!

!TFFeuille methodsFor: 'actions'!

ajoute: de
	choisis ajoute: de
! !

!TFFeuille methodsFor: 'initialization'!

choisis
	^ choisis
!

initialize
	choisis := TFSetDes new
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
! !

!TresFute class methodsFor: 'as yet unclassified'!

start
! !

