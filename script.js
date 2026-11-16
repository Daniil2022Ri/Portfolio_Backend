const { useState, useEffect, useRef, useCallback, createContext, useContext } = React;

/* ==========================================================================
   CONTENT
   ========================================================================== */

const UI = {
  ru: {
    brandRole: 'Java Backend',
    nav: [
      { id: 'flagship', num: '01', label: 'Кейс' },
      { id: 'projects', num: '02', label: 'Проекты' },
      { id: 'about', num: '03', label: 'О себе' },
      { id: 'contact', num: '04', label: 'Контакты' }
    ],
    hero: {
      status: 'Открыт к предложениям',
      name: 'Даниил Рыбьяков',
      role: 'Java Backend / Fullstack Engineer',
      lead: 'Собираю серверные системы на Java и Spring: микросервисы, DDD-границы, JWT, аудит и тесты. В портфолио — 12 проектов, включая банковский backend из семи сервисов, и у каждого есть технический разбор.',
      ctaCases: 'Смотреть кейсы',
      ctaContact: 'Связаться',
      stats: [
        ['7', 'микросервисов', 'в Bank-DDD'],
        ['207', 'backend-тестов', 'unit · web · integration'],
        ['80,3%', 'покрытие строк', 'JaCoCo-гейт в CI'],
        ['12', 'проектов', 'backend · web · Android']
      ],
      panelTag: 'FLAGSHIP · BANK-DDD',
      panelTitle: 'bank-ddd / architecture',
      panelCmd: 'docker compose up --build',
      panelOk: '✔ 7 services · postgres:5433 · web:3000',
      panelNote: '// один compose-файл поднимает базу, сервисы и React-кабинет',
      scroll: 'Прокрутите вниз'
    },
    flagship: {
      label: '01 // FLAGSHIP',
      title: 'Флагманский',
      accent: 'кейс',
      lead: 'Полный путь от схемы БД до работающего REST API: семь bounded contexts, собственные схемы в PostgreSQL, JWT, сквозной AOP-аудит и 207 тестов. Проект, который удобно разбирать на собеседовании.',
      badge: 'FLAGSHIP',
      titleMain: 'Bank',
      titleAccent: 'DDD',
      subtitle: 'Банковский backend на семи сервисах',
      desc: 'Каждый сервис — отдельное Spring Boot приложение со своей схемой, своим REST API и своим набором тестов. Общая PostgreSQL, Liquibase-миграции, JWT на входе и аудит как сквозной срез.',
      archTitle: 'BOUNDED CONTEXTS',
      archNote: '7 сервисов · 7 схем · 1 PostgreSQL',
      specTitle: 'Паспорт проекта',
      spec: [
        ['Язык', 'Java 17 · Spring Boot 3.2'],
        ['Данные', 'PostgreSQL · Liquibase'],
        ['Безопасность', 'JWT · Spring Security'],
        ['Аудит', 'Spring AOP → history'],
        ['Качество', '207 тестов · Checkstyle 0'],
        ['Запуск', 'docker compose up --build']
      ],
      whyTitle: 'Почему это сильный проект',
      dossierBtn: 'Открыть техпаспорт',
      github: 'GitHub'
    },
    projects: {
      label: '02 // PROJECTS',
      title: 'Проекты',
      accent: 'с техпаспортом',
      lead: 'Двенадцать проектов: backend, интерфейсы и Android. У каждого — техпаспорт: задача, устройство, инженерные решения и что именно он демонстрирует.',
      all: 'Все',
      dossier: 'Техпаспорт',
      code: 'Код',
      demo: 'Демо',
      empty: 'В этой категории пока пусто',
      count: 'проектов'
    },
    dossier: {
      task: '01 // Задача',
      built: '02 // Что внутри',
      why: '03 // Почему это хорошо',
      quality: '04 // Качество и проверка',
      stack: 'Стек',
      github: 'Открыть код',
      demo: 'Открыть демо',
      close: 'Закрыть'
    },
    about: {
      label: '03 // ABOUT',
      title: 'Инженерный',
      accent: 'подход',
      p1: 'Пишу backend на Java 17/21 и Spring. Начинаю не с контроллеров, а с границ домена и схемы данных: сначала контексты, миграции и контракты API, потом код.',
      p2: 'Люблю, когда проект поднимается одной командой, а качество проверяется автоматически: тесты, Checkstyle, JaCoCo-гейт и CI. Во фронтенде держу тот же уровень — аккуратные состояния, доступная разметка и предсказуемые анимации.',
      focus: 'Фокус: микросервисы, DDD, отказоустойчивость, тесты и CI.',
      principlesTitle: 'Принципы',
      principles: [
        ['Границы прежде кода', 'Сначала bounded contexts и схема БД, потом сервисы. Разнести домены позже дороже, чем сразу.'],
        ['Тесты как контракт', 'Unit на бизнес-логику, MockMvc на API, интеграционные на реальные миграции. Покрытие — гейт, а не отчёт.'],
        ['Наблюдаемость и аудит', 'Сквозной AOP-аудит, Actuator на отдельном порту, Swagger у каждого сервиса.'],
        ['Воспроизводимость', 'Docker Compose, multi-stage Dockerfile, CI на каждый push. Проект должен запускаться, а не «у меня работало».']
      ],
      skillsTitle: 'Технологический стек'
    },
    contact: {
      label: '04 // CONTACT',
      title: 'Обсудим',
      accent: 'задачу?',
      text: 'Открыт к backend и fullstack ролям. На собеседовании готов разобрать любое решение из Bank-DDD — от Liquibase-чейнджсетов и AOP-аудита до тестовой пирамиды.',
      avail: 'Отвечаю в течение дня',
      copy: 'Скопировать email',
      copied: 'Скопировано',
      mail: 'Email',
      phone: 'Телефон',
      telegram: 'Telegram',
      github: 'GitHub'
    },
    footer: {
      rights: '© 2026 Даниил Рыбьяков',
      built: 'React · без сборщика',
      top: 'Наверх'
    },
    status: {
      pet: 'pet-проект',
      demo: 'demo'
    }
  },

  en: {
    brandRole: 'Java Backend',
    nav: [
      { id: 'flagship', num: '01', label: 'Case' },
      { id: 'projects', num: '02', label: 'Projects' },
      { id: 'about', num: '03', label: 'About' },
      { id: 'contact', num: '04', label: 'Contact' }
    ],
    hero: {
      status: 'Open to opportunities',
      name: 'Daniil Rybiakov',
      role: 'Java Backend / Fullstack Engineer',
      lead: 'I build server-side systems with Java and Spring: microservices, DDD boundaries, JWT, audit and tests. The portfolio holds 12 projects, including a seven-service banking backend — each with a technical breakdown.',
      ctaCases: 'View cases',
      ctaContact: 'Get in touch',
      stats: [
        ['7', 'microservices', 'in Bank-DDD'],
        ['207', 'backend tests', 'unit · web · integration'],
        ['80.3%', 'line coverage', 'JaCoCo gate in CI'],
        ['12', 'projects', 'backend · web · Android']
      ],
      panelTag: 'FLAGSHIP · BANK-DDD',
      panelTitle: 'bank-ddd / architecture',
      panelCmd: 'docker compose up --build',
      panelOk: '✔ 7 services · postgres:5433 · web:3000',
      panelNote: '// a single compose file starts the database, services and React UI',
      scroll: 'Scroll down'
    },
    flagship: {
      label: '01 // FLAGSHIP',
      title: 'Flagship',
      accent: 'case',
      lead: 'The whole path from a database schema to a working REST API: seven bounded contexts, their own PostgreSQL schemas, JWT, cross-cutting AOP audit and 207 tests. A project that is easy to dissect in an interview.',
      badge: 'FLAGSHIP',
      titleMain: 'Bank',
      titleAccent: 'DDD',
      subtitle: 'Banking backend across seven services',
      desc: 'Each service is a separate Spring Boot application with its own schema, REST API and test suite. One PostgreSQL, Liquibase migrations, JWT at the edge and audit as a cross-cutting concern.',
      archTitle: 'BOUNDED CONTEXTS',
      archNote: '7 services · 7 schemas · 1 PostgreSQL',
      specTitle: 'Project passport',
      spec: [
        ['Language', 'Java 17 · Spring Boot 3.2'],
        ['Data', 'PostgreSQL · Liquibase'],
        ['Security', 'JWT · Spring Security'],
        ['Audit', 'Spring AOP → history'],
        ['Quality', '207 tests · Checkstyle 0'],
        ['Run', 'docker compose up --build']
      ],
      whyTitle: 'Why this is a strong project',
      dossierBtn: 'Open tech dossier',
      github: 'GitHub'
    },
    projects: {
      label: '02 // PROJECTS',
      title: 'Projects',
      accent: 'with tech dossiers',
      lead: 'Twelve projects: backend, interfaces and Android. Each one has a tech dossier — the task, how it is built, engineering decisions and what exactly it demonstrates.',
      all: 'All',
      dossier: 'Dossier',
      code: 'Code',
      demo: 'Demo',
      empty: 'Nothing in this category yet',
      count: 'projects'
    },
    dossier: {
      task: '01 // Task',
      built: '02 // What is inside',
      why: '03 // Why it is good',
      quality: '04 // Quality & verification',
      stack: 'Stack',
      github: 'Open code',
      demo: 'Open demo',
      close: 'Close'
    },
    about: {
      label: '03 // ABOUT',
      title: 'Engineering',
      accent: 'approach',
      p1: 'I write backend in Java 17/21 and Spring. I start with domain boundaries and the data schema, not controllers: contexts, migrations and API contracts first, code second.',
      p2: 'I like projects that start with one command and check their own quality: tests, Checkstyle, a JaCoCo gate and CI. On the frontend I keep the same bar — careful states, accessible markup and predictable motion.',
      focus: 'Focus: microservices, DDD, resilience, tests and CI.',
      principlesTitle: 'Principles',
      principles: [
        ['Boundaries before code', 'Bounded contexts and the DB schema first, services second. Splitting domains later costs more.'],
        ['Tests as a contract', 'Unit tests for business logic, MockMvc for API, integration tests against real migrations. Coverage is a gate, not a report.'],
        ['Observability & audit', 'Cross-cutting AOP audit, Actuator on a separate port, Swagger for every service.'],
        ['Reproducibility', 'Docker Compose, multi-stage Dockerfile, CI on every push. A project must start, not “worked on my machine”.']
      ],
      skillsTitle: 'Technology stack'
    },
    contact: {
      label: '04 // CONTACT',
      title: 'Let’s build',
      accent: 'something?',
      text: 'Open to backend and fullstack roles. In an interview I can walk through any decision in Bank-DDD — from Liquibase changesets and AOP audit to the test pyramid.',
      avail: 'I reply within a day',
      copy: 'Copy email',
      copied: 'Copied',
      mail: 'Email',
      phone: 'Phone',
      telegram: 'Telegram',
      github: 'GitHub'
    },
    footer: {
      rights: '© 2026 Daniil Rybiakov',
      built: 'React · no bundler',
      top: 'Back to top'
    },
    status: {
      pet: 'pet project',
      demo: 'demo'
    }
  }
};

