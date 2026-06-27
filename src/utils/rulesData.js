const color = 2829617;

const ruComponentsV2 = [
    {
        type: 17,
        accent_color: color,
        components: [
            {
                type: 10,
                content: '### Правила сервера и деятельность этого сервера соответсвует критериям и правилам сообщества Discord.'
            }
        ]
    },
    {
        type: 17,
        accent_color: color,
        components: [
            {
                type: 10,
                content: `### 📔 Общие правила сервера\n\n` +
                `\`1.1\` Запрещены прямые и косвенные оскорбления, угрозы и чрезмерная токсичность в сторону участников сервера.\n` +
                `\`1.2\` Запрещены провокации, разжигание конфликтов и намеренное препятствование нормальному общению (троллинг, деструктивное поведение).\n` +
                `\`1.3\` Запрещена дискриминация на почве расовой, этнической, национальной или религиозной принадлежности, а также сообщения, содержащие проявления шовинизма, нацизма, расизма и сексизма.\n` +
                `\`1.4\` Запрещена пропаганда наркотиков и терроризма. Запрещено распространение NSFW (18+), шок-контента, скримеров и медиа, способных вызвать эпилепсию (стробоскопы, быстро мигающие изображения).\n` +
                `\`1.5\` Запрещено выдавать себя за другое лицо (намеренное копирование профилей), а также использовать неадекватные, провокационные или NSFW (18+) никнеймы, статусы и аватарки.\n` +
                `\`1.6\` Запрещено создание и использование дополнительных аккаунтов (твинков) для обхода любых наказаний.\n` +
                `\`1.7\` Запрещены буллинг, шантаж, мошенничество, обман и фишинг.\n` +
                `\`1.8\` Запрещено использование и распространение вредоносного ПО, багов/уязвимостей платформы, читов и любых других средств, способных навредить пользователям.\n` +
                `\`1.9\` Запрещено попрошайничество в любом его проявлении.\n` +
                `\`1.10\` Запрещена несанкционированная реклама где-либо в пределах сервера.\n` +
                `\`1.11\` Запрещена коммерческая деятельность, включая продажу чего-либо за реальную валюту.\n` +
                `\`1.12\` Запрещены деструктивные действия по отношению к серверу: неконструктивная критика модерации, призывы участников покинуть сервер, попытки обмана администрации и саботаж развития проекта.\n` +
                `\`1.13\` Запрещается распространение контента, нарушающего авторские права и интеллектуальную собственность других лиц.`
            },
            { type: 14, spacing: 2, divider: true },
            {
                type: 10,
                content: `### 📗 Правила текстовых каналов\n\n` +
                `\`2.1\` Запрещен оффтоп (сообщения, не соответствующие тематике чата).\n` +
                `\`2.2\` Запрещен флуд и спам (в том числе отправка одинаковых сообщений более трех раз подряд).\n` +
                `\`2.3\` Запрещено беспричинное упоминание ролей (пинг) и злоупотребление упоминаниями пользователей.\n` +
                `\`2.4\` Запрещено злоупотребление капсом (сообщения, состоящие преимущественно из заглавных букв).\n` +
                `\`2.5\` Запрещено обсуждение войн и политики.\n` +
                `\`2.6\` Запрещено распространение личной информации других пользователей без их явного согласия (деанон/доксинг).\n` +
                `\`2.7\` Запрещено злоупотребление ботами (спам командами) вне специально отведенных для этого каналов.\n` +
                `\`2.8\` Общение в текстовых каналах разрешено исключительно на том языке, для которого предназначен данный канал.`
            },
            { type: 14, spacing: 2, divider: true },
            {
                type: 10,
                content: `### 📘 Правила голосовых каналов\n\n` +
                `\`3.1\` Запрещено создавать намеренные помехи общению (крики, шумы на заднем фоне, шипение микрофона).\n` +
                `\`3.2\` Запрещено злоупотребление переходами между голосовыми каналами.\n` +
                `\`3.3\` Запрещено применение сторонних программ (Soundpad и аналоги), если окружающие против этого.\n` +
                `\`3.4\` Запрещено транслировать на демонстрации экрана контент, противоречащий общим правилам сервера (NSFW, шок-контент и т.д.).\n` +
                `\`3.5\` Запрещено использовать программы, изменяющие голос и препятствующие нормальному общению.`
            },
            { type: 14, spacing: 2, divider: true },
            {
                type: 10,
                content: `### 📙 Поправки и дополнительные условия\n\n` +
                `\`4.1\` Если вы получили мут, перезаход на сервер с целью его снятия запрещен.\n` +
                `\`4.2\` Запрещен любой обход наказаний или уязвимостей в правилах. Если вы не видите правила в списке, это не значит, что оно не действует.\n` +
                `\`4.3\` Использование ненормативной лексики (мата) разрешено исключительно в меру, без злоупотребления.\n` +
                `\`4.4\` Все перечисленные выше правила также распространяются на личные сообщения между участниками сервера. Наказание выдается при наличии жалобы и доказательств от пострадавшей стороны.\n` +
                `\`4.5\` Приватные каналы модерируются только по прямым жалобам пользователей или в случае грубого нарушения правил.\n` +
                `\`4.6\` Рейды на сервер строго запрещены.\n` +
                `\`4.7\` Модерация и администрация действуют на свое усмотрение и вправе изменять срок наказания в зависимости от ситуации и тяжести нарушения.`
            }
        ]
    },
    {
        type: 17,
        accent_color: color,
        components: [
            {
                type: 10,
                content: '### Наказания\nАдминистрация оставляет за собой право варьировать сроки наказаний.'
            }
        ]
    }
];

