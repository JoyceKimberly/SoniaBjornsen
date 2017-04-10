---
title: "Sonia Bjornsen"
---

{% for post in site.posts %}
  <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
  <time datetime="{{ post.date }}">{{ post.date | date: "%-d %B %Y"}}</time>
  {{ post.excerpt }}
{% endfor %}