const EMAIL = 'hhffcgubv@gmail.com';

const SERVICES = [
  { name: 'authorization', port: '8087', role: { ru: 'JWT · роли', en: 'JWT · roles' } },
  { name: 'profile', port: '8089', role: { ru: 'паспорт · адреса', en: 'passport · addresses' } },
  { name: 'account', port: '8085', role: { ru: 'банковские счета', en: 'bank accounts' } },
  { name: 'transfer', port: '8092', role: { ru: 'переводы', en: 'transfers' } },
  { name: 'antifraud', port: '8086', role: { ru: 'риск-скоринг', en: 'risk scoring' } },
  { name: 'history', port: '8088', role: { ru: 'агрегация аудита', en: 'audit aggregation' } },
  { name: 'public-info', port: '8091', role: { ru: 'отделения · банкоматы', en: 'branches · ATMs' } }
];

const SKILLS = [
  {
    title: { ru: 'Core Backend', en: 'Core Backend' },
    items: ['Java 17/21', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Kotlin', 'REST API']
  },
  {
    title: { ru: 'Данные и сообщения', en: 'Data & messaging' },
    items: ['PostgreSQL', 'Redis', 'Apache Kafka', 'Hibernate/JPA', 'Liquibase', 'Flyway']
  },
  {
    title: { ru: 'Архитектура', en: 'Architecture' },
    items: ['Microservices', 'DDD', 'CQRS', 'Event-Driven', 'REST', 'Bounded contexts']
  },
  {
    title: { ru: 'Frontend', en: 'Frontend' },
    items: ['React 18', 'Vue 3', 'TypeScript', 'CSS Grid', 'Vite', 'Accessibility']
  },
  {
    title: { ru: 'Android', en: 'Android' },
    items: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM', 'Coroutines', 'Flow']
  },
  {
    title: { ru: 'Качество и DevOps', en: 'Quality & DevOps' },
    items: ['JUnit 5', 'Mockito', 'MockMvc', 'JaCoCo', 'Checkstyle', 'Docker', 'GitHub Actions']
  }
];

const MARQUEE = [
  'Java 17/21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Liquibase', 'Kafka',
  'Redis', 'MapStruct', 'JUnit 5', 'Docker', 'GitHub Actions', 'React 18',
  'TypeScript', 'Vue 3', 'Jetpack Compose'
];

/* ==========================================================================
   PROJECTS
   ========================================================================== */

const PROJECTS = [
  {
    id: 'bank-ddd',
    featured: true,
    cat: 'backend',
    status: 'pet',
    color: '#ff9d00',
    title: 'Bank-DDD',
    tagline: { ru: 'Банковский backend · 7 bounded contexts', en: 'Banking backend · 7 bounded contexts' },
    desc: {
      ru: 'Семь микросервисов с собственными схемами, JWT-аутентификацией, AOP-аудитом и полной тестовой пирамидой.',
      en: 'Seven microservices with their own schemas, JWT auth, AOP audit and a full test pyramid.'
    },
    stack: ['Java 17', 'Spring Boot 3.2', 'PostgreSQL', 'Liquibase', 'JWT', 'MapStruct', 'Docker', 'GitHub Actions'],
    metrics: [
      { v: '7', l: { ru: 'сервисов', en: 'services' } },
      { v: '207', l: { ru: 'тестов', en: 'tests' } },
      { v: { ru: '80,3%', en: '80.3%' }, l: { ru: 'покрытие', en: 'coverage' } }
    ],
    snip: ['// bounded context', 'POST /api/authorization/auth', '→ 200 · Bearer JWT', 'POST /api/transfer/account', '→ 201 · audit → history'],
    links: { github: 'https://github.com/Daniil2022Ri/Bank-DDD' },
    dossier: {
      task: {
        ru: 'Собрать банковский backend не монолитом, а набором сервисов: у каждого своя схема в PostgreSQL, свой REST API и свои тесты. Схема БД из Liquibase-чейнджсетов используется как ТЗ, по которому проектируется домен.',
        en: 'Build a banking backend not as a monolith but as a set of services: each with its own PostgreSQL schema, REST API and tests. The database schema in Liquibase changesets is the spec the domain is designed against.'
      },
      built: {
        ru: [
          '7 bounded contexts — authorization, profile, account, transfer, antifraud, history, public-info — у каждого свой порт и схема.',
          'Слои controller → service (interface + impl) → repository → entity, DTO с bean-валидацией, MapStruct на этапе компиляции.',
          'JWT и RBAC в authorization; аудит через Spring AOP пишет старое и новое состояние сущности в JSON.',
          'Liquibase-миграции, единый ErrorResponse через @RestControllerAdvice, Swagger UI и Actuator на отдельном порту.',
          'docker-compose поднимает PostgreSQL, 7 сервисов и React-кабинет; multi-stage Dockerfile собирает любой модуль.'
        ],
        en: [
          '7 bounded contexts — authorization, profile, account, transfer, antifraud, history, public-info — each with its own port and schema.',
          'Layered controller → service (interface + impl) → repository → entity, DTOs with bean validation, compile-time MapStruct mapping.',
          'JWT and RBAC in authorization; Spring AOP audit stores the old and new entity state as JSON.',
          'Liquibase migrations, a single ErrorResponse via @RestControllerAdvice, Swagger UI and Actuator on a separate port.',
          'docker-compose starts PostgreSQL, all 7 services and the React UI; a multi-stage Dockerfile builds any module.'
        ]
      },
      why: {
        ru: [
          'Домен разложен по границам: деньги, профиль и антифрод не смешаны в одном сервисе — такую систему можно развивать командами.',
          'Качество закреплено процессом: 207 backend-тестов (unit, MockMvc, интеграционные на H2 с настоящими миграциями) и 39 тестов фронта.',
          'JaCoCo-гейт 60% и Checkstyle с нулём нарушений не дают качеству деградировать; CI гоняет всё на каждый push.',
          'Проект воспроизводим: docker compose up --build — и вся система, включая UI, доступна локально.'
        ],
        en: [
          'The domain is split by boundaries: money, profile and antifraud are not mixed in one service, so teams can own them independently.',
          'Quality is enforced by process: 207 backend tests (unit, MockMvc, integration on H2 with real migrations) and 39 frontend tests.',
          'A 60% JaCoCo gate and zero Checkstyle violations prevent quality from drifting; CI runs everything on every push.',
          'The project is reproducible: docker compose up --build makes the whole system, UI included, available locally.'
        ]
      },
      quality: {
        ru: '207 backend-тестов и 39 frontend-тестов, покрытие строк 80,3%, Checkstyle — 0 нарушений, GitHub Actions из двух job (backend + frontend), JaCoCo-отчёт в артефактах. Swagger UI у каждого сервиса.',
        en: '207 backend tests and 39 frontend tests, 80.3% line coverage, zero Checkstyle violations, a two-job GitHub Actions pipeline (backend + frontend) and JaCoCo reports in artifacts. Swagger UI for every service.'
      }
    }
  },
  {
    id: 'payment',
    cat: 'backend',
    status: 'pet',
    color: '#25e7ff',
    title: 'Payment Processing Service',
    tagline: { ru: 'RabbitMQ · Redis-кэш · JWT', en: 'RabbitMQ · Redis cache · JWT' },
    desc: {
      ru: 'Сервис обработки платежей: асинхронная обработка через RabbitMQ, кэш баланса в Redis, JWT-доступ и метрики Prometheus.',
      en: 'Payment processing service: asynchronous processing via RabbitMQ, balance cache in Redis, JWT access and Prometheus metrics.'
    },
    stack: ['Java 17', 'Spring Boot 3.3', 'RabbitMQ', 'PostgreSQL', 'Redis', 'JWT', 'Testcontainers'],
    metrics: [
      { v: { ru: '80%+', en: '80%+' }, l: { ru: 'покрытие', en: 'coverage' } },
      { v: '2', l: { ru: 'роли доступа', en: 'access roles' } }
    ],
    snip: ['// async, not blocking', 'POST /api/payments', '→ 202 · RabbitMQ queue', '→ balance cache: Redis'],
    links: { github: 'https://github.com/Daniil2022Ri/PaymentService' },
    dossier: {
      task: {
        ru: 'Сервис приёма платежей, которому нельзя терять деньги: запрос не должен обрабатываться дважды, а тяжёлая работа не должна держать HTTP-поток.',
        en: 'A payment intake service that cannot lose money: a request must not be processed twice, and heavy work must not hold the HTTP thread.'
      },
      built: {
        ru: [
          'JWT-аутентификация и роли USER / ADMIN на Spring Security.',
          'Асинхронная обработка через RabbitMQ: контроллер принимает платёж, listener выполняет списание.',
          'Redis-кэш баланса по схеме read-through / write-through.',
          'SQL-оптимизация: индексы, JOIN и EntityGraph; OpenAPI/Swagger и глобальный обработчик ошибок.',
          'Micrometer + Prometheus + Grafana и интеграционные тесты на Testcontainers (PostgreSQL и RabbitMQ).'
        ],
        en: [
          'JWT authentication and USER / ADMIN roles on Spring Security.',
          'Asynchronous processing via RabbitMQ: the controller accepts a payment, a listener performs the debit.',
          'Redis balance cache with a read-through / write-through strategy.',
          'SQL optimization with indexes, JOINs and EntityGraph; OpenAPI/Swagger and a global error handler.',
          'Micrometer + Prometheus + Grafana, plus Testcontainers integration tests for PostgreSQL and RabbitMQ.'
        ]
      },
      why: {
        ru: [
          'Асинхронность через RabbitMQ отделяет приём платежа от обработки: HTTP-ответ быстрый, работа не теряется.',
          'Кэш баланса read-through / write-through снимает нагрузку с PostgreSQL на самой горячей операции.',
          'Качество измеримо: JaCoCo-гейт 80% строк, Testcontainers с реальными PostgreSQL и RabbitMQ, CI/CD и Docker Compose.'
        ],
        en: [
          'RabbitMQ decouples payment intake from processing: the HTTP response is fast and the work is not lost.',
          'A read-through / write-through balance cache relieves PostgreSQL on the hottest operation.',
          'Quality is measurable: an 80% JaCoCo line gate, Testcontainers against real PostgreSQL and RabbitMQ, CI/CD and Docker Compose.'
        ]
      },
      quality: {
        ru: 'JaCoCo-гейт 80% строк, интеграционный тест на Testcontainers (PostgreSQL + RabbitMQ), Docker Compose для запуска, OpenAPI и метрики Prometheus.',
        en: 'An 80% JaCoCo line gate, a Testcontainers integration test (PostgreSQL + RabbitMQ), Docker Compose for startup, OpenAPI and Prometheus metrics.'
      }
    }
  },
  {
    id: 'ai-gateway',
    cat: 'backend',
    status: 'pet',
    color: '#b06bff',
    title: 'Reactive AI Assistant Backend',
    tagline: { ru: 'WebFlux · R2DBC · Resilience4j', en: 'WebFlux · R2DBC · Resilience4j' },
    desc: {
      ru: 'Реактивный backend AI-ассистента: неблокирующие вызовы OpenAI, контекст диалога в Redis и circuit breaker вокруг внешнего API.',
      en: 'Reactive AI assistant backend: non-blocking OpenAI calls, dialogue context in Redis and a circuit breaker around the external API.'
    },
    stack: ['Java 25', 'Spring Boot 3.5', 'WebFlux', 'R2DBC', 'Redis', 'Resilience4j', 'Prometheus'],
    snip: ['// reactive, non-blocking', 'POST /api/chat', '→ OpenAI (async)', '→ session → Redis'],
    links: { github: 'https://github.com/Daniil2022Ri/AIAssistantBackend' },
    dossier: {
      task: {
        ru: 'Реактивный backend для AI-ассистента: принять промпт, собрать контекст диалога и вернуть ответ, не блокируя поток на время запроса к LLM.',
        en: 'A reactive backend for an AI assistant: accept a prompt, assemble dialogue context and return an answer without blocking a thread while the LLM responds.'
      },
      built: {
        ru: [
          'Spring WebFlux и R2DBC: неблокирующий путь от контроллера до PostgreSQL.',
          'Redis хранит сессии и контекст диалога, PostgreSQL — историю сообщений.',
          'Resilience4j circuit breaker вокруг внешнего OpenAI API.',
          'Actuator + Prometheus для метрик, OpenAPI для контракта, Docker для запуска.'
        ],
        en: [
          'Spring WebFlux and R2DBC: a non-blocking path from controller to PostgreSQL.',
          'Redis stores sessions and dialogue context, PostgreSQL stores message history.',
          'A Resilience4j circuit breaker around the external OpenAI API.',
          'Actuator + Prometheus for metrics, OpenAPI for the contract, Docker for startup.'
        ]
      },
      why: {
        ru: [
          'Реактивный стек не держит поток, пока LLM думает, — сервис переживает много параллельных диалогов.',
          'Circuit breaker не даёт медленному внешнему API утянуть за собой всё приложение.',
          'Контекст в Redis, история в PostgreSQL: быстрый доступ отдельно от долговременного хранения.'
        ],
        en: [
          'The reactive stack does not hold a thread while the LLM thinks, so the service survives many concurrent dialogues.',
          'The circuit breaker prevents a slow external API from dragging the whole application down.',
          'Context in Redis, history in PostgreSQL: fast access separated from durable storage.'
        ]
      },
      quality: {
        ru: 'Проект про асинхронность и внешнюю интеграцию. В бэклоге, по README: SSE-стриминг, RAG и rate limiting — честно отмечено как следующие шаги.',
        en: 'A project about async and external integration. Per the README, SSE streaming, RAG and rate limiting are explicitly next steps.'
      }
    }
  },
  {
    id: 'antifraud',
    cat: 'backend',
    status: 'pet',
    color: '#ff6b9d',
    title: 'Bank Microservices Prototype',
    tagline: { ru: 'Первая версия банка · 7 сервисов', en: 'First bank iteration · 7 services' },
    desc: {
      ru: 'Каркас банковского backend из семи сервисов: Liquibase-схемы, AOP-аудит переводов и docker-compose. Отсюда вырос Bank-DDD.',
      en: 'A banking backend skeleton of seven services: Liquibase schemas, AOP transfer audit and docker-compose. This is where Bank-DDD grew from.'
    },
    stack: ['Java 17', 'Spring Boot', 'Liquibase', 'Spring AOP', 'PostgreSQL', 'Docker'],
    snip: ['// first iteration', 'transfer → audit (AOP)', 'account · profile · history', '→ grew into Bank-DDD'],
    links: { github: 'https://github.com/Daniil2022Ri/Bank_DDD_Antifraund/tree/main/antifraud' },
    dossier: {
      task: {
        ru: 'Собрать каркас банковского backend из семи сервисов и пройти путь до рабочего API: схемы, переводы, аудит. Это первая версия того, что позже стало Bank-DDD.',
        en: 'Build a banking backend skeleton of seven services and take it to a working API: schemas, transfers, audit. This is the first version of what later became Bank-DDD.'
      },
      built: {
        ru: [
          '7 модулей: account, antifraud, authorization, history, profile, public-info, transfer — у каждого своя Liquibase-схема.',
          'Аудит через Spring AOP: аннотация @Auditable и аспект, который пишет изменения в отдельный сервис истории.',
          'Три вида переводов — по счёту, карте и телефону; заготовки и документация по Kafka.',
          'docker-compose с PostgreSQL для локального запуска.'
        ],
        en: [
          '7 modules: account, antifraud, authorization, history, profile, public-info, transfer, each with its own Liquibase schema.',
          'Audit via Spring AOP: an @Auditable annotation and an aspect that writes changes to a separate history service.',
          'Three transfer types — account, card and phone; Kafka drafts and integration notes.',
          'docker-compose with PostgreSQL for local startup.'
        ]
      },
      why: {
        ru: [
          'Это честная первая итерация: видно, как проект прошёл путь от каркаса до Bank-DDD с тестами, CI и Docker.',
          'Аудит вынесен в аспект и не протекает в бизнес-логику — решение сохранено и в следующей версии.',
          'Liquibase-схемы как контракт между сервисами появились именно здесь.'
        ],
        en: [
          'An honest first iteration: you can see the path from a skeleton to Bank-DDD with tests, CI and Docker.',
          'Audit lives in an aspect and does not leak into business logic — the same decision survives in the next version.',
          'Liquibase schemas as the contract between services started here.'
        ]
      },
      quality: {
        ru: 'Пет-прототип без полного покрытия тестами: его ценность в архитектурных решениях, которые затем были доведены до продакшн-подхода в Bank-DDD.',
        en: 'A pet prototype without full test coverage: its value is in the architectural decisions later matured into a production-style approach in Bank-DDD.'
      }
    }
  },
  {
    id: 'data-layer',
    cat: 'backend',
    status: 'pet',
    color: '#4dd0e1',
    title: 'Spring MVC + Hibernate',
    tagline: { ru: 'MVC · DAO · JPA · Thymeleaf', en: 'MVC · DAO · JPA · Thymeleaf' },
    desc: {
      ru: 'Классический Spring MVC: путь запроса от контроллера через сервис и Hibernate-DAO до Thymeleaf-шаблона.',
      en: 'Classic Spring MVC: a request path from controller through a service and Hibernate DAO to a Thymeleaf template.'
    },
    stack: ['Java 11', 'Spring MVC', 'Hibernate', 'Spring Data JPA', 'Thymeleaf', 'Tomcat'],
    snip: ['// classic mvc layers', 'controller → service', '→ dao / repository', '→ thymeleaf view'],
    links: { github: 'https://github.com/Daniil2022Ri/MVC_Hibernate' },
    dossier: {
      task: {
        ru: 'Разобраться, как устроен классический Spring MVC: пройти путь запроса от контроллера до Hibernate и обратно в шаблон.',
        en: 'Understand how classic Spring MVC works: follow a request from controller to Hibernate and back into a template.'
      },
      built: {
        ru: [
          'Слои controller → service → dao / repository: контроллер не знает про Hibernate, DAO не знает про HTTP.',
          'JPA-сущность User и ручной DAO рядом со Spring Data репозиторием — видно, как ORM работает изнутри.',
          'Thymeleaf-шаблоны для списка, создания и редактирования, сборка WAR под Tomcat.'
        ],
        en: [
          'controller → service → dao / repository layers: the controller knows nothing about Hibernate, the DAO knows nothing about HTTP.',
          'A JPA User entity and a hand-written DAO next to a Spring Data repository show how the ORM works inside.',
          'Thymeleaf templates for list, create and edit, packaged as a WAR for Tomcat.'
        ]
      },
      why: {
        ru: [
          'Понятная слоистость и разделение ответственности — фундамент, на котором строятся сервисы посложнее.',
          'Ручной DAO рядом со Spring Data показывает разницу между «магией» фреймворка и явной работой с сессией.',
          'Формы, валидация и шаблоны — база, без которой не объяснить, что происходит под капотом REST-сервиса.'
        ],
        en: [
          'Clear layering and separation of concerns are the foundation for more complex services.',
          'A hand-written DAO next to Spring Data shows the difference between framework magic and explicit session work.',
          'Forms, validation and templates are the baseline for understanding what happens under a REST service.'
        ]
      },
      quality: {
        ru: 'Пет-проект: фокус на устройстве MVC и ORM, без микросервисной инфраструктуры и тестовой пирамиды.',
        en: 'A pet project: focused on MVC and ORM mechanics, without microservice infrastructure or a test pyramid.'
      }
    }
  },
  {
    id: 'auth',
    cat: 'backend',
    status: 'pet',
    color: '#ff2f6d',
    title: 'Centralized Auth Service',
    tagline: { ru: 'Spring Security · RBAC · BCrypt', en: 'Spring Security · RBAC · BCrypt' },
    desc: {
      ru: 'Аутентификация и авторизация: роли, защищённая админка и REST API с разными уровнями доступа.',
      en: 'Authentication and authorization: roles, a protected admin area and a REST API with different access levels.'
    },
    stack: ['Java 17', 'Spring Security', 'Spring MVC', 'Spring Data JPA', 'Thymeleaf', 'BCrypt'],
    snip: ['// filter chain', 'GET /admin/users', '→ 200 ROLE_ADMIN', '→ 403 ROLE_USER'],
    links: { github: 'https://github.com/Daniil2022Ri/SpringSercutiry_V2/tree/main/src/main' },
    dossier: {
      task: {
        ru: 'Аутентификация и авторизация для нескольких приложений: роли, защищённая админка и REST API с разными уровнями доступа.',
        en: 'Authentication and authorization for several applications: roles, a protected admin area and a REST API with different access levels.'
      },
      built: {
        ru: [
          'Spring Security filter chain, UserDetailService и BCrypt для хранения паролей.',
          'Роли ROLE_ADMIN / ROLE_USER и декларативные правила доступа к URL и REST.',
          'Админ-панель на Thymeleaf: управление пользователями и ролями.',
          'Spring Data JPA и репозитории пользователей и ролей.'
        ],
        en: [
          'Spring Security filter chain, UserDetailService and BCrypt for password storage.',
          'ROLE_ADMIN / ROLE_USER roles and declarative access rules for URLs and REST.',
          'A Thymeleaf admin panel for managing users and roles.',
          'Spring Data JPA repositories for users and roles.'
        ]
      },
      why: {
        ru: [
          'Права описаны в конфигурации: их видно, легко проверить и сложно обойти случайно.',
          'Пароли только в BCrypt-хэше — никакой собственной криптографии.',
          'Один сервис — одна точка входа и одна модель ролей для всех приложений.'
        ],
        en: [
          'Permissions live in configuration: visible, easy to audit and hard to bypass by accident.',
          'Passwords are stored only as BCrypt hashes — no home-grown cryptography.',
          'One service, one entry point and one role model for every application.'
        ]
      },
      quality: {
        ru: 'Демонстрирует Spring Security изнутри: фильтры, провайдеры, роли и редиректы после логина. В README честно перечислены следующие шаги: JWT, OAuth2 и MFA.',
        en: 'Demonstrates Spring Security from the inside: filters, providers, roles and post-login redirects. The README honestly lists JWT, OAuth2 and MFA as next steps.'
      }
    }
  },
  {
    id: 'techstore',
    cat: 'frontend',
    status: 'demo',
    color: '#7c8cf8',
    title: 'TechStore',
    tagline: { ru: 'Vue 3 Composition API · SPA-магазин', en: 'Vue 3 Composition API · store SPA' },
    desc: {
      ru: 'SPA интернет-магазина: сложная фильтрация, корзина, адаптивная сетка и тёмная тема.',
      en: 'E-commerce SPA: complex filtering, cart, responsive grid and dark theme.'
    },
    stack: ['Vue 3', 'Composition API', 'CSS Grid', 'localStorage'],
    snip: ['// vue composition', 'const cart = ref([])', 'computed(() => cart.value', '  .reduce(sum, 0))'],
    links: { github: './Normal_verstka_Web/Site_Gadjet_Store/index.html', live: true },
    dossier: {
      task: {
        ru: 'SPA магазина на Vue 3 без сборщика: каталог, фильтры по категориям, корзина и адаптивная сетка.',
        en: 'A store SPA in Vue 3 without a bundler: catalogue, category filters, cart and responsive grid.'
      },
      built: {
        ru: [
          'Composition API: ref / computed для каталога, фильтра и корзины.',
          'Корзина с пересчётом суммы, тосты и модальное окно.',
          'Данные товаров отделены от разметки: каталог расширяется массивом.'
        ],
        en: [
          'Composition API: ref / computed for catalogue, filter and cart.',
          'Cart with total recalculation, toasts and a modal.',
          'Product data is separate from markup: the catalogue grows by adding to an array.'
        ]
      },
      why: {
        ru: [
          'Состояние выведено из данных: корзина и фильтр — computed, а не ручная синхронизация DOM.',
          'Один файл без сборки — открывается локально и легко проверяется.',
          'Адаптив от 360px: сетка перестраивается без горизонтального скролла.'
        ],
        en: [
          'State is derived from data: cart and filter are computed instead of manually synced DOM.',
          'A single file with no build step — opens locally and is easy to check.',
          'Responsive from 360px: the grid reflows without horizontal scrolling.'
        ]
      },
      quality: {
        ru: 'Vue 3 global build, без зависимостей и сборки: проект открывается двойным кликом по index.html.',
        en: 'Vue 3 global build, no dependencies or bundler: the project opens by double-clicking index.html.'
      }
    }
  },
  {
    id: 'kickstore',
    cat: 'frontend',
    status: 'demo',
    color: '#ff2f6d',
    title: 'KickStore',
    tagline: { ru: 'React 18 · параллакс и анимации', en: 'React 18 · parallax and motion' },
    desc: {
      ru: 'Интерактивная витрина кроссовок: параллакс-эффекты, CSS-анимации и избранное в localStorage.',
      en: 'Interactive sneaker storefront: parallax effects, CSS animations and localStorage favourites.'
    },
    stack: ['React 18', 'Hooks', 'CSS Animations', 'localStorage'],
    snip: ['// transform only', '.card:nth-child(2n) {', '  transform: rotate(6deg);', '}'],
    links: { github: './Normal_verstka_Web/Site_shooth_Store/index.html', live: true },
    dossier: {
      task: {
        ru: 'Интерактивная витрина кроссовок: избранное, параллакс и анимации без сторонних библиотек.',
        en: 'An interactive sneaker storefront: favourites, parallax and animations without third-party libraries.'
      },
      built: {
        ru: [
          'React 18 + Babel standalone: useState / useMemo, избранное в localStorage.',
          'CSS-анимации и параллакс на transform, чтобы не трогать layout.',
          'Компонентная структура и переиспользуемые карточки товаров.'
        ],
        en: [
          'React 18 + Babel standalone: useState / useMemo, favourites in localStorage.',
          'CSS animations and parallax on transform, leaving layout untouched.',
          'Component structure with reusable product cards.'
        ]
      },
      why: {
        ru: [
          'Анимации на transform / opacity не вызывают reflow — интерфейс остаётся плавным.',
          'Избранное переживает перезагрузку за счёт localStorage.',
          'Нет тяжёлых зависимостей: только React.'
        ],
        en: [
          'Transform / opacity animations avoid reflow, so the interface stays smooth.',
          'Favourites survive a reload via localStorage.',
          'No heavy dependencies: React only.'
        ]
      },
      quality: {
        ru: 'Демо-витрина: фокус на UX и анимациях, сборка не требуется.',
        en: 'A showcase demo: focus on UX and motion, no build step.'
      }
    }
  },
  {
    id: 'travel',
    cat: 'frontend',
    status: 'demo',
    color: '#2ee6b0',
    title: 'Wanderlust',
    tagline: { ru: 'React 18 · lazy loading · CSS Grid', en: 'React 18 · lazy loading · CSS Grid' },
    desc: {
      ru: 'Адаптивный туристический портал: ленивая загрузка изображений, модальные окна и CSS Grid.',
      en: 'Responsive travel portal: image lazy loading, modals and CSS Grid layout.'
    },
    stack: ['React 18', 'Lazy Loading', 'CSS Grid', 'Responsive'],
    snip: ['// lazy loading', '<img loading="lazy"', '  src="santorini.jpg">', '→ faster LCP'],
    links: { github: './Normal_verstka_Web/Site_Travel_Store/index.html', live: true },
    dossier: {
      task: {
        ru: 'Туристический портал: подборки направлений, модальные карточки и много изображений на длинной странице.',
        en: 'A travel portal: destination collections, modal cards and lots of imagery on a long page.'
      },
      built: {
        ru: [
          'Lazy loading изображений, чтобы первый экран грузился быстро.',
          'CSS Grid для сетки направлений и модальное окно с деталями.',
          'Адаптивная типографика и отступы.'
        ],
        en: [
          'Image lazy loading so the first screen loads fast.',
          'CSS Grid for the destination layout and a modal with details.',
          'Responsive typography and spacing.'
        ]
      },
      why: {
        ru: [
          'Lazy loading экономит трафик и ускоряет LCP на длинной странице.',
          'Grid держит раскладку на любых ширинах без медиазапроса на каждый элемент.',
          'Модальное окно не уводит пользователя со страницы.'
        ],
        en: [
          'Lazy loading saves bandwidth and improves LCP on a long page.',
          'Grid keeps the layout at any width without a media query per element.',
          'The modal keeps the user on the page instead of navigating away.'
        ]
      },
      quality: {
        ru: 'Статическое демо: открывается без сборки, изображения грузятся по мере прокрутки.',
        en: 'A static demo: opens without a build step, images load as you scroll.'
      }
    }
  },
  {
    id: 'weather',
    cat: 'frontend',
    status: 'demo',
    color: '#ffc247',
    title: 'WeatherApp',
    tagline: { ru: 'Open-Meteo · 50+ городов · 7 дней', en: 'Open-Meteo · 50+ cities · 7 days' },
    desc: {
      ru: 'Погода в реальном времени: Open-Meteo API, почасовой прогноз на день и прогноз на неделю.',
      en: 'Real-time weather: Open-Meteo API, hourly forecast for the day and a seven-day outlook.'
    },
    stack: ['React', 'Open-Meteo API', 'Fetch', 'Async states'],
    snip: ['// open-meteo', 'GET /v1/forecast?latitude=…', '→ 24° · hourly · 7 days', '→ loading / error states'],
    links: { github: './Web_API_sites/Weather_monitoring_site/index.html', live: true },
    dossier: {
      task: {
        ru: 'Погода в реальном времени для 50+ городов: текущие условия, почасовой прогноз и 7 дней.',
        en: 'Real-time weather for 50+ cities: current conditions, hourly forecast and seven days.'
      },
      built: {
        ru: [
          'Open-Meteo API без ключа, fetch с обработкой загрузки и ошибок.',
          'Поиск города и сохранение последнего выбора.',
          'Почасовая и дневная визуализация данных.'
        ],
        en: [
          'Open-Meteo API without a key, fetch with loading and error handling.',
          'City search and persistence of the last choice.',
          'Hourly and daily data visualization.'
        ]
      },
      why: {
        ru: [
          'API без ключа — проект работает у любого, кто его открыл.',
          'Состояния loading / error / empty обработаны, а не только happy path.',
          'Данные и представление разделены: смена провайдера затрагивает один слой.'
        ],
        en: [
          'A keyless API — the project works for anyone who opens it.',
          'Loading / error / empty states are handled, not just the happy path.',
          'Data and presentation are separated: changing providers touches one layer.'
        ]
      },
      quality: {
        ru: 'Демо работает прямо в браузере, данные — Open-Meteo.',
        en: 'The demo runs directly in the browser; data comes from Open-Meteo.'
      }
    }
  },
  {
    id: 'currency',
    cat: 'frontend',
    status: 'demo',
    color: '#5effa8',
    title: 'CurrencyHub',
    tagline: { ru: 'Курсы валют · конвертер · кэш', en: 'Exchange rates · converter · cache' },
    desc: {
      ru: 'Финансовый дашборд с внешним API курсов: конвертер, визуализация данных и кэширование запросов.',
      en: 'Financial dashboard on an external rates API: converter, data visualization and request caching.'
    },
    stack: ['React 18', 'ExchangeRate API', 'Custom Hooks', 'Caching'],
    snip: ['// cache first', 'GET /latest?base=USD', 'cache-hit → 0 ms', '→ converter + chart'],
    links: { github: './Web_API_sites/CurrencyHub/index.html', live: true },
    dossier: {
      task: {
        ru: 'Дашборд курсов валют: конвертер, динамика и кэш запросов, чтобы не дёргать API на каждое действие.',
        en: 'An exchange-rate dashboard: converter, trends and request caching so the API is not hit on every action.'
      },
      built: {
        ru: [
          'Интеграция с API курсов и конвертер с валидацией ввода.',
          'Кэширование ответов в кастомных хуках.',
          'Визуализация динамики и состояния загрузки.'
        ],
        en: [
          'Rates API integration and a converter with input validation.',
          'Response caching inside custom hooks.',
          'Trend visualization and loading states.'
        ]
      },
      why: {
        ru: [
          'Кэш снижает число запросов и делает интерфейс отзывчивым.',
          'Ошибки сети не ломают экран: есть fallback и повтор.',
          'Логика запросов в хуках, а не в компонентах — её проще переиспользовать.'
        ],
        en: [
          'Caching cuts request count and keeps the UI responsive.',
          'Network errors do not break the screen: there is a fallback and a retry.',
          'Request logic lives in hooks, not components, so it is reusable.'
        ]
      },
      quality: {
        ru: 'Демо с реальными данными внешнего API и собственной логикой кэширования.',
        en: 'A demo with real external API data and its own caching logic.'
      }
    }
  },
  {
    id: 'flashlingua',
    cat: 'mobile',
    status: 'pet',
    color: '#7ee787',
    title: 'FlashLingua',
    tagline: { ru: 'Jetpack Compose · Room · MVVM', en: 'Jetpack Compose · Room · MVVM' },
    desc: {
      ru: 'Android-приложение для изучения английского: карточки, режим повторения, TTS-озвучка и локальное хранение.',
      en: 'Android app for learning English: flashcards, study mode, TTS pronunciation and local storage.'
    },
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM', 'Coroutines', 'TTS'],
    snip: ['// room + flow', '@Query("SELECT * FROM card")', 'fun all(): Flow<List<Card>>', '→ offline-first'],
    links: { github: 'https://github.com/Daniil2022Ri/AndroidApp_EnglishCard' },
    dossier: {
      task: {
        ru: 'Android-приложение для карточек английских слов: добавление, повторение и озвучка — всё офлайн.',
        en: 'An Android app for English flashcards: add, review and pronounce — fully offline.'
      },
      built: {
        ru: [
          'Jetpack Compose UI, MVVM и Coroutines / Flow.',
          'Room для локального хранения карточек.',
          'TTS для произношения и режим случайного повторения.'
        ],
        en: [
          'Jetpack Compose UI, MVVM and Coroutines / Flow.',
          'Room for local card storage.',
          'TTS pronunciation and a random study mode.'
        ]
      },
      why: {
        ru: [
          'Офлайн-first: карточки живут в Room, сеть не нужна.',
          'Compose + MVVM разделяют UI и состояние — экран переживает поворот.',
          'TTS превращает карточку в тренажёр произношения, а не просто список слов.'
        ],
        en: [
          'Offline-first: cards live in Room, no network needed.',
          'Compose + MVVM separate UI from state, so the screen survives rotation.',
          'TTS turns a card into a pronunciation trainer, not just a word list.'
        ]
      },
      quality: {
        ru: 'Пет-проект на Kotlin: современный стек, локальная БД и работа с системным TTS.',
        en: 'A pet project in Kotlin: a modern stack, a local database and system TTS integration.'
      }
    }
  }
];

const CAT_LABEL = {
  backend: { ru: 'Backend', en: 'Backend' },
  frontend: { ru: 'Frontend', en: 'Frontend' },
  mobile: { ru: 'Android', en: 'Android' }
};

/* ==========================================================================
   INFRASTRUCTURE
   ========================================================================== */

const LangContext = createContext('ru');
const useLang = () => useContext(LangContext);

const pick = (value, lang) => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[lang] != null ? value[lang] : value.ru;
};

