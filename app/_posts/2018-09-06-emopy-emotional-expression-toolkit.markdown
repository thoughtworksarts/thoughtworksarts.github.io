---
title  : "EmoPy: A Machine Learning Toolkit For Emotional Expression"
author : Angelica Perez
tags   : [riot, perception-io]
---
I recently led a project team at Thoughtworks to create and open source a new [Facial Expression Recognition (FER)](/blog/recognizing-facial-expressions-machine-learning) toolkit named [EmoPy](https://github.com/thoughtworksarts/EmoPy). The system produces accuracy rates comparable to the highest rates achievable in FER, and is now available for anyone to use for free.

{% include image file='emopy-development.jpg'
   caption='Working with Sofia Tania (left) and Karen Palmer (right) to create EmoPy' %}

This article explains how the EmoPy system is designed and how it can be used. It will examine the architectures and datasets selected, and illustrate why those choices were made.<!--excerpt-ends--> This should be helpful for those considering using EmoPy in their own projects, contributing to EmoPy, or developing custom toolkits using EmoPy as a template.

Facial Expression Recognition is a rapidly-developing field. If you are new to this technology, you might like to read my previously published [overview of the field of FER](/blog/recognizing-facial-expressions-machine-learning).

Our aim is to widen public access to this crucial emerging technology, one for which the development usually takes place behind commercially closed doors. We welcome raised issues and contributions from the open source development community, and hope you find EmoPy useful for your projects.

## The Origins of EmoPy

The EmoPy toolkit was created as part of [Thoughtworks Arts](http://thoughtworksarts.io/), a program which incubates artists investigating intersections of technology and society. Our development team supported the [artist-in-residence Karen Palmer](https://thoughtworksarts.io/bio/karen-palmer/) to create a new version her [interactive film experience, RIOT](https://thoughtworksarts.io/projects/riot/).

RIOT positions viewers first-person in an installation space watching a video unfold in front of them. A dangerous riot is in progress, and viewers meet filmed characters, including looters and riot police. Each viewer's facial expressions are recorded and analyzed via a webcam, which feeds into EmoPy as the movie unfolds.

{% include image file='riot.jpg'
   caption='RIOT installed in New York, 2018' %}

The story branches in different directions depending on each viewer's perceived emotional response to the film. Each viewer encounters different pathways through the story, depending on whether their dominant perceived emotion at given moments is fear, anger, or calm.

As we developed new features for RIOT, we generated new requirements for EmoPy, which was created in tandem as a standalone emotion recognition toolkit. The system was built from scratch, inspired initially by the research of [Dr Hongying Meng](https://www.brunel.ac.uk/people/hongying-meng), one of Karen's previous technical partners. Dr Meng's [time-delay neural network approach](https://ieeexplore.ieee.org/document/7090979/?part=1) has been approximated in the [TimeDelayConvNN architecture](https://github.com/thoughtworksarts/EmoPy#timedelayconvnn) included in EmoPy.

## #1. Neural Network Architecture

The first consideration when evaluating EmoPy is the choice of initial model architectures. Neural network architectures are combinations of layers which feed outputs to each other in sequence. We chose these initial architectures based on approaches we encountered during our general research of existing FER implementations.

Very different performance results are achieved depending on the choice and sequence of layers making up neural network architectures. To improve on what we found in our research, we began a process of experimentation and testing with various combinations. 

The example shown below is [ConvolutionalNN](https://github.com/thoughtworksarts/EmoPy#convolutionalnn), which under test proved to be the best performing of the convolutional architectures. This architecture has layers arranged as shown in the diagram below.

{% include image file='cnn-layers.png' class='no-border'
   caption='The layers of our best-performing convolutional architecture' %}

The image shows the differences in size of each of the network layers. Pooling layers are used to reduce the input space and thus complexity and processing time. The flattening layer converts the output of the previous layer to a one dimensional vector and the final layer takes that vector and calculates a final classification output.

Some architectures have many more layers than shown in the example diagram above. The [TransferLearningNN](https://github.com/thoughtworksarts/EmoPy#transferlearningnn) model for example, which has Google's Inception-v3 architecture, has hundreds of layers.

The full list of initial architectures provided with EmoPy are listed in the [neuralnets.py class definition file](https://github.com/thoughtworksarts/EmoPy/blob/master/src/neuralnets.py), as well as in [the EmoPy documentation](https://emopy.readthedocs.io/en/latest/neuralnets.html). A comparison of neural network models is also included in [the EmoPy readme](https://github.com/thoughtworksarts/EmoPy#comparison-of-neural-network-models) and also in [this overview article](/blog/recognizing-facial-expressions-machine-learning/).

Each of the four subclasses in [neuralnets.py](https://github.com/thoughtworksarts/EmoPy/blob/master/src/neuralnets.py) implements a different neural network architecture using the [Keras framework](https://keras.io/) with a [Tensorflow backend](https://www.tensorflow.org/), allowing users to experiment and see which one performs best for their needs.

## #2. Selecting Datasets

The next consideration in relation to EmoPy is the selection of datasets. As described [in the overview article](/blog/recognizing-facial-expressions-machine-learning/), ideally our neural networks would be trained with millions of image samples. This would increase accuracy and improve generalizability of the models.

Unfortunately datasets of this size don't exist publicly, but we do have access to two public datasets — Microsoft's [FER2013](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/data) and the [Extended Cohn-Kanade](http://www.consortium.ri.cmu.edu/ckagree/) dataset.

The FER2013 dataset contains over 35,000 facial expression images for seven emotion classes, including anger, disgust, fear, happiness, sadness, surprise, and calm. The image label breakdown shows a skew towards happiness and away from disgust, as demonstrated in the table below.

<figure>
  <table>
    <tr>
      <th><strong>Emotion</strong></th>
      <th><strong>Quantity</strong></th>
    </tr>
    <tr>
      <td>Disgust</td>
      <td>547</td>
    </tr>
    <tr>
      <td>Anger</td>
      <td>4953</td>
    </tr>
    <tr>
      <td>Surprise</td>
      <td>4002</td>
    </tr>
    <tr>
      <td>Sadness</td>
      <td>6077</td>
    </tr>
    <tr>
      <td>Calm</td>
      <td>6198</td>
    </tr>
    <tr>
      <td>Happiness</td>
      <td>8989</td>
    </tr>
    <tr>
      <td>Fear</td>
      <td>5121</td>
    </tr>
  </table>
  <figcaption>Microsoft FER2013 dataset label breakdown</figcaption>
</figure>

The Cohn-Kanade dataset is made up of facial expression sequences rather than still images. Each sequence starts with a neutral expression and transitions to a peak emotion.

{% include image file='cohn-kanade.png'
   alt='Images from the Cohn-Kanade dataset' %}

The peak emotions available are calm, anger, contempt, disgust, fear, happy, sadness, and surprise. The Cohn-Kanade dataset contains 327 sequences, from which we extracted still images.

Since the FER dataset is much larger, we trained our models with 85% of its images and validated with the remaining 15% as well as with the Cohn-Kanade dataset during testing.

We used data augmentation techniques to improve our model's performance, applied to both datasets. These techniques create an increase in the size of existing datasets by applying various transformations to existing images to create new ones. Example transformations we used are mirroring, cropping, and rotation. 

{% include image file='augmentation.jpg'
   caption='Sample image augmentations generated by <a href="https://github.com/aleju/imgaug">the imgaug library</a>' %}

Application of data augmentation drastically increased the accuracy of our neural networks. This was particularly true for the [ConvolutionalNN](https://github.com/thoughtworksarts/EmoPy#convolutionalnn) model, whose accuracy increased by about thirty percent.

## #3. The Training Process

The third important consideration relating to EmoPy is the process of training the neural networks with the selected datasets. First, we split the dataset into two parts: the _training set_ and _validation set_. Next we took sample images from the training set and used them to train our neural networks.

The following process occurs for each image passed through a neural network during training:

1. The neural network makes an emotion prediction based on its current weights and parameters
2. The neural network compares the predicted emotion to the true emotion of the image to calculate a loss value 
3. The loss value is used to adjust the weights of the neural network

The purpose of the _training set_ is to build the model by adjusting its weights to more accurately make predictions in the future, with each iteration of the process refining what the network has 'learned'.

The _validation set_ is used to test the neural network after it has been trained. By having a separate set of sample images in the _validation set_ which were not used for training, we can evaluate the model more objectively.

The _training accuracy_ describes how well the neural network is predicting emotions from samples in the training set. The _validation accuracy_ shows how well the neural network is predicting emotions from samples in the validation set. Training accuracy is usually higher than validation accuracy. This is because the neural network learns patterns from the training samples which may not be present in the validation set.

A common problem with machine learning models is to suffer from _overfitting_. This is when the neural network learns patterns from the training samples so well that it is unable to generalize when given new samples. This is seen when the training accuracy is much higher than the validation accuracy.

## #4. Measuring Performance

The fourth and final consideration of EmoPy is the measurement of performance. How accurate are given architectures when predicting emotions based on the training set, and the validation set?

In our tests, the [ConvolutionalNN](https://github.com/thoughtworksarts/EmoPy#convolutionalnn) model performed the best, especially after adding data augmentation to our image preprocessing. In fact, for certain emotion sets such as "disgust, happiness, surprise" this neural network correctly predicts nine out of ten images it has never seen before.

<figure>
  <table>
    <tr>
      <th>&nbsp;</th>
      <th colspan="2" ><strong>TransferLearningNN</strong></th>
      <th colspan="2" ><strong>ConvolutionalNN</strong></th>
      <th colspan="2" ><strong>ConvolutionalLstmNN</strong></th>
    </tr>
    <tr>
      <td>Emotion Set</td>
      <td>Training Accuracy</td>
      <td>Validation Accuracy</td>
      <td>Training Accuracy</td>
      <td>Validation Accuracy</td>
      <td>Training Accuracy</td>
      <td>Validation Accuracy</td>
    </tr>
    <tr>
      <td>Anger, fear, surprise, calm</td>
      <td>0.6636</td>
      <td>0.4947</td>
      <td>0.6064</td>
      <td>0.5637</td>
      <td>0.6451</td>
      <td>0.5125</td>
    </tr>
    <tr>
      <td>Disgust, happiness, surprise</td>
      <td>0.7797</td>
      <td>0.7877</td>
      <td>0.9246</td>
      <td>0.9045</td>
      <td>0.7391</td>
      <td>0.7074</td>
    </tr>
    <tr>
      <td>Anger, happiness, calm</td>
      <td>0.5385</td>
      <td>0.5148</td>
      <td>0.7575</td>
      <td>0.7218</td>
      <td>0.7056</td>
      <td>0.6653</td>
    </tr>
    <tr>
      <td>Anger, fear, surprise</td>
      <td>0.771</td>
      <td>0.5914</td>
      <td>0.6851</td>
      <td>0.6503</td>
      <td>0.5501</td>
      <td>0.3523</td>
    </tr>
    <tr>
      <td>Anger, disgust</td>
      <td>0.9182</td>
      <td>0.9094</td>
      <td>0.958</td>
      <td>0.9404</td>
      <td>0.8971</td>
      <td>0.9118</td>
    </tr>
    <tr>
      <td>Anger, fear</td>
      <td>0.6691</td>
      <td>0.6381</td>
      <td>0.7791</td>
      <td>0.7029</td>
      <td>0.5609</td>
      <td>0.5567</td>
    </tr>
    <tr>
      <td>Disgust, surprise</td>
      <td>0.9256</td>
      <td>0.9019</td>
      <td>0.9893</td>
      <td>0.9624</td>
      <td>0.8846</td>
      <td>0.8806</td>
    </tr>
  </table>
  <figcaption>Model performance test results</figcaption>
</figure>

The [ConvolutionalLstmNN](https://github.com/thoughtworksarts/EmoPy#convolutionallstmnn) model performed decently on still images, but is actually an architecture meant to be trained on time series samples. The [TransferLearningNN](https://github.com/thoughtworksarts/EmoPy#transferlearningnn) model performed very well on some subsets of emotions, but the most performant was the [ConvolutionalNN](https://github.com/thoughtworksarts/EmoPy#convolutionalnn) model.

Based on these test results, we chose to proceed with the [ConvolutionalNN](https://github.com/thoughtworksarts/EmoPy#convolutionalnn) model exclusively when moving forward with the RIOT project.

## Analyzing Misclassifications

A useful approach to analyzing and improving neural networks is using _confusion matrices_. These visual tools illustrate clearly the rates of misclassification alongside correct classifications, providing valuable insights to help adjust the training of future models.

On the x axis of confusion matrices are the predicted labels classified by the neural network, and on the y axis are the actual labels. With a highly accurate model we would expect to see a strong diagonal line, leading from the top-left down to the bottom-right of the matrix. This would show that each of the predicted labels was matching the true labels at a high rate. A less accurate model will produce a more checkered matrix.

The confusion matrices below show the results generated when testing neural networks against both of the datasets used in EmoPy. All of the matrices show results from models which were trained on FER2013. However, importantly, the matrices _on the left_ show results when that network was _validated using FER2013_. The matrices _on the right_ show results when matrices were _validated using Cohn-Kanade_.

{% include image file='anger-fear-calm-surprise.png' class='no-border'
   caption='Confusion matrices for anger, fear, calm and surprise' %}

{% include image file='anger-fear-surprise.png' class='no-border'
   caption='Confusion matrices for anger, fear and surprise' %}

{% include image file='sadness-surprise-disgust.png' class='no-border'
   caption='Confusion matrices for sadness, surprise and disgust' %}

{% include image file='anger-calm-happiness.png' class='no-border'
   caption='Confusion matrices for anger, calm and happiness' %}

The matrices show that when the validation set is drawn from the same dataset as the training set, validation results tend to be better. This is clear because the 'accurate' diagonal is somewhat darker in the matrices on the left. With the matrices on the right, it is harder to trace a dark diagonal. This tells us that the model we are validating doesn't generalize well.

Below are two image samples, one from each dataset. Notably, images from Cohn-Kanade are all frontal views, whereas images in FER2013 were taken from many different angles.

{% include image file='sample-images.jpg'
   caption='A sample image from Cohn-Kanade (left), alongside a sample image from FER2013 (right)' %}

Moreover, when the Cohn-Kanade dataset was created, participants were given examples of facial expressions and then asked to act them out. FER2013 images are much more varied. They come from many sources on the web — some appear to be raw 'authentic' emotions, whereas others are clearly exaggerated or acted out.

Because of these types of differences in datasets, it is important to cross-validate performance using multiple datasets. It's also important to note how the neural network performs on specific emotions. For example, fear tends to be misclassified more often than other emotions, as seen in the first pair of confusion matrices above. Looking at sample images from each dataset shows why this could be the case.

{% include image file='sample-fear.jpg'
   caption='Sample fear images from Cohn-Kanade (left) and FER2013 (right)' %}

{% include image file='sample-calm-anger.jpg'
   caption='A sample calm image from Cohn-Kanade (left), and anger image from _FER2013_ (right)' %}

Facial expressions are by their nature ambiguous, and certain distinct emotions can lead to very similar facial expressions. In the case of fear, sometimes a person's eyes are open very widely, which can be very similar to anger. Fear can also produce tight lips, which in other moments may be an indicator of calm. 

The best way to avoid these misclassifications, particularly in deep learning approaches, is to use the largest dataset possible. Moreover, as shown in the confusion matrices, better results are achieved when training on a smaller quantity of emotion classifications.

## Contributing to EmoPy

We have made EmoPy an open source project to increase public access to technology that is often out of reach. The goal of the project is to make it easy for anyone to experiment with neural networks for FER and to share high-performing pre-trained models with all.

Open source projects rely on contributions, and if you find this system useful I hope you'll consider helping develop it. You can fork the repository and send a pull request, however it might be beneficial to [contact one of the EmoPy contributors](https://github.com/thoughtworksarts/EmoPy/graphs/contributors) to discuss your input.

Whether you are considering contributing, utilizing or replicating EmoPy, we hope you find the system useful. We have used an unrestrictive license to enable the widest possible access. However please take a moment to [review our guiding principles](https://github.com/thoughtworksarts/EmoPy#guiding-principles), which include championing integrity, transparency, and awareness around FER.

We hope to see this technology used for good purposes, and look forward to hearing about your implementations going forward.