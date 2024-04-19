import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'
import * as fs from 'node:fs/promises'
import path from 'node:path'

async function getPost(slug: string) {
	const file = path.resolve(`posts/${slug}.md`)
	return await fs.readFile(file, 'utf-8')
}

function getFrontmatter(frontmatter: string) {
	return yaml.load(frontmatter)
}

async function markdownToHtml(slug: string) {
	const post = await getPost(slug)
	const ast = Markdoc.parse(post)
	const content = Markdoc.transform(ast, {
		tags: {
			callout: {
				render: 'Callout',
				attributes: {
					type: {
						type: String,
						default: 'note',
					},
				},
			},
			counter: {
				render: 'Counter',
			},
		},
		variables: {
			frontmatter: getFrontmatter(ast.attributes.frontmatter),
		},
	})

	return {
		// @ts-ignore
		children: JSON.stringify(content.children),
		html: Markdoc.renderers.html(content),
	}
}

export async function load({ params }) {
	const { children, html } = await markdownToHtml(params.slug)
	return { children, html }
}
