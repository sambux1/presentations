# Liu et al. in Practice

<br>

<v-clicks>

LAN Setting

</v-clicks>
<v-clicks>

- Bottlenecked by local computation on the king party
- King needs to perform polynomial interpolation for each gate

</v-clicks>
<v-clicks>

<br>

WAN Setting

</v-clicks>
<v-clicks>

- Latency constrained
- Uses 5% of available bandwidth

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
One of the nice contributions of the Liu et al. paper is that they include a pretty detailed performance analysis, which allows us to see where specifically we should look to scale the protocol even further to more parties.

The performance bottlenecks are quite different in the local area network setting versus the wide area network setting.

In the local area network setting, they are bottlenecked primarily by the local computation on the king party. You'll remember that the king needs to perform a polynomial interpolation for each gate in the computation, so we're constrained by its latency in performing those computations.

In the wide area network setting, we're heavily round constrained, or latency constrained. This is even with constant round protocols. It goes to show how important the constant round complexity was as a design goal, that even after optimizing for minimal round complexity, we're still round constrained. To put some numbers behind this, in their benchmarks, they only use approximately 5% of the available bandwidth.

I believe that each of these bottlenecks suggests a natural extension to the protocol, so I'll talk about two extensions I have in mind with the remaining portion of this talk.
-->