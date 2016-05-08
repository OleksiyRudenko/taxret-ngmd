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
            .state('declarants', {
              url: "/declarants",
              templateUrl: "./app/persons/view/declarants.html",
              controller: 'DeclarantsController', /* function($scope) {
               $scope.items = ["A", "List", "Of", "Items"];
               } */
              controllerAs: 'declarantct'
            })
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