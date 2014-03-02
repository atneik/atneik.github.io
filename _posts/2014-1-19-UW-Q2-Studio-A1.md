---
title: "Paper Prototyping: Wearable UIs"
layout: post
date: 2014-1-19 21:15
categories: Studio
tags: prototyping
permalink: paper-prototyping-wearable-uis
author: Aniket Handa
summary: During this week long assignment we explore the interplay of a smartwatch and a smartphone... 
---

##Summary

“Wearables are the future!”, as deemed by majority of futurist. Together with a smartphone they can provide altogether new experiences. Here we choose a Smartwatch as the wearable and try to understand the interplay between the two devices. The accessibility of a Smartwatch and low friction involved in using it can be exploited to provide omnipresent computing. This week long endeavour used the technique of paper prototyping to quickly iterate over various designs possible for a Fitness App. The App helps user create routines in a smartphone and then help them follow the same while working out though the smartwatch as a medium. The system is named Gym Mate.

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/1.jpg)

##Problem

Most of us use Internet to learn new things, and learning new exercises is done in a similar manner. But, the problem is that, it’s quite difficult to find an exercise on a smartphone and then use it to follow the exercise while at a Gym. Now imagine this for every exercise. Now this is where a smartwatch comes into picture, which can show animations of the exercise and also guide through the routine while being non intrusive. Watch can also help users keep track of resting time between two exercises. 

Also there is no way to record actual exercises done during a Gym session (except of course self logging, which has way too much friction). This two-device system can record history and then provide long-term benefits by showing visualizations of overall health on the phone.
 

##Design

###Design Considerations & Constrains

* Easy to sync: The interplay between the watch and a phone can easily become a headache and hard to understand. The phone application provides a single large button ‘Start’ when the routine is set to go. Upon pressing the button the routine is uploaded to the watch and a message is shown on both the devices. Here it assumes that the devices are already paired using Bluetooth or similar technology.
* Does not bombard user with options: The interaction promotes the user to follow the most common case and make things less complicated for an average user. Earlier versions of the application scheduled the routine weekly rather than just in time. This was making the system complicated and time intensive. Therefore, it was striped down to only create instant routines and upload it to the watch. 
* Uses the limited watch screen space efficiently: The main utility of the application is to show the animations of exercises. This needs space. So, sole focus was given to the animation with only a single button to inform termination of the exercise.
* Fulfils current goal of the user: During user testing it became evident that users might not create schedules for a weeklong gym routine and rather create them on the fly. So, the system focused on users’ current goal of quickly manipulating the routine and uploading it to the watch.
* Provides short-term and long-term value: Short-term goals are met by delivering animations so that user correctly performs the exercise. Also the Watch helps user on track by clearly showing the flow of the routine from resting time to 

###Basic Functionality

* Create instant Gym routines on phone by combining numerous Exercises.  
* Transfer routine form the phone to the watch. Transfer actually completed exercises from the watch to the phone.
* Help user follow the routines (created on phone) using the watch with appropriate exercise animations and rest time.
* Visualize history of exercises done, calories burned, etc. according to week, month and year on the phone. 
 

##Prototype

I did three revisions of the design. Before achieving any fidelity, I first simulated the complete interaction using plain white cards. Within an hour, this activity revealed major flow problems in the design. It also gave me an idea what kind of interfacing elements would be needed to create the experience I have in mind. 

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/6.jpg)

The starting screen (when there is no routine) shows weekdays. The user is supposed to select a day and then add exercises to that particular day. This created the complete weekly schedule of the workout. 

One the prime feature I wanted was an intuitive Timeline to represent the Routine in a form of a Scroll wherein users can easily edit the exercise by sliding them off to delete and adding them using a ‘+’ button. To give a proper experience of a scroll I created a phone using cardboard and made two slits, one at the top and other at bottom, so as to make paper slide through vertically. 

To select the exercise to be added to the routine, I created a checked list that the user could scroll and check the exercises he/she wanted in the routine, and then finally tap on done. 

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/9.jpg)

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/8.jpg)

After addition of exercises the routine is ready to be uploaded to the watch. The upload is automatically done by tapping on ‘Start’ button. This shows a message ‘Your watch is ready is go’ on the phone. While simultaneously, the watch shows ready to Go!’. Now, tapping on ‘Go!’ begins the routine. 

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/3.jpg)

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/4.jpg)

On the watch side, it was simple and functional so as to better use the small screen. The watch that I prototyped was actually two times the scale of the original conception. This was to better support the interaction and the ease of creating. Now as the user tapped on ‘Go!’, the routine begins in the watch. The watch displays animations of the exercise and resting time in the same order the user specified in the routine. The watch at the end uploads the exercises (which user actually completed) to the phone to be archived in the history for future analysis. The watch also vibrates to alert the user at the end of each rest time.

This second version was used for user testing. The tester was a Gym goer so could relate more to the application.

Finally when the workout is finished the user can check his/her history of adherence to the routine. For this, the phone app shows charts/visualizations, according to week, month and year. These visualizations focus upon ‘How much user follows the routine?’, ‘Calories burned over the period?’, etc. All this data is possible as the watch syncs back the actual completed exercises to the phone. 

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/10.jpg)

After user testing and analysis I came up with the third version, which further improved some aspects of the prototype. The next section deals with analysis.
 

##Analysis

###Improvements

The first problem with the application was that, the application was difficult to grasp on the first usage. This was majorly due to weekly schedule instead of one single routine that the user can upload to the watch. To improve this, the application was simplified by just presenting a single routine instead every day of the week. Below is the new first screen of the application (if no routines). Upon addition of exercises the bottom button shows Start (as shown in above images).

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/2.jpg)

Another improvement was on the watch interface, wherein the status of the exercises was missing. The information about how many exercises are done and how many are left were not shown in the earlier version. This was elegantly implemented by showing a status bar on the top.

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W2/5.jpg)
 
###Conclusion & Critiques 

All the testers and many other students appreciated the scroll functionality. Earlier versions had complains about being complex. This was due to considering weekly schedule instead of focusing upon current user needs. This was improvised in the third version of the application by uploading present-day routine rather than on weekly schedules. The complexity was further reduced by not showing all connection stages/states between the phone and the watch. It was assumed that both the devices are connected. 

The final version of the application worked well. It was self-explanatory and users spend less time figuring out the usage. The interaction was predictable.

The short 60-sec video of user testing was commended for editing and background sound, but it was regarded too fast to be able to concentrate on the interaction flow of the application (I 2xed it to show the complete interaction in 60-seconds limit). Signing off with the video..


<div class="flex-video widescreen" style="margin: 0 auto;text-align:center;">

<iframe width="100%" height="100%" src="//www.youtube.com/embed/MOZ3ZuVZ0nQ" frameborder="0"> </iframe>

</div>