const enComponentsV2 = [
    {
        type: 17,
        accent_color: color,
        components: [
            {
                type: 10,
                content: '### Server rules and activities comply with Discord Community Guidelines.'
            }
        ]
    },
    {
        type: 17,
        accent_color: color,
        components: [
            {
                type: 10,
                content: `### 📔 General Server Rules\n\n` +
                `\`1.1\` Direct or indirect insults, threats, and excessive toxicity towards server members are prohibited.\n` +
                `\`1.2\` Provocations, inciting conflict, and intentional obstruction of normal communication (trolling, destructive behavior) are prohibited.\n` +
                `\`1.3\` Discrimination based on race, ethnicity, nationality, or religion is prohibited, as are messages containing chauvinism, Nazism, racism, or sexism.\n` +
                `\`1.4\` Promotion of drugs and terrorism is prohibited. Sharing NSFW (18+), shock content, jumpscares, and media capable of inducing epilepsy (strobes, rapidly flashing images) is strictly forbidden.\n` +
                `\`1.5\` Impersonating others (intentional profile copying) and using inappropriate, provocative, or NSFW nicknames, statuses, or avatars is prohibited.\n` +
                `\`1.6\` Creating and using additional accounts (alt accounts) to evade any punishments is prohibited.\n` +
                `\`1.7\` Bullying, blackmail, fraud, deception, and phishing are prohibited.\n` +
                `\`1.8\` Use and distribution of malware, platform bugs/vulnerabilities, cheats, and any other tools capable of harming users is prohibited.\n` +
                `\`1.9\` Begging in any form is prohibited.\n` +
                `\`1.10\` Unauthorized advertising anywhere within the server is prohibited.\n` +
                `\`1.11\` Commercial activity, including selling anything for real currency, is prohibited.\n` +
                `\`1.12\` Destructive actions against the server: unconstructive criticism of moderation, inciting members to leave the server, attempting to deceive the administration, and sabotaging project development are prohibited.\n` +
                `\`1.13\` Distributing content that violates the copyrights and intellectual property of others is prohibited.`
            },
            { type: 14, spacing: 2, divider: true },
            {
                type: 10,
                content: `### 📗 Text Channel Rules\n\n` +
                `\`2.1\` Off-topic (messages not corresponding to the chat theme) is prohibited.\n` +
                `\`2.2\` Flood and spam (including sending the same message more than three times in a row) are prohibited.\n` +
                `\`2.3\` Unjustified mentioning of roles (pinging) and abuse of user mentions is prohibited.\n` +
                `\`2.4\` Abuse of caps (messages consisting primarily of capital letters) is prohibited.\n` +
                `\`2.5\` Discussion of wars and politics is prohibited.\n` +
                `\`2.6\` Distribution of other users' personal information without their explicit consent (doxing) is prohibited.\n` +
                `\`2.7\` Abuse of bots (command spamming) outside of channels specifically designated for this is prohibited.\n` +
                `\`2.8\` Communication in text channels is allowed exclusively in the language intended for that specific channel.`
            },
            { type: 14, spacing: 2, divider: true },
            {
                type: 10,
                content: `### 📘 Voice Channel Rules\n\n` +
                `\`3.1\` Creating intentional interruptions to communication (screaming, background noise, microphone hissing) is prohibited.\n` +
                `\`3.2\` Abuse of switching between voice channels is prohibited.\n` +
                `\`3.3\` Using third-party software (Soundpad and similar) is prohibited if others object.\n` +
                `\`3.4\` Streaming content on screenshare that contradicts general server rules (NSFW, shock content, etc.) is prohibited.\n` +
                `\`3.5\` Using voice-changing software that hinders normal communication is prohibited.`
            },
            { type: 14, spacing: 2, divider: true },
            {
                type: 10,
                content: `### 📙 Amendments and Additional Terms\n\n` +
                `\`4.1\` If you have received a mute, rejoining the server to remove it is prohibited.\n` +
                `\`4.2\` Any evasion of punishments or exploiting loopholes in the rules is prohibited. If you do not see a rule on the list, it does not mean it is not in effect.\n` +
                `\`4.3\` The use of profanity (swearing) is allowed only in moderation, without abuse.\n` +
                `\`4.4\` All rules listed above also apply to private messages between server members. Punishment is issued upon receipt of a complaint and evidence from the victim.\n` +
                `\`4.5\` Private channels are moderated only upon direct complaints from users or in case of gross violations of the rules.\n` +
                `\`4.6\` Raids on the server are strictly prohibited.\n` +
                `\`4.7\` Moderation and administration act at their own discretion and reserve the right to change the duration of a punishment depending on the situation and severity of the violation.`
            }
        ]
    },
    {
        type: 17,
        accent_color: color,
        components: [
            {
                type: 10,
                content: '### Punishments\nThe administration reserves the right to vary the duration of punishments.'
            }
        ]
    }
];

module.exports = { ruComponentsV2, enComponentsV2 };
