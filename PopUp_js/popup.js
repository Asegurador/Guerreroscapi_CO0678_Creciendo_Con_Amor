document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popUp");
    const closePopup = document.querySelector(".close-popup");
    const popupTitleElement = document.getElementById("popup-title");
    const popupBody = document.getElementById("popup-body");
    const popupNombreElement = document.createElement("p");
    popupNombreElement.id = "popup-nombre";
    const popupIntroElement = document.createElement("p");
    popupIntroElement.id = "popup-intro";
    const popupVideoContainer = document.createElement("div");
    popupVideoContainer.id = "popup-video-container";
    popupVideoContainer.classList.add("responsive-iframe");
    const consentimientoContainer = document.createElement("div");
    consentimientoContainer.classList.add("consentimiento-container");
    const popupConsentimientoLink = document.createElement("a");
    popupConsentimientoLink.id = "popup-consentimiento-link";
    popupConsentimientoLink.href = "#";
    popupConsentimientoLink.target = "_blank";
    popupConsentimientoLink.textContent = "Consentimiento Informado";
    consentimientoContainer.appendChild(popupConsentimientoLink);

    function showPopup(title, body, type, nombre, intro, videoUrl, consentimientoUrl) {
        popupTitleElement.textContent = title;

        if (type === "testimonio") {
            popupNombreElement.textContent = nombre;
            popupIntroElement.textContent = intro;
            popupVideoContainer.innerHTML = `<iframe width="1000%" height="auto" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 15px;"></iframe>`;
            popupConsentimientoLink.href = consentimientoUrl;

            // Limpiar el popup-body y agregar los elementos del testimonio
            popupBody.innerHTML = '';
            popupBody.appendChild(popupNombreElement);
            popupBody.appendChild(popupIntroElement);
            popupBody.appendChild(popupVideoContainer);
            popupBody.appendChild(consentimientoContainer);
        } else { // type === "default" o cualquier otro valor
            popupBody.innerHTML = body;
            // Limpiar los contenedores de testimonio para popups default
            popupNombreElement.textContent = '';
            popupIntroElement.textContent = '';
            popupVideoContainer.innerHTML = '';
            popupConsentimientoLink.href = '#';
            popupBody.style.display = 'block'; // Asegurar que el body se muestre para popups default
        }

        popup.style.display = "flex";
        initializeTabs();
    }

    function hidePopup() {
        popup.style.display = "none";
        // Limpiar el contenido del video al cerrar
        popupVideoContainer.innerHTML = '';
    }

    function initializeTabs() {
        const tabButtons = document.querySelectorAll(".tab-button");
        const tabContents = document.querySelectorAll(".tab-content");

        tabButtons.forEach(button => {
            button.addEventListener("click", function () {
                const tab = this.getAttribute("data-tab");
                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabContents.forEach(content => content.classList.remove("active"));
                this.classList.add("active");
                document.getElementById(tab).classList.add("active");
            });
        });

        if (tabButtons.length > 0 && tabContents.length > 0) {
            tabButtons[0].classList.add("active");
            tabContents[0].classList.add("active");
        }
    }

    document.querySelectorAll("[data-popup-title]").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const title = this.getAttribute("data-popup-title");
            const body = this.getAttribute("data-popup-body");
            const type = this.dataset.popupType || "default"; // Obtener el tipo, default si no está definido
            const nombre = this.dataset.popupNombre;
            const intro = this.dataset.popupIntro;
            const videoUrl = this.dataset.popupVideo;
            const consentimientoUrl = this.dataset.popupConsentimiento;

            showPopup(title, body, type, nombre, intro, videoUrl, consentimientoUrl);
        });
    });

    closePopup.addEventListener("click", hidePopup);

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            hidePopup();
        }
    });

    popup.style.display = "none";
    initializeTabs();
});document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popUp");
    const closePopup = document.querySelector(".close-popup");
    const popupTitleElement = document.getElementById("popup-title");
    const popupBody = document.getElementById("popup-body");
    const popupNombreElement = document.createElement("p");
    popupNombreElement.id = "popup-nombre";
    popupNombreElement.style.fontWeight = "bold"; // Darle un estilo para que destaque
    popupNombreElement.style.marginBottom = "5px";
    const popupIntroElement = document.createElement("p");
    popupIntroElement.id = "popup-intro";
    popupIntroElement.style.marginBottom = "10px";
    const popupVideoContainer = document.createElement("div");
    popupVideoContainer.id = "popup-video-container";
    popupVideoContainer.classList.add("responsive-iframe");
    popupVideoContainer.style.marginBottom = "15px";
    popupVideoContainer.style.borderRadius = "15px";
    popupVideoContainer.style.overflow = "hidden"; // Asegurar que el border-radius funcione bien
    const consentimientoContainer = document.createElement("div");
    consentimientoContainer.classList.add("consentimiento-container");
    consentimientoContainer.style.textAlign = "center";
    consentimientoContainer.style.marginTop = "10px";
    const popupConsentimientoLink = document.createElement("a");
    popupConsentimientoLink.id = "popup-consentimiento-link";
    popupConsentimientoLink.href = "#";
    popupConsentimientoLink.target = "_blank";
    popupConsentimientoLink.textContent = "Consentimiento Informado";
    consentimientoContainer.appendChild(popupConsentimientoLink);

    function showPopup(title, body, type, nombre, intro, videoUrl, consentimientoUrl) {
        popupTitleElement.textContent = title;
        popupBody.innerHTML = ''; // Limpiar el contenido anterior

        if (type === "testimonio") {
            popupBody.appendChild(popupNombreElement);
            popupNombreElement.textContent = nombre;
            popupBody.appendChild(popupIntroElement);
            popupIntroElement.textContent = intro;

            if (videoUrl) {
                const iframe = document.createElement("iframe");
                iframe.width = "100%";
                iframe.height = "auto";
                iframe.src = videoUrl;
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                iframe.style.borderRadius = "15px";
                popupVideoContainer.innerHTML = ''; // Limpiar cualquier iframe anterior
                popupVideoContainer.appendChild(iframe);
                popupBody.appendChild(popupVideoContainer);
            } else {
                popupVideoContainer.innerHTML = ''; // Asegurarse de que no haya video si no se proporciona la URL
            }

            popupConsentimientoLink.href = consentimientoUrl || "#"; // Usar # si no hay URL de consentimiento
            popupBody.appendChild(consentimientoContainer);
        } else { // type === "default" o cualquier otro valor
            popupBody.innerHTML = body;
        }

        popup.style.display = "flex";
        initializeTabs();
    }

    function hidePopup() {
        popup.style.display = "none";
        // Limpiar el contenido del video al cerrar (opcional, dependiendo de si quieres que siga reproduciéndose)
        const videoContainer = popup.querySelector("#popup-video-container");
        if (videoContainer) {
            videoContainer.innerHTML = '';
        }
    }

    function initializeTabs() {
        const tabButtons = document.querySelectorAll(".tab-button");
        const tabContents = document.querySelectorAll(".tab-content");

        tabButtons.forEach(button => {
            button.addEventListener("click", function () {
                const tab = this.getAttribute("data-tab");
                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabContents.forEach(content => content.classList.remove("active"));
                this.classList.add("active");
                document.getElementById(tab).classList.add("active");
            });
        });

        if (tabButtons.length > 0 && tabContents.length > 0) {
            tabButtons[0].classList.add("active");
            tabContents[0].classList.add("active");
        }
    }

    document.querySelectorAll("[data-popup-title]").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const title = this.getAttribute("data-popup-title");
            const body = this.getAttribute("data-popup-body");
            const type = this.dataset.popupType || "default"; // Obtener el tipo, default si no está definido
            const nombre = this.dataset.popupNombre;
            const intro = this.dataset.popupIntro;
            const videoUrl = this.dataset.popupVideo;
            const consentimientoUrl = this.dataset.popupConsentimiento;

            showPopup(title, body, type, nombre, intro, videoUrl, consentimientoUrl);
        });
    });

    closePopup.addEventListener("click", hidePopup);

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            hidePopup();
        }
    });

    popup.style.display = "none";
    initializeTabs();
});