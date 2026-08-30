/* ========================================
   CONFIGURAÇÕES
======================================== */

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


/* ========================================
   MENSAGENS ESPECIAIS
======================================== */

const specialMessages = {

    "2026-01-15": {
        title: "15 de janeiro ♡",
        message: "Onde tudo começou"
    },

    "2026-01-16": {
        title: "16 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 16."
    },

    "2026-01-17": {
        title: "17 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 17."
    },

    "2026-01-18": {
        title: "18 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 18."
    },

    "2026-01-19": {
        title: "19 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 19."
    },

    "2026-01-20": {
        title: "20 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 20."
    },

    "2026-01-21": {
        title: "21 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 21."
    },

    "2026-01-22": {
        title: "22 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 22."
    },

    "2026-01-23": {
        title: "23 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 23."
    },

    "2026-01-24": {
        title: "24 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 24."
    },

    "2026-01-25": {
        title: "25 de janeiro ♡",
        message: "Escreva aqui a mensagem do dia 25."
    },

    "2026-05-06": {
        title: "06 de maio ♡",
        message: "Escreva aqui a mensagem especial."
    },

    "2026-07-24": {
        title: "24 de julho ♡",
        message: "Escreva aqui a mensagem especial."
    },

    "2026-08-29": {
        title: "29 de agosto ♡",
        message: "Escreva aqui a mensagem especial."
    },

    "2026-12-31": {
        title: "31 de dezembro ✨",
        message: "Escreva aqui a mensagem especial para encerrar 2026."
    }

};


/* ========================================
   MENSAGENS DOS SÁBADOS
   SETEMBRO A DEZEMBRO DE 2026
======================================== */

const saturdayMessages = {

    /* SETEMBRO */

    "2026-09-05": {
        title: "05 de setembro ♡",
        message: "Ir sem saber tudo

Texto biblico: Hebreus 11:8
Reflexao:
Abraao partiu sem saber para onde estava indo. Voce tambem nao precisa conhecer todos os detalhes do caminho para dar o primeiro passo. Talvez esteja indo para longe de tudo que conhece, mas nao esta indo para longe de Deus. Ele nao precisa te mostrar o caminho inteiro. Basta confiar que Ele estara presente em cada parte dele.
Lembrete:
Voce nao precisa saber tudo sobre o amanha para confiar nAquele que ja esta la."
    },

    "2026-09-12": {
        title: "12 de setembro ♡",
        message: "Escreva aqui a mensagem do dia 12."
    },

    "2026-09-19": {
        title: "19 de setembro ♡",
        message: "Escreva aqui a mensagem do dia 19."
    },

    "2026-09-26": {
        title: "26 de setembro ♡",
        message: "Escreva aqui a mensagem do dia 26."
    },


    /* OUTUBRO */

    "2026-10-03": {
        title: "03 de outubro ♡",
        message: "Escreva aqui a mensagem do dia 03."
    },

    "2026-10-10": {
        title: "10 de outubro ♡",
        message: "Escreva aqui a mensagem do dia 10."
    },

    "2026-10-17": {
        title: "17 de outubro ♡",
        message: "Escreva aqui a mensagem do dia 17."
    },

    "2026-10-24": {
        title: "24 de outubro ♡",
        message: "Escreva aqui a mensagem do dia 24."
    },

    "2026-10-31": {
        title: "31 de outubro ♡",
        message: "Escreva aqui a mensagem do dia 31."
    },


    /* NOVEMBRO */

    "2026-11-07": {
        title: "07 de novembro ♡",
        message: "Escreva aqui a mensagem do dia 07."
    },

    "2026-11-14": {
        title: "14 de novembro ♡",
        message: "Escreva aqui a mensagem do dia 14."
    },

    "2026-11-21": {
        title: "21 de novembro ♡",
        message: "Escreva aqui a mensagem do dia 21."
    },

    "2026-11-28": {
        title: "28 de novembro ♡",
        message: "Escreva aqui a mensagem do dia 28."
    },


    /* DEZEMBRO */

    "2026-12-05": {
        title: "05 de dezembro ♡",
        message: "Escreva aqui a mensagem do dia 05."
    },

    "2026-12-12": {
        title: "12 de dezembro ♡",
        message: "Escreva aqui a mensagem do dia 12."
    },

    "2026-12-19": {
        title: "19 de dezembro ♡",
        message: "Escreva aqui a mensagem do dia 19."
    },

    "2026-12-26": {
        title: "26 de dezembro ♡",
        message: "Escreva aqui a mensagem do dia 26."
    }

};


/* ========================================
   FOTOS
======================================== */

const photos = {

    "2026-01-15": "0.jpg",

    "2026-01-16": "1.jpg",

    "2026-01-17": "2.jpg",

    "2026-01-18": [
        "3.jpg",
        "3.3.jpg"
    ],

    "2026-01-19": "4.jpg",

    "2026-01-20": "5.jpg",

    "2026-01-21": "6.jpg",

    "2026-01-22": "7.jpg",

    "2026-01-23": "8.jpg",

    "2026-01-24": [
        "9.jpg",
        "9.9.jpg"
    ],

    "2026-01-25": "10.jpg"

};


