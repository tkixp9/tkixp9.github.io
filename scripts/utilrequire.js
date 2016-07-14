

console.log('enter util require')
/*function enterutil() {
    console.log('enter util require function')
    $('.first_div').css('color', 'red')

}*/
define(['utilrequire'], function(utilrequire){
    function enterutil() {
        console.log('enter util require function')
        $('.first_div').css('color', 'red')

    }
    return {
        enterutil : enterutil
    };
});