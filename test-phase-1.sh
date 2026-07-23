#!/bin/bash
set -e

# Phase 1 Testing Suite
# Tests all 3 Travis agents with realistic scenarios

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         PHASE 1 TRAVIS TESTING SUITE (2-3 Days)               ║"
echo "║                                                                ║"
echo "║  Testing: Motil | Property Partners | Transport Certificates   ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Set env vars
set -a && source /vercel/share/.env.project && set +a

# Helper function
send_webhook() {
  local PROJECT="$1"
  local CHAT_ID="$2"
  local CONTACT_NAME="$3"
  local MESSAGE="$4"
  
  echo "[$(date '+%H:%M:%S')] ▶ $PROJECT: $CONTACT_NAME → '$MESSAGE'"
  
  curl -s -X POST "https://www.n3uralia.com/api/${PROJECT}-bot/webhook" \
    -H "Content-Type: application/json" \
    -d "{\"typeWebhook\":\"incomingMessageReceived\",\"senderData\":{\"chatId\":\"${CHAT_ID}@c.us\",\"sender\":\"${CHAT_ID}@c.us\",\"chatName\":\"${CONTACT_NAME}\"},\"messageData\":{\"typeMessage\":\"textMessage\",\"textMessageData\":{\"textMessage\":\"${MESSAGE}\"}}}" \
    > /dev/null
  
  echo "  ⏳ Waiting for response..."
  sleep 10
}

check_response() {
  local PROJECT="$1"
  local CHAT_ID="$2"
  local LABEL="$3"
  
  local RESPONSE=$(curl -s -X POST "https://7107.api.greenapi.com/waInstance710722691570/getChatHistory/${GREEN_API_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "{\"chatId\":\"${CHAT_ID}@c.us\",\"count\":1}" 2>/dev/null | python3 -c "
import sys,json
try:
  for m in json.load(sys.stdin):
    print(m.get('textMessage', '(no response)')[:200])
except:
  print('(error getting response)')
" 2>/dev/null || echo "(no response)")
  
  echo "  ✓ Response: ${RESPONSE:0:100}..."
  echo ""
}

# ═══════════════════════════════════════════════════════════════════
echo "TEST DAY 1: DISCOVER PHASE"
echo "───────────────────────────────────────────────────────────────"
echo ""

echo "━━ TEST 1.1: MOTIL - Hotel Discovery ━━"
send_webhook "motil" "5691111111" "JuanHotel" "Hola! Somos un hotel de 40 habitaciones en Vitacura. Queremos mejorar la gestión de reservas. Esto funciona?"
check_response "motil" "5691111111" "Hotel discovery"

echo "━━ TEST 1.2: PROPERTY PARTNERS - Real Estate Agent ━━"
send_webhook "property-partners-bot" "5691111112" "CarlosAgent" "Soy agente inmobiliario. Necesito datos de propiedades en Vitacura para competir. Ustedes tienen eso?"
check_response "property-partners-bot" "5691111112" "Agent data request"

echo "━━ TEST 1.3: TRANSPORT CERTS - Transportista ━━"
send_webhook "transport-certs-bot" "5691111113" "PedroFlota" "Tengo 30 camiones y estoy cansado de perder guías. Pueden ayudar con documentos?"
check_response "transport-certs-bot" "5691111113" "Transport docs"

# ═══════════════════════════════════════════════════════════════════
echo ""
echo "TEST DAY 2: EDUCATION + OBJECTION HANDLING"
echo "───────────────────────────────────────────────────────────────"
echo ""

echo "━━ TEST 2.1: MOTIL - Price Objection ━━"
send_webhook "motil" "5691111111" "JuanHotel" "Suena bien pero cuesta mucho, no? Tengo presupuesto limitado"
check_response "motil" "5691111111" "Price objection"

echo "━━ TEST 2.2: PROPERTY PARTNERS - Integration Question ━━"
send_webhook "property-partners-bot" "5691111112" "CarlosAgent" "Ok pero... pueden integrar con Salesforce? Usamos eso"
check_response "property-partners-bot" "5691111112" "Integration question"

echo "━━ TEST 2.3: TRANSPORT CERTS - Compliance Question ━━"
send_webhook "transport-certs-bot" "5691111113" "PedroFlota" "Está regulado? Necesitamos cumplimiento SII. No podemos arriesgar multas"
check_response "transport-certs-bot" "5691111113" "Compliance question"

# ═══════════════════════════════════════════════════════════════════
echo ""
echo "TEST DAY 3: HANDOFF + QUALIFICATION"
echo "───────────────────────────────────────────────────────────────"
echo ""

echo "━━ TEST 3.1: MOTIL - Lead Qualification + Handoff ━━"
send_webhook "motil" "5691111111" "JuanHotel" "Ok me convenciste. Somos Hotel La Quinta, 40 habitaciones en Vitacura. Mi correo es juan@hotelaquinta.cl. Necesito hablar con alguien del equipo para contratar"
check_response "motil" "5691111111" "Motil handoff"

echo "━━ TEST 3.2: PROPERTY PARTNERS - Data Request ━━"
send_webhook "property-partners-bot" "5691111112" "CarlosAgent" "Dale, quiero acceso a los datos. Soy Carlos Fernández de Remax Vitacura. Mi email es carlos@remax.cl"
check_response "property-partners-bot" "5691111112" "Property Partners handoff"

echo "━━ TEST 3.3: TRANSPORT CERTS - Contract Discussion ━━"
send_webhook "transport-certs-bot" "5691111113" "PedroFlota" "Perfecto. Transportes del Sur, 30 camiones, Santiago. Mi correo es pedro@transdelssur.cl. Necesito una propuesta formal"
check_response "transport-certs-bot" "5691111113" "Transport handoff"

# ═══════════════════════════════════════════════════════════════════
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                  TESTING COMPLETE ✓                           ║"
echo "║                                                                ║"
echo "║  Manual Tasks:                                                 ║"
echo "║  □ Check team WhatsApp for 3 handoff messages                  ║"
echo "║  □ Verify 0 IP leaks in responses (code review)                ║"
echo "║  □ Calculate token cost (should be < $2 total)                 ║"
echo "║  □ Check response times (should be < 2s each)                  ║"
echo "║                                                                ║"
echo "║  If all criteria met → Ready for GO-LIVE                       ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
