---
layout    : simple-post
title     : "Art-A-Hack&#8482; Report"
bodyid    : "report"
bodyclass : "content post"
---
<div class="info large">June-July, 2014</div>
<div class="info small">Principles: Ellen Pearlman, Andy McWilliams</div>

It's not the just the end result, it's also the process. Art is privileged here, because in this process there is no right or wrong. Art is a good place to challenge people.

<figure>
	<img src="/images/reports/summer-2014/andy-mcwilliams.jpg" alt="Andy McWilliams draws it out" />
	<figcaption>
		Andy McWilliams draws it out
	</figcaption>
</figure>

In this inaugural iteration of Art-A-Hack, participants were grouped based on their interests and ideas. Regardless of discipline or subject area, all groups have something in common - they start off on Day 1, and finish up at some end-point.

However, everyone has a different journey. That journey, more than anything else, shapes the outcomes that the teams end up with.

The journey is into new territory - along the way there are false starts, experiments, learning, creativity, and problem-solving. These routes and the thinking behind them are important. They are often just as interesting, informative and useful as what is eventually produced.

Some people have Monday to Friday to work on their ideas outside of Art-A-Hack group sessions, others only have a few days in total. Some participants found themselves having to re-think their ideas from scratch, where others were able to free-wheel without planning too far ahead.

Art-A-Hack has been encouraging people to talk about restrictions and restraints as well as ideas and prototypes. We encourage dialogue around how they responded, how they navigate, and their creative process.

<h2><a href="../google-glass">Privacy and Google Glass</a></h2>

Instant access to personal information about everyone you meet has become a real possibility with the rise of wearables and the pervasiveness of online identity tracking.

<figure>
	<img src="/images/reports/summer-2014/1.jpg" alt="Mark Bolotin, Billy Keefe, Chantel The Magnificent" />
	<figcaption>
		Mark Bolotin, Billy Keefe, Chantel The Magnificent
	</figcaption>
</figure>

The team used Google Glass to source data about selected individuals and make that data available to the wearer. This enables anyone wearing the Glass to become "clairvoyant", able to discover personal insights into those she interacts with in real-time.

The team crafted a performance piece in which a fortune-teller, Chantal the Magnificent, scammed an unsuspecting participant. Personal information about the participant was transmitted to Chantal via her Google Glass. This information is also projected onto a screen behind the participant’s back, so that the audience can clearly see the scam in action.

For one subject the team was able to locate every sex offender within one block of their home, and locate their mortgage. All of this information was legal and free on the internet. Another person with an open Facebook profile was exposed for being an Elvis Presley fan. Even for those with a closed Facebook profile, the team was able to show a fairly intrusive profile from public data.

<h3>Technical Challenges</h3>

Sending simple information to Google Glass was difficult without an experienced Java developer. Hardware issues arose, but the team persevered and found an extension for Google Chrome that allowed them to scrape internet data.

The team hacked a Google Glass communication app prototype, but were unable to complete their hack without the help of a domain expert. Improvising, they still made the scraped data into a conceptually rich and engaging performance work.

<h2><a href="../kinect-and-oculus-mashup">Oculus, Kinect and Extended Reality</a></h2>

What happens when we create a virtual boundary that combines two levels of perceptual reality? What happens when we create a virtual boundary through which we can view a window into reality?

<figure>
	<img src="/images/reports/summer-2014/2.jpg" alt="Jason Levine &amp; Noah Pivick" />
	<figcaption>
		Jason Levine &amp; Noah Pivick
	</figcaption>
</figure>

These were the questions Jason Levine and Noah Pivick addressed in their experiments mashing the Kinect depth sensor with the Oculus Rift.

This team searched for the limitations and sweet spots. They explored innovative ideas such as offering 'reverse views' of the world, and making subtle shifts in the representations of the world experienced by the viewer.

