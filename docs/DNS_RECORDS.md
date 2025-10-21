# 📧 DNS Records Configuration

Complete list of DNS records required for N3uralia email service.

## Required Records

### 1. MX Record (Mail Exchange)

Routes incoming email through Amazon SES (Resend's infrastructure).

| Field    | Value                                         |
| -------- | --------------------------------------------- |
| Type     | `MX`                                          |
| Host     | `send`                                        |
| Value    | `feedback-smtp.ap-northeast-1.amazonses.com`  |
| Priority | `10`                                          |
| TTL      | `60` (or Auto)                                |

**Full hostname:** `send.n3uralia.com`

### 2. SPF Record (Sender Policy Framework)

Prevents email spoofing by authorizing Amazon SES to send emails.

| Field | Value                              |
| ----- | ---------------------------------- |
| Type  | `TXT`                              |
| Host  | `send`                             |
| Value | `v=spf1 include:amazonses.com ~all` |
| TTL   | `60` (or Auto)                     |

**Full hostname:** `send.n3uralia.com`

### 3. DKIM Record (DomainKeys Identified Mail)

Cryptographic signature to verify email authenticity.

| Field | Value                                                                                                                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type  | `TXT`                                                                                                                                                                                     |
| Host  | `resend._domainkey`                                                                                                                                                                       |
| Value | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBWynraG8S2dJ8I0m1y/8aDQkIZLftdjBrt4LxC5upNn/nmMIL069Yb1puGrZtVuBoft5JthXpF7AhqBZcl6A8s/UpWKtDcfsWple1U7Z/723e9xMWo0pjxOHQ9HaLWhDAIukzkizlLYyNX3SkyJ4Ok76hqf9SRsbZsel4nkx7OwIDAQAB` |
| TTL   | `Auto` (or 3600)                                                                                                                                                                          |

**Full hostname:** `resend._domainkey.n3uralia.com`

### 4. DMARC Record (Recommended)

Email authentication, policy, and reporting protocol.

| Field | Value                   |
| ----- | ----------------------- |
| Type  | `TXT`                   |
| Host  | `_dmarc`                |
| Value | `v=DMARC1; p=none;`     |
| TTL   | `Auto` (or 3600)        |

**Full hostname:** `_dmarc.n3uralia.com`

## Quick Copy-Paste Values

### For Vercel DNS

\`\`\`
Name: send
Type: MX
Value: feedback-smtp.ap-northeast-1.amazonses.com
Priority: 10
TTL: 60
\`\`\`

\`\`\`
Name: send
Type: TXT
Value: v=spf1 include:amazonses.com ~all
TTL: 60
\`\`\`

\`\`\`
Name: resend._domainkey
Type: TXT
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBWynraG8S2dJ8I0m1y/8aDQkIZLftdjBrt4LxC5upNn/nmMIL069Yb1puGrZtVuBoft5JthXpF7AhqBZcl6A8s/UpWKtDcfsWple1U7Z/723e9xMWo0pjxOHQ9HaLWhDAIukzkizlLYyNX3SkyJ4Ok76hqf9SRsbZsel4nkx7OwIDAQAB
TTL: Auto
\`\`\`

\`\`\`
Name: _dmarc
Type: TXT
Value: v=DMARC1; p=none;
TTL: Auto
\`\`\`

## Verification Commands

### Linux/Mac Terminal

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

### Expected Results

**MX Record:**
\`\`\`
10 feedback-smtp.ap-northeast-1.amazonses.com.
\`\`\`

**SPF Record:**
\`\`\`
"v=spf1 include:amazonses.com ~all"
\`\`\`

**DKIM Record:**
\`\`\`
"p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBWynraG8S2dJ8I0m1y/8aDQkIZLftdjBrt4LxC5upNn/nmMIL069Yb1puGrZtVuBoft5JthXpF7AhqBZcl6A8s/UpWKtDcfsWple1U7Z/723e9xMWo0pjxOHQ9HaLWhDAIukzkizlLYyNX3SkyJ4Ok76hqf9SRsbZsel4nkx7OwIDAQAB"
\`\`\`

**DMARC Record:**
\`\`\`
"v=DMARC1; p=none;"
\`\`\`

## Troubleshooting

### Records Not Found

1. Wait 24-48 hours for DNS propagation
2. Clear local DNS cache:
   \`\`\`bash
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   
   # Windows
   ipconfig /flushdns
   \`\`\`
3. Use different DNS servers (8.8.8.8, 1.1.1.1)
4. Check with online tools: dnschecker.org

### SPF Record Issues

- **Multiple SPF records:** Only one SPF record per domain. Merge if multiple exist.
- **Too many lookups:** SPF has a 10 DNS lookup limit.
- **Syntax error:** Must start with `v=spf1`

### DKIM Record Issues

- **Key too long:** Some DNS providers split long TXT records. Ensure no quotes or spaces are added.
- **Wrong subdomain:** Must be exactly `resend._domainkey`
- **Truncated value:** Copy the complete DKIM key without modifications

### Email Still Not Working

1. Verify domain in Resend dashboard
2. Check RESEND_API_KEY is set correctly
3. Test with `/email-verification` page
4. Check Resend logs for errors
5. Ensure from address matches: `no-reply@send.n3uralia.com`

## Status Dashboard

Visit `/email-verification` on your site to check:
- ✅ DNS records status
- ✅ API configuration
- ✅ Send test emails
- ✅ Real-time diagnostics

## Support Resources

- **Resend Documentation:** https://resend.com/docs
- **DNS Checker:** https://dnschecker.org
- **MX Toolbox:** https://mxtoolbox.com
- **N3uralia Support:** contact@n3uralia.com

---

**Last Updated:** October 21, 2025  
**Domain:** n3uralia.com  
**Email Service:** Resend (Amazon SES)
