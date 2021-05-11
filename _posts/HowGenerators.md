---
date: 2021-02-25
layout: post
title: "How My Generators Work"
categories: Programming how
tags: design
image: /images/generators.jpg
published: false
---

Hi! In case this is your first time here, I love tabletop content [generators](/generators); particularly digital ones. The [Troika Generator](/troikagenerator) is by far the most popular thing on this website. _I'm sure all the other crap will catch on someday..._

So let's take this opportunity to explore the guts inside these tools. This blog post will try to avoid as much jargon as possible. If you want to just dive into my code you can see everything in my [github repository](https://github.com/davidschirduan)...good luck making sense of it!

## Before we start...

I am a software engineer by trade (technically DevOps or SysAdmin). The code I write for my day job is profressional, commented, tested, and refined.

The stuff I write for my blog is weird, experimental, and very very sloppy. I know that sounds like humility or self-deprecation, but I'm actually just being honest. Potential employers, if you're reading this, don't look at my code!

For some truly beautiful and well-designed generators check out the one for [UVG](https://www.wizardthieffighter.com/tools/uvg-digital-referee-screen.html) or for [A Rasp of Sand](https://brstf.github.io/shifting-sands/).

## Design Goals

Software is really open-ended and it's easy for a project to become bloated and unwieldy. Thus I limit myself to 3 primary goals when  I set out to make a generator:

**1 - Keep it simple.** I usually rely on vanilla javascript and try to use as few libraries and add-ons as possible. This limits a lot of what I can do, but also means I spend more time experimenting and less time learning. I hate learning.

**2 - Mobile-first.** Not only does this reinforce the first goal, but it also means that these tools will be more useful AT the table.

I think this is really important to stress before we dive into the weeds. Mobile-friendly means that a generator shouldn't have more than one or two buttons. It means that text needs to be flexible for any screen size. It means I don't have room to organize multiple columns or pages of results. 

Most importantly, it means I can use this an excuse for sloppy coding!

**3 - Useful.** The content generated should inspire the reader. And, ideally, offer enough variety for the reader to get a dozen inspiring results. Eventually the pattern will play out and result #5295 won't look much different from result #5296.

Let's dive in! Here's the process we'll use to work on our generator

1. Set goals
2. Determine pieces
3. Write examples
4. Create database of pieces
5. Write some code to stitch the pieces together
6. Make it look pretty

## 1. Set goals

First we sit down and think about what we want this generator to do. For this example, let's do something simple. We want a spell generator for [RIPE](/ripe).

Spells in RIPE are named in an "Adjective Noun" format and are stored in an item. The spell can be cast to do anything related to its name.

And just for extra authenticity, I wrote this blog post in its entirety BEFORE I made the final generator, so I'm not working backwards.

## 2. Determine pieces

So every spell has 3 parts:

 - Adjective
 - Noun
 - Item it's stored in

## 3. Write examples

Final part of the planning process is to write up a complete example so we know what we want the result to look like. In the process of writing these examples, we may end up deciding we want more or less pieces to work on.

Here are some examples of a RIPE spell:

> **Frozen Fury**
> Stored in an icy jar.
> Could be cast to slow an enemy, calm a crowd, or read the emotions of a corpse.

> **Silent Shadow**
> Stored in a wispy bit of cloth.
> Could be cast to hide a target in shadow, or move silently in the dark.

> **Truthful Vineyard**
> Stored in a broken wine bottle.
> Could be cast to entangle opponents, or secret a truth-serum wine.

Now that I've written out some spells, I realized that spells in RIPE always include some sample uses to inspire the reader. However I don't know how we could generate the "Could be cast" phrases without doing a TON more work.

These examples helped me realize that the generator should just focus on the three parts: Adjective, Noun, and Item. We'll ignore the "could be cast" segments.

## 4. Create a database of pieces

The hard part isn't really the programming stuff; it's the content. You can create millions of unique weapons, but if they are nonsensical or boring then no one will use it. Imagine if the generator made stuff like:

> **Blue Fireball**
> Stored in a blue ball

> **Red Fireball**
> Stored in a dark ball

> **Orange Fireball**
> Stored in an old ball

That isn't useful to anyone. So we need to create a database full of inspiring pieces that can be combined in various different ways. I use JSON files for my databases. They're low-maintenance and easy to work with. Let's make a JSON database for our spell generator:

```
{
  "Adjective":["Angry", "Silent", "Sleeping", "Firey", "Tough", "Drunk", "Stolen", "Ghostly", "Tangled", "Petrified"],
  "Noun":["Stomach", "Hands", "Meadow", "Tree", "Hammer", "Invention", "Conversation", "Fortune", "Death", "Jar"],
  "Item":["stored in an old boot", "stored in a crystal goblet", "stored in a leaf", "stored in a metal staff", "stored in a tattered scroll", "stored in an acorn", "stored in a lump of coal", "stored in a live bird", "stored in a painting", "stored in a string of beads"]
}
```

I tried to come up with inspiring pieces, but they're not all winners. "Tough Hammer, stored in a metal staff" is pretty dull. But "Drunk Fortune, stored in an old boot" sounds like a blast!

Next let's write some javascript!

## 5. Write some code to stitch the pieces together

Unfortunately, I can't teach you Javascript in this one blog post. In fact you should definitely learn from someone more qualified! But I can share the final code with you and walk you through it.

Look at the real code here.

If your eyes glazed over, then I'll cover the basics.

1. Load the JSON database into the code.
2. Wait until the user clicks a button.
3. Grab a random Adjective. Put it at the beginning of the sentence.
4. Grab a random Noun. Put it after the Adjective.
5. Grab a random Item. Put it at the end of the sentence.
6. Print out the sentence.
7. Start back at step 2.

Alright! Now we've got some sentences. Easy peasy.

## 6. Make it look pretty

This last section is pretty short (see the part about learning from someone more qualified). But again I can cover the basics of web design.

As we stated earlier, mobile support is one of our primary goals. So we keep the design simple:

 - A button for the user to click.
 - A square to display the result.

## Conclusion

That pretty much covers it! Now it's time for me to step into the software dimension and create the generator.

*Time passes, and many foolish mistakes are made and corrected.*

There we go. Generator complete. [You can check it out here](/ripe), and read the [source code here]().

I hope you found this entertaining (Lord knows it isn't very educational). I might do some more programming posts; this was fun to write. Maybe a detailed dive into a more complex generator like [Tempered Legacy](/tempered-legacy)? I dunno. Thanks for reading!