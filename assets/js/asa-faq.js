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
      question: "À quoi sert l’accompagnement à 43 € ?",
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

  const checkout = {
    basePrice: 97,
    addonPrice: 43,
    baseUrl: "#checkout-programme-97",
    addonUrl: "#checkout-programme-accompagnement-140",
  };

  const formatPrice = (price) => `${price} €`;

  const findCheckoutMount = () => {
    const pricing = document.querySelector("#pricing");
    if (!pricing) return null;

    return pricing.querySelector(".framer-1wd2kxj") || pricing.querySelector(".framer-1kezrdl");
  };

  const getPurchaseLinks = () =>
    Array.from(document.querySelectorAll("a")).filter((link) => {
      const label = link.textContent.replace(/\s+/g, " ").trim();
      return /Accès immédiat|Rejoindre AI Success Academy|Accéder maintenant/i.test(label);
    });

  const setPurchaseLabel = (link, selected) => {
    const textNode = link.querySelector(".framer-1mfkbq1 .framer-text");
    if (!textNode) return;

    const isNav = /Accès immédiat/i.test(textNode.textContent);
    textNode.textContent = isNav
      ? `Accès immédiat - ${formatPrice(selected ? checkout.basePrice + checkout.addonPrice : checkout.basePrice)}`
      : `Accéder maintenant - ${formatPrice(selected ? checkout.basePrice + checkout.addonPrice : checkout.basePrice)}`;
  };

  const updatePurchaseLinks = (selected) => {
    const url = selected ? checkout.addonUrl : checkout.baseUrl;
    getPurchaseLinks().forEach((link) => {
      if (link.closest(".asa-checkout-panel")) return;
      link.href = url;
      link.dataset.asaCheckoutLink = selected ? "with-support" : "base";
      setPurchaseLabel(link, selected);
    });
  };

  const buildCheckout = () => {
    const panel = document.createElement("section");
    panel.className = "asa-checkout-panel";
    panel.dataset.asaCheckout = "true";
    panel.innerHTML = `
      <div class="asa-checkout-heading">
        <p>Finaliser l'inscription</p>
        <span>Accès immédiat après paiement</span>
      </div>

      <div class="asa-checkout-choice asa-checkout-choice-base is-selected" aria-disabled="true">
        <span class="asa-checkout-check" aria-hidden="true"></span>
        <span class="asa-checkout-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M5 5.8c0-.99.81-1.8 1.8-1.8h10.4c.99 0 1.8.81 1.8 1.8v12.4c0 .99-.81 1.8-1.8 1.8H6.8A1.8 1.8 0 0 1 5 18.2V5.8Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
        </span>
        <span class="asa-checkout-main">
          <span class="asa-checkout-kicker">Inclus</span>
          <strong>Programme complet</strong>
        </span>
        <strong class="asa-checkout-price">${formatPrice(checkout.basePrice)}</strong>
      </div>

      <button class="asa-checkout-choice asa-checkout-choice-addon" type="button" aria-pressed="false">
        <span class="asa-checkout-check" aria-hidden="true"></span>
        <span class="asa-checkout-main">
          <strong>Je veux être accompagné</strong>
          <span class="asa-checkout-list">
            <span>Retour personnalisé</span>
            <span>Support par message</span>
            <span>Plan d'action plus clair</span>
          </span>
        </span>
        <strong class="asa-checkout-price">+${formatPrice(checkout.addonPrice)}</strong>
      </button>

      <div class="asa-checkout-summary">
        <div class="asa-checkout-total-row">
          <span>Total</span>
          <strong data-asa-checkout-total>${formatPrice(checkout.basePrice)}</strong>
        </div>
        <a class="asa-checkout-submit" href="${checkout.baseUrl}" data-asa-checkout-submit>
          <span>Accéder maintenant</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <p class="asa-checkout-safe">Paiement sécurisé · Accès immédiat</p>
    `;

    const addon = panel.querySelector(".asa-checkout-choice-addon");
    const total = panel.querySelector("[data-asa-checkout-total]");
    const submit = panel.querySelector("[data-asa-checkout-submit]");

    const setSelected = (selected) => {
      addon.classList.toggle("is-selected", selected);
      addon.setAttribute("aria-pressed", String(selected));
      total.textContent = formatPrice(selected ? checkout.basePrice + checkout.addonPrice : checkout.basePrice);
      submit.href = selected ? checkout.addonUrl : checkout.baseUrl;
      submit.dataset.asaCheckoutLink = selected ? "with-support" : "base";
      updatePurchaseLinks(selected);
    };

    addon.addEventListener("click", () => setSelected(!addon.classList.contains("is-selected")));
    setSelected(false);

    return panel;
  };

  const mountCheckout = () => {
    if (document.querySelector("[data-asa-checkout='true']")) return;

    document.querySelectorAll(".asa-addon-option").forEach((node) => node.remove());

    const mount = findCheckoutMount();
    if (!mount) return;

    const panel = buildCheckout();
    mount.insertAdjacentElement("afterend", panel);
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
    mountCheckout();

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
