import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const size = {
  width: 1200,
  height: 630,
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #071010 0%, #173634 54%, #e9f1ee 100%)',
          color: '#f7fbf9',
          padding: 72,
          fontFamily: 'Arial',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: 'rgba(142, 172, 167, 0.22)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -140,
            bottom: -220,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: 'rgba(255, 255, 255, 0.10)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.42)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b7cbc7',
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              n3
            </div>
            <div style={{ fontSize: 34, letterSpacing: 3, color: '#b7cbc7' }}>N3URALIA</div>
          </div>
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.32)',
              color: '#dbe7e3',
              padding: '12px 18px',
              fontSize: 20,
              letterSpacing: 1.5,
            }}
          >
            CHILE + LATAM
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 900, zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              border: '1px solid rgba(183,203,199,0.44)',
              color: '#b7cbc7',
              padding: '10px 16px',
              fontSize: 22,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Operational AI systems
          </div>
          <div style={{ fontSize: 76, lineHeight: 0.96, fontWeight: 700, letterSpacing: -3 }}>
            AI and software for operations that cannot fail
          </div>
          <div style={{ color: '#d8e4e1', fontSize: 30, lineHeight: 1.32, maxWidth: 820 }}>
            Dashboards, workflows, agents and integrations for complex teams that need clarity,
            accountability and faster action.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#edf4f1',
            fontSize: 22,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 28,
            zIndex: 1,
          }}
        >
          <span>30-day diagnosis</span>
          <span>90-day connected system</span>
          <span>n3uralia.com</span>
        </div>
      </div>
    ),
    size,
  )
}
