---
title       : CATENA
type        : residency
season      : Winter 2022

description : A hybrid in person and online performance of improvisational music and movement integrated into denseley textured light and projections.

thumb-alt   : A dancer in a red room covered in white projected light dots

image       : /images/projects/catena/og.jpg

artist      : Dilate Ensemble

team :
  - name : Carole Kim
    role : Artist
    position : "1"
  - name : Gloria Damijan
    role : Musician
    position : "2"
  - name : Scott Miller
    role : Musician & Engineer
    position : "3"
  - name : Luisa Muhr
    role : Vocalist & Performer
    position : "4"
  - name : Jon Raskin
    role : Musician & Engineer
    position : "5"
  - name : Sriram Viswanathan
    role : Developer
    position : "6"
  - name : Kevin Serrano
    role : Technical Support
    position : "7"
---
CATENA was a hybrid in person and online performance of improvisational music and movement integrated into densely textured light and projections.

{% include youtube id='A-DZIkJaujc' ratio='56'
   caption='A recording of the *CATENA* livestream performance' %}

In the performance, musicians and dancers interacted with audience members in two different physical spaces inside CounterPulse’s Tenderloin building in San Francisco. Realtime sound and video were remotely synchronized and augmented in Minneapolis, and livestreamed to audiences at home.

CATENA interrogates the imprint of physical and virtual spaces, and what the bodies within them can be, given the harsh restrictions imposed during Covid lockdown.

{% include image file='catena.jpg'
   alt='A still image of colored electric graphic overlay lines emanating from a point where a silhouetted figure stands'
   caption='A still from CATENA' %}

Dilate Ensemble built a customized network system throughout the course of their 16-week residency. The network linked different sound environments within the CounterPulse building, sending their audio feeds for processing to electronic musician Scott Miller, based remotely in Minnesota.

Sonic variables like amplitude, frequency, physical characteristics of the room, speaker placement, and microphones impacted simple behaviors producing complex layered outcomes.

{% include image file='shinichi-iova-koga.jpg'
   alt='A still image of a male dancer wearing white in a red lit room with abstract white projected visuals'
   caption='A still from the CATENA performance with guest dancer Shinichi Iova-Koga, photo by Robbie Sweeny' %}

CounterPulse’s upstairs studio, as well as the dedicated project space in the basement were animated by the audio-reactive video projection installations of artist Carole Kim. Dilate Ensemble was also joined by special guest dancer and choreographer, Shinichi Iova-Koga.

## Extension for 4 channel audio in QuackTrip
During the residency Thoughtworks engineer Sriram Viswanathan upgraded Dilate Ensemble's PureData patches by writing an extension to the low-latency uncompressed audio interconnections system [QuackTrip](http://msp.ucsd.edu/tools/quacktrip/). This enabled the performance of a realtime 4 channel audio. Previously, the existing PureData patch only supported a 2-channel audio Input/Output that limited both the performance and the artist. 

{% include image file='puredata.jpg'
   alt='A screenshot of the PureData programming interface showing boxes with numbers and code words connected to each other with lines' %}

The extension was completed with the help of Miller Puckette, the creator of PureData, and tested by the Dilate Ensemble members. The patch, written in a way specific to Dilate Ensemble [has been made public](https://github.com/FrailWords/quack_trip/blob/main/documentation/CHANGES.4.CHAN.md) with explanatory notes [so others can reference](https://github.com/FrailWords/quack_trip/blob/main/documentation/CHANGES.UI.CONTROLS.md) these upgrades if interested.

## Production in a Pandemic
During the residency period the planet was dealing with waves of pandemic-related lockdowns. Dilate Ensemble worked to navigate this turbulent environment by constantly adjusting and retooling the scope and contours of their  vision. The outcome, CATENA, was shaped heavily by this turbulence and re-contouring.

For the next phase the artists will pursue elements of the piece that were most difficult to achieve because of lockdown.

> We did learn a great deal from our time at CounterPulse about how robust our technical infrastructure is, and our ideas based on this infrastructure. By having to revise our presentation model in response to the rapidly shifting safety measures required for public performances at the height of the Omicron wave in the US, we tested several variations of mode in quick succession.
> 
> Presently, we are looking for a venue to mount CATENA so we can fully realize the work. We are also testing and implementing what we learned about network-based audio ecosystems, performer-audio interaction, and performer-video integration over a network.<br><span class='quotee'>— Dilate Ensemble</span>

Dilate Ensemble worked closely with CounterPulse, especially in the lead-up to the performance. As co-sponsors with Thoughtworks Arts on the residency Julie Phelps, the Artistic & Executive Director of CounterPulse said:

> Hybrid communication is now and will continue to be a prevalent aspect of our daily lives. CounterPulse was excited to work with Dilate Ensemble as the project deals with urgent and timely investigations of how to navigate an accumulative landscape of shifting societies and diversified communication. Additionally, CATENA intersects with CounterPulse’s legacy of incubating experimental new works and resourcing artistic communities on the edges of transdisciplinary collaboration, and more recently, the organization's work to innovate presentation models amidst the ongoing pandemic.<br><span class='quotee'>— Julie Phelps, Artistic & Executive Director, CounterPulse</span>

CATENA was the first project at CounterPulse to utilize multiple spaces simultaneously in both an in-person and online performance. The work has helped set the stage for upgrades to CounterPulse technical infrastructure and supports the local effort to [purchase the CounterPulse building in San Francisco](https://counterpulse.org/event/buyourbuilding/).

{% include image file='dilate-ensemble-shinichi-iova-koga.jpg'
   alt='A black and white still of a silhouetted performer reaching through cloudy projected visuals' %}

## Credits
**Dilate Ensemble:**
Carole Kim (California): video installation, direction
Gloria Damijan (Vienna): extended toy pianos, percussion
Scott L. Miller (Minnesota): Kyma, electronics
Luisa Muhr (New York): voice
Jon Raskin (California): sax, voice, concertina, electronics, recycled materials
With special guest: Shinichi Iova-Koga: dance

**Production:** Thoughtworks Arts, CounterPulse, Ellen Pearlman, Andy McWilliams, Kevin Lo, Julie Phelps

**Special Thanks:** Sriram Viswanathan and Kevin Serrano