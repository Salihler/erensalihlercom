window.onload = function () {
    var object = {
        mainmenu: [
            "English / Türkçe",
            "Projeler",
            "Sosyal Medya",
            "İletişim"
        ],
        projects: [
            likedisc = {
                name: "Like Disc (Not Live Yet)",
                link: "http://www.likedisc.com/"
            },
            networkchanger = {
                name: "Network Changer (Windows App)",
                link : "https://github.com/Salihler/erensalihlercom"
            }
        ],
        socialmedia: [
            github = {
                name: "github",
                link: "https://github.com/Salihler"
            },
            linkedin =
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/eren-salihler/"
            },
            twitch = {
                name: "twitch",
                link: "https://www.twitch.tv/diskoking"
            }
        ],
        contact: [
            email = 
            {
                name: "E-Posta",
                link: "eren.salihler@gmail.com"
            }
        ]
    };

    var terminal = document.getElementById("rows");

    MainMenu(terminal, object);
};

function MainMenu(terminal, object) {
    object.mainmenu.forEach(element => {
        const link = document.createElement("button");
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        link.innerHTML = element;
        link.setAttribute("class", "screen-button")
        link.setAttribute("onclick", "CreateLinks()")

        row.appendChild(link);
        terminal.appendChild(row);
    });
}

function CreateLinks(terminal, object) {
    object.forEach(element => {
        const link = document.createElement("a");
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        link.innerHTML = element.name;
        link.setAttribute("href", element.link);
        link.setAttribute("class", "screen-button");
        link.setAttribute("type", "button");

        row.appendChild(link);
        terminal.appendChild(row);
    });
}