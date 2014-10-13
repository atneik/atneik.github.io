---
title: "Data Visualization"
subtitle: "Projects during CSE 512 under Jeff Heer"
layout: blank-project
date: 2014-04-27 10:20
categories: project
tags: 
 - Tableau 
 - D3.js 
 - Front-End Engineering
author: Aniket Handa
size: 1
imagesrc: "https://dl.dropboxusercontent.com/u/23289062/siteImages/DataViz/terror2.png"
summary: ""
---

<div class="container">
	<br/><br/>
	<h1>{{ page.title }}</h1>
	<p class="meta" style="text-align: center">
	<tags>
		{% for tag in page.tags %}
			<tag>{{ tag }}</tag> 
			{% unless forloop.last %} / {% endunless %}
		{% endfor %}
	</tags>
	</p>
	<div class="row">
	{% for post in site.tags.DataVis %}
		
		<div class="page">
			<h2>{{ post.title }}</h2>
			
			<p>
			<div class="page-play-thumb">
				<div>	
					<img class="img-responsive" src="{{ post.imagesrc }}">
				</div>
			</div>
			</p>
			<p>
			{% if post.summary %}
				{{ post.summary }}
			{% endif %}
			</p>
			<p class="meta">
				{% for link_hash in post.links %}
      				{% for link in link_hash %}
    					<a href="{{ link[1] }}" target="_blank">{{ link[0] }}</a>
  					{% endfor %}
  				{% endfor %}
  				<a href="{{ post.url }}" target="_blank"> Full post </a>
			</p>
		</div>
	{% endfor %}
	</div>
</div>