The challenge was how to keep the viewer from experiencing a common side effect of The Rift, nausea. Fortunately, the team succeeded.

<h3>Technical Challenges</h3>

The team created the mashup in the OpenFrameworks creative coding environment, which already had addons available for both Kinect and Oculus. The main technical challenge was making the two devices work together.

The hardware failed in week one, as a new power supply was needed for the Oculus, illustrating the types of the real problems encountered when working with engineering and electronics.

The team tried using the Kinect with mirrors and sunlight, but these light sources interfered with its depth sensing capabilities. However, a particular 'Kinect aesthetic' is apparent from the incompleteness of the depth and camera data. 

<h2><a href="../depth-boundaries-and-human-interaction">Depth, Boundaries and Human Interaction</a></h2>

This team explored the possibilities of inferring human body shapes in public space in real-time. They created 'virtual breakpoints' which visitors can walk through.

<figure>
	<img src="/images/reports/summer-2014/3.jpg" alt="Tyler Parker, Joelle Fleurantin, Diana Castro" />
	<figcaption>
		Tyler Parker, Joelle Fleurantin, Diana Castro
	</figcaption>
</figure>

This means walking from a virtual sunny beach, to a city at night. All the time, a shadowy silhouette follows along. You can try to approach the mystery figure, but she or he was always one step ahead. 

<h3>Technical Challenges</h3>

Most of the coding was done in openFrameworks and the sound design was created with Abelton Live. The visuals, including characters, players, stages, and a scene were created in the 3D program Blender.

A bug was discovered from one of the plug-ins' relationship with the Mavericks OS: If you don’t keep the computer mouse moving all the time, the computer freezes and locks up.

Joelle found that learning and mastering OpenCV and blob tracking were big technical hurdles considering the short timeframe provided. Tyler had webcam issues with what is referred to as a squiggly blob and made the rest of the settings into an XML file.

<h2><a href="../oculus-and-fantasy-world">Oculus Rift and Fantasy World</a></h2>

What innovations can be made on immersive Virtual Reality experiences like Oculus Rift? How can the experience become more physically interactive?

<figure>
	<img src="/images/reports/summer-2014/4.jpg" alt="Sophie Kravitz, Martha Hipley and Takafumi Ide" />
	<figcaption>
		Sophi Kravitz, Martha Hipley and Takafumi Ide
	</figcaption>
</figure>

This team investigated nuances of gesture, focusing on using the hands, how the body orientates in space and use of torque, or bodyweight.

To do this, they hacked the accelerometer from a cellphone to prototype a weight-distribution controller. This meant if you leaned forward your virtual character moved forward. If you leaned backwards, your character stepped back.

All three collaborators came from creative backgrounds, but decided early on to embrace the technology in terms of its development aspect. They were on a steep learning curve, hacking using the Unity 3D modeling / programming environment, and the Leap Motion hand-gesture controller, all over the course of just three Saturdays.

The team will be showing their project at World Maker Faire NYC in September.

<h3>Technical Challenges</h3>

The team brought the Leap motion sensor into a freshly-modeled Oculus world, so that you can see your hand and fingers. They wanted to hold objects in the virtual world through manipulating gestures with the Leap Motion but were unable to make it work within the time constrains.

Using an exercise balancing disc, the team created a type of full-body balance sensor. However from a user experience standpoint, stabilizing a balancing disc while standing on it wearing the Oculus Rift was difficult.

The project was coded in C# and Javascript, which was new to the team. They used a smartphone app called Unity Remote to link the phone's accelerometer with Unity 3D.

<h2><a href="../public-space-and-theater">Public Space and Theater</a></h2>

How can computing and portable sound devices change the way we communicate in public spaces? This team explored that question relentlessly, posing and critiquing several location-specific augmentations.

<figure>
	<img src="/images/reports/summer-2014/5.jpg" alt="Annie Berman and Francisco Javier Molina" />
	<figcaption>
		Annie Berman and Francisco Javier Molina
	</figcaption>
