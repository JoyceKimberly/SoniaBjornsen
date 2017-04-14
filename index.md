---
title: "Sonia Lynn Bjornsen"
---

<div id="main-content">
  {% for page in site.pages %}
    {% if page.title != undefined and page.title != 'Sonia Lynn Bjornsen' %}
      <a name="{{ page.slug }}"></a>
      <div class="block {{ page.slug }}">
        <a href="{{ site.url }}/#{{ page.slug }}">{{ page.title }}</a>
        <div>{{ page.content }}</div>
      </div>
    {% endif %}
  {% endfor %}

  <a name="news"></a>
  <div class="block news">
    {% for post in site.posts %}
      <a name="{{ post.slug }}"></a>
      <div>
        <a href="{{ site.url }}/#{{ post.slug }}">{{ post.title }}</a>
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
        <div>{{ post.excerpt }}</div>
      </div>
    {% endfor %}
  </div>
</div>
