import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium text-primary hover:underline"
            >
              {post.metadata.title}
            </Link>
            <p className="text-sm text-muted-foreground">
              {new Date(post.metadata.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
