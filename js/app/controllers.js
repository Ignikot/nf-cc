'use strict';

/* Controllers */

function FlipCtrl($scope) {
    $scope.isFlip = false;
    $scope.flip = function() {
        $scope.isFlip = !$scope.isFlip;
    }
}

function CalculatorCtrl($scope, CarCompanys, CarModels, CarModifs, CarYears) {
    $scope.initialPayment = 30;
    $scope.monthPayment = 60000;
    $scope.months = 12;

    $scope.car = {
        price: 813670,
        casco: 0,
        osago: 0,
        companyId: undefined,
        modelId: undefined,
        modifId: undefined,
        yearId: undefined
    }

    $scope.carCompanyList = CarCompanys;
    $scope.carModelList = CarModels;
    $scope.carModifList = CarModifs;
    $scope.carYearList = CarYears;

    $scope.currentOfferList = [];

    $scope.selectedOfferList = [];

    $scope.updateOfferList = function() {
        if($scope.monthPayment < 50000) {
            $scope.currentOfferList = [];
        } else if ($scope.monthPayment < 200000) {
            $scope.currentOfferList = [
                {productCode: "p1"},
                {productCode: "p2"}
            ];
        } else if ($scope.monthPayment < 400000) {
            $scope.currentOfferList = [
                {productCode: "p1"},
                {productCode: "p2"},
                {productCode: "p3"}
            ];
        } else if ($scope.monthPayment > 700000) {
            $scope.currentOfferList = [
                {productCode: "p1"},
                {productCode: "p2"},
                {productCode: "p3"},
                {productCode: "p4"}
            ];
        }
    }

    $scope.addToSelectedOfferList = function(idx) {
        $scope.selectedOfferList.push($scope.currentOfferList[idx]);
    }

    $scope.removeFromSelectedOfferList = function(idx) {
        $scope.selectedOfferList.splice(idx,1);
    }

    $scope.isSelected = function() {
        return ($scope.selectedOfferList.length > 0);
    }

    $scope.summ = function () {
        return parseFloat($scope.car.price) + parseFloat($scope.car.osago) + parseFloat($scope.car.casco);
    }

    $scope.updateCompany = function () {
        $scope.car.modelId = "";
        $scope.updateModel();
    }

    $scope.updateModel = function () {
        $scope.car.modifId = "";
        $scope.updateModif();
    }

    $scope.updateModif = function () {
        $scope.car.yearId = "";
        $scope.updateYear();
    }

    $scope.updateYear = function () {
    }

    $scope.updateOfferList();

    $scope.$watch($scope.monthPayment, function() {
        $scope.updateOfferList();
    })

}

