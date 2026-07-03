import type { CollectionEntry } from 'astro:content';

export function sortPostsByDate(posts: CollectionEntry<'blog'>[]) {
	return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function splitPostsByType(posts: CollectionEntry<'blog'>[]) {
	const writing = posts.filter((post) => !post.data.tags.includes('projects'));
	const projects = posts.filter((post) => post.data.tags.includes('projects'));

	return { writing, projects };
}
