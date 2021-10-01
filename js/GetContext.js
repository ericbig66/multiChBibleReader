
var ch_s_o = ["創","出","利","民","申","書","士","得","撒上","撒下","王上","王下","代上","代下","拉","尼","斯","伯","詩","箴","傳","歌","賽","耶","哀","結","但","何","珥","摩","俄","拿","彌","鴻","哈","番","該","亞","瑪"];
var ch_s_n =["太","可","路","約","徒","羅","林前","林後","加","弗","腓","西","帖前","帖後","提前","提後","多","門","來","雅","彼前","彼後","約一","約二","約三","猶","啟"]
var ch_f_o = ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王紀上","列王紀下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","馬拉基書"];
var ch_f_n = ["馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","歌林多前書","歌林多後書","加拉太書","以弗所書","腓立比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"]
var ch_count_o = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4];
var ch_count_n = [28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22]

var ch_s = ch_s_n;
var ch_f = ch_f_n;
var ch_count = ch_count_n;

//新舊約選擇==>切換章節選單
$("#Covenant").on("change",function(){
    //決定使用的陣列
    ch_s = ch_s_n;
    ch_f = ch_f_n;
    ch_count = ch_count_n;
        
    if($("#Covenant").val() == "2"){
        ch_s = ch_s_o;
        ch_f = ch_f_o;
        ch_count = ch_count_o;
    }
    $('#chapter').find('option').remove(); //清除選項
    //產生相對應選項
    $.each(ch_s, function(index){
        var txt = ch_f[index];
        var val = ch_s[index];
        $('#chapter').append(new Option(txt,val));
    });
});

//章節選擇==>設定章結數限制
$('#chapter').on("change",function(){
    var lim = ch_count[ch_s.indexOf($('#chapter').val())];
   $('#ch_limit').prop('max',lim);
});

// List with handle
Sortable.create(listWithHandle, {
    handle: '.glyphicon-move',
    animation: 150
  });


//清空列表
var clear_item = function clearitem(){
    $('#listWithHandle').html('');
}

$('#ClearItem').click(clear_item);

//刪除列表項目
$('#listWithHandle').on("click",".del",function(){
    $(this).parent().parent().remove();
    console.log($(this).parent().parent().html());
    //alert('??');
});

//增加列表項目
$('#AddItem').click(function(){
    var s = $('#chapter').val();
    var f = ch_f[ch_s.indexOf(s)];
    var c = $('#ch_limit').val();
    var ss = $('#sec_s').val();
    var se = $('#sec_e').val();
    if(parseInt(ss)>parseInt(se)){se = [ss, ss = se][0]}
    $('#listWithHandle').append(`
    <div class="list-group-item d-flex">    
        <div class="glyphicon-move" aria-hidden="true"><i class="fas fa-arrows-alt-v me-2 scaling toBlue"></i></div>
        <div class="ChTitle">`+f+` `+c+`:`+ss+`~`+se+`</div>
        <div class="ms-auto"><i class="fas fa-trash-alt scaling del toPink"></i></div>
        <div class="BibleContent d-none">chineses=`+s+`&chap=`+c+`&sec=`+ss+`-`+se+`</div>
    </div>
    `);
});

//取得輸入的資料並繪製於頁面上
$('#result-tab').click(async function(){
    $('#render-area').html('');
    
    for(var index=0; index<$('.BibleContent').length; index++){
        var ch_title = $('.ChTitle:nth('+index+')').text();
        var content = "";
        
        //console.log('BibleContent Index = '+index);
        console.log($('.BibleContent:nth('+index+')').text())
        //setTimeout(()=>{
        var content_list = await gd($('.BibleContent:nth('+index+')').text());
        //},0);
        
        await console.log("content_list length = "+content_list.length);
        //console.log(content_list);
        for(var i = 0; i<content_list.length; i++){
            console.log("content_list index= "+content_list[i]);
            content += '<li class="list-group-item">'+content_list[i]+'</li>';
        }
        /*
        await content_list.forEach(async function(index,value){
            await console.log("content_list index= " + index);
            await console.log("content_list value= " + value);
             content += '<li class="list-group-item">'+value+'</li>'
        });
        */
            //console.log(content);
        await $('#render-area').append(`
        <ul class='list-group mb-5'>
             <li class='list-group-item text-center fw-bolder'>`+ ch_title +`</li>`+
             content+
         `<ul>`); 
    };    
});
 
//資料查詢及解析資料
var gd = async function GD(parms){
    const BibleSecs = [];//回傳經文用陣列
    console.log("1: "+parms);
    var j='';
    var fd = $.get('https://bible.fhl.net/json/qb.php?'+parms, //取得資料API
    function(data){       
        //console.log(data);
        j = jQuery.parseJSON(data).record;//處理json，並分出record資料
        //console.log("2: "+j.length);
        //console.log(j);
        //console.log(j[0].sec +" "+j[0].bible_text); 
        //return jp(j);      
    });
    await $.when(fd).done(function(){
        for(var i=0;i<j.length;i++){
            //console.log("3: "+i);
            BibleSecs.push(j[i].sec +". "+j[i].bible_text);
        }
        console.log(BibleSecs.length);
        
    });
    console.log("return point");
    return(BibleSecs);
}

var jp = function jp(j){
    for(var i=0;i<j.length;i++){
        //console.log("3: "+i);
        BibleSecs.push(j[i].sec +". "+j[i].bible_text);
    }
   // console.log(BibleSecs);
    //console.log("5: "+BibleSecs);
    //alert(BibleSecs);
    //console.log("6: "+BibleSecs.length);
    //console.log(typeof BibleSecs);
    return BibleSecs;
}

var test = function test(){
    var t1 = ["a","b","c"];
    var t2 = ["d","e","f"];
    t2.forEach(function(item,index){
        //var content_list = []; 
        //content_list = gd($('.BibleContent:nth('+index+')').text());
        var xx ='';
        xx = test2("QQ");
        console.log(xx);
        //console.log(index);
        console.log(item);
        t1.push(item);
    });
    console.log(t1);
}

var test2 = async function test2(x){
   await  setTimeout(function(){
       console.log("t:"+x);
        return x;
    },1000);
}

