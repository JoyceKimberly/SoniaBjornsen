---
title: "Sonia Bjornsen"
---

{% for post in site.posts %}
  <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
{% endfor %}
