const fixture = `
<div class="flex w-screen h-screen p-10 space-x-4 overflow-auto text-gray-700">
<div class="flex flex-col flex-shrink-0 w-64 bg-gray-200 border border-gray-300">
  <div class="flex flex-col items-center" id="buttons">
    <a href="#" id="prev-button">Prev</a>
    <a href="#" id="next-button">Next</a>
  </div>

  <div class="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white">
    <span class="block text-sm font-medium"><span id="total-pokemon">1126</span> Pokemon</span>
  </div>
  <div class="flex flex-col px-2 pb-2 overflow-auto" id="list-container">
  <div class="pokemon">bulbasaur</div>
  <div class="pokemon">ivysaur</div>
  <div class="pokemon">venusaur</div>
  <div class="pokemon">charmander</div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  <div class="pokemon"></div>
  </div>
</div>
<div id="pokemon" class="mr-44"></div>
</div>`;

export default fixture;
