---
layout: articles
category: articles
title: Redesigning Twistle– a health communications platform
description: Twistle is a communications app that enables providers, their services, and their patients to communicate through text messages, photos, and more. Twistle (rhymes with whistle) approached me with a unique problem... over the years, their iOS app had pushed ahead of its Android sibling in terms of visual appeal. To make matters worse, the app could be confused for Google’s Gmail app because of their similar color and layout!
link_to: https://cmps.co/redesigning-twistle
index_image: https://cdn-images-1.medium.com/max/2000/1*fnD-840v-jKL-uTpXyKkww.png
article_author: Juan Valera
author_link: https://twitter.com/justcallmejuan
author_img:
---
# Redesigning Twistle– a health communications platform

## design case study

![](https://cdn-images-1.medium.com/max/2000/1*fnD-840v-jKL-uTpXyKkww.png)

#### Responsibilities

* Recommend UX patterns for the Twistle Android app
* Redesign the Twistle Android app

#### Deliverables

* List of most potentially significant UX improvements
* UI design comps
* UI design redlines, measurements, and notes
* Small icon set

#### Timeframe

1 month (January 2018 — February 2018)

### 1 sentence summary

[Twistle](https://www.twistle.com/) is a communications app that enables
providers, their services, and their patients to communicate through text
messages, photos, and more.

*****

### The problem: branding & polish

Twistle (rhymes with *whistle) *approached me with a unique problem: over the
years, their iOS app had pushed ahead of its Android sibling in terms of visual
appeal. To make matters worse, the app could be confused for Google’s Gmail app
because of their similar color and layout!

#### Planning

To really understand their problems and business goals, I spoke with Twistle’s
CTO and Director of UX. They explained the app’s branding difficulties, and
helped me understand that Twistle is primarily a means of connecting patients to
their healthcare providers.

To that end, the app’s redesign would have to center around the patient and the
clinician. The kinds of questions I asked at this stage were: *What do patients
want most from the app? What about clinicians? Are their needs different?*

The Twistle folks had already given the matter plenty of thought; they knew the
answer to their two-part problem lay in Google’s design system, Material Design,
and the user experience patterns that it defines. My questions then became: *How
can Material Design help patients and clinicians communicate? What patterns
exist to facilitate their goals?*

Now I had a good understanding of the problem; I knew that patients and
clinicians needed to talk to each other easily. I knew that I’d be using
Material Design as a frequent reference, and I knew generally what parts of the
app were most conducive to meeting users’ goals.

One last thing: the new version of the app needed to be live in less than a
month, so I needed to get moving.

*****

### Research

I kicked things off by researching Material Design’s existing components and
patterns. I kept an eye out for anything Twistle could make use of, especially
if the current app was using something custom to solve a common user interface
problem (e.g. input fields, date pickers). My goals were to bring the user
experience closer to what Android users are accustomed to, and to make the app’s
design consistent.

![](https://cdn-images-1.medium.com/max/800/1*sB66QBJqoW0yOARH_uRpQQ.png)

I delivered bite-sized takeaways– suggested changes that would make the biggest
difference to the quality of the user experience.

<span class="figcaption_hack">The research phase’s deliverable was a series of small takeaways.</span>

I frequently referred to the [Material Design
guidelines](https://material.io/guidelines/) during this phase, especially
noting the intentions behind a component’s design. Knowing the intention would
make things easier later, when designing custom UI that felt consistent with
both Twistle and Material Design.

<span class="figcaption_hack">I also researched competing apps and took note of their UI patterns.</span>

*****

### Design process

Using Material Design components and patterns made a dramatic difference in the
app’s look and feel, but I was far from done. Twistle also frequently uses
custom-made components and patterns, things that don’t have any counterpart in
Material Design. Namely their branding, registration flow, and conversation
view.

For these things, the guidelines had no answer. So I designed new solutions for
each, while keeping as many similarities to Material Design as I could.

#### Branding (or, Adventures of a human color picker)

First, I needed to find new color combinations that Twistle could use throughout
the app for their branding and UI. Many of Twistle’s users are older, and the
app needed to be comfortably legible for everyone.

To ensure legibility throughout the app, I chose colors that pass the strict
contrast requirements defined in the [Web Content Accessibility
Guidelines](https://www.w3.org/TR/WCAG20/). This way, Twistle users would be
able to read everything from bold headers to fine print comfortably.

<span class="figcaption_hack">Twistle’s message bubbles have a safe 7:1 contrast ratio.</span>

With colors picked, I turned to the company’s branding needs. They needed to
distinguish themselves to their users, and distance their visual style from
Gmail’s. I focused on two areas where Twistle could build their in-app brand
recognition: the launch screens (a.k.a. splash screens), and the registration
flow.

#### Launch screen

This was one of my favorite discoveries during this project. [Material Design
suggests two ways to use launch
screens](https://material.io/guidelines/patterns/launch-screens.html):

* As **placeholder UI, **to improve the [perceived
time-to-load](https://en.wikipedia.org/wiki/Perceived_performance) of an app
* As a **brand launch screen**, to improve the brand recognition of an app

I mocked up both possibilities, conferred with the folks at Twistle, and refined
the version they chose: the brand launch screen.

<span class="figcaption_hack">Potential launch screens with potential brand colors</span>

#### Registration

The second area to build in-app brand recognition: the registration flow. I
wanted users to become more familiar with the brand’s colors and logo while
they’re signing up, logging in, and otherwise beginning to engage with Twistle.

While Material Design has no suggestions regarding registration flows *per se*,
using its components and iconography should help make the registration process
more intuitive to users. I also used Twistle’s new primary color and a
simplified logo in an attempt to make the app more memorable.

<span class="figcaption_hack">Twistle’s registration screens use 7:1 contrast ratio for text, and standard
Material Design elements where possible</span>

#### Conversation

Lastly, and arguably most importantly, the conversation view. The Twistle folks
impressed on me how important conversations are to their users. So it’s no
surprise that we spent the majority of the project on this area.

Attachments in particular are frequently used in conversations. Clinicians and
patients alike need to fill out forms, read PDFs, view tabular data, and look at
photos and videos. Not to mention everyone needs to send and receive all of the
above.

To properly design a solution that works in these scenarios, I needed to get my
head around the situations that different users encounter while using the app.

For me, that meant starting with a whiteboard. (I ❤ ⬜)

<span class="figcaption_hack">Two participants in a conversation can see differently-prioritized attachments</span>

I asked the folks from Twistle to walk me through what different users need from
the various attachments. It did take me a few tries to account for all the
details, but they were supremely helpful and patient.

Some messages’s attachment can be acted upon multiple times. Every message &
attachment is important to *someone, *but not equally so to *everyone. *The
solution also needed to account for at least three of the aforementioned file
types (unfilled forms, filled forms, and tabular data). People in this scenario
want to know things like: *Did I fill this form in?* *When?*

Taking all these conditions together, I worked on several iterations of a
solution. In the end, I designed three “tiers” of attachment: prominent,
regular, and subdued (also used for disabled states). Depending on how important
an attachment is to a particular user, they’d get an appropriately
attention-grabbing UI.

> People in this scenario want to know things like: Did I fill this form in? When?

<span class="figcaption_hack">The final solution in whiteboard form</span>

<span class="figcaption_hack">The most prominent style of attachment.</span>

<span class="figcaption_hack">A less prominent variation of attachment.</span>

<span class="figcaption_hack">The least prominent variation of attachment.</span>

#### Icon set

As for the attached files themselves, I created a small set of icons that could
visually describe the kind of file that’s attached (an unfilled form, tabular
data, and a filled form).

<span class="figcaption_hack">Icon iterations</span>

<span class="figcaption_hack">The final icon set.</span>

*****

### Conclusion

To wrap up, I want to say that this project was incredibly rewarding for me. The
design challenges were engaging, and Twistle makes a difference in people’s
health every day. I couldn’t ask for anything more.

#### Thanks for reading!

Twistle is available on the [Google Play
Store](https://play.google.com/store/apps/details?id=com.twistle.android.client&hl=en)
and the [iOS App
Store](https://itunes.apple.com/us/app/twistle/id561819870?mt=8). Please talk
with your healthcare provider about how you can use it together.

If you enjoyed this, please clap to help others find it more easily.

*****

I’m **Juan Valera.** I’m the founder of [Coastal](http://coastalco.co/), a
product design agency in Seattle, WA. You can see what I’m up to on my [personal
site](http://www.juanv.io/) and [on
Twitter](https://twitter.com/justcallmejuan)!

* [Design](https://read.compassofdesign.com/tagged/design?source=post)
* [Health](https://read.compassofdesign.com/tagged/health?source=post)
* [Apps](https://read.compassofdesign.com/tagged/apps?source=post)
* [Healthcare](https://read.compassofdesign.com/tagged/healthcare?source=post)
* [Health
Technology](https://read.compassofdesign.com/tagged/health-technology?source=post)

By clapping more or less, you can signal to us which stories really stand out.

### [Juan Valera](https://read.compassofdesign.com/@justcallmejuan)

Designer & founder @ Coastal [https://coastalco.co](https://coastalco.co/)

### [Compass of Design](https://read.compassofdesign.com/?source=footer_card)

Some of the best design articles written by members of the Compass of Design
Community to help you strengthen your skills in design, business/freelance, and
marketing yourself.

Clear and easy to understand for a non-UXer. I’m learning from your approach to
getting in the mind of the user.
