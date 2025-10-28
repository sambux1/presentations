# Experimental Results

<br>
<br>

<div class="flex justify-center">
    <img src="../../figures/large-sort.png" style="width: 85%">
</div>

<callout x="53" y="22" v-click="1">
    Up to 500m elements!
</callout>

<callout x="84" y="53" v-click="2">
    Memory bound
</callout>

<div class="absolute bottom-8 left-10 text-lg">
    <div><b>SH-DM: </b><em>ABY (2PC)</em></div>
    <div><b>SH-HM: </b><em>Araki et al. (3PC)</em></div>
    <div><b>Mal-HM: </b><em>Fantastic Four (4PC)</em></div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Finally it's time for some results. We implemented quicksort and radix sort with 2 parties, 3 parties, and 4 parties. The only significant difference between the different settings is which oblivious shuffle to use. Oblivious shuffling is very different in the honest majority setting and dishonest majority setting, but the efficiency in the online phase is roughly the same.

What we see in the results is that both quicksort and radixsort are more or less the same, with some minor fluctuations here and there.

The really important point here is the scale. We're able to sort half a billion elements, and the top end of this graph is just two or three hours. This is a scale that has never been reached before to our knowledge.

And a fun little detail here is that we can actually scale quicksort considerably farther than radix sort, because radix sort has some significant memory constraints as we get into these super large input sizes. We can keep scaling both of them arbitrarily as long as we keep increasing the machines' memory, but only quicksort was able to hit half a billion elements on the machines we tested with.
-->