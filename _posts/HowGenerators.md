---
date: 2021-02-25
layout: post
title: "How My Generators Work"
categories: Programming how
tags: design
image: /images/generators.jpg
published: false
---

Hi! In case this is your first time here, I love [generators](/generators); particularly digital ones. The [Troika Generator](/troikagenerator) is by far the most popular thing on this website. _I'm sure all the other crap will catch on soon..._

So let's take this opportunity to explore the guts inside these tools. This blog post will try to avoid as much jargon as possible. If you want to just dive into my code you can see everything in my [github repository](https://github.com/davidschirduan)...good luck making sense of it!

## Before we start...

I am a software engineer by trade (technically DevOps or SysAdmin). The code I write for my day job is profressional, commented, tested, and refined.

The stuff I write for my blog is weird, experimental, and very very sloppy. I know that sounds like humility or self-deprecation, but I'm actually just being honest.

For some truly beautiful and well-designed generators check out the one for [UVG](https://www.wizardthieffighter.com/tools/uvg-digital-referee-screen.html) or for [A Rasp of Sand](https://brstf.github.io/shifting-sands/).

## Design Goals

Software is really open-ended and it's easy for a project to become bloated and unwieldy. Thus I limit myself to 3 primary goals when  I set out to make a generator:

**1 - Keep it simple.** I usually rely on vanilla javascript and try to use as few libraries and add-ons as possible. This limits a lot of what I can do, but also means I spend more time experimenting and less time learning. _Ugh, I hate learning._

**2 - Mobile-first.** Not only does this reinforce the first goal, but it also means that these tools will be more useful AT the table.

I think this is really important to stress before we dive into the weeds. Mobile-friendly means that a generator shouldn't have more than one or two buttons. It means that text needs to be flexible for any screen size. It means I don't have room to organize multiple columns or pages of results.

Most importantly, it means I can use this an excuse for sloppy coding!

**3 - Useful.** Useful for me, I mean. I hope other people use it, but I design them for myself first. After all, this is just for funsies. As soon as it works, I stop messing with it.

## The Process

First we sit down and think about what we want this generator to do.

For the purposes of this example, let's look at my most complicated (and personal favorite) generator: [Tempered Legacy](/tempered-legacy).

The goal is to generate unique weapons with powers/abilities that are unlocked through sidequests.

Let's break that down further. Each weapon will have a few parts:

 - Weapon Name
 - Description/Appearance
 - Power #1 (unlocked)
 - Power #2 
 - The Lock for Power #2

And presentation can be really simple at firstl just a bunch of text. We'll make it look pretty laer.

Final part of the planning process is to write up a complete example so we know what we want the result to look like. Here's a simple example of a Tempered Weapon (that I made up just now without looking at anything else):

> **Forged Grassblade**
> A spear made of bamboo and fractured crystal. It was made to slay the demon of the woods.
> - Power 1 (unlocked): If this spear breaks, it appears in your hand the next morning completely whole.
> - Power 2 Lock: Janice discovered the spear but never found the courage to wield it. Train someone else to use this weapon to unlock this Power.
> - Power 2: As long as the wielder holds this weapon, they are a master of spear-fighting.

Now that we have an example, let's make some tables.

## Database

The hard part isn't really the programming stuff; it's the content. You can create millions of unique weapons, but if they are nonsensical or boring then no one will use it. Imagine if my generator made stuff like:

> **Ajlknsdf Dagger**
> Red blue Alchemy with extra fingers
> - Power 1: Fireball
> - Power 2 Lock: Kill 13 rats
> - Power 2: Magic Missile

That isn't useful to anyone. So we need to create a database that is interesting no matter matter how elements are combined. This is surprisingly difficult.

Say we have a table for weapon names. It takes one word from each column and slams them to make a weapon name:

|Word 1|Word 2|
|Sharp|Edge|
|Forged|Fury|
|Elegant|Spindle|
|Dark|Blood|

While some of these combinations are cool ("Elegant Edge", "Dark Fury") others are bland or confusing ("Dark Spindle", "Sharp Blood"). We need to build our databse

## pseudoWHAT?!!

Pseudocode is the programming equivelent of a rough sketch. A chance to jot down the basics and think through how this thing will work. 

Here's the pseudocode for our generator:

```
Load a bunch of t



