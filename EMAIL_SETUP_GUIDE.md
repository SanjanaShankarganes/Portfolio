# 📧 Email Setup Guide - Contact Form

Your contact form is now configured to send emails directly to **sanjanasankarganesh@gmail.com**!

Follow these simple steps to activate it:

---

## 🚀 **Quick Setup (5 minutes)**

### **Step 1: Create Free EmailJS Account**

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up"** (it's 100% FREE)
3. Sign up with Google or Email
4. Verify your email

---

### **Step 2: Add Email Service**

1. In EmailJS Dashboard, click **"Add New Service"**
2. Choose **"Gmail"** (recommended)
3. Click **"Connect Account"**
4. Sign in with your Google account: **sanjanasankarganesh@gmail.com**
5. Allow EmailJS to send emails
6. **Copy the Service ID** (looks like: `service_xxxxxxx`)

---

### **Step 3: Create Email Template**

1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `portfolio_contact`

**Subject:**
```
New Message from Portfolio: {{from_name}}
```

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

---

### **Step 4: Get Your Public Key**

1. Click **"Account"** in the sidebar
2. Go to **"General"** tab
3. Find **"Public Key"** section
4. **Copy the Public Key** (looks like: `xxxxxxxxxxxxxxx`)

---

### **Step 5: Update Your Portfolio Code**

Open: `src/components/Contact.tsx`

Find these lines (around line 22-24):

```typescript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

Replace with your actual IDs:

```typescript
const serviceId = 'service_xxxxxxx'     // Your Service ID
const templateId = 'template_xxxxxxx'   // Your Template ID
const publicKey = 'your_public_key'     // Your Public Key
```

**Save the file!**

---

## ✅ **Test Your Contact Form**

1. Refresh your portfolio: http://localhost:5174
2. Scroll to Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check **sanjanasankarganesh@gmail.com** inbox!

---

## 🎯 **What Happens When Someone Contacts You:**

1. ✅ User fills out contact form on your portfolio
2. ✅ EmailJS sends the message to your Gmail
3. ✅ You receive email with:
   - Their name
   - Their email address
   - Their message
4. ✅ You can reply directly from Gmail!

---

## 💡 **EmailJS Free Plan:**

- ✅ **200 emails/month** (FREE)
- ✅ No credit card required
- ✅ Perfect for portfolio contact forms
- ✅ Reliable delivery

---

## 🔧 **Alternative: Use Web3Forms (Even Easier!)**

If you want something even simpler:

1. Go to: **https://web3forms.com/**
2. Enter your email: **sanjanasankarganesh@gmail.com**
3. Get your **Access Key**
4. I can update the code to use Web3Forms instead!

---

## 📝 **Example Configuration**

After setup, your `Contact.tsx` should look like:

```typescript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'abc123xyz789'
```

---

## 🐛 **Troubleshooting**

**Problem:** "Failed to send message"
- ✅ Check if all IDs are correct
- ✅ Make sure you verified your EmailJS email
- ✅ Check EmailJS dashboard for errors

**Problem:** Not receiving emails
- ✅ Check Gmail spam folder
- ✅ Verify template is set up correctly
- ✅ Test from EmailJS dashboard first

**Problem:** Button says "Sending..." forever
- ✅ Check browser console (F12) for errors
- ✅ Verify internet connection
- ✅ Make sure EmailJS service is active

---

## 🎉 **Once Configured:**

Your contact form will:
- ✅ Send emails instantly
- ✅ Show loading state while sending
- ✅ Display success message
- ✅ Clear form after sending
- ✅ Show error if something fails

---

## 📧 **Need Help?**

If you get stuck:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Or let me know and I can help troubleshoot!

---

**This setup will make your portfolio fully functional for receiving messages from recruiters and clients!** 🚀

Good luck!


