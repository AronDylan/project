//自定义函数
function toString(foo){
    //已知有字符串foo='get-element-by-id',写一个function将其转换为驼峰表示法“getElementById”
    
    // var foo = 'get-element-by-id';
    //根据某个字符进行切割
    var arr = foo.split('-');
    //获取每个元素中的第一个字符，并转换为大写
    console.log();
    var str;
    for(var i =0;i<arr.length;i++){
        arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1)
    }
    //根据某个字符将数组转换为字符串
    return arr.join("");
}
//调用方法
toString('get-element-by-id')