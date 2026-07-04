# راهنمای تنظیم سایت

## چیزهایی که باید عوض کنی

### 1. آدرس USDT
فایل: `guides/i2s-quickstart/index.html`
خط: `<div class="wallet-address" id="walletAddr">YOUR_USDT_TRC20_ADDRESS_HERE</div>`
← آدرس TRC20 واقعی خودت رو بذار

### 2. ایمیل
فایل: `guides/i2s-quickstart/index.html`
خط: `<a href="mailto:YOUR_EMAIL_HERE">`
← ایمیل واقعی خودت رو بذار

فایل: `about.html`
خط: `<a href="mailto:YOUR_EMAIL_HERE" class="contact-link">`
← همون ایمیل

### 3. LinkedIn
فایل: `about.html`
خط: `<a href="https://linkedin.com/in/YOUR_LINKEDIN"`
← آدرس LinkedIn واقعی خودت

---

## اضافه کردن guide جدید

1. یه folder جدید بساز: `guides/NEW-GUIDE-NAME/`
2. فایل `index.html` از `guides/i2s-quickstart/` رو کپی کن
3. محتوا رو عوض کن
4. توی `index.html` اصلی (صفحه اول)، یه کارت جدید به `guides-grid` اضافه کن

---

## آپلود روی GitHub

```bash
git add .
git commit -m "initial site"
git push origin main
```

سایت روی: https://embedlabdev.github.io
