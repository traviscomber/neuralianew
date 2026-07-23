#!/bin/bash
set -e

echo "=== PHASE 1: SETUP & TESTING CHECKLIST ==="
echo ""

echo "STEP 1: Verify endpoints are live"
echo "Testing Motil endpoint..."
curl -s -w "HTTP %{http_code}\n" -X GET "https://www.n3uralia.com/api/motil-bot/webhook" 

echo ""
echo "Testing Property Partners endpoint..."
curl -s -w "HTTP %{http_code}\n" -X GET "https://www.n3uralia.com/api/property-partners-bot/webhook"

echo ""
echo "Testing Transport Certs endpoint..."
curl -s -w "HTTP %{http_code}\n" -X GET "https://www.n3uralia.com/api/transport-certs-bot/webhook"

echo ""
echo "STEP 2: Environment Variables Check"
echo "Required vars for setup:"
echo "  - OPENAI_API_KEY ✓ (already set)"
echo "  - GREEN_API_TOKEN ✓ (already set)"
echo "  - GREEN_API_INSTANCE_ID ✓ (already set)"
echo "  - WHATSAPP_NOTIFY_PHONE ✓ (already set)"
echo ""
echo "Optional per-project vars (for independent team notifications):"
echo "  - WHATSAPP_NOTIFY_PHONE_MOTIL (fallback: WHATSAPP_NOTIFY_PHONE)"
echo "  - WHATSAPP_NOTIFY_PHONE_PROPERTY (fallback: WHATSAPP_NOTIFY_PHONE)"
echo "  - WHATSAPP_NOTIFY_PHONE_TRANSPORT (fallback: WHATSAPP_NOTIFY_PHONE)"

echo ""
echo "STEP 3: Test Webhook Payloads"
echo ""
echo "Sample Motil test payload (hotel prospect):"
echo "curl -X POST https://www.n3uralia.com/api/motil-bot/webhook \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"typeWebhook\":\"incomingMessageReceived\",\"senderData\":{\"chatId\":\"56912345678@c.us\",\"sender\":\"56912345678@c.us\",\"chatName\":\"HotelManager\"},\"messageData\":{\"typeMessage\":\"textMessage\",\"textMessageData\":{\"textMessage\":\"Hola! somos un hotel de 40 habitaciones en Vitacura. Queremos mejorar la gestión de reservas y housekeeping. Cuánto cuesta?\"}}}'"

echo ""
echo "STEP 4: Daily Monitoring Metrics"
echo "Track during 2-3 day testing:"
echo "  ✓ Conversation count per project"
echo "  ✓ Average handoff rate (should be 70-80% for complex products)"
echo "  ✓ Token cost per conversation (~$0.02-0.05 per chat)"
echo "  ✓ Response time (should be <2s)"
echo "  ✓ IP leaks: ZERO (daily code review)"

echo ""
echo "STEP 5: Go-Live Criteria"
echo "✓ All 3 endpoints responding 200 OK"
echo "✓ At least 2-3 test conversations per project successful"
echo "✓ 0 IP leaks (audited)"
echo "✓ Cost < $2/day across all 3 projects"
echo "✓ Handoff messages received by team"

echo ""
echo "=== READY FOR TESTING ==="
