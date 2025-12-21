
import { SlideType, SlideData, KeyPoint, FlipCardData } from './types';

export const LESSON_TITLE = "Unit 5B – Operation: Past Patrol";

export const SLIDES: SlideData[] = [
  // 1. OBJECTIVES
  {
    id: 1,
    type: SlideType.OBJECTIVES,
    title: "Before the Lesson: What Will We Learn?",
    subtitle: "Mission Strategy",
    content: {
      intro: "Today, we learn how to talk about the past. In real life, we often need to say what happened, why we were late, or what went wrong.",
      objectives: [
        "Talk about past events in simple English",
        "Use past simple with some important verbs (went, did, had, took, left)",
        "Talk about life events (school, exams, work, family)",
        "Say sorry and give a reason (make an excuse)"
      ],
      outcomes: [
        "Tell a short story about before",
        "Say why you were late or had a problem",
        "Say sorry in a polite way",
        "Understand other people's excuses"
      ],
      keyPoints: [
        { id: 1, text: "Past = Before Now", subtext: "Yesterday, last week, last year." },
        { id: 2, text: "Verbs Change", subtext: "Go -> Went, Have -> Had, Take -> Took." },
        { id: 3, text: "Life Events", subtext: "School, exams, work, family are vital." },
        { id: 4, text: "Saying Sorry", subtext: "\"I'm sorry I'm late\" is the first step." },
        { id: 5, text: "Give a Reason", subtext: "\"My bus was late\" explains why." },
        { id: 6, text: "Clear > Perfect", subtext: "Short sentences are enough to communicate." }
      ] as KeyPoint[]
    }
  },

  // 2. GRAMMAR STRUCTURE
  {
    id: 2,
    type: SlideType.GRAMMAR_STRUCTURE,
    title: "Grammar: The Past Simple",
    subtitle: "Focus on the Sentence Blueprint",
    content: {
      explanation: "Regular verbs usually add '-ed' (walk -> walked). But irregular verbs are REBELS. They change their whole shape!",
      structure: [
        [
          { label: "Subject", value: "I", color: "text-blue-600" },
          { label: "V2", value: "went", color: "text-green-600" },
          { label: "Object", value: "❌", color: "text-red-600", isMissing: true },
          { label: "Place", value: "to the supermarket", color: "text-purple-600" },
          { label: "Time", value: "yesterday", color: "text-amber-500" }
        ],
        [
          { label: "Subject", value: "The Captain", color: "text-blue-600" },
          { label: "V2", value: "had", color: "text-green-600" },
          { label: "Object", value: "a meeting", color: "text-red-600" },
          { label: "Place", value: "at the port", color: "text-purple-600" },
          { label: "Time", value: "last night", color: "text-amber-500" }
        ],
        [
          { label: "Subject", value: "We", color: "text-blue-600" },
          { label: "V2", value: "took", color: "text-green-600" },
          { label: "Object", value: "a taxi", color: "text-red-600" },
          { label: "Place", value: "to the school", color: "text-purple-600" },
          { label: "Time", value: "this morning", color: "text-amber-500" }
        ],
        [
          { label: "Subject", value: "Ali", color: "text-blue-600" },
          { label: "V2", value: "left", color: "text-green-600" },
          { label: "Object", value: "his bag", color: "text-red-600" },
          { label: "Place", value: "on the bus", color: "text-purple-600" },
          { label: "Time", value: "this morning", color: "text-amber-500" }
        ],
        [
          { label: "Subject", value: "They", color: "text-blue-600" },
          { label: "V2", value: "met", color: "text-green-600" },
          { label: "Object", value: "the commander", color: "text-red-600" },
          { label: "Place", value: "in the office", color: "text-purple-600" },
          { label: "Time", value: "an hour ago", color: "text-amber-500" }
        ],
        [
          { label: "Subject", value: "He", color: "text-blue-600" },
          { label: "V2", value: "saw", color: "text-green-600" },
          { label: "Object", value: "the ship", color: "text-red-600" },
          { label: "Place", value: "on the sea", color: "text-purple-600" },
          { label: "Time", value: "last week", color: "text-amber-500" }
        ],
        [
          { label: "Subject", value: "I", color: "text-blue-600" },
          { label: "V2", value: "bought", color: "text-green-600" },
          { label: "Object", value: "a watch", color: "text-red-600" },
          { label: "Place", value: "at the shop", color: "text-purple-600" },
          { label: "Time", value: "yesterday", color: "text-amber-500" }
        ]
      ]
    }
  },

  // 3. FLIP CARDS (RESTORING ALL 25)
  {
    id: 3,
    type: SlideType.VERB_GRID,
    title: "The V2 Archive",
    subtitle: "Click to reveal. Each card shows a full sentence context!",
    content: {
      cards: [
        { id: 1, v1: "go", v2: "went", icon: "🚶", pronunciation: "/ɡoʊ/", shortDescription: "move to a place", context: "I went to the supermarket yesterday morning." },
        { id: 2, v1: "drive", v2: "drove", icon: "🚗", pronunciation: "/draɪv/", shortDescription: "operate a car", context: "My father drove to work last Monday." },
        { id: 3, v1: "get", v2: "got", icon: "📩", pronunciation: "/ɡɛt/", shortDescription: "receive or arrive", context: "She got a message from the commander at 10:00." },
        { id: 4, v1: "have", v2: "had", icon: "🎉", pronunciation: "/hæv/", shortDescription: "own or experience", context: "We had a great party last night." },
        { id: 5, v1: "say", v2: "said", icon: "🗣️", pronunciation: "/seɪ/", shortDescription: "speak words", context: "He said 'Hello' to me this morning." },
        { id: 6, v1: "take", v2: "took", icon: "🚕", pronunciation: "/teɪk/", shortDescription: "carry or use", context: "The cadets took a taxi to the station on Friday." },
        { id: 7, v1: "leave", v2: "left", icon: "🚪", pronunciation: "/liːv/", shortDescription: "go away from", context: "They left the base early yesterday." },
        { id: 8, v1: "leave", v2: "left", icon: "🎒", pronunciation: "/liːv/", shortDescription: "forget something", context: "I left my books in the classroom last week." },
        { id: 9, v1: "lose", v2: "lost", icon: "📉", pronunciation: "/luːz/", shortDescription: "can't find", context: "Ali lost his keys at the park on Sunday." },
        { id: 10, v1: "have", v2: "had", icon: "⏰", pronunciation: "/hæv/", shortDescription: "mistake with time", context: "I had the wrong time for the lesson this morning." },
        { id: 11, v1: "miss", v2: "missed", icon: "🚌", isRegular: true, pronunciation: "/mɪs/", shortDescription: "be late for bus", context: "I missed the shuttle bus yesterday morning." },
        { id: 12, v1: "become", v2: "became", icon: "📈", pronunciation: "/bɪˈkʌm/", shortDescription: "start to be", context: "He became a Petty Officer last year." },
        { id: 13, v1: "meet", v2: "met", icon: "🤝", pronunciation: "/miːt/", shortDescription: "see someone new", context: "We met our new teacher two days ago." },
        { id: 14, v1: "learn", v2: "learnt", icon: "📚", pronunciation: "/lɜːrn/", shortDescription: "get knowledge", context: "They learnt the new codes last night." },
        { id: 15, v1: "pass", v2: "passed", icon: "✅", isRegular: true, pronunciation: "/pæs/", shortDescription: "succeed in exam", context: "She passed the English exam last semester." },
        { id: 16, v1: "buy", v2: "bought", icon: "💰", pronunciation: "/baɪ/", shortDescription: "get for money", context: "I bought a new watch last weekend." },
        { id: 17, v1: "write", v2: "wrote", icon: "✍️", pronunciation: "/rɛɪt/", shortDescription: "use a pen", context: "The cadet wrote a report this morning." },
        { id: 18, v1: "drink", v2: "drank", icon: "☕", pronunciation: "/drɪŋk/", shortDescription: "swallow liquid", context: "We drank tea at the canteen an hour ago." },
        { id: 19, v1: "eat", v2: "ate", icon: "🍲", pronunciation: "/iːt/", shortDescription: "consume food", context: "They ate lunch at 12:00 yesterday." },
        { id: 20, v1: "see", v2: "saw", icon: "👀", pronunciation: "/siː/", shortDescription: "use eyes", context: "I saw the fleet on the horizon last night." },
        { id: 21, v1: "give", v2: "gave", icon: "🎁", pronunciation: "/ɡɪv/", shortDescription: "hand over", context: "The captain gave a speech yesterday." },
        { id: 22, v1: "come", v2: "came", icon: "⚓", pronunciation: "/kʌm/", shortDescription: "arrive here", context: "They came to the base late last night." },
        { id: 23, v1: "do", v2: "did", icon: "🛠️", pronunciation: "/duː/", shortDescription: "perform action", context: "I did my homework on Sunday evening." },
        { id: 24, v1: "read", v2: "read", icon: "📖", pronunciation: "/rɛd/", shortDescription: "look at text", context: "He read the manual before the mission." },
        { id: 25, v1: "know", v2: "knew", icon: "💡", pronunciation: "/noʊ/", shortDescription: "have info", context: "We knew the answers after the lesson." }
      ] as FlipCardData[]
    }
  },

  // 4. V2 SENTENCE BUILDER (Labels Fixed)
  {
    id: 4,
    type: SlideType.V2_SENTENCE_BUILDER,
    title: "V2 Drill: Sentence Constructor",
    subtitle: "Change V1 to V2 and say the whole sentence aloud!",
    content: {
      drills: [
        { subject: "I", v1: "go", v2: "went", object: "", place: "to the cinema", time: "last night" },
        { subject: "My father", v1: "drive", v2: "drove", object: "a big truck", place: "at the base", time: "this morning" },
        { subject: "We", v1: "have", v2: "had", object: "a special dinner", place: "at home", time: "yesterday" },
        { subject: "The cadet", v1: "take", v2: "took", object: "his documents", place: "to the office", time: "an hour ago" },
        { subject: "They", v1: "leave", v2: "left", object: "their bags", place: "in the classroom", time: "on Friday" },
        { subject: "Ali", v1: "lose", v2: "lost", object: "his phone", place: "at the park", time: "on Sunday" },
        { subject: "I", v1: "see", v2: "saw", object: "a large ship", place: "on the horizon", time: "last week" },
        { subject: "She", v1: "buy", v2: "bought", object: "a new uniform", place: "at the shop", time: "yesterday" },
        { subject: "We", v1: "meet", v2: "met", object: "the new commander", place: "at the port", time: "two days ago" },
        { subject: "He", v1: "do", v2: "did", object: "his homework", place: "in the library", time: "last night" }
      ]
    }
  },

  // 5. GAME INTRO
  {
    id: 5,
    type: SlideType.GAME_INTRO,
    title: "Mission Briefing: Tense Shift",
    subtitle: "Preparation for Activity",
    content: {
      message: "In the next game, we will practice shifting sentences from the Present to the Past. Sometimes time markers are placed at the BEGINNING for emphasis—keep your eyes on the V2 verb!",
      keyNotes: [
        "Focus on V1 -> V2 transformation.",
        "Watch the time markers for clues.",
        "Remember: Subject + V2 + Object/Place + Time."
      ]
    }
  },

  // 6. GAME
  {
    id: 6,
    type: SlideType.IFRAME,
    title: "Tactical Drill",
    subtitle: "Interactive Game Zone",
    content: {
      url: "https://wordwall.net/embed/8edb6046d1684af68cbcd5b1d298952a?themeId=23&templateId=75&fontStackId=0"
    }
  },

  // 7. NEGATIVES & QUESTIONS EXPLANATION
  {
    id: 7,
    type: SlideType.NEGATIVES_QUESTIONS,
    title: "The 'Did' Reset",
    subtitle: "Negatives & Questions Rule",
    content: {
      rule: "IMPORTANT: When you use DID or DIDN'T, the verb resets to V1. Do not use V2!",
      formulas: [
        { label: "Negative", structure: "Subject + didn't + V1", example: "I didn't go home." },
        { label: "Question", structure: "Did + Subject + V1?", example: "Did you go home?" }
      ]
    }
  },

  // 8. PRACTICE DRILLS
  {
    id: 8,
    type: SlideType.PRACTICE_DRILLS,
    title: "Tactical Practice",
    subtitle: "Complete the Negative and Question forms",
    content: {
      negatives: [
        { subject: "I", v1: "go", sentence: "I didn't ____ to the cinema.", answer: "go" },
        { subject: "She", v1: "see", sentence: "She didn't ____ the ship.", answer: "see" },
        { subject: "We", v1: "have", sentence: "We didn't ____ lunch.", answer: "have" },
        { subject: "He", v1: "take", sentence: "He didn't ____ a taxi.", answer: "take" },
        { subject: "They", v1: "leave", sentence: "They didn't ____ the base.", answer: "leave" },
        { subject: "Ali", v1: "lose", sentence: "Ali didn't ____ his keys.", answer: "lose" }
      ],
      questions: [
        { subject: "you", v1: "go", sentence: "Did you ____ to the port?", answer: "go" },
        { subject: "he", v1: "see", sentence: "Did he ____ the commander?", answer: "see" },
        { subject: "they", v1: "buy", sentence: "Did they ____ a new car?", answer: "buy" },
        { subject: "she", v1: "meet", sentence: "Did she ____ her friends?", answer: "meet" },
        { subject: "we", v1: "have", sentence: "Did we ____ a meeting?", answer: "have" },
        { subject: "Ali", v1: "do", sentence: "Did Ali ____ his task?", answer: "do" }
      ]
    }
  },

  // 9. READING
  {
    id: 9,
    type: SlideType.READING_COMPREHENSION,
    title: "The Weekend Leave Report",
    subtitle: "Reading and Analysis",
    content: {
      text: "Last Saturday, Cadet Ali had a weekend leave. He left the school at 09:00. He took a bus to the city centre. He met his friends at a cafe. They drank tea and said hello. Later, Ali went to a shop but he lost his wallet. He was very sad. He didn't buy anything. He came back to the base at 21:00 and told the commander about it.",
      questions: [
        { q: "What time did Ali leave the school?", a: "He left at 09:00." },
        { q: "Where did he meet his friends?", a: "He met them at a cafe." },
        { q: "What did they drink?", a: "They drank tea." },
        { q: "What did Ali lose?", a: "He lost his wallet." },
        { q: "Did he buy anything?", a: "No, he didn't buy anything." }
      ]
    }
  },

  // 10. SPEAKING HUB (Specific Content for resim1-resim8)
  {
    id: 10,
    type: SlideType.SPEAKING_HUB,
    title: "🗣️ Speaking Activity: Describe the Picture",
    subtitle: "ART 2 – LANGUAGE SUPPORT",
    content: {
      images: [
        { 
          url: "./media/resim1.jpg",
          title: "1. Photo – Morning",
          verbs: ["wake up → woke up", "sleep → slept", "be → was"],
          objects: ["bed", "alarm clock", "room"],
          places: [],
          time: ["in the morning", "at 06:00"]
        },
        { 
          url: "./media/resim2.jpg",
          title: "2. Photo – Leaving School",
          verbs: ["leave → left", "go → went", "have → had"],
          objects: ["school", "gate", "bag"],
          places: ["from the school"],
          time: ["in the morning", "at 09:00"]
        },
        { 
          url: "./media/resim3.jpg",
          title: "3. Photo – On the Bus",
          verbs: ["take → took", "sit → sat", "travel → travelled"],
          objects: ["bus", "seat", "window"],
          places: ["in the city", "on the bus"],
          time: []
        },
        { 
          url: "./media/resim4.jpg",
          title: "4. Photo – Café",
          verbs: ["meet → met", "drink → drank", "talk → talked", "say → said"],
          objects: ["friends", "tea", "table"],
          places: ["at a café"],
          time: ["in the afternoon"]
        },
        { 
          url: "./media/resim5.jpg",
          title: "5. Photo – Shop Problem",
          verbs: ["go → went", "look for → looked for", "lose → lost", "buy → bought / didn’t buy"],
          objects: ["wallet", "bag", "shop"],
          places: [],
          time: ["later"]
        },
        { 
          url: "./media/resim6.jpg",
          title: "6. Photo – Walking Alone",
          verbs: ["walk → walked", "feel → felt", "think → thought"],
          objects: ["street", "lights"],
          places: ["outside"],
          time: ["in the evening"]
        },
        { 
          url: "./media/resim7.jpg",
          title: "7. Photo – Returning to Base",
          verbs: ["come back → came back", "return → returned", "arrive → arrived"],
          objects: ["base", "gate"],
          places: ["at the base"],
          time: ["at 21:00", "in the evening"]
        },
        { 
          url: "./media/resim8.jpg",
          title: "8. Photo – Talking to Commander",
          verbs: ["tell → told", "explain → explained", "listen → listened", "be → was"],
          objects: ["commander", "office / room"],
          places: ["at the base"],
          time: []
        }
      ]
    }
  },

  // 11. APOLOGY
  {
    id: 11,
    type: SlideType.APOLOGY_RESPONSE,
    title: "Apology Protocol",
    subtitle: "Saying Sorry & Giving Reasons",
    content: {
      languageBox: [
        { category: "Apologising", items: ["I'm sorry I'm late.", "I'm really sorry.", "I'm so sorry."] },
        { category: "Giving an Excuse", items: ["My bus was late.", "My wifi was down.", "I lost my bag.", "I had the wrong time."] },
        { category: "Accepting", items: ["That's all right.", "It's OK.", "No problem."] }
      ],
      rolePlay: {
        studentA: ["You are late for class.", "Say sorry.", "Give a reason."],
        studentB: ["Accept the apology.", "Ask what happened.", "Respond politely."]
      }
    }
  },

  // 12. DEBRIEF
  {
    id: 12,
    type: SlideType.DEBRIEF,
    title: "Mission Debrief",
    subtitle: "Summary of Learning",
    content: {
      checklist: [
        { text: "The V2 Code", reflection: "I can remember irregular past verbs." },
        { text: "The Reset Rule", reflection: "I know that didn't + V1 and Did + S + V1? are correct." },
        { text: "The Reason Protocol", reflection: "I can say sorry and give a simple reason." },
        { text: "Naval Stories", reflection: "I can tell a short story about my weekend leave." }
      ]
    }
  }
];
