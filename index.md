---
title: "Sonia Lynn Bjornsen"
---

<div>
  {% for page in site.pages %}
      <div>
        <a href="{{ site.url }}{{ post.url }}">{{ page.title }}</a>
        <div>{{ page.excerpt }}</div>
      </div>
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
