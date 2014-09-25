---
title: "Rapid Prototyping"
subtitle: "Weekly prototyping chronicles"
layout: blank-project
date: 2014-03-23 10:20
categories: project
tags:
 - Paper
 - Physical
 - Model
 - Mobile
 - Video
 - Website
 - Electronics
 - Arduino
 - Behavioral
author: Aniket Handa
size: 1
imagesrc: "https://dl.dropboxusercontent.com/u/23289062/siteImages/Projects/ttt/nexus_framed-noShadow-low%20crop.png"
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
	{% for post in site.tags.prototyping %}
		<a href="{{ post.url }}">
		<div class="page">
			<h2>{{ post.title }}</h2>
			<div class="page-play-thumb">
				<div>	
					<img class="img-responsive" src="{{ post.imagesrc }}">
				</div>
			</div>
			</br>
			<strong>{{ post.date | date_to_string }}</strong>
			//
			{% if post.summary %}
				{{ post.summary }}
			{% endif %}
		</div>
		</a>
	{% endfor %}
	</div>
</div>