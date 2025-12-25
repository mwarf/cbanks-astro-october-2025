import type { CollectionEntry } from 'astro:content';
import type { Project } from './portfolio-data';

/**
 * Adapter to transform a Content Collection entry into the legacy Project interface.
 * This allows us to use existing React components without refactoring them yet.
 */
export function projectFromEntry(entry: CollectionEntry<'portfolio'>): Project {
  return {
    id: entry.id,
    title: entry.data.title,
    client: entry.data.client,
    category: entry.data.category,
    image: entry.data.image,
    description: entry.data.description,
    tags: entry.data.tags,
    videoUrl: entry.data.videoUrl,
    featured: entry.data.featured,
    pubDate: entry.data.pubDate,
  };
}
