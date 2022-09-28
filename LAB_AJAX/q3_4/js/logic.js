$(function(){
    $('#butAddCart').click(btnClicked);
});

function btnClicked(){
    let data = {
        id: $('#id').val(),
        name: $('#name').val(),
        price: $('#price').val(),
        description: $('#description').val(),
        quantity: $('#quantity').val()
    }
    $.ajax('/addToCart',{
         method:"post"
        ,data: data
        ,success: fnSuccess
        ,error: fnError
    });
}

function fnSuccess(data){
    let el=$("<p>",{text: "Added succesfully"});
    $('#resp').html(el);
    $('#aLink').text("Go to shopping cart ("+data+")");

}

function fnError(){
    console.log('error');
}