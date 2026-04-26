document.addEventListener("DOMContentLoaded", () => {
    const services = [
        {
            title: "Despesas Públicas",
            icon: "R$",
            category: "dinheiro",
            type: "consulta",
            year: "2026",
            description: "Acompanhe onde e como o dinheiro público está sendo gasto.",
            tags: ["Gastos", "Orçamento", "Pagamentos"],
            href: "https://www.transparencia.ma.gov.br/app/v2/despesas",
            keywords: "despesas gastos dinheiro público orçamento pagamentos saúde educação"
        },
        {
            title: "Receitas Públicas",
            icon: "REC",
            category: "dinheiro",
            type: "painel",
            year: "2026",
            description: "Veja de onde vem o dinheiro arrecadado pelo Estado.",
            tags: ["Arrecadação", "Impostos", "Entrada"],
            href: "https://www.transparencia.ma.gov.br/app/v2/receitas",
            keywords: "receitas arrecadação impostos dinheiro entrada recursos"
        },
        {
            title: "Licitações Públicas",
            icon: "LIC",
            category: "contratacoes",
            type: "consulta",
            year: "2026",
            description: "Veja compras e contratações que o governo pretende realizar ou já realizou.",
            tags: ["Compras", "Editais", "Empresas"],
            href: "https://www.transparencia.ma.gov.br/app/compras/consulta-de-compras",
            keywords: "licitação licitações compras contratações empresas serviços edital pregão"
        },
        {
            title: "Contratos",
            icon: "DOC",
            category: "contratacoes",
            type: "documento",
            year: "2025",
            description: "Veja empresas contratadas, valores, prazos e serviços prestados.",
            tags: ["Empresas", "Valores", "Prazos"],
            href: "https://www.transparencia.ma.gov.br/app/compras/consulta-de-contratos",
            keywords: "contratos empresas valores prazos fornecedores serviços"
        },
        {
            title: "Servidores e Pensionistas",
            icon: "SV",
            category: "pessoas",
            type: "consulta",
            year: "2026",
            description: "Consulte informações sobre servidores, aposentados e pensionistas.",
            tags: ["Servidores", "Cargos", "Remuneração"],
            href: "https://www.transparencia.ma.gov.br/app/v2/pessoal/remuneracao",
            keywords: "servidores pensionistas aposentados remuneração cargos vínculo"
        },
        {
            title: "Diárias e Passagens",
            icon: "DP",
            category: "pessoas",
            type: "consulta",
            year: "2024",
            description: "Consulte gastos com viagens, diárias e passagens oficiais.",
            tags: ["Viagens", "Diárias", "Passagens"],
            href: "https://www.transparencia.ma.gov.br/app/v2/pessoal",
            keywords: "diárias passagens viagens servidores deslocamento"
        },
        {
            title: "Renúncias Fiscais",
            icon: "RF",
            category: "dinheiro",
            type: "documento",
            year: "2025",
            description: "Entenda benefícios fiscais concedidos e quanto o Estado deixou de arrecadar.",
            tags: ["Incentivos", "Arrecadação", "Empresas"],
            href: "https://www.transparencia.ma.gov.br/pesquisa-avancada?query=ren%C3%BAncia%20fiscal",
            keywords: "renúncias fiscais benefícios fiscais incentivos arrecadação empresas"
        },
        {
            title: "Obras Públicas",
            icon: "OBR",
            category: "fiscalizacao",
            type: "painel",
            year: "2026",
            description: "Acompanhe obras, valores, situação e andamento dos serviços.",
            tags: ["Obras", "Andamento", "Valores"],
            href: "https://www.transparencia.ma.gov.br/app/v2/obras",
            keywords: "obras públicas construção andamento valores serviços fiscalização"
        },
        {
            title: "Sanções",
            icon: "SAN",
            category: "fiscalizacao",
            type: "consulta",
            year: "2024",
            description: "Veja punições aplicadas a empresas, pessoas físicas ou instituições.",
            tags: ["Punições", "Empresas", "Controle"],
            href: "https://www.transparencia.ma.gov.br/pesquisa-avancada?query=san%C3%A7%C3%A3o",
            keywords: "sanções punições empresas pessoas penalidades irregularidades"
        },
        {
            title: "Convênios e Parcerias",
            icon: "CV",
            category: "contratacoes",
            type: "documento",
            year: "2025",
            description: "Consulte acordos, repasses e parcerias firmadas pelo governo.",
            tags: ["Parcerias", "Repasses", "Acordos"],
            href: "https://www.transparencia.ma.gov.br/pesquisa-avancada?query=conv%C3%AAnio",
            keywords: "convênios parcerias repasses acordos instituições"
        },
        {
            title: "Emendas Parlamentares",
            icon: "EMP",
            category: "fiscalizacao",
            type: "consulta",
            year: "2026",
            description: "Consulte recursos destinados por emendas parlamentares.",
            tags: ["Emendas", "Recursos", "Parlamento"],
            href: "https://www.transparencia.ma.gov.br/app/v2/emendas",
            keywords: "emendas parlamentares recursos deputados"
        },
        {
            title: "Dados Abertos",
            icon: "CSV",
            category: "dados",
            type: "download",
            year: "2026",
            description: "Acesse dados em formatos reutilizáveis para análises e pesquisas.",
            tags: ["Download", "CSV", "Planilhas"],
            href: "http://dados.ma.gov.br/",
            keywords: "dados abertos download csv planilhas gráficos análises acesso à informação"
        }
    ];

    const presets = {
        despesas: "despesas",
        contratos: "contratos",
        obras: "obras",
        servidores: "remuneração",
        dados: "dados abertos",
        licitacoes: "licitação"
    };

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => Array.from(document.querySelectorAll(selector));

    const body = document.body;
    const root = document.documentElement;

    const menuButton = $("#menuButton");
    const mainNav = $("#mainNav");

    const accessibilityToggle = $("#accessibilityToggle");
    const accessibilityPanel = $("#accessibilityPanel");
    const closeAccessibility = $("#closeAccessibility");
    const increaseFont = $("#increaseFont");
    const decreaseFont = $("#decreaseFont");
    const toggleContrast = $("#toggleContrast");
    const toggleSpacing = $("#toggleSpacing");
    const toggleReadingMode = $("#toggleReadingMode");
    const resetAccessibility = $("#resetAccessibility");
    const fontStatus = $("#fontStatus");

    const heroSearch = $("#heroSearch");
    const heroQuery = $("#heroQuery");
    const mainSearch = $("#mainSearch");
    const mainQuery = $("#mainQuery");

    const categoryFilter = $("#categoryFilter");
    const typeFilter = $("#typeFilter");
    const yearFilter = $("#yearFilter");
    const clearFilters = $("#clearFilters");
    const activeFilters = $("#activeFilters");
    const resultsCount = $("#resultsCount");
    const serviceGrid = $("#serviceGrid");

    const assistantToggle = $("#assistantToggle");
    const assistantPanel = $("#assistantPanel");
    const assistantClose = $("#assistantClose");
    const assistantMessages = $("#assistantMessages");
    const assistantForm = $("#assistantForm");
    const assistantInput = $("#assistantInput");
    const assistantLive = $("#assistantLive");
    const assistantAccessibleMode = $("#assistantAccessibleMode");
    const assistantReadLast = $("#assistantReadLast");

    const backToTop = $("#backToTop");

    let scale = 1;
    let lastAssistantText = "Olá! Posso ajudar você a encontrar consultas, explicar termos ou ativar recursos de acessibilidade.";

    let state = {
        query: "",
        category: "todos",
        type: "todos",
        year: "todos"
    };

    renderServices();
    renderActiveFilters();

    if (menuButton && mainNav) {
        // Seleciona os elementos visuais e de acessibilidade dentro do botão
        const menuIcon = menuButton.querySelector(".menu-icon");
        const srText = menuButton.querySelector(".sr-only");

        menuButton.addEventListener("click", () => {
            // A sua lógica original que abre/fecha o menu
            const isOpen = mainNav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));

            // Nova lógica: altera o ícone e o texto do leitor de telas
            if (menuIcon && srText) {
                if (isOpen) {
                    menuIcon.textContent = "✕"; // Muda para o X
                    srText.textContent = "Fechar menu"; // Atualiza acessibilidade
                } else {
                    menuIcon.textContent = "☰"; // Volta para o menu Hambúrguer
                    srText.textContent = "Abrir menu"; // Atualiza acessibilidade
                }
            }
        });
    }

    if (accessibilityToggle && accessibilityPanel) {
        accessibilityToggle.addEventListener("click", () => {
            const isHidden = accessibilityPanel.hasAttribute("hidden");
            accessibilityPanel.toggleAttribute("hidden", !isHidden);
            accessibilityToggle.setAttribute("aria-expanded", String(isHidden));
        });
    }

    if (closeAccessibility && accessibilityPanel && accessibilityToggle) {
        closeAccessibility.addEventListener("click", () => {
            accessibilityPanel.setAttribute("hidden", "");
            accessibilityToggle.setAttribute("aria-expanded", "false");
            accessibilityToggle.focus();
        });
    }

    if (increaseFont) {
        increaseFont.addEventListener("click", () => {
            setScale(scale + 0.08);
        });
    }

    if (decreaseFont) {
        decreaseFont.addEventListener("click", () => {
            setScale(scale - 0.08);
        });
    }

    if (toggleContrast) {
        toggleContrast.addEventListener("click", () => {
            body.classList.toggle("contrast-mode");
        });
    }

    if (toggleSpacing) {
        toggleSpacing.addEventListener("click", () => {
            body.classList.toggle("relaxed-mode");
        });
    }

    if (toggleReadingMode) {
        toggleReadingMode.addEventListener("click", () => {
            body.classList.toggle("reading-mode");
        });
    }

    if (resetAccessibility) {
        resetAccessibility.addEventListener("click", () => {
            scale = 1;
            root.style.setProperty("--scale", "1");
            body.classList.remove("contrast-mode", "relaxed-mode", "reading-mode");

            if (fontStatus) {
                fontStatus.textContent = "Fonte atual: 100%.";
            }
        });
    }

    if (heroSearch) {
        heroSearch.addEventListener("submit", (event) => {
            event.preventDefault();
            applySearch(heroQuery ? heroQuery.value : "");
        });
    }

    if (mainSearch) {
        mainSearch.addEventListener("submit", (event) => {
            event.preventDefault();
            applySearch(mainQuery ? mainQuery.value : "");
        });
    }

    $$("[data-preset]").forEach((button) => {
        button.addEventListener("click", () => {
            const preset = presets[button.dataset.preset] || button.dataset.preset;
            applySearch(preset);
        });
    });

    $$("[data-search]").forEach((button) => {
        button.addEventListener("click", () => {
            applySearch(button.dataset.search);
        });
    });

    $$("[data-accessibility-action]").forEach((button) => {
        button.addEventListener("click", () => {
            handleAccessibility(button.dataset.accessibilityAction);
        });
    });

    if (categoryFilter) {
        categoryFilter.addEventListener("change", () => {
            state.category = categoryFilter.value;
            renderServices();
            renderActiveFilters();
        });
    }

    if (typeFilter) {
        typeFilter.addEventListener("change", () => {
            state.type = typeFilter.value;
            renderServices();
            renderActiveFilters();
        });
    }

    if (yearFilter) {
        yearFilter.addEventListener("change", () => {
            state.year = yearFilter.value;
            renderServices();
            renderActiveFilters();
        });
    }

    if (clearFilters) {
        clearFilters.addEventListener("click", () => {
            state = {
                query: "",
                category: "todos",
                type: "todos",
                year: "todos"
            };

            syncFilters();
            renderServices();
            renderActiveFilters();
        });
    }

    if (activeFilters) {
        activeFilters.addEventListener("click", (event) => {
            const button = event.target.closest("[data-clear]");

            if (!button) {
                return;
            }

            const field = button.dataset.clear;
            state[field] = field === "query" ? "" : "todos";

            syncFilters();
            renderServices();
            renderActiveFilters();
        });
    }

    $$("[data-open-assistant]").forEach((button) => {
        button.addEventListener("click", openAssistant);
    });

    if (assistantToggle) {
        assistantToggle.addEventListener("click", () => {
            if (!assistantPanel) {
                return;
            }

            if (assistantPanel.hasAttribute("hidden")) {
                openAssistant();
            } else {
                closeAssistant();
            }
        });
    }

    if (assistantClose) {
        assistantClose.addEventListener("click", () => {
            closeAssistant();
        });
    }

    if (assistantForm) {
        assistantForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const text = assistantInput ? assistantInput.value.trim() : "";

            if (!text) {
                return;
            }

            addAssistantMessage(text, "user");

            if (assistantInput) {
                assistantInput.value = "";
            }

            handleAssistantText(text);
        });
    }

    $$("[data-assistant-action]").forEach((button) => {
        button.addEventListener("click", () => {
            handleAssistantAction(button.dataset.assistantAction);
        });
    });

    if (assistantAccessibleMode) {
        assistantAccessibleMode.addEventListener("click", () => {
            body.classList.add("contrast-mode", "relaxed-mode", "reading-mode");
            setScale(Math.max(scale, 1.16));
            assistantReply("Ativei contraste, fonte maior, espaçamento ampliado e leitura fácil.");
        });
    }

    if (assistantReadLast) {
        assistantReadLast.addEventListener("click", () => {
            speak(lastAssistantText);
        });
    }

    window.addEventListener("scroll", () => {
        if (backToTop) {
            backToTop.classList.toggle("visible", window.scrollY > 500);
        }
    });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAssistant(false);
        }
    });

    function setScale(value) {
        scale = Math.max(0.92, Math.min(value, 1.28));
        root.style.setProperty("--scale", scale.toString());

        if (fontStatus) {
            fontStatus.textContent = `Fonte atual: ${Math.round(scale * 100)}%.`;
        }
    }

    function handleAccessibility(action) {
        if (action === "font-up") {
            setScale(scale + 0.08);
        }

        if (action === "font-down") {
            setScale(scale - 0.08);
        }

        if (action === "contrast") {
            body.classList.toggle("contrast-mode");
        }

        if (action === "easy") {
            body.classList.toggle("reading-mode");
        }
    }

    function applySearch(query) {
        state.query = query || "";

        if (heroQuery) {
            heroQuery.value = state.query;
        }

        if (mainQuery) {
            mainQuery.value = state.query;
        }

        renderServices();
        renderActiveFilters();

        const consultas = $("#consultas");

        if (consultas) {
            consultas.scrollIntoView({ behavior: "smooth" });
        }
    }

    function syncFilters() {
        if (heroQuery) {
            heroQuery.value = state.query;
        }

        if (mainQuery) {
            mainQuery.value = state.query;
        }

        if (categoryFilter) {
            categoryFilter.value = state.category;
        }

        if (typeFilter) {
            typeFilter.value = state.type;
        }

        if (yearFilter) {
            yearFilter.value = state.year;
        }
    }

    function renderServices() {
        if (!serviceGrid || !resultsCount) {
            return;
        }

        const filtered = getFilteredServices();

        serviceGrid.innerHTML = filtered.map(createServiceCard).join("");
        resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "consulta encontrada" : "consultas encontradas"}`;

        if (filtered.length === 0) {
            serviceGrid.innerHTML = `
        <div class="service-card">
          <span class="service-card-icon">?</span>
          <strong>Nenhuma consulta encontrada</strong>
          <p>Tente buscar por outro termo ou limpar os filtros ativos.</p>
          <a href="#consultas">Rever filtros</a>
        </div>
      `;
        }
    }

    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.includes('Leitura fácil') || btn.id === 'toggleReadingMode') {
            btn.onclick = function (e) {
                e.preventDefault(); // Impede que o botão faça outra coisa
                e.stopPropagation(); // Impede que outro script bloqueie
                document.body.classList.toggle('reading-mode');
                console.log('Modo leitura fácil ativado/desativado!');
            }
        }
    });

    function getFilteredServices() {
        const normalizedQuery = normalize(state.query);

        return services.filter((service) => {
            const text = normalize(`${service.title} ${service.description} ${service.keywords} ${service.tags.join(" ")}`);

            const matchesQuery = !normalizedQuery || text.includes(normalizedQuery);
            const matchesCategory = state.category === "todos" || service.category === state.category;
            const matchesType = state.type === "todos" || service.type === state.type;
            const matchesYear = state.year === "todos" || service.year === state.year;

            return matchesQuery && matchesCategory && matchesType && matchesYear;
        });
    }

    function createServiceCard(service) {
        return `
      <article class="service-card" data-category="${service.category}">
        <span class="service-card-icon">${service.icon}</span>
        <strong>${service.title}</strong>
        <p>${service.description}</p>

        <div class="service-tags">
          <span>${getCategoryLabel(service.category)}</span>
          <span>${service.type}</span>
          <span>${service.year}</span>
        </div>

        <a href="${service.href}" target="_blank" rel="noopener">Consultar</a>
      </article>
    `;
    }

    function renderActiveFilters() {
        if (!activeFilters) {
            return;
        }

        const filters = [];

        if (state.query.trim()) {
            filters.push({ label: `Busca: ${state.query}`, clear: "query" });
        }

        if (state.category !== "todos") {
            filters.push({ label: `Categoria: ${getCategoryLabel(state.category)}`, clear: "category" });
        }

        if (state.type !== "todos") {
            filters.push({ label: `Tipo: ${state.type}`, clear: "type" });
        }

        if (state.year !== "todos") {
            filters.push({ label: `Ano: ${state.year}`, clear: "year" });
        }

        activeFilters.innerHTML = filters
            .map((filter) => `<button type="button" data-clear="${filter.clear}">${filter.label} ×</button>`)
            .join("");
    }

    function getCategoryLabel(category) {
        const labels = {
            dinheiro: "Dinheiro público",
            contratacoes: "Contratações",
            pessoas: "Pessoas",
            fiscalizacao: "Fiscalização",
            dados: "Dados"
        };

        return labels[category] || "Todos";
    }

    function openAssistant() {
        if (!assistantPanel || !assistantToggle) {
            return;
        }

        assistantPanel.removeAttribute("hidden");
        assistantToggle.setAttribute("aria-expanded", "true");

        if (assistantInput) {
            assistantInput.focus();
        }
    }

    function closeAssistant(restoreFocus = true) {
        if (!assistantPanel || !assistantToggle) {
            return;
        }

        assistantPanel.setAttribute("hidden", "");
        assistantToggle.setAttribute("aria-expanded", "false");

        if (restoreFocus) {
            assistantToggle.focus();
        }
    }

    function handleAssistantAction(action) {
        if (action === "despesas") {
            applySearch("despesas");
            assistantReply("Mostrei consultas relacionadas a gastos públicos.");
        }

        if (action === "licitacoes") {
            applySearch("licitação");
            assistantReply("Mostrei consultas relacionadas a licitações e compras públicas.");
        }

        if (action === "servidores") {
            applySearch("remuneração");
            assistantReply("Mostrei consultas relacionadas a servidores e remuneração.");
        }

        if (action === "obras") {
            applySearch("obras");
            assistantReply("Mostrei consultas relacionadas a obras públicas.");
        }

        if (action === "dados") {
            applySearch("dados abertos");
            assistantReply("Mostrei consultas relacionadas a dados abertos.");
        }

        if (action === "visual") {
            body.classList.add("contrast-mode", "relaxed-mode");
            setScale(Math.max(scale, 1.16));
            assistantReply("Ativei contraste, fonte maior e espaçamento ampliado.");
        }

        if (action === "teclado") {
            assistantReply("Use Tab para avançar, Shift + Tab para voltar, Enter para acionar botões e Esc para fechar janelas.");
        }

        if (action === "libras") {
            assistantReply("O portal pode ser integrado ao VLibras para apoio em Libras.");
        }

        if (action === "esic") {
            window.open("http://www.e-sic.ma.gov.br/sistema/site/index.aspx?ReturnUrl=%2fsistema%2f", "_blank");
        }

        if (action === "eouv") {
            window.open("http://www.ouvidorias.ma.gov.br/Ouvidorias/publico/Manifestacao/RegistrarManifestacao.aspx?ReturnUrl=%2fOuvidorias%2f", "_blank");
        }
    }

    function handleAssistantText(text) {
        const normalized = normalize(text);

        if (hasAny(normalized, ["gasto", "despesa", "dinheiro", "orcamento", "pagamento"])) {
            handleAssistantAction("despesas");
            return;
        }

        if (hasAny(normalized, ["licitacao", "contrato", "compra", "empresa", "fornecedor"])) {
            handleAssistantAction("licitacoes");
            return;
        }

        if (hasAny(normalized, ["servidor", "remuneracao", "cargo", "beneficio", "diaria"])) {
            handleAssistantAction("servidores");
            return;
        }

        if (hasAny(normalized, ["obra", "fiscalizacao", "sancao", "controle"])) {
            handleAssistantAction("obras");
            return;
        }

        if (hasAny(normalized, ["dados", "baixar", "download", "csv", "planilha", "exportar"])) {
            handleAssistantAction("dados");
            return;
        }

        applySearch(text);
        assistantReply(`Busquei por “${text}”. Você pode refinar usando categoria, tipo ou ano.`);
    }

    function addAssistantMessage(text, sender) {
        if (!assistantMessages) {
            return;
        }

        const message = document.createElement("div");
        message.className = `assistant-message ${sender}`;
        message.textContent = text;
        assistantMessages.appendChild(message);
        assistantMessages.scrollTop = assistantMessages.scrollHeight;
    }

    function assistantReply(text) {
        lastAssistantText = text;

        if (assistantLive) {
            assistantLive.textContent = text;
        }

        addAssistantMessage(text, "bot");
    }

    function speak(text) {
        if (!("speechSynthesis" in window)) {
            assistantReply("Seu navegador não oferece leitura de voz neste momento.");
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "pt-BR";
        utterance.rate = 0.95;

        window.speechSynthesis.speak(utterance);
        document.addEventListener("DOMContentLoaded", () => {
            const assistantTabs = document.querySelectorAll("[data-assistant-tab]");
            const assistantPanels = document.querySelectorAll("[data-assistant-panel]");
            const assistantForm = document.getElementById("assistantForm");
            const assistantInput = document.getElementById("assistantInput");
            const assistantMessages = document.getElementById("assistantMessages");
            const assistantLive = document.getElementById("assistantLive");
            const assistantClearChat = document.getElementById("assistantClearChat");
            const assistantReadLast = document.getElementById("assistantReadLast");
            const assistantAccessibleMode = document.getElementById("assistantAccessibleMode");

            let lastAssistantText = "Olá! Eu sou a Juçara. Posso ajudar você a encontrar consultas, explicar termos do portal ou ativar recursos de acessibilidade.";

            const terms = {
                licitacao: "Licitação é o processo usado pelo governo para comprar produtos ou contratar serviços de forma pública.",
                renuncia: "Renúncia fiscal é um benefício concedido pelo Estado que reduz parte da arrecadação.",
                sancao: "Sanção é uma punição aplicada a empresas, pessoas ou instituições por alguma irregularidade.",
                convenio: "Convênio é uma parceria ou repasse feito entre o governo e outra instituição.",
                despesa: "Despesa pública é o dinheiro gasto pelo governo em serviços, obras, salários, compras e programas.",
                receita: "Receita pública é o dinheiro que entra para o Estado, como impostos, taxas e transferências."
            };

            assistantTabs.forEach((tab) => {
                tab.addEventListener("click", () => {
                    const selected = tab.dataset.assistantTab;

                    assistantTabs.forEach((item) => item.classList.remove("is-active"));
                    tab.classList.add("is-active");

                    assistantPanels.forEach((panel) => {
                        panel.hidden = panel.dataset.assistantPanel !== selected;
                    });
                });
            });

            document.querySelectorAll("[data-assistant-query]").forEach((button) => {
                button.addEventListener("click", () => {
                    const query = button.dataset.assistantQuery;
                    assistantApplySearch(query);
                    assistantReply(`Mostrei resultados relacionados a “${query}”.`);
                });
            });

            document.querySelectorAll("[data-assistant-term]").forEach((button) => {
                button.addEventListener("click", () => {
                    const term = button.dataset.assistantTerm;
                    assistantReply(terms[term]);
                });
            });

            document.querySelectorAll("[data-assistant-a11y]").forEach((button) => {
                button.addEventListener("click", () => {
                    handleAssistantAccessibility(button.dataset.assistantA11y);
                });
            });

            if (assistantForm) {
                assistantForm.addEventListener(
                    "submit",
                    (event) => {
                        event.preventDefault();
                        event.stopImmediatePropagation();

                        const text = assistantInput.value.trim();

                        if (!text) {
                            return;
                        }

                        assistantMessage(text, "user");
                        assistantInput.value = "";
                        assistantHandleText(text);
                    },
                    true
                );
            }

            if (assistantAccessibleMode) {
                assistantAccessibleMode.addEventListener("click", () => {
                    document.body.classList.add("contrast-mode", "relaxed-mode", "reading-mode");
                    clickIfExists("#increaseFont");
                    assistantReply("Ativei modo acessível com contraste, leitura fácil, mais espaçamento e fonte ampliada.");
                });
            }

            if (assistantReadLast) {
                assistantReadLast.addEventListener("click", () => {
                    assistantSpeak(lastAssistantText);
                });
            }

            if (assistantClearChat) {
                assistantClearChat.addEventListener("click", () => {
                    assistantMessages.innerHTML = `
        <div class="assistant-message bot">
          Conversa limpa. Como posso ajudar agora?
        </div>
      `;

                    lastAssistantText = "Conversa limpa. Como posso ajudar agora?";
                    assistantLive.textContent = lastAssistantText;
                });
            }

            function assistantHandleText(text) {
                const normalized = normalizeAssistantText(text);

                if (normalized.includes("o que e licitacao") || normalized.includes("licitacao significa")) {
                    assistantReply(terms.licitacao);
                    return;
                }

                if (normalized.includes("renuncia fiscal")) {
                    assistantReply(terms.renuncia);
                    return;
                }

                if (normalized.includes("sancao") || normalized.includes("punicao")) {
                    assistantReply(terms.sancao);
                    return;
                }

                if (normalized.includes("convenio")) {
                    assistantReply(terms.convenio);
                    return;
                }

                if (hasAssistantTerm(normalized, ["gasto", "despesa", "dinheiro", "orcamento", "pagamento"])) {
                    assistantApplySearch("despesas");
                    assistantReply("Mostrei consultas relacionadas a gastos públicos.");
                    return;
                }

                if (hasAssistantTerm(normalized, ["licitacao", "contrato", "compra", "empresa", "fornecedor"])) {
                    assistantApplySearch("licitação");
                    assistantReply("Mostrei consultas relacionadas a licitações e contratos.");
                    return;
                }

                if (hasAssistantTerm(normalized, ["servidor", "remuneracao", "cargo", "beneficio", "diaria"])) {
                    assistantApplySearch("remuneração");
                    assistantReply("Mostrei consultas relacionadas a servidores, remuneração e diárias.");
                    return;
                }

                if (hasAssistantTerm(normalized, ["obra", "fiscalizacao", "controle"])) {
                    assistantApplySearch("obras");
                    assistantReply("Mostrei consultas relacionadas a obras e fiscalização.");
                    return;
                }

                if (hasAssistantTerm(normalized, ["dados", "baixar", "download", "csv", "planilha", "exportar"])) {
                    assistantApplySearch("dados abertos");
                    assistantReply("Mostrei consultas relacionadas a dados abertos.");
                    return;
                }

                if (hasAssistantTerm(normalized, ["baixa visao", "cego", "contraste", "fonte", "acessibilidade"])) {
                    handleAssistantAccessibility("visual");
                    return;
                }

                if (hasAssistantTerm(normalized, ["teclado", "tab", "sem mouse"])) {
                    handleAssistantAccessibility("keyboard");
                    return;
                }

                assistantApplySearch(text);
                assistantReply(`Busquei por “${text}”. Você pode refinar usando categoria, tipo ou ano.`);
            }

            function handleAssistantAccessibility(action) {
                if (action === "visual") {
                    document.body.classList.add("contrast-mode", "relaxed-mode");
                    clickIfExists("#increaseFont");
                    assistantReply("Ativei contraste, aumentei a fonte e ampliei o espaçamento.");
                }

                if (action === "contrast") {
                    clickIfExists("#toggleContrast");
                    assistantReply("Alto contraste ativado ou desativado.");
                }

                if (action === "easy") {
                    clickIfExists("#toggleReadingMode");
                    assistantReply("Leitura fácil ativada ou desativada.");
                }

                if (action === "spacing") {
                    clickIfExists("#toggleSpacing");
                    assistantReply("Espaçamento ampliado ativado ou desativado.");
                }

                if (action === "keyboard") {
                    assistantReply("Use Tab para avançar, Shift + Tab para voltar, Enter para acionar botões e Esc para fechar janelas.");
                }

                if (action === "libras") {
                    const vlibras = document.querySelector("[vw-access-button]");
                    if (vlibras) {
                        vlibras.click();
                        assistantReply("Abri o recurso VLibras.");
                    } else {
                        assistantReply("O portal pode integrar o VLibras para apoio em Libras.");
                    }
                }

                if (action === "esic") {
                    window.open("http://www.e-sic.ma.gov.br/sistema/site/index.aspx?ReturnUrl=%2fsistema%2f", "_blank");
                    assistantReply("Abri o E-Sic para pedido de acesso à informação.");
                }

                if (action === "eouv") {
                    window.open("http://www.ouvidorias.ma.gov.br/Ouvidorias/publico/Manifestacao/RegistrarManifestacao.aspx?ReturnUrl=%2fOuvidorias%2f", "_blank");
                    assistantReply("Abri o E-Ouv para manifestações, denúncias, sugestões ou elogios.");
                }
            }

            function assistantApplySearch(query) {
                const heroQuery = document.getElementById("heroQuery");
                const mainQuery = document.getElementById("mainQuery");
                const mainSearch = document.getElementById("mainSearch");

                if (heroQuery) {
                    heroQuery.value = query;
                }

                if (mainQuery) {
                    mainQuery.value = query;
                }

                if (mainSearch) {
                    mainSearch.dispatchEvent(
                        new Event("submit", {
                            bubbles: true,
                            cancelable: true
                        })
                    );
                }

                const consultas = document.getElementById("consultas");

                if (consultas) {
                    consultas.scrollIntoView({ behavior: "smooth" });
                }
            }

            function assistantMessage(text, sender) {
                const message = document.createElement("div");
                message.className = `assistant-message ${sender}`;
                message.textContent = text;
                assistantMessages.appendChild(message);
                assistantMessages.scrollTop = assistantMessages.scrollHeight;
            }

            function assistantReply(text) {
                if (!text) {
                    return;
                }

                lastAssistantText = text;
                assistantLive.textContent = text;
                assistantMessage(text, "bot");
            }

            function assistantSpeak(text) {
                if (!("speechSynthesis" in window)) {
                    assistantReply("Seu navegador não oferece leitura de voz neste momento.");
                    return;
                }

                window.speechSynthesis.cancel();

                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = "pt-BR";
                utterance.rate = 0.95;

                window.speechSynthesis.speak(utterance);
            }

            function clickIfExists(selector) {
                const element = document.querySelector(selector);

                if (element) {
                    element.click();
                }
            }

            function normalizeAssistantText(text) {
                return text
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .trim();
            }

            function hasAssistantTerm(text, terms) {
                return terms.some((term) => text.includes(term));
            }
        });
    }

    function normalize(text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function hasAny(text, terms) {
        return terms.some((term) => text.includes(term));
    }
});