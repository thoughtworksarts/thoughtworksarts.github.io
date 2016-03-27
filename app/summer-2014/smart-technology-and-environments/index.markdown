---
layout    : simple-post
title     : "Art-A-Hack&#8482; Team Report"
bodyid    : "report"
bodyclass : "content post"
---

<h2>Smart Technology and Environments</h2>

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