
/*辅助模块*/
angular.module('Ctrls',[])

/*定义导航菜单控制器*/
.controller('YikeCtrl',['$scope',function ($scope) {
    $scope.navs=[
        {test:'今日一刻', icon:'icon-home', link: '#!/today'},
        {test:'往期回顾', icon:'icon-file-empty', link: '#!/older'},
        {test:'热门作者', icon:'icon-pencil', link: '#!/author'},
        {test:'栏目浏览', icon:'icon-menu', link: '#!/category'},
        {test:'设置', icon:'icon-cog', link: '#!/settings'},
    ]
}])
// 今日一刻控制器
.controller('TodayCtrls',['$scope','$http','$rootScope','$filter',function ($scope,$http,$rootScope,$filter) {

    $rootScope.loaded=false;
    $rootScope.title = '今日一刻';
    //根据索引控制选中的拥有active类样式
    $rootScope.key = 0;

    //获取当前时间
    var today=$filter('date')(new Date,'yyyy-MM-dd');
    $http({
        url:'./api/today.php',
        // methord:'get',
        params:{today:today},
    }).then(function (res) {
        // console.log(res.data);
        $scope.posts = res.data.posts;
        $scope.date=res.data.date;

        //发送完请求即加载完成，结束隐藏加载的图片
        $rootScope.loaded = true;
    });
}])
    //往期回顾
.controller('OlderCtrls',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
    $rootScope.loaded=false;
    $rootScope.title = '往期内容';
    //根据索引控制选中的拥有active类样式
    $rootScope.key = 1;
    
    //往期回顾的时间是：前几天
    var day=-2;
    $http({
        url:'./api/older.php',
        // methord:'get',
        params:{day:day},
    }).then(function (res) {
        // console.log(res.data);
        $scope.posts = res.data.posts;
        $scope.date=res.data.date;

        //发送完请求即加载完成，结束隐藏加载的图片
        $rootScope.loaded = true;
    });
}])
.controller('AuthorCtrls',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
    $rootScope.loaded=false;
    $rootScope.title='热门作者';
    $rootScope.key=2;
    $http({
        url:'./api/author.php',
    }).then(function (res) {
        // console.log(res.data);
        //返回本周推荐数据
        $scope.rec=res.data.rec.authors;
        //返回热门作者数据
        $scope.all=res.data.all.authors;
        //发送完请求即加载完成，结束隐藏加载的图片
        $rootScope.loaded=true;

    })
}])