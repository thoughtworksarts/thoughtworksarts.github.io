---
title       : Salaf [Arabic&#58; سلف , ancestor]
season      : Summer 2020
status      : in-progress

description : A collection of synthetically generated images and animations constructing Nouf Aljowaysir’s genealogical journey in the Middle East

image       : /images/projects/salaf/og.jpg

artist      : Nouf Aljowaysir

team :
  - name : Austin Garrard
    role : Software Developer
  - name : Nikola Savic
    role : Software Engineer
  - name : Vini Macedo
    role : Infrastructure Consultant
  - name : Tom Shannon
    role : Developer Consultant

extended-team :
  - name: Rohit Naidu
    link: https://in.linkedin.com/in/rohitnaidu-ai
  - name: Andrew McWilliams
    link: /bio/andrew-mcwilliams/
  - name: Ellen Pearlman
    link: /bio/ellen-pearlman/
  - name: Shraddha Surana
    link: https://in.linkedin.com/in/shraddhasurana
  - name: Alwina Oyewoleturner
    link: https://www.linkedin.com/in/alwinaoyewoleturner

---
_Salaf [Arabic: سلف , ancestor]_ is part of an ongoing exploration into constructing Nouf Aljowaysir's genealogical journey using two different voices: her own and an AI ‘narrator’.

{% include image file='styleGAN2.jpg'
   caption='A collection of images generated from training a generative adversarial network (StyleGAN2) on absent figures in a historical dataset' %}

 Nouf began her residency by investigating the cultural transmission of ideas and worldviews across human generations, using her own family and upbringing in the Middle East as a reference point. She followed the migrational patterns of her Saudi and Iraqi ancestors throughout Arabia and Mesopotamia, spanning five generations. As she juxtaposed her untold Middle Eastern story with the viewpoints of Western AI models trained on constrained datasets, she revealed the political, social, and colonial forces that have shaped multiple voices of past generations. This stems from the bulk of the source material emanating from a British Empire that crafted the East, i.e., the 'Orient' or 'Other' to be exploited and controlled.

 Using generative models to process these British photographic archives of Saudi and Iraqi regions, Nouf encountered 'failures' in her output. The models regurgitated familiar stereotypes and cliches about the Arab world. A notable example happened with a critical dataset complied by Gertrude Bell, a well-known British archaeologist, political officer, and contemporary of Lawrence of Arabia who is best known for exploring the region from 1871 to 1926. Bell's archives were recognized by UNESCO as a collection of global significance, as they provide a record for Bedouin lifestyles in remote regions that were difficult to access. Bell offered a precious record of how Nouf's own family might have lived during this time.

 Nouf performed a simple object-classification task on her dataset and quickly noted it failed to recognize the majority of veiled women as women. The images featured Bedouins, but the object classification worked haphazardly, tagging most of them with arcane modern-day warfare labels such as "soldier, "army", "military uniform", It also assigned high confidence values in its assessment. These 'failures' uncovered not only the prejudice systemically-embedded and overlooked within commercial AI tools but the broader problematic results that arise from using a historical training dataset that lacks an understanding of "Middle Eastern" imagery.

{% include image file='labeled-tags.png' %}

Salaf symbolizes those AI failures and the frustrations Nouf felt in the Western colonial gaze, and the lack of authentic native localized self-expression. Using U-2 Net, an image segmentation model that partitions a digital image into multiple segments, she erased the 'oriental' stereotypical figures in her historical archives, creating an "absent" dataset. Nouf then trained StyleGAN2, a generative AI model on this new dataset, outputting images signifying the eradication of her ancestor's collective memory.

{% include image file='arabische-dame.jpg' %}

Nouf will use her family's story and migration throughout the Middle East to expose the ingrained and centuries-old biases that are shaping emerging intelligent systems of category recognition. Her project raises awareness about how technology is constructed and influenced by innate and skewered historical factors, and how it is structurally a deep flaw in emerging technologies.

_Salaf_ is currently a work-in-progress. It was exhibited at [NeurIPS](http://www.aiartonline.com/highlights-2020/nouf-aljowaysir/), the leading machine learning conference for creativity and design, and was the winning entry to the [Computer Vision Art Gallery competition in 2020](https://computervisionart.com/), selected on the basis of "technical novelty, aesthetic merit, or conceptual strength."
