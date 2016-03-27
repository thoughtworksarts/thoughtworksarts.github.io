---
layout    : simple-post
title     : "Art-A-Hack&#8482; Team Report"
bodyid    : "report"
bodyclass : "content post"
---

<h2>Reflecting on Time and Space</h2>

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