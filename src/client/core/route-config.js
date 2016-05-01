(function(){
  'use strict';

  // configuration for routing 
  angular
    .module('taxretApp')
      .config(function($stateProvider, $urlRouterProvider) {
          //
          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/payroll");
          //
          // Now set up the states
          $stateProvider
            .state('declarants', {
              url: "/declarants",
              templateUrl: "./users/view/declarants.html",
              controller: 'AppController', /* function($scope) {
               $scope.items = ["A", "List", "Of", "Items"];
               } */
              controllerAs: 'userct'
            })
            .state('payroll', {
              url: "/payroll",
              templateUrl: "./workflowMain/personalIncome/payroll.html"
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
              templateUrl: "./workflowMain/transportationMeans/transport.html"
            })
            .state('realestate', {
              url: "/realestate",
              templateUrl: "./workflowMain/realEstate/realestate.html"
            })
            .state('funds', {
              url: "/funds",
              templateUrl: "./workflowMain/stocks/stocks.html"
            })
            .state('foreignfee', {
              url: "/foreignfee",
              templateUrl: "./workflowMain/foreignIncome/foreignfee.html"
            })
            .state('entrepreneur', {
              url: "/entrepreneur",
              templateUrl: "./workflowMain/entrepreneuralIncome/entrepreneur.html"
            })
            .state('expenseexempt', {
              url: "/expenseexempt",
              templateUrl: "./workflowMain/taxExempt/expenseexempt.html"
            })
            .state('docUserManual', {
              url: "/docUserManual",
              templateUrl: "./manuals/docUserManual.html"
            })
            .state('docAbout', {
              url: "/docAbout",
              templateUrl: "./manuals/docAbout.html"
            })
            .state('docDev', {
              url: "/docDev",
              templateUrl: "./manuals/docDev.html"
            })
      });

})();