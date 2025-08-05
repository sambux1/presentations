---
# You can also start simply with 'default'
theme: seriph
background: white
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


## Deployment of Privacy-Preserving Machine Learning for Political Polling in the 2024 Presidential Election

<br>
<br>

**Sam Buxbaum**

Lucas M. Tassis, Lucas Boschelli, Giovanni Comarela, Mayank Varia, Mark Crovella, Dino P. Christenson

<br>
<br>

PPML Workshop

August 17, 2025

<SlideCurrentNo class="absolute bottom-8 right-10"/>



<!-- Introduction Section -->

---
src: ./slides/intro/people.md
---

---
src: ./slides/intro/overview.md
---

---
src: ./slides/intro/roadmap.md
---



<!-- Motivation Section -->

---
src: ./slides/motivation/header.md
---

---
src: ./slides/motivation/background.md
---

---
src: ./slides/motivation/traditional.md
---

---
src: ./slides/motivation/two-approaches.md
---



<!-- System Design Section -->

---
src: ./slides/system/header.md
---

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



<!-- Learning Section -->

---
src: ./slides/learning/header.md
---

---
src: ./slides/learning/problem.md
---

---
src: ./slides/learning/algorithm.md
---

---
src: ./slides/learning/mpc.md
---

<!-- Lessons Learned and Future Directions Section -->

---
src: ./slides/lessons-future/header.md
---

---
src: ./slides/lessons-future/integrity-matters.md
---

---
src: ./slides/lessons-future/digging-deeper.md
---

---
src: ./slides/lessons-future/integrity-conclusion.md
---

---
src: ./slides/lessons-future/strengthen.md
---

<!-- Conclusion -->

---
src: ./slides/conclusion/thank-you.md
---