angular.module("IonicTest").run(["$templateCache", function($templateCache) {$templateCache.put("templates/main.html","<ion-side-menus>\n    <!-- Center content -->\n    <ion-side-menu-content>\n\n        <ion-nav-view name=\"viewContent\">\n\n        </ion-nav-view>\n    </ion-side-menu-content>\n\n    <!-- Left menu -->\n    <ion-side-menu side=\"left\" class=\"side-menu\">\n\n        <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n            <h1 class=\"title\">Side Menu</h1>\n        </ion-header-bar>\n\n        <ion-content class=\"has-header\">\n            <div class=\"list\">\n                <a menu-close class=\"item item-icon-left\" ui-sref-active=\"active\" ui-sref=\"app.home\">\n                    <i class=\"icon ion-home\"></i>\n                    Home\n                </a>\n                <a menu-close class=\"item item-icon-left\" ui-sref-active=\"active\" ui-sref=\"app.settings\">\n                    <i class=\"icon ion-settings\"></i>\n                    Settings\n                </a>\n            </div>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("templates/views/home.html","<ion-view>\n    <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n    <button class=\"button button-icon icon ion-navicon\" menu-toggle=\"left\"></button>\n        <h1 class=\"title\">ionic-test</h1>\n    </ion-header-bar>\n\n    <ion-content>\n        <ion-refresher\n            pulling-text=\"Pull to refresh...\"\n            on-refresh=\"fetchRandomText()\">\n        </ion-refresher>\n        <div class=\"loader\" ng-if=\"!myHTML\">\n            <ion-spinner></ion-spinner>\n        </div>\n        <div class=\"content\" ng-bind-html=\"myHTML\">\n        </div>\n    </ion-content>\n\n</ion-view>\n");
$templateCache.put("templates/views/settings.html","<ion-view>\n    <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n    <button class=\"button button-icon icon ion-navicon\" menu-toggle=\"left\"></button>\n        <h1 class=\"title\">Settings</h1>\n    </ion-header-bar>\n\n    <ion-content>\n        <div class=\"list\">\n\n            <!-- connect toggles to controller using ng-model -->\n\n            <ion-toggle>\n                <span class=\"settings-item__text\">\n                    Allow Push Notifications\n                </span>\n            </ion-toggle>\n\n            <ion-toggle>\n                <span class=\"settings-item__text\">\n                    Allow cookies\n                </span>\n            </ion-toggle>\n\n        </div>\n    </ion-content>\n\n</ion-view>\n");}]);