
var ch_s_o = ["創","出","利","民","申","書","士","得","撒上","撒下","王上","王下","代上","代下","拉","尼","斯","伯","詩","箴","傳","歌","賽","耶","哀","結","但","何","珥","摩","俄","拿","彌","鴻","哈","番","該","亞","瑪"];
var ch_s_n =["太","可","路","約","徒","羅","林前","林後","加","弗","腓","西","帖前","帖後","提前","提後","多","門","來","雅","彼前","彼後","約一","約二","約三","猶","啟"]
var ch_f_o = ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王紀上","列王紀下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","馬拉基書"];
var ch_f_n = ["馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","歌林多前書","歌林多後書","加拉太書","以弗所書","腓立比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"]
var ch_count_o = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4];
var ch_count_n = [28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22]

var sec_count_o = [
	[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],
	[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],
	[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],
	[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],
	[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],
	[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],
	[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],
	[22,23,18,22],
	[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],
	[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],
	[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],
	[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],
	[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],
	[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],
	[11,70,13,24,17,22,28,36,15,44],
	[11,20,32,23,19,19,73,18,38,39,36,47,31],
	[22,23,15,17,14,14,10,17,32,3],
	[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],
	[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],
	[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],
	[18,26,22,16,20,12,29,17,18,20,10,14],
	[17,17,11,16,16,13,13,14],
	[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],
	[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],
	[22,22,66,22,22],
	[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],
	[21,49,30,37,31,28,28,27,27,21,45,13],
	[11,23,5,19,15,11,16,14,17,15,12,14,16,9],
	[20,32,21],
	[15,16,15,13,27,14,17,14,15],
	[21],
	[17,10,10,11],
	[16,13,12,13,15,16,20],
	[15,13,19],
	[17,20,19],
	[18,15,20],
	[15,23],
	[21,13,10,14,11,15,14,23,17,12,17,14,9,21],
	[14,17,18,6]
];

