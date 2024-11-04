import type { PostMeta } from '@/types';
import { skillsSvgMap } from './skills-svg-map';

export function postReducer(paths: Record<string, unknown>, featuredOnly: boolean) {
	return Object.entries(paths)
		.reduce<PostMeta[]>((acc, [path, file]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '');

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<PostMeta, 'slug' | 'skills_svgs'>;

				if (metadata.published && (metadata.featured || !featuredOnly)) {
					const skills_svgs = metadata.skills?.map((s) => skillsSvgMap.get(s));
					const post = { ...metadata, slug, skills_svgs } satisfies PostMeta;

					acc.push(post);
				}
			}

			return acc;
		}, [])
		.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
}
