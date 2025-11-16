import GameDisplay from "../components/gameDisplay.tsx"

export default function Games() {
  return (
    <>
      <h1>GAMES</h1>
      <p><a href="https://steamcommunity.com/profiles/76561199134337346/">My steam account</a></p>
      <p>I enjoy playing games, and here is where I document some games I played before</p>

      <h2>soulsborne</h2>
      <GameDisplay
        title="Dark souls R"
        source="https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/SedirtHaQhChsaRhRz0i" />
      <GameDisplay
        title="Sekiro"
        source="https://www.sekirothegame.com/content/dam/atvi/sekiro/gallery/Sekiro_01.jpg" />
    </>
  )
}
