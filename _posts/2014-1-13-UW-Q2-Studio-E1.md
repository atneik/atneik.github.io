Title: Paper Prototyping a Coffee Shop App
Date: 2014-1-13 10:20
Modified: 2014-1-13 10:20
Category: Studio
Tags: prototyping
Slug: paper-prototyping-coffee-shop-app
Author: Aniket Handa
Summary: On the first session of prototyping studio we design and paper prototype an App used to be used for ordering coffee at a Cafe...

This quarter is going to be exciting! As the Studio deals with the most waited phase of the process i.e. Prototyping. We start the first studio session by paper prototyping an Tablet App for ordering coffee at a Cafe. The project was narrowed to include only three kinds of coffee (Espresso, Macchiato and Cappuccino) coming in three different sizes. So, a total of nine offerings.

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W1/4.jpg)

##Process

After discussing the minimum requirements of the application; me and other team members started individually designing the layout and flow of the coffee application. We laid down some evaluation criterion using which we may evaluate our design. One of the most important ones being: _quickness_ (said frequently in the [exercise](http://blogs.uw.edu/hcid521/exercises#e1)) or most less number of clicks.

I used small white cards to draw the rough layout of the UI. Separate card for each manipulation possible helped me rapidly analyze and alter the flow of the interaction. In a relatively short time, I was able to discern that a single frame was enough to show all the desired information without back and forth between more frames. Dynamically changing the parameters and showing the final cost on same frame eliminated the need of more frames. Hence, making it a bit faster. This might have been possible due to low number of offerings. 

While others came with, a nice top down layout of the elements (coffee on top and billing on bottom right) coherent with the visual flow followed by a typical user, and also with a robust way to represent billing information.

We then combined the best of our individual work to generate a single frame ready to be user tested.

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W1/2.jpg)

After a couple of user testing, the weaker sections of the design were clearly evident. First, was the ambiguous ‘Add’ button. Users clicked it add the order and got the feedback by lower half being updated. The problem was, how to remove an order? It wasn’t obvious. The other problem was the redundant billing information which was visually present on the upper half and numerically present in the lower half. 

To solve these issues, we dropped the ‘Add’ button. And now any changes on the top updated the bill automatically. We provided feedback using text (like a _toast_ in Android OS). For the other issue we got rid of redundancy and now only showed cumulative sum of each kind of coffee along with total amount.

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/Studio/Q2/W1/3.jpg)

This made the flow improve tremendously. The user was now able to manipulate (increase or decrease) the total number of each offering needed in just two clicks. And then all that was required was to click on ‘Submit’ after reviewing the total amount. Adding tip was made easy by just tapping on some pre-calculated tipping percentages. 

##What I Learned?
* Initial user testing are crucial. They reveal the most fundamental problems with the design.
* Make the most common case the fastest.
* Show feedback and status.
* If something is not clickable, blend it into the background. (here the coffee cups had a yellow background due to Post-it, so some users thought them as a Button)
* Predictability over Smartness.
* Think of all possible scenarios and permutations to break the system. :)
* Rather than discussing in a team, try A/B testing.
* Iterations. Iterations. Iterations. (rapid)

##What is this good/bad for?
* Paper prototyping is a great way to quickly put down the ideas not only to test but also to communicate.
* Remember not to put great efforts in visual aesthetics esp. initially. Its a fast and dirty way to fail ideas to move towards the quality ones.
* Might not work for all kind of interfaces, such as 3D interfaces.
* Even in touch interfaces it might not give the same experience for certain gesture based input methods such as swipe, slide, etc.