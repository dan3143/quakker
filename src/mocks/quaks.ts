import Quak from "types/quak";

const quaks: Quak[] = [
  {
    "id": 40,
    "user": "kev",
    "content": "—Soy Rosa.\n—Ah perdón, es que soy daltónico.",
    "likes": 2,
    "requaks": 1,
    "replies": 0,
    "type": "quak",
    "date": "2021-08-08 10:48:21"
  },

  {
    "id": 41,
    "user": "maria_camila",
    "content": "—Soy Rosa.\n—Ah perdón, es que soy daltónica.",
    "likes": 987,
    "requaks": 351,
    "replies": 1043,
    "type": "quak",
    "date": "2021-08-09 10:58:12"
  },

  {
    "id": 42,
    "user": "eugene",
    "content": "AJAJAJAJAJJAJA",
    "likes": 0,
    "requaks": 0,
    "replies": 1,
    "type": "reply",
    "parent": 41,
    "date": "2021-08-09 10:58:13"
  },
  {
    "id": 43,
    "user": "eugene",
    "type": "requak",
    "parent": 41,
    "date": "2021-08-09 10:49:51"
  },
  {
    "id": 44,
    "user": "pablo",
    "content": "Eres muy graciosa. Por cierto, no has respondido mis DMs.",
    "likes": 0,
    "requaks": 0,
    "replies": 0,
    "type": "reply",
    "parent": 41,
    "date": "2021-08-09 10:50:38"
  },
  {
    "id": 50,
    "user": "lester",
    "content": "JAJAJAJAJAJA qué graciosa heres, hermosa",
    "likes": 0,
    "requaks": 0,
    "replies": 0,
    "type": "reply",
    "parent": 41,
    "date": "2021-08-09 10:52:38"
  },
  {
    "id": 46,
    "user": "kev",
    "content": "Realmente vivimos en una sociedad",
    "likes": 2,
    "requaks": 0,
    "replies": 5,
    "date": "2021-08-09 17:02:09",
    "type": "quak"
  },
  {
    "id": 53,
    "user": "pablo",
    "likes": 0,
    "replies": 0,
    "requaks": 0,
    "date": "2021-08-09 18:46:26",
    "type": "quak",
    "content": "@maria_camila contesta mis DMs :C"
  },
  {
    "id": 47,
    "user": "kev",
    "content": "Somos polvo de estrellas, y aunque ahora estemos lejos el uno del otro, al final terminaremos juntos.\n--Amelia Watson",
    "likes": 10,
    "requaks": 14,
    "replies": 4,
    "date": "2021-08-11 09:28:00",
    "type": "quak"
  },
  {
    "id": 49,
    "user": "eugene",
    "content": "Qué dice ahí",
    "likes": 20,
    "requaks": 100,
    "replies": 20,
    "type": "citation",
    "parent": 45,
    "date": "2021-08-11 19:20:45"
  },
  {
    "id": 51,
    "user": "kev",
    "content": "Es un orgullo decir que fue mi profesora durante primer semestre\nMe alegra que le esté yendo bien\n#LanaSmirnov",
    "likes": 10,
    "requaks": 1,
    "replies": 24,
    "type": "quak",
    "date": "2021-08-12 12:38:11"
  }
];

export default quaks;