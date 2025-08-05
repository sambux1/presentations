# Webserver

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <ul>
      <li v-click="1">Simplifies interaction with clients</li>
      <li v-click="2">Collects basic metadata
        <ul>
          <li class="nested-gray" v-click="3">For payment and location tracking</li>
        </ul>
      </li>
      <li v-click="4">Never sees any private data
        <ul>
          <li class="nested-gray" v-click="5">Secret‐shares are end-to-end encrypted to the parties</li>
        </ul>
      </li>
    </ul>
  </div>
  <div style="flex: 1; text-align: right;">
      <img src="../../figures/system-design.png" alt="System Design Diagram" style="max-width: 90%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>