"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const languages = [
  { code: "hi", name: "हिंदी", emoji: "🇮🇳" },
  { code: "ta", name: "தமிழ்", emoji: "🇮🇳" },
  { code: "te", name: "తెలుగు", emoji: "🇮🇳" },
  { code: "mr", name: "मराठी", emoji: "🇮🇳" },
  { code: "bn", name: "বাংলা", emoji: "🇮🇳" },
  { code: "en", name: "English", emoji: "🌐" },
];

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

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [name, setName] = useState("");
  const [receiver, setReceiver] = useState("");
  const [selectedWish, setSelectedWish] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentWishes = wishes[language] || wishes.en;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const sharedName = params.get("name");
    const sharedReceiver = params.get("to");
    const sharedLanguage = params.get("lang");
    const sharedWish = params.get("wish");

    if (sharedName) {
      setName(sharedName);
    }

    if (sharedReceiver) {
      setReceiver(sharedReceiver);
    }

    if (sharedLanguage && wishes[sharedLanguage]) {
      setLanguage(sharedLanguage);
    }

    if (sharedWish !== null) {
      const wishIndex = Number(sharedWish);

      if (
        Number.isInteger(wishIndex) &&
        wishIndex >= 0 &&
        wishIndex < (wishes[sharedLanguage] || wishes.en).length
      ) {
        setSelectedWish(wishIndex);
      }
    }

    if (sharedName || sharedReceiver) {
      setGenerated(true);

      setTimeout(() => {
        document
          .getElementById("wish-card")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 300);
    }
  }, []);

  function getShareUrl() {
    const url = new URL(window.location.href);

    url.search = "";

    url.searchParams.set("name", name.trim());
    url.searchParams.set("to", receiver.trim());
    url.searchParams.set("lang", language);
    url.searchParams.set("wish", String(selectedWish));

    return url.toString();
  }

  function createWish() {
    if (!name.trim() || !receiver.trim()) {
      alert(
        "Please enter both your name and the recipient's name."
      );
      return;
    }

    setGenerated(true);

    setTimeout(() => {
      document
        .getElementById("wish-card")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  }

  /* ==========================================
     CREATE PNG
  ========================================== */

  async function createShareImage() {
    const shareCard =
      document.getElementById("whatsapp-share-card");

    if (!shareCard) {
      throw new Error("Share card not found.");
    }

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const canvas = await html2canvas(shareCard, {
      scale: 2,
      backgroundColor: "#ff1744",
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
      throw new Error(
        "Unable to create image."
      );
    }

    return blob;
  }

  /* ==========================================
     WHATSAPP
  ========================================== */

  async function shareWhatsApp() {
    try {
      const blob = await createShareImage();

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

      const imageUrl =
        URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = imageUrl;
      link.download =
        "wishloop-greeting.png";

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(imageUrl);

      try {
        await navigator.clipboard.writeText(
          shareUrl
        );
      } catch {}

      alert(
        "The greeting image was saved. Share it on WhatsApp and paste your WishLoop link."
      );
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }

      console.error(
        "WhatsApp error:",
        error
      );

      alert(
        "Unable to share the wish right now."
      );
    }
  }

  /* ==========================================
     INSTAGRAM
  ========================================== */

  async function shareInstagram() {
    try {
      const blob = await createShareImage();

      const shareUrl = getShareUrl();

      /*
       * First save the greeting image
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

      /*
       * Keep URL available for a little while
       */

      setTimeout(() => {
        URL.revokeObjectURL(imageUrl);
      }, 5000);

      /*
       * Copy WishLoop link
       */

      try {
        await navigator.clipboard.writeText(
          shareUrl
        );
      } catch {}

      /*
       * Open Instagram App
       */

      let instagramOpened = false;

      const handleVisibility = () => {
        instagramOpened = true;
      };

      document.addEventListener(
        "visibilitychange",
        handleVisibility,
        { once: true }
      );

      /*
       * Try Instagram App
       */

      window.location.href =
        "instagram://app";

      /*
       * Fallback to Instagram website
       */

      setTimeout(() => {
        if (!instagramOpened) {
          window.location.href =
            "https://www.instagram.com/";
        }
      }, 1800);

    } catch (error) {
      console.error(
        "Instagram error:",
        error
      );

      alert(
        "Unable to create the Instagram image right now."
      );
    }
  }

  /* ==========================================
     COPY LINK
  ========================================== */

  async function copyLink() {
    try {
      const shareUrl = getShareUrl();

      await navigator.clipboard.writeText(
        shareUrl
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert(
        "Unable to copy the link."
      );
    }
  }

  /* ==========================================
     RESET
  ========================================== */

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

  return (
    <main className="page-shell">

      {/* ===================================== */}
      {/* LANGUAGE */}
      {/* ===================================== */}

      <div className="language-bar">

        <div className="language-scroll">

          {languages.map((item) => (
            <button
              key={item.code}
              className={`language-btn ${
                language === item.code
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setLanguage(item.code);
                setSelectedWish(0);
              }}
            >
              <span>
                {item.emoji}
              </span>

              <span>
                {item.name}
              </span>
            </button>
          ))}

        </div>

      </div>


      {/* ===================================== */}
      {/* HERO */}
      {/* ===================================== */}

      <section className="hero-section">

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-content">

          <div className="brand-icon">
            🐘
          </div>

          <div className="brand-name">
            WISH<span>LOOP</span>
          </div>

          <div className="tagline">
            Create. Share. Celebrate.
          </div>

          <div className="festival-badge">
            ✨ Ganesh Chaturthi 2026 ✨
          </div>

          <h1>
            Create a wish.
            <br />
            <span>
              Make someone smile.
            </span>
          </h1>

          <p className="hero-description">
            Create a beautiful Ganesh Chaturthi
            greeting and share it with someone
            special.
          </p>

        </div>

      </section>


      {/* ===================================== */}
      {/* CREATE */}
      {/* ===================================== */}

      <section className="create-section">

        <div className="create-card">

          <div className="section-heading">

            <div className="heading-icon">
              ✨
            </div>

            <div>
              <h2>
                Create Your Wish
              </h2>

              <p>
                Personalize your festival greeting
              </p>
            </div>

          </div>


          <div className="input-group">

            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              maxLength={40}
            />

          </div>


          <div className="input-group">

            <label>
              Send To
            </label>

            <input
              type="text"
              placeholder="Enter recipient's name"
              value={receiver}
              onChange={(e) =>
                setReceiver(e.target.value)
              }
              maxLength={40}
            />

          </div>


          <div className="input-group">

            <label>
              Choose Your Wish
            </label>

            <div className="wish-options">

              {currentWishes.map(
                (wish, index) => (

                  <button
                    key={index}
                    className={`wish-option ${
                      selectedWish === index
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedWish(index)
                    }
                  >

                    <span className="wish-number">
                      {index + 1}
                    </span>

                    <span className="wish-text">
                      {wish}
                    </span>

                    {selectedWish === index && (
                      <span className="wish-check">
                        ✓
                      </span>
                    )}

                  </button>

                )
              )}

            </div>

          </div>


          <button
            className="primary-btn"
            onClick={createWish}
          >
            <span>✨</span>
            Create My Wish
            <span>→</span>
          </button>

        </div>

      </section>


      {/* ===================================== */}
      {/* RESULT */}
      {/* ===================================== */}

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
              GANESH CHATURTHI
            </div>

            <h2>
              शुभकामनाएं
            </h2>

            <div className="recipient-line">
              Dear{" "}
              <strong>
                {receiver}
              </strong>
            </div>

            <div className="wish-message">
              {currentWishes[selectedWish]}
            </div>

            <div className="card-divider">
              ✦
            </div>

            <div className="from-text">
              With love,
            </div>

            <div className="sender-name">
              {name}
            </div>

            <div className="card-footer">
              <span>🐘</span>
              <strong>WISHLOOP</strong>
              <span>✨</span>
            </div>

            <div className="card-decoration decoration-bottom">
              🌺 ✨ 🌺
            </div>

          </div>


          {/* ================================= */}
          {/* ACTION BUTTONS */}
          {/* ================================= */}

          <div className="result-actions">

            <button
              className="whatsapp-btn"
              onClick={shareWhatsApp}
            >
              <span>💚</span>
              Share on WhatsApp
            </button>


            <button
              className="instagram-btn"
              onClick={shareInstagram}
            >
              <span>📸</span>
              Share on Instagram
            </button>


            <button
              className="copy-btn"
              onClick={copyLink}
            >
              <span>
                {copied
                  ? "✓"
                  : "🔗"}
              </span>

              {copied
                ? "Link Copied!"
                : "Copy Wish Link"}
            </button>


            <button
              className="reset-btn"
              onClick={reset}
            >
              Create Another Wish
            </button>

          </div>

        </section>

      )}


      {/* ===================================== */}
      {/* HIDDEN SHARE CARD */}
      {/* ===================================== */}

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

            boxSizing: "border-box",

            border:
              "5px solid #fff176",

            borderRadius: "46px",

            padding: "55px",

            position: "relative",

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

              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

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
              fontSize: "22px",
              fontWeight: "900",
              letterSpacing: "6px",
              color: "#fffde7",
            }}
          >
            GANESH CHATURTHI
          </div>


          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
              fontSize: "58px",
              lineHeight: "1.15",
              fontWeight: "900",
              color: "#ffffff",
              textShadow:
                "0 5px 18px rgba(120,0,0,0.45)",
            }}
          >
            शुभकामनाएं
          </div>


          <div
            style={{
              textAlign: "center",
              marginTop: "35px",
              fontSize: "24px",
              color: "#fffde7",
            }}
          >
            Dear
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
            {currentWishes[selectedWish]}
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
            With love,
          </div>


          <div
            style={{
              textAlign: "center",
              marginTop: "8px",
              fontSize: "43px",
              fontWeight: "900",
              color: "#ffffff",
              wordBreak: "break-word",
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
            🐘 WISHLOOP ✨
          </div>


          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontSize: "20px",
              color: "#fffde7",
            }}
          >
            Create. Share. Celebrate.
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


      {/* ===================================== */}
      {/* FOOTER */}
      {/* ===================================== */}

      <footer className="site-footer">

        <div className="footer-logo">
          🐘 WISHLOOP
        </div>

        <p>
          Create. Share. Celebrate.
        </p>

        <div className="footer-copy">
          © 2026 WishLoop
        </div>

      </footer>

    </main>
  );
}