const ICONS = {
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  external: <><path d="M14 4h6v6" /><path d="M20 4 11 13" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />,
  telegram: <><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></>,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></>,
  check: <path d="m20 6-11 11-5-5" />,
  close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  up: <><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></>
};

function Icon({ name, size = 16 }) {
  return (
    <svg
      className="ic"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}

function GithubIcon({ size = 16 }) {
  return (
    <svg className="ic" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function Scanlines() {
  return <div className="scanlines" aria-hidden="true" />;
}

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    const particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const seed = () => {
      particles.length = 0;
      const count = window.innerWidth < 760 ? 22 : 42;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          size: Math.random() * 1.6 + 0.4,
          alpha: Math.random() * 0.28 + 0.08,
          warm: Math.random() > 0.78
        });
      }
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.warm
          ? `rgba(255, 157, 0, ${p.alpha})`
          : `rgba(37, 231, 255, ${p.alpha})`;
        ctx.fill();
      });
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    resize();
    seed();
    frame();

    const onResize = () => {
      resize();
      seed();
      if (reduce) frame();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */

function Nav({ t, lang, setLang, activeSection, stuck, onNavigate, drawerOpen, setDrawerOpen }) {
  return (
    <>
      <header className={`nav ${stuck ? 'is-stuck' : ''}`}>
        <div className="wrap nav-inner">
          <a
            className="brand"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('hero');
            }}
            aria-label="DR — Daniil Rybiakov, home"
          >
            <span className="brand-mark">DR</span>
            <span className="brand-text">
              <span className="brand-name">{t.hero.name}</span>
              <span className="brand-role">{t.brandRole}</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {t.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="num">{item.num}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-btn ${lang === 'ru' ? 'is-active' : ''}`}
                onClick={() => setLang('ru')}
                aria-pressed={lang === 'ru'}
              >
                RU
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className={`burger ${drawerOpen ? 'is-open' : ''}`}
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <Icon name={drawerOpen ? 'close' : 'menu'} size={18} />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-drawer" className={`drawer ${drawerOpen ? 'is-open' : ''}`}>
        {t.nav.map((item) => (
          <button key={item.id} type="button" className="drawer-link" onClick={() => onNavigate(item.id)}>
            <span className="num">{item.num}</span>
            {item.label}
          </button>
        ))}
        <div className="drawer-foot">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="https://github.com/Daniil2022Ri" target="_blank" rel="noopener noreferrer">
            github.com/Daniil2022Ri
          </a>
        </div>
      </div>
    </>
  );
}

/* ==========================================================================
   HERO
   ========================================================================== */

function Hero({ t, onNavigate }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-orb hero-orb--amber" aria-hidden="true" />
      <div className="hero-orb hero-orb--cyan" aria-hidden="true" />

      <div className="wrap hero-grid">
        <div>
          <span className="hero-status">
            <span className="dot" />
            {t.hero.status}
          </span>

          <h1 className="hero-title">
            <span className="line">Java</span>
            <span className="line line--amber">
              <span className="glitch" data-text="Backend">
                <span className="glitch-text">Backend</span>
              </span>
            </span>
          </h1>

          <div className="hero-id">
            <span>{t.hero.name}</span>
            <span className="sep">//</span>
            <span className="role">{t.hero.role}</span>
          </div>

          <p className="hero-lead">{t.hero.lead}</p>

          <div className="hero-cta">
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('projects')}>
              {t.hero.ctaCases}
              <Icon name="arrow" size={15} />
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate('contact')}>
              {t.hero.ctaContact}
            </button>
          </div>

          <div className="hero-stats">
            {t.hero.stats.map(([value, label, note]) => (
              <div className="hero-stat" key={label}>
                <b>{value}</b>
                <small>{label}</small>
                <small style={{ color: 'var(--dim)', opacity: 0.75 }}>{note}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-tag">{t.hero.panelTag}</div>
          <div className="term">
            <div className="term-bar">
              <span className="term-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="term-title">{t.hero.panelTitle}</span>
              <span className="term-badge">CI ✓</span>
            </div>
            <div className="term-body">
              <div className="svc-grid">
                {SERVICES.map((service) => (
                  <div className="svc" key={service.name}>
                    <i />
                    {service.name}
                    <span className="port">:{service.port}</span>
                  </div>
                ))}
              </div>
              <div className="term-cmd">
                <span className="prompt">$</span>
                {t.hero.panelCmd}
              </div>
              <div className="term-ok">{t.hero.panelOk}</div>
              <div className="term-note">{t.hero.panelNote}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <span className="rail" />
      </div>
    </section>
  );
}

/* ==========================================================================
   MARQUEE
   ========================================================================== */

function Marquee() {
  const group = (hidden) => (
    <div className="marquee-group" aria-hidden={hidden ? 'true' : undefined}>
      {MARQUEE.map((item) => (
        <span className="marquee-item" key={(hidden ? 'b-' : 'a-') + item}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

/* ==========================================================================
   FLAGSHIP CASE
   ========================================================================== */

function Flagship({ t, lang, project, onOpenDossier }) {
  const why = project.dossier.why[lang] || project.dossier.why.ru;

  return (
    <section id="flagship" className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="label">{t.flagship.label}</span>
          <h2 className="h2">
            {t.flagship.title} <span className="accent">{t.flagship.accent}</span>
          </h2>
          <p className="lead">{t.flagship.lead}</p>
        </div>

        <div className="flagship">
          <article className="flag-main" style={{ '--accent': project.color }}>
            <div className="flag-top">
              <span className="chip chip--accent">{t.flagship.badge}</span>
              <span className="chip">{t.status[project.status]}</span>
              <span className="chip chip--green">
                <span className="dot" />
                CI passing
              </span>
              <span className="chip chip--cyan">Java 17</span>
            </div>

            <h3 className="flag-title">
              {t.flagship.titleMain}
              <span>-</span>
              {t.flagship.titleAccent}
            </h3>
            <p className="flag-sub">
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{t.flagship.subtitle}.</strong>{' '}
              {t.flagship.desc}
            </p>

            <div className="arch">
              <div className="arch-head">
                <b>// {t.flagship.archTitle}</b>
                <span>{t.flagship.archNote}</span>
              </div>
              <div className="arch-grid">
                {SERVICES.map((service) => (
                  <div className="arch-node" key={service.name}>
                    <span className="port">:{service.port}</span>
                    <span className="name">{service.name}</span>
                    <span className="role">{pick(service.role, lang)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flag-actions">
              <button type="button" className="btn btn--primary" onClick={() => onOpenDossier(project.id)}>
                {t.flagship.dossierBtn}
                <Icon name="arrow" size={15} />
              </button>
              <a
                className="btn btn--ghost"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={15} />
                {t.flagship.github}
              </a>
            </div>
          </article>

          <aside className="flag-side">
            <div className="spec">
              <h4 className="spec-title">{t.flagship.specTitle}</h4>
              <dl style={{ margin: 0 }}>
                {t.flagship.spec.map(([key, value]) => (
                  <div className="spec-row" key={key}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flag-metrics">
              {project.metrics.map((metric) => (
                <div className="flag-metric" key={metric.l.en}>
                  <b>{pick(metric.v, lang)}</b>
                  <span>{pick(metric.l, lang)}</span>
                </div>
              ))}
              <div className="flag-metric">
                <b>39</b>
                <span>{lang === 'ru' ? 'тестов UI' : 'UI tests'}</span>
              </div>
            </div>

            <ul className="flag-why" aria-label={t.flagship.whyTitle}>
              {why.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PROJECTS
   ========================================================================== */

function ProjectCard({ project, lang, index, t, onOpenDossier }) {
  const isDemo = Boolean(project.links.live);

  return (
    <article
      className="card"
      style={{ '--accent': project.color, '--d': `${Math.min(index, 8) * 0.05}s` }}
      onClick={() => onOpenDossier(project.id)}
    >
      <div className="card-visual">
        <div className="snip">
          {project.snip.map((line, i) => {
            const className = line.startsWith('//')
              ? 'is-comment'
              : line.startsWith('→')
              ? 'is-arrow'
              : '';
            return (
              <div className={`snip-line ${className}`} key={i}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span className="cat">{pick(CAT_LABEL[project.cat], lang)}</span>
          <span className="sep" />
          <span>{t.status[project.status]}</span>
          <span className="year">#{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-sub">{pick(project.tagline, lang)}</p>
        <p className="card-desc">{pick(project.desc, lang)}</p>

        {project.metrics && (
          <div className="card-metrics">
            {project.metrics.map((metric) => (
              <span className="metric" key={metric.l.en}>
                <b>{pick(metric.v, lang)}</b>
                {pick(metric.l, lang)}
              </span>
            ))}
          </div>
        )}

        <div className="card-stack">
          {project.stack.slice(0, 5).map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="card-foot">
          <button
            type="button"
            className="card-dossier"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDossier(project.id);
            }}
          >
            {t.projects.dossier}
            <Icon name="arrow" size={12} />
          </button>
          <a
            className="card-link"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {isDemo ? t.projects.demo : t.projects.code}
            <Icon name="external" size={11} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects({ t, lang, onOpenDossier }) {
  const [filter, setFilter] = useState('all');
  const filters = [
    { id: 'all', label: t.projects.all },
    { id: 'backend', label: pick(CAT_LABEL.backend, lang) },
    { id: 'frontend', label: pick(CAT_LABEL.frontend, lang) },
    { id: 'mobile', label: pick(CAT_LABEL.mobile, lang) }
  ];
  const countFor = (id) => (id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === id).length);
  const list = PROJECTS.filter((p) => filter === 'all' || p.cat === filter);

  return (
    <section id="projects" className="section section--tight">
      <div className="wrap">
        <div className="section-head">
          <span className="label">{t.projects.label}</span>
          <h2 className="h2">
            {t.projects.title} <span className="accent">{t.projects.accent}</span>
          </h2>
          <p className="lead">{t.projects.lead}</p>
        </div>

        <div className="projects-toolbar">
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`filter ${filter === item.id ? 'is-active' : ''}`}
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
              >
                {item.label}
                <span className="count">{countFor(item.id)}</span>
              </button>
            ))}
          </div>
          <span className="projects-count">
            <b>{list.length}</b> {t.projects.count}
          </span>
        </div>

        {list.length ? (
          <div className="projects-grid">
            {list.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                index={i}
                t={t}
                onOpenDossier={onOpenDossier}
              />
            ))}
          </div>
        ) : (
          <div className="projects-empty">{t.projects.empty}</div>
        )}
      </div>
    </section>
  );
}

/* ==========================================================================
   TECH DOSSIER MODAL
   ========================================================================== */

function DossierModal({ project, t, lang, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const timer = window.setTimeout(() => {
      if (modalRef.current) modalRef.current.focus({ preventScroll: true });
    }, 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(timer);
    };
  }, [onClose]);

  const dossier = project.dossier;
  const isDemo = Boolean(project.links.live);

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        style={{ '--accent': project.color }}
        ref={modalRef}
        tabIndex={-1}
      >
        <header className="modal-head">
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label={t.dossier.close}
          >
            <Icon name="close" size={16} />
          </button>

          <div className="modal-meta">
            <span className="cat">{pick(CAT_LABEL[project.cat], lang)}</span>
            <span className="sep" />
            <span>{t.status[project.status]}</span>
            <span className="year">TECH DOSSIER</span>
          </div>

          <h3 className="modal-title" id="dossier-title">
            {project.title}
          </h3>
          <p className="modal-sub">{pick(project.tagline, lang)}</p>
        </header>

        <div className="dossier">
          <div className="dossier-block">
            <h4 className="dossier-label">{t.dossier.task}</h4>
            <p>{pick(dossier.task, lang)}</p>
          </div>

          <div className="dossier-block">
            <h4 className="dossier-label">{t.dossier.built}</h4>
            <ul className="dossier-list">
              {(dossier.built[lang] || dossier.built.ru).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dossier-block">
            <h4 className="dossier-label">{t.dossier.why}</h4>
            <ul className="dossier-list dossier-list--why">
              {(dossier.why[lang] || dossier.why.ru).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dossier-block">
            <h4 className="dossier-label">{t.dossier.quality}</h4>
            <p>{pick(dossier.quality, lang)}</p>
          </div>
        </div>

        <footer className="modal-foot">
          <div className="modal-stack">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
          <a
            className={`btn ${isDemo ? 'btn--primary' : 'btn--ghost'} btn--small`}
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isDemo ? <Icon name="external" size={14} /> : <GithubIcon size={14} />}
            {isDemo ? t.dossier.demo : t.dossier.github}
          </a>
        </footer>
      </div>
    </div>,
    document.body
  );
}

/* ==========================================================================
   ABOUT
   ========================================================================== */

function About({ t, lang }) {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="about">
          <div className="about-copy">
            <span className="label">{t.about.label}</span>
            <h2 className="h2">
              {t.about.title} <span className="accent">{t.about.accent}</span>
            </h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="focus">
              <Icon name="target" size={16} />
              <span>{t.about.focus}</span>
            </div>

            <div className="principles" aria-label={t.about.principlesTitle}>
              {t.about.principles.map(([title, text], i) => (
                <div className="principle" key={title}>
                  <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="skills-head">{t.about.skillsTitle}</h3>
            <div className="skills-grid">
              {SKILLS.map((group) => (
                <div className="skill-card" key={group.title.en}>
                  <h4>{pick(group.title, lang)}</h4>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CONTACT
   ========================================================================== */

function Contact({ t, lang }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (err) {
      const area = document.createElement('textarea');
      area.value = EMAIL;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
      } catch (e) {
        /* noop */
      }
      area.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  const links = [
    {
      href: 'https://github.com/Daniil2022Ri',
      icon: <GithubIcon size={15} />,
      label: 'github.com/Daniil2022Ri',
      meta: t.contact.github
    },
    { href: `mailto:${EMAIL}`, icon: <Icon name="mail" size={15} />, label: EMAIL, meta: t.contact.mail },
    {
      href: 'tel:+79284102669',
      icon: <Icon name="phone" size={15} />,
      label: '+7 (928) 410-26-69',
      meta: t.contact.phone
    },
    {
      href: 'https://t.me/danilRyDeveloperFullStack',
      icon: <Icon name="telegram" size={15} />,
      label: 't.me/danilRyDeveloperFullStack',
      meta: t.contact.telegram
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="contact-card">
          <div className="contact-left">
            <span className="label">{t.contact.label}</span>
            <h2 className="h2">
              {t.contact.title} <span className="accent">{t.contact.accent}</span>
            </h2>
            <p className="contact-text">{t.contact.text}</p>
            <span className="contact-avail">
              <span className="dot" />
              {t.contact.avail}
            </span>
          </div>

          <div className="contact-right">
            <div className="contact-links">
              {links.map((link) => (
                <a
                  className="contact-link"
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  <span className="meta">{link.meta}</span>
                </a>
              ))}
            </div>

            <div className="contact-mail">
              <button type="button" className={`copy-btn ${copied ? 'is-copied' : ''}`} onClick={copy}>
                <Icon name={copied ? 'check' : 'copy'} size={12} />
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FOOTER
   ========================================================================== */

function Footer({ t, onTop }) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-left">
          <span className="footer-mark">DR</span>
          <span>{t.footer.rights}</span>
        </div>
        <div className="footer-right">
          <span>{t.footer.built}</span>
          <span className="ver">v4.0.0</span>
          <button type="button" className="to-top" onClick={onTop}>
            <Icon name="up" size={12} />
            {t.footer.top}
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ==========================================================================
   APP
   ========================================================================== */

function App() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = window.localStorage.getItem('dr-lang');
      return saved === 'en' || saved === 'ru' ? saved : 'ru';
    } catch (e) {
      return 'ru';
    }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [activeSection, setActiveSection] = useState('flagship');
  const [stuck, setStuck] = useState(false);
  const progressRef = useRef(null);

  const t = UI[lang];
  const openProject = PROJECTS.find((p) => p.id === openId) || null;

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem('dr-lang', lang);
    } catch (e) {
      /* noop */
    }
  }, [lang]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${ratio})`;
        }
        setStuck(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const ids = ['flagship', 'projects', 'about', 'contact'];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || !nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const locked = drawerOpen || Boolean(openProject);
    document.body.classList.toggle('no-scroll', locked);
    return () => document.body.classList.remove('no-scroll');
  }, [drawerOpen, openProject]);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [drawerOpen]);

  const navigate = useCallback((id) => {
    setDrawerOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);

  const openDossier = useCallback((id) => setOpenId(id), []);
  const closeDossier = useCallback(() => setOpenId(null), []);

  return (
    <LangContext.Provider value={lang}>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <Scanlines />
      <Particles />

      <Nav
        t={t}
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        stuck={stuck}
        onNavigate={navigate}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />

      <main>
        <Hero t={t} onNavigate={navigate} />
        <Marquee />
        <Flagship t={t} lang={lang} project={PROJECTS[0]} onOpenDossier={openDossier} />
        <Projects t={t} lang={lang} onOpenDossier={openDossier} />
        <About t={t} lang={lang} />
        <Contact t={t} lang={lang} />
      </main>

      <Footer t={t} onTop={() => navigate('hero')} />

      {openProject && (
        <DossierModal project={openProject} t={t} lang={lang} onClose={closeDossier} />
      )}
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
