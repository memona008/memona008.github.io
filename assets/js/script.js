var subtitles, skills, projects, oppSide;
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

$.getJSON("assets/js/custom.json", function (data) {
    subtitles = data.subtitles;
    skills = data.skills;
    projects = data.projects;
    loadPortfolio();
});

function loadPortfolio() {
    changeSubtitle();
    loadSkills();
    loadProjects();
}

function loadSkills() {
    for (var i = 0; i < skills.length; i++) {
        var icon = skills[i].icon ? "<i class='skill-icon " + skills[i].icon + "'></i> " : "";
        $(".panel-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<a data-bs-toggle='collapse' data-bs-parent='#accordion' href='#panel-" + skills[i].label + "'>" + icon + skills[i].name + "</a>" +
            "</h4>" +
            "<div id='panel-" + skills[i].label + "' class='panel-collapse collapse'>" +
            "<div class='panel-body'>" + skills[i].desc + "</div>" +
            "</div>" +
            "</div>"
        );
    }
}

function loadProjects() {
    if (!projects) {
        return;
    }
    for (var i = 0; i < projects.length; i++) {
        var link = projects[i].link ? "<a href='" + projects[i].link + "' target='_newtab' class='project-link'>" + projects[i].name + " <i class='fa-solid fa-arrow-up-right-from-square'></i></a>" : projects[i].name;
        $("#projects-list").append(
            "<div class='project-card'>" +
            "<h4>" + link + "</h4>" +
            "<p>" + projects[i].desc + "</p>" +
            "</div>"
        );
    }
}

if (window.innerWidth < 700) {
    $("#arrow-right").html("<i class='fa-solid fa-chevron-up' aria-hidden='true'></i>");
    $("#arrow-left").html("<i class='fa-solid fa-chevron-up' aria-hidden='true'></i>");
} else {
    $("#arrow-right").html("<i class='fa-solid fa-chevron-left' aria-hidden='true'></i>");
    $("#arrow-left").html("<i class='fa-solid fa-chevron-right' aria-hidden='true'></i>");
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
    var resumeModal = new bootstrap.Modal(document.getElementById('resumeModal'));
    resumeModal.show();
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
            $("#arrow-" + side).html("<i class='fa-solid fa-chevron-" + side + "' aria-hidden='true'></i>");
        } else {
            $("#title").css(side, "0");
            $("#sidebar-" + side).css(side, "-30%");
            $("#sidebarTab-" + side).css(side, "-10px");
            $("#sidebarTab-" + side + " h5").fadeIn(500, 0);
            $("#arrow-" + side).html("<i class='fa-solid fa-chevron-" + oppSide + "' aria-hidden='true'></i>");
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutStatus) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-" + side).css("bottom", 0);
            $("#sidebarTab-" + side).css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-" + side).html("<i class='fa-solid fa-chevron-down' aria-hidden='true'></i>");
        } else {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-" + side).css("bottom", "-50%");
            $("#sidebarTab-" + side).css("bottom", "-10px");
            $("#arrow-" + side).html("<i class='fa-solid fa-chevron-up' aria-hidden='true'></i>");
        }
        if (window.innerWidth < 360) {
            $("#navbar").fadeToggle(500);
        }
    }
    tabOut[side] = !tabOutStatus;
}

function changeSubtitle() {
    var i = 0;
    var displayMs = 2000;
    var fadeMs = 600;

    setInterval(function () {
        $("#subtitle").fadeTo(fadeMs, 0, function () {
            i = (i + 1) % subtitles.length;
            $("#subtitle").text(subtitles[i]).fadeTo(fadeMs, 1);
        });
    }, displayMs);
}
