import { ImageResponse } from 'next/og';

export const alt = 'Md Arif Hossain — Flutter & Android Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Generated at build time so social previews never go stale. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 55%, #EFF6FF 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#2563EB',
          }}
        >
          <div
            style={{
              width: 40,
              height: 6,
              borderRadius: 3,
              background: '#2563EB',
            }}
          />
          Portfolio
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: -2,
            color: '#1A1A1A',
          }}
        >
          Md Arif Hossain
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 38,
            fontWeight: 600,
            color: '#2563EB',
          }}
        >
          Software Engineer II — Flutter &amp; Android
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.4,
            color: '#525252',
            maxWidth: 900,
          }}
        >
          4+ years building high-performance mobile apps · 10+ apps shipped ·
          700K+ combined downloads
        </div>
      </div>
    ),
    size
  );
}
