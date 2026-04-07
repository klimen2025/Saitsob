const GOOGLE_SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycbyqNk2lbX0InBvvLM3Au5m1OHHWegJ-2_aqdQ1WPjsx5-1SLVrZzfIQa2pgJjW7UPlS/exec";

const pages = {
    home: {
        title: "F5 | Обнови бизнес с AI",
        render: () => `
            <div class="hero">
                <div class="container hero-grid">
                    <div class="hero-content">
                        <span class="badge">⚡ AI & WEB-ТЕХНОЛОГИИ</span>
                        <h1>Обновляй бизнес с <span class="gradient">F5</span></h1>
                        <p class="hero-desc">Разрабатываем сайты, внедряем искусственный интеллект и масштабируем продажи.</p>
                        <div class="btn-group">
                            <button class="btn-primary" data-page="contact">🚀 Заказать консультацию</button>
                            <button class="btn-outline" data-page="cases">📁 Посмотреть кейсы</button>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="key-animation">⟳ F5</div>
                        <div style="margin-top: 16px; color: #666;">Перезагрузка бизнеса</div>
                    </div>
                </div>
            </div>
            <section><div class="container"><h2 class="section-title">Почему F5</h2><div class="stats-grid"><div class="stat-item"><div class="stat-number">40%</div><div class="stat-label">экономии времени</div></div><div class="stat-item"><div class="stat-number">2.5x</div><div class="stat-label">рост конверсии</div></div><div class="stat-item"><div class="stat-number">100+</div><div class="stat-label">проектов</div></div></div></div></section>
            <section><div class="container"><h2 class="section-title">Что мы делаем</h2><div class="services-grid"><div class="service-card"><div class="service-icon">🤖</div><h3>AI интеграция</h3><p>Внедрение нейросетей, чат-ботов, автоматизация</p></div><div class="service-card"><div class="service-icon">💻</div><h3>Разработка сайтов</h3><p>Современные, быстрые, продающие сайты</p></div><div class="service-card"><div class="service-icon">🔄</div><h3>Реконструкция</h3><p>Обновление дизайна и функционала</p></div><div class="service-card"><div class="service-icon">🎯</div><h3>Консультации</h3><p>Аудит, стратегия, AI roadmap</p></div></div></div></section>
        `
    },
    services: {
        title: "F5 | Услуги",
        render: () => `<section><div class="container"><h2 class="section-title">Наши услуги</h2><div class="services-grid"><div class="service-card"><div class="service-icon">🤖</div><h3>AI интеграция</h3><p>Чат-боты, голосовые помощники, прогнозная аналитика</p></div><div class="service-card"><div class="service-icon">💻</div><h3>Разработка сайтов</h3><p>Next.js, React, Tailwind, админка</p></div><div class="service-card"><div class="service-icon">🔄</div><h3>Реконструкция</h3><p>Миграция на современный стек, ускорение до 3x</p></div><div class="service-card"><div class="service-icon">🎯</div><h3>Консалтинг</h3><p>Цифровая стратегия, внедрение AI</p></div><div class="service-card"><div class="service-icon">📊</div><h3>Аналитика + BI</h3><p>Дашборды, прогнозы продаж</p></div><div class="service-card"><div class="service-icon">☁️</div><h3>Облачные решения</h3><p>DevOps, Docker, AWS</p></div></div></div></section>`
    },
    cases: {
        title: "F5 | Кейсы",
        render: () => `<section><div class="container"><h2 class="section-title">Кейсы</h2><div class="services-grid"><div class="service-card"><h3>🏥 AI-чат для клиники</h3><p>Ответ 15 мин → 15 сек. Записей +47%</p></div><div class="service-card"><h3>🛍️ Редизайн магазина</h3><p>Скорость 5 сек → 1.2 сек. Конверсия +63%</p></div><div class="service-card"><h3>🏭 AI прогноз спроса</h3><p>Склад -34%. Прибыль +21%</p></div><div class="service-card"><h3>📈 SEO-реконструкция</h3><p>Трафик +210% за 4 месяца</p></div></div><div class="testimonials-grid" style="margin-top:48px;"><div class="testi-card"><div class="testi-text">«После внедрения AI-помощника — в 3 раза больше заявок. F5 — реальный ускоритель.»</div><div class="testi-author">— Анна Смирнова, CEO</div></div><div class="testi-card"><div class="testi-text">«Сайт с нуля. Конверсия +50%. Команда F5 работает быстро и четко.»</div><div class="testi-author">— Дмитрий К., сеть кофеен</div></div></div></div></section>`
    },
    tech: {
        title: "F5 | Технологии",
        render: () => `<section><div class="container"><h2 class="section-title">Технологии</h2><div class="tech-stack"><span class="tech-badge">React / Next.js</span><span class="tech-badge">Node.js / Python</span><span class="tech-badge">OpenAI / ChatGPT API</span><span class="tech-badge">LangChain</span><span class="tech-badge">PostgreSQL</span><span class="tech-badge">Docker / AWS</span></div><div class="stats-grid"><div class="stat-item"><div class="stat-number">99.9%</div><div class="stat-label">доступность</div></div><div class="stat-item"><div class="stat-number">24/7</div><div class="stat-label">мониторинг</div></div></div></div></section>`
    },
    contact: {
        title: "F5 | Контакты",
        render: () => `<section><div class="container"><h2 class="section-title">Свяжитесь с нами</h2><div class="contact-form"><form id="callbackFormInner"><div class="form-group"><input type="text" placeholder="Ваше имя" id="nameInner" required></div><div class="form-group"><input type="tel" placeholder="Телефон / Telegram" id="contactInner" required></div><div class="form-group"><textarea rows="3" placeholder="Кратко опишите задачу" id="taskInner"></textarea></div><button type="submit" class="btn-primary" style="width:100%;">📩 Отправить заявку</button></form></div><div style="text-align:center; margin-top:40px;"><p>📧 partners_f5@mail.ru<br>📱 Telegram: @tir1aS</p></div></div></section>`
    },
    privacy: {
        title: "F5 | Политика",
        render: () => `<section><div class="container"><h2 class="section-title">Политика конфиденциальности</h2><div style="background:#0a0a0a; border-radius:24px; padding:40px;"><p>Мы уважаем вашу конфиденциальность. Данные используются только для связи.</p><p style="margin-top:16px;">Вы можете запросить удаление данных: partners_f5@mail.ru</p></div></div></section>`
    },
    offer: {
        title: "F5 | Оферта",
        render: () => `<section><div class="container"><h2 class="section-title">Публичная оферта</h2><div style="background:#0a0a0a; border-radius:24px; padding:40px;"><p>Данный сайт является публичной офертой. Условия предоставляются по запросу.</p><p style="margin-top:16px;">Подробности: partners_f5@mail.ru</p></div></div></section>`
    }
};

