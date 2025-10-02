# Primary Construction

<img src="../../figures/perm-corr.png" style="width: 35%; float: right">

<br>

<v-clicks>

- Parties agree on a random vector $\mathbf{x}$ by computing $x_i = H(i)$
- $S$ samples $\pi \leftarrow S_n$
- $R$ samples a random PRF key $k$
- $R$ sets $A_i = F_k(x_i)$ in plaintext
- $S$ permutes $\mathbf{x}$ by $\pi$ to set OPRF inputs
- Parties set $B$ and $C$ as the OPRF outputs

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>