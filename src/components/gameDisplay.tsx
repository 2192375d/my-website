interface Props {
  title: string
  source: string
}

export default function GameDisplay({ title, source }: Props) {

  return (
    <div className="gameDisplay">
      <img
        className="gameDisplayImg"
        src={source}
        alt={`${title} cover art`}
      />
      <div className="gameDisplayTitle">{title}</div>
    </div>
  )
}
