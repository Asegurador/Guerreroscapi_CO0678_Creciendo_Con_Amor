// Variable global para almacenar el tipo de solicitud (oración, consejo o redes sociales)
let currentRequest = "";

// Función para mostrar u ocultar el chatbot
function toggleChat() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.classList.toggle("chat-hidden");
    chatContainer.classList.toggle("chat-visible");
}

// Función para enviar mensajes
function sendMessage() {
    let userInput = document.getElementById("user-input");
    let chatBody = document.getElementById("chat-body");
    let userText = userInput.value.trim();

    if (userText === "") return;

    // Crear el mensaje del usuario
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.innerText = userText;
    chatBody.appendChild(userMessage);

    // Simular respuesta del bot después de 1 segundo
    setTimeout(() => {
        let botMessage = document.createElement("div"); // Cambiado a div para innerHTML
        botMessage.classList.add("bot-message");
        botMessage.innerHTML = getBotResponse(userText); // Usar innerHTML
        chatBody.appendChild(botMessage);

        // Desplazar hacia abajo
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);

    // Limpiar el input
    userInput.value = "";
}

//funcion para que al presionar enter se envie el mensaje.
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Función de respuestas automáticas
function getBotResponse(userText) {
    let responses = {
        "que dia es hoy": `Hoy es ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`,
        "que horas son": `Son las ${new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true })}.`,
        "fecha": `Hoy es ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`,
        "dia": `Hoy es ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`,
        "hora": `Son las ${new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true })}.`,
        "para quien trabajas": "Trabajo para el sitio web oficial de Creciendo, es una Web interactiva e informatica del trabajo que se realiza por la niñez y madres lactantes. ‍‍",
        "hola": "Hola ¿Como Estas?",
        "sammy": "Dime",
        "como te llamas": "Soy Sammy AI.",
        "tienes nombre": "Si, me llamo Sammy AI, en que te puedo ayudar",
        "quien te creo": "Mi creador es Joel, un Ingeniero de Sistemas él me créo para hablar contigo y ayudarte en lo que necesites",
        "quien te hizo": "Mi creador es Joel, un Ingeniero de Sistemas él me hizo para hablar contigo y ayudarte en lo que necesites",
        "quien eres": "Soy un modelo AI basico para responder peticiones preescritas sencillas",
        "que haces": "Estoy aquí para ayudarte con información, tareas, y para tener conversaciones interesantes.",
        "con quien me puedo comunicar": "Puedes comunicarte conmigo, ¡estoy aquí para asistirte!",
        "necesito un consejo": "¿Qué tipo de consejo necesitas?<br>1. Amor<br>2. Financiero<br>3. Apoyo...",
        "consejo": "¿Qué tipo de consejo necesitas?<br>1. Amor<br>2. Financiero<br>3. Apoyo...",
        "dame un consejo": "¿Qué tipo de consejo necesitas?<br>1. Amor<br>2. Financiero<br>3. Apoyo...",
        "quiero un consejo": "¿Qué tipo de consejo necesitas?<br>1. Amor<br>2. Financiero<br>3. Apoyo...",
        "aconsejame": "¿Qué tipo de consejo necesitas?<br>1. Amor<br>2. Financiero<br>3. Apoyo...",
        "aconsejame por favor": "¿Qué tipo de consejo necesitas?<br>1. Amor<br>2. Financiero<br>3. Apoyo...",
        "necesito una oracion": "¿Qué tipo de oración necesitas?<br>1. Salud<br>2. Finanzas<br>3. Amor<br>4. Perdón<br>5. Arrepentimiento<br>6. Justicia...",
        "oracion": "¿Qué tipo de oración necesitas?<br>1. Salud<br>2. Finanzas<br>3. Amor<br>4. Perdón<br>5. Arrepentimiento<br>6. Justicia...",
        "orar por mi": "¿Qué tipo de oración necesitas?<br>1. Salud<br>2. Finanzas<br>3. Amor<br>4. Perdón<br>5. Arrepentimiento<br>6. Justicia...",
        "ayudame a orar": "Claro que si <br>¿Qué tipo de oración necesitas?<br>1. Salud<br>2. Finanzas<br>3. Amor<br>4. Perdón<br>5. Arrepentimiento<br>6. Justicia...",
        "quien ora por mi": "¿Qué tipo de oración necesitas?<br>1. Salud<br>2. Finanzas<br>3. Amor<br>4. Perdón<br>5. Arrepentimiento<br>6. Justicia...",
        "la frase del dia": "La única manera de hacer un gran trabajo es amar lo que haces.” <br>Steve Jobs",
        "bien": "Me alegra que estes bien, ¿En que te puedo ayudar ?",
        "bien gracias a dios": "Me alegra que estes bien, ¿En que te puedo ayudar?",
        "excelente": "Me alegra que estes excelente, ¿En que te puedo ayudar?",
        "muy bien": "Me alegra que estes bien, ¿En que te puedo ayudar?",
        "redes": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "donde puedo ver mas contenido": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "hay redes sociales": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "tienes redes sociales": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "redes sociales": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "que redes sociales usan": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "donde podemos ver mas contenido": "¿Qué Red Social necesitas?<br>1. Facebook<br>2. Instagram<br>3. Tik Tok<br>4. WhatsApp<br>5. Nuestro Socio<br>",
        "gracias": "jejeje de nada, estoy para ayudarte ",
        "muchas gracias": "jejeje de nada, estoy para ayudarte ",
        "uy gracias": "jejeje de nada, estoy para ayudarte ",
        "bye": "Hasta luego, espero hablar contigo pronto, estare aqui para lo que necesites, Dios te cuide. ",
        "chau": "Hasta luego, espero hablar pronto contigo, estare aqui para lo que necesites, Dios te cuide. ",
        "nos vemos": "Hasta luego, espero hablar pronto contigo, estare aqui para lo que necesites, Dios te cuide. ",
        "hasta luego": "Hasta luego, espero hablar pronto contigo, estare aqui para lo que necesites, Dios te cuide. ",
        "chao": "Hasta luego, espero hablar pronto contigo, estare aqui para lo que necesites, Dios te cuide. ",
        "adios": "Hasta luego, espero hablar pronto contigo, estare aqui para lo que necesites, Dios te cuide. ",
        "trabajo": "Supervivencia - Caminadores - Exploradores",
        "programa": "Supervivencia - Caminadores - Exploradores",
        "informacion": "Hasta luego, espero hablar pronto contigo, estare aqui para lo que necesites, Dios te cuide. "
    };

    userText = userText.toLowerCase().trim();

    if (responses[userText]) {
        // Almacenar el tipo de solicitud
        if (userText.includes("oracion")) {
            currentRequest = "oracion";
        } else if (userText.includes("consejo")) {
            currentRequest = "consejo";
        } else if (userText.includes("redes")) {
            currentRequest = "red";
        }
        return responses[userText];
    }

    // Verificar el tipo de solicitud y el ítem seleccionado
    if (currentRequest === "oracion") {
        switch (userText) {
            case "1":
                currentRequest = "";
                return "Padre celestial, te pedimos por la salud de este hijo o hija tuya. Te rogamos que la fortalezcas en cuerpo, alma y espíritu. Que tu mano sanadora la toque y la restaure por completo. Si está pasando por alguna enfermedad o dolencia, te pedimos que la sanes y la liberes de todo malestar. Que pueda sentir tu paz y tu amor en este tiempo de dificultad Amen. <br>Él sana a los quebrantados de corazón, Y venda sus heridas. <br>Salmo 147:3";
            case "2":
                currentRequest = "";
                return "Señor, te presentamos las finanzas de tu hijo o hija. Tú conoces sus necesidades y sus preocupaciones económicas. Te pedimos que la proveas abundantemente y que la ayudes a administrar sus recursos con sabiduría. Que pueda confiar en tu provisión y que no le falte nada de lo que necesite. Abre puertas de oportunidad y bendice su trabajo Amen. <br>Mi Dios, pues, suplirá todo lo que os falte conforme a sus riquezas en gloria en Cristo Jesús. <br>Filipenses 4:19";
            case "3":
                currentRequest = "";
                return "Dios padre, te pedimos por el amor en la vida de tu amada creación. Que pueda sentir tu amor incondicional y que aprenda a amar a los demás como tú nos amas. Si está buscando el amor, guíala hacia la persona correcta y ayúdala a construir relaciones saludables y duraderas. Que el amor sea una fuente de alegría y fortaleza en su vida Amen. ❤️ <br>El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca su propio interés, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.<br>1 Corintios 13:4-7";
            case "4":
                currentRequest = "";
                return "Señor, te pedimos por la capacidad de perdonar en el corazón de este hijo o hija tuya. Ayúdal@ a perdonar a quienes la han lastimado y a liberarse del rencor y la amargura. Que pueda experimentar la sanidad que viene del perdón y que pueda encontrar la paz en su corazón. Enséñale a perdonar como tú perdonas Amen. <br>Perdonad, y seréis perdonados. <br>Lucas 6:37 ";
            case "5":
                currentRequest = "";
                return "Dios, te pedimos por un espíritu de arrepentimiento en el corazón de este hijo o hija tuya. Si ha cometido errores o ha pecado, te pedimos que la ayudes a reconocer sus faltas y a arrepentirse sinceramente. Que pueda sentir tu perdón y tu gracia y que pueda cambiar su camino para seguirte a ti. Guíala hacia una vida de rectitud y santidad Amen. <br>Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad. <br>1 Juan 1:9";
            case "6":
                currentRequest = "";
                return "Señor, te pedimos por la justicia en la vida de [nombre de la persona]. Que pueda ser tratada con justicia y equidad en todas sus relaciones y situaciones. Si ha sido víctima de injusticia, te pedimos que la defiendas y la protejas. Que pueda ser una voz para los que no tienen voz y que pueda luchar por la justicia en el mundo Amen. ⚖️ <br>Justicia y juicio son el cimiento de tu trono; Misericordia y verdad van delante de tu rostro. <br>Salmo 89:14";
            default:
                return "Por favor, selecciona una opción válida para la oración.";
        }
    } else if (currentRequest === "consejo") {
        switch (userText) {
            case "1":
                currentRequest = "";
                return "Ámate a ti mismo: Antes de amar a otros, es fundamental que te ames y te aceptes a ti mismo tal como eres. Reconoce tus fortalezas y debilidades, y trabaja en mejorar aquellas áreas que desees cambiar. ❤️";
            case "2":
                currentRequest = "";
                return "Establece un presupuesto: El primer paso para tener unas finanzas saludables es saber cuánto dinero tienes y en qué lo gastas. Crea un presupuesto detallado que incluya tus ingresos y gastos fijos y variables. <br>Evita las deudas: Las deudas pueden ser una carga pesada y limitar tu capacidad de ahorrar e invertir. Evita endeudarte innecesariamente y, si tienes deudas, elabora un plan para pagarlas lo antes posible. ";
            case "3":
                currentRequest = "";
                return "Busca a personas positivas: Rodéate de personas que te apoyen, te animen y te inspiren a ser la mejor versión de ti mismo. Evita a las personas negativas que te critican o te desmotivan.<br>Comunica tus necesidades: No tengas miedo de pedir ayuda cuando la necesites. Todos pasamos por momentos difíciles y es importante contar con el apoyo de nuestros seres queridos. ";
            default:
                return "Por favor, selecciona una opción válida para el consejo.";
        }
    } else if (currentRequest === "red") {
        switch (userText) {
            case "1":
                currentRequest = "";
                return " Ingresa a nuestro Facebook aqui  <a href='https://www.facebook.com/iglesialafortalezacruzada?locale=es_LA' target='_blank'>Redes Sociales</a>.";
            case "2":
                currentRequest = "";
                return " Ingresa a nuestro Instagram aqui  <a href='https://www.instagram.com/iglesialafortalezacucuta?igsh=MTh0bTdoajRpZnczYQ==' target='_blank'>Seguridad en Internet</a>.";
            case "3":
                currentRequest = "";
                return " Ingresa a nuestro Tik Tok aqui  <a href='https://www.tiktok.com/@icclafortaleza?_t=ZS-8tGGD6PehMt&_r=1' target='_blank'>Xataka</a>.";
            case "4":
                currentRequest = "";
                return " Ingresa a nuestro WhatsApp aqui  <a href='https://wa.me/573103495462?text=¡Hola,%20tengo%20una%20consulta!' target='_blank'>Mejorar Internet</a>.";
            case "5":
                currentRequest = "";
                return " Ingresa a la pagina oficial de nuestro Socio aqui  <a href='https://www.compassioncolombia.org/' target='_blank'>Google Play</a>.";
            default:
                return "Por favor, selecciona una opción válida para el tema de redes.";
        }
    }

    return "Lo siento, estoy en desarrollo y aprendizaje🙁.";
}