(function () {
    var app = angular.module('CASApp', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
                
            var casColorMap = $mdThemingProvider.extendPalette('red', {
                '400': 'FF0000',
                '500': '00FF00',
                '600': '0000FF'
            });

            $mdThemingProvider.definePalette('casColor', casColorMap);

            $mdThemingProvider.theme('default')
                .primaryPalette('red', {
                    'default': '900'
                });
        });
    app.controller('MenuCtrl', function MenuCtrl() {
        this.openMenu = function ($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
    });
})();