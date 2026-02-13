import type { CollectionEntry } from 'astro:content';

export type SortableEntry = CollectionEntry<'work'> | CollectionEntry<'blog'>;

export function byPublishedDateDesc<T extends SortableEntry>(a: T, b: T): number {
	return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
}

export function uniqueValues(values: string[]): string[] {
	return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
