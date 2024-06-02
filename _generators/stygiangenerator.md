---
date: 2020-08-01
layout: full-page
title: Stygian Library Generator
redirect_from:
  - "/stygiangenerator2"
permalink: stygiangenerator
published: true
hide_description: true
image: /images/StygianHelpDesk.png
description: >
  A mobile-friendly generator for the Stygian Library.
---

<div class="stygian-card">
  <div class="stygian-text" id="stygian-complete">
    <div id="encounterContent">
    </div>
    <div id="levelContent">
      <h2 style="margin-top: 10px;" id="roomName">Welcome</h2>
      <p>The Stygian Library is an adventure designed for old school roleplaying games written by <a href="https://twitter.com/DyingStylishly">Emmy 'Cavegirl' Allen</a>.</p>
      <p>After you've bought a copy of the book, you can use the buttons to generate levels and events.</p>
      <p><a href="https://www.kickstarter.com/projects/soulmuppet/the-stygian-library-remastered">Get it here.</a></p>
      <hr class="stygian-hr">
    <h2 style="margin-top: 10px;" >Finding the Entrance</h2>
    <p>Only a few locations form a proper connection to the Library and thus can be used to access the place. The requirements are:</p>
    <ul>
<li>It must be a collection of books or similar written works. A library, archive, or perhaps a particularly large bookshop.</li>
<li>It must be large enough that you can’t see all of it from the entrance.</li> 
<li>Somebody must have died there (you can kill somebody and an entrance will appear).</li>
</ul>
<p>Any such space will contain an entrance to the Stygian Library. Any collection of books might contain an entrance if the information inside is interesting or potent enough.</p>
  <p>The entrance to the Library is a simple thing. Somewhere in the library, there will be an unmarked door. It is invariably locked. It is probably hidden, perhaps behind a shelf against the wall, beneath wallpaper, in rooms the public are barred from entering, or under a painting or sign. Find it, unlock it, and on the other side the rows of shelves continue.</p>
    </div>
    <img id="stygian-img" src="/images/StygianHelpDesk.png" style="max-height: 300px;float:right;margin-right: -20px;margin-bottom: -20px;">
  </div>
  <div class="stygian-log">
    <div class="stygian-buttons">
        <button class="stygian-button" type="button" onclick="sty_newEvent(true)"><span style="color:cornflowerblue;">Visitor</span> Event</button>
        <button class="stygian-button" type="button" onclick="sty_newEvent(false)"><span style="color:crimson;">Intruder</span> Event</button>
    </div>
    <hr class="stygian-hr-dark">
    <div>
      <h2 style="margin-top: -20px;">Levels</h2>
      <p style="text-align:center;">Click a level to return.</p>
      <div id="logContent">
        <div class="logItem"><a onclick="sty_goDeeper()" style="color:white"><p><span class="logLevel">▼</span><strong>Enter</strong> the<br>Stygian Library</p></a></div>
      </div>
    </div>
      <hr class="stygian-hr-dark">
      <p style="text-align:center;">Bookmark this page URL <br>to save this EXACT Library.</p>
  </div>
</div>

<!--Necessary for allowing the sticky buttons and background changes-->
<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
  }
  hy-push-state, hy-drawer {
  overflow: clip;
  display: contents;
  }
  .stygian-text h3 {
  margin-top: 0px;
  }

 /* Necessary for the pdf download*/

  .stygian-text ul {
  list-style: none; /* Remove default bullets */
}

.stygian-text ul li::before {
  content: ">";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

/* Stygian Generator */
.stygian-card {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  color: black;
}

.stygian-card .permalink {
  display: none;
}

.stygian-card a {
  color: black;
}

.stygian-log {
  background-color: #313131;
  color: #F5F5F5;
  padding: 0px 20px;
  font-size: 14px;
  flex: 0 0 300px;
  text-align: center;
  position: sticky;
  position: -webkit-sticky;
  top: 6rem;
}

.stygian-log p {
  text-align: left;
}

.stygian-text {
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 20px;
  font-size: 14px;
  min-width: 300px;
  flex: 1 1 400px;
  margin-bottom: 20px;
}

.logItem p {
  color: white;
  background-color: black;
  padding: 5px;
  transition: all 0.2s;
  cursor: pointer;
  margin: 0px;
}

.logItem h3 {
  color: white;
  background-color: black;
  padding: 10px;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 0px;
  height: 100%;
}

.logLevel {
  font-size: 4em;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
  float: left;
  font-weight: bold;
  line-height: .7em;
}

.logItem {
  padding: 5px;
  background-color: black;
  border: 0.2em solid #F5F5F5;
}

.logItem p:hover {
  color: #000000;
  background-color: #F5F5F5;
}

.logItem h3:hover {
  color: #000000;
  background-color: #F5F5F5;
}

.stygian-button {
  display: inline-block;
  max-width: 350px;
  padding: 0.35em 1.2em;
  border: 0.1em solid #F5F5F5;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: #F5F5F5;
  background-color: black;
  text-align: center;
  transition: all 0.2s;
  width: 100%;
  cursor: pointer;
}

.stygian-button:hover {
  color: #000000;
  background-color: #F5F5F5;
}

@media all and (max-width:30em) {
  .stygian-button {
    display: block;
    margin: 0.4em auto;
  }
}

/* Glyph, by Harry Roberts */

hr.stygian-hr {
  overflow: visible;
  /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
  line-height: 2em;
}

hr.stygian-hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}

hr.stygian-hr-dark {
  overflow: visible;
  /* For IE */
  padding: 0;
  border: none;
  border-top: medium double white;
  color: white;
  text-align: center;
  line-height: 2em;
}

hr.stygian-hr-dark:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: #313131;
}

hr.stygian-hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
}

</style>

<script async src="/assets/generator_resources/stygiangenerator.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
