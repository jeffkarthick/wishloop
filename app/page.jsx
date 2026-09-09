"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

/* =========================================================
   LANGUAGES
========================================================= */

const languages = [
  { code: "hi", name: "हिंदी", emoji: "🇮🇳" },
  { code: "ta", name: "தமிழ்", emoji: "🇮🇳" },
  { code: "te", name: "తెలుగు", emoji: "🇮🇳" },
  { code: "mr", name: "मराठी", emoji: "🇮🇳" },
  { code: "bn", name: "বাংলা", emoji: "🇮🇳" },
  { code: "en", name: "English", emoji: "🌐" },
];

/* =========================================================
   ALL WEBSITE TEXT
========================================================= */

const translations = {
  en: {
    brand: "WISHLOOP",
    tagline: "Create. Share. Celebrate.",
    festival: "✨ Ganesh Chaturthi 2026 ✨",

    heroTitle1: "Create a wish.",
    heroTitle2: "Make someone smile.",
    heroDescription:
      "Create a beautiful Ganesh Chaturthi greeting and share it with someone special.",

    createTitle: "Create Your Wish",
    createSubtitle: "Personalize your festival greeting",

    yourName: "Your Name",
    yourNamePlaceholder: "Enter your name",

    sendTo: "Send To",
    receiverPlaceholder: "Enter recipient's name",

    chooseWish: "Choose Your Wish",
    createButton: "Create My Wish",

    cardFestival: "GANESH CHATURTHI",
    cardTitle: "Best Wishes",
    dear: "Dear",
    withLove: "With love",

    shareWhatsApp: "Share on WhatsApp",
    shareInstagram: "Share on Instagram",
    copyLink: "Copy Wish Link",
    copied: "Link Copied!",
    anotherWish: "Create Another Wish",

    footer: "Create. Share. Celebrate.",

    browserTitle: "Open WishLoop in your browser",
    browserDescription:
      "For the best sharing experience, open this page in Safari, Chrome, or your default browser.",
    browserInstruction:
      "Tap the browser menu and choose “Open in Browser”.",

    alertNames:
      "Please enter both your name and the recipient's name.",
    alertImage:
      "Unable to create the wish image.",
    alertShare:
      "Unable to share the wish right now.",
    alertSaved:
      "The greeting image was saved. Share it on WhatsApp and paste your WishLoop link.",
    alertInstagramSaved:
      "Your greeting image was saved and your WishLoop link was copied.",
    alertCopy:
      "Unable to copy the link.",
    alertInstagramImage:
      "Unable to create the Instagram image right now.",

    shareText:
      "✨ Create your own wish with WishLoop:",
  },

  hi: {
    brand: "WISHLOOP",
    tagline: "बनाएं। साझा करें। जश्न मनाएं।",
    festival: "✨ गणेश चतुर्थी 2026 ✨",

    heroTitle1: "एक शुभकामना बनाएं।",
    heroTitle2: "किसी के चेहरे पर मुस्कान लाएं।",
    heroDescription:
      "एक खूबसूरत गणेश चतुर्थी शुभकामना बनाएं और इसे अपने किसी खास के साथ साझा करें।",

    createTitle: "अपनी शुभकामना बनाएं",
    createSubtitle: "अपनी त्योहार की शुभकामना को व्यक्तिगत बनाएं",

    yourName: "आपका नाम",
    yourNamePlaceholder: "अपना नाम दर्ज करें",

    sendTo: "किसे भेजें",
    receiverPlaceholder: "प्राप्तकर्ता का नाम दर्ज करें",

    chooseWish: "अपनी शुभकामना चुनें",
    createButton: "मेरी शुभकामना बनाएं",

    cardFestival: "गणेश चतुर्थी",
    cardTitle: "हार्दिक शुभकामनाएं",
    dear: "प्रिय",
    withLove: "सप्रेम",

    shareWhatsApp: "WhatsApp पर साझा करें",
    shareInstagram: "Instagram पर साझा करें",
    copyLink: "शुभकामना लिंक कॉपी करें",
    copied: "लिंक कॉपी हो गया!",
    anotherWish: "एक और शुभकामना बनाएं",

    footer: "बनाएं। साझा करें। जश्न मनाएं।",

    browserTitle: "WishLoop को अपने ब्राउज़र में खोलें",
    browserDescription:
      "बेहतर शेयरिंग अनुभव के लिए इस पेज को Safari, Chrome या अपने डिफ़ॉल्ट ब्राउज़र में खोलें।",
    browserInstruction:
      "ब्राउज़र मेनू खोलें और “Open in Browser” चुनें।",

    alertNames:
      "कृपया अपना नाम और प्राप्तकर्ता का नाम दोनों दर्ज करें।",
    alertImage:
      "शुभकामना की तस्वीर नहीं बन सकी।",
    alertShare:
      "अभी शुभकामना साझा नहीं की जा सकती।",
    alertSaved:
      "शुभकामना की तस्वीर सेव हो गई है। इसे WhatsApp पर साझा करें और अपना WishLoop लिंक पेस्ट करें।",
    alertInstagramSaved:
      "शुभकामना की तस्वीर सेव हो गई है और WishLoop लिंक कॉपी हो गया है।",
    alertCopy:
      "लिंक कॉपी नहीं हो सका।",
    alertInstagramImage:
      "Instagram के लिए शुभकामना की तस्वीर नहीं बन सकी।",

    shareText:
      "✨ WishLoop के साथ अपनी शुभकामना बनाएं:",
  },

  ta: {
    brand: "WISHLOOP",
    tagline: "உருவாக்குங்கள். பகிருங்கள். கொண்டாடுங்கள்.",
    festival: "✨ விநாயகர் சதுர்த்தி 2026 ✨",

    heroTitle1: "ஒரு வாழ்த்தை உருவாக்குங்கள்.",
    heroTitle2: "ஒருவரின் முகத்தில் புன்னகையை வரவழையுங்கள்.",
    heroDescription:
      "அழகான விநாயகர் சதுர்த்தி வாழ்த்தை உருவாக்கி, உங்களுக்கு பிடித்த ஒருவருடன் பகிருங்கள்.",

    createTitle: "உங்கள் வாழ்த்தை உருவாக்குங்கள்",
    createSubtitle: "உங்கள் பண்டிகை வாழ்த்தை தனிப்பயனாக்குங்கள்",

    yourName: "உங்கள் பெயர்",
    yourNamePlaceholder: "உங்கள் பெயரை உள்ளிடுங்கள்",

    sendTo: "யாருக்கு அனுப்ப வேண்டும்",
    receiverPlaceholder: "பெறுபவரின் பெயரை உள்ளிடுங்கள்",

    chooseWish: "உங்கள் வாழ்த்தை தேர்வு செய்யுங்கள்",
    createButton: "என் வாழ்த்தை உருவாக்கு",

    cardFestival: "விநாயகர் சதுர்த்தி",
    cardTitle: "இனிய நல்வாழ்த்துக்கள்",
    dear: "அன்பிற்குரிய",
    withLove: "அன்புடன்",

    shareWhatsApp: "WhatsApp-ல் பகிருங்கள்",
    shareInstagram: "Instagram-ல் பகிருங்கள்",
    copyLink: "வாழ்த்து இணைப்பை நகலெடுக்கவும்",
    copied: "இணைப்பு நகலெடுக்கப்பட்டது!",
    anotherWish: "மற்றொரு வாழ்த்தை உருவாக்குங்கள்",

    footer: "உருவாக்குங்கள். பகிருங்கள். கொண்டாடுங்கள்.",

    browserTitle: "WishLoop-ஐ உங்கள் browser-ல் திறக்கவும்",
    browserDescription:
      "சிறந்த sharing அனுபவத்திற்காக இந்த பக்கத்தை Safari, Chrome அல்லது உங்கள் default browser-ல் திறக்கவும்.",
    browserInstruction:
      "Browser menu-ஐ திறந்து “Open in Browser” என்பதை தேர்வு செய்யுங்கள்.",

    alertNames:
      "உங்கள் பெயர் மற்றும் பெறுபவரின் பெயர் இரண்டையும் உள்ளிடுங்கள்.",
    alertImage:
      "வாழ்த்து படத்தை உருவாக்க முடியவில்லை.",
    alertShare:
      "தற்போது வாழ்த்தை பகிர முடியவில்லை.",
    alertSaved:
      "வாழ்த்து படம் சேமிக்கப்பட்டது. அதை WhatsApp-ல் பகிர்ந்து உங்கள் WishLoop இணைப்பை ஒட்டுங்கள்.",
    alertInstagramSaved:
      "வாழ்த்து படம் சேமிக்கப்பட்டது மற்றும் WishLoop இணைப்பு நகலெடுக்கப்பட்டது.",
    alertCopy:
      "இணைப்பை நகலெடுக்க முடியவில்லை.",
    alertInstagramImage:
      "Instagram-க்கான வாழ்த்து படத்தை உருவாக்க முடியவில்லை.",

    shareText:
      "✨ WishLoop மூலம் உங்கள் சொந்த வாழ்த்தை உருவாக்குங்கள்:",
  },

  te: {
    brand: "WISHLOOP",
    tagline: "సృష్టించండి. పంచుకోండి. జరుపుకోండి.",
    festival: "✨ వినాయక చవితి 2026 ✨",

    heroTitle1: "ఒక శుభాకాంక్షను సృష్టించండి.",
    heroTitle2: "ఎవరో ఒకరి ముఖంలో చిరునవ్వు తీసుకురండి.",
    heroDescription:
      "అందమైన వినాయక చవితి శుభాకాంక్షను సృష్టించి, మీకు ప్రత్యేకమైన వారితో పంచుకోండి.",

    createTitle: "మీ శుభాకాంక్షను సృష్టించండి",
    createSubtitle: "మీ పండుగ శుభాకాంక్షను వ్యక్తిగతీకరించండి",

    yourName: "మీ పేరు",
    yourNamePlaceholder: "మీ పేరును నమోదు చేయండి",

    sendTo: "ఎవరికి పంపాలి",
    receiverPlaceholder: "స్వీకర్త పేరు నమోదు చేయండి",

    chooseWish: "మీ శుభాకాంక్షను ఎంచుకోండి",
    createButton: "నా శుభాకాంక్షను సృష్టించండి",

    cardFestival: "వినాయక చవితి",
    cardTitle: "శుభాకాంక్షలు",
    dear: "ప్రియమైన",
    withLove: "ప్రేమతో",

    shareWhatsApp: "WhatsAppలో పంచుకోండి",
    shareInstagram: "Instagramలో పంచుకోండి",
    copyLink: "శుభాకాంక్ష లింక్‌ను కాపీ చేయండి",
    copied: "లింక్ కాపీ చేయబడింది!",
    anotherWish: "మరో శుభాకాంక్షను సృష్టించండి",

    footer: "సృష్టించండి. పంచుకోండి. జరుపుకోండి.",

    browserTitle: "WishLoop ను మీ browser లో తెరవండి",
    browserDescription:
      "మంచి sharing అనుభవం కోసం ఈ పేజీని Safari, Chrome లేదా మీ default browser లో తెరవండి.",
    browserInstruction:
      "Browser menu తెరిచి “Open in Browser” ను ఎంచుకోండి.",

    alertNames:
      "దయచేసి మీ పేరు మరియు స్వీకర్త పేరు రెండింటినీ నమోదు చేయండి.",
    alertImage:
      "శుభాకాంక్ష చిత్రాన్ని సృష్టించలేకపోయాము.",
    alertShare:
      "ప్రస్తుతం శుభాకాంక్షను పంచుకోలేకపోతున్నాము.",
    alertSaved:
      "శుభాకాంక్ష చిత్రం సేవ్ చేయబడింది. దాన్ని WhatsAppలో పంచుకుని మీ WishLoop లింక్‌ను జోడించండి.",
    alertInstagramSaved:
      "శుభాకాంక్ష చిత్రం సేవ్ చేయబడింది మరియు WishLoop లింక్ కాపీ చేయబడింది.",
    alertCopy:
      "లింక్‌ను కాపీ చేయలేకపోయాము.",
    alertInstagramImage:
      "Instagram కోసం శుభాకాంక్ష చిత్రాన్ని సృష్టించలేకపోయాము.",

    shareText:
      "✨ WishLoopతో మీ స్వంత శుభాకాంక్షను సృష్టించండి:",
  },

  mr: {
    brand: "WISHLOOP",
    tagline: "तयार करा. शेअर करा. साजरे करा.",
    festival: "✨ गणेश चतुर्थी 2026 ✨",

    heroTitle1: "एक शुभेच्छा तयार करा.",
    heroTitle2: "कोणाच्याही चेहऱ्यावर हसू आणा.",
    heroDescription:
      "एक सुंदर गणेश चतुर्थी शुभेच्छा तयार करा आणि ती तुमच्या खास व्यक्तीसोबत शेअर करा.",

    createTitle: "तुमची शुभेच्छा तयार करा",
    createSubtitle: "तुमची सणाची शुभेच्छा वैयक्तिक बनवा",

    yourName: "तुमचे नाव",
    yourNamePlaceholder: "तुमचे नाव लिहा",

    sendTo: "कोणाला पाठवायचे",
    receiverPlaceholder: "प्राप्तकर्त्याचे नाव लिहा",

    chooseWish: "तुमची शुभेच्छा निवडा",
    createButton: "माझी शुभेच्छा तयार करा",

    cardFestival: "गणेश चतुर्थी",
    cardTitle: "हार्दिक शुभेच्छा",
    dear: "प्रिय",
    withLove: "प्रेमाने",

    shareWhatsApp: "WhatsApp वर शेअर करा",
    shareInstagram: "Instagram वर शेअर करा",
    copyLink: "शुभेच्छा लिंक कॉपी करा",
    copied: "लिंक कॉपी झाली!",
    anotherWish: "आणखी एक शुभेच्छा तयार करा",

    footer: "तयार करा. शेअर करा. साजरे करा.",

    browserTitle: "WishLoop तुमच्या browser मध्ये उघडा",
    browserDescription:
      "चांगल्या sharing अनुभवासाठी हा page Safari, Chrome किंवा तुमच्या default browser मध्ये उघडा.",
    browserInstruction:
      "Browser menu उघडा आणि “Open in Browser” निवडा.",

    alertNames:
      "कृपया तुमचे नाव आणि प्राप्तकर्त्याचे नाव दोन्ही लिहा.",
    alertImage:
      "शुभेच्छेची प्रतिमा तयार करता आली नाही.",
    alertShare:
      "सध्या शुभेच्छा शेअर करता येत नाही.",
    alertSaved:
      "शुभेच्छेची प्रतिमा सेव्ह झाली आहे. ती WhatsApp वर शेअर करा आणि तुमची WishLoop लिंक पेस्ट करा.",
    alertInstagramSaved:
      "शुभेच्छेची प्रतिमा सेव्ह झाली आहे आणि WishLoop लिंक कॉपी झाली आहे.",
    alertCopy:
      "लिंक कॉपी करता आली नाही.",
    alertInstagramImage:
      "Instagram साठी शुभेच्छेची प्रतिमा तयार करता आली नाही.",

    shareText:
      "✨ WishLoop सोबत तुमची स्वतःची शुभेच्छा तयार करा:",
  },

  bn: {
    brand: "WISHLOOP",
    tagline: "তৈরি করুন। শেয়ার করুন। উদযাপন করুন।",
    festival: "✨ গণেশ চতুর্থী ২০২৬ ✨",

    heroTitle1: "একটি শুভেচ্ছা তৈরি করুন।",
    heroTitle2: "কারও মুখে হাসি ফুটিয়ে তুলুন।",
    heroDescription:
      "একটি সুন্দর গণেশ চতুর্থীর শুভেচ্ছা তৈরি করুন এবং আপনার প্রিয়জনের সঙ্গে শেয়ার করুন।",

    createTitle: "আপনার শুভেচ্ছা তৈরি করুন",
    createSubtitle: "আপনার উৎসবের শুভেচ্ছাকে নিজের মতো করে সাজান",

    yourName: "আপনার নাম",
    yourNamePlaceholder: "আপনার নাম লিখুন",

    sendTo: "কাকে পাঠাবেন",
    receiverPlaceholder: "প্রাপকের নাম লিখুন",

    chooseWish: "আপনার শুভেচ্ছা বেছে নিন",
    createButton: "আমার শুভেচ্ছা তৈরি করুন",

    cardFestival: "গণেশ চতুর্থী",
    cardTitle: "শুভেচ্ছা",
    dear: "প্রিয়",
    withLove: "ভালোবাসাসহ",

    shareWhatsApp: "WhatsApp-এ শেয়ার করুন",
    shareInstagram: "Instagram-এ শেয়ার করুন",
    copyLink: "শুভেচ্ছার লিঙ্ক কপি করুন",
    copied: "লিঙ্ক কপি হয়েছে!",
    anotherWish: "আরেকটি শুভেচ্ছা তৈরি করুন",

    footer: "তৈরি করুন। শেয়ার করুন। উদযাপন করুন।",

    browserTitle: "WishLoop আপনার browser-এ খুলুন",
    browserDescription:
      "সেরা sharing অভিজ্ঞতার জন্য এই page Safari, Chrome বা আপনার default browser-এ খুলুন।",
    browserInstruction:
      "Browser menu খুলে “Open in Browser” নির্বাচন করুন।",

    alertNames:
      "অনুগ্রহ করে আপনার নাম এবং প্রাপকের নাম দুটিই লিখুন।",
    alertImage:
      "শুভেচ্ছার ছবি তৈরি করা যায়নি।",
    alertShare:
      "এই মুহূর্তে শুভেচ্ছা শেয়ার করা যাচ্ছে না।",
    alertSaved:
      "শুভেচ্ছার ছবি সেভ হয়েছে। এটি WhatsApp-এ শেয়ার করুন এবং আপনার WishLoop লিঙ্ক পেস্ট করুন।",
    alertInstagramSaved:
      "শুভেচ্ছার ছবি সেভ হয়েছে এবং WishLoop লিঙ্ক কপি হয়েছে।",
    alertCopy:
      "লিঙ্ক কপি করা যায়নি।",
    alertInstagramImage:
      "Instagram-এর জন্য শুভেচ্ছার ছবি তৈরি করা যায়নি।",

    shareText:
      "✨ WishLoop-এর মাধ্যমে আপনার নিজের শুভেচ্ছা তৈরি করুন:",
  },
};

