---
title: "Sonia Lynn Bjornsen"
---

{% for post in site.posts %}
  <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
  <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
  {{ post.excerpt }}
{% endfor %}
