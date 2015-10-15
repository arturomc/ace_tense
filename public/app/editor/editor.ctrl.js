(function(){
    "use strict";

    angular
        .module("app")
        .controller("editorCtrl", editorCtrl);

    editorCtrl.$inject = ["$scope"];
    function editorCtrl($scope) {

        $scope.someText = "GET _query {}";
        $scope.editorContext ;
        $scope.aceOptions = {
            theme: "monokai",

            onLoad: function (_ace) {
                $scope.editorContext = _ace.getSession();
                $scope.editorContext.setMode("ace/mode/acense");
                console.log("loading stuff")
            },
            onChange: function (_ace) {
                console.log("changing stuff");
            }
        }
    }
})();