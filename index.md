---
title: "Sonia Lynn Bjornsen"
---

{% for post in site.posts %}
  <div itemscope itemtype="http://schema.org/NewsArticle">
    <a itemprop="name" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
    <time itemprop="datePublished" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
    {{ post.excerpt }}
  </div>
{% endfor %}
