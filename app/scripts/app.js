(function () {
    /*jshint validthis:true */
    'use strict';
    var app = angular.module('frontendtrendsApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'MainCtrl'
            })
            .when('/boilerplates', {
                templateUrl: 'partials/boilerplates.html',
                controller: 'MainCtrl'
            })
            .when('/json', {
                templateUrl: 'partials/json.html',
                controller: 'MainCtrl'
            })
            .when('/dom', {
                templateUrl: 'partials/dom.html',
                controller: 'MainCtrl'
            })
            .when('/html5', {
                templateUrl: 'partials/html5.html',
                controller: 'MainCtrl'
            })
            .when('/trending', {
                templateUrl: 'partials/trending.html',
                controller: 'MainCtrl'
            })
            .when('/stack', {
                templateUrl: 'partials/stack.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        
    });
    /*jshint validthis:true */
}.call(this));

$(document).ready(function () {


    $("body").on("click", ".remote-me", function () {
        $("body").toggleClass("remote")
    });

    $("body").on("click", ".pseudo-link.show-icons", function () {
        $(".pseudo-link.show-icons").text("Hide Icons")
        $(".font-awesome-icons").fadeToggle(function () {
            $(this).is(":visible") ? $(".pseudo-link.show-icons").text("Hide Icons") : $(".pseudo-link.show-icons").text("View Icons")

        });


    });

    $("body").on("click", ".pseudo-link.show-dataTable", function () {
        $(".pseudo-link.show-dataTable").text("Hide Data Table")
        $("#json-grid").fadeToggle(function () {
            $(this).is(":visible") ? $(".pseudo-link.show-dataTable").text("Hide Data Table") : $(".pseudo-link.show-dataTable").text("View Data Table")

        });


    });

    $("body").on("click", ".pseudo-link.show-docs", function () {
        $(".pseudo-link.show-docs").text("Hide Docs")
        $("#bootstrap-docs").fadeToggle(function () {
            $(this).is(":visible") ? $(".pseudo-link.show-docs").text("Hide Docs") : $(".pseudo-link.show-docs").text("View Docs")

        });


    });

    $('.cities').hover(
        function () {
            $('.cities').tooltip('show')
        }, function () {
            $(this).removeClass('hover');
        }
    );

    $(".roller i.fa[data-theme]").click(function() {
        $("head link#theme").attr("href", $(this).data("theme"));
    });


});
