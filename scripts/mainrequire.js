
require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'jQuery',
        util: 'utilrequire'
    }
});

require(["jquery", "utilrequire"], function($, utilrequire) {
    console.log('enter main');
    entermain();
    utilrequire.enterutil();

    function entermain() {
        console.log('enter main function')
        $('.first_div').css('background', '#9900aa');
    }
});
