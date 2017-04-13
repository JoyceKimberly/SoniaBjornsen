---
title: "Sonia Lynn Bjornsen"
---

{% for post in site.posts %}
  <div itemscope itemtype="http://schema.org/NewsArticle">
    <a itemprop="url" href="{{ site.url }}{{ post.url }}"><span itemprop="name">{{ post.title }}</span></a>
    <time itemprop="datePublished" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
    <time itemprop="dateModified" datetime="{{ post.date | date: '%Y-%m-%d' }}" class="hidden">{{ post.date | date: '%-d %B %Y' }}</time>
    {{ post.excerpt }}
    <span itemprop="author" itemscope itemref="person" class="hidden">{{ post.author }}</span>
    <span itemprop="mainEntityOfPage" itemscope itemid="{{ site.url }}" class="hidden"></span>
  </div>
{% endfor %}
