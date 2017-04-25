---
title: "Sonia Lynn Bjornsen"
---

<div id="main-content">
  <h1 class="titel">Sonia Lynn Bjornsen</h1>
  {% for page in site.pages %}
    {% if page.title != undefined and page.title != 'Sonia Lynn Bjornsen' %}
      <a name="{{ page.slug }}"></a>
      <div id="{{ page.slug }}" class="block {{ page.slug }}">
        <!--<h1><a href="{{ site.url }}/#{{ page.slug }}">{{ page.title }}</a></h1>-->
        <div>{{ page.content }}</div>
      </div>
    {% endif %}
  {% endfor %}

  <a name="news"></a>
  <div id="news" class="block news {{ post.lang }}">
    {% for post in site.posts %}
      <a name="{{ post.slug }}"></a>
      <div id="{{ post.slug }}">
        <!--<h1><a href="{{ site.url }}/#{{ post.slug }}">{{ post.title }}</a></h1>-->
        <div>{{ post.content }}</div>
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
      </div>
    {% endfor %}
  </div>
</div>
