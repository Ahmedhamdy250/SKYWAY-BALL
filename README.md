# SKYWAY BALL

لعبة كرة ثلاثية الأبعاد في المتصفح: وجّه الكرة على مسار وردي متعرّج معلّق فوق جزر استوائية، اجمع النجوم الذهبية وتفادَ المكعبات. المسار لا ينتهي ويُولَّد عشوائيًا، والسرعة تزداد كلما تقدّمت.

## التشغيل
افتح `index.html` في المتصفح مباشرة، أو شغّل خادمًا محليًا:

```bash
python3 -m http.server 8000
```

ثم افتح http://localhost:8000

## التحكم
- السحب بالإصبع أو الفأرة يمينًا ويسارًا
- الأسهم ← → أو A / D
- Esc أو P للإيقاف المؤقت، Space أو Enter للبدء

## عناصر اللعب
| العنصر | الوصف |
|---|---|
| نجمة ذهبية | +10 نقاط |
| مكعب ثابت أو متحرك | الاصطدام ينهي الجولة |
| أسهم خضراء | تسارع مؤقت |
| حافة بلا جدار | الخروج منها يعني السقوط في البحر |

## التقنية
- HTML و JavaScript في ملف واحد
- [Three.js r128](https://threejs.org/) من CDN
- كل الرسوم (المسار، الكرة، العملات، الجزر) تُرسم برمجيًا بلا ملفات صور

## النشر على GitHub Pages
من إعدادات المستودع: Settings → Pages → Source: `main` / root.

## تطبيق أندرويد (Codemagic)
اللعبة مغلّفة كتطبيق أندرويد باستخدام [Capacitor](https://capacitorjs.com/)، وتُبنى تلقائيًا على Codemagic عبر الملف `codemagic.yaml`.

1. سجّل الدخول إلى https://codemagic.io بحساب GitHub وأضف هذا المستودع.
2. اختر الإعداد من `codemagic.yaml` ثم شغّل الـ workflow المسمى **SKYWAY BALL - Android APK**.
3. بعد انتهاء البناء، حمّل الملف `SKYWAY-BALL.apk` من قسم Artifacts وثبّته على هاتفك.

### البناء محليًا
```bash
npm install
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
```

- `index.html` هو مصدر اللعبة، و`npm run build` ينسخه إلى `www/` مع نسخة محلية من Three.js ليعمل التطبيق بدون إنترنت.
- أيقونة التطبيق وشاشة البداية في `assets/`، ولإعادة توليدها: `npx @capacitor/assets generate --android`
