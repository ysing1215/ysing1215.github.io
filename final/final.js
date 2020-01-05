$(".btn").click(function() {
    $(this).addClass("selected");
});

$(".confirm").click(function() {
    $(this).addClass("confirmed");
});

function stage1_1() {
    x = 1;
}

function stage1_2() {
    x = 5;
}

function stage2_1() {
    x = x + 2;
}

function stage2_2() {
    x = x;
}

function stage3_1() {
    x = x;
}

function stage3_2() {
    x = x + 1;
}

function select() {
    switch (x) {
        case 1:
            window.open("result1.html");
            break;
        case 2:
            window.open("result2.html");
            break;
        case 3:
            window.open("result3.html");
            break;
        case 4:
            window.open("result4.html");
            break;
        case 5:
            window.open("result5.html");
            break;
        case 6:
            window.open("result6.html");
            break;
        case 7:
            window.open("result7.html");
            break;
        case 8:
            window.open("result8.html");
            break;

    }
}