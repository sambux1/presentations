# Data Partition

<div class="flex flex-col items-center space-y-10">

  <!-- Logos Row -->
  <div v-click="1" class="flex justify-center ml-58 gap-28">
    <img src="../../../figures/logos/bu.png" class="h-20" />
    <img src="../../../figures/logos/wash-u.jpg" class="h-20" />
  </div>


  <!-- Input Section -->
  <div v-click="2" class="grid grid-cols-3 w-full max-w-3xl bg-gray-100 rounded-xl shadow-md p-6 gap-4 items-center text-center">
    <div class="flex items-center justify-center border-r-2 border-gray-300 pr-6">
      <h2 class="text-2xl font-bold">Input</h2>
    </div>
    <div class="flex items-center justify-center">
      <p class="text-lg">Web Browsing Data</p>
    </div>
    <div class="flex items-center justify-center">
      <p class="text-lg">Registered IDs</p>
    </div>
  </div>

  <!-- Output Section -->
  <div v-click="3" class="grid grid-cols-3 w-full max-w-3xl rounded-xl p-6 gap-4 items-center text-center">
    <div class="flex items-center justify-center border-r-2 border-gray-300 pr-6">
      <h2 class="text-2xl font-bold">Output</h2>
    </div>
    <div class="flex items-center justify-center">
      <p class="text-lg">Aggregation by ID</p>
    </div>
    <div class="flex items-center justify-center">
      <p class="text-lg">ID Set per Day</p>
    </div>
  </div>

</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>
