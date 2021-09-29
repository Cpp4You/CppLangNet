# Contributing to cpp-lang.net website

- [Contributing to cpp-lang.net website](#contributing-to-cpp-langnet-website)
	- [Introduction](#introduction)
	- [Creating your local copy of the site](#creating-your-local-copy-of-the-site)
	- [Folder structure](#folder-structure)
		- [Source code](#source-code)
		- [Site docs](#site-docs)
		- [Blog posts](#blog-posts)
		- [Translated docs](#translated-docs)
	- [Writing a new article or editing C++ course](#writing-a-new-article-or-editing-c-course)
		- [New document](#new-document)
		- [Improving existing documents](#improving-existing-documents)
		- [Correcting grammar and other simple problems](#correcting-grammar-and-other-simple-problems)
		- [General editing rules and tips](#general-editing-rules-and-tips)
			- [Write simple](#write-simple)
			- [Use images, GIFs, video links](#use-images-gifs-video-links)
			- [Add tags](#add-tags)
	- [Translating existing documentation](#translating-existing-documentation)
		- [Translating to an existing locale](#translating-to-an-existing-locale)
			- [Translating pages](#translating-pages)
			- [Translating documents](#translating-documents)
		- [Adding new language support](#adding-new-language-support)

## Introduction

First of all thank you for your will to help with the Cpp-Lang.net project!

If you have any questions regarding contributing, please visit our [Discord server](https://discord.gg/3MeXQ8TvBw)!

<a href="https://discord.gg/3MeXQ8TvBw">
	<img width="300px" src="resources/DiscordHelpDev.png" alt="Join our Discord Server">
</a>

## Creating your local copy of the site

To efficiently edit the website, you'll have to create a personal fork,
of the repository.

Make sure that you have [Node.js](https://nodejs.org) installed.

## Folder structure

### Source code

The site source code, that is edited by programmers
is located inside `src/` directory. It contains pages
and useful components that we can later use in articles, docs, etc.

### Site docs

Every doc, article and course lesson is located
inside `docs/` subdirectory. Those are original articles,
written in English. They should be treated as a reference
when creating translations.

If you want to create a doc in other language, you'll
have to provide english version of it. Don't worry,
we will help you with that when you'll create a pull request.

### Blog posts

Every blog post is located inside `blog/` subdirectory.
Adding blog posts is restricted. Only site maintainer
is allowed to create blog posts.

### Translated docs

There is `i18n` subdirectory (i18n - internationalization).
Inside that, there's a folder for each locale.

Right now we support the following locales:
- **en** - English language  
**Note**: this directory contains only a localized version of
template Markdown files (that can be later reused, imported across other MDX documents).
- **pl** - Polish language

Each language has the following folders inside (each prefixed with `docusaurus-plugin-content-` ):

- blog - translated blog posts
- docs - translated C++ docs that reflect the `/docs/cpp-docs/` folder.
- docs-features - translated C++ feature docs that reflect the `/docs/features/` folder
- docs-learn - translated C++ course docs that reflect the `/docs/learn/` folder
- docs-tools - translated C++ tool docs that reflect the `/docs/tools/` folder
- presets - translated versions of preset Markdown files, that can be later reused in other Markdown documents.

## Writing a new article or editing C++ course

<hr/>

**Note**: its highly recommended for you to first view many of already existing docs, to
learn by example.

<hr/>

If you want to do so, please visit first our [Discord server](https://discord.gg/3MeXQ8TvBw),
then ask if there's a need for such an article, or if the course edit would be reasonable.
You can do that or create an issue directly on GitHub, however the communication is
easier and faster on the Discord server.

### New document

**Note**: Visit [this link](https://docusaurus.io/docs/create-doc) to learn how to create docs in Docusaurus.

Let's say that you want to write a lesson about class constructors.

First, make sure that you've created a English version of the document, even if you leave
it empty. **Pick a lowercase name without spaces, separated by hyphens**, for example:

```
class-constructors.mdx
```

Start by filling a [metadata of the document](https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter). Open it, and at the very top create a **document metadata** section.

```mdx
---
sidebar_position: 4
title: Class constructors
---
```

The `sidebar_position` field is **mandatory**.

For complete metadata list, please visit [this page](https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter).

### Improving existing documents

### Correcting grammar and other simple problems

This can be done by simple file editing on GitHub directly.
Just make sure that you haven't broken the syntax.
We'll check it anyways.

### General editing rules and tips


#### Write simple

The main goal is to make it as easy to understand as possible.
Imagine that you teach your 9 year old nephew how to program.
When you teach someone a new topic, assume that the student does not know anything
about it yet.

#### Use images, GIFs, video links

Do not flood the students with pages full of text only.
Roughly 1/3 of the content should be in a graphical form.
Prefer showing, not only talking about it.

#### Add tags

Tags help people find the topic they're interested in.
Please add tags to the document metadata.

<hr/>

**TODO: expand it.**

<hr/>

## Translating existing documentation

### Translating to an existing locale

#### Translating pages

#### Translating documents

Create a doc with the same name and in the appropriate i18n folder,
then translate it.

See [official docusaurus tutorial](https://docusaurus.io/docs/i18n/tutorial).

### Adding new language support

<hr/>

**TODO: this section is not ready yet. Please wait.**

<hr/>

New language has to be added to `docusaurus.config.js`.




