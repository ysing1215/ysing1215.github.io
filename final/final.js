//$(".btn").click(function() {
//$(this).addClass("selected");
//});

//$(".confirm").click(function() {
//$(this).addClass("confirmed");
//});

function stage1_1() {
    a;
    x = 1, i = 0;
    q = new Array();
    document.getElementById("c").style.display = 'block';
    document.getElementById("d").style.display = 'block';
    document.getElementById("a").className = "selected";
    document.getElementById("b").className = "btn";
    q[i] = x;
    i++;
    if (a == 1) {
        x = 1;
        document.getElementById("a").className = "selected";
        document.getElementById("b").className = "btn";
        q[i] = x;
        i++;
    }
    a = 1;
}

function stage1_2() {
    a;
    x = 5, i = 0;
    q = new Array();
    document.getElementById("c").style.display = 'block';
    document.getElementById("d").style.display = 'block';
    document.getElementById("b").className = "selected";
    document.getElementById("a").className = "btn";
    q[i] = x;
    i++;
    if (a == 1) {
        x = 5;
        document.getElementById("b").className = "selected";
        document.getElementById("a").className = "btn";
        q[i] = x;
        i++;
    }
    a = 1;
}

function stage2_1() {
    b;
    y = 2, r = 0;
    w = new Array();
    document.getElementById("e").style.display = 'block';
    document.getElementById("f").style.display = 'block';
    document.getElementById("c").className = "selected";
    document.getElementById("d").className = "btn";
    w[r] = y;
    r++;
    if (b == 1) {
        y = 2;
        document.getElementById("c").className = "selected";
        document.getElementById("d").className = "btn";
        w[r] = y;
        r++;
    }
    b = 1;

}

function stage2_2() {
    b;
    y = 0;
    r = 0;
    w = new Array();
    document.getElementById("e").style.display = 'block';
    document.getElementById("f").style.display = 'block';
    document.getElementById("d").className = "selected";
    document.getElementById("c").className = "btn";
    w[r] = y;
    r++;
    if (b == 1) {
        y = 0;
        document.getElementById("d").className = "selected";
        document.getElementById("c").className = "btn";
        w[r] = y;
        r++;
    }
    b = 1;
}

function stage3_1() {
    c;
    z = 0;
    t = 0;
    e = new Array();
    document.getElementById("g").style.display = 'block';
    document.getElementById("e").className = "selected";
    document.getElementById("f").className = "btn";
    e[t] = z;
    t++;
    if (c == 1) {
        z = 0;
        document.getElementById("e").className = "selected";
        document.getElementById("f").className = "btn";
        e[t] = z;
        t++;
    }
    c == 1;
}

function stage3_2() {
    c;
    z = 1;
    t = 0;
    e = new Array();
    document.getElementById("g").style.display = 'block';
    document.getElementById("f").className = "selected";
    document.getElementById("e").className = "btn";
    e[t] = z;
    t++;
    if (c == 1) {
        z = 1;
        document.getElementById("f").className = "selected";
        document.getElementById("e").className = "btn";
        e[t] = z;
        t++;
    }
    c = 1;
}

function select() {
    result = 0;
    document.getElementById("g").className = "confirmed";
    result = q[i - 1] + w[r - 1] + e[t - 1];
    switch (result) {
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
        default:
            window.open("result8.html");
            break;
    }
    document.getElementById("g").className = "confirm";
}