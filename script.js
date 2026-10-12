
fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("JSON-faili laadimine ebaõnnestus");
        }

        return response.json();
    })
    .then(data => {
        document.getElementById("nimi").textContent =
            data.nimi;

        document.getElementById("perekonnanimi").textContent =
            data.perekonnanimi;

        document.getElementById("vanus").textContent =
            data.vanus;

        document.getElementById("synniaeg").textContent =
            data.synniaeg;

        document.getElementById("aadress").textContent =
            data.aadress;

        document.getElementById("telefon").textContent =
            data.telefon;

        const email = document.getElementById("email");
        email.textContent = data.email;
        email.href = "mailto:" + data.email;

        document.getElementById("oskused").textContent =
            data.oskused.join(", ");
    })
    .catch(error => {
        console.error("Viga andmete laadimisel:", error);
    });
