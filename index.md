---
title: "Sonia Lynn Bjornsen"
---

{% for post in site.posts %}
  <div itemscope itemtype="http://schema.org/NewsArticle">
    <a itemprop="url" href="{{ site.url }}{{ post.url }}"><span itemprop="name">{{ post.title }}</span></a>
    <time itemprop="datePublished" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
    {{ post.excerpt }}
    <span itemprop="author" itemscope itemid="{{ site.url }}/about" class="hidden">{{ post.author }}</span>
  </div>
{% endfor %}