var sec_count_n =[
	[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],
	[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],
	[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],
	[51,25,36,54,47,71,52,59,41,42,57,50,38,31,27,33,26,40,42,31,25],
	[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
	[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],
	[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],
	[24,17,18,18,21,18,16,24,15,18,33,21,14],
	[24,21,29,31,26,18],
	[23,22,21,32,33,24],
	[30,30,21,23],
	[29,23,25,18],
	[10,20,13,18,28],
	[12,17,18],
	[20,15,16,16,25,21],
	[18,26,17,22],
	[16,15,15],
	[25],
	[14,18,19,16,14,20,28,13,28,39,40,29,25],
	[27,26,18,17,20],
	[25,25,22,19,14],
	[21,22,18],
	[10,29,24,21,21],
	[13],
	[15],
	[25],
	[20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,24,21,15,27,21]	
];


var ch_s = ch_s_n;
var ch_f = ch_f_n;
var ch_count = ch_count_n;
var sec_count =sec_count_n;

//新舊約選擇==>切換章節選單
$("#Covenant").on("change",function(){
    //決定使用的陣列
    ch_s = ch_s_n;
    ch_f = ch_f_n;
    ch_count = ch_count_n;
    sec_count = sec_count_n
        
    if($("#Covenant").val() == "2"){
        ch_s = ch_s_o;
        ch_f = ch_f_o;
        ch_count = ch_count_o;
        sec_count = sec_count_o;
    }``
    $('#chapter').find('option').remove(); //清除選項
    //產生相對應選項
    var ch_list_change = 
    $.each(ch_s, function(index){
        var txt = ch_f[index];
        var val = ch_s[index];
        $('#chapter').append(new Option(txt,val));
    });
    $.when(ch_list_change).done(ch_lim_change());
});

//章節選擇==>設定章數限制
$('#chapter').on("change",function(){
    ch_lim_change();
});

var ch_lim_change = function(){
    //console.log("ch_lim changed");

    var lim = ch_count[ch_s.indexOf($('#chapter').val())];
   $('#ch_limit').prop('max',lim);
   sec_lim_change();
}

//選擇章數==>設定節數線致
$('#ch_limit').on("change",function(){
    sec_lim_change();
});

var sec_lim_change = function(){
    var lim = sec_count[ch_s.indexOf($('#chapter').val())][parseInt($('#ch_limit').val())-1];
    //console.log($('#chapter').val()+$('#ch_limit').val()+":"+lim);
    $('#sec_e').prop('max',lim);
    $('#sec_s').prop('max',lim);
    $('#sec_s').prop('value',1);
    $('#sec_e').prop('value',lim);
}

// List with handle
Sortable.create(listWithHandle, {
    handle: '.glyphicon-move',
    animation: 150
  });


//清空列表
var clear_item = function clearitem(){
    $('#listWithHandle').html('');
    RebuildQueryString();
}

$('#ClearItem').click(clear_item);

//刪除列表項目
$('#listWithHandle').on("click",".del",function(){
    $(this).parent().parent().remove();
    //console.log($(this).parent().parent().html());
    RebuildQueryString();
    //alert('??');
});

//增加列表項目
$('#AddItem').click(function(){
    var s = $('#chapter').val();
    var f = ch_f[ch_s.indexOf(s)];
    var c = $('#ch_limit').val();
    var ss = $('#sec_s').val();
    var se = $('#sec_e').val();
    var SE ="";
    if(ss != se) SE = "~" + se;
    if(parseInt(ss)>parseInt(se)){se = [ss, ss = se][0]}
    $('#listWithHandle').append(`
    <div class="list-group-item d-flex">    
        <div class="glyphicon-move" aria-hidden="true"><i class="fas fa-arrows-alt-v me-2 scaling toBlue"></i></div>
        <div class="ChTitle">`+f+` `+c+`:`+ss+ SE+`</div>
        <div class="ms-auto"><i class="fas fa-trash-alt scaling del toPink"></i></div>
        <div class="BibleContent d-none">chineses=`+s+`&chap=`+c+`&sec=`+ss+`-`+se+`</div>
    </div>
    `);
    RebuildQueryString();
});

var RebuildQueryString = function(){
    var queryString = "?";
    for(var i = 0; i<$(".BibleContent").length; i++){
        const ListItemText = new URLSearchParams($(".BibleContent:eq("+i+")").text());
        const sec = ListItemText.get('sec').split('-');
        //console.log(sec);
        queryString += 'chs'+i+'='+ListItemText.get('chineses') 
                      +'&chn'+i+'='+ListItemText.get('chap') 
                      +'&ss'+i+'='+sec[0]
                      +'&se'+i+'='+sec[1]
                      +'&';
    }
    window.history.replaceState("","",queryString);
}

//更新查詢字串
$(document).ready(function(){
    var i = 0;
    const queryString = new URLSearchParams(window.location.search);
    //console.log("autoAddItem");
    while(queryString.get('chs'+i)!=null){
        try{
            var s = queryString.get('chs'+i);
            var f = ch_s_n.indexOf(s)>-1?ch_f_n[ch_s_n.indexOf(s)]:ch_f_o[ch_s_o.indexOf(s)];
            var c = queryString.get('chn'+i);
            var ss = queryString.get('ss'+i);
            var se = queryString.get('se'+i);
            var SE ="";
            if(ss != se) SE = "~" + se;
            if(parseInt(ss)>parseInt(se)){se = [ss, ss = se][0]}
            $('#listWithHandle').append(`
            <div class="list-group-item d-flex">    
                <div class="glyphicon-move" aria-hidden="true"><i class="fas fa-arrows-alt-v me-2 scaling toBlue"></i></div>
                <div class="ChTitle">`+f+` `+c+`:`+ss+ SE+`</div>
                <div class="ms-auto"><i class="fas fa-trash-alt scaling del toPink"></i></div>
                <div class="BibleContent d-none">chineses=`+s+`&chap=`+c+`&sec=`+ss+`-`+se+`</div>
            </div>
            `);
            i++;
        }catch{
            //console.log('i = '+i);
            break;
        }
    }
});


//取得輸入的資料並繪製於頁面上
$('#result-tab').click(async function(){
    $('#render-area').html('');
    
    for(var index=0; index<$('.BibleContent').length; index++){
        var ch_title = $('.ChTitle:nth('+index+')').text();
        var content = "";
        
        //console.log($('.BibleContent:nth('+index+')').text())
        var content_list = await gd($('.BibleContent:nth('+index+')').text());

        
        //await console.log("content_list length = "+content_list.length);
        //console.log(content_list);
        for(var i = 0; i<content_list.length; i++){
            //console.log("content_list index= "+content_list[i]);
            content += '<li class="list-group-item d-flex">'+content_list[i]+'</li>';
        }

        await $('#render-area').append(`
        <ul class='list-group mb-5'>
             <li class='list-group-item text-center fw-bolder'>`+ ch_title +`</li>`+
             content+
         `<ul>`); 

        await $('#render-area li').css({'font-size':$('#FontSize').val() + 'pt'});
    };
    brightness_change();
});
 
//資料查詢及解析資料
var gd = async function GD(parms){
    const BibleSecs = [];//回傳經文用陣列
    //console.log("1: "+parms);
    var j='';
    var fd = $.get('https://bible.fhl.net/json/qb.php?'+parms, //取得資料API
    function(data){       
        j = jQuery.parseJSON(data).record;//處理json，並分出record資料
    });
    await $.when(fd).done(function(){
        for(var i=0;i<j.length;i++){
            BibleSecs.push("<div class='me-2'>"+j[i].sec +". </div><div>"+j[i].bible_text+"</div>");
        }
        //console.log(BibleSecs.length);
        
    });
    //console.log("return point");
    return(BibleSecs);
}

var jp = function jp(j){
    for(var i=0;i<j.length;i++){
        BibleSecs.push("<div class='me-2'>"+j[i].sec +". </div><div>"+j[i].bible_text+"</div>");
    }
    return BibleSecs;
}

$('#ShareURL').click(function(){
    navigator.clipboard.writeText(window.location.href);
    toastr.success('複製成功！','',{progressBar: true})
});

//字型大小調整
$('#FontSize').on("input",function(){
    $('#render-area li').css({'font-size':$('#FontSize').val() + 'pt'});
});

//黑色主題調整
var brightness_change = function brightness_change(){
    t_color = $('body').css('color');
    bg_color = $('body').css('background-color');
    bd_color = "rgba" + t_color.substring(3,t_color.length-1) + " ,0.125)";
    $('#render-area li').css({'color':t_color, 'background-color':bg_color, 'border-color':bd_color});
}

$('.brightness-change').click(function(){
    brightness_change();
});

//切換主題前須先將文字轉回英文，切換完成後再轉回中文
var txt_replace_b = function txt_replace_b(){
    $(".theme-toggle").text($(".theme-toggle").text().replace("切換深色", "Light"));
    $(".theme-toggle").text($(".theme-toggle").text().replace("切換淺色", "Dark"));
}
var txt_replace_a = function txt_replace_a(){
    $(".theme-toggle").text($(".theme-toggle").text().replace("Light", "切換深色"));
    $(".theme-toggle").text($(".theme-toggle").text().replace("Dark", "切換淺色"));
}