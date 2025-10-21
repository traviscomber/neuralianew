# 📧 Email Service Setup Guide

Complete guide for configuring N3uralia's email delivery system using Resend.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Get Resend API Key](#step-1-get-your-resend-api-key)
3. [Configure Environment Variables](#step-2-add-environment-variables)
4. [Add DNS Records](#step-3-configure-dns-records)
5. [Verify Configuration](#step-4-verify-dns-configuration)
6. [Test Email Delivery](#step-5-test-email-delivery)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

- A Resend account (sign up at https://resend.com)
- Access to your domain's DNS settings (Vercel, Cloudflare, etc.)
- Domain verified in Resend dashboard
- Basic understanding of DNS records

## Step 1: Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Name it: `N3uralia Production`
4. Select **Full Access** permissions
5. Copy the API key (starts with `re_`)
6. **Save it securely** - you won't see it again!

## Step 2: Add Environment Variables

### On Vercel

1. Go to your project → **Settings** → **Environment Variables**
2. Add these three variables:

\`\`\`env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=no-reply@send.n3uralia.com
RESEND_FROM_NAME=N3uralia AI
\`\`\`

3. Click **Save**
4. Redeploy your application

### Locally (.env.local)

\`\`\`env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=no-reply@send.n3uralia.com
RESEND_FROM_NAME=N3uralia AI
\`\`\`

## Step 3: Configure DNS Records

You need to add **4 DNS records** to your domain. Here are the exact values:

### Record 1: MX (Mail Exchange)

Routes incoming email through Amazon SES.

\`\`\`
Type:     MX
Host:     send
Value:    feedback-smtp.ap-northeast-1.amazonses.com
Priority: 10
TTL:      60 (or Auto)
\`\`\`

### Record 2: SPF (Sender Policy Framework)

Prevents email spoofing.

\`\`\`
Type:  TXT
Host:  send
Value: v=spf1 include:amazonses.com ~all
TTL:   60 (or Auto)
\`\`\`

### Record 3: DKIM (DomainKeys Identified Mail)

Cryptographic signature for authentication.

\`\`\`
Type:  TXT
Host:  resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBWynraG8S2dJ8I0m1y/8aDQkIZLftdjBrt4LxC5upNn/nmMIL069Yb1puGrZtVuBoft5JthXpF7AhqBZcl6A8s/UpWKtDcfsWple1U7Z/723e9xMWo0pjxOHQ9HaLWhDAIukzkizlLYyNX3SkyJ4Ok76hqf9SRsbZsel4nkx7OwIDAQAB
TTL:   Auto (or 3600)
\`\`\`

### Record 4: DMARC (Recommended)

Email authentication policy.

\`\`\`
Type:  TXT
Host:  _dmarc
Value: v=DMARC1; p=none;
TTL:   Auto (or 3600)
\`\`\`

### Provider-Specific Instructions

#### For Vercel DNS

1. Go to your project → **Domains**
2. Click on **n3uralia.com**
3. Scroll to **DNS Records**
4. Click **Add Record** for each entry above
5. Copy the values exactly as shown

#### For Cloudflare

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **n3uralia.com**
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Set **Proxy status** to **DNS only** (gray cloud) for email records

#### For GoDaddy

1. Log in to [GoDaddy](https://www.godaddy.com)
2. Go to **My Products** → **DNS**
3. Click **Add** for each record type
4. Enter values as specified above

#### For Namecheap

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Domain List** → **Manage**
3. Select **Advanced DNS**
4. Click **Add New Record**
5. Add each record with the values above

## Step 4: Verify DNS Configuration

### Method 1: Command Line (Linux/Mac)

\`\`\`bash
# Check MX record
dig MX send.n3uralia.com +short

# Check SPF record
dig TXT send.n3uralia.com +short

# Check DKIM record
dig TXT resend._domainkey.n3uralia.com +short

# Check DMARC record
dig TXT _dmarc.n3uralia.com +short
\`\`\`

### Method 2: Online Tools

- [MXToolbox](https://mxtoolbox.com/SuperTool.aspx) - Enter `send.n3uralia.com`
- [DNSChecker](https://dnschecker.org/) - Check global propagation
- [Resend Dashboard](https://resend.com/domains) - Built-in verification

### Method 3: N3uralia Dashboard

1. Visit `https://n3uralia.com/email-verification`
2. Check the **DNS Records Status** section
3. All three indicators should be **green**:
   - ✅ SPF Record: Configured
   - ✅ DKIM Record: Configured
   - ✅ MX Record: Configured

## Step 5: Test Email Delivery

1. Go to `/email-verification` on your site
2. Enter your email address
3. Test all 4 email types:
   - **Welcome Email** - New user onboarding
   - **Password Reset** - Account recovery
   - **Contact Notification** - Customer inquiries
   - **Deployment Alert** - Agent status updates
4. Check your inbox (and spam folder)
5. Verify all emails are delivered successfully

## Email Templates Available

### 1. Welcome Email (`sendWelcomeEmail`)

**When:** User signs up or creates account  
**To:** User's email  
**Subject:** ¡Bienvenido a N3uralia! 🚀  
**Content:** Personalized greeting, quick start guide, next steps

**Usage:**
\`\`\`typescript
await EmailService.sendWelcomeEmail("user@example.com", "Juan Pérez")
\`\`\`

### 2. Password Reset (`sendPasswordResetEmail`)

**When:** User requests password reset  
**To:** User's email  
**Subject:** Restablecer tu contraseña - N3uralia  
**Content:** Secure reset link (expires in 1 hour), security notice

**Usage:**
\`\`\`typescript
await EmailService.sendPasswordResetEmail(
  "user@example.com",
  "https://n3uralia.com/reset-password?token=abc123"
)
\`\`\`

### 3. Contact Notification (`sendContactNotification`)

**When:** Someone submits contact form  
**To:** contact@n3uralia.com  
**Subject:** Nuevo mensaje de contacto de [Name]  
**Content:** Sender info, message, reply-to functionality

**Usage:**
\`\`\`typescript
await EmailService.sendContactNotification({
  name: "Juan Pérez",
  email: "juan@example.com",
  message: "Me gustaría saber más sobre N3uralia",
  company: "Acme Corp"
})
\`\`\`

### 4. Agent Deployment (`sendAgentDeploymentNotification`)

**When:** AI agent is deployed or fails  
**To:** User's email  
**Subject:** ✅/❌ Despliegue de agente: [Agent Name]  
**Content:** Status, agent details, dashboard link

**Usage:**
\`\`\`typescript
await EmailService.sendAgentDeploymentNotification(
  "user@example.com",
  "Customer Support Agent",
  "success" // or "failed"
)
\`\`\`

## Troubleshooting

### Emails Not Being Received

#### 1. Check DNS Records

\`\`\`bash
# All these should return non-empty results
dig MX send.n3uralia.com
dig TXT send.n3uralia.com
dig TXT resend._domainkey.n3uralia.com
\`\`\`

#### 2. Verify API Key

- Make sure `RESEND_API_KEY` is set in Vercel
- Check it doesn't have extra spaces
- Verify it starts with `re_`
- Test in Resend dashboard that the key is active

#### 3. Check Spam Folder

- New domains often go to spam initially
- Mark as "Not Spam" to improve sender reputation
- Ask recipients to add `no-reply@send.n3uralia.com` to contacts

#### 4. Domain Verification

- Log in to Resend dashboard
- Go to **Domains** section
- Verify `send.n3uralia.com` shows as **Verified**
- Check verification status of all DNS records

### DNS Not Propagating

**Problem:** DNS records added but not showing up

**Solutions:**

1. **Wait 24-48 hours** - DNS propagation takes time
2. **Clear DNS cache:**
   \`\`\`bash
   # Mac
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   
   # Linux
   sudo systemd-resolve --flush-caches
   
   # Windows
   ipconfig /flushdns
   \`\`\`
3. **Check different DNS servers:**
   - Use `8.8.8.8` (Google)
   - Use `1.1.1.1` (Cloudflare)
4. **Use online tools:**
   - https://dnschecker.org
   - https://www.whatsmydns.net

### API Errors

#### 429 - Rate Limit Exceeded

**Cause:** Exceeded free tier limits (100 emails/day)  
**Solution:** Upgrade to paid Resend plan

#### 401 - Unauthorized

**Cause:** Invalid or missing API key  
**Solutions:**
- Check `RESEND_API_KEY` in environment variables
- Verify key is active in Resend dashboard
- Regenerate key if necessary
- Redeploy application after adding key

#### 403 - Forbidden

**Cause:** Domain not verified or DNS not configured  
**Solutions:**
- Complete DNS setup (all 4 records)
- Wait for DNS propagation
- Verify domain in Resend dashboard
- Check from address matches: `no-reply@send.n3uralia.com`

### Common Mistakes

❌ **Wrong subdomain:** Using `@` instead of `send` for MX/SPF  
✅ **Correct:** `send.n3uralia.com`

❌ **Missing Priority:** MX record without priority value  
✅ **Correct:** Priority = 10

❌ **Truncated DKIM:** Copying partial DKIM key  
✅ **Correct:** Copy entire key (starts with `p=MIG...`)

❌ **Multiple SPF records:** Having 2+ SPF records  
✅ **Correct:** Only ONE SPF record per (sub)domain

❌ **Wrong from address:** Using unauthorized email  
✅ **Correct:** `no-reply@send.n3uralia.com`

## Security Best Practices

### API Key Management

- ✅ Store in environment variables only
- ✅ Never commit to git
- ✅ Use different keys for dev/prod
- ✅ Rotate keys periodically
- ✅ Limit key permissions when possible

### Email Security

- ✅ Always use DKIM signing
- ✅ Implement SPF alignment
- ✅ Set up DMARC policy
- ✅ Monitor bounce rates
- ✅ Use HTTPS for reset links

### DMARC Configuration

Start with `p=none` to monitor, then upgrade:

\`\`\`
v=DMARC1; p=quarantine; rua=mailto:dmarc@n3uralia.com
v=DMARC1; p=reject; rua=mailto:dmarc@n3uralia.com
\`\`\`

## Production Checklist

Before going live, verify:

- [ ] All 4 DNS records configured correctly
- [ ] `RESEND_API_KEY` set in Vercel
- [ ] Domain verified in Resend dashboard
- [ ] Test emails sent successfully
- [ ] All 4 email types tested
- [ ] DNS propagation complete (48h+)
- [ ] Email deliverability tested
- [ ] Spam score checked (< 5)
- [ ] From address authorized
- [ ] Reply-to configured
- [ ] Email templates reviewed
- [ ] Unsubscribe link added (if needed)

## Monitoring & Analytics

### In Resend Dashboard

- **Delivery Rate:** % of successfully delivered emails
- **Bounce Rate:** % of emails that bounced (keep < 5%)
- **Complaint Rate:** % marked as spam (keep < 0.1%)
- **Open Rate:** % of emails opened (if tracking enabled)

### In N3uralia

- Visit `/email-verification` for real-time status
- Monitor API errors in application logs
- Track email events with webhooks (optional)

## Next Steps

After successful setup:

1. ✅ **Test thoroughly** - Send emails to multiple providers
2. ✅ **Monitor metrics** - Check Resend dashboard daily
3. ✅ **Set up webhooks** - Handle bounces and complaints
4. ✅ **Configure alerts** - Get notified of delivery issues
5. ✅ **Add more templates** - Create custom email designs
6. ✅ **Implement tracking** - Add open/click analytics
7. ✅ **Set up automation** - Trigger emails based on events

## Support Resources

- **Resend Documentation:** https://resend.com/docs
- **Resend Support:** support@resend.com
- **N3uralia Support:** contact@n3uralia.com
- **DNS Help:** See provider documentation
- **Email Testing:** https://www.mail-tester.com

## FAQ

**Q: How long does DNS propagation take?**  
A: Usually 1-4 hours, but can take up to 48 hours globally.

**Q: Can I use a different subdomain?**  
A: Yes, but update all DNS records and `RESEND_FROM_EMAIL` accordingly.

**Q: What's the free tier limit?**  
A: 100 emails/day on Resend free tier. Upgrade for more.

**Q: Do I need all 4 records?**  
A: MX, SPF, and DKIM are required. DMARC is highly recommended.

**Q: Can I send from my main domain?**  
A: Yes, but using a subdomain (`send.n3uralia.com`) is recommended for better reputation management.

**Q: How do I handle bounces?**  
A: Set up webhooks in Resend to receive bounce notifications and update your database.

---

**Last Updated:** October 21, 2025  
**Version:** 1.0  
**Status:** Production Ready ✅
