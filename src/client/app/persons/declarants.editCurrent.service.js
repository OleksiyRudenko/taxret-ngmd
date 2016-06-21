/* declarants.editCurrent.service.js */
(function(){
  'use strict';

  angular.module('app.persons')
    .factory('EditCurrentDeclarantService', EditCurrentDeclarantService);
  EditCurrentDeclarantService.$inject = [
    '$q',
    '$timeout',
  ];

  /**
   * @name EditCurrentDeclarantService
   * @desc Provides service for Edit Current Declarant user input form
   * @param $q
   * @param $timeout
   * @returns {{service: Object}}
   * @constructor
   */
  function EditCurrentDeclarantService($q, $timeout){
    var service = {
          validationRules: {
            agreed: {
              required: {
                rule: true,
                message: 'You must accept the TOS'
              }
            },
            signupEmail: {
              required: true,
              pattern: /\w+@\w+\.\w+/,
              custom: function (value) {
                if (value === 'briandavidvaughn@gmail.com') {
                  return $q.reject('That email is already mine!');
                }
                return true; // Could also return a resolved Promise
              }
            },
            comments: {
              required: true
            },
            gender: {
              required: true
            },
            language: {
              required: true
            },
            password: {
              required: true,
              minlength: 6,
              maxlength: 15,
              pattern: {
                rule: /[0-9]/,
                message: 'Your password must contain at least 1 number'
              }
            },
            username: {
              required: true
            },
            email: {
              type: 'email'
            },
            negativeInteger: {
              type: 'negative integer'
            },
            positiveNumber: {
              type: 'positive number'
            },
            rangeFrom2To5: {
              minimum: 2,
              maximum: 5,
              type: 'number'
            }
          },
          submit: function (data) {
            var deferred = $q.defer();
            $timeout(function () {
              deferred.reject('Your form has been submitted');
            }, 1000);
            return deferred.promise;
          }
    };
    return service;
  }


})();
