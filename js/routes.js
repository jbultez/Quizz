angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
       
    .state('tabsController.questions', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/questions.html',
          controller: 'questionsCtrl'
        }
      }
    })

    .state('tabsController.resultats', {
      cache: false,
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/resultats.html',
          controller: 'resultatsCtrl'
        }
      }
    })
        
    .state('tabsController', {
      url: '/page1',
      abstract: true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  $urlRouterProvider.otherwise('/page1/page2');
  
});