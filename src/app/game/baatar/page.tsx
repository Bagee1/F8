export default function BaatarGamePage() {
    return (
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="/game/baatar/index.html"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Баатар тоглоом"
          allow="camera *; microphone *"
        />
      </div>
    );
  }
  