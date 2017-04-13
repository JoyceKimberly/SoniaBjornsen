---
title: "Sonia Lynn Bjornsen"
---

<div itemscope itemtype="http://schema.org/Blog">
  <span itemprop="about" itemscope itemid="{{ site.url }}/about" class="hidden">{{ post.author }}</span>
  {% for post in site.posts %}
    <div itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
      <a itemprop="url" href="{{ site.url }}{{ post.url }}"><span itemprop="name"><span itemprop="headline">{{ post.title }}</span></span></a>
      <time itemprop="datePublished" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
      <time itemprop="dateModified" datetime="{{ post.date | date: '%Y-%m-%d' }}" class="hidden">{{ post.date | date: '%-d %B %Y' }}</time>
      <span itemprop="articleBody">{{ post.excerpt }}</span>
      <span itemprop="author" itemscope itemid="{{ site.url }}/about" class="hidden">{{ post.author }}</span>
      <span itemprop="publisher" itemscope itemid="{{ site.url }}/about" class="hidden"></span>
      <a itemprop="mainEntityOfPage" href="{{ site.url }}" class="hidden"></a>
    </div>
  {% endfor %}
</div>