</figure>

The team came to be captivated by the Whispering Gallery at Grand Central Station. This space has a natural acoustic property that emerges from the arched ceiling architecture. If you stand in one corner and speak, somebody way over in the other corner can listen and hear you clearly - even though those people standing in-between cannot.

A concept emerged from the idea that these 'hidden conversations' need not be lost to time. A small, portable microphone, speaker, and small battery-powered computing device could allow people to leave messages behind that can be experienced after-the-fact by those on the opposite wall.

In a way, this evokes Grand Central Station's rich history. Countless conversations, lives, hopes, dreams and desires have passed through this space. This team's work will allow a little of that to be captured and remembered, even for a few moments longer.

<h3>Technical Challenges</h3>

The team learned to set up a Raspberry Pi, a small, low-powered computing device.  The Raspberry Pi/Python combination is well-supported online, and one of the team's insights is that all that was needed was time and patience. Patience to read forums and follow examples, download and unpack libraries. Time to try, experiment, communicate online, and try again.

Working with a low-powered device means learning about constraints. These were met by using a powered USB external hub, and USB input devices (keyboard, mouse, microphone) that were compatible with the Pi (less than 1mA of current and 3.3V).

<h3>Logistical Challenges</h3>

The team were set on utilizing the Whisper Gallery at Grand Central Terminal and knew that they needed to secure the necessary permissions. This is because mounting unattended electronics in such a high-profile public space would be considered a security risk.

In order to simplify the application process, the piece was designed to be portable, offline, and battery-powered with a light technology footprint.

<h2><a href="../buddhism-meditation-and-mind">Buddhism, Meditation and the Mind</a></h2>

Eva Lee applied to Art-A-Hack proposing to create an installation work visualizing electroencephalographic (EEG) brain data culled from neuroscientist Dr. Jose Raul Muradas' research on prayers for self compared to prayers for others.

<figure>
	<img src="/images/reports/summer-2014/9.jpg" alt="Eva Lee and Ellen Pearlman" />
	<figcaption>
		Eva Lee, various programmers, Ellen Pearlman
	</figcaption>
</figure>

The data displayed numeric similarities and differences that occurred when subject participants meditated on self versus meditating on others. Different programming languages were investigated as a means to visualize data to represent aspects of human identity and consciousness.

During the process Ellen Pearlman worked with Eva as different programmers lent their expertise on various methods of representation. The results were process-oriented prototypes that included sonic and animated sketches.

<h3>Technical Challenges</h3>

In one presentation, the data translated brain frequencies into tones resulting in 100 short MP3s combined with spectrum visualizations. In another presentation the data sets were displayed as interacting particles built in Maya 3D.

<h2><a href="../reflecting-on-time">Reflecting on Time and Space</a></h2>

Olga Ast is a designer, author and interdisciplinary artist. Her practice investigates connections between space, time and information. Rolf Levenbach is an ex-teacher (ITP at NYU) and ex-computer tech support person (Bell Labs, Rutgers University, and the American Museum of Natural History).

<figure>
	<img src="/images/reports/summer-2014/6.jpg" alt="Olga Ast and Rolf Levenbach" />
	<figcaption>
		Olga Ast and Rolf Levenbach
	</figcaption>
</figure>

The pair investigated some of Olga's ideas on the emergence of the solar system using a simulation environment called NetLogo. Olga's previous explorations into the nature of time were part of the background of the collaboration, an extension of many years of meeting at various art & science events.
 
Olga created a physical installation which subverted the intended purpose of human-motion detection and the light sensitive display hardware called ‘Octolively’. Ast noticed Octolively’s on-board sensors responded more vigorously to reflective physical surfaces than to the movement of human hands. She created an installation where different reflective materials and surfaces dangled in front of a wall-mounted Octolively, activating its lights as they swayed in the breeze.

