<?php
    //使用time()函数可以获取当前服务器的（时间戳）
    //echo time();
    //echo '<br />';
    //echo date('Y-m-d H:i:s',time());
    //可以获取PHP的详细信息，包括目录，所支持的扩展等信息
    //phpinfo();
    //配置apach下的php.ini: timezone--改成PRC---改变时区

    //获取前一天的时间戳
    echo strtotime('-1day');
    //获取前一天时间
    echo date('Y-m-d', strtotime('-1day'));
?>