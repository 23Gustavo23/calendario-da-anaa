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
   FOTOS
======================================== */

const photos = {

    "2026-01-15": "fotos/0.jpg",

    "2026-01-16": "fotos/1.jpg",

    "2026-01-17": "fotos/2.jpg",

    "2026-01-18": [
        "fotos/3.jpg",
        "fotos/3.1.jpg"
    ],

    "2026-01-19": "fotos/4.jpg",

    "2026-01-20": "fotos/5.jpg",

    "2026-01-21": "fotos/6.jpg",

    "2026-01-22": "fotos/7.jpg",

    "2026-01-23": "fotos/8.jpg",

    "2026-01-24": [
        "fotos/9.jpg",
        "fotos/9.1.jpg"
    ],

    "2026-01-25": "fotos/10.jpg"

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


    /*
        DESABILITAR NAVEGAÇÃO
        FORA DE 2026
    */

    previousMonth.disabled =
        currentMonth === 0;

    nextMonth.disabled =
        currentMonth === 11;


    /*
        PRIMEIRO DIA
    */

    const firstDay =
        new Date(
            currentYear,
            currentMonth,
            1
        ).getDay();


    /*
        QUANTOS DIAS
    */

    const daysInMonth =
        new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();


    /*
        ESPAÇOS ANTES DO PRIMEIRO DIA
    */

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


    /*
        CRIAR OS DIAS
    */

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


        /*
            TEM MENSAGEM?
        */

        const hasSpecialMessage =
            specialMessages[dateKey]
            !== undefined;


        /*
            É SÁBADO?
        */

        const hasSaturdayMessage =
            isSaturdayMessage(
                currentYear,
                currentMonth,
                day
            );


        /*
            TEM FOTO?
        */

        const hasPhoto =
            photos[dateKey]
            !== undefined;


        /*
            DESTACAR DATA
        */

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


        /*
            PERMITIR CLIQUE
        */

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

    const message = specialMessages[dateKey];
    const photo = photos[dateKey];

    const parts = dateKey.split("-");

    const year = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const day = Number(parts[2]);


    /*
        DATA
    */

    modalDate.textContent =
        `${day} de ${months[month]} de ${year}`;


    /*
        MENSAGEM
    */

    if (message) {

        modalTitle.textContent =
            message.title;

        modalContent.textContent =
            message.message;

    }

    else {

        modalTitle.textContent =
            "Uma mensagem para você";

        modalContent.textContent =
            "Aqui vai uma frase especial para este dia...";

    }


    /*
        FOTOS
    */

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

                image.src = photoPath;

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


    /*
        MOSTRAR MODAL
    */

    messageModal.classList.remove(
        "hidden"
    );

}
    else {

        modalTitle.textContent =
            "Uma mensagem para você";

        modalContent.textContent =
            "Aqui vai uma frase especial para este sábado...";

    }


    /*
        FOTO
    */

    if (photo) {

        modalPhoto.src =
            photo;

        modalPhotoContainer.classList.remove(
            "hidden"
        );

    }

    else {

        modalPhotoContainer.classList.add(
            "hidden"
        );

        modalPhoto.src = "";

    }


    /*
        MOSTRAR MODAL
    */

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

        if (currentMonth === 0) {
            return;
        }

        currentMonth--;

        renderCalendar();

    }
);


nextMonth.addEventListener(
    "click",
    () => {

        if (currentMonth === 11) {
            return;
        }

        currentMonth++;

        renderCalendar();

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


        /*
            TENTAR INICIAR MÚSICA
        */

        if (
            backgroundMusic.src
        ) {

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

    }
);


/* ========================================
   BOTÃO DE MÚSICA
======================================== */

musicButton.addEventListener(
    "click",
    () => {

        if (
            !backgroundMusic.src
        ) {

            alert(
                "Coloque o arquivo musica.mp3 na pasta principal do site."
            );

            return;

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

                });

        }

    }
);


/* ========================================
   CANTINHO DE ANOTAÇÕES
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


/*
    CARREGAR ANOTAÇÃO SALVA
*/

const savedNotes =
    localStorage.getItem(
        "calendarNotes"
    );

if (savedNotes) {

    notesInput.value =
        savedNotes;

}


/*
    SALVAR
*/

saveNotes.addEventListener(
    "click",
    () => {

        localStorage.setItem(
            "calendarNotes",
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