Both at Thoughtworks and outside, Olga and Rolf tried different methods of creating emergent behavior starting with a spiral of points, and adding other behaviors governing the survival of points and the clumping of points. NetLogo allows the adept modeler to use a variety of tools to do agent-based, pattern-based and mathematical modeling and develop particle systems, generative art, or cellular automata without the need for complicated libraries or APIs. Time can be modeled as continuous or by 'tick'. NetLogo can also communicate with external hardware such as the GoGo Board or the Arduino. Rolf investigated the possibility of programming the OctoLively via an AVR programmer (which could be an Arduino), which would allow the use of the OctoLively as a gesture controller or a display device for NetLogo.

<h3>Technical Challenges</h3>

In the Octolively installation, many technical challenges were circumvented. This was not about creating a new 'prototype' with the Octolively but about investigating the properties and by-products of existing technology.

NetLogo allows the easy use of user interface elements such as sliders to allow parameter manipulation in real time, and histograms or other plots to display global variables of interest. Even though they restricted themselves to a two-dimensional model (3-D NetLogo is available but an additional learning curve), it was hard to understand the structure of a world with hundreds of thousands of 'agents'.

<h2><a href="../smart-technology-and-environments">Smart Technology and Environments</a></h2>

How can the ubiquity of smartphones change the way we think of the environments around us? How can geo-location change the way we engage with space?

<figure>
	<img src="/images/reports/summer-2014/8.jpg" alt="Andrew Ritchie and Chinazo Rena Anakwe" />
	<figcaption>
		Andrew Ritchie and Chinazo Rena Anakwe
	</figcaption>
</figure>

This team proposed an adventure, similar to a scavenger hunt. This would use a technique called geocaching to allow smartphone users to leave and discover treasures in marked physical locations for other users to interact with.

<h3>Technical Challenges</h3>

For locating users, the team experimented with Estimote Beacons. They discovered beacons to be quite cumbersome for this task compared with GPS.

The idea was that a smartphone app would pull the user's current location from GPS, and would query a backend API to discover treasures. The first iteration from the user experience perspective would be to allow the user to share (or 'drop') a treasure in that location. Then, other users could see the treasure and respond to it.

A big part of this challenge is content management. An API back-end was built that can store locations, and the team is working on an iOS app that can hit the API and send data back. This is a development-intensive concept and the team found they hit time constraints.

<h2><a href="../wearable-tech-and-performance">Wearable Technology and Performance</a></h2>

In what ways can the haptic possibilities of smartphones be channeled into dance? How can custom-designed wearables enhance or change the nature of a performance?

<figure>
	<img src="/images/reports/summer-2014/7.jpg" alt="Aaron Trocola and Kate Sicchio" />
	<figcaption>
		Aaron Trocola and Kate Sicchio
	</figcaption>
</figure>

This team set out to answer these questions, and this resulted in a chest-mounted performance wearable which allows a dancer's body to control sound.

During this process the team found themseleves confronting divergent models of creative practice. In one model it is important to think carefully and lock in a design early on. This helps because of the constraint of time required for manufacturing. In this case the team were 3D-printing a large wearable chest-mount.

In another model, creative practice is open-ended, exploratory, intuitive, and open to change. This approach is generally favored in order to produce a less contrived result, and is fundamentally different in nature from designing up-front.

<h3>Technical Challenges</h3>

In the final performance piece, a smartphone on the chest-mounted wearable sent accelerometer data via TouchOSC. The data was interpreted in Isadora, via WAV file playback with filters.

Body orientation was used to trigger sound, and the accelerometer to modulate pitch. However, the dancer felt that the performance only enabled her to dance the technology, and did not add to her performance vocabulary. This poses interesting questions about how that vocabulary can be addressed given specific constraints.

As discussed above, 3D-printing a large werable in a short project is a significant constraint. The team started out with a programmer, who left the team. This added more pressure as there were technical challenges to overcome.