// Datos compartidos que NO cambian por idioma
const sharedSkills = [
    "Python", "Postgres", "MySQL", "PowerBI", "Excel", "Machine Learning", "Deep Learning",
    "NLP", "Network Science", "Data Science", "Data Analysis", "Data Visualization",
    "Docker", "Git", "GitHub", "HTML", "CSS", "JavaScript"
];

const sharedCertificates = {
    allCertificatesLink: "https://upy-my.sharepoint.com/:f:/g/personal/2109062_upy_edu_mx/Esdm5-Qc4uBAnODrpnhj39oBD_Kv3f04szWDIyQjFRHv-w?e=jMDzG1",
    highlighted: [
        {
            name: "AWS Academy Machine Learning Foundations",
            link: "https://upy-my.sharepoint.com/:b:/g/personal/2109062_upy_edu_mx/EbbeFBbSnFtKpqemQ0RkQbABB9-x0pyyUtpAZxOqpvsnPg?e=pahl5a"
        },
        {
            name: "AWS Cloud Foundations",
            link: "https://upy-my.sharepoint.com/:b:/g/personal/2109062_upy_edu_mx/EVZgIGg5oMtAqWWOSjVIXo8B7rHSujelCozAiC-j90V8pg?e=7WKqg4"
        },
        {
            name: "Data Analyst Career Path",
            link: "https://upy-my.sharepoint.com/:b:/g/personal/2109062_upy_edu_mx/EVfq-u9XV_hCiWFno3IgzQEBeFZUhvszJY4IVvj2Jmy7zA?e=HK955A"
        }
    ]
};

// Contenido traducible
const content = {
    en: {
        name: "Hector de Jesus Fernandez Zanatta",
        tagline: "Data engineer, passionate about Artificial Intelligence and Machine Learning techniques. Interested in data science, data analysis, Network science, NLP. With clean, annotated and scalable code.",
        education: "Universidad Politecnica de Yucatan (2020 - In progress)",
        email: "hector.fernandez.zanatta@outlook.com",
        phone: "(+52) 229-119-8159",
        location: "Mexico",
        softSkills: ["Teamwork", "Problem Solving", "Adaptability", "Communication", "Creativity"],
        experience: [
            "Hermin (January 2024 - June 2024): As a Data Engineer, I was responsible for automating an ETL process that extracted data from a database, validated it through an external web service, and stored the results in a new table. These enhanced datasets were used to train a Machine Learning model that classified customers as likely or unlikely to renew, using a scale of 1 (potential) and -1 (not potential). The model achieved a 92% accuracy rate and was integrated into the pipeline. The entire process and its KPIs were visualized using Power BI, including insights from both the model and the ETL performance.",
            "Six Rivera (January 2023 - June 2023): As the database lead, I designed and managed a MySQL database from scratch, ensuring clarity, organization, and scalability. I developed an RPA system to clean incoming data using Python tools and conducted an in-depth sales analysis. The results were presented through interactive notebook visualizations. This analysis identified key trends and opportunities, contributing to a 60% increase in sales."
        ],
        languagesList: ["English - B2 Itep Plus Certification", "Spanish - Native"]
    },
    es: {
        name: "Hector de Jesus Fernandez Zanatta",
        tagline: "Ingeniero en datos, apasionado por la Inteligencia Artificial y las técnicas de Machine Learning. Interés en la ciencia de datos, análisis de datos, Network science, NLP. Con códigos limpios, comentados y escalables.",
        education: "Universidad Politécnica de Yucatán (2020 - En proceso de titulación)",
        email: "hector.fernandez.zanatta@outlook.com",
        phone: "(+52) 229-119-8159",
        location: "Ubicación: México",
        softSkills: ["Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Comunicación", "Creatividad"],
        experience: [
            "Hermin (Enero 2024 - Junio 2024): Como ingeniero de datos me fue encargado una automatización de un proceso ETL, que tomaba datos de la base de datos, los probaba en una página y obtenía nuevos resultados que serían guardados en una nueva tabla. Con estos nuevos datos entrenamos un modelo de machine learning, el cual clasificaba los clientes como posibles renovadores o no. El modelo tuvo un 92% de exactitud y se integró a la pipeline. Finalmente, con Power BI se visualizó todo el proceso, KPIs y resultados del modelo.",
            "Six Rivera (Enero 2023 - Junio 2023): Como encargado de las bases de datos, diseñé y gestioné una base de datos MySQL desde cero, asegurando claridad y escalabilidad. Desarrollé un sistema RPA para limpieza de datos con Python, e hice un análisis profundo de ventas, visualizado en cuadernos interactivos. Esto ayudó a incrementar las ventas en un 60%."
        ],
        languagesList: ["English - B2 Itep Plus Certificado", "Spanish - Nativo"]
    }
};

// Función para cambiar idioma
function switchLanguage(lang) {
    const data = content[lang];

    // Información personal
    document.getElementById("name").textContent = data.name;
    document.getElementById("tagline").textContent = data.tagline;
    document.getElementById("email").innerHTML = `Email: <a href="mailto:${data.email}">${data.email}</a>`;
    document.getElementById("phone").textContent = `Phone: ${data.phone}`;
    document.getElementById("location").textContent = `Location: ${data.location}`;

    // Habilidades técnicas (no cambian)
    const skillsList = document.querySelector("#skills ul");
    skillsList.innerHTML = "";
    sharedSkills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Habilidades blandas (sí cambian)
    const softSkillsList = document.querySelector("#softSkills ul");
    softSkillsList.innerHTML = "";
    data.softSkills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        softSkillsList.appendChild(li);
    });

    // Idiomas
    const languagesList = document.querySelector("#languagesList ul");
    languagesList.innerHTML = "";
    data.languagesList.forEach(language => {
        const li = document.createElement("li");
        li.textContent = language;
        languagesList.appendChild(li);
    });

    // Experiencia laboral
    const experienceSection = document.getElementById("experience");
    experienceSection.innerHTML = "<h2>Work Experience</h2>";
    data.experience.forEach(entry => {
        const p = document.createElement("p");
        p.textContent = entry;
        experienceSection.appendChild(p);
    });

    // Educación
    const educationSection = document.getElementById("education");
    educationSection.innerHTML = `<h2>Education</h2><p>${data.education}</p>`;

    // Certificados
    const certSection = document.getElementById("certificates");
    certSection.innerHTML = `
        <h2>Certificates</h2>
        <p>View all my certificates <a href="${sharedCertificates.allCertificatesLink}" target="_blank">here</a>.</p>
        <h3>Highlighted Certificates</h3>
        <ul>
            ${sharedCertificates.highlighted.map(cert => `<li><a href="${cert.link}" target="_blank">${cert.name}</a></li>`).join("")}
        </ul>
    `;
}

// Cargar inglés por defecto
window.onload = () => {
    switchLanguage("en");
};
