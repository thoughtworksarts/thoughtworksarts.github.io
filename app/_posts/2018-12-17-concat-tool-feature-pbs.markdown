---
title  : "PBS Features ThoughtWorks Arts Resident &amp; Interaction Technology"
---
Over the summer ThoughtWorks Arts collaborated with dancer and roboticist Catie Cuan, exploring new modes of human-robot interaction.

{% include youtube.html id='uyrIfk30LaQ?start=30' ratio='55'
   caption='PBS NewsHour feature of Catie Cuan and CONCAT' %}

ThoughtWorks developers created a 3D visualization toolkit, enabling Catie to rehearse her own bodily movements alongside those of industrial-scale robots.

<!--excerpt-ends-->

The software, named [CONCAT](https://github.com/thoughtworksarts/concat/), was created by ThoughtWorks software developers [Andrew McWilliams](/bio/andrew-mcwilliams), [Andrea Allen](/bio/andrea-allen/) and [Felix Changoo](/bio/felix-changoo/).

{% include image.html file='catie-crr.jpg'
   caption='Catie working on-site with the industrial robot arm' %}

The tool plays back carefully choreographed sequences designed for a 15 foot "ABB IRB 6700" robot at the [Consortium for Research and Robotics](http://consortiumrr.com) in the Brooklyn Navy Yard. It allows Catie to rehearse, record and alter choreographic elements both on and off-site with large industrial robots.

Upon completion of her residency at ThoughtWorks, Catie took CONCAT to work with as part of her PhD at Stanford University, where PBS NewsHour [interviewed her about her work](https://www.pbs.org/newshour/show/how-these-humanities-graduates-are-finding-jobs-in-silicon-valley).

{% include image.html file='felix-andy.jpg'
   caption='ThoughtWorks developers Felix Changoo and Andy Allen' %}

The NewsHour team were interested in Catie's work because of the potential impacts of public perception of robots, especially as related technology becomes increasingly present in the workplace.

A [Kinect depth sensor](https://developer.microsoft.com/en-us/windows/kinect) is used to monitor Catie's movements in real-time, generating a 3D representation on screen alongside the virtual robot arm.

{% include image.html file='concat.jpg'
   caption='The CONCAT software alongside the ABB robot' %}

The software behind the project was written in [openFrameworks](http://openframeworks.cc), a C++ creative coding useful for creating fast prototypes incorporating hardware interfaces and computer graphics. The tool relies on the [ofxKinectV2-OSC plugin](https://github.com/microcosm/ofxKinectV2-OSC) written by ThoughtWorks developer Andrew McWilliams.

All of the software used in creating CONCAT is free and open source.