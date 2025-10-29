---
# try also 'default' to start simple
theme: default
colorSchema: light
# some information about your slides (markdown enabled)
title: JP Morgan Talk
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

<style>
.slidev-layout, .slidev-page {
  background: white !important;
  color: black !important;
}

.slidev-layout strong,
.slidev-layout b {
  font-weight: 1000;
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

## Sorting Out Secure Analytics with Thousands of Users

<br>

October 31, 2025

<br>

#### Sam Buxbaum

<img src="./figures/logos/bu.png" class="absolute bottom-12 left-1/2 -translate-x-1/2" style="width: 20%; height: auto">

<SlideCurrentNo class="absolute bottom-8 right-10"/>

---
src: ./slides/roadmap.md
---

---
src: ./slides/opps/intro.md
---

---
src: ./slides/opps/plan.md
---

---
src: ./slides/opps/polling/traditional.md
---

---
src: ./slides/opps/polling/web-browsing.md
---

---
src: ./slides/opps/polling/prior-work.md
---

---
src: ./slides/opps/polling/two-approaches.md
---

---
src: ./slides/opps/contributions.md
---

<!-- System Design Section -->

---
src: ./slides/opps/system/components.md
---

---
src: ./slides/opps/system/client.md
---

---
src: ./slides/opps/system/webserver.md
---

---
src: ./slides/opps/system/backend.md
---

---
src: ./slides/opps/learning/overview.md
---

---
src: ./slides/opps/learning/problem.md
---

---
src: ./slides/opps/learning/plaintext.md
---

---
src: ./slides/opps/learning/translation.md
---

---
src: ./slides/opps/payment/payment.md
---

---
src: ./slides/opps/payment/partition.md
---

---
src: ./slides/opps/payment/calculation.md
---

---
src: ./slides/opps/payment/anonymous.md
---

---
src: ./slides/opps/next/looking-ahead.md
---

---
src: ./slides/opps/next/more-data.md
---

---
src: ./slides/opps/next/new-approach.md
---

---
src: ./slides/opps/next/scaling-training.md
---

---
src: ./slides/sorting/title.md
---

---
src: ./slides/sorting/roadmap.md
---

---
src: ./slides/sorting/background.md
---

---
src: ./slides/sorting/contributions.md
---

---
src: ./slides/sorting/quicksort.md
---

---
src: ./slides/sorting/iterative.md
---

---
src: ./slides/sorting/radix.md
---

---
src: ./slides/sorting/extracting.md
---

---
src: ./slides/sorting/large-results.md
---

---
src: ./slides/sorting/mpspdz.md
---

---
src: ./slides/orq/roadmap.md
---

---
src: ./slides/orq/title.md
---

---
src: ./slides/orq/intro.md
---

---
src: ./slides/orq/oblivious.md
---

---
src: ./slides/orq/join.md
---

---
src: ./slides/orq/problem.md
---

---
src: ./slides/orq/insight.md
---

---
src: ./slides/orq/operator.md
---

---
src: ./slides/orq/many.md
---

---
src: ./slides/orq/support.md
---

---
src: ./slides/orq/sorting.md
---

---
src: ./slides/orq/queries.md
---

---
src: ./slides/orq/scalability.md
---

---
src: ./slides/orq/system.md
---

---
src: ./slides/orq/future.md
---

---
src: ./slides/summary.md
---

---
layout: center
---
# Thank You!
