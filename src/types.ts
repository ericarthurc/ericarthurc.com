export type Post = {
	content: any;
	meta: PostMeta;
};

export type PostMeta = {
	slug: string;
	title: string;
	date: Date;
	published: boolean;
	featured: boolean;
	categories: string[];
	skills: string[];
	skills_svgs?: (string | undefined)[];
};
