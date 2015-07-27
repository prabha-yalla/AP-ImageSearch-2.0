(function () {
    "use strict";
    angular
        .module("Images")
        .controller("ImageSearch",
                     ["ImageResource","$scope","appSettings",
                         ImageSearch]);

    function ImageSearch(ImageResource,$scope,appSettings) {
        
        $scope.appSettings = appSettings;
        $scope.searchCriteria = "Avatar";       
        $scope.submit = function () {

            if ($scope.searchCriteria !== null && $scope.searchCriteria !== "") {
                ImageResource.get({ search: $scope.searchCriteria }, function (data) {
                    $scope.data = data;
                    if (data.entries && data.entries.length) {
                        $scope.images = [];
                        for (var i = 0; i < data.entries.length; i++) {
                            $scope.images.push(data.entries[i].contentLinks[0].href)

                        }
                    } else {
                        console.log('Unexpected Response');
                    }

                });
            }
        }
        $scope.submit();
    };

   
   
    
}());
