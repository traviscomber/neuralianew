# PHASE 1 IMPLEMENTATION GUIDE

**Status:** ✅ DEVELOPMENT COMPLETE | Ready for Testing & Deployment
**Timeline:** 3-4 days of development (complete)
**Effort:** ~60h (split: Motil 20h, Property Partners 20h, Transport Certs 20h)

---

## WHAT WAS BUILT

### 3 Project Configurations + 3 Endpoints

| Project | Config | Endpoint | Status |
|---------|--------|----------|--------|
| **Motil** | `TRAVIS_CONFIG_MOTIL` | `/api/motil-bot/webhook` | ✅ Ready |
| **Property Partners** | `TRAVIS_CONFIG_PROPERTY_PARTNERS` | `/api/property-partners-bot/webhook` | ✅ Ready |
| **Transport Certs** | `TRAVIS_CONFIG_TRANSPORT_CERTS` | `/api/transport-certs-bot/webhook` | ✅ Ready |

### Shared Library (Reused Across All 3)
- `lib/travis/handler.ts` - Core webhook logic
- `lib/travis/types.ts` - TypeScript interfaces
- `lib/travis/tech-knowledge.ts` - Technical foundation
- `lib/travis/configs.ts` - All 4 configs (N3uralia + 3 new)

---

## QUICK START (NEXT 2-3 DAYS)

### Step 1: Setup Environment Variables

Create or update `.env.production` with:

```bash
# Shared across all projects
OPENAI_API_KEY=sk-proj-YOUR_KEY_HERE

# Motil
GREEN_API_TOKEN_MOTIL=YOUR_MOTIL_GREEN_API_TOKEN
GREEN_API_INSTANCE_MOTIL=YOUR_MOTIL_INSTANCE_ID
WHATSAPP_NOTIFY_PHONE_MOTIL=56XXXXXXXXX  # Motil sales team phone

# Property Partners
GREEN_API_TOKEN_PROPERTY=YOUR_PROPERTY_GREEN_API_TOKEN
GREEN_API_INSTANCE_PROPERTY=YOUR_PROPERTY_INSTANCE_ID
WHATSAPP_NOTIFY_PHONE_PROPERTY=56XXXXXXXXX  # Property Partners team

# Transport Certificates
GREEN_API_TOKEN_TRANSPORT=YOUR_TRANSPORT_GREEN_API_TOKEN
GREEN_API_INSTANCE_TRANSPORT=YOUR_TRANSPORT_INSTANCE_ID
WHATSAPP_NOTIFY_PHONE_TRANSPORT=56XXXXXXXXX  # Transport team
```

**Important:** Each project needs its own Green-API instance. If you don't have separate instances yet, you can reuse one for testing and split later.

### Step 2: Deploy to Production

```bash
# Push to main branch and deploy
git push origin v0/travis-2540-547d19ca
vercel deploy --prod --scope team_OZTpx87yFUvdvneuoNbJeYS1
```

### Step 3: Verify Endpoints

Once deployed, test each endpoint:

```bash
# Motil
curl https://yourapp.vercel.app/api/motil-bot/webhook

# Property Partners
curl https://yourapp.vercel.app/api/property-partners-bot/webhook

# Transport Certificates
curl https://yourapp.vercel.app/api/transport-certs-bot/webhook

# All should return: {"status":"ok","service":"whatsapp-bot"}
```

### Step 4: Configure Green-API Webhooks

For each project in Green-API dashboard:
1. Set webhook URL: `https://yourapp.vercel.app/api/[project]-bot/webhook`
2. Webhook events: `incomingMessageReceived`
3. Test: send WhatsApp message to your bot number
4. Verify handoff works to team phone

### Step 5: Test with Internal Leads (2-3 per project)

**Test script:**

```bash
# Test Motil (send a hotel question)
curl -X POST https://yourapp.vercel.app/api/motil-bot/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "typeWebhook":"incomingMessageReceived",
    "senderData":{"chatId":"56912345678@c.us","chatName":"TestHotel"},
    "messageData":{"typeMessage":"textMessage","textMessageData":{"textMessage":"Hola, tenemos 40 habitaciones y necesitamos mejor control de housekeeping"}}
  }'
```

Expected: Travis (Motil version) responds with: "Entiendo, el housekeeping es crítico. Háblame un poco más..."

### Step 6: Monitor & Measure

Track for each project (7 days):

```
Metrics to Log:
✓ Leads received (expected: 3-10/day per project)
✓ Conversations per lead (avg 4-6 messages)
✓ Handoff rate (% that reach handoff)
✓ Token cost per conversation (target: < USD 2)
✓ IP leaks (should be 0)
✓ Error rate (target: < 1%)
```

---

## WHAT EACH PROJECT TRAVIS DOES

### Motil Travis
- **Discovers:** Hotel type, pain point (admin time, errors, integrations)
- **Educates:** How Motil modules solve that (Core, Housekeeping, etc)
- **Recommends:** Specific modules by size (10-30 hab: Core+Analytics, 50+ hab: all)
- **Quotes:** USD 300-1,500/mo + setup + diagnostic
- **Escalates:** When interest is real, connects to Motil sales team

