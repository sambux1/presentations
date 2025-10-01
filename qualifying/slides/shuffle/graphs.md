# Example: Graph Algorithms

<br>

<v-clicks>

Not easy to efficiently express a graph obliviously.

</v-clicks>

<v-clicks>

- Lots of data-dependent operations

</v-clicks>

<br>

<v-clicks>

The GraphSC paradigm.

</v-clicks>

<v-clicks>

- Encode the graph as a single list
- The list has two orderings
- Two important operations, scatter and gather
- Each operation is efficiently only in one of the orderings
- Shuffling allows us to convert between the orderings

</v-clicks>

<div class="absolute top-36" style="right:-18rem; width:64rem;">
  <div class="text-center">
    <img src="../../figures/graph.png" class="w-1/5 block mx-auto"/>
    <br>
    <img src="../../figures/graph-source.png" class="w-1/4 block mx-auto" v-click="4" />
    <br>
    <img src="../../figures/graph-destination.png" class="w-1/4 block mx-auto" v-click="5" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>