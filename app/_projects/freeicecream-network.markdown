---
title       : Freeicecream.network
type        : residency
season      : Spring 2022

description : Experimental performance exploring how our desire for connection and delicious treats entangles us with networks of information technologies.

thumb-alt   : TBC TBC TBC

image       : /images/projects/freeicecream-network/og.jpg

artist      : h0t club

team :
  - name : Kate Bergstrom
    role : Director
    position : "1"
  - name : Martim S. Galvão
    role : Artist & Developer
    position : "2"
  - name : Miller Puckette
    role : Artist & Developer
    position : "3"
  - name : Xavier García
    role : Robotics Engineer
  - name : Harish Kumar
    role : Robotics Software Developer
  - name : Rushikesh Halle
    role : Robotics Engineer
  - name : Kevin Lo
    role : Production Technician
---
Freeicecream.network is an experimental multimedia performance that explores how our desire for connection and delicious treats entangles us with networks of information technologies. 

{% include youtube id='hrOu1iuTfEA' ratio='56'
   caption='A sample of the *Freeicecream.network* live performance' %}

h0t club features Thoughtworks residents Miller Puckette (author of PureData), Kate Bergstrom, and Martim S. Galvão, along with other collaborators.

Throughout h0t club's world premiere of freeicecream.network at CounterPulse in San Francisco, three human performers and three telepresence robots (appearing as orange traffic cones) communicate through sensors and cameras placed throughout CounterPulse’s theater.

{% include image file='flyer.jpg'
   alt='A flyer montage with grinning faces, ice creams and a cartoon tongue licking an ice cream, overlaid with a computer mouse icon and on-screen windows, with the word SALE in all capital letters'
   caption='Flyer image for the premiere' %}

These interactions led to a distributed decision-making process, triggering videos and events during the performance. The emergent events were defined by a changing set of system-wide modes, each of which introduced new interactive logics between performers, robots, and participants.

The performance revolves around consumer/audience driven enthusiasm for “free ice cream” (and other "free" products and services). Audiences are able to simultaneously engage with an interactive hybrid network that underpins the performance. Audiences receive “free” ice cream as a reward for participation.

## The international development team

During h0t club’s 16-week residency at Thoughtworks Arts and CounterPulse, the artists developed performing, telepresent robots which respond to sensors and cameras, moving and communicating with one another via a wireless network. This hybrid virtual/physical network of human and non-human agents is influenced and guided by the emergent behaviors of the system’s inhabitants.

{% include image file='robot-assembly.jpg'
   alt='A partially assembled robot with wheel and wires hanging out, alongside soldering tools'
   caption='A robot during assembly by Thoughtworks engineer Harish Kumar' %}

Working with Thoughtworks developers in India and Chile, the team are developing new autonomous systems to drive the traffic cones. They are using LiDAR sensors on the robots to wirelessly transmit telemetry data to a Raspberry Pi "central computer", which uses ROS2 to map the space and plot trajectories and choreographies.

The team are supported by [Engineering 4 Research (e4r)](https://www.thoughtworks.com/engineering-research), an initiative of Thoughtworks India. The e4r community are committed to advanced research in the fields of radio and optical astronomy, autonomous vehicles, genomics, molecular dynamics and urban sciences. Among e4r's research projects are robotics navigation and wayfinding systems, topics they are building upon for the collaboration with h0t club.

The individual robots driving the traffic cones contain sensors that detect environmental objects. The central computer receives this data and is capable of localizing the robots, predicting the path the robots should move next. This data is sent back to the bots, controlling each motor so that the bot moves to the destination.

{% include image file='dance.jpg'
   alt='Three performers wearing orange jumpsuits dancing in blue light'
   caption='Humans and robots perform ice cream dance' %}

During live performances, manual controllers are given to audience members to allow them to override control of the robots.

## Onsite at CounterPulse

h0t club worked closely with CounterPulse, especially in the lead-up to the performance. As co-sponsors with Thoughtworks Arts on the residency, CounterPulse provided logistical and technical support in relation to two public events during the residency timeline.

> I've long been interested in artworks that intersect the body and technology - seeing the body as the most sophisticated technology most people can operate while at once diametrically opposed elements of the human experience. h0t club's casting of the body as a cog in the machine, equivalent to the spinning robot traffic cones and hidden cameras brought this relationship into clear sight. This works experiments with transgressing and reinforcing this age old boundary tips of new questions and concerns of what is possible when these two superpowers of humankind are brought together<br><span class='quotee'>— Julie Phelps, Artistic & Executive Director of CounterPulse</span>

Freeicecream.network premiered as the headline event at the _Innerspace: Homecoming_ gala in May 2022. The work has helped set the stage for upgrades to CounterPulse technical infrastructure and supports the local effort to [purchase the CounterPulse building in San Francisco](https://counterpulse.org/event/buyourbuilding/).

Plans for upcoming iterations of Freeicecream.network will invite participants to take the place of the performer, exploring the space and human-computer interactions firsthand.