# Traditional Political Polling

<ul>
  <li v-click="1">Data collection takes time
    <ul>
      <li class="nested-gray" v-click="2">High latency between poll commission and results</li>
    </ul>
  </li>
  <li v-click="3">Human-intensive data collection
    <ul>
      <li class="nested-gray" v-click="4">Scaling to collect much more data would be costly</li>
    </ul>
  </li>
  <li v-click="5">Poor geographic and temporal coverage
    <ul>
      <li class="nested-gray" v-click="6">Results are concentrated in key regions immediately before an election</li>
      <li class="nested-gray" v-click="7">Many locations go unpolled, particularly early in an election cycle</li>
    </ul>
  </li>
</ul>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>