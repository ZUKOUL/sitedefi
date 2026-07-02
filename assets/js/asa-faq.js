(() => {
  const faqs = [
    {
      question: "Est-ce trop tard pour commencer ?",
      answer:
        "Non. Ce qui devient vite saturé, ce sont les contenus copiés-collés. Ce qui reste rare, c’est un avatar cohérent, une niche claire, une offre simple et des vidéos publiées avec régularité. La formation t’aide à construire cet ensemble dans le bon ordre, sans partir au hasard.",
    },
    {
      question: "Est-ce que TikTok ou Instagram peuvent bloquer le contenu IA ?",
      answer:
        "Les plateformes ne bloquent pas automatiquement l’IA. Elles pénalisent surtout le contenu trompeur, recyclé, dangereux ou de mauvaise qualité. Ici, l’objectif est de créer un avatar assumé, des scripts utiles et un contenu qui apporte de la valeur, pas de faire croire quelque chose de faux.",
    },
    {
      question: "Et si je choisis la mauvaise niche ?",
      answer:
        "Tu ne choisis pas une niche au feeling. Tu pars de critères simples : une demande existante, un problème clair, du contenu facile à produire et une offre vendable. Ensuite, tu testes rapidement plusieurs angles avant de t’investir à fond. Ça réduit fortement le risque de perdre des semaines sur une idée fragile.",
    },
    {
      question: "Je débute complètement, est-ce que je peux suivre ?",
      answer:
        "Oui. Le programme est pensé pour quelqu’un qui part de zéro : étapes courtes, prompts, templates, exemples et décisions à prendre dans le bon ordre. Tu n’as pas besoin de coder, d’être monteur vidéo ou d’avoir déjà une marque personnelle.",
    },
    {
      question: "Est-ce que je dois montrer mon visage ?",
      answer:
        "Non. C’est justement le principe du système : l’avatar porte le contenu, l’angle et le message. Tu peux rester en arrière-plan tout en construisant un actif visible, testable et améliorable.",
    },
    {
      question: "Combien de temps faut-il chaque semaine ?",
      answer:
        "Au début, prévois quelques vraies sessions pour poser les bases : niche, avatar, produit, page et premiers scripts. Une fois le système installé, beaucoup de travail devient plus répétable. L’objectif est d’avancer avec un rythme réaliste, souvent 2 à 4 heures par semaine selon ton niveau et ta régularité.",
    },
    {
      question: "Est-ce que je peux vendre si je n’ai pas encore d’audience ?",
      answer:
        "Oui, mais pas en vendant dans le vide. Tu utilises d’abord le contenu pour créer de l’attention, comprendre ce qui intéresse les gens et tester tes angles. La vente devient plus naturelle quand ton audience comprend déjà le problème et voit une solution claire.",
    },
    {
      question: "Qu’est-ce que j’obtiens concrètement dans le programme ?",
      answer:
        "Tu repars avec un avatar IA, une niche clarifiée, une idée de produit digital, une page de vente, des scripts de vidéos courtes, un plan de publication et une méthode simple pour améliorer ce qui fonctionne.",
    },
    {
      question: "À quoi sert l’accompagnement à 47 € ?",
      answer:
        "C’est l’option pour avancer avec moins de flou. Elle sert à t’aider à prendre les bonnes décisions plus vite sur ta niche, ton avatar, ton angle, ton offre et tes premiers contenus. La formation seule permet déjà d’avancer ; l’accompagnement ajoute surtout du cadrage et de la clarté.",
    },
    {
      question: "Est-ce que les résultats sont garantis ?",
      answer:
        "Non, personne ne peut garantir tes revenus. Les résultats dépendent de ton exécution, de ta niche, de ton offre, de ta régularité et de tes tests. La garantie concerne ta satisfaction : tu peux tester le programme pendant 30 jours et demander un remboursement selon les conditions prévues.",
    },
  ];

  const onReady = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }

    callback();
  };

  const getFaqMounts = () => {
    const legacyNodes = Array.from(
      document.querySelectorAll('[class*="force-styles-:Rncq2laop:"]')
    );
    const mounts = legacyNodes
      .map((node) => node.closest(".framer-4k7zft-container"))
      .filter(Boolean);

    return Array.from(new Set(mounts));
  };

  const setPanelHeight = (item, open) => {
    const button = item.querySelector(".asa-faq-button");
    const panel = item.querySelector(".asa-faq-panel");

    item.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    panel.style.maxHeight = open ? `${panel.scrollHeight}px` : "0px";
  };

  const buildFaq = () => {
    const faq = document.createElement("div");
    faq.className = "asa-faq";
    faq.setAttribute("aria-label", "Questions fréquentes");

    faqs.forEach((item, index) => {
      const article = document.createElement("article");
      article.className = "asa-faq-item";

      const button = document.createElement("button");
      button.className = "asa-faq-button";
      button.type = "button";
      button.id = `asa-faq-button-${index}`;
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", `asa-faq-panel-${index}`);

      const question = document.createElement("span");
      question.className = "asa-faq-question";
      question.textContent = item.question;

      const icon = document.createElement("span");
      icon.className = "asa-faq-icon";
      icon.setAttribute("aria-hidden", "true");

      button.append(question, icon);

      const panel = document.createElement("div");
      panel.className = "asa-faq-panel";
      panel.id = `asa-faq-panel-${index}`;
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", button.id);

      const answer = document.createElement("p");
      answer.className = "asa-faq-answer";
      answer.textContent = item.answer;
      panel.append(answer);

      article.append(button, panel);
      faq.append(article);

      button.addEventListener("click", () => {
        const isOpen = article.classList.contains("is-open");
        setPanelHeight(article, !isOpen);
      });
    });

    return faq;
  };

  onReady(() => {
    const mounts = getFaqMounts();
    if (!mounts.length) return;

    mounts.forEach((mount) => {
      if (mount.dataset.asaFaqReady === "true") return;

      const faq = buildFaq();
      mount.dataset.asaFaqReady = "true";
      mount.innerHTML = "";
      mount.append(faq);

      const firstItem = faq.querySelector(".asa-faq-item");
      if (firstItem) setPanelHeight(firstItem, true);
    });

    window.addEventListener("resize", () => {
      document
        .querySelectorAll(".asa-faq-item.is-open")
        .forEach((item) => setPanelHeight(item, true));
    });
  });
})();
