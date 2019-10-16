---
layout: default
author: "George Hess"
---
<header class="sticky">
	<nav>
		<a title="Newer" class="paginate newer" {% if page.next.url %}href="{{ page.next.url }}"{% else %}disabled{% endif %}>
			<span class="arrow">&lt;</span> George
		</a>
		<a title="List" href="/#list-{{ page.slug }}">
			<img src="/assets/img/menu.svg" width="25" height="25" />
		</a>
		<a title="Older" class="paginate older" {% if page.previous.url %}href="{{ page.previous.url }}"{% else %}disabled{% endif %}>
			Hess <span class="arrow">&gt;</span>
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
