---
title: "Sonia Lynn Bjornsen"
---

<div id="main-content">
  <div id="titelBlock" class="block titel">
    <div id="titel">Sonia Lynn Bjornsen</div>
  </div>
  {% for page in site.pages %}
    {% if page.lang == 'en' %}
      <a name="{{ page.slug }}"></a>
      <div id="{{ page.slug }}" class="block {{ page.slug }}">
        <!--<h1><a href="{{ site.url }}/#{{ page.slug }}">{{ page.title }}</a></h1>-->
        <div lang="{{ page.lang }}">{{ page.content }}</div>

        {% for pageNL in site.pages %}
          {% if pageNL.slug == page.slug and pageNL.lang == 'nl' %}
            <div lang="{{ pageNL.lang }}">{{ pageNL.content }}</div>
          {% endif %}
        {% endfor %}

      </div>
    {% endif %}
  {% endfor %}

  <a name="news"></a>
  <div id="news" class="block news">
    {% for post in site.posts %}
      <a name="{{ post.slug }}"></a>
      <div id="{{ post.slug }}" lang="{{ post.lang }}">
        <!--<h1><a href="{{ site.url }}/#{{ post.slug }}">{{ post.title }}</a></h1>-->
        <div>{{ post.content }}</div>
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
      </div>
    {% endfor %}
  </div>
</div>
