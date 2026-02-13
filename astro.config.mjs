// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];

// https://astro.build/config
export default defineConfig({
	site: 'https://yuxuanliao.github.io',
	base: isGithubPages && repoName ? `/${repoName}` : '/',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
