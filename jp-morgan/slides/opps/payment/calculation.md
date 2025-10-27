# Calculating Payments

<br>

<v-clicks>

WashU needed to know which users sent data on which days.

Users send private tags.

<div v-click="3" style="margin-left: 2rem">

$\texttt{tag = Hash(id || date)}$

</div>

<callout x="50" y="42" v-click="4">

$\approx 96$ bits of entropy

</callout>

</v-clicks>

<br>

<div style="margin-left: 2rem">

<v-clicks>

- BU sends all collected tags to WashU
- WashU computes all combinations of users and dates and checks for matches

</v-clicks>

</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
We'll start with the computation of WashU's output, which is the users that were active in the sample on a given day.

The mechanism we use to solve the problem is we have users attach a private tag to each upload. This tag is the hash of their ID concatenated with the current date. This is a form of message-locked encryption.

The IDs have about 96 bits of entropy. This isn't super high, but our adversary here is me on my own computer, so that's comfortably beyond my own brute force capabilities.

By operating the webserver that clients interact with, BU collects all the private tags, and then we just send all the tags to WashU.

Then, for each user in the user list, the folks at WashU check if they submitted data on a given date by computing the hash for that day and checking whether it appears in the set they receive from BU.
-->