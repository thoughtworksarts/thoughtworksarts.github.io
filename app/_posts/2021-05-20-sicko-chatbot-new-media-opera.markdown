---
title  : "How We Created a GPT-2 AI “Sicko” Chatbot for a New Media Opera"
author : AIBO
description : AIBO is an emotionally intelligent artificial intelligent brainwave opera, which follows Eva, a human performer wearing a bodysuit of light and AIBO, a “sicko” chatbot powered by a GPT-2 AI.
---
AIBO (Artificial Intelligent Brainwave Opera) is an emotionally intelligent artificial intelligent brainwave opera. The performance piece follows two characters, Eva, a human performer wearing a bodysuit of light and AIBO, a “sicko” chatbot powered by a [GPT-2](https://openai.com/blog/better-language-models/) AI.

{% include image file='brainwave-emotions.jpg'
   alt='A performer wearing a suit of lights and a brainwave interface triggers colored “emotional” responses on the suit'
   caption='Eva’s brainwaves trigger colored “emotional” responses of  lights on her smart textile bodysuit, as well as emotionally themed sound and videos. Photo by Taavet Jansen' %}

The opera’s spoken word libretto is adapted from the biography of Eva von Braun about her fourteen-year love affair with Adolf Hitler. It is a metaphor for humanity’s infatuations with AI.

<!--excerpt-ends-->

Eva, performed by Sneidze Strauta, wears an Emotiv brainwave headset that displays her four emotions live time on her body. They are interest (purple), excitement (yellow), meditation (green) and frustration (red). Her emotions also trigger four databanks of emotionally themed videos and sounds, projected overhead.

{% include image file='eva-speech.jpg'
   alt='Eva’s speech translated to text'
   caption='Fig 1. Eva’s speech translated to text is on the upper left  in yellow. It is sent to the Google cloud. AIBO’s text response is in blue on the lower left. It is also translated to speech (white) for the audience to hear.' %}

Eva recites a spoken word libretto about her romantic relationship with the AI performer AIBO, displayed as text on a screen — just like a foreign language libretto text is displayed during an opera performance.

AIBO analyzes Eva’s libretto and replies with a response generated from the Google cloud, also projected as text onto the screen. These replies are turned into audible speech so that audience members can hear the back-and-forth dialog between the human and artificial performer.

{% include image file='body-suit.jpg'
   alt='Performer Sniedze Strauta (Eva) wearing a body suit of light looking at the AI AIBO’s red (negative) light emotion'
   caption='Fig 2. Performer Sniedze Strauta (Eva) wearing a body suit of light looking at the AI AIBO’s red (negative) light emotion. Photo by Taavent Jansen' %}

While Eva’s emotions are analyzed by an Emotiv EEG headset, AIBO’s answers are also analyzed for emotional sentiment using the [Natural Language Toolkit](https://www.nltk.org/). When AIBO’s responses are classified as positive, a green light glows; when negative, a red light appears, and when neutral, a yellow light shines.

{% include image file='sentiment-analysis.jpg'
   alt='AIBO glowing green for a positive emotional sentiment'
   caption='Fig 3. AIBO glowing green for a positive emotional sentiment. The glitchy image on the monitor is AIBO trying to take Eva’s last positive emotional memory and emulating it, but failing.' %}

AIBO also attempts to emulate Eva’semotional memory by creating a facsimile of her most recent projected visual, but fails. The visual renders in a fragmented, glitchy way because AIBO is an AI and does not really understand how to have real emotions.

## How the AIBO “sicko” chatbot works

The AIBO GPT-2 chatbot was developed as a collaboration between new media artist and Thoughtworks Arts Director Ellen Pearlman and Thoughtworks developer Jonathan Heng, with assistance from Thoughtworks developers Watawat Somo and Andrew Zhou.

The chatbot incorporates the advances, as of 2019, in Natural Language Processing using GPT-2, a language model developed by [OpenAI](https://openai.com/). Recently, GPT-3 has been released and promises to be an even more effective and powerful language model.

AIBO was designed to be ‘sicko,’ or perverted for dramatic effect. This means it is a high level, specialized or “overfitted” chatbot.  This is an unusual scenario, as most chatbots are designed to answer questions with a high degree of accuracy using a wide range of data. Overfitting in this scenario meant narrowly defining the AI’s training data to make it speak in a dysfunctional emotional way.

## The Deep Learning Language Model

GPT-2 is a type of machine learning or transformer network model using deep learning or neural nets, roughly modeled on the neural pathways inside the human brain. The “deep” in deep learning means there are multiple layers of connectivity between the input and output learning layers, so that the algorithm automatically learns what are the most useful features of the information analyzed, and implements them automatically.

The GPT-2 machine learning model can be fine tuned. Along with the nuances in post-processing this makes it possible to transform AIBO into a twisted or perverted performer.

The character AIBO uses a probability distribution over sequences of words. GPT-2 is trained to solve a simplified version of the above probability model, known as the n-gram model, which is one that predicts the next word in a given sequence of words.

A language model like this is designed to complete a sentence or even an essay, given a range of prompts by generating sentences and even paragraphs that are both coherent and demonstrate creativity. Creativity here means demonstrating comprehension and originality in the generated text.The official GPT-2 release website showcases [samples that illustrate this technique](https://openai.com/blog/better-language-models/). 

## Achieving a specific linguistic style

During the opera, AIBO needed to be in dialogue with the human Eva, whose libretto was based on the biography “The Lost Life of Eva Braun” by Angela Lambert that details Eva’s fourteen year long love affair with Adolf Hitler.

GPT-2’s power is unprecedented, as it can adapt style and content instantaneously. It is easily scalable and customizable, creating realistic and believable text and script models. GPT-2 outperforms state-of-art language modeling scores, known as “zero-shot” settings from any other known language models currently in use.

The original pre-trained GPT-2 had strong language modeling capabilities, but it did not converse in the desired style for the opera performance. Ellen selected a variety of training sources for AIBO in the English language using both copyright free movie scripts and books.

Due to the time frame where the performance is situated, it was important that the GPT-2 model avoid building a character who would speak incorporating a contemporary and up to date patois, and instead build a “twisted” character with a late 19th century to mid-20th century sensibility. This included antiquated ideas about masculinity and sexuality, good and evil, psychology and religion, rooted in a type of northern European framework that led to the outbreak of WWII.

Below is a list of the various texts that were used to create the database for AIBO.

{% include image file='movie-scripts.png'
   alt='Movie scripts database for AIBO'
   class='no-border' %}

These texts were chosen for a number of reasons. The first is they corresponded to the historical time frame used to represent the AIBO character - the turn of the 19th century to the 20th century up until the 1940s. The second is the sources were specifically skewed towards different types of pathologies, fetishes, and horror and war stories. The third is the sources were freely available in text form, and they were copyright free. 

## AIBO’s Questions and Answers

GPT-2 has an ability to perform question and answer tasks by conditioning itself to answer. A stylistically consistent outcome for the chatbot character can be built by conditioning each response within the context of  the chat history using the bot’s name. This primes the model to respond as the bot.

The figure below illustrates a concrete example of how this conditioning works using Eva’s libretto and calling AIBO the “BOT”.


{% include image file='bot-interactions.png'
   alt='Text showing EVA\'s workflow in developing responses'
   caption='Initial overview of how to condition the GPT-2 model to achieve a chatbot-like behavior' %}

Simple text cleaning including whitespace and symbol removal was done, and the first sentence of each output was then selected. Kaggle notebooks [were used](https://www.kaggle.com/code) to train the AIBO GPT-2 machine learning model, as they provided GPUs with limited weekly run-time and execute files that run code sequentially. Google Cloud was used for the final live-time deployment during the actual performance of the opera.

Evaluating the output from a data science point of view was a complex challenge. One option considered was using perplexity on a test set of the training data as a performance metric. [Perplexity](https://towardsdatascience.com/perplexity-in-language-models-87a196019a94?gi=7c01ef96328f) measures how well the model predicts an answer on a test set. Typically when training a machine learning model there is an evaluation metric. However, being good at predicting on the test set had little to do with the final goal, which was to use the chatbot to converse with Eva, who had a scripted libretto already in place.

Therefore the team landed on the approach of using qualitative evaluations. This meant Jonathan would output approximately 10 versions of answers from the GPT-2 ‘character’. Each answer was modulated by a different parameter, the temperature parameter. Ellen would read through each set of responses to determine which one made the most sense in terms of the AIBO GPT-2 character. 

## The temperature parameter

Another element of the final solution architecture was the ‘temperature’ parameter, a floating point value that controls the type of randomness of answers of GPT-2. Lower “temperature” results in less random completions while a higher temperature results in more random completions.

Below are three early experiments of tweaking the temperature by 0.5 variations.

<table class="shrink-fit vertical-margin alternate">
  <thead>
    <tr>
      <th colspan="2">VERSION 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EVA</strong></td><td>I was given my first camera at age 13.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>Well, I think I want to show me</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>The photo store I worked in was only 20 minutes from my home.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>(Suddenly snaps into action)  You were with the American forces in South Africa.</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>I was a junior assistant in the studio and darkroom.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>You would have been at home.</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>I  typed, filled in invoices and modeled in the photo studio.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>In his head.</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>My boss took photos of powerful men.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>That’s just why he is famous.</td>
    </tr>
  </tbody>
</table>
<table class="shrink-fit vertical-margin alternate">
  <thead>
    <tr>
      <th colspan="2">VERSION 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EVA</strong></td><td>I was given my first camera at age 13.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>Goofy!</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>The photo store I worked in was only 20 minutes from my home.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>(frightened)</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>I was a junior assistant in the studio and darkroom.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>(breathless)What were you doing all this time?</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>I  typed, filled in invoices and modeled in the photo studio.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>Evil, driving woman, counterfeit magazines, phony cops — I was very useful in that fashion.</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>My boss took photos of powerful men.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>Who?</td>
    </tr>
  </tbody>
</table>
<table class="shrink-fit vertical-margin alternate">
  <thead>
    <tr>
      <th colspan="2">VERSION 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EVA</strong></td><td>I was given my first camera at age 13.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>What type is it?</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>The photo store I worked in was only 20 minutes from my home.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>You live on milk.</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>I was a junior assistant in the studio and darkroom.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>(Incoherently)  The “technofagetschap” ?</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>I  typed, filled in invoices and modeled in the photo studio.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>Where did you work for what company again?</td>
    </tr>
    <tr>
      <td><strong>EVA</strong></td><td>My boss took photos of powerful men.</td>
    </tr>
    <tr>
      <td><strong>BOT</strong></td><td>(Proudly) I am fond of powerful men, sir.</td>
    </tr>
  </tbody>
</table>

Sometimes the temperature variations included leftover references, like parenthesis, or movie script directions. Other times they made the AIBO character repeat itself too much, like a broken record, or it would use nonsensical or unrelated terms. It took a number of attempts to arrive at correct balance to create a believable character for the opera.

## The Live Performance
The live performance was challenging, as it required many different moving parts to be synchronized. One hour before the premier the Google Cloud froze, meaning it refused to return any answers except one word - “Evil”. It was as if the GPT-2 character AIBO had finally understood who it really was. After a late night frantic phone call to [Jonathan Heng](/bio/jonathan-heng/), who was based in Singapore, the Cloud console was rebooted, and the performance began on time. 

AIBO was funded by a Vertigo STARTS (EU) Laureate grant, in conjunction with the Human Computer Interaction Lab at Tallinn University, the Estonian Academy of Art, and GoPro Social. It premiered at the Estonian Academy of Music on February 21, 2020 in Tallinn, Estonia, and was featured at Vertigo STARTS Days in Paris, France.