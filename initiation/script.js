$(function(){
    $('main > button').click(function(e){
        e.preventDefault();
        $('form').toogleClass('displayed');
    });
});