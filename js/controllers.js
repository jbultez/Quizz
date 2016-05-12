angular.module('app.controllers', [])
  
.controller('questionsCtrl', function($scope, quiz, resultats) {

	$scope.question = '';
	$scope.reponses = {};
    $scope.resp = '';
    $scope.edit = false;
    console.log($scope.edit);
    $scope.pourcent = 0;
    $scope.comment = [];
	$scope.vrai = 0;
	$scope.red = [];
	$scope.green = [];
	$scope.bouton = false;
	$scope.disabled = false;
	$scope.texteBouton = 'Question suivante';
	$scope.iconeBouton = 'ion-android-arrow-forward';
	resultats.resetVrai();
	resultats.resetFaux();
    

	var step = 0;
    
	$scope.choix = function (index) {
		$scope.disabled = true;
		$scope.bouton = true;
        $scope.edit = true;
        console.log($scope.edit);
		if(index == $scope.vrai) {
			// Bonne réponse
			$scope.green[index] = true;
			resultats.incrementeVrai();
		} else {
			// Mauvaise réponse
			$scope.red[index] = true;
			$scope.green[$scope.vrai] = true;
			resultats.incrementeFaux();
		}
		if(quiz.getMax() == step) {
			$scope.iconeBouton = 'ion-wand';
			$scope.texteBouton = 'Quizz terminé appuyer pour recommencer';
			step = -1;			
		}
	};

	$scope.suivant = function () {
		if(step == -1) {
			step = 0;
			$scope.texteBouton = 'Question suivante';
			$scope.iconeBouton = 'ion-android-arrow-forward';
			resultats.resetVrai();
			resultats.resetFaux();
		} 
		getQuestion();
	};

	var getQuestion = function () {
		var item = quiz.getQuestion(step);
		$scope.bouton = false;
		$scope.disabled = false;
                    $scope.edit = false;
            console.log($scope.edit);
		$scope.question = item.question;
		$scope.reponses = item.reponses;
        $scope.resp = item.resp;
		$scope.vrai = item.vrai;
		$scope.red = [];
		$scope.green = [];
		for (var i = 0; i < item.reponses.length; i++) {
			$scope.red.push(false);
			$scope.green.push(false);
		}
		++step;
	}
    
	$scope.suivant();
})
   
.controller('resultatsCtrl', function($scope, resultats) {

	$scope.setResults = function () {
		$scope.vrai = resultats.getVrai();
		$scope.faux = resultats.getFaux();
        $scope.pourcent = Math.round((resultats.getVrai() / 50 ) * 100 );
	}

})
