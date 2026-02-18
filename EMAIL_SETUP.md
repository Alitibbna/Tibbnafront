# 📧 Email Setup Guide for Tibbna Contact Form

Your contact form is now configured to send emails to **aliazeez@tibna.com**!

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Resend API Key

1. **Go to Resend**: https://resend.com
2. **Sign up** for a free account (no credit card required)
3. **Verify your email**
4. **Go to API Keys**: https://resend.com/api-keys
5. **Click "Create API Key"**
6. **Copy the API key** (starts with `re_`)

### Step 2: Add API Key to Vercel

1. **Go to your Vercel project**: https://vercel.com/dashboard
2. **Select your project**: `tibbnafront`
3. **Go to Settings** → **Environment Variables**
4. **Add new variable**:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Paste your Resend API key
   - **Environment**: Select all (Production, Preview, Development)
5. **Click "Save"**

### Step 3: Redeploy

1. **Go to Deployments** tab
2. **Click "Redeploy"** on the latest deployment
3. **Wait 2-3 minutes** for deployment to complete

### Step 4: Test

1. **Visit your website**: https://tibbnafront.vercel.app
2. **Scroll to Contact section**
3. **Fill out the form** and submit
4. **Check email**: aliazeez@tibna.com should receive the message!

---

## 🔧 Local Development Setup

If you want to test locally:

1. **Create `.env.local` file** in project root:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

2. **Run development server**:
```bash
npm run dev
```

3. **Test the form** at http://localhost:3000

---

## ✨ Features Included

✅ **Email sent to**: aliazeez@tibna.com  
✅ **Form validation**: Required fields checked  
✅ **Loading state**: Button shows "Sending..." during submission  
✅ **Success message**: Green confirmation when email sent  
✅ **Error handling**: Red error message if something fails  
✅ **Form reset**: Clears after successful submission  
✅ **Professional email**: Formatted HTML email with all details  

---

## 📧 Email Format

Recipients will receive:
- **Subject**: "New Contact Form Submission from [First] [Last]"
- **Content**:
  - Customer's full name
  - Customer's email address
  - Their message
  - Timestamp and source info

---

## 🎯 Custom Domain Email (Optional)

Once you have your custom domain set up:

1. **Add domain to Resend**: https://resend.com/domains
2. **Add DNS records** provided by Resend
3. **Update API route** (`app/api/contact/route.ts`):
   ```typescript
   from: 'Tibbna Contact <noreply@yourdomain.com>',
   ```

This makes emails come from your own domain instead of `onboarding@resend.dev`

---

## 🔒 Security

✅ **API key is secure**: Stored in environment variables, never exposed to client  
✅ **Server-side only**: Email sending happens on server, not in browser  
✅ **Rate limiting**: Resend has built-in rate limiting  
✅ **Spam protection**: Form validation prevents empty submissions  

---

## 📊 Resend Free Tier

- **100 emails/day** for free
- **3,000 emails/month** for free
- Perfect for contact forms
- No credit card required

---

## ❓ Troubleshooting

**Email not received?**
- Check spam/junk folder
- Verify API key is correct in Vercel
- Check Resend dashboard for delivery logs

**Form shows error?**
- Check Vercel deployment logs
- Verify environment variable is set
- Make sure you redeployed after adding API key

**Need help?**
- Resend docs: https://resend.com/docs
- Vercel docs: https://vercel.com/docs

---

## 🎉 You're All Set!

Your contact form is now fully functional and will send emails to **aliazeez@tibna.com** whenever someone submits the form on your website!
