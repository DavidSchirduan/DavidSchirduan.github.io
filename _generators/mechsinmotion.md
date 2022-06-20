---
date: 2000-05-01
layout: full-page
title: Mechs in Motion Action Tracker
permalink: mechsinmotion
published: true
hide_description: true
image: /images/StygianHelpDesk.png
description: >
  An online tracker for Mechs in Motion
---

<div class="mechCard">
  <h3>Edit the text box to configure your Action Tracks</h3>
  <div class="row">
    <div class="col-4">
      <textarea id="quickEntry">Petrichor4qmmmmq&#10;
Absalom-33mmqqoq&#10;
Titania6pmmppmqmmppqmpp&#10;
Margreave3mqqoq&#10;
Berserker5mmmmqq&#10;
Assault4mmmmqs&#10;
Elite4qmmmqqmmmuf&#10;
Goliath3qmmq&#10;
Priest5qqmmmmm</textarea>
    </div>
    <div class="col-8">
      <table id="motionKey">
        <tr>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/movehex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/quickactionhex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/freeactionhex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/protocolhex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/fullaction1hex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/fullaction2hex.png"></td>
        </tr>
        <tr>
          <td>
            M = Move
          </td>
          <td>
            Q = Quick
          </td>
          <td>
            F = Free
          </td>
          <td>
            P = Protocol
          </td>
          <td colspan="2">
            U = Full
          </td>
        </tr>
        <tr>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/white.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/overchargehex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/boostmovehex.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/superheavyhex1.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/superheavyhex2.png"></td>
          <td><img class="actionImg" src="/assets/generator_resources/mechHexes/white.png"></td>
        </tr>
        <tr>
          <td>
            R = Reaction
          </td>
          <td>
            O = Overcharge
          </td>
          <td>
            B = Boost Movement
          </td>
          <td colspan="2">
            S = Superheavy
          </td>
          <td>
            ? = Unknown
          </td>
        </tr>
      </table>
    </div>
  </div>
  <hr>
  <button class="stygian-button" type="button" onclick="startRound()">Start Round</button>
  <button class="stygian-button" type="button" onclick="nextAction()">Next
    Action</button>
  <button class="stygian-button" type="button" onclick="endRound()">End Round</button>
  <hr>
  <table id="mechtracks"></table>
</div>

<!--Necessary for allowing the sticky buttons and background changes-->
<style>

hy-push-state, hy-drawer {
overflow: clip;
display: contents;
}

</style>

<script async src="/assets/generator_resources/mechsinmotion.js" language="javascript" type="text/javascript"></script>
