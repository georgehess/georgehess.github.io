---
layout: default
title:  Stories
author: George Hess
theme: main
---
<main>
	{% for post in site.posts %}
		<a class="story-link" tabindex="{{ forloop.index }}" href="{{ post.url }}#read-more">
			<article id="{{ post.slug }}" class="{{ post.theme }}">
				{%
					include article-header.html
					title=post.title
					thumb=post.thumb
					date=post.date
					author=post.author
					excerpt=post.excerpt
				%}
			</article>
		</a>
	{% endfor %}
</main>
