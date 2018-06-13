---
title     : "How Artificial Intelligence is Transforming the Criminal Justice System"
author    : Stephanie Weber
tags      : riot
---

Many of us are familiar with the idea that Artificial Intelligence systems are regularly making benign decisions, like recommendations on Netflix or Amazon. What about decisions that have a significant impact on someone's life though?

{% include image.html file='criminal-justice-1.jpg'
   alt='How Artificial Intelligence is Transforming the Criminal Justice System' %}

Should AI systems be used in life-changing situations, like criminal sentencing?

<!--excerpt-ends-->

In fact, it's already happening, and has been for several years. It's about time we look at this tech and consider: what are the risks and what are the benefits of AI in criminal sentencing? Which problems does AI reinforce, and which does it alleviate?

These questions came to light for me as part of my research work on the ThoughtWorks Arts Residency, where I was contributing to an AI system for [resident Karen Palmer](/blog/karen-palmer-ai-residency/). What I discovered was both shocking and fascinating.

One of the most important considerations in judicial decisions, from setting or denying bail to sentencing, is "risk of recidivism" — the likelihood of reoffending. Prior to using algorithms to make these decisions, something which has grown over the last 30 years, risk of recidivism along with flight risk determination was left to the subjective decision-making and gut choices of individual judges.

