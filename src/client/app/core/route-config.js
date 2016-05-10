(function(){
  'use strict';

  // configuration for routing 
  angular
    .module('app')
      .config(function($stateProvider, $urlRouterProvider) {
          //
          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/payroll");
          //
          // Now set up the states
          $stateProvider

            // Declarants and its tabs
            .state('declarants', {
              url: "/declarants",
              templateUrl: "./app/persons/view/declarants.html",
              controller: 'DeclarantsController',
              controllerAs: 'declarantct'
            })
              /* .state('declarantsTabs', {
                abstract: true,
                url: '/tabs',
                templateUrl: 'template.html',
                controller: function($scope) {
                  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    $scope.currentTab = toState.data.selectedTab;
                  });
                }
              }) */
              .state('declarants.editCurrent', {
                url: "/editCurrent",
                data: { 'UItab.Selected' : 0 },
                views: {
                  'editCurrent' : {
                    templateUrl: "./app/persons/view/declarants.editCurrent.html",
                    controller: 'DeclarantsEditCurrentController',
                    controllerAs: 'decct',
                  }
                }
              })
              .state('declarants.selectAnother', {
                url: "/selectAnother",
                data: { 'UItab.Selected' : 1 },
                views: {
                  'selectAnother' : {
                    templateUrl: "./app/persons/view/declarants.selectAnother.html",
                    // Uses parent controller to generate a list and manage tabs
                    // controller: 'DeclarantsController',
                    // controllerAs: 'declarantct'
                  }
                }
              })
              .state('declarants.selectFromOther', {
                url: "/selectFromOther",
                data: { 'UItab.Selected' : 2 },
                views: {
                  'selectFromOther' : {
                    templateUrl: "./app/persons/view/declarants.selectFromOtherNatPers.html",
                    // Uses parent controller to generate a list and manage tabs
                    // controller: 'DeclarantsController',
                    // controllerAs: 'declarantct'
                  }
                }
              })

            // Other features
            .state('payroll', {
              url: "/payroll",
              templateUrl: "./app/workflowMain/personalIncome/payroll.html"
            })
            /* .state('state1.list', {
             url: "/list",
             templateUrl: "partials/state1.list.html",
             controller: function($scope) {
             $scope.items = ["A", "List", "Of", "Items"];
             }
             }) */
            .state('transport', {
              url: "/transport",
              templateUrl: "./app/workflowMain/transportationMeans/transport.html"
            })
            .state('realestate', {
              url: "/realestate",
              templateUrl: "./app/workflowMain/realEstate/realestate.html"
            })
            .state('funds', {
              url: "/funds",
              templateUrl: "./app/workflowMain/stocks/stocks.html"
            })
            .state('foreignfee', {
              url: "/foreignfee",
              templateUrl: "./app/workflowMain/foreignIncome/foreignfee.html"
            })
            .state('entrepreneur', {
              url: "/entrepreneur",
              templateUrl: "./app/workflowMain/entrepreneuralIncome/entrepreneur.html"
            })
            .state('expenseexempt', {
              url: "/expenseexempt",
              templateUrl: "./app/workflowMain/taxExempt/expenseexempt.html"
            })
            .state('docUserManual', {
              url: "/docUserManual",
              templateUrl: "./app/manuals/docUserManual.html"
            })
            .state('docAbout', {
              url: "/docAbout",
              templateUrl: "./app/manuals/docAbout.html"
            })
            .state('docDev', {
              url: "/docDev",
              templateUrl: "./app/manuals/docDev.html"
            })
      });

})();