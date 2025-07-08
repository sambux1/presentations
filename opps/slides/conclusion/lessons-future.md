# Lessons Learned and Future Directions
<br>

<ol>
  <li v-click="1">Data integrity matters
    <ul>
      <li class="nested-gray" v-click="2">focus on verifying user honesty in reporting</li>
      <li class="nested-gray" v-click="3">balancing more extensive tracking with privacy</li>
    </ul>
  </li>
  <br>
  <li v-click="4">Strengthen the threat model
    <ul>
      <li class="nested-gray" v-click="5">AWS as a single point of failure</li>
      <li class="nested-gray" v-click="6">minimize trust</li>
    </ul>
  </li>
</ol>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>