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
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

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
      act3_4: "stacey_act3_1.png",
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
  }
});

monogatari.script({
  Start: [
    //"show video intro immersive with close controls",
    "show video intro_intro immersive with close controls",
    'show background black with fadeIn',
    "g Адаме… Адаме, прокидайтесь.",
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
    "jump Act1_Start",
  ],
  Act1_Start: [
    "show video act1_intro immersive with close controls",
    "Подорож тривала на подив не довго. Вже через секунду ви опинились на робочому столі.",
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
    "Ви відчуваєте вібрацію у просторі та чуєте дивний гул. Простір навколо розходиться тріщинами, з яких всередину просочується негативна енергія.",
    "g Нам треба йти.",
    "a ЩО ЦЕ?",
    "g Армія Зевса… Схоже, він вже знає про ваше перебування тут.",
    "a Та хоче познайомитись особисто?!",
    "g Можливо… В будь-якому випадку, час спливає, ходімо.",
    "Стейсі щось швидко налаштовує на кіберсітці та відкриває новий портал, в який ви не задумуючись проходите.",
    "jump Act2_Start",
  ],
  Act2_Start: [
    "show video act2_intro immersive with close controls",
    'show scene act2_background1 with fadeIn',
    'show character a act2 at center with fadeIn',
    'show character g act2 at left with fadeIn',
    "Цього разу портал переніс вас в ігрове лоббі. Ви помічаєте, що зі Стейсі щось не так.",
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
          "Do": "jump Death",
          "Class": "invisible",
        },
      },
    },
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
    "jump Act3_Start",
  ],
  Act3_Start: [
    "show video act3_intro immersive with close controls",
    "show scene act3_background1 with fadeIn",
    "show character a act3_1 at center with fadeIn",
    "show character g act3_1 at left with fadeIn",
    "Ви зі Стейсі доволі довго йшли коридором. Мовчання гнітило, тому ви вирішили почати розмову.",
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
    "jump Death"
  ],
  Act3_QuestionSelect: [
    {'Conditional': {
      'Condition': function(){
          var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].random()

          if(monogatari.storage().sayOrDie.questions1Used.every(element => element === true)) {
            return "Act3_Continuation1"
          }

          if(monogatari.storage().sayOrDie.questions1Used[index] == true) {
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
          if(this.storage().sayOrDie.hp == 3) {
              return '3';
          } else if (this.storage().sayOrDie.hp == 2) {
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
    "jump Act3_Continuation2",
  ],
  Act3_Heart2Hide1: [
    'hide image act3_heart2 with fadeOut',
    "jump Act3_Continuation2",
  ],
  Act3_Heart3Hide1: [
    'hide image act3_heart3 with fadeOut',
    "jump Act3_Continuation2",
  ],
  Act3_Continuation2: [
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
          "Do": "jump Death",
          "Class": "invisible",
        },
      },
    },
  ],

  Act3_Continuation3: [
    "На щастя, вам вистачило лічених секунд, аби заховатись за найближчий стіл та пережити вибух робота. Ви вперше в житті раді бачити поруч нечутливу кібернетичну жінку.",
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
          "Text": "Нічого, припинити",
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
    "end",
  ],

  Death: [
    'show scene black with fadeIn',
    "You're dead.",
    "end"
  ]
});