function navigateTo(pageId) {
    if (!pages[pageId]) return;
    document.title = pages[pageId].title;
    const container = document.getElementById('pageContainer');
    container.style.opacity = '0';
    setTimeout(() => {
        container.innerHTML = pages[pageId].render();
        attachEvents();
        container.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function attachEvents() {
    document.querySelectorAll('[data-page]').forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            navigateTo(el.getAttribute('data-page'));
        };
    });
    const form = document.getElementById('callbackFormInner');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('nameInner')?.value || '';
            const contact = document.getElementById('contactInner')?.value || '';
            const task = document.getElementById('taskInner')?.value || '';
            if (!name || !contact) {
                alert('Пожалуйста, заполните имя и телефон');
                return;
            }
            if (GOOGLE_SHEETS_WEBHOOK && GOOGLE_SHEETS_WEBHOOK.includes('formResponse')) {
                const fd = new FormData();
                fd.append('entry.123456789', name);
                fd.append('entry.987654321', contact);
                fd.append('entry.555555555', task);
                fetch(GOOGLE_SHEETS_WEBHOOK, { method: 'POST', mode: 'no-cors', body: fd });
            }
            alert('Спасибо! Мы свяжемся с вами.');
            form.reset();
        };
    }
}

navigateTo('home');

const menuBtn = document.getElementById('menuToggle');
const navDiv = document.getElementById('navLinks');
if (menuBtn) {
    menuBtn.onclick = () => {
        if (navDiv.style.display === 'flex') navDiv.style.display = 'none';
        else {
            navDiv.style.display = 'flex';
            navDiv.style.flexDirection = 'column';
            navDiv.style.position = 'absolute';
            navDiv.style.top = '70px';
            navDiv.style.left = '20px';
            navDiv.style.right = '20px';
            navDiv.style.backgroundColor = '#000';
            navDiv.style.padding = '24px';
            navDiv.style.borderRadius = '24px';
            navDiv.style.border = '1px solid #222';
            navDiv.style.gap = '24px';
            navDiv.style.zIndex = '99';
        }
    };
}

window.addEventListener('load', attachEvents);