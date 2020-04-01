var subtitles,skills, award, oppSide;
var count = 0;
var tabOut = {
    left: false,
    right: false
}

particlesJS.load('particles', 'assets/js/particles.json', function () {});
$("#title").fadeTo(1000, 1);
$("#navbar").delay(1000).fadeTo(1000, 1);
$("#subtitle").delay(1000).fadeTo(1000, 1);
if (window.innerWidth > 700) {
    $(".sidebarTab h5").delay(3000).fadeTo(1000, 1);
}
//$("#bg-pic").attr("src","assets/img/backgrounds/"+(Math.floor(Math.random()*18)+1)+".jpg").fadeIn(1000);

$.getJSON("assets/js/custom.json", function (data) {
    subtitles = data.subtitles;
    skills = data.skills;
    loadPortfolio();
});

function loadPortfolio() {
    changeSubtitle();
    for (var i = 0; i < skills.length; i++) {
        $(".panel-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<a data-toggle='collapse' data-parent='#accordion' href='#panel-" + skills[i].label + "'>"+skills[i].name+"</a>" +
            "</h4>" +
            "<div id='panel-" + skills[i].label + "' class='panel-collapse collapse'>" +
            "<div class='panel-body'>" + skills[i].desc + "</div>" +
            "</div>" +
            "</div>"
        );
    }
}

if (window.innerWidth < 700) {
    $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
    $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
} else {
    $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
    $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
}

if (window.location.href.split("#")[1] == "portfolio") {
    tabClick(false, "right");
}

$(".sidebarTab").hover(function () {
    $("#sidebar-" + $(this).attr('id').substring(11)).css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-" + $(this).attr('id').substring(11)).css("background-color", "#212121");
}).click(function () {
    tabClick(tabOut[$(this).attr('id').substring(11)], $(this).attr('id').substring(11));
});

 if (window.location.href.indexOf('#resume') != -1) {
    $('#resumeModal').modal('show');
}

function tabClick(tabOutStatus, side) {
    if (side == "right") {
        oppSide = "left";
    } else {
        oppSide = "right";
    }
    if (tabOut[oppSide] == true) {
        tabClick(true, oppSide);
    }
    if (window.innerWidth > 700) {
        if (!tabOutStatus) {
            $("#title").css(side, "30%");
            $("#sidebar-" + side).css(side, 0);
            $("#sidebarTab-" + side).css(side, (.3 * window.innerWidth) - 10);
            $("#sidebarTab-" + side + " h5").fadeOut(500, 0);
            $("#arrow-" + side).html("<i class='fa fa-chevron-" + side + "' aria-hidden='true'></i>");
        } else {
            $("#title").css(side, "0");
            $("#sidebar-" + side).css(side, "-30%");
            $("#sidebarTab-" + side).css(side, "-10px");
            $("#sidebarTab-" + side + " h5").fadeIn(500, 0);
            $("#arrow-" + side).html("<i class='fa fa-chevron-" + oppSide + "' aria-hidden='true'></i>");
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutStatus) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-" + side).css("bottom", 0);
            $("#sidebarTab-" + side).css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-" + side).html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
        } else {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-" + side).css("bottom", "-50%");
            $("#sidebarTab-" + side).css("bottom", "-10px");
            $("#arrow-" + side).html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
        }
        if (window.innerWidth < 360) {
            $("#navbar").fadeToggle(500);
        }
    }
    tabOut[side] = !tabOutStatus;
}

function changeSubtitle() {
    var i = 0;
    setInterval(function () {
        $("#subtitle").fadeTo(300, 0).fadeTo(300, 1);
        setTimeout(function () {
            $("#subtitle").text(subtitles[i]);
        }, 300);
        i++;
        if (i == subtitles.length) {
            i = 0;
        }
    }, 1500);
}
