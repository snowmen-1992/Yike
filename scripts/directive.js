
/*自定义指令文件*/
angular.module('Directives',[])
.directive('yikeLoading',function () {
    return {
        //指定为属性，默认也是指定为属性，加到页面驼峰命名即可
        restrict : 'A',
        //刷新时没加载完成loaded=false，显示加载图片
        template : '<img ng-hide="loaded" class="loading" src="./public/images/loading.gif" alt="" />'
    }
})
