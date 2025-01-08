export default function EmbedPhotoBlog() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://exif-photo-blog-nsn8.vercel.app/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
        title="Flora & Fauna Photo Blog"
      ></iframe>
    </div>
  );
}
