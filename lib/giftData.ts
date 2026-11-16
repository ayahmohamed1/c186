// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "malak",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy birthday to my man, my son, my everything.

From the bottom of my heart, I wish that you and I will always be there for each other, forever and always, just being us.

I found myself in you. I found peace in you. It feels like everything is okay whenever you're around. I want you to know that you are my priority, you and only you.

The more we are there for each other, the more beautiful memories we create. Having you by my side is truly one of the most beautiful things in my life.

No one has ever been loved by me the way you are. I'm grateful for every moment we've spent together and for all these years you've been my soulmate, my love, my father, my home, my best friend, and the person I can share all my secrets with without any fear.

Thank you, Habibi, for being loyal to me. Thank you for making me feel loved. Thank you for always believing in me and saying, "You can do it."

I can't imagine my life without you because you are the meaning of life to me, Habibi.

My love for you will never end. I love you forever my moody. ❣️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;