---
title: "Data Visualization"
subtitle: "Projects during CSE 512 under Jeff Heer"
layout: blank-project
date: 2014-03-22 10:20
categories: project
tags: 
 - Tableau 
 - D3.js 
 - Front-End Engineering
author: Aniket Handa
size: 1
imagesrc: "/theme/img/icons/icon-care2.png"
summary: ""
---

<div class="container">
	<div class="row">
	{% for post in site.tags.DataVis %}
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