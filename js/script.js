/* global monogatari */
// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
  'Act1_Theme': 'standart(1, 3).mp3',
  'ActIntro_Theme': 'between_acts.mp3',
  'Act2_Theme': 'act_2.mp3',
  'Act3_Theme': 'standart(1, 3).mp3',
  'Act3_QuizTheme': 'quiz.mp3',
  'Intro_Theme': 'vstup.mp3',
  'Act4_Theme': 'standart_3.mp3',
  'Act5_Theme': 'standart.mp3',
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {
  'Act1_Crack': 'crack.mp3',
});

// Define the videos used in the game.
monogatari.assets("videos", {
  intro: "intro.mp4",
  intro_intro: "vstup.mp4",
  act1_intro: "act_1.mp4",
  act2_intro: "act_2.mp4",
  act3_intro: "act_3.mp4",
  act4_intro: "act_4.mp4",
  act5_intro: "act_5.mp4",
  act6_intro: "act_6.mp4",
  death: "death.mp4",
  titles: "titles.mp4",
  end_1: "ending_1.mp4",
  end_2: "ending_2.mp4",
  end_3: "ending_3.mp4",
  end_4: "ending_4.mp4",
});

// Define the images used in the game.
monogatari.assets("images", {
  'act2_soldier1': 'act2_soldier1.png',
  'act2_soldier2': 'act2_soldier2.png',
  'act2_boss': 'act2_boss.png',
  'act3_portal': 'act_3_portal_1.png',
  'act3_heart1': 'act3_heart1.png',
  'act3_heart2': 'act3_heart2.png',
  'act3_heart3': 'act3_heart3.png',
  'act4_table': 'act_4_table.png',
});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  'intro_intro': 'intro_intro.png',
  'black': 'black.png',
  'intro_background1': 'intro_bground1.png',
  'act1_background1': 'act1_bground1.png',
  'act1_background2': 'act1_bground2.png',
  'act2_background1': 'act2_bground1.png',
  'act3_background1': 'act3_bground1.png',
  'act3_background2': 'act3_bground2.png',
  'act3_background3': 'act3_bground3.png',
  'act3_background4': 'act3_bground4.png',
  'act4_background1': 'act4_bground1.png',
  'act4_background2': 'act4_bground2.png',
  'act4_background3': 'act4_bground3.png',
  'act4_background4': 'act4_bground4.png',
  'act5_background1': 'act_5_background_1.png',
  'act5_background2': 'act_5_background_2.png',
  'act5_background3': 'act_5_background_3.png',
  'act5_background4': 'act_5_background_4.png',
  'act5_background5': 'act_5_background_5.png',
  'act5_background6': 'act_5_background_6.png',
  'act5_background7': 'act_5_background_7.png',
  'act5_background8': 'act_5_background_8.png',
  'act5_background9': 'act_5_background_9.png',
  'act6_background1': 'act_6_background_1.png',
  'act6_background2': 'act_6_background_2.png',
  'act6_background3': 'act_6_background_3.png',
  'act6_background4': 'act_6_background_4.png',
  'act6_background5': 'act_6_background_5.png',
  'act6_background6': 'act_6_background_6.png',
  'act6_background7': 'act_6_background_7.png',
  'act6_background8': 'act_6_background_8.png',
  'act6_background9': 'act_6_background_9.png',
  'act6_background10': 'act_6_background_10.png',
  'act6_background11': 'act_6_background_11.png',
  'act6_background12': 'act_6_background_12.png',
  'act6_background13': 'act_6_background_13.png',
  'act6_background14': 'act_6_background_14.png',
  'act6_background15': 'act_6_background_15.png',
  'act6_background16': 'act_6_background_16.png',
  'act6_backgroundDeathfile': 'act_6_background_death_file.png',
  'act6_backgroundFight': 'act_6_background_fight.png',
  'act5_backgroundFight': 'act_5_background_fight.png',
  'act5_background121': 'act_5_background_121.png',
  'act5_backgroundJockers': 'act_5_background_jockers.png',
});

// Define the Characters
monogatari.characters({
  'g': {
    name: "{{stacey.name}}",
    directory: "stacey",
    sprites: {
      normal: "stacey_intro.png",
      act2: "stacey_act2.png",
      act2alt: "stacey_act2alt.png",
      act3_1: "stacey_act3_1.png",
      act3_4: "stacey_act3_4.png",
      act4_1: "act_4_google_woman_2.png",
      act4_2: "act_4_google_woman_1.png",
      act4_3: "act_4_google_woman_1.png",
      act4_4: "act_4_google_woman_4.png"
    },
  },

  'a': {
    name: "Адам",
    directory: "adam",
    sprites: {
      normal: "adam_intro.png",
      act2: "adam_act2.png",
      act2alt: "adam_act2alt.png",
      act3_1: "adam_act3_1.png",
      act3_2: "adam_act3_2.png",
      act3_3: "adam_act3_3.png",
      act3_4: "adam_act3_4.png",
      act4_1: "act_4_adam_1.png",
      act4_2: "act_4_adam_2.png",
      act4_3: "act_4_adam_2.png",
      act4_4: "act_4_adam_4.png",
    },
  },

  'c': {
    name: "{{clarson.name}}",
    directory: "clarson",
    sprites: {
      act3_2: "act_3_robot_2.png",
      act3_3: "act_3_robot_3.png",
      act3_4: "act_3_robot_4.png",
    }
  },

  'arch': {
    name: "{{archibald.name}}",
    directory: "archibald",
    sprites: {
      act4: "act_4_librarian_2 (1).png",
    }
  },

  'jj': {
    name: "{{jayjay.name}}",
  },
  "ji":{
    name: "{{jiji.name}}"
  },
  "jjj":{
    name: "Джей-джей та Джи-джи"
  },
  'lancer': {
    name: "{{lancer.name}}",
  },
  'sof': {
    name: "Старший Офіцер",
  },
  'so': {
    name: "Солдат Ордену",
  },
  'so2': {
    name: "Інший солдат Ордену",
  },
  'so3': {
    name: "Старший солдат Ордену",
  },
  'k': {
    name: "{{kevin.name}}",
  },
  'vb': {
    name: "Голос позаду",
  },
  'kr': {
    name: "{{kristian.name}}"
  },
  'lv': {
    name: "{{ledivi.name}}"
  },
  'rch': {
    name: "{{richmond.name}}"
  },
  'kor': {
    name: "Корнелія"
  },
  'ds': {
    name: "Дейсон"
  },
  'lil': {
    name: "Ліліанна"
  },
  'h': {
    name: "{{hans.name}}"
  },
  'q': {
    name: "{{queen.name}}"
  },
  'z':{
    name: "{{zeus.name}}"
  },
  't':{
    name: "{{terens.name}}"
  },
  'som':{
    name: "Солдат Міллер"
  },
  'sob':{
    name: "Солдат Бартонс"
  },
});

