---
title: "Sonia Lynn Bjornsen"
---

<div>
  {% for page in site.pages %}
    {% if page.title != undefined and page.title != 'Sonia Lynn Bjornsen' %}
      <a name="{{ page.id }}"></a>
      <div>{{ page.title }}</div>
      <div>{{ page.content }}</div>
    {% endif %}
  {% endfor %}
</div>

<div>
  {% for post in site.posts %}
    <div>
      <a name="{{ post.id }}"></a>
      <div>{{ post.title }}</div>
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
      <div>{{ post.excerpt }}</div>
    </div>
  {% endfor %}
</div>