All human decision-making is susceptible to bias, and therefore despite the best of intentions, the [judicial system is seeded with bias](http://aja.ncsc.dni.us/publications/courtrv/cr49-2/CR49-2Peer.pdf).

How has the introduction of AI impacted this process? To understand this, first let's look at the "traditional" process, without AI.

## The story before AI

Imagine that you have been arrested and that you are suspected of being involved in an armed robbery. You are innocent, but you bear a resemblance to the suspect, live in the area, and your car matches witness descriptions of a vehicle involved.

{% include image.html file='criminal-justice-2.jpg'
   caption='Photo: [Miss Nixie](https://www.flickr.com/photos/nixiepixel/5590738640/)' %}

After arrest and booking, you'll appear in front of a judge who will determine the conditions of your bail. Traditionally, the judge might consider relevant information such as whether or not you're believed to be a flight risk, and the severity and nature of the crime. However, human aspects come into play as well. If it's early in the morning, or after a scheduled break, [the judge may be more lenient](https://www.scientificamerican.com/article/lunchtime-leniency/) towards you.

Let's imagine it's just before lunch and this unconscious inequity befalls you. The judge sets your bail at an amount you can't afford, and you will spend the time between now and your trial in jail. This is a common scenario: 82% of defendants who spend pretrial time in jail are there because they [could not pay bail](https://www.bjs.gov/content/pub/pdf/prfdsc.pdf).

This is one of the crucial issues of criminal justice — although you haven't been found guilty of a crime, you have found yourself mixed up in the criminal justice system, and the impacts on your life are already manifesting themselves.

The [average elapsed time](https://www.bjs.gov/content/pub/ascii/scscf96.txt) between arrest and conviction is 6 months. It's fairly likely that you lose your job. It's also possible you could lose custody of your children, get behind on bills causing damage to your credit, and even lose your home. This impact is especially devastating for those people who are already struggle to make ends meet.

Further, although you are innocent, you have now spent half a year locked up with violent and other high risk individuals. You have learned how to survive on the inside, and as a result you now have a substantially [increased likelihood of committing a crime](https://www.themarshallproject.org/2015/08/04/the-new-science-of-sentencing) on the outside.

## Another possible outcome

How _might_ your story be different if the court you were in used AI?

Let's reset to the beginning of your story. You've been arrested and you're at the bail hearing. Based on factors such as prior convictions and arrests, as well as your age and the current pending charge, the judge receives a report from the AI software showing you're a low flight risk. What are some of the benefits and drawbacks to this change in the story?

First, some human bias may be removed. While it is the judge who makes the final decision, having this AI-driven report as a baseline means the outcome was less likely to be impacted by when your bail hearing occurred, or how the judge was feeling that day. Additionally, algorithms that remove factors like gender, race, and geography, may take out some of the implicit bias that pervades human decisions.

There is also likely an efficiency gain. Having the initial report from the AI could help to speed up the process. Software processes information much more quickly than a human deliberating on the matter. Therefore judges can hear more cases, which means people could spend less time waiting in jail for bail hearings, and taxpayer money would be spent more efficiently.

However, it is necessary to look at the issue of bias more deeply. The AI system may well have eliminated _this specific judge's_ implicit biases, but it also incorporated the [aggregate biases of all of the decisions it was trained on](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing). Many people instinctively think of computers as being objective computing machines — like calculators that always give you a logical result. AI systems are anything but, and research has shown that they [are as riddled with inherent bias as the human decisions that trained them](https://www.technologyreview.com/s/608248/biased-algorithms-are-everywhere-and-no-one-seems-to-care/). Therefore, they will [emulate those decisions in practice](https://www.technologyreview.com/s/608986/forget-killer-robotsbias-is-the-real-ai-danger/), biases and all.

This is not an intended outcome of AI, but rather an inherent, immovable feature of the technology itself, and this is something which is not generally well-understood outside of specific technology communities.

It can be argued that over time, as the accuracy of the AI increases, it may minimize the bias to such a degree that it is statistically insignificant. However, there are a number of complications to that argument. First, this is not something which is easy to measure, and systemic bias [has been observed](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) and studied in existing AI systems in practice.

{% include image.html file='criminal-justice-3.jpg'
   caption='Photo: [Falkenpost](https://pixabay.com/p-1652896/)' %}

Further, the companies who make AI systems for criminal justice are profit-making, and regard their algorithms as trade secrets. People outside the companies are generally unable to review the code.

Given all of this, how do you think the story of your arrest might end? Will you be saved from a judge's personal biases? Will you fall victim to the embedded bias in the AI system? The truth is, either outcome is possible.

## What happens next?

How can we take advantage of the benefits of AI in judicial decision making while ensuring that we aren't codifying and further embedding bias into an already flawed system?

To start, there should be more thorough research into bias in AI, and the impacts of using AI in criminal justice. There are [some groups and individuals](https://www.ajlunited.org/) who are already tackling this challenge. Further, developers should look more deeply at who is participating in the creation of the software to ensure that multiple perspectives and viewpoints are being considered and included. This is a challenge not only in the development of AI, but in the [tech industry as a whole](http://www.informationisbeautiful.net/visualizations/diversity-in-tech/).

What would inclusive development look like? Companies could workshop with people  representing different races, genders, geographies, and socioeconomic statuses, as well as individuals who have been arrested, imprisoned, and felt the impact of bias in the criminal justice system.

Another important change is having a more transparent development process. The lack of transparency was [brought before the Supreme Court](http://www.scotusblog.com/case-files/cases/loomis-v-wisconsin/), however the state court's initial decision was upheld, because the algorithm was viewed as only being _part_ of the decision-making process.

There are also factors that agencies could consider when adopting AI software written by a third-party vendor. They could avoid hidden "black box" software, and ask critical questions of the company producing the software. Specifically of the AI, they could ask about how and on what data their model is trained. Beyond the scope of the AI, they could choose to engage organizations that are independent of the prison industry and do not benefit from high incarceration rates.

Processes could be put in place for oversight, monitoring, and accountability of the systems to ensure their integrity over time. Oversight and integrity should also extend to the features upon which the AI is trained. Finally, education and sharing knowledge might be the most accessible way for an individual to make an impact.

It is time to acknowledge that these systems are in existence today, and are affecting people's lives. Parts of the tech community have started [engaging in these discussions](https://cyber.harvard.edu/research/ai). It is a discussion that needs to extend through and beyond technologists, though. From there, we have the power to shape the future directions of these systems and even ask if they are systems we should be developing, through research, education, advocacy and policy. We have to understand the trade-offs, and to help policy-makers and organizations to work for the betterment of systems of justice as AI develops.

The impacts of AI are being and will be felt in people's lives across society — and we have an important role to play in shaping what happens next.