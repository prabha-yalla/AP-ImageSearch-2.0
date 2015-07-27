(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("ImageResource",
                ["$resource",
                 "appSettings",
                   ImageResource])

    function ImageResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/Image");
    }
}());
