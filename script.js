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

const weekdays = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
];


/* ========================================
   MENSAGENS
========================================

   Aqui você vai colocar as mensagens.

   O formato é:

   "AAAA-MM-DD": {
       title: "Título",
       message: "Mensagem"
   }

======================================== */

const specialMessages = {

    "2026-01-10": {
        title: "10 de janeiro ♡",
        message: "Sua mensagem aqui..."
    },

    "2026-01-11": {
        title: "11 de janeiro ♡",
        message: "Sua mensagem aqui..."
    },

    "2026-01-12": {
        title: "12 de janeiro ♡",
        message: "Sua mensagem aqui..."
    },

    "2026-01-13": {
        title: "13 de janeiro ♡",
        message: "Sua mensagem aqui..."
    },

    "2026-01-14": {
        title: "14 de janeiro ♡",
        message: "Sua mensagem aqui..."
    },

    "2026-01-15": {
        title: "15 de janeiro ♡",
        message: "Sua mensagem aqui..."
    },

    "2026-05-06": {
        title: "06 de maio ♡",
        message: "Sua mensagem especial aqui..."
    },

    "2026-07-24": {
        title: "24 de julho ♡",
        message: "Sua mensagem especial aqui..."
    }

};


/* ========================================
   FOTOS
========================================

   Você pode associar fotos a determinadas
   datas.

   Exemplo:

   "2026-01-10": {
       photo: "fotos/foto01.jpg"
   }

======================================== */

const photos = {

    // "2026-01-10": "fotos/foto01.jpg",
    // "2026-01-11": "fotos/foto02.jpg",
    // "2026-05-06": "fotos/foto03.jpg"

};


/* ========================================
   VARIÁVEIS
======================================== */

let currentMonth = 0;
let currentYear = 2026;

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
    document.getElementById("modalPhotoContainer");

const musicButton =
    document.getElementById("musicButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* ========================================
   FORMATO DE DATA
======================================== */

function formatDate(year, month, day) {

    const monthString =
        String(month + 1).padStart(2, "0");

    const dayString =
        String(day).padStart(2, "0");

    return `${year}-${monthString}-${dayString}`;

}


/* ========================================
   VERIFICA SE É SÁBADO A PARTIR DE SETEMBRO
======================================== */

function isSaturdayMessage(year, month, day) {

    const date =
        new Date(year, month, day);

    const saturday =
        date.getDay() === 6;

    const fromSeptember =
        month >= 8;

    return saturday && fromSeptember;

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
        Primeiro dia do mês.

        getDay():

        0 = domingo
        1 = segunda
        ...
        6 = sábado
    */

    const firstDay =
        new Date(
            currentYear,
            currentMonth,
            1
        ).getDay();


    /*
        Quantos dias o mês possui.
    */

    const daysInMonth =
        new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();


    /*
        Espaços antes do primeiro dia.
    */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement("div");

        emptyDay.classList.add("day", "empty");

        calendarDays.appendChild(emptyDay);

    }


    /*
        Criar cada dia.
    */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement("div");

        dayElement.classList.add("day");

        dayElement.textContent =
            day;


        const dateKey =
            formatDate(
                currentYear,
                currentMonth,
                day
            );


        /*
            Existe uma mensagem especial?
        */

        const hasSpecialMessage =
            specialMessages[dateKey] !== undefined;


        /*
            É sábado a partir de setembro?
        */

        const hasSaturdayMessage =
            isSaturdayMessage(
                currentYear,
                currentMonth,
                day
            );


        /*
            Existe foto?
        */

        const hasPhoto =
            photos[dateKey] !== undefined;


        /*
            Adicionar estilos.
        */

        if (
            hasSpecialMessage ||
            hasSaturdayMessage
        ) {

            dayElement.classList.add("special");

        }


        if (hasSaturdayMessage) {

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
            Se tiver algum conteúdo,
            pode clicar.
        */

        if (
            hasSpecialMessage ||
            hasSaturdayMessage ||
            hasPhoto
        ) {

            dayElement.addEventListener(
                "click",
                () => openMessage(dateKey)
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


    const photo =
        photos[dateKey];


    /*
        Criar data real.
    */

    const parts =
        dateKey.split("-");

    const year =
        Number(parts[0]);

    const month =
        Number(parts[1]) - 1;

    const day =
        Number(parts[2]);


    const date =
        new Date(
            year,
            month,
            day
        );


    /*
        Mostrar data.
    */

    modalDate.textContent =
        `${day} de ${months[month]} de ${year}`;


    /*
        Se existir mensagem especial.
    */

    if (message) {

        modalTitle.textContent =
            message.title;

        modalContent.textContent =
            message.message;

    }

    /*
        Se for sábado sem mensagem
        cadastrada ainda.
    */

    else {

        modalTitle.textContent =
            "Uma mensagem para você ♡";

        modalContent.textContent =
            "Aqui vai uma frase especial para este sábado...";
    }


    /*
        Foto.
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
        Mostrar modal.
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


/*
    Fechar clicando fora da carta.
*/

document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeMessage
    );


/*
    Fechar com ESC.
*/

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

        currentMonth--;

        if (currentMonth < 0) {

            currentMonth = 11;

            currentYear--;

        }

        renderCalendar();

    }
);


nextMonth.addEventListener(
    "click",
    () => {

        currentMonth++;

        if (currentMonth > 11) {

            currentMonth = 0;

            currentYear++;

        }

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
            Tentar iniciar a música.

            Isso só funcionará quando você
            colocar um arquivo permitido
            no elemento <audio>.
        */

        if (backgroundMusic.src) {

            backgroundMusic
                .play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.classList.add(
                        "playing"
                    );

                })
                .catch(() => {

                    console.log(
                        "A música não pôde iniciar automaticamente."
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

        if (!backgroundMusic.src) {

            alert(
                "Primeiro coloque um arquivo de áudio autorizado para uso no site."
            );

            return;

        }


        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent = "♫";

        }

        else {

            backgroundMusic.play();

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

            musicButton.textContent = "♫";

        }

    }
);


/* ========================================
   INICIAR CALENDÁRIO
======================================== */

renderCalendar();
