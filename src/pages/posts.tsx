import CirnoS from "../components/posts/CirnoS.tsx"
import MatrixCalculation from "../components/posts/matrix-calculation.tsx"

export const posts = [
  { id: "cirno", title: "Cirno's Swirlaria", date: "October 23rd-October 27th", Component: CirnoS },
  { id: "matrix", title: "Linear Algebra Calculator", date: "unknown", Component: MatrixCalculation },
];

export default function Posts() {

  return (
    <>
      <h1>POSTS</h1>

      {posts.map(({ title, date, Component }) => {
        return (
          <section id={title} className="postCard">
            <h2>{title} ({date})</h2>
            <Component />
          </section>
        );
      })}
    </>
  )
}