/* =========================================================
   WISHES
========================================================= */

const wishes = {
  hi: [
    "गणेश चतुर्थी की हार्दिक शुभकामनाएं! भगवान गणेश आपके जीवन में सुख, समृद्धि और सफलता लाएं। 🙏✨",
    "इस गणेश चतुर्थी पर भगवान गणेश आपके सभी सपने पूरे करें और आपके घर में खुशियां भर दें। 🐘❤️",
    "वक्रतुंड महाकाय, सूर्यकोटि समप्रभ। गणेश चतुर्थी की शुभकामनाएं! 🌺🙏",
  ],

  ta: [
    "இனிய விநாயகர் சதுர்த்தி நல்வாழ்த்துக்கள்! விநாயகர் உங்கள் வாழ்வில் மகிழ்ச்சி, செழிப்பு மற்றும் வெற்றியை கொண்டு வரட்டும். 🙏✨",
    "இந்த விநாயகர் சதுர்த்தியில் உங்கள் அனைத்து கனவுகளும் நனவாகட்டும். உங்கள் இல்லத்தில் மகிழ்ச்சி நிறைந்திருக்கட்டும். 🐘❤️",
    "விநாயகர் அருள் உங்கள் வாழ்வில் என்றும் நிலைத்திருக்கட்டும். இனிய விநாயகர் சதுர்த்தி நல்வாழ்த்துக்கள்! 🌺🙏",
  ],

  te: [
    "వినాయక చవితి శుభాకాంక్షలు! వినాయకుడు మీ జీవితంలో ఆనందం, ఐశ్వర్యం మరియు విజయాన్ని తీసుకురావాలని కోరుకుంటున్నాను. 🙏✨",
    "ఈ వినాయక చవితి మీ అన్ని కలలను నిజం చేయాలని, మీ ఇంటిని ఆనందంతో నింపాలని కోరుకుంటున్నాను. 🐘❤️",
    "వక్రతుండ మహాకాయ, సూర్యకోటి సమప్రభ. వినాయక చవితి శుభాకాంక్షలు! 🌺🙏",
  ],

  mr: [
    "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! गणपती बाप्पा तुमच्या आयुष्यात सुख, समृद्धी आणि यश घेऊन येवो. 🙏✨",
    "या गणेश चतुर्थीला तुमची सर्व स्वप्ने पूर्ण होवोत आणि तुमचे घर आनंदाने भरून जावो. 🐘❤️",
    "गणपती बाप्पा मोरया! तुमच्या जीवनात गणेशाची कृपा सदैव राहो. 🌺🙏",
  ],

  bn: [
    "শুভ গণেশ চতুর্থী! ভগবান গণেশ আপনার জীবনে সুখ, সমৃদ্ধি ও সাফল্য নিয়ে আসুন। 🙏✨",
    "এই গণেশ চতুর্থীতে আপনার সব স্বপ্ন পূরণ হোক এবং আপনার ঘর আনন্দে ভরে উঠুক। 🐘❤️",
    "গণেশের আশীর্বাদ আপনার জীবনে সর্বদা বিরাজ করুক। শুভ গণেশ চতুর্থী! 🌺🙏",
  ],

  en: [
    "Happy Ganesh Chaturthi! May Lord Ganesha bless your life with happiness, prosperity and success. 🙏✨",
    "May Lord Ganesha remove every obstacle from your path and fill your home with love, peace and happiness. 🐘❤️",
    "Wishing you a joyful and blessed Ganesh Chaturthi! May Ganesha's blessings always be with you. 🌺🙏",
  ],
};

