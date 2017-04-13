---
title: "Sonia Lynn Bjornsen"
---

{% for page in site.pages %}
  {% if page.title != 'Sonia Lynn Bjornsen' %}
    <div>
      <div>{{ page.title }}</div>
      <div>{{ page.excerpt }}</div>
    </div>
  {% endif %}
{% endfor %}

<div>
  {% for post in site.posts %}
    <div>
      <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
      <div>{{ post.excerpt }}</div>
    </div>
  {% endfor %}
</div>
