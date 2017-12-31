---
layout: articles
category: articles
title: Adobe Portfolio Form Hack Embedding forms to on-board clients in Adobe Portfolio
description: Adobe offers a no-brainer solution if you’re a creative just looking to show work. Adobe Portfolio honestly couldn’t be simpler. It integrates nicely with Behance and even allows for timely and hassle-free syncing while updating your Behance portfolio. Templates are well-designed. Beautiful images can be uploaded to a masthead.
link_to: https://read.compassofdesign.com/adobe-portfolio-form-hack-4c9a6e2f3c42
index_image: assets/img/articles/portfolio-hack.jpg
article_author: Juliane Bone
author_link: https://twitter.com/automagicalley
---
# Adobe Portfolio Form Hack

## *Embedding forms to on-board clients in Adobe Portfolio*

![](https://cdn-images-1.medium.com/max/800/1*Hv-z4LnCJshrhf3uyOtkPQ.png)
<span class="figcaption_hack">Adobe Portfolio Andreas layout</span>

Adobe offers a no-brainer solution if you’re a creative just looking to show
work. Adobe Portfolio honestly couldn’t be simpler. It integrates nicely with
Behance and even allows for timely and hassle-free syncing while updating your
Behance portfolio. Templates are well-designed. Beautiful images can be uploaded
to a masthead. Social media icons are available for footer or header placement.
Genuinely, Portfolio does
[what](https://theblog.adobe.com/introducing-adobe-portfolio-creative-websites/)
it set out to do:

> Because the portfolio is the new visual resume, Adobe Portfolio lets creatives
> in any field easily design a customized website outfitted with extensive
galleries of work — providing a vital opportunity to convey skills, style, and
specialties in a way that captures the all-important first impression.

My main gripe is that it’s purely a portfolio tool. Nothing more. So when I
attempted to create an interactive questionnaire, the closest thing I could find
was a contact form.

I didn’t need something as robust as Typeform. But I did want interactivity and
some resemblance of meaningful design when a potential client is filling out the
form. I’d bet that surveys have low response rates largely because they’re
distributed in default design.

### Embed Capabilities

There is an embed feature, to be sure. While Adobe Portfolio supports a lot of
platforms including Adobe’s own products, a few Google products, audio-sharing
products, etc *(*[full
list](https://help.myportfolio.com/hc/en-us/articles/215684818-What-Embed-Codes-do-you-support)*),*
a form-building tool called **Wufoo **seemed appropriate. I double-checked four
or five times to make certain Typeform wasn’t on that list. So on to **Wufoo**,
another strangely-worded company that I should probably buy stock in.

*****

### Wufoo

Wufoo is an easy signup. Once I got entered to the form-building section, I was
immediately turned-off by the interface. Unsure of its aesthetics I began the
process of pulling together questions.

Because of the restriction of a free account, I had to combine multiple
questions. If you’re interested in using **Wufoo **to its fullest extent,
pricing starts at $19/month for 10 forms and more features.

**Wufenthusiasm Level: 2**

#### Design

There is hope for the default design! You can create your own template in
**Wufoo**. The best part? Typography. **Wufoo **collaborates with Adobe in that
they link to your Typekit account. So maybe there’s hope for embed code
collaboration too. This is a simple but imperative design element that made the
form look like it belonged to my site.

<span class="figcaption_hack">Wufoo’s Typekit integration</span>

Not just typography though. You can eliminate all those cluttered borders.
Linking to a hosted stylesheet is also an option. **Wufoo **is starting to sound
better.

**Wufenthusiasm Level: 4**

#### Interactivity

Who likes to answer more than three questions at a time? It seems friendlier
when a new question pops up after you've finished the previous answer.
Friendlier than a multi-paged default-designed questionnaire. Perhaps a
bait-and-switch, but I’d imagine a potential client would want to answer as many
questions as their future brand partner wants, given the user experience is a
positive one.

This requires serious creativity if you still want the free account. It also
requires you to combine multiple questions, so at this point, you may just want
to pay for the lower level tiered account.

Under “Field Settings” tab, you’ll click on “Add Branching & Logic” at the
bottom of the panel. This is an option to redirect the user based on their
responses.

**Question 1:*** *Methodically, I started at the top of my list of questions.
The first rule says

> If Question 1 CONTAINS ‘@’, SHOW Question 2.

This method of conditional statements allows for a semblance of interactivity.

<span class="figcaption_hack">Question 1: a simple conditional statement</span>

**Question 2** is an open-ended question about the user’s business. I wanted
Question 3 to appear as soon as Question 2 had text input. For unknown reasons,
the conditional statement didn’t work by just using a space. So with the
seemingly unlimited OR conditions, I directed the form to show Question 3 if
Question 2 input contained any of the letters of the alphabet.

No kidding. There’s at least 26 OR statements allowed.

<span class="figcaption_hack">Question 2: Multiple OR statements</span>

**The last question** to appear was another open-ended one: a text box to
clarify the project. This action was based on the condition that the previous
Question 3 was answered in some fashion. Question 3 is a checkbox question,
where multiple checks are allowed. So using the multiple OR statement feature, I
directed **Wufoo **to show the last question if any of the boxes were checked.

<span class="figcaption_hack">Question 3: Checkbox</span>

The output looks pretty good:

**Wufenthusiasm Level: 6**

*****

### Google Forms

Directly after publishing my latest **Wufoo **form, I became aware of **Google
Forms. **Having never used this product, I investigated and found it superior in
a few ways.

#### Integration

For one, I am a heavy Google product-user. So it was very easy to start working
with **Form**.

**Googenthusiasm Level: 6**

#### Design

I started out at a 6 so I have high expectations already. Google is a
well-designed brand and I know products associated with the brand will have
high-level user experiences. Typography is simple and beautiful. Customization
seems somewhat limited at first glance until you remember Google Fonts
integration. This opens up a *myriad *of options.

#### Interactivity

The (+) panel opens up a host of question fields.

Even File Upload. *Although if you use this field, you can’t embed the code.

Now, I don’t see the snazzy option of materializing the next question so we’ll
have to settle for clicking on the Next button. I’m really ok with that as the
button is stylized to contemporary, flat-designed, non-Web 2.0 standards.

Back to the line of questioning. Let’s dig further into the features of a
multiple choice field.

<span class="figcaption_hack">Features in Google Forms</span>

<span class="figcaption_hack">Conditional questioning</span>

Not only are there multiple types of questions but conditional statements made
easy. Google has the developer and end-user in mind here. Instead of confusing
Rules, the dropdown option contains “Go to section based on answer”.

On a multiple choice question, I can dictate which section the user comes next
based on their response. For example, if a user choose “Other”, I’d like them to
go to the section that bypasses all of the branding questions.

<span class="figcaption_hack">Conditional questioning</span>

#### Add-Ons

Another huge feature is Add-ons. I was very excited about Bookings, that allows
clients to set up meetings with you based on your Google Calendar.
Unfortunately, it looks like I need to be a paying Google customer to set up
appointment slots.

#### Embedding

Adobe Portfolio uses <iframe> embed codes, so **Google Forms **embed capability
eluded me at first. So a simple copy/paste function is all you need. Here’s the
final:

**Googenthusiasm Level: 8**

*****

### Review

#### Google Forms vs Wufoo Enthusiasm: Google +2

Looks like Google Forms is the winner.

Try it out! Submit a form and you’ll see conditional logic in action.

Also if you try to pass off lackluster answers, you’ll see another feature
called *response validation*. I might need a copywriter to help me set a
friendlier tone in response validation.

* [Portfolio](https://read.compassofdesign.com/tagged/portfolio?source=post)
* [Onboarding](https://read.compassofdesign.com/tagged/onboarding?source=post)
* [Hack](https://read.compassofdesign.com/tagged/hacks?source=post)
* [Adobe
Portfolio](https://read.compassofdesign.com/tagged/adobe-portfolio?source=post)
* [Google Forms](https://read.compassofdesign.com/tagged/google-forms?source=post)

By clapping more or less, you can signal to us which stories really stand out.

### [Juliane Bone](https://read.compassofdesign.com/@julianebone)

### [Compass of Design](https://read.compassofdesign.com/?source=footer_card)

Some of the best design articles written by members of the Compass of Design
Community to help you strengthen your skills in design, business/freelance, and
marketing yourself.
