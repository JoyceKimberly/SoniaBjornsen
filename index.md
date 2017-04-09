---
title: "Sonia Bjornsen"
---

{% for post in site.posts %}
  <a href="{{ baseurl }}{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
{% endfor %}
