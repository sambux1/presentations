# Sublinear Protocol

<br>

Treat the output of the primary construction as a vector of seeds to pseudorandom correlation generators.

<img src="../../figures/dpf-expansion.png" style="width: 96%">

<br>

- Let $t$ be some sparsity parameter
- Each $\log(2\ell / t)$ bits encodes a unit vector of length $2 \ell / t$
- Compute each unit vector using a distributed point function (DPF)
- Concatenate $t$ unit vectors to obtain a $t$-sparse vector of length $2 \ell$
- Compress into a pseudorandom vector of length $\ell$
    - Reduction to syndrome decoding assumption

<img src="../../figures/compression.png" class="absolute right-12 bottom-12" style="width: 30%">

<SlideCurrentNo class="absolute bottom-8 right-10"/>