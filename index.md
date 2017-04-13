---
title: "Sonia Lynn Bjornsen"
---

<div itemscope itemtype="http://schema.org/Blog">
  <span itemprop="about" itemscope itemid="{{ site.url }}" class="hidden">{{ post.author }}</span>
{% for post in site.posts %}
  <div itemscope itemtype="http://schema.org/BlogPosting">
    <a itemprop="url" href="{{ site.url }}{{ post.url }}"><span itemprop="name">{{ post.title }}</span></a>
    <time itemprop="datePublished" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
    <time itemprop="dateModified" datetime="{{ post.date | date: '%Y-%m-%d' }}" class="hidden">{{ post.date | date: '%-d %B %Y' }}</time>
    {{ post.excerpt }}
    <span itemprop="author" itemscope itemid="{{ site.url }}" class="hidden">{{ post.author }}</span>
  </div>
{% endfor %}
</div>
