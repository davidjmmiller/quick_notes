$(function(){
    $('#query').focus();
    $('#frm_questions').submit(function(ev){
        ev.preventDefault();
    });
    var time;
    $('#query').keyup(function(ev){
        clearInterval(time);
        time = setInterval(function(){
            clearInterval(time);
            if ($('#query').val() != ''){
                $('#response').prepend('<p style="display:none">' + $('#query').val() + '</p>');
                $('#query').val('');
                $('p').slideDown(500);
            }
        },750);
        //alert($(this).val());
    });
});