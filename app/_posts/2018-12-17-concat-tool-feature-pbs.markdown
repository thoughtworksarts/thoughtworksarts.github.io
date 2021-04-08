---
title  : "Robotics Resident Catie Cuan &amp; Interaction Technology"
tags   : [output]
---
Over the summer ThoughtWorks Arts collaborated with dancer and roboticist Catie Cuan, exploring new modes of human-robot interaction.

{% include image file='catie-crr.jpg'
   caption='Catie working on-site with the industrial robot arm' %}


ThoughtWorks developers created a 3D visualization toolkit, enabling Catie to rehearse her own bodily movements alongside those of industrial-scale robots.

<!--excerpt-ends-->

The software, named [CONCAT](https://github.com/thoughtworksarts/concat/), was created by ThoughtWorks software developers [Andrew McWilliams](/bio/andrew-mcwilliams), [Andrea Allen](/bio/andrea-allen/) and [Felix Changoo](/bio/felix-changoo/).

{% include image file='felix-andy.jpg'
   caption='ThoughtWorks developers Felix Changoo and Andrea Allen' %}

The tool renders carefully choreographed sequences designed for a 15 foot "ABB IRB 6700" robot at the [Consortium for Research and Robotics](http://consortiumrr.com) in the Brooklyn Navy Yard. It allows Catie to design and rehearse her movements both on and off-site with large industrial robots.

Catie's residency demonstrated CONCAT’s usefulness for creative movement research, and upon completion of her residency at ThoughtWorks, Catie began her PhD in Mechanical Engineering at Stanford University.

{% include youtube id='uyrIfk30LaQ?start=30' ratio='55'
   caption='PBS NewsHour feature of Catie Cuan and CONCAT' %}

Catie’s work recieved considerable media interest due to the increasing importance of the public perception of robots, especially as related technologies proliferate in the workplace. Catie’s work [deals with these themes](/blog/movement-industrial-robotic-arm/), investigating the communication flows between human and robotic agents.

In addition to rendering robotic movements, CONCAT uses a [Kinect depth sensor](https://developer.microsoft.com/en-us/windows/kinect) to monitor Catie's movements in real-time, generating a 3D representation on screen alongside the virtual robot arm.

{% include image file='concat.jpg'
   caption='The CONCAT software alongside the ABB robot' %}

The software behind the project was written in [openFrameworks](http://openframeworks.cc), a C++ creative coding platform useful for creating fast prototypes incorporating hardware interfaces and computer graphics.

The tool relies on the [ofxKinectV2-OSC plugin](https://github.com/microcosm/ofxKinectV2-OSC), also written by Andrew McWilliams as a community contribution. All of the software used in creating CONCAT is free and open source.
