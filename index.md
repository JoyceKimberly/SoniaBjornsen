---
title: "Sonia Lynn Bjornsen"
---

<div>
  {% for page in site.pages %}
    {% if page.path == '_pages' %}
      <div>
        <div>{{ page.title }}</div>
        <div>{{ page.excerpt }}</div>
      </div>
    {% endif %}
  {% endfor %}
</div>

<div>
  {% for post in site.posts %}
    <div>
      <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
      <div>{{ post.excerpt }}</div>
    </div>
  {% endfor %}
</div>