/* =========================================================
   MAIN
========================================================= */

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [name, setName] = useState("");
  const [receiver, setReceiver] = useState("");
  const [selectedWish, setSelectedWish] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] =
    useState(false);

  const t =
    translations[language] ||
    translations.en;

  const currentWishes =
    wishes[language] ||
    wishes.en;

  /* =======================================================
     DETECT IN-APP BROWSER
  ======================================================= */

  useEffect(() => {
    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      window.opera ||
      "";

    const isFacebook =
      /FBAN|FBAV|FB_IAB/i.test(ua);

    const isInstagram =
      /Instagram/i.test(ua);

    const isMessenger =
      /Messenger/i.test(ua);

    setIsInAppBrowser(
      isFacebook ||
      isInstagram ||
      isMessenger
    );
  }, []);

  /* =======================================================
     SHARED LINK
  ======================================================= */

  useEffect(() => {
    const params =
      new URLSearchParams(
        window.location.search
      );

    const sharedName =
      params.get("name");

    const sharedReceiver =
      params.get("to");

    const sharedLanguage =
      params.get("lang");

    const sharedWish =
      params.get("wish");

    if (
      sharedLanguage &&
      translations[sharedLanguage]
    ) {
      setLanguage(
        sharedLanguage
      );

      document.documentElement.lang =
        sharedLanguage;
    }

    if (sharedName) {
      setName(sharedName);
    }

    if (sharedReceiver) {
      setReceiver(sharedReceiver);
    }

    if (sharedWish !== null) {
      const wishIndex =
        Number(sharedWish);

      const sharedWishes =
        wishes[sharedLanguage] ||
        wishes.en;

      if (
        Number.isInteger(wishIndex) &&
        wishIndex >= 0 &&
        wishIndex <
          sharedWishes.length
      ) {
        setSelectedWish(
          wishIndex
        );
      }
    }

    if (
      sharedName ||
      sharedReceiver
    ) {
      setGenerated(true);

      setTimeout(() => {
        document
          .getElementById(
            "wish-card"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 300);
    }
  }, []);

  /* =======================================================
     LANGUAGE CHANGE
  ======================================================= */

  function changeLanguage(code) {
    setLanguage(code);
    setSelectedWish(0);
    setCopied(false);

    document.documentElement.lang =
      code;
  }

  /* =======================================================
     SHARE URL
  ======================================================= */

  function getShareUrl() {
    const url =
      new URL(
        window.location.href
      );

    url.search = "";

    url.searchParams.set(
      "name",
      name.trim()
    );

    url.searchParams.set(
      "to",
      receiver.trim()
    );

    url.searchParams.set(
      "lang",
      language
    );

    url.searchParams.set(
      "wish",
      String(selectedWish)
    );

    return url.toString();
  }

  /* =======================================================
     CREATE WISH
  ======================================================= */

  function createWish() {
    if (
      !name.trim() ||
      !receiver.trim()
    ) {
      alert(t.alertNames);
      return;
    }

    setGenerated(true);

    setTimeout(() => {
      document
        .getElementById(
          "wish-card"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  }

  /* =======================================================
     CREATE PNG
  ======================================================= */

  async function createShareImage() {
    const shareCard =
      document.getElementById(
        "whatsapp-share-card"
      );

    if (!shareCard) {
      throw new Error(
        "Share card not found."
      );
    }

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const canvas =
      await html2canvas(
        shareCard,
        {
          scale: 2,

          backgroundColor:
            "#ff1744",

          useCORS: true,

          allowTaint: false,

          logging: false,

          onclone:
            (
              clonedDocument
            ) => {
              const clonedCard =
                clonedDocument.getElementById(
                  "whatsapp-share-card"
                );

              if (clonedCard) {
                clonedCard.style.setProperty(
                  "animation",
                  "none",
                  "important"
                );

                clonedCard.style.setProperty(
                  "opacity",
                  "1",
                  "important"
                );

                clonedCard.style.setProperty(
                  "visibility",
                  "visible",
                  "important"
                );

                clonedCard.style.setProperty(
                  "transform",
                  "none",
                  "important"
                );

                clonedCard.style.setProperty(
                  "filter",
                  "none",
                  "important"
                );
              }
            },
        }
      );

    const blob =
      await new Promise(
        (resolve) => {
          canvas.toBlob(
            resolve,
            "image/png"
          );
        }
      );

    if (!blob) {
      throw new Error(
        "Unable to create image."
      );
    }

    return blob;
  }

  /* =======================================================
     WHATSAPP SHARE
     
     IMPORTANT:
     - No wa.me
     - No whatsapp://
     - No Play Store redirect
     - No App Store redirect
     
     Uses native Web Share.
  ======================================================= */

  async function shareWhatsApp() {
    try {
      if (
        !navigator.share
      ) {
        const blob =
          await createShareImage();

        const imageUrl =
          URL.createObjectURL(
            blob
          );

        const link =
          document.createElement(
            "a"
          );

        link.href =
          imageUrl;

        link.download =
          "wishloop-greeting.png";

        document.body.appendChild(
          link
        );

        link.click();

        link.remove();

        URL.revokeObjectURL(
          imageUrl
        );

        try {
          await navigator.clipboard.writeText(
            getShareUrl()
          );
        } catch {}

        alert(
          t.alertSaved
        );

        return;
      }

      const shareUrl =
        getShareUrl();

      const shareText =
        `${t.shareText}\n${shareUrl}`;

      const blob =
        await createShareImage();

      const file =
        new File(
          [blob],
          "wishloop-greeting.png",
          {
            type: "image/png",
          }
        );

      /*
       * Best option:
       * Image + text + WishLoop link
       */

      if (
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share({
          title: t.brand,
          text: shareText,
          files: [file],
        });

        return;
      }

      /*
       * Fallback:
       * Text + WishLoop link
       */

      await navigator.share({
        title: t.brand,
        text: shareText,
      });

    } catch (error) {
      if (
        error?.name ===
        "AbortError"
      ) {
        return;
      }

      console.error(
        "WhatsApp share error:",
        error
      );

      /*
       * Never redirect to wa.me.
       *
       * Save image + copy link instead.
       */

      try {
        const blob =
          await createShareImage();

        const imageUrl =
          URL.createObjectURL(
            blob
          );

        const link =
          document.createElement(
            "a"
          );

        link.href =
          imageUrl;

        link.download =
          "wishloop-greeting.png";

        document.body.appendChild(
          link
        );

        link.click();

        link.remove();

        URL.revokeObjectURL(
          imageUrl
        );

        try {
          await navigator.clipboard.writeText(
            getShareUrl()
          );
        } catch {}

        alert(
          t.alertSaved
        );

      } catch {
        alert(
          t.alertShare
        );
      }
    }
  }

  /* =======================================================
     INSTAGRAM
  ======================================================= */

  async function shareInstagram() {
    try {
      const blob =
        await createShareImage();

      const file =
        new File(
          [blob],
          "wishloop-greeting.png",
          {
            type: "image/png",
          }
        );

      const shareUrl =
        getShareUrl();

      const shareText =
        `${t.shareText}\n${shareUrl}`;

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share({
          title: t.brand,
          text: shareText,
          files: [file],
        });

        return;
      }

      const imageUrl =
        URL.createObjectURL(
          blob
        );

      const downloadLink =
        document.createElement(
          "a"
        );

      downloadLink.href =
        imageUrl;

      downloadLink.download =
        "wishloop-greeting.png";

      document.body.appendChild(
        downloadLink
      );

      downloadLink.click();

      downloadLink.remove();

      URL.revokeObjectURL(
        imageUrl
      );

      try {
        await navigator.clipboard.writeText(
          shareUrl
        );
      } catch {}

      alert(
        t.alertInstagramSaved
      );

    } catch (error) {
      if (
        error?.name ===
        "AbortError"
      ) {
        return;
      }

      console.error(
        "Instagram error:",
        error
      );

      alert(
        t.alertInstagramImage
      );
    }
  }

  /* =======================================================
     COPY LINK
  ======================================================= */

  async function copyLink() {
    try {
      const shareUrl =
        getShareUrl();

      await navigator.clipboard.writeText(
        shareUrl
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch {
      alert(t.alertCopy);
    }
  }

  /* =======================================================
     RESET
  ======================================================= */

  function reset() {
    setName("");
    setReceiver("");
    setSelectedWish(0);
    setGenerated(false);
    setCopied(false);

    window.history.replaceState(
      {},
      "",
      window.location.pathname
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =======================================================
     UI
  ======================================================= */

  return (
    <main className="page-shell">

      {/* =================================================
          IN-APP BROWSER NOTICE
      ================================================= */}

      {isInAppBrowser && (
        <div className="browser-banner">

          <div className="browser-banner-content">

            <div className="browser-banner-icon">
              🌐
            </div>

            <div className="browser-banner-text">

              <strong>
                {t.browserTitle}
              </strong>

              <span>
                {t.browserDescription}
              </span>

            </div>

            <button
              className="browser-open-btn"
              onClick={() => {
                alert(
                  t.browserInstruction
                );
              }}
            >
              Open in Browser
            </button>

          </div>

        </div>
      )}

      {/* ================================================
          LANGUAGE BAR
      ================================================= */}

      <div className="language-bar">

        <div className="language-scroll">

          {languages.map(
            (item) => (
              <button
                key={item.code}
                className={`language-btn ${
                  language ===
                  item.code
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  changeLanguage(
                    item.code
                  )
                }
              >

                <span>
                  {item.emoji}
                </span>

                <span>
                  {item.name}
                </span>

              </button>
            )
          )}

        </div>

      </div>

      {/* ================================================
          HERO
      ================================================= */}

      <section className="hero-section">

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-content">

          <div className="brand-icon">
            🐘
          </div>

          <div className="brand-name">
            {t.brand}
          </div>

          <div className="tagline">
            {t.tagline}
          </div>

          <div className="festival-badge">
            {t.festival}
          </div>

          <h1>

            {t.heroTitle1}

            <br />

            <span>
              {t.heroTitle2}
            </span>

          </h1>

          <p className="hero-description">
            {t.heroDescription}
          </p>

        </div>

      </section>

      {/* ================================================
          CREATE
      ================================================= */}

      <section className="create-section">

        <div className="create-card">

          <div className="section-heading">

            <div className="heading-icon">
              ✨
            </div>

            <div>

              <h2>
                {t.createTitle}
              </h2>

              <p>
                {t.createSubtitle}
              </p>

            </div>

          </div>

          {/* NAME */}

          <div className="input-group">

            <label>
              {t.yourName}
            </label>

            <input
              type="text"
              placeholder={
                t.yourNamePlaceholder
              }
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              maxLength={40}
            />

          </div>

          {/* RECEIVER */}

          <div className="input-group">

            <label>
              {t.sendTo}
            </label>

            <input
              type="text"
              placeholder={
                t.receiverPlaceholder
              }
              value={receiver}
              onChange={(e) =>
                setReceiver(
                  e.target.value
                )
              }
              maxLength={40}
            />

          </div>

          {/* WISHES */}

          <div className="input-group">

            <label>
              {t.chooseWish}
            </label>

            <div className="wish-options">

              {currentWishes.map(
                (
                  wish,
                  index
                ) => (

                  <button
                    key={index}
                    className={`wish-option ${
                      selectedWish ===
                      index
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedWish(
                        index
                      )
                    }
                  >

                    <span className="wish-number">
                      {index + 1}
                    </span>

                    <span className="wish-text">
                      {wish}
                    </span>

                    {selectedWish ===
                      index && (
                      <span className="wish-check">
                        ✓
                      </span>
                    )}

                  </button>

                )
              )}

            </div>

          </div>

          {/* CREATE */}

          <button
            className="primary-btn"
            onClick={
              createWish
            }
          >

            <span>
              ✨
            </span>

            {t.createButton}

            <span>
              →
            </span>

          </button>

        </div>

      </section>

      {/* ================================================
          GENERATED CARD
      ================================================= */}

      {generated && (

        <section className="result-section">

          <div
            className="wish-card"
            id="wish-card"
          >

            <div className="card-decoration decoration-top">
              ✨
            </div>

            <div className="ganesha-circle">
              🐘
            </div>

            <div className="card-small-title">
              {t.cardFestival}
            </div>

            <h2>
              {t.cardTitle}
            </h2>

            <div className="recipient-line">

              {t.dear}{" "}

              <strong>
                {receiver}
              </strong>

            </div>

            <div className="wish-message">
              {
                currentWishes[
                  selectedWish
                ]
              }
            </div>

            <div className="card-divider">
              ✦
            </div>

            <div className="from-text">
              {t.withLove}
            </div>

            <div className="sender-name">
              {name}
            </div>

            <div className="card-footer">

              <span>
                🐘
              </span>

              <strong>
                {t.brand}
              </strong>

              <span>
                ✨
              </span>

            </div>

            <div className="card-decoration decoration-bottom">
              🌺 ✨ 🌺
            </div>

          </div>

          {/* ============================================
              SHARE BUTTONS
          ============================================= */}

          <div className="result-actions">

            <button
              className="whatsapp-btn"
              onClick={
                shareWhatsApp
              }
            >

              <span>
                💚
              </span>

              {t.shareWhatsApp}

            </button>

            <button
              className="instagram-btn"
              onClick={
                shareInstagram
              }
            >

              <span>
                📸
              </span>

              {t.shareInstagram}

            </button>

            <button
              className="copy-btn"
              onClick={
                copyLink
              }
            >

              <span>
                {copied
                  ? "✓"
                  : "🔗"}
              </span>

              {copied
                ? t.copied
                : t.copyLink}

            </button>

            <button
              className="reset-btn"
              onClick={
                reset
              }
            >
              {t.anotherWish}
            </button>

          </div>

        </section>

      )}

      {/* =================================================
          HIDDEN SHARE IMAGE
      ================================================= */}

      <div
        id="whatsapp-share-card"
        style={{
          position: "fixed",
          left: "-10000px",
          top: "0",

          width: "900px",
          minHeight: "1200px",

          padding: "55px",

          boxSizing: "border-box",

          overflow: "hidden",

          background:
            "linear-gradient(135deg, #ff1744 0%, #ff6d00 45%, #ffca28 100%)",

          fontFamily:
            "Arial, Helvetica, sans-serif",

          color: "#ffffff",
        }}
      >

        <div
          style={{
            width: "100%",
            minHeight: "100%",

            boxSizing:
              "border-box",

            border:
              "5px solid #fff176",

            borderRadius:
              "46px",

            padding:
              "55px",

            position:
              "relative",

            background:
              "linear-gradient(160deg, rgba(255,255,255,0.22), rgba(255,193,7,0.16))",

            boxShadow:
              "inset 0 0 0 3px rgba(255,255,255,0.35), 0 0 55px rgba(255,235,59,0.55)",
          }}
        >

          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "45px",
              fontSize: "32px",
            }}
          >
            ✨
          </div>

          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "45px",
              fontSize: "32px",
            }}
          >
            🌺
          </div>

          <div
            style={{
              width: "190px",
              height: "190px",

              margin:
                "35px auto 28px",

              borderRadius:
                "50%",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              fontSize: "95px",

              background:
                "radial-gradient(circle, #fffde7 0%, #ffd740 40%, #ff6f00 100%)",

              border:
                "7px solid #fff8e1",

              boxShadow:
                "0 0 60px rgba(255,235,59,0.75), inset 0 0 25px rgba(255,255,255,0.7)",
            }}
          >
            🐘
          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: "34px",
              fontWeight: "800",
              color: "#fffde7",
            }}
          >
            ॐ
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
              fontSize: "28px",
              fontWeight: "900",
              letterSpacing: "3px",
              color: "#fffde7",
            }}
          >
            {t.cardFestival}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "58px",
              lineHeight: "1.15",
              fontWeight: "900",
              color: "#ffffff",
              textShadow:
                "0 5px 18px rgba(120,0,0,0.45)",
            }}
          >
            {t.cardTitle}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "35px",
              fontSize: "24px",
              color: "#fffde7",
            }}
          >
            {t.dear}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "7px",
              fontSize: "52px",
              lineHeight: "1.1",
              fontWeight: "900",
              color: "#ffffff",
              wordBreak: "break-word",
              textShadow:
                "0 4px 14px rgba(120,0,0,0.4)",
            }}
          >
            {receiver}
          </div>

          <div
            style={{
              marginTop: "45px",
              padding: "45px 42px",
              borderRadius: "34px",

              background:
                "linear-gradient(145deg, #fffef7, #fff3c4)",

              border:
                "4px solid #fff176",

              boxShadow:
                "0 15px 45px rgba(120,40,0,0.22)",

              color: "#68152b",

              fontSize: "31px",

              lineHeight: "1.55",

              textAlign: "center",

              fontWeight: "700",
            }}
          >
            {
              currentWishes[
                selectedWish
              ]
            }
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              fontSize: "32px",
              color: "#fffde7",
              letterSpacing: "12px",
            }}
          >
            ✦ ✨ ✦
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              fontSize: "22px",
              color: "#fffde7",
            }}
          >
            {t.withLove}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "8px",
              fontSize: "43px",
              fontWeight: "900",
              color: "#ffffff",
              wordBreak: "break-word",
              textShadow:
                "0 4px 14px rgba(120,0,0,0.4)",
            }}
          >
            {name}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
              paddingTop: "25px",
              borderTop:
                "2px solid rgba(255,255,255,0.45)",
              fontSize: "27px",
              fontWeight: "900",
              letterSpacing: "4px",
              color: "#fffde7",
            }}
          >
            🐘 {t.brand} ✨
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontSize: "20px",
              color: "#fffde7",
            }}
          >
            {t.tagline}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "25px",
              left: "0",
              right: "0",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            🌺 ✨ 🌺 ✨ 🌺
          </div>

        </div>

      </div>

      {/* ================================================
          FOOTER
      ================================================= */}

      <footer className="site-footer">

        <div className="footer-logo">
          🐘 {t.brand}
        </div>

        <p>
          {t.footer}
        </p>

        <div className="footer-copy">
          © 2026 {t.brand}
        </div>

      </footer>

    </main>
  );
}