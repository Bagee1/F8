"use client"
import GameCard from '../components/GameCard'
import Link from 'next/link'

export default function Home() {
  const games = [
    {
      title: "Баатар",
      image: "/assets/baatar.png",
      rating: 4,
    },
    {
      title: "Dino run",
      image: "/assets/dino1.png",
      rating: 4,
    },
    {
      title: "Dino run",
      image: "/assets/dino1.png",
      rating: 4,
    },
    {
      title: "Dino run",
      image: "/assets/dino1.png",
      rating: 4,
    },
  ];
  return (
    <div style={{ padding: '30px', color: '#fff' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Тоглоомууд</h1>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {games.map((game, index) => (
          <Link key={index} href="/game">
            <GameCard
              title={game.title}
              image={game.image}
              rating={game.rating}
              onClick={() => console.log(`${game.title} clicked`)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}