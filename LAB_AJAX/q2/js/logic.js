$(function(){
    $('#butQuestion').click(clickButton);
});

function clickButton(){
    console.log('clicked');
    $.ajax('/8ball',{
        type:"get",
        success:fnSuccess,
        error:fnError
    });
}
function fnSuccess(data){
    console.log(data);
    $('#inpQuestion').val(data);
}
function fnError(){
    console.log('error');
}