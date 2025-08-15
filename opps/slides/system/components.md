# System Design

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <!-- Left side: text + arrows -->
  <div style="flex: 1; max-width: 55%; padding-left: 40px; padding-right: 20px; padding-top: 40px;">
    <div style="display: grid; grid-template-columns: auto 1fr; row-gap: 6rem; align-items: center;">
      <div><h3 v-click="1" style="margin: 0;">Client Plugin</h3></div>
      <div style="position: relative; height: 30px;">
        <Arrow v-click="[1, 2]" v-bind="{ x1: 40, y1: 15, x2: 200, y2: 15 }" />
      </div>
      <div><h3 v-click="2" style="margin: 0;">Webserver</h3></div>
      <div style="position: relative; height: 30px;">
        <Arrow v-click="[2, 3]" v-bind="{ x1: 40, y1: 15, x2: 200, y2: 15 }" />
      </div>
      <div><h3 v-click="3" style="margin: 0;">MPC Backend</h3></div>
      <div style="position: relative; height: 30px;">
        <Arrow v-click="[3, 4]" v-bind="{ x1: 40, y1: 15, x2: 200, y2: 15 }" />
      </div>
    </div>
  </div>

  <!-- Right side: identical to Client Plugin slide -->
  <div style="flex: 1; text-align: right;">
    <img src="../../figures/system-design.png"
         alt="System Design Diagram"
         style="max-width: 90%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>


<!--
We built a system. The system has 3 major components.

First, there's a browser plugin that users install which monitors their web browsing.

Then, there's an intermediate webserver which simplifies the interaction between clients and MPC servers.

Finally, there's the MPC backend which performs the computation.
-->