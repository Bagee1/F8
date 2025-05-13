import Link from 'next/link';
import GameInfoPanel from '../../components/GameInfoPanel';

export default function GamePage() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '30px',
        flexWrap: 'wrap',
      }}
    >
      {/* Зүүн талын зураг, нэр, тоглох товч, үнэлгээ */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '20px',
          padding: '20px',
          flex: 1,
          maxWidth: '500px',
        }}
      >
        <div
          style={{
            backgroundColor: '#ccc',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <img
            src="/assets/baatar.png"
            alt="Баатар"
            style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
          />
           <Link href="/game/baatar">
          <button
            style={{
              marginTop: '10px',
              padding: '10px 40px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              letterSpacing: '3px',
            }}
          >
            ТОГЛОХ
          </button>
          </Link>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Баатар</p>
          <p style={{ color: '#aaa', marginBottom: '5px' }}>4,936,733 тоглосон</p>
          <p style={{ color: '#FFD700', fontSize: '20px' }}>★★★★☆</p>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              📌 Хадгалах
            </button>
            <button
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              ✉️ Үнэлгээ өгөх
            </button>
          </div>
        </div>
      </div>

      {/* Баруун талын мэдээллийн самбар */}
      <div
        style={{
          flex: 2,
          minWidth: '300px',
          maxWidth: '600px',
        }}
      >
        <GameInfoPanel
          title="Тоглоомын Танилцуулга"
          description={`"Баатар" бол эртний Монголын зоригт баатарын дүрд тоглох, адал явдалт хурдтай тоглоом юм. Энэхүү тоглоом нь алдартай Dino Run төрлийн тоглоомын орчин үеийн шийдэл бөгөөд онцлог нь тоглогч камерын тусламжтайгаар ам ангайлгасан баатрын үсэрч, ам хаах үедээ хэвийн байдалд эргэн ордог юм.`}
          features={[
            'Монгол үндэсний баатрын дүртэй',
            'Сонирхолтой гүйдэг тоглоом',
            'Камерын удирдлагатай гар хуруугүй хяналтын систем',
            'Саад бэрхшээлийг даван туулж, хамгийн өндөр оноог авах сорилт',
            'Хурд нэмэгдэх тусам сэтгэл хөдөлгөм динамик орчин',
            'Хөгжилтэй, дадлага шаардсан тоглоомын явц',
          ]}
          controls={[
            'Амаа ангайх – Баатар үсэрнэ',
            'Ам хаах – Баатар гүйх хэвийн байдалд шилжинэ',
          ]}
        />
      </div>
    </div>
  );
}
