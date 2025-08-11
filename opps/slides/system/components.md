# System Design

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 50%; padding-left: 100px; padding-right: 20px; display: flex; flex-direction: column; gap: 3.2rem; justify-content: center;">
    <!-- Active (black) states -->
    <br>
    <h3 v-click="1" style="margin: 0;">Client Plugin</h3>
    <Arrow v-click="1" v-click.hide="2" v-bind="{ x1:320, y1:164, x2:550, y2:164 }" />
    <br>
    <h3 v-click="2" style="margin: 0;">Webserver</h3>
    <Arrow v-click="2" v-click.hide="3" v-bind="{ x1:320, y1:299, x2:550, y2:299 }" />
    <br>
    <h3 v-click="3" style="margin: 0;">MPC Backend</h3>
    <Arrow v-click="3" v-bind="{ x1:320, y1:434, x2:450, y2:434 }" />
  </div>
  <div style="flex: 1; text-align: right;">
    <img src="../../figures/system-design.png" alt="System Design Diagram" style="max-width: 90%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
We built a system. The system has 3 major components.

First, there's a browser plugin that users install which monitors their web browsing.

Then, there's an intermediate webserver which simplifies the interaction between clients and MPC servers.

-->