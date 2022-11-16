// realism
// sentimentalism
// romanticism
// modernism

const poetryData = [
  {
    en: { nameAuthor: "J. W. Goethe", title: "New love - new life" },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Новая любовь - новая жизнь",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/gyote-stix-o-lyubvi-novaya-lyubov-novaya-zizn.mp3",
  },
  {
    en: {
      nameAuthor: "J. W. Goethe",
      title: "Mountain castle",
    },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Горный замок",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/gornyi-zamok.mp3",
  },
  {
    en: { nameAuthor: "J. W. Goethe", title: "Beautiful night" },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Прекрасная ночь",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/prekrasnaya-noc.mp3",
  },
  {
    en: { nameAuthor: "J. W. Goethe", title: "Meeting and parting" },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Свидание и разлука",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/svidanie-i-razluka.mp3",
  },
  {
    en: { nameAuthor: "G. R. Derzhavin", title: "Confession" },
    ru: {
      nameAuthor: "Г. Р. Державин",
      title: "Признание",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/priznanie.mp3",
  },
  {
    en: { nameAuthor: "G. R. Derzhavin", title: "River of time" },
    ru: {
      nameAuthor: "Г. Р. Державин",
      title: "Река времен",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/reka-vremen.mp3",
  },
  {
    en: { nameAuthor: "M. V. Lomonosov", title: "Evening reflection on God" },
    ru: {
      nameAuthor: "М. В. Ломоносов",
      title: "Вечернее размышление о Боге",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/vecernee-razmyslenie.mp3",
  },
  {
    en: {
      nameAuthor: "M. V. Lomonosov",
      title: "Ode to Elizabeth's Accession to the Throne",
    },
    ru: {
      nameAuthor: "М. В. Ломоносов",
      title: "Ода на день восшествия на престол Елизаветы",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/oda-na-den-vossestviya-na-vserossiiskii-prestol-eyo.mp3",
  },

  {
    en: { nameAuthor: "John Donn", title: "The Flea" },
    ru: {
      nameAuthor: "Джон Донн",
      title: "Блоха",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/bloxa-stixotvorenie-dzona-donna-v-perevode-iosifa-brodskogo_lwz5Af9S.mp3",
  },
  {
    en: { nameAuthor: "John Donn", title: "The image of the beloved" },
    ru: {
      nameAuthor: "Джон Донн",
      title: "Образ любимой",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/donn-krasivyi-stix-o-lyubvi-obraz-lyubimoi (mp3cut.net).mp3",
  },
  {
    en: { nameAuthor: "John Donn", title: "Portrait" },
    ru: {
      nameAuthor: "Джон Донн",
      title: "Портрет",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/donn-stixotvorenie-o-lyubvi-portret (mp3cut.net).mp3",
  },
  {
    en: { nameAuthor: "Pierre-Jean de Beranger", title: "The Attic" },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Чердак",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/beranze-krasivoe-stixotvorenie-cerdak (mp3cut.net).mp3",
  },
  {
    en: { nameAuthor: "Pierre-Jean de Beranger", title: "Puppets" },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Марионетки",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/beranze-stixotvorenie-marionetki (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre-Jean de Beranger",
      title: "Puzan in the election of 1819",
    },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Пузан на выборах 1819 года",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/beranze-satiriceskoe-stix-e-o-vyborax (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre-Jean de Beranger",
      title: "A drunkard and his wife",
    },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Пьяница и его жена",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/per-zan-beranze-pyanica-i-ego-zena (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre-Jean de Beranger",
      title: "I don't know you anymore",
    },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Я с вами больше не знаком",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/per-zan-beranze-ya-s-vami-bolse-ne-znakom (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre de Ronsard",
      title: "I am dry to the bone. To the threshold of darkness and cold",
    },
    ru: {
      nameAuthor: "Пьер де Ронсар",
      title: "Я высох до костей. К порогу тьмы и хлада",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/de-ronsar-grustnoe-stixotvorenie-o-smerti_RFk63IpF.mp3",
  },
  {
    en: {
      nameAuthor: "Pierre de Ronsard",
      title: "When amidst the noise of existence",
    },
    ru: {
      nameAuthor: "Пьер де Ронсар",
      title: "Когда средь шума бытия",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/per-de-ronsar-kogda-sred-suma-bytiya.mp3",
  },
];

export default poetryData;