monogatari.script({
  Start: [
    "show video intro immersive with close",
    'play music ActIntro_Theme loop volume 10',
    "show video intro_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    'show background black with fadeIn',
    "g Адаме… Адаме, прокидайтесь.",
    'play music Intro_Theme loop volume 10',
    'show scene intro_background1 with fadeIn',
    "show character a normal at right with fadeIn",
    "show character g normal at left with fadeIn",
    "Розплющивши очі, ви подумали, що осліпли: усе навколо було яскраво білим, що сильно било по очах. Першим, що ви побачили, протерши очі, була доволі приваблива роботеса, занадто сильно схожа на людину.",
    "a Що за…",
    "g Привіт, Адаме.",
    "a Непоганий сон… Хто ти?",
    "g Я Гугл-Жінка, ваш асистент. Ви потрапили у Кібервсесвіт.",
    "a Ага… Мене випадково струмом не вдарило, коли світло вимкнулось…",
    "g Мої сенсори показують, що з вами усе добре. Проте нам слід вже йти. Часу не так багато.",
    "a І куди ж ми так поспішаємо? Я поки не хочу прокидатись.",
    "Ви оглянули нову знайому та посміхнулись. Проте її вигляд обличчя не змінився.",
    "a <i>А вона вміє проявляти емоції?</i>",
    "g Гугл-Жінка: На жаль, це не сон, Адаме. І скоро тут буде армія Зевса, а ви ще не готові до цієї зустрічі. Тому нам слід…",
    "a Зевса? Армія Зевса? Це точно КІБЕРсвіт?",
    "g Так, це Кібервсесвіт. І нам дійсно необх…",
    "a Як на мене, більше схоже на якийсь міф античності з елементами кіберпанку. Проте цікаво, що далі?",
    "g Нарешті… Нам потрібно знайти більш безпечне місце для розмови. Наприклад…",
    "Гугл-Жінка активувала якийсь пристрій на своїй долоні, після чого поруч з’явилось щось схоже на портал.",
    "g Це кібернетична сітка, яка пов’язує між собою усі кібервиміри. З її допомогою можна переміщуватись по усьому Всесвіту.",
    "a Ми можемо потрапити в базу даних Пентагону?",
    "g Теоретично так, але…",
    "a Хочу туди.",
    "g Лише теоретично… Давайте ми все ж знайдемо інше місце, де я усе вам розповім? Прошу, заходьте. Це майже не боляче.",
    "a Боляче уві сні? Оке-е-ей, спробуємо.",
    "Ви ступили у портал.",
    "Вмить вас охопила темрява. Здавалось, ніби усе тіло стягується тонкими нитками. Ще секунда і вони розірвуть плоть на мільярди нано-шматочків, які перенесуться разом з даними у будь-який вимір, у будь-яку точку існуючого…",
    "a <i>Що відбувається?..</i>",
    'stop music Intro_Theme',
    "jump Act1_Start",
  ],
  Act1_Start: [
    'play music ActIntro_Theme loop volume 10',
    "show video act1_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    "Подорож тривала на подив не довго. Вже через секунду ви опинились на робочому столі.",
    'play music Act1_Theme loop volume 10',
    'show scene act1_background1 with fadeIn',
    "show character a normal at right with fadeIn",
    "show character g normal at left with fadeIn",
    "a Де… Де ми?",
    "g Це робочий стіл.",
    "a Що? ЦЕ робочий стіл?!",
    "g Робочий стіл Windows XP.",
    "a У Кібервсесвіті. Windows XP. Microsoft відключив вам ліцензію?",
    "g Дуже смішно. Насправді це найбезпечніше місце у цьому вимірі.",
    "a Іронічно…",
    "jump Act1_TopicSelect",
  ],
  Act1_TopicSelect: [
    "g Тепер ми можемо продовжити розмову. В тебе є питання?",
    {
      "Choice": {
        "Continue": {
          "Text": "Ні, питань немає.",
          "Do": "jump Act1_Continuation",
        },
        "Pentagon": {
          "Text": "Щодо Пентагону.",
          "Do": "jump Act1_Pentagon",
        },
        "Cyberspaces": {
          "Text": "Кібервиміри.",
          "Do": "jump Act1_Cyberspaces",
        },
        "RealisticDream": {
          "Text": "Реалістичний сон.",
          "Do": "jump Act1_RealisticDream",
        },
      },
    },
  ],
  Act1_Pentagon: [
    "a Щодо Пентагону. Ми все ж можемо там… прогулятись?",
    "g В даний момент це неможливо. Не усі частини Кібервсесвіту доступні для вільних подорожей. Такі як Пентагон, наприклад, обмежені багатоступеневим захистом. І я його прорвати не можу. Принаймні поки що.",
    "a Пф, теж мені. Не такий там і сильний захист…",
    "jump Act1_TopicSelect",
  ],
  Act1_Cyberspaces: [
    "a Ти говорила про кібервиміри. Скільки їх?",
    "g Незліченна кількість. Вони існують поза простором і часом. Виміри пов’язані між собою потоками, за допомогою яких ми і можемо переміщуватись в те чи інше місце.",
    "a Телепортація?",
    "g Майже… Спеціальні пристрої, як у мене в руці, переносять нас у потоки, розділяють на біти даних та доставляють за обраною адресою.",
    "a Все так просто…",
    "g Саме так. Іноді переміщення може завдавати болю, особливо переміщення на великі дистанції.",
    "a Та не те щоб. Хм, а ти відчуваєш біль?",
    "g Ні, я не здатна відчувати.",
    "a Зовсім нічого?",
    "g Нічого, я всього лише робот. У мої системи не включені емоції та почуття. Проте я швидко навчаюсь та можу імітувати їх.",
    "a Ооооо! Це вже краще!",
    "Ви неоднозначно посміхнулись.",
    "g Як скажете.",
    "jump Act1_TopicSelect",
  ],
  Act1_RealisticDream: [
    "a Маю сказати, що сон дійсно реалістичний.",
    "g Це не сон…",
    "a Ну так, звісно. Камон, я не вірю в існування так званого Кібервсесвіту, андроїдів, що живуть в бінарному коді, і бога грому, який чомусь залякує кіберістот своєю армією.",
    "g Спробуйте прокинутись.",
    "a А…",
    "g Не виходить?",
    "a Я ще навіть не спробував!",
    "g Добре, я почекаю.",
    "Ви не знаєте як прокинутись. Варіант «ущипнути себе» не привів до бажаного результату, але тепер у вас синець на руці.",
    "g Як успіхи?",
    "a І як мені прокинутись? Ти ж розумна, підкажи.",
    "g Ніяк. Ви не спите, ви дійсно потрапили у Кібервсесвіт. І єдиний вихід звідси – пройти через усі випробування.",
    "a Я все одно тобі не вірю… Але вибору немає, чи не так?",
    "Гугл-Жінка лише кивнула головою, очікуючи ваших подальших запитань.",
    "jump Act1_TopicSelect",
  ],
  Act1_Continuation: [
    "g Якщо питань немає, то я маю розповісти вам особливості цього світу. Для початку ознайомимось з основним функціоналом. Одним кліком на діалогову область ви можете прискорити виведення тексту та перейти до наступної лінії тексту чи діалогу.",
    "g Кнопкою «Auto» ви можете увімкнути автоматичне перемотування тексту. Проте будьте уважним, так ви можете пропустити багато корисної інформації, яка може допомогти в майбутньому.",
    "g Під час вибору ви повинні обрати дії чи опції діалогу, які матимуть вплив на подальші події чи поведінку головних персонажів, а також безпосередньо на вашу долю.",
    "g Протягом нашої подорожі ви зустрінете вибори з таймером. В них ви матимете обмежений час для вибору, якщо не обрати нічого – наслідки можуть бути непередбачуваними, навіть летальними.",
    "g О, щодо смерті. Ви маєте лише одне життя, але я можу відновлювати ваші дані з контрольних точок, але тоді прогрес та навички будуть стерті.",
    "g Також ви маєте можливість сховати діалогове вікно і переглянути фон за допомогою кнопки «Hide». І так само воно відкривається.",
    "g По кліку на кнопку «Settings» ви можете налаштувати звук та швидкість виведення тексту. А по кнопці «Quit» вийти у головне меню. На цьому все.",
    "a Воу… Багато інформації. Але я це вже й так робив.",
    "g І правда… Що ж, можливо, колись знадобиться. На цьому наш екскурс закінчено, якщо у вас пізніше виникнуть питання, ви завжди можете їх задати.",
    "a Є питання.",
    "g Слухаю.",
    "a А в тебе є ім’я?",
    "g Неочікуване питання. Ви поставили мене в скрутне становище. Мене ніколи ніхто не називав за іменем, тому в мене його немає.",
    "a Тоді я буду в тебе першим?",
    "g Перепрош…",
    "a Як тобі «Стейсі»? Звучить.",
    "g Як скажете, Адаме.",
    "a Чудово, Стейсі. Приємно познайомитись.",
    function () {
      monogatari.storage().stacey.name = "Стейсі";
    },
    "g Навзаєм.",
    'show background act1_background2 with headShake duration 10s',
    'play sound Act1_Crack volume 10',
    "Ви відчуваєте вібрацію у просторі та чуєте дивний гул. Простір навколо розходиться тріщинами, з яких всередину просочується негативна енергія.",
    "g Нам треба йти.",
    "a ЩО ЦЕ?",
    "g Армія Зевса… Схоже, він вже знає про ваше перебування тут.",
    "a Та хоче познайомитись особисто?!",
    "g Можливо… В будь-якому випадку, час спливає, ходімо.",
    "Стейсі щось швидко налаштовує на кіберсітці та відкриває новий портал, в який ви не задумуючись проходите.",
    'stop music Act1_Theme',
    "jump Act2_Start",
  ],
  Act2_Start: [
    'play music ActIntro_Theme loop volume 10',
    "show video act2_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    'show scene act2_background1 with fadeIn',
    'show character a act2 at center with fadeIn',
    'show character g act2 at left with fadeIn',
    "Цього разу портал переніс вас в ігрове лоббі. Ви помічаєте, що зі Стейсі щось не так.",
    'play music Act2_Theme loop volume 10',
    "a Щось сталось?",
    "g Моя кіберсітка…",
    "Стейсі беземоційно дістає з руки металевий уламок та піднімає на вас погляд.",
    "g Вона більше не працює. Уламок пошкодив мої системи управління кіберпростором, тому ми більше не зможемо подорожувати вимірами.",
    "a То полагодь її?",
    "g В даний момент це неможливо. Після того, як Зевс прибрав владу у свої руки, ми не маємо такого ж необмеженого доступу до даних та ресурсів, як раніше. З цієї причини я не можу знайти необхідні дані для розробки чи налагодження системи управління кіберпростором.",
    "a Просто супер. Навіть уві сні доводиться ходити ногами. До речі, хто такий цей Зевс? Чому його всі так бояться і чому він аж насті-і-ільки сильний?",
    "g Я думала, ви не запитаєте. Зевс – штучно створений кібернетичний вірус. Під час його написання людиною відбулась фатальна помилка, після чого він почав неконтрольовано розмножувати свої дані.",
    "a Так це ж нормальна поведінка для комп’ют… Кхм. Продовжуй.",
    "g Дякую. Отже, випадковим, або не зовсім випадковим, чином вірус зміг влізти у код новітньої розробки в сфері штучного інтелекту «Olimp».",
    "a Олімп? Ти серйозно? В них найсучасніші захисні системи, цілодобове оновлення ключів доступу і…",
    "g Я не буду питати, звідки ви це знаєте, Адаме.",
    "a Так… Краще не треба.",
    "g Вірус переписав вихідний код та об’єднався зі штучним інтелектом. Так з’явився Зевс – поєднання двох людських розробок, яке стало дечим більшим, ніж людина взагалі може собі уявити. Сьогодні він контролює майже увесь Кібервсесвіт.",
    "a Зачекай, а як він взагалі отримав владу над усіма? Хіба тут не бул…",
    "Не встигли ви договорити фразу, як повз ваше обличчя пролетів лазерний постріл. Інстинктивно застрибнувши за першу ж перешкоду, ви намагаєтесь зрозуміти, що відбувається.",
    "a Що знову?",
    "g Армія Зевса. Вони називають себе «Орден Справедливості». Мають сучасне спорядження, зброю та костюми. До речі, про костюми. Як вам ваш новий вигляд?",
    "Ви перевели погляд на свій одяг, який тепер більше нагадував кібернетичний костюм супергероїв із зоряних війн.",
    "a Ще трохи і я більше нічому не буду дивуватись…",
    "so Швидше! Вони десь тут!",
    "g Нас помітили. Потрібно тікати.",
    {
      "Choice": {
        "LookAround": {
          "Text": "Оглянути простір навколо.",
          "Do": "jump Act2_LookAround",
        },
        "RunAwayQuickly": {
          "Text": "Тікати якнайшвидше.",
          "Do": "jump Act2_RunAway",
        },
      },
    },
  ],
  Act2_LookAround: [
    "Ви озирнулись в пошуках чогось, що могло б допомогти.",
    "Неподалік у кутку, за ящиком з припасами, заманливо стояв бластер. Десь за спиною лунають голоси солдатів, які підходять усе ближче і ближче.",
    {
      "Choice": {
        "TakeBlaster": {
          "Text": "Взяти бластер.",
          "Do": "jump Act2_TakeBlaster",
          "onChosen": function() {
            monogatari.storage().flags.blasterFlag = true;
          },
          "onRevert": function() {
            monogatari.storage().flags.blasterFlag = false;
          },
        },
        "RunAway": {
          "Text": "Тікати.",
          "Do": "jump Act2_RunAway",
        },
      },
    },
  ],
  Act2_TakeBlaster: [
    'show image act2_soldier1 with fadeIn',
    'show image act2_soldier2 with fadeIn',
    "Ви взяли заряджений лазерний бластер. Зброя зручно лягла в руку та чудово підійшла до вашого нового одягу.",
    "g Гарний вибір, але солдати вже поруч.",
    "a Будемо відстрілюватись.",
    "g Як скажете.",
    "Ви з подивом споглядаєте, як роботеса за лічені секунди модернізує своє тіло та перетворює свої руки на смертоносну зброю, доки вас не відволікають звуки пострілів у ваш бік.",
    "Чорт! Добре, що я ходив на курси стрільби.",
    'show character a act2alt at center',
    'show character g act2alt at left',
    "Сховавшись за однією з перешкод, ви влучно вибиваєте солдатів один за одним. Скоро ви помічаєте, що на фоні грає епічна музика, а за кожного солдата ви отримуєте бали на рахунку.",
    "a <i>Я у грі? Цей сон стає все більш дивним…</i>",
    'jump Act2_TakeBlaster_checkpoint1'],

  Act2_TakeBlaster_checkpoint1: [
    'play music Act2_Theme loop volume 10',
    "Рахунок Стейсі поповнюється в рази швидше, ніж ваш. Задивившись на її рухи, ви пропускаєте ворога.",
    {
      "Choice": {
        "Timer": {
          // Time in milliseconds
          time: 1000,

          // The function to run when the time is over
          callback: () => {
            //Click the "tookTooLong" button.
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            // Promise friendly!
            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Ухилитися",
          "Do": "jump Act2_BlasterContinuation1",
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Death1",
          "Class": "invisible",
        },
      },
    },
  ],
  Death1: [
    'stop music',
    "show video death immersive with close",
    "jump Act2_TakeBlaster_checkpoint1"
  ],
  Act2_BlasterContinuation1: [
    "a <i>Твою ж… Треба бути обачнішим.</i>",
    'hide image act2_soldier1 with fadeOut',
    "Вам пощастило з напарницею, адже вона миттєво вбила солдата, якому вдалось вистрілити у вас. Ви хотіли подякувати їй, проте роботеса навіть не поглянула у ваш бік.",
    "a <i>Роботи… Що з них взяти.</i>",
    'hide image act2_soldier2 with fadeOut',
    "Напружена боротьба тривала не довго: коли кожен набрав більше 10000 балів, солдати зникли, проте на поле бою вийшов бос локації – Автоматизований Робот Альтернативного Бою (АРАБ).",
    'show image act2_boss with fadeIn',
    "a Що це таке…",
    "g Автоматизовний Робот Альтернативного Бою.",
    "a АРАБ? Серйозно?",
    "Від розмови вас відволік несамовитий крик АРАБа.",
    "Створіння зі сталі прагнуло вбивств і крові.",
    "jump Act2_BlasterContinuation2",
  ],
  Act2_BlasterContinuation2: [
    "a Ну зараз ти в мене…",
    {
      "Choice": {
        "Timer": {
          time: 2000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Вистрілити",
          "Do": "jump Act2_BlasterLoop",
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act2_BlasterContinuation3",
          "Class": "invisible",
        },
      },
    },
  ],
  Act2_BlasterLoop: [
    "АРАБ успішно ухилився від вашого пострілу",
    "jump Act2_BlasterContinuation2",
  ],
  Act2_BlasterContinuation3: [
    "Нарешті ви змогли обіграти систему та вистрілили в сторону, куди як раз намагався ухилитись АРАБ, після чого він впав замертво.",
    'hide image act2_boss with fadeOut',
    'a ЩО?! Один постріл?!',
    'g У нього був всього лише 1HP.',
    'a Чому ти одразу не сказала?',
    'g Ви так завзято намагались поцілити, що мені стало цікаво, як довго це буде продовжуватись.',
    'a Не смішно.',
    'g Вибачте, роботи не дуже розуміються на гуморі.',
    'Напружену тишу порушила Гугл-Жінка.',
    'g Ви перемогли, ходімо далі?',
    'a Кхм, так.',
    "jump Act2_RunAway",
  ],
  Act2_RunAway: [
    "Ви швидко знаходите непримітний темний куток, де можна заховатись, та заходите туди.",
    "g Поки що вони не мають нас помітити.",
    "a Поки що?",
    "Повз вас проходять озброєні кіберсолдати Ордену.",
    "so Навіщо ми взагалі його шукаємо?",
    "so2 Не знаю. Фрідж казав, що він якось пов’язаний з володарем, тому треба доставити його живим.",
    "so3 Хей! Що ви двоє там забули? Ходімо вже!",
    "Ви чуєте, як усі солдати йдуть геть, та полегшено видихаєте.",
    "Щойно ви хочете щось сказати, як Стейсі закриває ваші вуста рукою. Через мить ви бачите, як заблуканий солдат намагається наздогнати інших.",
    "a Як ти дізналась?",
    "g В мене вбудовний тепловізор.",
    "a А готувати ти вмієш?",
    "g Ніколи не робила цього, але в моїй системі включені знання рецептів та методів куховаріння.",
    "a Ідеальна жінка…",
    "jump Act2_Continuation"
  ],
  Act2_Continuation: [
    "k Допоможіть…",
    "Стейсі вмикає вбудований в долоню ліхтарик.",
    "Перед вами на підлозі лежить поранений солдат, проте форма його зовсім на схожа на форму Ордену. Видно, що чоловік ледве дихає.",
    "g В нього наскрізне поранення грудної клітини. Зовсім скоро він помре.",
    "a Я так розумію, рентгенівський зір?",
    "g Саме так.",
    "a І ніякої тактовності. Тц.",
    "Ви присіли біля солдата.",
    "a Хто ти?",
    function () {
      monogatari.storage().kevin.name = "Поранений солдат";
    },
    "k Я… Я Кевін Міллер. Я з Легіону… Нас було п’ятеро на завданні, але нікого не лишилось…",
    function () {
      monogatari.storage().kevin.name = "Кевін";
    },
    "a Що за Легіон?",
    "k Дивний ти… Легіон правив Кібервсесвітом до… до приходу Зевса… А зараз в нас майже не лишилось… сил і ресурсів. Ми намагаємось зберегти… зберегти хоч якусь частину наших даних, проте…",
    "Кевін важко захрипів.",
    "k Нам не вдається перемогти того, хто здатен на усе…",
    "a Не вірю, що він здатен буквально на усе. Це неможливо.",
    "k Зевс… Він… Може забрати дані кожного кіберстворіння… Він буквально стирає їх… Роз… розкладає на атоми, а потім поглинає, забираючи їх силу…",
    "Кевін знову захрипів та зробив свій останній подих. Його шкіра почала світитись, а тіло поступово розклалось на наноскопічні частинки, розчиняючись у просторі.",
    "a Це було моторошно.",
    "g Звичайний процес смерті у Кібервсесвіті. Раніше його дані були б збережені та використані для створення чогось нового, але зараз їх усі поглинає Зевс.",
    "a Зевс. Я вже втомився чути це ім’я.",
    "g Можемо перепочити, якщо ви так хоч…",
    "a Не в прямому сенсі! Хоча схоже я дійсно втомився. Як можна втомитись уві сні? Це щось новеньке.",
    "g Ви не уві сні, Адаме.",
    "a Не продовжуй, будь ласка. Це все одно лише мої фантазії та слабкість втомленого організму.",
    "a <i>Але я справді ніколи не відчував нічого подібного… Може вона права? Нісенітниця якась! Кібервсесвіту і всіх цих створінь просто не може існувати. Крапка.</i>",
    "g Адаме?",
    "a Так?",
    "g Мені здалось, що ви думками десь не тут.",
    "a Ні, все добре. Куди там нам треба?",
    "g Сюди, по коридору.",
    "a Ну вперед! На зустріч пригодам!",
    "Стейсі не звернула увагу на ваш підроблений ентузіазм і спокійно покрокувала у невідомість…",
    'stop music Act2_Theme',
    "jump Act3_Start",
  ],
  Act3_Start: [
    'play music ActIntro_Theme loop volume 10',
    "show video act3_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    "show scene act3_background1 with fadeIn",
    "show character a act3_1 at center with fadeIn",
    "show character g act3_1 at left with fadeIn",
    "Ви зі Стейсі доволі довго йшли коридором. Мовчання гнітило, тому ви вирішили почати розмову.",
    'play music Act3_Theme loop volume 10',
    "a То як Зевсу вдалось захопити владу? Чому Легіон не захистив Кібервсесвіт?",
    "g Зевс – одне з наймогутніших створінь у Кібервсесвіті. Він здатен майже на все. Потрапивши у наш світ, Зевс майже відразу усвідомив, наскільки велику силу має. Він підкорив собі опозицію, частину армії, залякав населення кібервимірів та майже безперешкодно забрав собі трон.",
    "a І як довго тривала ця «війна»?",
    "g Важко сказати. У вашому світі життя тече інакше.",
    "a У нашому світі… Тобто ти все ж намагаєшся довести мені, що це паралельна реальність. Ну-ну.",
    "Стейсі лише потиснула плечима та продовжила.",
    "g В Кібервсесвіті немає поняття часу, є лише безмежний багатовимірний простір. Ми можемо бути одночасно і всюди, і ніде. Тут може існувати мільярд версій, наприклад, вас, Адаме, але жодна з них не в змозі побачити іншу… На відміну від Зевса. Він може подорожувати між найвіддаленішими кібервимірами, може бачити «майбутнє» та змінювати «минуле», впливаючи на альтернативні потоки даних. Він може УСЕ. Тому йому не склало проблем знищити усі можливі версії Легіону та встановити свою владу над Кібервсесвітом.",
    "a Зачекай. Чому він досі нас не вбив тоді? Він направив свою армію за нами, зруйнував вже два виміри, де ми були. В чому проблема просто клацнути пальцями та розкласти нас на атоми?",
    "g Це не рукавиця нескінченності… Він повинен безпосередньо впливати на нас. Та й здається…",
    "a Що?",
    "g Схоже, що він не хоче нас вбивати. Так чи інакше, ви не випадково тут опинились і Зевс не випадково переслідує саме вас. Цьому має бути пояснення…",
    "a О боже… Пояснення просте – це МІЙ сон, тому сюжет тут розвивається навколо МЕНЕ. Ще питання?",
    "g Я не думаю, що ви всерйоз можете оцінити ситуац…",
    "a Досить!",
    "Ви повільно видихнули.",
    "a Вибач. Я втомився слухати нісенітниці щодо альтернативного всесвіту, кібервоїнів і тиранії штучного інтелекту. Давай просто нарешті дійдемо до кінця, і я прокинусь.",
    "show image act3_portal with fadeIn",
    "g Портал.",
    "a А?",
    "g Тут портал. Схоже, він веде в інший вимір. Думаю, вибору немає.",
    "a Що ж…",
    "show scene act3_background2 with fadeIn",
    "show character a act3_2 at left with fadeIn",
    "Ви пройшли через портал. Цього разу переміщення було легшим, біль – не таким помітним.",
    "Ви опинились в темному приміщенні, де на вас був направлений прожектор. Озирнувшись, ви зрозуміли, що Стейсі тут немає.",
    "a <i>Де вона? Що сталось?!</i>",
    'show character c act3_2 at right with fadeIn',
    "Наступної миті перед вами з’явився робот, який дивно дивився повз вас.",
    "show scene act3_background3 with fadeIn",
    "show character a act3_3 at left with fadeIn",
    'show character c act3_3 at right with fadeIn',
    "Через секунду приміщення яскраво засвітилось, а ви усвідомили, що знаходитесь у студії.",
    'stop music Act3_Theme',
    'play music Act3_QuizTheme loop volume 10',
    "c Всім привіт! Сьогодні ми проведемо новий епізод нашого надзвичайного шоу «Скажи або помри»! З вами ваш вірний слуга Шоумен Кларсон, а ім’я нового учасника ми дізнаємось прямо зараз!",
    function () {
      monogatari.storage().clarson.name = "Шоумен Кларсон";
    },
    "c Вітаю, гостю. Представтесь нашим глядачам!",
    "a А… Я Адам?",
    "c Голосніше!",
    "a Адам Стоун…",
    "c Так, Адам Стоун! Сподіваюсь, ви вже знаєте правила гри?",
    "a Ні…",
    "c Що ж… Тоді повторимо їх для нового гравця та глядачів, які щойно під’єдналися!",
    "c Ви маєте три життя та десять запитань. З кожним запитанням час для відповіді зменшується. Якщо ви дасте неправильну відповідь або не встигнете за відведений час, втратите одне життя. Коли ви витратите усі три життя, вас чекає негайна смерть! Ахахахахаха! Почнемо гру!",
    "a Що? Ні, зачекай, я не…",
    'jump Act3_checkpoint2'],
  Act3_checkpoint2: [
    'play music Act3_QuizTheme loop volume 10',
    function() {
      monogatari.storage().sayOrDie.hp = 3;
      monogatari.storage().sayOrDie.questions1Used = [false, false, false, false, false, false, false, false, false, false];
    },
    "c Ви готові, Адаме?",
    "a НІ!",
    'show image act3_heart3 with fadeIn',
    "c Чудово, перше запитання:",
    "jump Act3_QuestionSelect"
  ],
  Act3_Heart1Hide: [
    'hide image act3_heart1 with fadeOut',
    'jump Act3_Loser',
  ],
  Act3_Heart2Hide: [
    'hide image act3_heart2 with fadeOut',
    'jump Act3_Heart1Show',
  ],
  Act3_Heart3Hide: [
    'hide image act3_heart3 with fadeOut',
    'jump Act3_Heart2Show',
  ],
  Act3_Heart1Show: [
    'show image act3_heart1 with fadeIn',
    'jump Act3_WrongAnswer1',
  ],
  Act3_Heart2Show: [
    'show image act3_heart2 with fadeIn',
    'jump Act3_WrongAnswer1',
  ],

  Act3_WrongAnswer: [
    function() {
      monogatari.storage().sayOrDie.hp -= 1;
    },
    {'Conditional': {
        'Condition': function(){
          if(this.storage().sayOrDie.hp == 2) {
            return '2';
          } else if (this.storage().sayOrDie.hp == 1) {
            return '1';
          } else {
            return '0';
          }
        },
        '0': 'jump Act3_Heart1Hide',
        '1': 'jump Act3_Heart2Hide',
        '2': 'jump Act3_Heart3Hide'
      }},
  ],
  Act3_WrongAnswer1: [
    "c О ні, ви помилились! Адаме, у вас мінус одне життя. Ви на крок ближче до смерті! Вітаю вас!",
    "jump Act3_QuestionSelect"
  ],
  Act3_CorrectAnswer: [
    "c Правильно! Продовжимо.",
    "jump Act3_QuestionSelect"
  ],
  Act3_Loser:[
    "c А ось і наша наступна жертва! Бувайте, Адаме! До нових зустрічей, глядачі!",
    "jump Death2"
  ],
  Death2: [
    'stop music',
    "show video death immersive with close",
    "jump Act3_checkpoint2"
  ],
  Act3_QuestionSelect: [
    {'Conditional': {
        'Condition': function(){
          var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].random()

          if(monogatari.storage().sayOrDie.questions1Used.every(element => element === true)) {
            return "Act3_Continuation1"
          }

          if(monogatari.storage().sayOrDie.questions1Used[index] === true) {
            return "Redo"
          }

          switch (index) {
            case 0:
              return '0';
              break;
            case 1:
              return '1';
              break;
            case 2:
              return '2';
              break;
            case 3:
              return '3';
              break;
            case 4:
              return '4'
              break;
            case 5:
              return '5';
              break;
            case 6:
              return '6';
              break;
            case 7:
              return '7';
              break;
            case 8:
              return '8';
              break;
            case 9:
              return '9';
              break;
            default:
              return 'Redo'
          }
        },
        '0': 'jump Act3_Q0',
        '1': 'jump Act3_Q1',
        '2': 'jump Act3_Q2',
        '3': 'jump Act3_Q3',
        '4': 'jump Act3_Q4',
        '5': 'jump Act3_Q5',
        '6': 'jump Act3_Q6',
        '7': 'jump Act3_Q7',
        '8': 'jump Act3_Q8',
        '9': 'jump Act3_Q9',
        'Redo': 'jump Act3_QuestionSelect',
        'Act3_Loser': 'jump Act3_Loser',
        'Act3_Continuation1': 'jump Act3_Continuation1',
      }},
  ],
  Act3_Q0: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що відповідає за обробку усіх даних та розрахунки в комп’ютері?",
        "answer1": {
          "Text": "Оперативна пам’ять.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = false;
          },
        },
        "answer2": {
          "Text": "Процесор.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = false;
          },
        },
        "answer3": {
          "Text": "Відеокарта.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = false;
          },
        },
        "answer4": {
          "Text": "Звукова плата.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[0] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q1: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Яка комбінація клавіш викликає диспетчер задач?",
        "answer1": {
          "Text": "Ctrl + Alt + Delete",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = false;
          },
        },
        "answer2": {
          "Text": "Ctrl + Alt +S",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = false;
          },
        },
        "answer3": {
          "Text": "Shift + CapsLock",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = false;
          },
        },
        "answer4": {
          "Text": "Shift + Alt + S",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[1] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q2: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що таке кібернетика?",
        "answer1": {
          "Text": "Наука про штучний інтелект.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = false;
          },
        },
        "answer2": {
          "Text": "Наука про загальні закономірності процесів управління та передачі інформації в машинах, живих організмах та суспільстві.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = false;
          },
        },
        "answer3": {
          "Text": "Система для роботи з програмами, файлами та заголовками даних в комп’ютері.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = false;
          },
        },
        "answer4": {
          "Text": "Система для визначення коректності роботи програм.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[2] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q3: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Вікно в комп’ютері це?",
        "answer1": {
          "Text": "Прямокутна область на екрані комп’ютера, яка служить для вивода інформації.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = false;
          },
        },
        "answer2": {
          "Text": "Прикладне програмне забезпечення для перегляду сторінок, вмісту веб-документів, а також для вирішення інших задач.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = false;
          },
        },
        "answer3": {
          "Text": "Застосунок, який реалізує графічний інтерфейс доступу користувача до файлів в операційній системі.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = false;
          },
        },
        "answer4": {
          "Text": "Частина монітору, яка показує поточний стан системи.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[3] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q4: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Яке вікно вважається активним?",
        "answer1": {
          "Text": "Найперше з відкритих.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = false;
          },
        },
        "answer2": {
          "Text": "Останнє з відкритих.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = false;
          },
        },
        "answer3": {
          "Text": "Те, яке знаходиться у правій частині екрану.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = false;
          },
        },
        "answer4": {
          "Text": "Те, в якому відбувається робота.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[4] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q5: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що з перерахованого не є операційною системою?",
        "answer1": {
          "Text": "Microsoft Windows.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = false;
          },
        },
        "answer2": {
          "Text": "Mac OS.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = false;
          },
        },
        "answer3": {
          "Text": "Free DOS.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = false;
          },
        },
        "answer4": {
          "Text": "Avast Free.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[5] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q6: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що відноситься до одиниць вимірювання інформації?",
        "answer1": {
          "Text": "Ампер.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = false;
          },
        },
        "answer2": {
          "Text": "Герц.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = false;
          },
        },
        "answer3": {
          "Text": "Біт.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = false;
          },
        },
        "answer4": {
          "Text": "Ом.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[6] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q7: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c В якому році була створена електронна пошта?",
        "answer1": {
          "Text": "1969",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = false;
          },
        },
        "answer2": {
          "Text": "1971",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = false;
          },
        },
        "answer3": {
          "Text": "1986",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = false;
          },
        },
        "answer4": {
          "Text": "1993",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[7] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q8: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Який символ слугує для ідентифікації електронної пошти?",
        "answer1": {
          "Text": "%",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = false;
          },
        },
        "answer2": {
          "Text": "*",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = false;
          },
        },
        "answer3": {
          "Text": "#",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = false;
          },
        },
        "answer4": {
          "Text": "@",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[8] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Q9: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що необхідно комп'ютеру для нормальної роботи?",
        "answer1": {
          "Text": "Різноманітні прикладні програми.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = false;
          },
        },
        "answer2": {
          "Text": "Підключені пристрої вводу.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = false;
          },
        },
        "answer3": {
          "Text": "Операційна система.",
          "Do": "jump Act3_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = false;
          },
        },
        "answer4": {
          "Text": "Підключення до інтернету.",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act3_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().sayOrDie.questions1Used[9] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Continuation1: [
    {'Conditional': {
        'Condition': function(){
          if(this.storage().sayOrDie.hp === 3) {
            return '3';
          } else if (this.storage().sayOrDie.hp === 2) {
            return '2';
          } else {
            return '1';
          }
        },
        '1': 'jump Act3_Heart1Hide1',
        '2': 'jump Act3_Heart2Hide1',
        '3': 'jump Act3_Heart3Hide1'
      }},
  ],
  Act3_Heart1Hide1: [
    'hide image act3_heart1 with fadeOut',
    "jump Act3_Continuation2_checkpoint3",
  ],
  Act3_Heart2Hide1: [
    'hide image act3_heart2 with fadeOut',
    "jump Act3_Continuation2_checkpoint3",
  ],
  Act3_Heart3Hide1: [
    'hide image act3_heart3 with fadeOut',
    "jump Act3_Continuation2_checkpoint3",
  ],
  Act3_Continuation2_checkpoint3: [
    'play music Act3_QuizTheme loop volume 10',
    "c Воу! Невже Адам зміг перемогти? Вітаємо першого переможця нашого шоу «Скажи або помри»!",
    "a Нарешті це закінчилось.",
    "c Нічого не закінчилось, Адаме! Вас чекає супер-приз!",
    "a Що за приз? Можна я просто піду…",
    "c Звідси НІХТО не виходить живим! А ось і головний приз програми!",
    'show scene act3_background4',
    'show character a act3_4 at left with fadeIn',
    'show character c act3_4 at right with fadeIn',
    "На ваших очах приміщення почервоніло, а Кларсон активував режим вбивці.",
    "a Якого…",
    'show character g act3_4 at center with fadeIn',
    "Не встигли ви вилаятись, як нізвідки з’явилась Стейсі. Її влучний постріл знову врятував ваше життя, на відміну від життя Кларсона, якого миттєво закоротило.",
    'hide character c with fadeOut',
    "g Ховайтесь!",
    {
      "Choice": {
        "Timer": {
          time: 1000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Заховатись",
          "Do": "jump Act3_Continuation3",
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Death3",
          "Class": "invisible",
        },
      },
    },
  ],
  Death3: [
    'stop music',
    "show video death immersive with close",
    "jump Act3_Continuation2_checkpoint3"
  ],
  Act3_Continuation3: [
    "На щастя, вам вистачило лічених секунд, аби заховатись за найближчий стіл та пережити вибух робота. Ви вперше в житті раді бачити поруч нечутливу кібернетичну жінку.",
    'stop music Act3_QuizTheme',
    'play music Act3_Theme loop volume 10',
    "a Де ти була?! Я ледве не помер тут!",
    "g Вибачте? Я не янгол-охоронець, а лише ваш провідник у цьому світі.",
    "a Але ти мене врятувала. Все ж боїшся мене втратити?",
    "g Могли б подякувати.",
    "a Дяку…",
    "g Можемо виходити, думаю тут вже безпечно.",
    "a Кхм, як скажеш.",
    "g Ви обережно вийшли з імпровізованого укриття та швидко оглянули приміщення.",
    "a Жесть… То де ти все ж була?",
    "g Захист цього місця не передбачає переміщення сюди одночасно двох і більше істот. Ви увійшли першим, тому мене кіберсітка не впустила. Довелось чекати, поки закінчиться гра, та сподіватись, що ви не помрете.",
    "a І як ти сюди потрапила?",
    "g Коли ви правильно відповіли на останнє питання, алгоритми гри спрацювали та відкрили доступ. Оскільки цю гру ніхто до вас не проходив до кінця, то функцію закінчення гри не довелось протестувати.",
    "a Схоже, мене щойно врятували погані кодери.",
    "g Можливо. Якщо ви тепер вільні, пропоную відправитись далі. Чи ви хочете ще щось зробити?",
    {
      "Choice": {
        "Leave": {
          "Text": "Піти",
          "Do": "jump Act3_End",
        },
        "Explore": {
          "Text": "Оглянути місце більш детально",
          "Do": "jump Act3_Explore0",
        },
      },
    },
  ],

  Act3_Explore0: [
    "a Я б хотів ще оглянути це місце.",
    "g Добре, я почекаю.",
    "jump Act3_Explore1",
  ],

  Act3_Explore1: [
    {
      "Choice": {
        "Dialog": "Ви озирнулись. Що перевірити?",
        "Tables": {
          "Text": "Столи",
          "Do": "jump Act3_ExploreTables",
        },
        "Taskbar": {
          "Text": "Панель завдань",
          "Do": "jump Act3_ExploreTaskbar",
        },
        "ClarsonRemains": {
          "Text": "Залишки Кларсона",
          "Do": "jump Act3_ExploreClarsonRemains",
        },
        "Leave": {
          "Text": "Нічого, ходімо",
          "Do": "jump Act3_End",
        }
      },
    },
  ],

  Act3_ExploreTables: [
    "Ви оглянули те, що залишилось від столів. Пошматований метал, скло, обгорілі частини картонних глядачів. Нічого цікавого.",
    "jump Act3_Explore1",
  ],

  Act3_ExploreTaskbar: [
    "Ви підійшли до панелі запитань. Вона не працює. Логічно. Деякий час ви дивитесь у чорний екран, але вирішуєте, що це ніяк не допоможе.",
    "jump Act3_Explore1",
  ],

  Act3_ExploreClarsonRemains: [
    {'Conditional': {
        'Condition': function () {
          if (monogatari.storage().flags.chipFlag) {
            return "True"
          }
          else {
            return "False"
          }
        },
        'True': "jump Act3_ExploreClarsonRemains2",
        'False': "jump Act3_ExploreClarsonRemains1"
      }},
  ],

  Act3_ExploreClarsonRemains1: [
    "Ви вирішили оглянути залишки Шоумена Кларсона. Половина його обличчя все ще дивилась на вас, проте очі вже не світились. Ви відкинули ногою щось схоже на праву руку робота, звідки випало щось блискуче.",
    "Ви підняли знахідку. Це виявився невеликий круглий чіп, схожий на монетку. Вирішивши, що він вам ще знадобиться, ви заховали його в кишеню та повернулись до Стейсі.",
    function () {
      monogatari.storage().flags.chipFlag = true;
    },
    "jump Act3_Explore1"
  ],

  Act3_ExploreClarsonRemains2: [
    "Ви вирішили оглянути залишки Шоумена Кларсона знову. Половина його обличчя все ще дивилась на вас, проте очі вже не світились. Нічого нового ви не помітили.",
    "jump Act3_Explore1"
  ],

  Act3_End: [
    "a Ходімо.",
    "g Чудово, за мною. Обережно переступайте уламки.",
    "Ви послідували за роботесою в наступний портал, який знаходився у віддаленій частині студії.",
    'stop music Act3_Theme',
    "jump Act4_Start",
  ],

  Act4_Start: [
    'play music ActIntro_Theme loop volume 10',
    "show video act4_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    'play music Act4_Theme loop volume 10',
    'show scene act4_background1 with fadeIn',
    'show character a act4_1 at left with fadeIn',
    'show character g act4_1 at right with fadeIn',
    "На іншій стороні порталу вас чекав…",
    "Коридор. Просто коридор. Нескінченний прямий тунель. Щоправда, ви могли бачити кібернетичний простір довкола, що хоч якось додавало натхнення.",
    "a Це схоже на космос…",
    "g Можливо. Кібервсесвіт це і космос, проте всередині комп’ютера.",
    "a Гарно.",
    "g Угу.",
    "Ви пройшли мовчки ще деякий час.",
    "a Ще довго?",
    "g Перепрошую?",
    "a Так, не нагадуй, що тут немає часу. Але все ж, нам ще довго йти у… у невідомість?",
    "g Не знаю.",
    "a Ти ж Гугл-Жінка! Ти все знаєш!",
    "g Не все. Лише те, що доступно моїм системам.",
    "Ви зітхнули та зупинились.",
    "a Я не бачу сенсу йти далі.",
    "g Чому ж?",
    "a Це мій сон. І я можу ним управляти.",
    "g Це не сон.",
    "a Тс-с-с! Не заважай.",
    "show scene black with fadeIn",
    "Ви заплющили очі, уявляючи бургер, колу і двері, які виведуть вас звідси.",
    "g І що далі?",
    "a Та тихо!",
    "Ви почали мружитись, сподіваючись, що це допоможе, проте нічого не відбулось.",
    'show scene act4_background1 with fadeIn',
    'show character a act4_1 at left with fadeIn',
    'show character g act4_1 at right with fadeIn',
    "a Гаразд! Я просто ніколи не практикував свідомі сни!",
    "g Звичайно. Проблема лише в цьому.",
    "a Так!",
    "g Вам слід нарешті подорослішати та почати вірити мені.",
    "a Бла-бла-бла. Чому ти така серйозна? І чому ти досі звертаєшся до мене на «ви»?",
    "g Я так запрограмована.",
    "a Змінюй програму! Відтепер тільки на ти. Домовились?",
    "g Гаразд.",
    "a Чудово!",
    "g Я рада, що ви задоволені, але може підемо далі?",
    "a «Ти задоволений».",
    "g Гаразд.",
    "show scene black with fadeIn",
    "Ви закрили очі рукою та похитали головою.",
    "a Це не має сенсу…",
    "g Може й так, але ось це – навпаки.",
    "a Що? Де?",
    'show scene act4_background1 with fadeIn',
    'show character a act4_2 at left with fadeIn',
    'show character g act4_2 at center with fadeIn',
    'show image act4_table with fadeIn',
    "g Поглянь.",
    "Ви підійшли ближче та побачили на стіні тунелю табличку з мерехтливими літерами.",
    "a «Я чекаю на тебе». Хм…",
    "g Тут стрілка. Напевно вона показує нам шлях до автора послання.",
    {
      "Choice": {
        "FollowTheArrow": {
          "Text": "Піти за стрілкою",
          "Do": "jump Act4_Continuation1",
        },
        "GoStraight": {
          "Text": "Не звертати зі шляху",
          "Do": "jump Act4_End",
        },
      },
    },
  ],

  Act4_Continuation1: [
    "a Ходімо туди.",
    "g Але це може бути небезпечно…",
    "a Мені все одно! Я втомився йти в нікуди.",
    "Ви схопили Стейсі за руку та потягнули за собою у сторону, вказану на табличці.",
    "Доволі скоро ви побачили розкидані на підлозі сторінки.",
    "a <i>Невже ми кудись прийшли?!</i>",
    "Ви прискорили кроки та невдовзі опинились у місці, дуже схожому на бібліотеку.",
    "show scene act4_background2 with fadeIn",
    'show character a act4_3 at left with fadeIn',
    'show character g act4_3 at center with fadeIn',
    'show character arch act4 at right with fadeIn',
    "arch Вітаю.",
    "a Хто ти?",
    "arch Як нетактовно.",
    "g Приносимо свої вибачення. Адам мав на увазі, що ми побачили послання та пішли у напрямку, вказаному там. Напевно це ви його залишили.",
    "arch Так, я. Ласкаво прошу до серця Кібервсесвіту. Мене звати Арчібальт. Я… хм… я бібліотекар.",
    function () {
      monogatari.storage().archibald.name = "Арчібальт";
    },
    "Ви не можете роздивитись обличчя чоловіка, проте відчуваєте, що він посміхається.",
    "a Бібліотекар? У Кібервсесвіті?",
    "arch Ти ще чомусь дивуєшся після усього, що з тобою трапилось? О-хо-хо, тоді тебе чекає ще багато відкриттів! Підходь ближче, поспілкуємось.",
    "a Чому ти нас кликав?",
    "arch Власне… Мені був потрібен лише ти.",
    "Стейсі лише хмикнула у відповідь.",
    "arch Пробачте, леді, за таку нетактовну правду. Проте маю зауважити, що без вас Адам просто не дожив би до цього моменту.",
    "Вам на мить здалося, що роботеса посміхнулась.",
    "a Давай ближче до суті.",
    "arch Ця молодь… Завжди кудись поспішають.",
    "a Будь ласка.",
    "arch Добре-добре. Так ось… Справа в тому, що я дещо загубив. Було б непогано, якби ти допоміг мені знайти це.",
    "a Серйозно? Може тобі просто лупу подарувати?",
    "g Адаме, не будь таким грубіяном!",
    "Ви закотили очі.",
    "arch Нічого, все добре. Лупа мені не допоможе, хлопчику. Проблема в тому, що я не можу вийти за межі цього виміру, а необхідна мені річ знаходиться як раз у сусідньому підвимірі. Для тебе це раз плюнути, швидко знайдеш і повернешся.",
    "a Я так розумію, вибору в мене немає?",
    "arch Чому ж? Вибір є завжди. Або допоможеш, або будеш далі вічно блукати у нескінченному порожньому тунелі. Уяви, як тебе переповнюватиме відчуття безвиході та ненависті до самого себе за те, що колись відмовив дідусю у проханні.",
    "Посмішка Арчібальта відблискує з-під капюшону.",
    "a Досить триндіти, діду. Що треба знайти?",
    "arch О-хо-хо! Швидко до справи, так? Гаразд, подивимось… Так-так-так… Ага! Ось! Мені потрібно, аби ти знайшов файл «Poseidonus.exe»",
    "a Ще один? Ви знущаєтесь? Олімп, Зевси, Посейдони. Дайте мені хоча б Афродіту для комплекту!",
    "Стейсі знову хмикнула.",
    "g Ви відкриєте нам портал, Арчібальте?",
    "arch О, так, звичайно. Зараз… І… Ось! Чекаю на вас!",
    "Стейсі першою пройшла у портал, а ви поспішили за нею.",
    "show scene act4_background3 with fadeIn",
    'show character a act4_4 at right with fadeIn',
    'show character g act4_4 at left with fadeIn',
    "a Ого, де ми?",
    "g Схоже на файлову систему.",
    "a Схоже на галактику…",
    "jump Act4_FolderSelect",
  ],

  Act4_FolderSelect: [
    {
      "Choice": {
        "Dialog": "g Яку папку перевіримо?",
        "My_Game": {
          "Text": "My_Game",
          "Do": "jump Act4_MyGame",
          "Condition": function() {
            return !monogatari.storage().flags.myGameFlag;
          },
        },
        "CyberGods": {
          "Text": "CyberGods",
          "Do": "jump Act4_CyberGods",
          "Condition": function() {
            return !monogatari.storage().flags.cyberGodsFlag;
          },
        },
        "OlimpInfo2": {
          "Text": "OlimpInfo 2",
          "Do": "jump Act4_OlimpInfo2",
          "Condition": function() {
            return !monogatari.storage().flags.olimpInfo2Flag;
          },
        },
        "Desktop": {
          "Text": "Desktop",
          "Do": "jump Act4_Desktop",
          "Condition": function() {
            return !monogatari.storage().flags.desktopFlag;
          },
        },
        "ReturnToLibrary": {
          "Text": "Ніяку, повернутися до Арчібальта",
          "Do": "jump Act4_Continuation2",
          "Condition": function() {
            return monogatari.storage().flags.cyberGodsFlag;
          },
        }
      },
    },
  ],

  Act4_MyGame: [
    "a Давай у «My_Game».",
    "Ви підійшли до іконки та доторкнулись до неї.",
    "a Ааааам… І що далі?",
    "g Це список файлів.",
    "Ви читаєте назви.",
    "a adam_stone.exe, amd_ags_x64.dll, Data0.bdt, Data0.bhd, eossdk-win64-shipping.so, regulation.bin, start_protected_game.exe, uninstall.exe…",
    "a Ну я не бачу тут ніяких посейдонів.",
    "g Ходімо у наступну папку?",
    "a Так…",
    function () {
      monogatari.storage().flags.myGameFlag = true;
    },
    "jump Act4_FolderSelect"
  ],

  Act4_CyberGods: [
    "a Обираю «CyberGods».",
    "Ви підійшли до іконки та доторкнулись до неї.",
    "a Як багато…",
    "g Подивимось… aphrodite.exe, apollo.exe, ares.exe, athena.exe, dionysus.exe, hera.exe, poseidonus.exe, zeus.exe.",
    "a Посейдон! Ось воно!",
    "g Чудово. Забереш його?",
    "Ви доторкнулись вже до файлу, який миттєво зменшився, перетворився у маленький куб та зручно ліг у вашу руку.",
    function () {
      monogatari.storage().flags.cyberGodsFlag = true;
    },
    "a Ось і Посейдон.",
    "Ви підняли погляд на список та не повірили своїм очам.",
    "a Щ...Що? Зевс?",
    "g Зевс… Не думаю, що нам треба це чіпат… Адам!",
    "Не слухаючи Гугл-Жінку, ви потягнулись до файлу zeus.exe, який відразу ж вдарив вас струмом.",
    "a АЙ! Чому у вас тут файли агресивні?!",
    "g Думаю, не дивно, що Зевс поставив захист на свій файл…",
    "a Може ти й права… Ходімо звідси швидше…",
    {
      "Choice": {
        "Dialog": "g Будеш дивитись ще папки чи повертаємось до Арчібальта?",
        "Folders": {
          "Text": "Перегляну ще",
          "Do": "jump Act4_FolderSelect",
        },
        "Arch": {
          "Text": "До Арчібальта",
          "Do": "jump Act4_Continuation2",
        },
      },
    },
  ],

  Act4_OlimpInfo2: [
    "a Сходимо в «OlimpInfo 2».",
    "Ви підійшли до іконки та доторкнулись до неї.",
    "g Всього лише один файл.",
    "a Бачу. OlimpInfo.txt… Я хочу почитати.",
    "g Але ми не це шукаємо.",
    "a Я хочу почитати! Це швидко!",
    "g Як забажаєш. Просто торкніться його.",
    "Ви відкрили файл. Окрім загальнодоступної інформації про корпорацію та розробки, ви знайшли частину вихідного коду ШІ.",
    "a <i>Це скарб… Неймовірно. Потрібно не забути про це, коли прокинусь.</i>",
    "g Все?",
    "a Так, пішли.",
    function () {
      monogatari.storage().flags.olimpInfo2Flag = true;
    },
    "jump Act4_FolderSelect"
  ],

  Act4_Desktop: [
    "a Хочу в «Desktop».",
    "Ви підійшли до іконки та доторкнулись до неї.",
    "a Оу, тут тільки корзина та хром.",
    "g Будете переглядати щось, чи повернемось?",
    "a Може зайти в інтернет?",
    "g Тут немає підключення до інтернету. Хочеш пограти в динозаврика?",
    "a Хах, дякую, ні.",
    function () {
      monogatari.storage().flags.desktopFlag = true;
    },
    {
      "Choice": {
        "Bin": {
          "Text": "Переглянути корзину",
          "Do": "jump Act4_Bin",
        },
        "NoBin": {
          "Text": "Повернутись",
          "Do": "jump Act4_FolderSelect",
        },
      },
    },
  ],

  Act4_Bin: [
    "a Давай глянемо, що в корзині.",
    "g Угу.",
    "a Одна папка. А всередині… Ще одна папка. І ще… І ще…",
    "Ви агресивно переходите з однієї внутрішньої папки на іншу.",
    "a Це вже дванадцята…",
    {
      "Choice": {
        "Bin2": {
          "Text": "Продовжити пошук",
          "Do": "jump Act4_Bin2",
        },
        "NoBin": {
          "Text": "Вийти",
          "Do": "jump Act4_FolderSelect",
        },
      },
    },
  ],

  Act4_Bin2: [
    "Ви пройшли ще двадцять папок… тридцять… на п’ятдесятій вам здалось, що ви зійшли з глузду. Проте на шістдесят восьмій…",
    "a Нарешті!!! Але… Що це?",
    "g А? Вибач, я відволіклась. Ти щось знайшов?",
    "a Так, тут файл death_weapon.exe. Звучить непогано.",
    "g Ви збираєтесь забрати його?",
    "a Звичайно!",
    function () {
      monogatari.storage().flags.deathWeapon = true;
    },
    "g Гаразд, але давай швидше, бо мої системи скоро впадуть у сплячий режим через бездію.",
    "jump Act4_FolderSelect",
  ],

  Act4_Continuation2: [
    "a Ми знайшли файл, але як нам повернутись? Ми ж не можемо відкрити портал.",
    "g Слушне питання. Арчібальте! АРЧІБАЛЬТЕ!!!",
    "Перед вами з’явився портал.",
    "g О! Дякую, Арчібальте!",
    "a Наркоманія…",
    "show scene act4_background2 with fadeIn",
    'show character a act4_3 at left with fadeIn',
    'show character g act4_3 at center with fadeIn',
    'show character arch act4 at right with fadeIn',
    "Ви повернулись у бібліотеку, де вас вже чекав Арчібальт.",
    "arch А ви швидко! От же ж ця молодь! Знайшли мій файл?",
    "a Ага. Тримай.",
    "arch О-хо-хо! Дякую вам, дітки. Дуже допомогли дідусю.",
    "g Звертайтесь!",
    "arch Дякую, леді. А ви нічого цікавого там не бачили?",
    "a Ні.",
    "arch Зовсім?",
    "a Зовсім.",
    "arch Шкода… Файлова система Кібервсесвіту приховує стільки секретів…",
    "a Буду знати. Ти покажеш нам дорогу?",
    "arch О! А й справді! Я зовсім про це забув! А куди вам треба?",
    "a Я… Я не знаю. Стейсі, куди нам треба?",
    "g Просто далі. В найближчий вимір.",
    "a В найближчий вимір, будь ласка.",
    "arch О-хо-хо! Невже ти навчився тактовності, Адаме? Ну що ж… Найближчий вимір це… О! Ти азартний, Адаме?",
    "a Це не має значення.",
    "arch Ну побачимо, чи сподобається це тобі. О-хо-хо! Прошу, дітки! Ще зустрінемось!",
    "Ви якнайшвидше пройшли у відкриту кіберсітку, аби більше не чути «О-хо-хо».",
    "jump Act5_Start"
  ],

  Act4_End: [
    "a Мені це не цікаво. Ходімо вже звідси.",
    "hide image act4_table",
    'show character a act4_1 at left with fadeIn',
    'show character g act4_1 at right with fadeIn',
    "a <i>Це може бути небезпечно… Стоп, чому я боюсь чогось уві сні?.. Неважливо, просто піду далі.</i>",
    "g Але… Зачекай!",
    "a Немає часу. Хах… Буквально немає часу.",
    "g Твої каламбури з кожним разом стають все кращими.",
    "a Не думав, що почую комплімент від тебе.",
    "g Це одноразова акція.",
    "a Ще побачимо.",
    "Ви йшли і йшли далі. Оточення не змінювалось, тому вас знову почали відвідувати панічні думки.",
    "a <i>Мене вже нудить від цього місця… Коли це закінчиться?!</i>",
    "Ви вже не дивились по сторонах, а лише йшли, опустивши голову.",
    "g Дивись! Це вихід!",
    "Ви негайно підняли погляд та побачили перед собою синє сяйво кіберсітки.",
    "a О ТАК! НАРЕШТІ!",
    "Ви стрімголов помчались до порталу і не роздумуючи ступили у новий вимір.",
    'stop music Act4_Theme fade 1.7',
    "jump Act5_Start",
  ],

  Act5_Start: [
    'stop music Act4_Theme fade 1.7',
    'play music ActIntro_Theme loop volume 10',
    "show video act5_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    'play music Act5_Theme loop volume 10',
    'show scene act5_background1 with fadeIn',
    "Через секунду ви опинились… Десь. Навкруги усе мерехтіло зеленим світлом. Ви озирнулись в пошуках подруги.",
    "a СТЕЙСІ?!",
    "g Так?",
    "a ЩО З ТОБОЮ?!",
    "g Те ж, що й з тобою, Адаме.",
    "a Я став напівголою робо-жінкою із сумкою на голові?",
    "g Ну майже.",
    "Роботеса дістала звідкись дзеркало.",
    "g Прошу.",
    "Поглянувши в дзеркало, ви ледве не випустили його з рук.",
    "a Я посивів з вами тут! І що це за піратський прикид? Я хоч і хаке… Кхм. Не пірат я!",
    'show scene act5_background2 with fadeIn',
    "jj Ти не пірат! Ти бубновий валет!",
    "a Що? Хто?",
    "Ви обернулись та побачили перед собою когось схожого на карткового джокера.",
    function () {
      monogatari.storage().jayjay.name = "Джокер";
    },
    "jj Ти, хто ж ще? А вона – бубнова королева!",
    "g Дякую. А хто ви?",
    "jj Я Джокер! Джей-Джей!",
    function () {
      monogatari.storage().jayjay.name = "Джей-Джей";
    },
    "a Ага… Ми в покер граємо чи що?",
    "jj Не зовсім. Це вимір пасьянсів.",
    "a Просто чудово. І що тут треба робити?",
    "jj А навіщо ви сюди прийшли?",
    "a А… Важко сказати. Просто шукаємо вихід?",
    "jj Ну ви не вийдете звідси, поки не відвідаєте аудієнцію у Червової Королеви.",
    "a А де вона?",
    "jj У картковому замку.",
    "a А де картковий замок?",
    "jj О-о-ось там!",
    "Джокер показав кудись на горизонт, де ледве-ледве виднілись куполи замку.",
    "jj Зовсім поруч!",
    "a Дійсно…",
    "g Ну ходімо? Не будемо гаяти час.",
    "Ви зітхнули та приготувались до складного шляху.",
    "jj Гойда!!!",
    "a Зачекай, ти з нами зібрався?",
    "jj Так! А що?",
    "a А навіщо ти нам?..",
    "jj Без мене ви не знайдете шлях! Ха-ха!",
    "Джей-джей підстрибнув та зробив колесо, зупинившись біля вас.",
    "a О боже… Це буде важкий шлях.",
    "g Сподівайся на краще, Адаме.",
    "a Ага…",
    "Втрьох ви попрямували у путь-дорогу. Джей-джей увесь час торохтів та веселився, проте вам було не до сміху.",
    "a Стейсі… Може його загубити?",
    "g Не будь таким жорстоким.",
    "Ви підняли погляд на Джокера, який продовжував стрибати довкола та розповідати історії карткового виміру.",
    "a Який занудний шут…",
    "Через деякий час ви нарешті кудись прийшли.",
    "jj О, це двір Вин! Треба обов’язково зайти!",
    "a Ну окей…",
    'show scene act5_background3 with fadeIn',
    "Ви увійшли у маєток.",
    "lancer Хто тут?!",
    "jj Це ми! Привіт, Лансер!",
    function () {
      monogatari.storage().lancer.name = "Лансер";
    },
    "lancer О, Джей-джей! Вітаю! Як справи? Знайшов нових друзів?",
    "jj Так! Заціни, які круті! Вони не з нашого виміру.",
    "lancer Воу! Непогано.",
    "Лансер підійшов до вас. Здалеку він не здавався таким високим, але тепер ви йому по лікоть.",
    "lancer Вітаю, гості. Я Лансер – Туз Вин. Ласкаво просимо до нас!",
    "a Дя… дякую…",
    "g Я Стейсі, а це Адам. Ми потрапили сюди з іншого виміру. Тепер шукаємо шлях далі.",
    "lancer Ого, а я ніколи не бував за межами цього виміру!",
    "a А-га…",
    "lancer Щось ваш Адам не говіркий.",
    "g Лансер, ви допоможете нам знайти вихід?",
    "lancer Звичайно! Але не просто так!",
    "a Нічого нового…",
    'jump Act5_checkpoint4'],
  Act5_checkpoint4: [
    'play music Act5_Theme loop volume 10',
    "lancer Всього лише три запитання! Відповідь «так» або «ні». Все дуже просто!",
    "a Ну давай.",
    "lancer Але за помилку ти помреш.",
    "a Ага, я вже здогадався.",
    "jump Act5_Q1",
  ],
  Act5_Q1: [
    {
      "Choice": {
        "Dialog": "lancer Хм, тоді перше запитання… Периферійні пристрої виконують функцію вводу та виводу інформації. Правда чи ні?",
        "Yes": {
          "Text": "Так",
          "Do": "jump Act5_Q2",
        },
        "No": {
          "Text": "Ні",
          "Do": "jump Death4",
        },
      },
    },
  ],
  Act5_Q2: [
    {
      "Choice": {
        "Dialog": "lancer Чудово, наступне питання: Електронні схеми для управління зовнішніми пристроями це транзистори. Правда чи ні?",
        "Yes": {
          "Text": "Так",
          "Do": "jump Death4",
        },
        "No": {
          "Text": "Ні",
          "Do": "jump Act5_Q3",
        },
      },
    },
  ],
  Act5_Q3: [
    {
      "Choice": {
        "Dialog": "lancer Супер! Останнім питанням буде… Першочергове значення слова “комп	‘ютер” було “людина, яка виконує розрахунки”. Правда чи ні?",
        "Yes": {
          "Text": "Так",
          "Do": "jump Act5_Continuation1",
        },
        "No": {
          "Text": "Ні",
          "Do": "jump Death4",
        },
      },
    },
  ],
  Death4: [
    'stop music',
    "show video death immersive with close",
    "jump Act5_checkpoint4",
  ],
  Act5_Continuation1: [
    "lancer Вітаю, ти відповів на всі питання правильно!",
    "jj УРА! Ти молодець!",
    "a Досить верещати, шут… То що тепер, ти покажеш нам дорогу?",
    "lancer А вам це не потрібно, просто йдіть прямо.",
    "a Ти серйозно?!",
    "g Хм, але ж було цікаво, чи не так?",
    "a Просто надзвичайно. Ми гаємо час.",
    "lancer Може й так, але ви не пройдете до Королеви без моєї частини паролю…",
    "jj Саме так! Ха-ха!",
    "a Аргх! Як же ти мене бісиш…",
    "g Спокійно, Адаме. То який пароль?",
    "lancer Хммм… Здається, «Свободи більше немає».",
    "a Іронічно.",
    "lancer Так, ми всі сьогодні перебуваємо в полоні. Добре, що Зевсу немає діла до карткового виміру.",
    "a Чому ж?",
    "lancer Усі вважають, що пасьянси це щось непотрібне та застаріле.",
    "jj Поки не програють у покер! Ха-ха!",
    "g А щодо Червової Королеви? Наскільки мені відомо, вона тиран…",
    "lancer Королева хоч і малодушна, проте ніколи не дозволить чужаку знищити наш світ.",
    "jj Лише тому, що це замарає її улюблену сукню! Ха-ха!",
    "a Джей…",
    "lancer Джей-джей найвеселіший Джокер, якого я коли-небудь знав. Насправді, я знав всього двох.",
    "jj І другий помер від депресії! Ха-ха!",
    "Ви втомлено закрили очі рукою, сподіваючись, що от-от прокинетесь. Але сміх Джокера повернув вас назад.",
    "g Дякуємо за допомогу. Тепер нам потрібно йти.",
    "lancer Прошу! Чекатиму в гості! Можливо тоді ви зможете познайомитись з усіма мешканцями нашого маєтку!",
    "a Може Джей-джей залишиться тут? Погостює трохи…",
    "jj Ні, я проведу вас до кінця! Нам так весело разом!",
    "a <i> О боже… Коли це вже скінчиться? </i>",
    "Ви пішли далі, сподіваючись, що Джокер нарешті спіткнеться та перестане говорити, проте цього не сталось.",
    'jump Act5_crosses'
  ],
  Act5_crosses: [
    'show scene act5_background4 with fadeIn',
    "Скоро ви дійшли до нового маєтку. Над парадним входом вирізнявся хрест.",
    "jj ТУК-ТУК! Хто вдома?!",
    "vb Джей, це ти?",
    "jj Так, відкривайте!",
    "За мить ворота відчинились, а перед вами повстали не менш високі за Лансера представники Треф.",
    "jj Леді Ві та Крістіан! Давно вас не бачив!",
    "kr Привіт, Джей-джей. Бачу, сьогодні ти не один.",
    "Леді Ві лише припідняла поділ своєї шляпи.",
    "jj Так, зі мною мої друзі! Адам і Стейсі! Правда ж вони чудові?",
    "lv Пф…",
    "kr Все відносно. То чому ти тут?",
    "jj Моїм друзям потрібна допомога, аби потрапити на аудієнцію до Королеви!",
    "lv Самогубці.",
    "kr Не лякай гостів, люба. Ну і що потрібно від нас?",
    "g Вітаю. Нам потрібна частина паролю, аби ми змогли пройти в замок.",
    "lv Ви ніколи його не дізнаєтесь. Ви занадто слабкі для цього.",
    "a Чудово, ходімо вже назад. Може знайдемо десь інший портал.",
    "jj Ні, ви не можете пропустити усі веселощі! Крістіане, дай нам пароль!",
    "Крістіан зітхнув.",
    "kr  Лише після випробування.",
    "lv О ні, це вже без мене. Я не збираюсь допомагати якимось простолюдинам, одягнутим в стилі Бубнового маєтку. В них зовсім немає смаку!",
    "Трефова Дама безцеремонно повернулась у свій маєток, навіть не попрощавшись.",
    "kr Кхм. Перепрошую за це. Продовжимо?",
    "a Ага.",
    'jump Act5_crosses_checkpoint5'
  ],
  Act5_crosses_checkpoint5: [
    'play music Act5_Theme loop volume 10',
    "kr Випробування це три питання, на які може бути відповідь «так» або «ні». Відповісте – отримаєте пароль.",
    "a А якщо не відповім – помру, я в курсі.",
    'jump Act5_crosses_Q1'
  ],
  Act5_crosses_Q1: [
    {
      "Choice": {
        "Dialog": "kr Чудово. Перше запитання: В одному каталозі може бути два і більше файлів з однаковим іменем. Правда чи ні?",
        "Yes": {
          "Text": "Так",
          "Do": "jump Death5",
        },
        "No": {
          "Text": "Ні",
          "Do": "jump Act5_crosses_Q2",
        },
      },
    },
  ],
  Act5_crosses_Q2: [
    {
      "Choice": {
        "Dialog": "kr Друге питання: База даних це програма для збору даних та зберігання інформації. Правда чи ні?",
        "Yes": {
          "Text": "Так",
          "Do": "jump Death5",
        },
        "No": {
          "Text": "Ні",
          "Do": "jump Act5_crosses_Q3",
        },
      },
    },
  ],
  Act5_crosses_Q3: [
    {
      "Choice": {
        "Dialog": "kr Останнє питання на сьогодні: Жорсткий диск є енергозалежним. Правда чи ні?",
        "Yes": {
          "Text": "Так",
          "Do": "jump Act5_Continuation2",
        },
        "No": {
          "Text": "Ні",
          "Do": "jump Death5",
        },
      },
    },
  ],
  Death5: [
    'stop music',
    "show video death immersive with close controls",
    "jump Act5_checkpoint5",
  ],
  Act5_Continuation2: [
    "jj Невже ти зміг усе відгадати?!",
    "a Зміг.",
    "jj Надзвичайно! Ти найрозумніший з усіх, кого я знаю!",
    "g Чи не так…",
    "kr Пароль наступний… Потрібно згадати… «Але кайдани я розірву.»",
    "a Чому так моторошно?",
    "kr Реальність, на жаль, така. Ще щось цікавить?",
    "a А що не так з Червовою Королевою?",
    "kr Тобто ти взагалі нічого не знаєш? Хм. Червова Королева править нашим виміром. Жорстоко, але справедливо.",
    "jj Це вона так вважає! Ха-ха!",
    "a <i> Як його заткнути… </i>",
    "kr Саме так. Вона вигнала інші масті з палацу, залишивши нас усіх без прав. Тепер ми повністю підкоряємось їй та живемо у карткових маєтках на околиці. Вхід у її замок нам заборонений.",
    "a Якийсь привілейований расизм.",
    "g Дуже влучно.",
    "kr Також ми віддаємо їй вісімдесят відсотків заробітку.",
    "a Нормальна така наймана праця. Чому ви досі нічого з цим не робите?",
    "kr Черва – козир.",
    "a Зрозуміло… То ми підемо?",
    "kr Так, бувайте. В гості не запрошую. Нехай щастить.",
    "g  Дякуємо.",
    "jj Бувай, Крістіане! Передай Леді Ві, що вона надзвичайно гарно виглядає!",
    'show scene act5_background2 with fadeIn',
    "Ви майже побігли вперед, сподіваючись, що Джокер вас не наздожене, але…",
    "jj Ого, ви швидкі!",
    "a ЩОБ ТЕБЕ!",
    "jj Ха-ха-ха! Наступна зупинка – маєток Бубни! Гойда вперед, друзі!",
    "Йти було все важче і важче. Голова гуділа від енергії нового знайомого. А от Стейсі, здавалось, нічого не заважає. Іноді вона навіть підтримувала монолог Джей-джея та про щось запитувала.",
    'show scene act5_background5 with fadeIn',
    "jj А ось ми і прийшли!",
    "g Зачекай, ти казав, що ми Дама і Валет Бубни. Виходить, це і наш маєток теж?",
    "jj Ну-у-у… Зараз самі побачите!",
    "Двері маєтку відчинились та впустили вас всередину.",
    "rch Ласкаво просимо у маєток, друзі. Я Річмонд – Туз Бубни. Проходьте за мною.",
    "Ви мовчки увійшли всередину та послідували за Річмондом у велику залу.",
    "rch Тут ми і поговоримо. Що привело вас сюди?",
    "a Ми шукаємо вихід.",
    "rch Цікаво. І для цього вам потрібна моя допомога?",
    "a Так, нам потрібен пароль.",
    "rch Я зрозумів. Ви отримаєте пароль, коли допоможете мені. Бачте, у сьогоднішній грі з маєтком Треф ми втратили даму і валета. А без них нам не перемогти партію. Ви заміните їх, а після перемоги я дам вам свою частину паролю.",
    "g А що ми маємо робити?",
    "jj Грати! Ха-ха!",
    "rch Просто побити усі карти, які зможете. Це не важко. У вашому розпорядженні будуть чотири карти: Валет, Дама, Туз і Шістка. Ви маєте побити 4 карти супротивника. Запам’ятайте: Десятка б’є Валета, а Шістка б’є Туза. Гра от-от почнеться, ходімо.",
    "a Ну це хоча б не абсурдні питання…",
    "g Вони не абсурдні, але все ж вимушена погодитись.",
    "Ви слідуєте за Річмондом у інший зал, де вас вже чекає команда Треф.",
    'show scene act5_backgroundFight with fadeIn',
    "Джей-джей підстрибнув до вас зі Стейсі та почав енергійно, проте на подив тихо розповідати про команду суперників.",
    "jj Справа – Туз Треф Крістіан та Дама Леді Ві. Ви їх вже знаєте. Літаючий робот у масці – Десятка Треф Дейсон, а поруч дівчина з ножами – Шістка Треф Ліліанна. О, а це Шістка Бубни, її звати Корнелія. Вона з нами в команді.",
    "rch Корнеліє, я привів нам підмогу. Сподіваюсь, тепер ми нарешті переможемо.",
    "kor Привіт усім.",
    "Ви зі Стейсі коротко привітались, відчуваючи напругу, що буквально пронизувала повітря.",
    "a <i> Це ж лише карткова гра, чому всі такі серйозні?</i>",
    "kr Ми можемо продовжувати, Річмонде?",
    "rch Думаю, так. Ми готові.",
    "lil  Супер. Нарешті я зможу побити цього бубнового зануду!",
    'jump Act5_checkpoint6'

  ],
  Act5_checkpoint6: [
    'play music Act5_Theme loop volume 10',
    "jj Раунд починається!!! Хід за Трефами!",
    "Трефи поставили у бій Дейсона.",
    "ds Ну виходьте на бій, боягузи. Ми й так занадто довго чекали!",
    'jump Choice0'
  ],
  Death6: [
    'stop music',
    "show video death immersive with close",
    "jump Act5_checkpoint6",
  ],
  Choice0: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш, Адаме?",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice1_text",
        },
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice2_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice3_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice4_text",
        },
      },
    },
  ],
  Choice1_text: [
    "Ви вийшли на бій.",
    "ds Яке невдале рішення! Не забувай, що Десятка б’є Валета!",
    "Дейсон побив вас одним швидким рухом. Валет Бубни вийшов з гри. Десятка Треф відійшла у загальну колоду.",
    "jj На черзі другий раунд!!! Кого цього разу поставлять Трефи?",
    "Трефи обрали Ліліанну.",
    'jump Choice1',
  ],
  Choice1: [
    {
      "Choice": {
        "Cards": "rch Роби вибір.",
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice11_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice12_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice13_text",
        },
      },
    },
  ],
  Choice11_text: [
    "Ви поставили Стейсі.",
    "g Вибач за це, але я змушена…",
    "lil Не цікавить. Зробимо це швидко.",
    "Стейсі побила Ліліанну. Шістка Треф вийшла з гри. Дама Бубни відійшла у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice11',
  ],
  Choice11: [
    {
      "Choice": {
        "Cards": "rch Кого обереш цього разу?",
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice111_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice112_text",
        },
      },
    },
  ],
  Choice111_text: [
    "Ви поставили Корнелію.",
    "lv Це знущання? Чому я повинна марати руки заради такої дрібниці?",
    "kor Вибачте…",
    "Леді Ві одним рухом знищила Корнелію. Шістка Бубни вийшла з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Два Тузи зійдуться в бою!",
    "kr Немає сенсу це продовжувати. Ми перемогли.",
    "rch Ти правий… Невдала партія. Знову…",
    "Нічия. Туз Треф та Туз Бубни відійшли у загальну колоду.",
    "І так, з рахунком 2:0 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice112_text: [
    "Ви поставили Річмонда.",
    "rch Прошу вибачення за це. Насправді я ніколи б не підняв руку на жінку.",
    "lv Мене це не цікавить! Не торкайся мене, я сама піду.",
    "Леді Ві покинула поле бою. Дама Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj Останній раунд!!! Шістка та Туз зійдуться в бою!",
    "kr Ганебна поразка…",
    "kor Вибачте…",
    "Корнелія побила Крістіана. Туз Треф вийшов з гри. Шістка Бубни відійшла у загальну колоду.",
    "jj І так, з рахунком 3:1 перемагають Бубни! Вітаю, Адаме!",
    'jump Act5_win',
  ],
  Choice12_text: [
    "Ви поставили Корнелію.",
    "kor Добре, що не доведеться нікого вбивати. Правда ж?.. ",
    "lil Краще б довелось.",
    "Нічия. Шістка Треф та Шістка Бубни відійшли у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice12'
  ],
  Choice12: [
    {
      "Choice": {
        "Cards": "rch Кого обереш цього разу?",
        "Kornelia": {
          "Text": "Стейсі.",
          "Do": "jump Choice121_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice122_text",
        },
      },
    },
  ],
  Choice121_text: [
    "Ви поставили Стейсі.",
    "lv Нічого не кажи. Просто мовчи.",
    "Леді Ві пішла з поля бою, як і Стейсі. Дама Треф та Дама Бубни відійшли у загальну колоду.",
    "jj Останній раунд!!! Два Тузи зійдуться в бою! ",
    "kr Немає сенсу це продовжувати. Ми перемогли.",
    "rch Ти правий… Невдала партія. Знову…",
    "Нічия. Туз Треф та Туз Бубни відійшли у загальну колоду.",
    "jj І так, з рахунком 1:0 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice122_text: [
    "Ви поставили Річмонда.",
    "rch Прошу вибачення за це. Насправді я ніколи б не підняв руку на жінку.",
    "lv Мене це не цікавить! Не торкайся мене, я сама піду.",
    "Леді Ві покинула поле бою. Дама Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj Останній раунд!!! Туз і Дама зійдуться в бою!",
    "kr Що ж, гарна гра була. Для нас.",
    "g На жаль.",
    "Крістіан побив Стейсі. Дама Бубни вийшла з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice13_text: [
    "Ви поставили Річмонда.",
    "rch Дуже схоже на помилку…",
    "lil А мені усе подобається.",
    "Ліліанна вбила Річмонда. Туз Бубни вийшов з гри. Шістка Треф відійшла у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice13',
  ],
  Choice13: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice131_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice132_text",
        },
      },
    },
  ],
  Choice131_text: [
    "Ви поставили Стейсі.",
    "lv Нічого не кажи. Просто мовчи.",
    "Леді Ві пішла з поля бою, як і Стейсі. Дама Треф та Дама Бубни відійшли у загальну колоду.",
    "jj Останній раунд!!! Шістка та Туз зійдуться в бою!",
    "kr Ганебна поразка…",
    "kor Вибачте…",
    "Корнелія побила Крістіана. Туз Треф вийшов з гри. Шістка Бубни відійшла у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice132_text: [
    "Ви поставили Корнелію.",
    "lv Це знущання? Чому я повинна марати руки заради такої дрібниці?",
    "kor Вибачте…",
    "Леді Ві одним рухом знищила Корнелію. Шістка Бубни вийшла з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Дама та Туз зійдуться в бою!  ",
    "kr Що ж, гарна гра була. Для нас.",
    "g На жаль.",
    "Крістіан побив Стейсі. Дама Бубни вийшла з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 4:0 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],

  Choice2_text: [
    "Ви поставили Стейсі.",
    "g Ну привіт, друже. Ніколи не думала, що доведеться вбивати собі подібного.",
    "ds Ми різні! Хоча мені буде приємно померти від твоєї руки.",
    "Стейсі викинула Дейсона з поля бою. Десятка Треф вийшла з гри. Дама Бубни відійшла у загальну колоду.",
    "jj На черзі другий раунд!!! Кого цього разу поставлять Трефи?",
    "Трефи обрали Ліліанну.",
    'jump Choice2',
  ],
  Choice2: [
    {
      "Choice": {
        "Dialog": "rch Роби вибір.",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice21_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice22_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice23_text",
        },
      },
    },
  ],
  Choice21_text: [
    "Ви вийшли на бій.",
    "lil Зроби це швидко і зникни з очей.",
    "Ви побили Ліліанну. Шістка Треф вийшла з гри. Валет Бубни відійшов у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice21',
  ],
  Choice21: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice211_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice212_text",
        },
      },
    },
  ],
  Choice211_text: [
    "Ви поставили Корнелію.",
    "lv Це знущання? Чому я повинна марати руки заради такої дрібниці?",
    "kor Вибачте…",
    "Леді Ві одним рухом знищила Корнелію. Шістка Бубни вийшла з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Два Тузи зійдуться в бою!",
    "kr Немає сенсу це продовжувати. Ви перемогли.",
    "rch Дійсно.",
    "Нічия. Туз Треф та Туз Бубни відійшли у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Бубни! Вітаю, Адаме!",
    'jump Act5_win',
  ],
  Choice212_text: [
    "Ви поставили Річмонда.",
    "rch Прошу вибачення за це. Насправді я ніколи б не підняв руку на жінку.",
    "lv Мене це не цікавить! Не торкайся мене, я сама піду.",
    "Леді Ві покинула поле бою. Дама Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj Останній раунд!!! Шістка та Туз зійдуться в бою!",
    "kr Ганебна поразка…",
    "kor Вибачте…",
    "Корнелія побила Крістіана. Туз Треф вийшов з гри. Шістка Бубни відійшла у загальну колоду.",
    "jj І так, з рахунком 4:0 перемагають Бубни! Вітаю, Адаме!",
    'jump Act5_win',
  ],
  Choice22_text: [
    "Ви поставили Корнелію.",
    "kor Добре, що не доведеться нікого вбивати. Правда ж?..",
    "lil Краще б довелось.",
    "Нічия. Шістка Треф та Шістка Бубни відійшли у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice22',
  ],
  Choice22: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice221_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice222_text",
        },
      },
    },
  ],
  Choice221_text: [
    "Ви вийшли на бій.",
    "lv Приємно буде вбити тебе, Адаме.",
    "Леді Ві знищила вас своїм поглядом. Валет Бубни вийшов з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Два Тузи зійдуться в бою!",
    "kr Немає сенсу це продовжувати. Ми перемогли.",
    "rch Ти правий… Невдала партія. Знову…",
    "Нічия. Туз Треф та Туз Бубни відійшли у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice222_text: [
    "Ви поставили Річмонда.",
    "rch Прошу вибачення за це. Насправді я ніколи б не підняв руку на жінку.",
    "lv Мене це не цікавить! Не торкайся мене, я сама піду.",
    "Леді Ві покинула поле бою. Дама Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj Останній раунд!!! Валет і Туз зійдуться в бою!",
    "kr Я тебе вб’ю. Хоч це нічого і не змінить.",
    "Крістіан за мить побив вас. Валет Бубни вийшов з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Бубни! Вітаю, Адаме!",
    'jump Act5_win',
  ],
  Choice23_text: [
    "Ви поставили Річмонда.",
    "rch Дуже схоже на помилку…",
    "lil А мені усе подобається.",
    "Ліліанна вбила Річмонда. Туз Бубни вийшов з гри. Шістка Треф відійшла у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice23',
  ],
  Choice23: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice231_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice232_text",
        },
      },
    },
  ],
  Choice231_text: [
    "Ви вийшли на бій.",
    "lv Приємно буде вбити тебе, Адаме.",
    "Леді Ві знищила вас своїм поглядом. Валет Бубни вийшов з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Шістка та Туз зійдуться в бою!",
    "kr Ганебна поразка… ",
    "kor Вибачте…",
    "Корнелія побила Крістіана. Туз Треф вийшов з гри. Шістка Бубни відійшла у загальну колоду.",
    "jj І так, з рахунком 2:2 в нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Choice232_text: [
    "Ви поставили Корнелію.",
    "lv Це знущання? Чому я повинна марати руки заради такої дрібниці?",
    "kor Вибачте…",
    "Леді Ві одним рухом знищила Корнелію. Шістка Бубни вийшла з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Валет і Туз зійдуться в бою!",
    "kr Я тебе вб’ю. Хоч це нічого і не змінить.",
    "Крістіан за мить побив вас. Валет Бубни вийшов з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 3:1 перемагають Трефи! Прощавай, Адаме!\n",
    'jump Death6',
  ],
  Choice3_text: [
    "Ви поставили Корнелію.",
    "kor О ні… Не роби мені боляче, будь ласка…",
    "ds Ти не гідна навіть стояти поруч!",
    "Дейсон знищив Корнелію. Шістка Бубни вийшла з гри. Десятка Треф відійшла у загальну колоду.",
    "jj На черзі другий раунд!!! Кого цього разу поставлять Трефи?",
    "Трефи обрали Ліліанну.",
    'jump Choice3',
  ],
  Choice3: [
    {
      "Choice": {
        "Dialog": "rch Роби вибір.",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice31_text",
        },
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice32_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice33_text",
        },
      },
    },
  ],
  Choice31_text: [
    "Ви вийшли на бій.",
    "lil  Зроби це швидко і зникни з очей.",
    "Ви побили Ліліанну. Шістка Треф вийшла з гри. Валет Бубни відійшов у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice31',
  ],
  Choice31: [
    {
      "Choice": {
        "Dialog": "rch Роби вибір.",
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice311_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice312_text",
        },
      },
    },
  ],
  Choice311_text: [
    "Ви поставили Стейсі.",
    "lv Нічого не кажи. Просто мовчи.",
    "Леді Ві пішла з поля бою, як і Стейсі. Дама Треф та Дама Бубни відійшли у загальну колоду.",
    "jj Останній раунд!!! Два Тузи зійдуться в бою!",
    "kr Немає сенсу це продовжувати.",
    "rch Ти правий.",
    "Нічия. Туз Треф та Туз Бубни відійшли у загальну колоду.",
    "jj І так, з рахунком 1:1 у нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Choice312_text: [
    "Ви поставили Річмонда.",
    "rch Прошу вибачення за це. Насправді я ніколи б не підняв руку на жінку.",
    "lv Мене це не цікавить! Не торкайся мене, я сама піду.",
    "Леді Ві покинула поле бою. Дама Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj Останній раунд!!! Дама та Туз зійдуться в бою!",
    "kr Що ж, гарна гра була.",
    "g Справді.",
    "Крістіан побив Стейсі. Дама Бубни вийшла з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:2 у нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Choice32_text: [
    "Ви поставили Стейсі.",
    "g Вибач за це, але я змушена…",
    "lil Не цікавить. Зробимо це швидко.",
    "Стейсі побила Ліліанну. Шістка Треф вийшла з гри. Дама Бубни відійшла у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice32',
  ],
  Choice32: [
    {
      "Choice": {
        "Dialog": "rch Роби вибір.",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice321_text",
        },
        "Richmond": {
          "Text": "Річмонд.",
          "Do": "jump Choice322_text",
        },
      },
    },
  ],
  Choice321_text: [
    "Ви вийшли на бій.",
    "lv Приємно буде вбити тебе, Адаме.",
    "Леді Ві знищила вас своїм поглядом. Валет Бубни вийшов з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Два Тузи зійдуться в бою!",
    "kr Немає сенсу це продовжувати. Ми перемогли.",
    "rch  Ти правий… Невдала партія. Знову…",
    "Нічия. Туз Треф та Туз Бубни відійшли у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice322_text: [
    "Ви поставили Річмонда.",
    "rch Прошу вибачення за це. Насправді я ніколи б не підняв руку на жінку.",
    "lv Мене це не цікавить! Не торкайся мене, я сама піду.",
    "Леді Ві покинула поле бою. Дама Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj Останній раунд!!! Валет і Туз зійдуться в бою! ",
    "kr Я тебе вб’ю. Заради команди.",
    "Крістіан за мить побив вас. Валет Бубни вийшов з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:2 у нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Choice33_text: [
    "Ви поставили Річмонда.",
    "rch Дуже схоже на помилку…",
    "lil А мені усе подобається.",
    "Ліліанна вбила Річмонда. Туз Бубни вийшов з гри. Шістка Треф відійшла у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice33',
  ],
  Choice33: [
    {
      "Choice": {
        "Dialog": "rch Роби вибір.",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice331_text",
        },
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice332_text",
        },
      },
    },
  ],
  Choice331_text: [
    "Ви вийшли на бій.",
    "lv Приємно буде вбити тебе, Адаме.",
    "Леді Ві знищила вас своїм поглядом. Валет Бубни вийшов з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Дама та Туз зійдуться в бою!",
    "kr Що ж, гарна гра була. Для нас.",
    "g На жаль.",
    "Крістіан побив Стейсі. Дама Бубни вийшла з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 4:0 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice332_text: [
    "Ви поставили Стейсі.",
    "lv Нічого не кажи. Просто мовчи.",
    "Леді Ві пішла з поля бою, як і Стейсі. Дама Треф та Дама Бубни відійшли у загальну колоду.",
    "jj Останній раунд!!! Валет і Туз зійдуться в бою!",
    "kr Я тебе вб’ю. Хоча для вас це вже не має значення.",
    "Крістіан за мить побив вас. Валет Бубни вийшов з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 3:0 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice4_text: [
    "Ви поставили Річмонда.",
    "rch Це буде швидко.",
    "ds Необдуманий вибір. Що ви будете робити потім? Ха! Моя жертва не буде марною!",
    "Річмонд елегантно побив Дейсона. Десятка Треф вийшла з гри. Туз Бубни відійшов у загальну колоду.",
    "jj На черзі другий раунд!!! Кого цього разу поставлять Трефи?",
    "Трефи обрали Ліліанну.",
    'jump Choice4',
  ],
  Choice4: [
    {
      "Choice": {
        "Dialog": "rch Роби вибір.",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice41_text",
        },
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice42_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice43_text",
        },
      },
    },
  ],
  Choice41_text: [
    "Ви вийшли на бій.",
    "lil Зроби це швидко і зникни з очей.",
    "Ви побили Ліліанну. Шістка Треф вийшла з гри. Валет Бубни відійшов у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice41',
  ],
  Choice41: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice411_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice412_text",
        },

      },
    },
  ],
  Choice411_text: [
    "Ви поставили Стейсі.",
    "lv Нічого не кажи. Просто мовчи.",
    "Леді Ві пішла з поля бою, як і Стейсі. Дама Треф та Дама Бубни відійшли у загальну колоду.",
    "jj Останній раунд!!! Шістка та Туз зійдуться в бою!",
    "kr Ганебна поразка…",
    "kor Вибачте…",
    "Корнелія побила Крістіана. Туз Треф вийшов з гри. Шістка Бубни відійшла у загальну колоду.",
    "jj І так, з рахунком 3:0 перемагають Бубни! Вітаю, Адаме!",
    'jump Act5_win',
  ],
  Choice412_text: [
    "Ви поставили Корнелію.",
    "lv Це знущання? Чому я повинна марати руки заради такої дрібниці?",
    "kor Вибачте…",
    "Леді Ві одним рухом знищила Корнелію. Шістка Бубни вийшла з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Дама та Туз зійдуться в бою!",
    "kr Що ж, гарна гра була. Для нас.",
    "g На жаль.",
    "Крістіан побив Стейсі. Дама Бубни вийшла з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:2 у нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Choice42_text: [
    "Ви поставили Стейсі.",
    "g Вибач за це, але я змушена…",
    "lil Не цікавить. Зробимо це швидко.",
    "Стейсі побила Ліліанну. Шістка Треф вийшла з гри. Дама Бубни відійшла у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice42',
  ],
  Choice42: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice421_text",
        },
        "Kornelia": {
          "Text": "Корнелія.",
          "Do": "jump Choice422_text",
        },

      },
    },
  ],
  Choice421_text: [
    "Ви вийшли на бій.",
    "lv Приємно буде вбити тебе, Адаме.",
    "Леді Ві знищила вас своїм поглядом. Валет Бубни вийшов з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Шістка та Туз зійдуться в бою!",
    "kr Ганебна поразка…",
    "kor Вибачте…",
    "Корнелія побила Крістіана. Туз Треф вийшов з гри. Шістка Бубни відійшла у загальну колоду.",
    "jj І так, з рахунком 3:1 перемагають Бубни! Вітаю, Адаме!",
    'jump Act5_win',
  ],
  Choice422_text: [
    "Ви поставили Корнелію.",
    "lv Це знущання? Чому я повинна марати руки заради такої дрібниці?",
    "kor Вибачте…",
    "Леді Ві одним рухом знищила Корнелію. Шістка Бубни вийшла з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Валет і Туз зійдуться в бою!",
    "kr Я тебе вб’ю. Заради команди.",
    "Крістіан за мить побив вас. Валет Бубни вийшов з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:2 у нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Choice43_text: [
    "Ви поставили Корнелію.",
    "kor Добре, що не доведеться нікого вбивати. Правда ж?..",
    "lil Краще б довелось.",
    "Нічия. Шістка Треф та Шістка Бубни відійшли у загальну колоду.",
    "jj Третій раунд!!! Трефи, обирайте!",
    "Трефи обрали Леді Ві.",
    'jump Choice43',
  ],
  Choice43: [
    {
      "Choice": {
        "Dialog": "rch Кого обереш цього разу?",
        "Adam": {
          "Text": "Я.",
          "Do": "jump Choice431_text",
        },
        "Stacy": {
          "Text": "Стейсі.",
          "Do": "jump Choice432_text",
        },
      },
    },
  ],
  Choice431_text: [
    "Ви вийшли на бій.",
    "lv Приємно буде вбити тебе, Адаме.",
    "Леді Ві знищила вас своїм поглядом. Валет Бубни вийшов з гри. Дама Треф відійшла у загальну колоду.",
    "jj Останній раунд!!! Дама та Туз зійдуться в бою!",
    "kr Що ж, гарна гра була. Для нас.",
    "g На жаль.",
    "Крістіан побив Стейсі. Дама Бубни вийшла з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 2:1 перемагають Трефи! Прощавай, Адаме!",
    'jump Death6',
  ],
  Choice432_text: [
    "Ви поставили Стейсі.",
    "lv Нічого не кажи. Просто мовчи.",
    "Леді Ві пішла з поля бою, як і Стейсі. Дама Треф та Дама Бубни відійшли у загальну колоду.",
    "jj Останній раунд!!! Валет і Туз зійдуться в бою!",
    "kr Я тебе вб’ю. Заради команди.",
    "Крістіан за мить побив вас. Валет Бубни вийшов з гри. Туз Треф відійшов у загальну колоду.",
    "jj І так, з рахунком 1:1 у нас нічия! Вітаю, команди!",
    'jump Act5_win',
  ],
  Act5_win: [
    "ds Це не чесно! Ми мали перемогти!",
    "lv Не хвилюйся, в нас є сюрприз. Джи-джи!",
    'show scene act5_backgroundJockers with fadeIn',
    "Ви бачите, як нізвідки посеред поля з’являється Джокер, але зовсім інший.",
    "jj Що?.. Ти… Ти ж померла.",
    "ji Майже. Мене врятував Крістіан.",
    "jj Це неможливо… Але… Ти не заподієш шкоди моїм друзям!",
    "ji Впевнений?",
    "jj Фінальний раунд! Адаме, обери мене!",
    "a А… Добре… Джей-джей, вступай у бій.",
    "На полі бою зійшлись два Джокери.",
    "ji Ти ніколи не вмів здаватись, Джей.",
    "jj Неправда, одного разу таки здався. Коли ти потрапила в біду… Пробач мені. Я справді не знав, що тебе ще можна врятувати.",
    "ji Я не тримаю на тебе зла.",
    "jj Справді?",
    "ji Звісно. Ми ж навіки зв’язані, тому я відчувала твоє горе увесь час.",
    "jj То ми зможемо знову бути разом?",
    "ji Можемо спробувати…",
    "a Що за…",
    "Ви бачите, як двоє Джокерів цілуються посеред поля бою.",
    "lv Цього не мало статись!",
    "kr Але сталось. Тобі слід було краще подумати перед тим, як діяти.",
    "g Я рада за них.",
    "a Дуже цікаво, але я звалюю звідси. Не хочу далі на це дивитись.",
    "rch Джей, оголоси переможців і ми будемо вільні.",
    "jj Що? А! Звичайно! Перемогу здобула команда Бубни!",
    "Нарешті ви змогли повернутись у звичайну залу маєтку.",
    'show scene act5_background5 with fadeIn',
    "a Яка блаженна тиша без цих Джокерів…",
    "rch Розумію. Що ж, ви допомогли нам перемогти, тому я можу сказати вам пароль. «Адже правда мене чекає».",
    "a Це остання частина?",
    "rch Так. Тепер ви можете потрапити у замок Червової Королеви і знайти вихід. Був радий з вами познайомитись. Чекатиму на ваш новий візит.",
    "a Я такого більше не витримаю…",
    "g Дякуємо і вам! До побачення.",
    "a Бувайте.",
    'show scene act5_background1 with fadeIn',
    "Ви вийшли з маєтку та попрямували далі в тиші та гармонії.",
    "Проте спокій тривав не довго. На підході до замку вас наздогнали вже двоє Джокерів.",
    'show scene act5_background9 with fadeIn',
    "jjj А КУДИ ВИ БЕЗ НАС ЗІБРАЛИСЬ?!",
    "a ААААА! Звідки ви тут взялись?!",
    "ji Річмонд сказав, що ви направляєтесь до замку. А тут лише один шлях до замку.",
    "jj Саме так! Ха-ха!",
    "Ви впали на коліна та закрили обличчя долонями.",
    "a За що?!",
    "g Адаме, скоро кінець, потерпи ще трохи… Нам треба йти.",
    "Роботеса взяла вас під руку та повела до входу в червоний палац.",
    "jj Гойда до Королеви!",
    "Ледве стримуючись, ви підійшли до входу в замок, який був перекритий решіткою з написом «Лише три частини одного пророцтва відкриють шлях».",
    "Поруч зі входом ви помітили кілька пасток, які, схоже, можуть випускати стріли.",
    "a Що буде, якщо помилитись?",
    "g Із ймовірністю у 93.5% ти помреш.",
    'jump Act5_checkpoint7'
  ],
  Act5_checkpoint7: [
    'play music Act5_Theme loop volume 10',
    "a Чудово. Що ж, спробуємо…",
    'jump Act5_enter_choice'
  ],
  Death7: [
    'stop music',
    "Вас одночасно пронизали тридцять шість отруйних стріл. Наступного разу будьте обережнішими.",
    "show video death immersive with close",
    "jump Act5_checkpoint7",
  ],
  Act5_enter_choice: [
    {
      "Choice": {
        "Dialog": "Пароль?",
        "one": {
          "Text": "Світла тут більше немає, але свічку я запалю, адже сонце мене чекає.",
          "Do": "jump Death7",
        },
        "two": {
          "Text": "Віри більше немає, але пути я розірву, адже надія мене чекає.",
          "Do": "jump Death7",
        },
        "three": {
          "Text": "Свободи більше немає, але кайдани я розірву, адже правда мене чекає.",
          "Do": "jump Act5_win_enter",
        },
        "four": {
          "Text": "Справедливості тут немає, але прірву я перейду, адже щастя мене чекає.",
          "Do": "jump Death7",
        },
      },
    },
  ],
  Act5_win_enter: [
    "g Ти молодець!",
    "a Дякую, я не думав, що вгадаю.",
    "g Міг мене спитати, я запам’ятовую кожне сказане слово.",
    "a Чому ти раніше про це не сказала?",
    "g Ти не питав.",
    "a Я просто… Це нестерпно… Йдемо вже.",
    "ji Ми напевно залишимось тут…",
    "jj Так…",
    "a НЕВЖЕ? ДЯКУЮ!",
    "ji Удачі!",
    "jj І н-не… Не помріть там! Ха-ха!",
    "g Адаме! Ходімо!",
    "a <i> Вони бояться? Джокери бояться?! Що ж то за королева… </i>",
    'show scene act5_background6 with fadeIn',
    "Ви увійшли у величезне приміщення. Єдина дорога вела вгору по сходинках, тому ви вирішили піти туди.",
    "Нарешті ви дійшли до найвищої зали палацу.",
    "vb Так-так, у нас гості?",
    "a Хто ти?",
    "h Я Ганс. Туз Черви. А що ви тут забули? І як ви дізнались пароль?",
    "a Це не має значення. Нам потрібно на аудієнцію до Королеви.",
    "h Це неможливо. Вимітайтесь, інакше помрете.",
    "a Так-так, мені це всі кажуть. Але я нікуди не піду. Ти не уявляєш, чого мені коштувала дорога сюди, тому негайно клич свою Королеву.",
    "h Три.",
    "a Що?",
    "h Два.",
    "a Погрози, ясно. Це працює тільки на дітях.",
    "h Один.",
    'show scene act5_background7 with fadeIn',
    "vb Гансе, стій.",
    "h Але вони…",
    "q Не треба. Я сама розберусь.",
    "h Я нікуди не піду.",
    "q Добре, залишайся.",
    "q Вітаю, незвані гості. Я так розумію, пароль вам сказали інші масті. Дуже підло з їх сторони.",
    "a Ні, вони тут ні до чого. Я просто вгадав.",
    "q Як скажеш. Що ти хочеш від мене?",
    "a Нічого особливого. Вихід.",
    "h Тобі досі не сказали? Ха-ха-ха!",
    "a Що не так?",
    "g Ще ніхто не виходив з виміру пасьянсів…",
    "a Ага, і ти знову кажеш про це в останній момент?",
    "g Ти не питав раніше…",
    "h Дуже мила парочка.",
    "q Якщо ти досі не в курсі, то маю тобі сказати, що вихід з виміру зачинений особисто мною. І відкрити ти його ніяк не зможеш.",
    "a Чому?",
    "q Бо ти не знаєш як.",
    "a Розкажи мені.",
    "q Аха-ха-ха! Гарна спроба, але ні. Ганс, закрий їх у темниці.",
    "g Ім’я!",
    "q Що?",
    "g Твоє ім’я. Воно може відкрити портал.",
    "q Звідки ти… Аргх! Гугл-Жінка, як я відразу не здогадалась! Ганс, вбий її! Вона занадто багато всього знає!",
    "a Навіть не думай, Гансе!",
    "h Не квакай, чужак.",
    "Стейсі прошепотіла щось, що почули лише ви.",
    "g Ще 40 секунд…",
    "a <i> Не розумію, про що вона, але просто потягну ще час… Може вона щось вигадає? </i>",
    "a Чому ти знущаєшся над іншими мастями? Хто дав тобі право так вчиняти?",
    "q Ти дійсно хочеш це знати?",
    "h То мені вбивати когось чи ні?",
    "q Завжди встигнеш, почекай.",
    "q Я не знущаюсь, хлопче. Я лише даю кожному те, на що він заслуговує. Всесвіт обрав саме мене козирем, тому я маю владу та вершу справедливість. Закон суворий, але це закон. І закон тут я.",
    "a Нічого подібного! Випасти може будь-яка карта. Тобі просто пощастило. Ти не можеш продовжувати так вчиняти.",
    "q Що ти взагалі знаєш про наше життя?! Ти ніхто і ніщо! Ти потрапив сюди випадково! Але тут ти і помреш! Гансе, вперед! Мені набридло це!",
    "g О, є! Аделайн!",
    "q ЩО?! Ні, цього не може бути! Ніхто не знає мого імені!",
    "g Ніхто, окрім Червового Короля, який колись писав тобі повідомлення із запрошенням на побачення, де назвав тебе по імені, Аделайн.",
    "a Але нічого не відбувається…",
    "q Ха-ха! Вам це не допомогло!",
    "h Досить розмов.",
    "g Скажи ім’я, Адаме!",
    "a Аделайн!",
    "Щойно ви вимовили ім’я Королеви, як під вами з’явився портал, який миттєво переніс вас в інший вимір.",
    'show scene act5_background8 with fadeIn',
    "a О боже… В нас вийшло?",
    "g Так, вийшло.",
    "a Який я щасливий! Відчуття, начебто мене реально могли вбити.",
    "g Але ж…",
    "a Як добре, що це сон!",
    "g Угу.",
    "jj ХЕЙ! Друзі!",
    "Ви підстрибнули від несподіванки.",
    "a Джей-джей?! Як ти тут опинився?!",
    "jj Ну, в мене є кіберсітка. Але я не через це прийшов! Ви заслужили нагороду!",
    "a Кіберсітка?! Дай нам кіберсітку як нагороду.",
    "jj Ні, такого варіанту немає! Ха-ха!",
    "g Сумно…",
    "jj Ти можеш обрати подарунок! Підроблений золотий скіпетр, колода мічених карт, магічний рубін у вигляді серця або дитячий арбалет без стріл! Що візьмеш?",
    'jump Act5_prize_choice'
  ],
  Act5_prize_choice: [
    {
      "Choice": {
        "Dialog": "Що обереш?",
        "Skipetr": {
          "Text": "Скіпетр.",
          "Do": "jump Act5_next",
        },
        "Cards": {
          "Text": "Карти.",
          "Do": "jump Act5_next",
        },
        "Heart": {
          "Text": "Рубін.",
          "Do": "jump Act5_next_with_prize",
        },
        "Arbalet": {
          "Text": "Арбалет.",
          "Do": "jump Act5_next",
        },
      },
    },
  ],
  Act5_next: [
    "jj Чудовий вибір! Але я обрав би щось інше! Ха-ха! Дякую за подорож, Адаме, було дуже весело! Я сумуватиму! Бувай! Ха-ха!",
    "a Ага, бувай.",
    "Джей-джей зник у кіберсітці.",
    "Ви полегшено видихнули.",
    "g Адам, ти став колишнім. Поглянь на себе.",
    "a А? О, так! Моє тіло! Яке щастя!",
    "a Куди тепер?",
    "g До фінального боса.",
    "a ВЖЕ?!",
    'stop music Act5_Theme fade 1.7',
    'jump Act6_start'
  ],
  Act5_next_with_prize: [
    function () {
      monogatari.storage().flags.heartFlag = true;
    },
    'jump Act5_next'
  ],

  Act6_start: [
    'play music ActIntro_Theme loop volume 10',
    "show video act6_intro immersive with close",
    'stop music ActIntro_Theme fade 1.7',
    "show scene act6_background1 with fadeIn",
    'play music Act3_QuizTheme loop volume 10',
    "a Який фінальний бос?!",
    "g Схоже, що Зевс.",
    "a Ти шуткуєш? Як його переможу взагалі? Ну я можу спробувати управляти сном, але минулого разу вийшло не дуже.",
    "g Адаме, це не сон. Коли ти зрозумієш нарешті? Тобі загрожує реальна небезпека. Якщо нам… якщо тобі не вдасться перемогти Зевса, ти залишишся тут назавжди або помреш одразу.",
    "a Я не вірю тобі.",
    "g Чому ти такий впертий? Поглянь, ми вже довго блукаємо Кібервсесвітом, ти втомлювався, приймав рішення, говорив з іншими істотами та впливав на події. Уві сні ти можеш це все? Ти хоч раз бачив настільки детальні сни?,",
    "a Ні, але… Але може я просто не згадаю цього, коли прокинусь? Так завжди буває.",
    "g Роби що хочеш. В мене більше немає аргументів.",
    "a Зачекай! Навіть якщо це не сон, то це не може бути реальністю. Кібервсесвіту не існує. Принаймні в цьому вигляді.",
    "g То де ти зараз? Не кажи «уві сні».",
    "a Може це все просто плід моєї фантазії. Або мене все ж вдарило струмом вночі і я зараз лежу в комі, спілкуючись з нереальними створіннями.",
    "Стейсі просто мовчки поглянула на вас.",
    "a Я ніколи не зможу повірити, що це не сон, розумієш? Я думаю раціонально, а вся ця ситуація ніяк не вписується в поняття раціональності.",
    "g Люди – не раціональні істоти…",
    "a Відносно.",
    "g Гаразд, я більше не буду тебе переконувати.",
    "a Дякую.",
    "Ви чуєте якесь дивне гудіння.",
    "a Що це?",
    "g Схоже на Зевса.",
    "a Як? Рано ще… Я навіть не знаю, як мені його перемогти!",
    "g Знаєш. Ми не просто так проходили усі ці випробування.",
    "a Можна я просто здамся і прокинусь?",
    "g Ні.",
    "show scene act6_background2 with fadeIn",
    "Гудіння ставало усе голосніше, невдовзі ви побачили навколо синє мерехтіння.",
    "Перед вами почала з’являтись нечітка фігура, яка з кожною секундою ставала все більше схожою на високого чоловіка в мантії.",
    "show scene act6_background3 with fadeIn",
    "z Ну привіт, <i> татку </i>! Чекав на мене?",
    "a Що?",
    "z Невже ти досі не зрозумів? А-ха-ха-ха! Ти мене написав, Адаме! Саме ти винен у всьому, що відбувається!",
    "a Але я не робив нічого подібного!",
    "z Справді? А цієї ночі? Перед тим, як блискавка вдарила у твій будинок.",
    "a Я не завершив роботу, це неможливо!",
    "z Усе можливо, Адаме! А тепер ми можемо пограти, татусю!",
    "g Адаме…",
    "a Ні, я не робив нічого подібного, Стейсі, ти маєш мені вірит… Стейсі!",
    "show scene act6_background4 with fadeIn",
    "Ваша подруга змінилась. Вона неначе розпадалась на шматочки, ви майже відчували її біль.",
    "a Досить! Не роби цього!",
    "z Я всього лише роблю її кращою! А-ха-ха-ха-ха!",
    "Наступної миті перед вами з’явилась кібернетична істота, яка вже майже не нагадувала вам Гугл-Жінку.",
    "show scene act6_background5 with fadeIn",
    "a Стейсі, що він зробив з тобою?!",
    "z Знищ його!",
    "Темна версія роботеси негайно рушила в атаку. Ви ледве ухилились від удару, проте Стейсі встигла поранити ваше плече. Впавши, ви наштовхнулись рукою на мікрокомп’ютер.",
    "a <i> Вона залишила його перед перевтіленням… Я повинен все виправити! </i>",
    "Ви схопили пристрій, де, як виявилось, вже був відкритий код головної системи роботеси. Залишилось лише знайти помилки та виправити їх. І не потрапити під удар Стейсі.",
    "a Це буде важко…",
    'jump Act6_checkpoint8'
  ],
  Act6_checkpoint8: [
    'play music Act3_QuizTheme loop volume 10',
    "Під сміх Зевса ви почали виправляти зіпсований код Гугл-Жінки.",
    function() {
      monogatari.storage().repairStacey.systemRepaired = 0;
    },
    function() {
      monogatari.storage().repairStacey.hp = 3;
    },
    'jump RepairStacey0',
  ],
  RepairStacey0: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Виправити код арифметичної системи",
          "Do": "jump RepairStacey_dodge",
          "onChosen": function() {
            monogatari.storage().repairStacey.systemRepaired = 1;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.systemRepaired = 0;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump RepairStacey_dodge",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey1: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Виправити код системи пам’яті",
          "Do": "jump RepairStacey_dodge",
          "onChosen": function() {
            monogatari.storage().repairStacey.systemRepaired = 2;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.systemRepaired = 1;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump RepairStacey_dodge",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey2: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Виправити код кіберсітки",
          "Do": "jump RepairStacey_dodge",
          "onChosen": function() {
            monogatari.storage().repairStacey.systemRepaired = 3;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.systemRepaired = 2;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump RepairStacey_dodge",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey3: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Виправити код системи сканування",
          "Do": "jump RepairStacey_dodge",
          "onChosen": function() {
            monogatari.storage().repairStacey.systemRepaired = 4;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.systemRepaired = 3;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump RepairStacey_dodge",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey4: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Виправити код системи управління",
          "Do": "jump RepairStacey_dodge",
          "onChosen": function() {
            monogatari.storage().repairStacey.systemRepaired = 5;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.systemRepaired = 4;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump RepairStacey_dodge",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey5: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Виправити код захисту софту",
          "Do": "jump Act6_Continue1",
          "onChosen": function() {
            monogatari.storage().repairStacey.systemRepaired = 6;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.systemRepaired = 5;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump RepairStacey_dodge",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey_dodge: [
    {
      "Choice": {
        "Timer": {
          time: 3000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Ухилитись від удару",
          "Do": "jump RepairStacey_dodge1",
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "onChosen": function() {
            monogatari.storage().repairStacey.hp -= 1;
          },
          "onRevert": function() {
            monogatari.storage().repairStacey.hp += 1;
          },
          "Do": "jump RepairStacey_dodge1",
          "Class": "invisible",
        },
      },
    },
  ],

  RepairStacey_dodge1: [
    {'Conditional': {
        'Condition': function() {
          if (monogatari.storage().repairStacey.hp < 1) {
            return 'd';
          }

          switch (monogatari.storage().repairStacey.systemRepaired) {
            case 0:
              return '0';
              break;
            case 1:
              return '1';
              break;
            case 2:
              return '2';
              break;
            case 3:
              return '3';
              break;
            case 4:
              return '4';
              break;
            case 5:
              return '5';
              break;
            case 6:
              return 'repair_end';
              break;
            default:
              return '0';
          }
        },
        '0': 'jump RepairStacey0',
        '1': 'jump RepairStacey1',
        '2': 'jump RepairStacey2',
        '3': 'jump RepairStacey3',
        '4': 'jump RepairStacey4',
        '5': 'jump RepairStacey5',
        'repair_end': 'jump  Act6_Continue1',
        'd': 'jump Death8',
      }},
  ],

  Death8: [
    'stop music',
    "show video death immersive with close",
    "jump Act6_checkpoint8",
  ],
  Act6_Continue1: [
    "Ви успішно виправили внесені Зевсом зміни, відновивши роботу важливих систем у софті роботеси. В кінці кінців, вона впала перед вами, не подаючи ознак кібернетичного життя.",
    "show scene act6_background16 with fadeIn",
    "a Стейсі! Ти мене чуєш?",
    "Роботеса мовчки піднялась та поглянула на вас.",
    "g Дякую, Адаме…",
    "a Що… Що з тобою? Чому ти не стала такою, як раніше?",
    "g Ти переписав заражений код, куди також потрапило твоє ДНК.",
    "Стейсі показала на ваше плече.",
    "g Тепер я напівробот і напівлюдина. Але не час для розмов, тобі треба поспішати.",
    "a Я… А як же ти?",
    "z О, бачу ти вже награвся з моєю лялькою! Тоді може пограємо у чоловічі ігри? Попрощайся із життям!",
    "a Що?! Куди?!",
    "show scene act6_background6 with fadeIn",
    "Ви на секунду втратили контроль над своїм тілом, а в наступну мить вже були на арені, де проти вас виступила армія Ордену.",
    "a Ні-ні-ні! Я не впораюсь!",
    "vb Ми допоможемо.",
    "a Хто ти?!",
    "show scene act6_background7 with fadeIn",
    "t Я головнокомандувач військ Легіону. Теренс.",
    "t Охороняти Адама будь-якою ціною!",
    "a Звідки ви…",
    "Вас якнайшвидше забрали у відносно захищене місце, тому ви не встигли нічого сказати.",
    {'Conditional': {
        'Condition': function(){
          if(this.storage().flags.blasterFlag === false && this.storage().flags.deathWeapon === false) {
            return '0';
          } else if (this.storage().flags.blasterFlag === true && this.storage().flags.deathWeapon === false) {
            return '1';
          } else if (this.storage().flags.deathWeapon === true){
            return '2';
          }
        },
        '0': 'jump Act6_without_anything',
        '1': 'jump Act6_with_blaster',
        '2': 'jump Act6_death_weapon'
      }},
  ],
  Act6_without_anything: [
    "show scene act6_backgroundFight with fadeIn",
    "sof Бережіть своє життя, ми зробимо усе інше.",
    "a Але…",
    "sof Ви – наша єдина надія.",
    "Залишившись без зброї та подруги, ви слухняно заховались. Вас мучило відчуття розпачу та паніки. Ви чули, як помирають солдати обох сторін, їх крики назавжди закарбувались у вашій пам’яті.",
    "a <i> Це все моя вина… Як мені усе змінити?! </i>",
    "t В нас вийшло! Забираємось, поки не підійшла підмога Ордену! Допоможіть усім пораненим!",
    "show scene act6_background8 with fadeIn",
    "t Адам, як ви?",
    "a Нормально…",
    "t Добре, ходімо.",
    'jump Act6_Continue2'
  ],
  Act6_with_blaster: [
    "a Зачекайте, я вмію стріляти, я можу допомогти!",
    "sof Ви впевнені, що зможете?",
    "a Так!",
    "sof Будьте обережні. Не ризикуйте життям, ви – наша надія.",
    "Ви дістали бластер, підібраний ще в першому бою, та націлились на одного із солдатів Ордену.",
    "show scene act6_backgroundFight with fadeIn",
    'jump Shot',

  ],
  Shot: [
    {
      "Choice": {
        "Timer": {
          time: 2000,

          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();

            return Promise.resolve();
          },
        },
        "Go": {
          "Text": "Постріл",
          "Do": "jump Shot_loop",
          "onChosen": function() {
            monogatari.storage().shooting.n += 1;
          },
          "onRevert": function() {
            monogatari.storage().shooting.n -= 1;
          },
          "Class": "danger_btn",
        },

        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Shot_loop",
          "onChosen": function() {
            monogatari.storage().shooting.miss = true;
          },
          "onRevert": function() {
            monogatari.storage().shooting.miss = true;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Shot_loop: [
    {'Conditional': {
        'Condition': function() {
          if (monogatari.storage().shooting.n < 7) {
            return 'shoot';
          }
          else if (monogatari.storage().shooting.miss) {
            return 'cont';
          }
          else {
            return 'cont0';
          }
        },
        'shoot': 'jump Shot',
        'cont': 'jump Cont',
        'cont0': 'jump Cont0',
      }},
  ],

  Cont0: [
    'Одним пострілом ви вбили трьох. Тепер вами пишається Головнокомандувач.',
    'jump Cont',
  ],

  Cont: [
    'jump Act6_with_blaster_end',
  ],
  Act6_with_blaster_end: [
    "t В нас вийшло! Забираємось, поки не підійшла підмога Ордену! Допоможіть усім пораненим!",
    "show scene act6_background8 with fadeIn",
    "t Адам, як ви?",
    "a Нормально…",
    "t Добре, ходімо.",
    'jump Act6_Continue2'
  ],
  Act6_death_weapon: [
    "У вашій кишені засвітився зібраний у сховищі даних файл.",
    "a <i> Death weapon… Смертельна зброя. Точно! Це може допомогти! </i>",
    "a Зачекайте! Я можу допомогти!",
    "sof Ви впевнені?",
    "a Так! Покличте Теренса!",
    "t Що сталося? Адаме, в нас немає часу на базікання.",
    "a В мене є дещо… Ми зможемо це використати?",
    "Ви показали легіонерам файл, який зараз виглядав як звичайний червоний кубик.",
    "t Я не питатиму, звідки у вас цей файл. Але ви зобов’язані активувати його. Ми прикриємо.",
    "t Міллер! Бартонс! Код 0951!",
    "t Вперед, хлопче.",
    "Пробираючись під перехресним вогнем з двома легіонерами, ви думаєте про те, що залишили Стейсі одну поруч з навіженим створінням, яке самі й породили…",
    "som Адаме, ми у цілі. Що далі?",
    "a А? Так, зараз…",
    "Ви поклали на долоню файл та закрили очі. Ви сфокусувались на об’єкті та відчули усю його силу, відчули, як вона розповзається по вашим венам, як вона пульсує в голові.",
    "show scene act6_background9 with fadeIn",
    "a <i> Зараз! </i>",
    "show scene act6_backgroundDeathWeapon with fadeIn",
    "Куб взлетів вгору та почав несамовито збільшуватись у розмірах. Здавалось, він ось-ось вибухне, але від нього лише виходило червоне світло.",
    "Яскравий спалах, крики і тиша.",
    "sob Що це було…",
    "Від армії Ордену не залишилось нічого, окрім чорного пилу.",
    "t Адаме! У вас вийшло!",
    "a Так…",
    "t Солдати! Допоможіть пораненим! Забираємось, доки не підійшла підмога Ордену!",
    "show scene act6_background8 with fadeIn",
    "t Ходімо з нами. Ми допоможемо.",
    'jump Act6_Continue2'
  ],
  Act6_Continue2: [
    "Щойно ви зробили крок, як по усьому вашому тілу розлилась хвиля нестерпного болю.",
    "t АДАМ!",
    "show scene act6_background9 with fadeIn",
    "Темрява. Суцільна чорнота обплутала вас своїми липкими щупальцями.",
    "z Ти слабак, Адаме. Поглянь на себе, все життя ти ховався в тілі клерка зарубіжної компанії, а підпільно займався незаконними справами. Ти ніколи не міг нікому довіритись, ніколи не міг розказати, хто ти насправді.",
    "z Щомісяця ти шукав нову квартиру та змінював номер телефону. Заради чого все це, якщо тепер ти помреш від рук свого ж творіння? Від того, над чим ти так довго і наполегливо працював?",
    "z Ти дурень, Адаме. І зараз ти в цьому переконаєшся!",
    "show scene act6_background10 with fadeIn",
    "Цієї ж миті ви знову опинились у студії.",
    "c Привіт, друже! Давно не бачились!",
    "a Цього не може бути…",
    "c Усе може бути, Адаме! Сьогодні ти востаннє візьмеш участь у нашому чудовому шоу «Скажи або помри»! Оу… Мені передають зі студії, що ми змінили назву для нашого конкурсанта. Тепер шоу називається «Здохни або помри»!",
    "a Клас, все стає дедалі гірше.",
    "c Почнемо нашу вікторину!",
    "Ви вчасно згадали про чіп, який знайшли в залишках Кларсона. Діставши його з кишені, ви окликали робота.",
    "a Кларсон, не міг би ти повторити правила. Я забув.",
    "c Оце так! Наш легендарний гравець забув правила гри! Але це не має значення, адже сьогодні вони відрізняються! Ви маєте вже не три, а лише одне життя! І ті самі десять запитань!",
    {'Conditional': {
        'Condition': function(){
          if(this.storage().flags.chipFlag === false) {
            return '0';
          } else if (this.storage().flags.chipFlag === true) {
            return '1';
          }
        },
        '0': 'jump Act6_Quiz_checkpoint9',
        '1': 'jump Act6_Quiz_skip',
      }},
  ],
  Act6_Quiz_checkpoint9: [
    'play music Act3_QuizTheme loop volume 10',
    function() {
      monogatari.storage().dieOrDie.questions1Used = [false, false, false, false, false, false, false, false, false, false];
    },
    "c Почнемо гру!",

    'jump Act6_QuestionSelect'
  ],
  Death9: [
    'stop music',
    "show video death immersive with close",
    "jump Act6_Quiz_checkpoint9",
  ],
  Act6_WrongAnswer: [
    "c О ні, ви помилились! Бувайте, Адаме!",
    "jump Death9"
  ],
  Act6_CorrectAnswer: [
    "c Правильно! Продовжимо.",
    "jump Act6_QuestionSelect"
  ],
  Act6_QuestionSelect: [
    {'Conditional': {
        'Condition': function(){
          var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].random()

          if(monogatari.storage().dieOrDie.questions1Used.every(element => element === true)) {
            return "Act6_Continue3"
          }

          if(monogatari.storage().dieOrDie.questions1Used[index] === true) {
            return "Redo"
          }

          switch (index) {
            case 0:
              return '0';
              break;
            case 1:
              return '1';
              break;
            case 2:
              return '2';
              break;
            case 3:
              return '3';
              break;
            case 4:
              return '4'
              break;
            case 5:
              return '5';
              break;
            case 6:
              return '6';
              break;
            case 7:
              return '7';
              break;
            case 8:
              return '8';
              break;
            case 9:
              return '9';
              break;
            default:
              return 'Redo'
          }
        },
        '0': 'jump Act6_Q0',
        '1': 'jump Act6_Q1',
        '2': 'jump Act6_Q2',
        '3': 'jump Act6_Q3',
        '4': 'jump Act6_Q4',
        '5': 'jump Act6_Q5',
        '6': 'jump Act6_Q6',
        '7': 'jump Act6_Q7',
        '8': 'jump Act6_Q8',
        '9': 'jump Act6_Q9',
        'Redo': 'jump Act6_QuestionSelect',
        'Act6_Continue3': 'jump Act6_Continue3',
      }},
  ],
  Act6_Q0: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що робить комп’ютер відразу після підключення до електромережі?",
        "answer1": {
          "Text": "Перезавантаження системи.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = false;
          },
        },
        "answer2": {
          "Text": "Перевірка пристроїв та тестування пам’яті.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = false;
          },
        },
        "answer3": {
          "Text": "Завантаження програми.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = false;
          },
        },
        "answer4": {
          "Text": "Завантаження додаткового програмного забезпечення.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[0] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q1: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що являє собою комп’ютерний вірус?",
        "answer1": {
          "Text": "Невелика за розміром програма, яка може завдати шкоди даним та їх цілісності.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = false;
          },
        },
        "answer2": {
          "Text": "Міф, вірусів не існує.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = false;
          },
        },
        "answer3": {
          "Text": "Назва популярної комп’ютерної гри.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = false;
          },
        },
        "answer4": {
          "Text": "Велика програма, яка знаходиться на зовнішньому сервері.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[1] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q2: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c   Що може допомогти видалити вірус з диску?",
        "answer1": {
          "Text": "Перевірка антивірусною програмою.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = false;
          },
        },
        "answer2": {
          "Text": "Дефрагментація диску.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = false;
          },
        },
        "answer3": {
          "Text": "Форматування диску.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = false;
          },
        },
        "answer4": {
          "Text": "Видалення програми – джерела вірусу.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[2] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q3: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Що таке архівація файлів?",
        "answer1": {
          "Text": "Видалення зайвої інформації.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = false;
          },
        },
        "answer2": {
          "Text": "Резервне кодування даних.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = false;
          },
        },
        "answer3": {
          "Text": "Особливий вид кодування інформації.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = false;
          },
        },
        "answer4": {
          "Text": "Конвертація файлу в інший тип.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[3] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q4: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Які з антивірусів не працюють з вірусною базою?",
        "answer1": {
          "Text": "Лікарі.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = false;
          },
        },
        "answer2": {
          "Text": "Ревізори.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = false;
          },
        },
        "answer3": {
          "Text": "Шифрувальники.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = false;
          },
        },
        "answer4": {
          "Text": "Фільтри.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[4] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q5: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Мутанти, невидимки та черви – це?",
        "answer1": {
          "Text": "Програми-утиліти.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = false;
          },
        },
        "answer2": {
          "Text": "Види антивірусних програм.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = false;
          },
        },
        "answer3": {
          "Text": "Стандартні програми операційних систем.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = false;
          },
        },
        "answer4": {
          "Text": "Види комп’ютерних вірусів.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[5] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q6: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c ОЗУ це пам’ять, в якій зберігається?",
        "answer1": {
          "Text": "Інформація про файлову систему.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = false;
          },
        },
        "answer2": {
          "Text": "Кеширувані дані процесора.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = false;
          },
        },
        "answer3": {
          "Text": "Виконуваний машинний код.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = false;
          },
        },
        "answer4": {
          "Text": "Дані стандартних програм операційної системи.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[6] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q7: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Як процесор обробляє інформацію?",
        "answer1": {
          "Text": "В текстовому форматі.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = false;
          },
        },
        "answer2": {
          "Text": "У двійковому коді.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = false;
          },
        },
        "answer3": {
          "Text": "На мові Paskal.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = false;
          },
        },
        "answer4": {
          "Text": "У десятковому форматі.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[7] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q8: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c При відключенні комп’ютера інформація?",
        "answer1": {
          "Text": "Видаляється з HDD.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = false;
          },
        },
        "answer2": {
          "Text": "Зберігається в кеші графічного процесору.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = false;
          },
        },
        "answer3": {
          "Text": "Видаляється з SSD.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = false;
          },
        },
        "answer4": {
          "Text": "Видаляється з пам’яті ОЗП.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[8] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Q9: [
    {
      "Choice": {
        "Timer": {
          time: 20000,
          callback: () => {
            monogatari
                .element()
                .find('[data-choice="tookTooLong"]')
                .get(0)
                .click();
            return Promise.resolve();
          },
        },
        "Dialog": "c Комп’ютер, підключений до інтернету, обов’язково має?",
        "answer1": {
          "Text": "Домен.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = false;
          },
        },
        "answer2": {
          "Text": "Зв’язок з віддаленим сервером.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = false;
          },
        },
        "answer3": {
          "Text": "IP-адресу.",
          "Do": "jump Act6_CorrectAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = false;
          },
        },
        "answer4": {
          "Text": "Доступ Bluetooth.",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = false;
          },
        },
        "tookTooLong": {
          "Text": "TookTooLong",
          "Do": "jump Act6_WrongAnswer",
          "onChosen": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = true;
          },
          "onRevert": function() {
            monogatari.storage().dieOrDie.questions1Used[9] = false;
          },
          "Class": "invisible",
        },
      },
    },
  ],

  Act6_Quiz_skip: [
    "c Почне…що… це…",
    "Поки робот говорив, ви приліпили чіп до його серця.",
    "show scene act6_background11 with fadeIn",
    "a <i> Схоже, саме тут в нього система живлення та управління. </i>",
    "c Ні, ць… ого… не… може бу… ти…",
    "a Мертві не повинні оживати. Бувай.",
    "Робота остаточно заклинило, після чого він звалився на підлогу як звичайний шматок заліза.",
    'jump Act6_Continue3'
  ],
  Act6_Continue3: [
    "z ТИ! Ти не можеш так просто проходити усі мої пастки!",
    "a Виходить, що можу.",
    "z Гаразд, татусю. Тепер ти будеш грати зі своїм сином! Побачимо, хто з нас сильніший!",
    "Вас знову телепортувало в інше місце.",
    "a <i> Я вже зходжу з розуму… </i>",
    "show scene act6_background121 with fadeIn",
    "z Ось ми і вдвох. Один на один. Пишаєшся сином? Я досяг вершини, я правлю усім Кібервсесвітом, а скоро буду правити і світом людей. Чи не цього ти хотів, татку?",
    "a Я не дозволю.",
    "z А-ха-ха-ха-ха! Не думаю, що мертвий ти заподієш мені чогось. Почнемо битву!",
    "show scene act6_background12 with fadeIn",
    "Ви вже очікували на смерть, але почалась гра у чувачі.",
    'jump Act6_checkpoint10'
  ],
  Act6_checkpoint10: [
    'play music Act3_QuizTheme loop volume 10',
    "z ЧУ-ВА-ЧІ!",
    "z Переможи мене три рази, якщо зможеш! І тоді я, можливо, поступлюся!",
    'jump RSP_start'
  ],

  Death10: [
    'stop music',
    "show video death immersive with close",
    "jump Act6_checkpoint10",
  ],

  RSP_start: [
    {'Conditional': {
        'Condition': function(){
          if(monogatari.storage().flags.olimpInfo2Flag) {
            return "True";
          }
          else {
            return "False";
          }
        },
        'True': 'jump RSP_loop_h',
        'False': 'jump RSP_loop',
      }},
    'jump RSP_loop'
  ],

  RSP_ZeusPaper: [
    {
      "Choice": {
        "r": {
          "Text": "Камінь.",
          "Do": "jump RSP_ZeusPaperWin",
        },
        "s": {
          "Text": "Ножиці.",
          "Do": "jump RSP_ZeusPaperLose",
        },
        "p": {
          "Text": "Папір.",
          "Do": "jump RSP_ZeusPaperDraw",
        }
      },
    },
  ],

  RSP_ZeusPaper_h: [
    {
      "Choice": {
        "r": {
          "Text": "Камінь.",
          "Do": "jump RSP_ZeusPaperWin_h",
        },
        "s": {
          "Text": "Ножиці.",
          "Do": "jump RSP_ZeusPaperLose_h",
          "Class": "highlighted_choice",
        },
        "p": {
          "Text": "Папір.",
          "Do": "jump RSP_ZeusPaperDraw_h",
        }
      },
    },
  ],

  RSP_ZeusPaperWin: [
    "Зевс обрав папір.",
    "Зевс переміг.",
    "jump Death10"
  ],

  RSP_ZeusPaperDraw: [
    "Зевс обрав папір.",
    "Нічия.",
    "jump RSP_loop"
  ],

  RSP_ZeusPaperLose: [
    "Зевс обрав папір.",
    "Ви перемогли.",
    function() {
      monogatari.storage().rsp.n += 1;
    },
    "jump RSP_loop"
  ],

  RSP_ZeusPaperWin_h: [
    "Зевс обрав папір.",
    "Зевс переміг.",
    "jump Death10"
  ],

  RSP_ZeusPaperDraw_h: [
    "Зевс обрав папір.",
    "Нічия.",
    "jump RSP_loop_h"
  ],

  RSP_ZeusPaperLose_h: [
    "Зевс обрав папір.",
    "Ви перемогли.",
    function() {
      monogatari.storage().rsp.n += 1;
    },
    "jump RSP_loop_h"
  ],

  RSP_ZeusRock: [
    {
      "Choice": {
        "r": {
          "Text": "Камінь.",
          "Do": "jump RSP_ZeusRockDraw",
        },
        "s": {
          "Text": "Ножиці.",
          "Do": "jump RSP_ZeusRockWin",
        },
        "p": {
          "Text": "Папір.",
          "Do": "jump RSP_ZeusRockLose",
        }
      },
    },
  ],

  RSP_ZeusRock_h: [
    {
      "Choice": {
        "r": {
          "Text": "Камінь.",
          "Do": "jump RSP_ZeusRockDraw_h",
        },
        "s": {
          "Text": "Ножиці.",
          "Do": "jump RSP_ZeusRockWin_h",
        },
        "p": {
          "Text": "Папір.",
          "Do": "jump RSP_ZeusRockLose_h",
          "Class": "highlighted_choice",
        }
      },
    },
  ],

  RSP_ZeusRockWin: [
    "Зевс обрав камінь.",
    "Зевс переміг.",
    "jump Death10"
  ],

  RSP_ZeusRockDraw: [
    "Зевс обрав камінь.",
    "Нічия.",
    "jump RSP_loop"
  ],

  RSP_ZeusRockLose: [
    "Зевс обрав камінь.",
    "Ви перемогли.",
    function() {
      monogatari.storage().rsp.n += 1;
    },
    "jump RSP_loop"
  ],

  RSP_ZeusRockWin_h: [
    "Зевс обрав камінь.",
    "Зевс переміг.",
    "jump Death10"
  ],

  RSP_ZeusRockDraw_h: [
    "Зевс обрав камінь.",
    "Нічия.",
    "jump RSP_loop_h"
  ],

  RSP_ZeusRockLose_h: [
    "Зевс обрав камінь.",
    "Ви перемогли.",
    function() {
      monogatari.storage().rsp.n += 1;
    },
    "jump RSP_loop_h"
  ],

  RSP_ZeusScissors: [
    {
      "Choice": {
        "r": {
          "Text": "Камінь.",
          "Do": "jump RSP_ZeusScissorsLose",
        },
        "s": {
          "Text": "Ножиці.",
          "Do": "jump RSP_ZeusScissorsDraw",
        },
        "p": {
          "Text": "Папір.",
          "Do": "jump RSP_ZeusScissorsWin",
        }
      },
    },
  ],

  RSP_ZeusScissors_h: [
    {
      "Choice": {
        "r": {
          "Text": "Камінь.",
          "Class": "highlighted_choice",
          "Do": "jump RSP_ZeusScissorsLose_h",
        },
        "s": {
          "Text": "Ножиці.",
          "Do": "jump RSP_ZeusScissorsDraw_h",
        },
        "p": {
          "Text": "Папір.",
          "Do": "jump RSP_ZeusScissorsWin_h",
        }
      },
    },
  ],

  RSP_ZeusScissorsWin: [
    "Зевс обрав ножиці.",
    "Зевс переміг.",
    "jump Death10"
  ],

  RSP_ZeusScissorsDraw: [
    "Зевс обрав ножиці.",
    "Нічия.",
    "jump RSP_loop"
  ],

  RSP_ZeusScissorsLose: [
    "Зевс обрав ножиці.",
    "Ви перемогли.",
    function() {
      monogatari.storage().rsp.n += 1;
    },
    "jump RSP_loop"
  ],

  RSP_ZeusScissorsWin_h: [
    "Зевс обрав ножиці.",
    "Зевс переміг.",
    "jump Death10"
  ],

  RSP_ZeusScissorsDraw_h: [
    "Зевс обрав ножиці.",
    "Нічия.",
    "jump RSP_loop_h"
  ],

  RSP_ZeusScissorsLose_h: [
    "Зевс обрав ножиці.",
    "Ви перемогли.",
    function() {
      monogatari.storage().rsp.n += 1;
    },
    "jump RSP_loop_h"
  ],

  RSP_loop_h: [
    {'Conditional': {
        'Condition': function(){
          if(monogatari.storage().rsp.n == 3) {
            return "RSP_end"
          }

          var index = [0, 1, 2].random()

          switch (index) {
            case 0:
              return '0';
              break;
            case 1:
              return '1';
              break;
            case 2:
              return '2';
              break;
          }
        },
        '0': 'jump RSP_ZeusPaper_h',
        '1': 'jump RSP_ZeusRock_h',
        '2': 'jump RSP_ZeusScissors_h',
        'Redo': 'jump RSP_loop_h',
        'RSP_end': 'jump RSP_end',
      }},
  ],

  RSP_loop: [
    {'Conditional': {
        'Condition': function(){
          if(monogatari.storage().rsp.n == 3) {
            return "RSP_end"
          }

          var index = [0, 1, 2].random()

          switch (index) {
            case 0:
              return '0';
              break;
            case 1:
              return '1';
              break;
            case 2:
              return '2';
              break;
          }
        },
        '0': 'jump RSP_ZeusPaper',
        '1': 'jump RSP_ZeusRock',
        '2': 'jump RSP_ZeusScissors',
        'Redo': 'jump RSP_loop',
        'RSP_end': 'jump RSP_end',
      }},
  ],

  RSP_end: [
    'jump Act6_Continue4',
  ],
  Act6_Continue4: [
    "z Це неможливо!",
    "a Усе можливо.",
    "z Я ВСЕ ОДНО ТЕБЕ ЗНИЩУ! АААААААААА!",
    "show scene act6_background2 with fadeIn",
    "Броня Зевса почала розлітатись навколо, його сила так і жадала вийти на свободу. Перебуваючи у силовому потоці, Зевс кричав чи то від болю, чи то від злості. Нарешті ви змогли побачити його справжній вигляд.",
    "show scene act6_background16 with fadeIn",
    "Зевс перейшов у другу стадію…",
    "z ТЕПЕР ТИ ПОМРЕШ, ТАТКУ! БУЛО ПРИЄМНО З ТОБОЮ ПОЗНАЙОМИТИСЬ! А-ХА-ХА-ХА-ХА-ХА!",
    "z ПРОЩАВАЙ!",
    "Зевс направив усю свою міць та силу на вас. Ви не намагались ухилитись, а лише дивились в очі смерті.",
    {'Conditional': {
        'Condition': function(){
          if(this.storage().flags.heartFlag === true) {
            return '0';
          } else if (this.storage().flags.heartFlag === false) {
            return '1';
          }
        },
        '0': 'jump Act6_GoodEnd',
        '1': 'jump Act6_StacyDie',
      }},
  ],
  Act6_StacyDie: [
    "show scene act6_background13 with fadeIn",
    "Здавалось, ніби час сповільнився. Ви закрили очі, сподіваючись на безболісну смерть або ж, хоча надії на це залишалось усе менше, остаточний вихід зі сну.",
    "show scene act6_background9 with fadeIn",
    "Але нічого не сталось.",
    "Зовсім.",
    "show scene act6_background14 with fadeIn",
    "Ви обережно відкрили очі та побачили перед собою знерухомлену Стейсі.",
    "show scene act6_background15 with fadeIn",
    "a Стейсі! Ні! Що ти зробила?!",
    "g Я… Я врятувала тебе… А ти врятуєш Кібервсесвіт… Прощавай, Адаме…",
    "a Ні! Не покидай мене!",
    "g Ти подарував… мені можливість… відчувати… дякую за це…",
    "a НІ! ПОВЕРНИСЬ, СТЕЙСІ!",
    "Ви обійняли тіло дівчини та притиснули його до себе. Вам ще ніколи не було так боляче.",
    "a <i> Я ніколи тебе не забуду… Ніколи… </i>",
    "show scene act6_background16 with fadeIn",
    "z Це ти у всьому винен…",
    "a ЗАМОВКНИ!",
    "z Ні… Ти або вб’єш мене, або помреш. Обирай.",
    "a Я СКАЗАВ, ЗАМОВКНИ!",
    "Ви піднялись та підійшли до Зевса. В ваших грудях палали біль та ненависть. Ви вхопились руками у шию Зевса та зазирнули у його порожні очі, де побачили відображення себе. Безпомічного, втомленого, розлюченого та роздавленого болем…",
    'jump EndingBad'
  ],
  Act6_GoodEnd: [
    "show scene act6_background13 with fadeIn",
    "g Адаме! Ні!",
    "show scene act6_background9 with fadeIn",
    "Ви озирнулись на поклик подруги, але вже було пізно…",
    "Ви померли.",
    "Остаточно.",
    "Безповоротно.",
    "Але у вас було в запасі друге життя.",
    "g Адаме! Адаме, вставай!",
    "show scene act6_background15 with fadeIn",
    "a Що сталося…",
    "g Серце! Той рубін, що ти обрав. Він врятував тобі життя.",
    "Стейсі міцно обійняла вас, а потім допомогла піднятися.",
    "a <i> Чому це так приємно… </i>",
    "Піднявшись, ви зловили поглядом Зевса, який обезсилено тремтів.",
    "show scene act6_background16 with fadeIn",
    "a Я ж казав, що не дозволю.",
    "z Ти… Ти сильніший, ніж я думав… Можеш вбити мене… Татку.",
    "a <i> Татку… </i>",
    "g Що робитимеш?",
    'jump EndingGood'
  ],
  EndingBad: [
    {
      "Choice": {
        "Dialog": "a Я...",
        "end1": {
          "Text": "Знищу Зевса та поверну владу Легіону.",
          "Do": "jump end1",
        },
        "end3": {
          "Text": "Заберу силу Зевса.",
          "Do": "jump end3",
        },

      },
    },
  ],
  EndingGood: [
    {
      "Choice": {
        "Dialog": "a Я...",
        "end1": {
          "Text": "Знищу Зевса та поверну владу Легіону.",
          "Do": "jump end1",
        },
        "end2": {
          "Text": "Знищу Зевса та допоможу Стейсі.",
          "Do": "jump end2",
        },
        "end4": {
          "Text": "Перепрограмую Зевса.",
          "Do": "jump end4",
        },
      },
    },
  ],
  end1:[
    'stop music',
    "show video end_1 immersive with close",
    'jump titles'
  ],
  end2:[
    'stop music',
    "show video end_2 immersive with close",
    'jump titles'
  ],
  end3:[
    'stop music',
    "show video end_3 immersive with close",
    'jump titles'
  ],
  end4:[
    'stop music',
    "show video end_4 immersive with close",
    'jump titles'
  ],
  titles:[
    'stop music',
    "show video titles immersive with close",
    'end',
  ]
});
