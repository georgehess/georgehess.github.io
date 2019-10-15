---
layout: default
author: "George Hess"
---
<header class="sticky">
	<nav>
		<a href="/#list-{{ page.slug }}">
			<span>George</span>
			<img src="/assets/img/menu.svg" width="25" height="25" title="All Stories" />
			<span>Hess</span>
		</a>
	</nav>
</header>
<main>
	<article>

		{%
			include article-header.html
			title=page.title
			thumb=page.thumb
			date=page.date
			author=page.author
			excerpt=page.excerpt
		%}

		<section id="content" class="story-body">
			{{ content | remove_first:page.excerpt }}
		</section>

	</article>
</main>
