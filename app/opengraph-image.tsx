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
          background: '#FAFAF8',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#A4461F',
          }}
        >
          <div
            style={{
              width: 48,
              height: 2,
              background: '#A4461F',
            }}
          />
          Portfolio
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 92,
            fontWeight: 500,
            letterSpacing: -4,
            color: '#1A1A17',
          }}
        >
          Md Arif Hossain
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            fontWeight: 400,
            color: '#56564E',
          }}
        >
          Software Engineer II — Flutter &amp; Android
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.4,
            color: '#6E6E64',
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
