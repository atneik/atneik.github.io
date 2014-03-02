Title: Visualizing Burtin's Antibiotic Dataset
Date: 2014-1-12 10:20
Modified: 2014-1-12 10:20
Category:
Tags: "Data Viz"
Slug: visualizing-burtin-antibiotic-dataset
Author: Aniket Handa
Summary: The first assignment at CSE 512: Data Viz. consisted of reimagining the Burtin's Antibiotic dataset and this is what I came up with...

This Quarter I'm taking CSE512: Data Visualization class by [Jeff Heer](http://homes.cs.washington.edu/~jheer/). The [first assignment](http://courses.cs.washington.edu/courses/cse512/14wi/a1.html) required us to design a visualization for the Burtin's Antibiotic dataset. This is what I came up with: 

![image](https://dl.dropboxusercontent.com/u/23289062/siteImages/DataViz/a1-aniket.svg)

[SVG](https://dl.dropboxusercontent.com/u/23289062/siteImages/DataViz/a1-aniket.svg)

##Audience

The audience of the visualization are Doctors and Lab practitioners who need to know the Minimum Inhibitory Concentration (MIC) of the antibiotic during (not after) the process of determining the bacteria in hand.

##Rationale

* I briefly went through the procedure involved in diagnosis of bacteria. First step is Gram staining the bacteria. It’s quite fast and cheap to get Gram results as positive or negative. So, it will be beneficial if the data is visualized in two separate graphics according to Gram Stain as one wouldn’t need to go though all 16 bacteria. Moreover it tells a story, which I noticed (and would like to tell) while I was performing transformation on the data to find any patterns. It intentionally and correctly shows that Neomycin is an effective antibiotic for Gram-negative bacteria and Penicillin (in most cases) or Neomycin (for other cases) can be good choice for Gram-positive bacteria. 
* The data is arranged from lower concentration needed to higher concentration needed. As with lower MIC I wanted to represent more powerfulness or effectiveness of the antibiotic, it made sense to arrange it in that order. For example, the graphic shows Neomycin as a powerful antibiotic for Gram-negative bacteria, showing ‘capturing’ all the space and inhibiting the bacterial growth. To show the ‘capturing’ I used spider chart instead of something else. The color of the text showing Gram strain is in purple for positive and in pink/red for negative as the color of bacteria after gram staining. This is can help is quick recognition.
* As the MIC data is not linear. I applied the following formula to transform the data so that it can tell the above mentioned stories and can be fitted into the space. 
```
Y = -1*(-4+log(X))

It maps the MIC values as:

0.001	to	7
0.01	to	6
0.1		to	5
1		to	4
10		to	3
100		to	2
1000	to	1

The log(base 10) is used to linearize the data. -4 helps in having all the data on one side of the axis. Then the -1 over whole takes it to the positive domain. The mapping also made it easier for the graphic toolkit to represent using levels 1 to 7.
```
* I also tried using external database for shape of the bacteria to get some patterns, but couldn’t in the specified time constrain. As, Bacteria can have a Cocci or Bacilli or other shapes independent of the gram. I think using the shape data (as this is usually the next step followed in Labs after Gram staining) can be the next step in improving this visualization, and this might give it a tree-like structure that can be easy to follow. Also, due to strongly separating into two graphics the visualization makes it difficult to perceive any relation between two gram staining (if any). 

