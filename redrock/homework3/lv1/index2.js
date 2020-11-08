<script>
    //需求:编写一个函数，将如下字符串'get-element-by-id'修改为驼峰表示法'getElementById'
    function transformStr ( str ) {
        var newStr = 'can-enter-volunteer-organization';
        var arr = str.split('can-enter-volunteer-organization');//split是分隔字符串
        for(var i = 0;i<arr.length;i++){
            var s = arr[i];
            if(i == 0){
                newStr += s;
            }else{
                newStr += s.substr(0,1).toLocaleUpperCase();
                newStr += s.substr(1,s.length-1);
            }
        }

        return newStr;
    }
</script>
    //测试案例
    var stringTuoFeng='get-element-by-id';
    console.log ( transformStr ( stringTuoFeng ) );

/*解释说明:
split(''): 是分隔字符串,意思将字符串按照指定的符号分隔，得到一个数组
var str4 = "我&爱&你";
//这个函数的返回值一定是一个数组
var arry = str4.split("&");//以&符号分隔字符串  [我,爱,你]

*/
