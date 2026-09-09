const translations = {
  en: {
    nav_about:"About",nav_research:"Research",nav_intel:"Intelligence",nav_disclosure:"Disclosure",nav_contact:"Contact",
    available:"Available for authorized research",
    hero_lead:"Authorized vulnerability research across web applications, APIs, authentication, authorization, business logic and complex attack paths.",
    contact_me:"Contact",
    about_title:"Research with an adversarial mindset, evidence first.",
    about_p1:'I am Francisco Javier García Romero, operating publicly as <strong>CHIQUI_78</strong>. I participate in authorized vulnerability disclosure and bug bounty environments, with a focus on understanding how real systems fail across technical and business boundaries.',
    about_p2:"My work prioritises reproducibility, measurable impact and responsible disclosure. The goal is not simply to identify an endpoint or a misconfiguration, but to understand the assumption behind it and validate whether it can become a meaningful attack path.",
    focus_title:"Primary research areas",focus_intro:"A practical focus on surfaces where trust, identity and application state intersect.",
    focus_web:"Attack surface mapping, workflow analysis and exploitability validation.",
    focus_api:"Object boundaries, undocumented behaviour, state and authorization controls.",
    focus_identity:"Authentication flows, OIDC/OAuth boundaries, session transitions and trust.",
    focus_authz:"Horizontal and vertical access-control hypotheses and ownership validation.",
    focus_logic:"Impossible states, workflow abuse, race conditions and broken assumptions.",
    focus_ai:"Using modern AI systems to accelerate analysis while keeping findings reproducible and evidence-driven.",
    m1:"Observe the real application",m2:"Map objects & trust",m3:"Challenge assumptions",m4:"Prove impact",m5:"Report responsibly",
    intel_title:"Reports worth reading",intel_intro:"A curated feed of high-signal security research from primary sources. Selected for relevance to real-world attack paths and vulnerability research.",
    curated:"Curated Sep 2026",source_note:"External links point to the original publishers. Summaries are editorial notes, not reproductions of the reports.",
    disclosure_title:"Evidence, coordination, then publication.",
    disclosure_p1:"Security findings are handled through the applicable VDP, bug bounty or coordinated-disclosure process. Technical write-ups are published only when disclosure conditions allow it.",
    d1:"No publication of confidential program or customer data.",d2:"Reproduction steps are documented with the minimum data required to prove impact.",d3:"Vendor remediation and disclosure timelines are respected.",d4:"Public write-ups focus on lessons, root cause and defensive value.",
    disclosures_label:"Public disclosures",disclosures_text:"Selected write-ups will appear here after coordinated disclosure is complete.",
    contact_title:"Security research, collaboration and verified program invitations.",copy:"COPY",copied:"COPIED",pgp_pending:"Public key will be published here after generation.",
    footer:"Independent security research · Responsible disclosure first",why:"RESEARCHER NOTE",read:"READ ORIGINAL"
  },
  es: {
    nav_about:"Perfil",nav_research:"Investigación",nav_intel:"Inteligencia",nav_disclosure:"Divulgación",nav_contact:"Contacto",
    available:"Disponible para investigación autorizada",
    hero_lead:"Investigación autorizada de vulnerabilidades en aplicaciones web, APIs, autenticación, autorización, lógica de negocio y rutas de ataque complejas.",
    contact_me:"Contacto",
    about_title:"Mentalidad adversaria, evidencia primero.",
    about_p1:'Soy Francisco Javier García Romero y trabajo públicamente como <strong>CHIQUI_78</strong>. Participo en entornos autorizados de divulgación de vulnerabilidades y bug bounty, centrado en comprender cómo fallan los sistemas reales a través de límites técnicos y de negocio.',
    about_p2:"Mi trabajo prioriza reproducibilidad, impacto medible y divulgación responsable. El objetivo no es simplemente identificar un endpoint o una mala configuración, sino entender la suposición que existe detrás y validar si puede convertirse en una ruta de ataque relevante.",
    focus_title:"Áreas principales de investigación",focus_intro:"Enfoque práctico en superficies donde se cruzan confianza, identidad y estado de la aplicación.",
    focus_web:"Mapeo de superficie de ataque, análisis de flujos y validación de explotabilidad.",
    focus_api:"Límites entre objetos, comportamiento no documentado, estados y controles de autorización.",
    focus_identity:"Flujos de autenticación, límites OIDC/OAuth, transiciones de sesión y confianza.",
    focus_authz:"Hipótesis de control de acceso horizontal y vertical y validación de propiedad.",
    focus_logic:"Estados imposibles, abuso de workflows, condiciones de carrera y suposiciones rotas.",
    focus_ai:"Uso de sistemas modernos de IA para acelerar el análisis manteniendo hallazgos reproducibles y basados en evidencia.",
    m1:"Observar la aplicación real",m2:"Mapear objetos y confianza",m3:"Cuestionar suposiciones",m4:"Demostrar impacto",m5:"Reportar responsablemente",
    intel_title:"Informes que merece la pena leer",intel_intro:"Selección de investigación de seguridad de alta señal procedente de fuentes primarias, priorizada por su relevancia para rutas de ataque reales e investigación de vulnerabilidades.",
    curated:"Selección sep 2026",source_note:"Los enlaces externos apuntan a los editores originales. Los resúmenes son notas editoriales, no reproducciones de los informes.",
    disclosure_title:"Evidencia, coordinación y después publicación.",
    disclosure_p1:"Los hallazgos de seguridad se gestionan mediante el VDP, bug bounty o proceso de divulgación coordinada aplicable. Los análisis técnicos se publican únicamente cuando las condiciones de divulgación lo permiten.",
    d1:"No se publica información confidencial de programas o clientes.",d2:"Los pasos de reproducción se documentan con los datos mínimos necesarios para demostrar impacto.",d3:"Se respetan los plazos de remediación y divulgación del proveedor.",d4:"Los write-ups públicos se centran en aprendizaje, causa raíz y valor defensivo.",
    disclosures_label:"Divulgaciones públicas",disclosures_text:"Los análisis seleccionados aparecerán aquí cuando finalice la divulgación coordinada.",
    contact_title:"Investigación de seguridad, colaboraciones e invitaciones verificadas a programas.",copy:"COPIAR",copied:"COPIADO",pgp_pending:"La clave pública se publicará aquí cuando haya sido generada.",
    footer:"Investigación de seguridad independiente · Divulgación responsable primero",why:"NOTA DEL RESEARCHER",read:"LEER ORIGINAL"
  }
};

