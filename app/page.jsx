"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const languages = [
  { id: "hi", name: "Hindi" },
  { id: "ta", name: "Tamil" },
  { id: "te", name: "Telugu" },
  { id: "mr", name: "Marathi" },
  { id: "bn", name: "Bengali" },
  { id: "en", name: "English" },
];

const content = {
  en: {
    title: "Ganesh Chaturthi Wishes",
    subtitle:
      "Create a beautiful wish and share it with someone special.",
    yourName: "Your Name",
    receiver: "Send To",
    namePlaceholder: "Enter your name",
    receiverPlaceholder: "Enter recipient name",
    choose: "Choose Your Wish",
    wishes: [
      "May Lord Ganesha bless you with happiness, success and prosperity.",
      "Wishing you a joyful Ganesh Chaturthi filled with love and blessings.",
      "May Lord Ganesha remove all obstacles and bring happiness into your life.",
    ],
    create: "Create Wish",
    share: "Share on WhatsApp",
    copy: "Copy Link",
    another: "Create Another Wish",
    from: "With love from",
    for: "A special wish for",
  },

  hi: {
    title: "गणेश चतुर्थी शुभकामनाएं",
    subtitle:
      "एक खूबसूरत शुभकामना बनाएं और अपने खास व्यक्ति के साथ साझा करें।",
    yourName: "आपका नाम",
    receiver: "किसे भेजें",
    namePlaceholder: "अपना नाम लिखें",
    receiverPlaceholder: "प्राप्तकर्ता का नाम",
    choose: "अपनी शुभकामना चुनें",
    wishes: [
      "भगवान गणेश आपको सुख, सफलता और समृद्धि प्रदान करें।",
      "आपको प्रेम और आशीर्वाद से भरी गणेश चतुर्थी की शुभकामनाएं।",
      "भगवान गणेश आपके सभी विघ्न दूर करें और जीवन में खुशियां लाएं।",
    ],
    create: "शुभकामना बनाएं",
    share: "WhatsApp पर शेयर करें",
    copy: "लिंक कॉपी करें",
    another: "एक और शुभकामना बनाएं",
    from: "प्यार से",
    for: "एक खास शुभकामना",
  },

  ta: {
    title: "விநாயகர் சதுர்த்தி வாழ்த்துகள்",
    subtitle:
      "அழகான வாழ்த்தை உருவாக்கி உங்கள் அன்புக்குரியவருடன் பகிருங்கள்.",
    yourName: "உங்கள் பெயர்",
    receiver: "யாருக்கு அனுப்புவது",
    namePlaceholder: "உங்கள் பெயரை உள்ளிடுங்கள்",
    receiverPlaceholder: "பெறுபவர் பெயர்",
    choose: "வாழ்த்தை தேர்வு செய்யுங்கள்",
    wishes: [
      "விநாயகர் உங்கள் வாழ்க்கையில் மகிழ்ச்சி, வெற்றி மற்றும் செழிப்பை வழங்கட்டும்.",
      "அன்பும் ஆசீர்வாதமும் நிறைந்த இனிய விநாயகர் சதுர்த்தி வாழ்த்துகள்.",
      "விநாயகர் அனைத்து தடைகளையும் நீக்கி உங்கள் வாழ்வில் மகிழ்ச்சியை கொண்டு வரட்டும்.",
    ],
    create: "வாழ்த்தை உருவாக்கு",
    share: "WhatsApp-ல் பகிருங்கள்",
    copy: "லிங்கை Copy செய்யுங்கள்",
    another: "மற்றொரு வாழ்த்து உருவாக்கு",
    from: "அன்புடன்",
    for: "ஒரு சிறப்பு வாழ்த்து",
  },

  te: {
    title: "వినాయక చవితి శుభాకాంక్షలు",
    subtitle:
      "అందమైన శుభాకాంక్షను తయారు చేసి మీ ప్రత్యేక వ్యక్తితో పంచుకోండి.",
    yourName: "మీ పేరు",
    receiver: "ఎవరికి పంపాలి",
    namePlaceholder: "మీ పేరు నమోదు చేయండి",
    receiverPlaceholder: "గ్రహీత పేరు",
    choose: "మీ శుభాకాంక్షను ఎంచుకోండి",
    wishes: [
      "వినాయకుడు మీకు ఆనందం, విజయం మరియు సంపదను ప్రసాదించాలి.",
      "ప్రేమ మరియు ఆశీర్వాదాలతో నిండిన వినాయక చవితి శుభాకాంక్షలు.",
      "వినాయకుడు మీ జీవితంలోని అన్ని అడ్డంకులను తొలగించి ఆనందాన్ని తీసుకురావాలి.",
    ],
    create: "శుభాకాంక్షను తయారు చేయండి",
    share: "WhatsAppలో షేర్ చేయండి",
    copy: "లింక్ కాపీ చేయండి",
    another: "మరో శుభాకాంక్షను తయారు చేయండి",
    from: "ప్రేమతో",
    for: "ఒక ప్రత్యేక శుభాకాంక్ష",
  },

  mr: {
    title: "गणेश चतुर्थीच्या हार्दिक शुभेच्छा",
    subtitle:
      "सुंदर शुभेच्छा तयार करा आणि आपल्या खास व्यक्तीसोबत शेअर करा.",
    yourName: "तुमचे नाव",
    receiver: "कोणाला पाठवायचे",
    namePlaceholder: "तुमचे नाव लिहा",
    receiverPlaceholder: "प्राप्तकर्त्याचे नाव",
    choose: "तुमची शुभेच्छा निवडा",
    wishes: [
      "श्री गणेश तुम्हाला सुख, यश आणि समृद्धी देवो.",
      "प्रेम आणि आशीर्वादांनी भरलेल्या गणेश चतुर्थीच्या हार्दिक शुभेच्छा.",
      "श्री गणेश तुमच्या सर्व अडचणी दूर करून जीवनात आनंद घेऊन येवो.",
    ],
    create: "शुभेच्छा तयार करा",
    share: "WhatsApp वर शेअर करा",
    copy: "लिंक कॉपी करा",
    another: "आणखी एक शुभेच्छा तयार करा",
    from: "प्रेमाने",
    for: "एक खास शुभेच्छा",
  },

  bn: {
    title: "গণেশ চতুর্থীর শুভেচ্ছা",
    subtitle:
      "একটি সুন্দর শুভেচ্ছা তৈরি করুন এবং প্রিয়জনের সঙ্গে শেয়ার করুন।",
    yourName: "আপনার নাম",
    receiver: "কাকে পাঠাবেন",
    namePlaceholder: "আপনার নাম লিখুন",
    receiverPlaceholder: "প্রাপকের নাম",
    choose: "আপনার শুভেচ্ছা বেছে নিন",
    wishes: [
      "ভগবান গণেশ আপনার জীবনে সুখ, সাফল্য ও সমৃদ্ধি নিয়ে আসুন।",
      "ভালোবাসা ও আশীর্বাদে ভরা গণেশ চতুর্থীর শুভেচ্ছা।",
      "ভগবান গণেশ আপনার সব বাধা দূর করে জীবনে আনন্দ নিয়ে আসুন।",
    ],
    create: "শুভেচ্ছা তৈরি করুন",
    share: "WhatsApp-এ শেয়ার করুন",
    copy: "লিঙ্ক কপি করুন",
    another: "আরেকটি শুভেচ্ছা তৈরি করুন",
    from: "ভালোবাসার সঙ্গে",
    for: "একটি বিশেষ শুভেচ্ছা",
  },
};

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [name, setName] = useState("");
  const [receiver, setReceiver] = useState("");
  const [selectedWish, setSelectedWish] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = content[language];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const sharedName = params.get("name");
    const sharedReceiver = params.get("to");
    const sharedLanguage = params.get("lang");
    const sharedWish = params.get("wish");

    if (sharedName && sharedReceiver) {
      setName(sharedName);
      setReceiver(sharedReceiver);

      if (sharedLanguage && content[sharedLanguage]) {
        setLanguage(sharedLanguage);
      }

      if (
        sharedWish !== null &&
        !Number.isNaN(Number(sharedWish)) &&
        Number(sharedWish) >= 0 &&
        Number(sharedWish) <= 2
      ) {
        setSelectedWish(Number(sharedWish));
      }

      setGenerated(true);
    }
  }, []);

  function getShareUrl() {
    const params = new URLSearchParams();

    params.set("name", name.trim());
    params.set("to", receiver.trim());
    params.set("lang", language);
    params.set("wish", String(selectedWish));

    return (
      window.location.origin +
      window.location.pathname +
      "?" +
      params.toString()
    );
  }

  function createWish() {
    if (!name.trim() || !receiver.trim()) {
      alert("Please enter both names.");
      return;
    }

    setGenerated(true);

    setTimeout(() => {
      document
        .getElementById("wish-card")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }

  async function shareWhatsApp() {
    const shareCard =
      document.getElementById("whatsapp-share-card");

    if (!shareCard) return;

    try {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      /*
       * Capture the special WhatsApp card.
       * The normal website card is NOT changed.
       */
      const canvas = await html2canvas(shareCard, {
        scale: 2,
        backgroundColor: "#8b1538",
        useCORS: true,
        allowTaint: false,
        logging: false,

        onclone: (clonedDocument) => {
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
      });

      const blob = await new Promise((resolve) => {
        canvas.toBlob(
          resolve,
          "image/png"
        );
      });

      if (!blob) {
        alert("Unable to create the wish image.");
        return;
      }

      const file = new File(
        [blob],
        "wishloop-greeting.png",
        {
          type: "image/png",
        }
      );

      const shareUrl = getShareUrl();

      const shareText =
        `✨ Create your own wish with WishLoop:\n${shareUrl}`;

      /*
       * Native iPhone / Android share.
       * PNG + WishLoop link.
       */
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share({
          title: "WishLoop",
          text: shareText,
          files: [file],
        });

        return;
      }

      /*
       * Fallback:
       * Download the PNG if file sharing isn't supported.
       */
      const imageUrl =
        URL.createObjectURL(blob);

      const downloadLink =
        document.createElement("a");

      downloadLink.href = imageUrl;
      downloadLink.download =
        "wishloop-greeting.png";

      document.body.appendChild(
        downloadLink
      );

      downloadLink.click();
      downloadLink.remove();

      URL.revokeObjectURL(imageUrl);

      try {
        await navigator.clipboard.writeText(
          shareUrl
        );
      } catch {}

      alert(
        "The PNG was saved. You can share it on WhatsApp and paste your WishLoop link."
      );
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }

      console.error(
        "WishLoop share error:",
        error
      );

      alert(
        "Unable to share the wish right now."
      );
    }
  }

  async function copyLink() {
    if (!name.trim() || !receiver.trim()) {
      alert("Please enter both names.");
      return;
    }

    const url = getShareUrl();

    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Unable to copy the link.");
    }
  }

  function reset() {
    setGenerated(false);
    setName("");
    setReceiver("");
    setSelectedWish(0);

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

  return (
    <main className="page">
      <div className="floating floating-one">
        🪔
      </div>

      <div className="floating floating-two">
        ✨
      </div>

      <div className="floating floating-three">
        🌸
      </div>

      <section className="hero">
        <div className="brand">
          <div className="brand-icon">
            ॐ
          </div>

          <span>WishLoop</span>
        </div>

        <div className="language-bar">
          {languages.map((item) => (
            <button
              key={item.id}
              className={
                language === item.id
                  ? "active-language"
                  : ""
              }
              onClick={() =>
                setLanguage(item.id)
              }
            >
              {item.name}
            </button>
          ))}
        </div>

        {!generated ? (
          <>
            <div className="hero-icon">
              🐘
            </div>

            <h1>{t.title}</h1>

            <p className="subtitle">
              {t.subtitle}
            </p>

            <div className="form-card">
              <div className="input-group">
                <label>
                  {t.yourName}
                </label>

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder={
                    t.namePlaceholder
                  }
                />
              </div>

              <div className="input-group">
                <label>
                  {t.receiver}
                </label>

                <input
                  value={receiver}
                  onChange={(e) =>
                    setReceiver(
                      e.target.value
                    )
                  }
                  placeholder={
                    t.receiverPlaceholder
                  }
                />
              </div>

              <div className="wish-section">
                <label>
                  {t.choose}
                </label>

                <div className="wish-options">
                  {t.wishes.map(
                    (wish, index) => (
                      <button
                        key={index}
                        className={
                          selectedWish === index
                            ? "wish-option selected"
                            : "wish-option"
                        }
                        onClick={() =>
                          setSelectedWish(
                            index
                          )
                        }
                      >
                        <span className="wish-number">
                          {index + 1}
                        </span>

                        <span>
                          {wish}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>

              <button
                className="create-button"
                onClick={createWish}
              >
                {t.create}
                <span>✨</span>
              </button>
            </div>
          </>
        ) : (
          <>
            {/* NORMAL WEBSITE CARD — UNCHANGED */}
            <div
              id="wish-card"
              className="result-area"
            >
              <div className="wish-card">
                <div className="card-decoration top">
                  ✦ ✧ ✦
                </div>

                <div className="ganesha">
                  🐘
                </div>

                <div className="om">
                  ॐ
                </div>

                <h2>{t.title}</h2>

                <div className="recipient">
                  {t.for}{" "}
                  <strong>
                    {receiver}
                  </strong>
                </div>

                <div className="wish-message">
                  {
                    t.wishes[
                      selectedWish
                    ]
                  }
                </div>

                <div className="card-divider">
                  ❖
                </div>

                <p className="from-text">
                  {t.from}
                  <br />
                  <strong>
                    {name}
                  </strong>
                </p>

                <div className="card-decoration bottom">
                  ✦ ✧ ✦
                </div>
              </div>

              <div className="action-buttons">
                <button
                  className="whatsapp-button"
                  onClick={
                    shareWhatsApp
                  }
                >
                  <span>💬</span>{" "}
                  {t.share}
                </button>

                <button
                  className="copy-button"
                  onClick={copyLink}
                >
                  <span>
                    {copied
                      ? "✓"
                      : "🔗"}
                  </span>

                  {copied
                    ? "Copied!"
                    : t.copy}
                </button>
              </div>

              <button
                className="another-button"
                onClick={reset}
              >
                ↻ {t.another}
              </button>
            </div>

            {/* =================================================
                PREMIUM WHATSAPP SHARE CARD
                Hidden from the normal website.
                Only used to create the PNG.
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
                  "linear-gradient(145deg, #6f0f2d 0%, #94163d 45%, #c44725 100%)",
                fontFamily:
                  "Arial, Helvetica, sans-serif",
                color: "#fff8e7",
              }}
            >
              {/* Outer gold frame */}
              <div
                style={{
                  width: "100%",
                  minHeight: "100%",
                  boxSizing: "border-box",
                  border:
                    "4px solid #f6c85f",
                  borderRadius: "42px",
                  padding: "42px",
                  position: "relative",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,215,120,0.04))",
                  boxShadow:
                    "inset 0 0 0 2px rgba(255,255,255,0.18), 0 0 40px rgba(255,205,90,0.28)",
                }}
              >
                {/* Decorative circles */}
                <div
                  style={{
                    position: "absolute",
                    top: "-80px",
                    right: "-80px",
                    width: "230px",
                    height: "230px",
                    borderRadius: "50%",
                    border:
                      "2px solid rgba(246,200,95,0.35)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "-90px",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    border:
                      "2px solid rgba(246,200,95,0.28)",
                  }}
                />

                {/* Top decoration */}
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "34px",
                    letterSpacing: "12px",
                    color: "#f6c85f",
                    marginBottom: "25px",
                  }}
                >
                  ✦ ✧ ✦ ✧ ✦
                </div>

                {/* Ganesha */}
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    margin:
                      "0 auto 25px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(circle, #ffe9a8 0%, #f6c85f 42%, #b66b16 100%)",
                    boxShadow:
                      "0 0 45px rgba(255,210,90,0.45)",
                    fontSize: "92px",
                  }}
                >
                  🐘
                </div>

                {/* Om */}
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "58px",
                    color: "#ffd875",
                    marginBottom: "10px",
                    fontWeight: "700",
                  }}
                >
                  ॐ
                </div>

                {/* Title */}
                <h2
                  style={{
                    textAlign: "center",
                    margin: "0",
                    fontSize: "52px",
                    lineHeight: "1.18",
                    fontWeight: "800",
                    color: "#fff5d6",
                    textShadow:
                      "0 3px 15px rgba(0,0,0,0.35)",
                  }}
                >
                  {t.title}
                </h2>

                {/* Recipient label */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "35px",
                    color: "#ffd875",
                    fontSize: "27px",
                    fontWeight: "600",
                  }}
                >
                  {t.for}
                </div>

                {/* Recipient name */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "8px",
                    fontSize: "55px",
                    lineHeight: "1.2",
                    fontWeight: "800",
                    color: "#ffffff",
                    wordBreak: "break-word",
                    textShadow:
                      "0 3px 15px rgba(0,0,0,0.3)",
                  }}
                >
                  {receiver}
                </div>

                {/* Wish white/cream panel */}
                <div
                  style={{
                    marginTop: "42px",
                    padding: "38px 35px",
                    borderRadius: "30px",
                    background:
                      "linear-gradient(145deg, #fffaf0, #fff0cf)",
                    border:
                      "3px solid rgba(246,200,95,0.9)",
                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.25)",
                    color: "#64132b",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "34px",
                      lineHeight: "1.5",
                      fontWeight: "600",
                      wordBreak: "break-word",
                    }}
                  >
                    {t.wishes[
                      selectedWish
                    ]}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    textAlign: "center",
                    margin:
                      "32px 0 22px",
                    color: "#f6c85f",
                    fontSize: "35px",
                    letterSpacing: "8px",
                  }}
                >
                  ❖ ✦ ❖
                </div>

                {/* Sender */}
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "26px",
                    color: "#ffd875",
                    fontWeight: "600",
                  }}
                >
                  {t.from}
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    fontSize: "45px",
                    fontWeight: "800",
                    color: "#ffffff",
                    wordBreak: "break-word",
                  }}
                >
                  {name} ❤️
                </div>

                {/* Bottom decoration */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "38px",
                    fontSize: "34px",
                    letterSpacing: "12px",
                    color: "#f6c85f",
                  }}
                >
                  ✦ ✧ ✦ ✧ ✦
                </div>

                {/* Brand */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "28px",
                    fontSize: "27px",
                    fontWeight: "800",
                    color: "#ffe7a1",
                    letterSpacing: "2px",
                  }}
                >
                  ✨ WishLoop
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: "8px",
                    fontSize: "19px",
                    color: "rgba(255,248,231,0.8)",
                  }}
                >
                  Create. Share. Celebrate.
                </div>
              </div>
            </div>
          </>
        )}

        <footer>
          <span>WishLoop</span>{" "}
          • Create. Share. Celebrate. ✨
        </footer>
      </section>
    </main>
  );
}