/* ========================================
   VARIÁVEIS DO CALENDÁRIO
======================================== */

let currentMonth = 0;

const currentYear = 2026;

let musicPlaying = false;


/* ========================================
   ELEMENTOS
======================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const mainSite =
    document.getElementById("mainSite");

const startButton =
    document.getElementById("startButton");

const previousMonth =
    document.getElementById("previousMonth");

const nextMonth =
    document.getElementById("nextMonth");

const monthName =
    document.getElementById("monthName");

const yearNumber =
    document.getElementById("yearNumber");

const calendarDays =
    document.getElementById("calendarDays");

const messageModal =
    document.getElementById("messageModal");

const closeModal =
    document.getElementById("closeModal");

const modalDate =
    document.getElementById("modalDate");

const modalTitle =
    document.getElementById("modalTitle");

const modalContent =
    document.getElementById("modalContent");

const modalPhoto =
    document.getElementById("modalPhoto");

const modalPhotoContainer =
    document.getElementById(
        "modalPhotoContainer"
    );

const musicButton =
    document.getElementById("musicButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* ========================================
   NAVEGAÇÃO
======================================== */

const calendarTab =
    document.getElementById("calendarTab");

const routeTab =
    document.getElementById("routeTab");

const calendarPage =
    document.getElementById("calendarPage");

const routePage =
    document.getElementById("routePage");


