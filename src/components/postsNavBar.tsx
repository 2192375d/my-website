import { posts } from "../pages/posts.tsx"

export default function PostsNavBar() {
  return (
    <div className="postsNavBar">
      <div className="vcontainer">
        {posts.map(({ title }) => (
          <a key={title} href={`#${title}`} className="postLink">
            {title}
          </a>
        ))}

      </div>
    </div>
  );
}