let lang = localStorage.getItem("c78-lang") || "en";

function translate(){
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(translations[lang][k] !== undefined) el.innerHTML=translations[lang][k];
  });
  document.getElementById("langToggle").textContent = lang === "en" ? "ES" : "EN";
  renderReports();
}

function formatDate(v){
  if(/^\d{4}-\d{2}-\d{2}$/.test(v)){
    const d=new Date(v+"T00:00:00Z");
    return new Intl.DateTimeFormat(lang==="es"?"es-ES":"en-GB",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}).format(d);
  }
  return v;
}

function renderReports(){
  const grid=document.getElementById("reportsGrid");
  const t=translations[lang];
  grid.innerHTML=(window.CHIQUI78_REPORTS||[]).map(r=>`
    <article class="report-card">
      <div class="report-meta"><span class="report-tag">${r.tag}</span><span>${formatDate(r.date)}</span></div>
      <h3>${r.title}</h3>
      <div class="publisher">${r.publisher}</div>
      <p>${lang==="es"?r.summary_es:r.summary_en}</p>
      <p class="report-why"><strong>${t.why}:</strong> ${lang==="es"?r.why_es:r.why_en}</p>
      <a class="report-link" href="${r.url}" target="_blank" rel="noreferrer"><span>${t.read}</span><span>↗</span></a>
    </article>`).join("");
}

document.getElementById("langToggle").addEventListener("click",()=>{
  lang = lang === "en" ? "es" : "en";
  localStorage.setItem("c78-lang",lang);
  translate();
});

document.querySelectorAll(".copy-email").forEach(btn=>{
  btn.addEventListener("click", async ()=>{
    const email=btn.dataset.email;
    try{
      await navigator.clipboard.writeText(email);
      const b=btn.querySelector("b");
      b.textContent=translations[lang].copied;
      setTimeout(()=>b.textContent=translations[lang].copy,1100);
    }catch{
      location.href="mailto:"+email;
    }
  });
});

translate();
