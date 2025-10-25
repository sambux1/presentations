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