**Success signals:**
- ✅ Travis mentions specific hotel types (boutique, 5-star, hostal)
- ✅ Recommends Motil modules by name (Core, Housekeeping, Analytics)
- ✅ Asks 1 question per message (not multiple)
- ✅ Handoff to Motil team with full context

### Property Partners Travis
- **Discovers:** Real estate role (agent, developer, investor), problem (pricing, market info, lead generation)
- **Educates:** How Property Partners data/tools solve it (603+ properties, Valorizador, market intelligence)
- **Recommends:** Plan by segment (agents: Market Intelligence, developers: Valorizador full)
- **Quotes:** Pricing varies by access level + usage
- **Escalates:** When demo or API access requested

**Success signals:**
- ✅ References real data (603+ propiedades, 16 regiones)
- ✅ Mentions tools (Valorizador, Market Intelligence, APIs)
- ✅ Tailors to segment (agent vs developer vs investor)
- ✅ Handoff with request for demo/API access

### Transport Certificates Travis
- **Discovers:** Fleet size, pain point (document chaos, SII compliance, time)
- **Educates:** How Transport Certificates automates (OCR, SAC compliance, alerts)
- **Recommends:** Modules by size (1-10 trucks: Core, 50+ trucks: full with subcontractor mgmt)
- **Quotes:** USD 100-2,000+/mo by volume and modules
- **Escalates:** When compliance or integration questions arise, or high-volume interest

**Success signals:**
- ✅ Mentions truck count as qualifier
- ✅ References real problem (SII multas, documentos perdidos)
- ✅ Recommends modules (Core, SAC, Subcontratistas)
- ✅ Emphasizes compliance ROI (multas avoided = USD 5-50k)

---

## TROUBLESHOOTING

### Travis Not Responding?
1. Check env vars are set (`GREEN_API_TOKEN`, `GREEN_API_INSTANCE`, `OPENAI_API_KEY`)
2. Verify Green-API webhook is pointing to correct URL
3. Check logs: `vercel logs` or Sentry
4. Test: send message directly to your WhatsApp number

### Wrong Configuration Loading?
- Verify endpoint imports correct config (e.g., `TRAVIS_CONFIG_MOTIL`)
- Check `lib/travis/handler.ts` receives correct config via `travisWebhookHandler`

### Handoff Not Working?
- Verify `WHATSAPP_NOTIFY_PHONE_[PROJECT]` is set
- Ensure team phone is different from client phone (avoid loops)
- Check Green-API can send from your instance to team phone

### IP Leak Detected?
- Review conversation logs for any code/lib names (should be none)
- Travis should say: "tecnología enterprise" not "Supabase RLS"
- If found, remind Travis of IP protection rules

---

## NEXT STEPS (PHASE 2)

Once all 3 projects are live for 7 days with metrics:

1. **Analytics Dashboard** (Week 4)
   - Centralized metrics: leads, handoff rate, conversion
   - Per-project performance tracking

2. **Prompt Optimization** (Week 5)
   - A/B test variations (friendly vs formal tone)
   - Measure: handoff rate, quality, cost

3. **CRM Integration** (Weeks 6-7)
   - Pipedrive / HubSpot auto-sync from Travis conversations
   - Auto-create deals with context

4. **Multi-Channel** (Week 8)
   - SMS, Web chat, Telegram
   - 3x more lead volume

---

## SUCCESS CRITERIA (KPIs)

✅ **Immediate (Day 1-3)**
- All 3 endpoints deployed and responding
- All 3 projects passing type check
- 0 IP leaks in early tests
- Team can send test messages and receive Travis responses

✅ **Short-term (Week 1-2)**
- 3-10 leads/day per project minimum
- 80%+ handoff rate (complex products need humans)
- < USD 2 token cost per conversation
- 0 critical errors

✅ **After 7 days**
- Baseline metrics established per project
- Win rates starting to trend upward
- Ready for Phase 2 (analytics + optimization)

---

## FILES & REFERENCES

- **Configs:** `lib/travis/configs.ts` (all 4 projects)
- **Handler:** `lib/travis/handler.ts` (shared logic)
- **Tech Knowledge:** `lib/travis/tech-knowledge.ts` (reference material for Travis)
- **Endpoints:**
  - `/app/api/motil-bot/webhook/route.ts`
  - `/app/api/property-partners-bot/webhook/route.ts`
  - `/app/api/transport-certs-bot/webhook/route.ts`

---

## QUESTIONS?

If setup is blocked or needs clarification, check:
1. `lib/travis/README.md` - Technical details
2. `TRAVIS_REPLICATION_GUIDE.md` - How to clone Travis
3. `TRAVIS_TECH_KNOWLEDGE_SUMMARY.md` - What Travis knows
4. Memory: `v0_memories/user/TRAVIS_WHATSAPP_AGENT.md`

**Phase 1 is ready to go live.** Next: Environment setup + testing.
