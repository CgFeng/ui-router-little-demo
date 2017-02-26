/**
 * Created by urcha on 2017/2/26.
 */
var routerApp=angular.module('routerApp',['ui.router']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/gallery');
    $stateProvider
        .state('gallery',{
            url:'/gallery',
            views:{
                '':{
                    templateUrl:'app/business/gallery.html'
                },
                'categoryNav@gallery':{
                    templateUrl:'app/business/categoryNav.html'
                },
                'categoryContent@gallery':{
                    templateUrl:'app/business/portrait.html'
                }
            }
        })
        .state('gallery.portrait',{
            url:'/portrait' ,
            views:{
                'categoryContent@gallery':{
                    templateUrl:'app/business/portrait.html'
                }
            }
        })
        .state('gallery.iphonePhotography',{
            url:'/iphonePhotography' ,
            views:{
                'categoryContent@gallery':{
                    templateUrl:'app/business/iphonePhotography.html'
                }
            }
        })
        .state('about',{
            url:'/about',
            views:{
                '':{
                    templateUrl:'app/business/about.html'
                }
            }
        });
});