calendarTab.addEventListener(
    "click",
    () => {

        calendarTab.classList.add("active");

        routeTab.classList.remove("active");

        calendarPage.classList.remove(
            "hidden-page"
        );

        routePage.classList.add(
            "hidden-page"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


routeTab.addEventListener(
    "click",
    () => {

        routeTab.classList.add("active");

        calendarTab.classList.remove("active");

        routePage.classList.remove(
            "hidden-page"
        );

        calendarPage.classList.add(
            "hidden-page"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ========================================
   FORMATO DE DATA
======================================== */

function formatDate(
    year,
    month,
    day
) {

    const monthString =
        String(month + 1)
            .padStart(2, "0");

    const dayString =
        String(day)
            .padStart(2, "0");

    return `${year}-${monthString}-${dayString}`;
}


/* ========================================
   SÁBADOS A PARTIR DE SETEMBRO
======================================== */

function isSaturdayMessage(
    year,
    month,
    day
) {

    const date =
        new Date(
            year,
            month,
            day
        );

    const saturday =
        date.getDay() === 6;

    const fromSeptember =
        month >= 8;

    return saturday &&
           fromSeptember;
}


/* ========================================
   GERAR CALENDÁRIO
======================================== */

function renderCalendar() {

    calendarDays.innerHTML = "";

    monthName.textContent =
        months[currentMonth];

    yearNumber.textContent =
        currentYear;


    previousMonth.disabled =
        currentMonth === 0;

    nextMonth.disabled =
        currentMonth === 11;


    const firstDay =
        new Date(
            currentYear,
            currentMonth,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement("div");

        emptyDay.classList.add(
            "day",
            "empty"
        );

        calendarDays.appendChild(
            emptyDay
        );

    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement("div");

        dayElement.classList.add(
            "day"
        );

        dayElement.textContent =
            day;


        const dateKey =
            formatDate(
                currentYear,
                currentMonth,
                day
            );


        const hasSpecialMessage =
            specialMessages[dateKey]
            !== undefined;


        const hasSaturdayMessage =
            isSaturdayMessage(
                currentYear,
                currentMonth,
                day
            );


        const hasPhoto =
            photos[dateKey]
            !== undefined;


        if (
            hasSpecialMessage ||
            hasSaturdayMessage
        ) {

            dayElement.classList.add(
                "special"
            );

        }


        if (
            hasSaturdayMessage
        ) {

            dayElement.classList.add(
                "saturday-message"
            );

        }


        if (hasPhoto) {

            dayElement.classList.add(
                "photo-day"
            );

        }


        if (
            hasSpecialMessage ||
            hasSaturdayMessage ||
            hasPhoto
        ) {

            dayElement.addEventListener(
                "click",
                () => openMessage(
                    dateKey
                )
            );

        }


        calendarDays.appendChild(
            dayElement
        );

    }

}


/* ========================================
   ABRIR MENSAGEM
======================================== */

function openMessage(dateKey) {

    const message =
        specialMessages[dateKey];

    const saturdayMessage =
        saturdayMessages[dateKey];

    const photo =
        photos[dateKey];


    const parts =
        dateKey.split("-");


    const year =
        Number(parts[0]);

    const month =
        Number(parts[1]) - 1;

    const day =
        Number(parts[2]);


    modalDate.textContent =
        `${day} de ${months[month]} de ${year}`;


    /* ====================================
       MENSAGEM
    ==================================== */

    if (message) {

        modalTitle.textContent =
            message.title;

        modalContent.textContent =
            message.message;

    }

    else if (saturdayMessage) {

        modalTitle.textContent =
            saturdayMessage.title;

        modalContent.textContent =
            saturdayMessage.message;

    }

    else {

        modalTitle.textContent =
            "Uma mensagem para você ♡";

        modalContent.textContent =
            "Aqui vai uma frase especial para este dia...";

    }


    /* ====================================
       FOTOS
    ==================================== */

    modalPhotoContainer.innerHTML = "";


    if (photo) {

        modalPhotoContainer.classList.remove(
            "hidden"
        );


        const photoList =
            Array.isArray(photo)
                ? photo
                : [photo];


        photoList.forEach(
            (photoPath) => {

                const image =
                    document.createElement("img");

                image.src =
                    photoPath;

                image.alt =
                    "Foto especial";

                image.classList.add(
                    "modal-gallery-photo"
                );

                modalPhotoContainer.appendChild(
                    image
                );

            }
        );

    }

    else {

        modalPhotoContainer.classList.add(
            "hidden"
        );

    }


    /* ====================================
       MOSTRAR MODAL
    ==================================== */

    messageModal.classList.remove(
        "hidden"
    );

}


/* ========================================
   FECHAR MODAL
======================================== */

function closeMessage() {

    messageModal.classList.add(
        "hidden"
    );

}


closeModal.addEventListener(
    "click",
    closeMessage
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeMessage
    );


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMessage();

        }

    }
);


/* ========================================
   MUDAR MÊS
======================================== */

previousMonth.addEventListener(
    "click",
    () => {

        if (
            currentMonth === 0
        ) {

            return;

        }

        currentMonth--;

        renderCalendar();

        loadNotesForCurrentMonth();

    }
);


nextMonth.addEventListener(
    "click",
    () => {

        if (
            currentMonth === 11
        ) {

            return;

        }

        currentMonth++;

        renderCalendar();

        loadNotesForCurrentMonth();

    }
);


/* ========================================
   TELA INICIAL
======================================== */

startButton.addEventListener(
    "click",
    () => {

        welcomeScreen.classList.add(
            "hide"
        );

        mainSite.classList.remove(
            "hidden"
        );


        /* ================================
           MÚSICA
        ================================= */

        if (
            !backgroundMusic.currentSrc
        ) {

            backgroundMusic.src =
                "musica.mp3";

            backgroundMusic.load();

        }


        backgroundMusic
            .play()
            .then(() => {

                musicPlaying =
                    true;

                musicButton.classList.add(
                    "playing"
                );

            })
            .catch(() => {

                console.log(
                    "A música não pôde iniciar."
                );

            });

    }
);


/* ========================================
   BOTÃO DE MÚSICA
======================================== */

musicButton.addEventListener(
    "click",
    () => {

        if (
            !backgroundMusic.currentSrc
        ) {

            backgroundMusic.src =
                "musica.mp3";

            backgroundMusic.load();

        }


        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying =
                false;

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent =
                "♫";

        }

        else {

            backgroundMusic
                .play()
                .then(() => {

                    musicPlaying =
                        true;

                    musicButton.classList.add(
                        "playing"
                    );

                    musicButton.textContent =
                        "♫";

                })
                .catch((error) => {

                    console.error(
                        "Erro ao tocar a música:",
                        error
                    );

                });

        }

    }
);


/* ========================================
   CANTINHO DE ANOTAÇÕES
   UMA ANOTAÇÃO DIFERENTE POR MÊS
======================================== */

const notesInput =
    document.getElementById(
        "notesInput"
    );

const saveNotes =
    document.getElementById(
        "saveNotes"
    );

const saveMessage =
    document.getElementById(
        "saveMessage"
    );


/* ========================================
   CHAVE DAS ANOTAÇÕES
======================================== */

function getNotesKey() {

    return `calendarNotes-${currentYear}-${String(
        currentMonth + 1
    ).padStart(2, "0")}`;

}


/* ========================================
   CARREGAR NOTAS DO MÊS
======================================== */

function loadNotesForCurrentMonth() {

    const savedNotes =
        localStorage.getItem(
            getNotesKey()
        );


    notesInput.value =
        savedNotes || "";


    saveMessage.textContent =
        "suas anotações ficam salvas neste navegador";

}


/* ========================================
   SALVAR NOTAS DO MÊS
======================================== */

saveNotes.addEventListener(
    "click",
    () => {

        localStorage.setItem(
            getNotesKey(),
            notesInput.value
        );


        saveMessage.textContent =
            "✓ anotação salva!";


        setTimeout(
            () => {

                saveMessage.textContent =
                    "suas anotações ficam salvas neste navegador";

            },
            2500
        );

    }
);


/* ========================================
   INICIAR
======================================== */

renderCalendar();

loadNotesForCurrentMonth();
