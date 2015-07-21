(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/header-one.html',
    '<nav class="navbar navbar-custom navbar-static-top"><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#><img class="image-responsive pull-left" data-ng-src={{header.logo}} width=50 height=50> <span class=pull-right>{{header.title}}</span></a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li data-ng-repeat="link in header.links" data-ng-class="{\'active\': location.path() == link.url}"><a data-ng-click=link.click() data-toggle=collapse data-target=.navbar-collapse>{{link.text}}</a></li></ul></div></nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/header-two.html',
    '<header class=header-2><div class=container><div class=row><nav class="navbar col-sm-12" role=navigation><div class=navbar-header><button type=button class=navbar-toggle></button> <a class=brand href=#><img src=../../common-files/icons/Infinity-Loop@2x.png width=50 height=50>Startup</a></div><div class="collapse navbar-collapse"><ul class="nav pull-right"><li class=active><a href=#>Home</a></li><li><a href=#>Work</a></li><li><a href=#>Blog</a></li><li><a href=#>Contact</a></li></ul><ul class=subnav><li><a href=#>Privacy</a></li><li><a href=#>Terms</a></li><li><a href=#>Advertise</a></li><li><a href=#>Affiliates</a></li><li><a href=#>Newsletter</a></li><li><a href=#>About</a></li><li><a href=#>Contact Us</a></li></ul></div></nav></div></div></header>');
}]);
})();

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/pages-one.html',
    '<div class=container-full><div class=row><div class="col-lg-12 text-center v-center"><h1>{{page.title}}</h1><p class=lead>{{page.subTitle}}</p><br><br><br><form class=col-lg-12><div class=input-group style="width:340px;text-align:center;margin:0 auto;"><input class="form-control input-lg" title={{page.input.title}} placeholder={{page.input.placeholder}} type=text> <span class=input-group-btn><button class="btn btn-lg btn-primary" type=button>{{page.input.button.text}}</button></span></div></form></div></div><div class=row><div class="col-lg-12 text-center v-center" style=font-size:39pt;><a href=#><i class=icon-google-plus></i></a> <a href=#><i class=icon-facebook></i></a> <a href=#><i class=icon-twitter></i></a> <a href=#><i class=icon-github></i></a> <a href=#><i class=icon-pinterest></i></a></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/subHeader-one.html',
    '<div class="subHeader subheader-one well"><div class=container><div class=row><div class="col-xs-12 text-center"><h1>Hello World!</h1></div></div></div></div>');
}]);
})();
