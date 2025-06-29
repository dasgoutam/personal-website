import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import Markdown from 'react-markdown';
import { notFound } from 'next/navigation';

export type paramsType = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
  return slugs;
}

export default async function BlogPostPage({ params }: { params: paramsType }) {
    const { slug } = await params;
    console.log('Slug:', slug); 
    const post = getPostBySlug(slug);
  
    if (!post) {
      notFound();
    }
  
    return (
      <div className="prose dark:prose-invert max-w-3xl mx-auto py-12">
        <h2>{post.metadata.title}</h2>
        <p className="text-sm text-muted-foreground">{post.metadata.date}</p>
        {post.metadata.tags.map((tag: string) => (
          <li>{tag}</li>
        ))}
        <Markdown>{post.content}</Markdown>
      </div>
    );
  }