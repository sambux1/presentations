---
# You can also start simply with 'default'
theme: seriph
background: white
colorSchema: light
# some information about your slides (markdown enabled)
title: OPPS Presentation
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
---

<style>
.slidev-layout, .slidev-page {
  background: white !important;
  color: black !important;
}

.slidev-layout h1, .slidev-layout h2, .slidev-layout h3, 
.slidev-layout h4, .slidev-layout h5, .slidev-layout h6 {
  color: black !important;
}

.slidev-layout p, .slidev-layout li, .slidev-layout strong {
  color: black !important;
}

/* Indent bullets that come after headings or paragraphs */
.slidev-layout h1 + ul,
.slidev-layout h2 + ul,
.slidev-layout h3 + ul,
.slidev-layout h4 + ul,
.slidev-layout h5 + ul,
.slidev-layout h6 + ul,
.slidev-layout p + ul {
  margin-left: 2rem;
}
</style>


## Privacy-Preserving Machine Learning on Web Browsing for Public Opinion

<br>
<br>

**Sam Buxbaum**

Lucas M. Tassis, Lucas Boschelli, Giovanni Comarela, Mayank Varia, Mark Crovella, Dino P. Christenson

<br>

<div class="relative flex justify-center items-center w-full">
  <img src="/figures/logos/boston-university.png" alt="Boston University" class="h-20 absolute" style="left: calc(50% - 180px); transform: translateX(-50%);" />
  <img src="/figures/logos/ufes.png" alt="UFES" class="h-20" />
  <img src="/figures/logos/wash-u.jpg" alt="Washington University in St. Louis" class="h-20 absolute" style="left: calc(50% + 170px); transform: translateX(-50%);" />
</div>

<br>

CSCML 25

December 4, 2025

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Hello, I'm Sam Buxbaum

I'm a PhD student at Boston University

And today I'll be presenting a deployment of privacy-preserving machine learning for political polling in the 2024 presidential election.

This presentation is based on a paper that was recently accepted to appear in CSCML and which is now available on the ePrint.
-->

---
src: ./slides/intro/people.md
---

<!-- Background Section -->

---
src: ./slides/polling/traditional.md
---

---
src: ./slides/polling/web-browsing.md
---

---
src: ./slides/polling/prior-work.md
---

---
src: ./slides/polling/two-approaches.md
---

---
src: ./slides/intro/overview.md
---


<!-- System Design Section -->

---
src: ./slides/system/components.md
---

---
src: ./slides/system/client.md
---

---
src: ./slides/system/webserver.md
---

---
src: ./slides/system/backend.md
---

<!-- Plaintext and MPC Learning Algorithm -->

---
src: ./slides/learning/overview.md
---

---
src: ./slides/learning/problem.md
---

---
src: ./slides/learning/plaintext.md
---

---
src: ./slides/learning/translation.md
---

---
src: ./slides/learning/results.md
---

<!-- Lessons Learned and Future Directions Section -->

---
src: ./slides/lessons-future/header.md
---

---
src: ./slides/lessons-future/integrity-matters.md
---

---
src: ./slides/lessons-future/strengthen.md
---

<!-- Conclusion -->

---
src: ./slides/conclusion/thank-you.md
---

---
src: ./slides/payment/payment.md
---

---
src: ./slides/payment/partition.md
---

---
src: ./slides/payment/calculation.md
---

---
src: ./slides/payment/anonymous.md
---