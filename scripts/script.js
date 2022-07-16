const object = {
    mainmenu: [
        projects = {
            index: 1,
            menu: "mainmenu",
            submenu: "projects",
            names: {
                english: "Projects",
                turkish: "Projeler"
            }
        },
        socials = {
            index: 2,
            menu: "mainmenu",
            submenu: "socialmedia",
            names: {
                english: "Socials",
                turkish: "Sosyal Medya"
            }
        },
        contact = {
            index: 3,
            menu: "mainmenu",
            submenu: "contact",
            names: {
                english: "Contact",
                turkish: "İletişim"
            }
        }
    ],
    projects: [
        likedisc = {
            index: 1,
            menu: "projects",
            name: "Like Disc (Not Live Yet)",
            link: "http://www.likedisc.com/"
        },
        networkchanger = {
            index: 2,
            menu: "projects",
            name: "Network Changer (Windows App)",
            link: "https://github.com/Salihler/erensalihlercom"
        }
    ],
    socialmedia: [
        github = {
            index: 1,
            menu: "socialmedia",
            name: "Github",
            link: "https://github.com/Salihler"
        },
        linkedin =
        {
            index: 2,
            menu: "socialmedia",
            name: "Linkedin",
            link: "https://www.linkedin.com/in/eren-salihler/"
        },
        twitch = {
            index: 3,
            menu: "socialmedia",
            name: "Twitch",
            link: "https://www.twitch.tv/diskoking"
        }
    ],
    contact: [
        email =
        {
            index: 1,
            menu: "contact",
            name: "E-Posta",
            link: "mailto:eren.salihler@gmail.com"
        }
    ]
};

const mainmenu = document.getElementById("mainmenu");
const submenus = document.getElementById("submenus");
var language = 1;

window.onload = function () {
    MainMenu();
};

function MainMenu() {
    mainmenu.innerHTML = "";
    object.mainmenu.forEach(element => {
        const link = document.createElement("a");
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        if (language == 1) {
            link.innerHTML = element.names.turkish;
        }
        else {
            link.innerHTML = element.names.english;
        }
        link.setAttribute("class", "screen-button");
        link.setAttribute("id", element.menu + element.index);
        link.setAttribute("onclick", "CreateLinks(\"" + element.submenu + "\")");
        row.appendChild(link);
        mainmenu.appendChild(row);
    });
}

function CreateLinks(menu) {
    submenus.innerHTML = "";
    object[menu].forEach(element => {
        const link = document.createElement("a");
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        link.innerHTML = element.name;
        link.setAttribute("href", element.link);
        link.setAttribute("class", "screen-button");
        link.setAttribute("type", "button");

        row.appendChild(link);
        submenus.appendChild(row);
    });
}

function ChangeLang(lang) {
    language = lang;
    MainMenu();
}

function Funny() {
    if (language == 1) {
        if (window.confirm("Gitmek istediğine emin misin?")) {
            window.location.href = "https://www.ismycomputeronfire.com/";
        }
    }
    else {
        if (window.confirm("Do you really want to leave?")) {
            window.location.href = "https://www.ismycomputeronfire.com/";
        }
    }
}