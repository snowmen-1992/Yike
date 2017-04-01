
/*应用主模块*/
var Yike=angular.module('Yike',['ngRoute','Ctrls','Directives']);
/*配置路由  config监听地址变化*/
Yike.config(['$routeProvider',function ($routeProvider) {
    // 根据地址的变化配置路由
    $routeProvider.when('/today',{
        //该路径是相对于index.html找的，因为这一块是要拿到index.html下加载的
        templateUrl:'./views/today.html',
        controller:'TodayCtrls'
    }).when('/older',{
        templateUrl:'./views/older.html',
        controller:'OlderCtrls'
    }).when('/author',{
        templateUrl:'./views/author.html',
        controller:'AuthorCtrls'
    }).when('/category',{
        // templateUrl:'',
        // controller:''
    }).when('/settings',{
        // templateUrl:'',
        // controller:''
    }).otherwise({//默认页面
        redirectTo:'/today'
    })
}]);



// 在根作用域下添加一个方法，这个方法可以被任一个控制器访问到
Yike.run(['$rootScope',function ($rootScope) {
    //设置变量，用来控制类名
    $rootScope.collapsed=false;
    $rootScope.toggle=function (){
        //类样式切换
        $rootScope.collapsed=!$rootScope.collapsed
        
        //控制每个具体链接动画
        //获取所有的导航链接
        var navs=document.querySelectorAll('.navs dd');
        // console.log(navs);
        if($rootScope.collapsed){
            //从左向右-100%---》0
            //遍历所有的dd,translate(0)
            for(var i=0;i<navs.length;i++){
                navs[i].style.transform='translate(0)';
                navs[i].style.transitionDuration=0.2*(i+1)+'s';
                navs[i].style.transitionDelay='0.3s';
            }
        }else{
            //从右向左0---》-100%
            for(var j=navs.length-1; j>=0; j--){
                navs[j].style.transform='translate(-100%)';
                navs[j].style.transitionDuration=0.2*(navs.length-j)+'s';
                navs[j].style.transitionDelay='';
            }

        }
    }
}]);