﻿var dotIndex = 0;
var graphviz = d3.select("#graph2").graphviz()
    .transition(function () {
        return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(500)
            .duration(1500);
    })
    .logEvents(true)
    .on("initEnd", render);

function render() {
    var dotLines = dots[dotIndex];
    var dot = dotLines.join('');
    //.addImage("画像として使用したいScrapBOXのアイコンページを指定"),"サイズ"
    graphviz
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx

        .renderDot(dot)
        .on("end", function () {
            dotIndex = (dotIndex + 1) % dots.length;
            render();
        });
}

var dots = [
    //グラフ001
     ['digraph{',
    'empty [label = "" shape = plaintext];',
    'node [shape = box,label="LINEトークルーム"];s0;',
    'node [shape = box,label="function doPost(e)",fontcolor="blue",href = "https://t-kazu1234.github.io/D3Test/d3-Graphviz/Graphviz_0_ver10.html"];s1;',
    'node [shape = box,label="function reply()"];s2;',
    'node [shape = box,label="function Debug()"];s3;',
    'node [shape = box,label="function Receive()"];s4;',
    'node [shape = box,label="function send()"];s5;',
        'empty -> s0 [label = "ボス！"];',
        's0 -> s1 [label = "Webhookイベントオブジェクト",fontcolor="blue",href = "https://developers.line.biz/ja/reference/messaging-api/#common-properties"];',
        's5 -> s2 [label = "text,LINE_replyToken"];',
        's2 -> s0 [label = "return UrlFetchApp.fetch()"];',
        's1 -> s4 [label = "引数"];',
        's4 -> s5 [label = "引数"];',
        '}',
     ],
    //グラフ001クリア
     ['digraph{','}',],
     //グラフ002
     ['digraph{',
      'rankdir = "LR";',
        'subgraph cluster_1 {',
            'label = "doPost(e)"',
                'node [shape = box3d,label="LINE_message_type"];s1;',
                'node [shape = box3d,label="LINE_message_text"];s2;',
                'node [shape = box3d,label="LINE_message_StickerID"];s3;',
                'node [shape = box3d,label="LINE_source_userId"];s4;',
                'node [shape = box3d,label="LINE_source_type"];s5;',
                'node [shape = box3d,label="LINE_replyToken"];s6;',
                'node [shape = box3d,label="LINE_item"];s7;',
                's1 -> s7 [label = "配列[0]に値を代入"];',
                's2 -> s7 [label = "配列[1]に値を代入"];',
                's3 -> s7 [label = "配列[2]に値を代入"];',
                's4 -> s7 [label = "配列[3]に値を代入"];',
                's5 -> s7 [label = "配列[4]に値を代入"];',
                's6 -> s7 [label = "配列[5]に値を代入"];',
                             '}',
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
        '}',
     ]

];//var dots ここまで