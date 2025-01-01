export default function EmbedPhotoBlog() {
    return (
      <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="https://exif-photo-blog-h4gc.vercel.app/"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="EXIF Photo Blog Admin"
        ></iframe>
      </div>
    );
  }
  