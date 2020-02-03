var matches = [];
    var misli= 3;
    var oran = 0;
$(function() {
    calculate(true)
});


function selectFunc(element){
    let matchCode = $(element).closest(".match").find(".matchCode").html();
    let code = $(element).find(".selectionCode").html();
    let percentage = $(element).find(".selectionPercentage").html().replace(",", ".");;
    matches = matches.filter(function(value){
        return value.matchCode != matchCode;
    });

    matches.push({matchCode:matchCode,code:code,percentage:percentage});
    calculate();

}

function misliChangeFunc(element){
    misli = parseInt($(element).val());
    $("#misliTotal").html(misli + ' TL');
    calculate()
}

function calculate(load){
    if(!load){
        oran = 1;
    }
    
    matches.forEach(function(item) {
        oran = oran*item.percentage;
      });
    
    var total = oran * misli;
    $("#totalPrice").html(total.toFixed(2) + ' TL');
}