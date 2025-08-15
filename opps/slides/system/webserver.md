# Webserver

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <br>
    <ul>
      <li v-click="1">Simplifies interaction with clients</li>
      <li v-click="2">Collects basic metadata</li>
      <li v-click="3">Never sees any private data</li>
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

<!--
Next, we have an intermediate webserver which exists to simplify the interaction with the clients.

We don't want to have the MPC servers running all the time, and we don't want the client to have to manage 3 connections.

The webserver also collects basic metadata, for example, so that we can pay users for their participation.

We emphasize that because secret shares are end-to-end encrypted from clients to the computing parties, the webserver never sees any private data.
-->