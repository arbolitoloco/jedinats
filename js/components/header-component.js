class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav x-data="{show:false}" class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span class="font-semibold text-xl tracking-tight">ASU JEDI Naturalists</span>
        </div>
        <div class="block md:hidden">
          <button @click="show=!show" class="flex items-center px-3 py-2 border rounded text-gray-100 border-gray-200 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div @click.away="show = false" :class="{ 'block': show, 'hidden': !show }" class="w-full block flex-grow md:flex md:justify-end md:w-auto">
          <div>
            <a href="/" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-green-400 font-semibold border-2 border-transparent hover:border-2 hover:border-green-400 hover:underline mt-4 md:mt-0">Home</a>
            <a href="/about" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-green-400 font-semibold border-2 border-transparent hover:border-2 hover:border-green-400 hover:underline mt-4 md:mt-0">About</a>
          </div>
        </div>
      </nav>
    </header>
    `;
  }
  // connectedCallback() {
  //   this.innerHTML = `
  //   </header>
  //   <header x-data="{ mobileMenuOpen : false }" class="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-black text-white font-semibold py-4 px-6 relative">
  //     <a href="#">
  //       <span>ASU JEDI Naturalists</span>
  //     </a>
  //     <button @click="mobileMenuOpen = !mobileMenuOpen" class="inline-block md:hidden w-8 h-8 bg-green-600 text-white p-1">
  //       <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  //     </button>
  //     <nav class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-black text-green-300 p-6 pt-0 md:p-0" :class="{ 'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen }"  @click.away="mobileMenuOpen = false">
  //       <a href="/" class="block py-1 text-green-300">Home</a>
  //       <a href="/jedis" class="block py-1 text-green-300">Our Naturalists</a>
  //       <a href="/about" class="block py-1 text-green-300">About</a>
  //     </nav>
  //   </header>
  //   `;
  // }
}
customElements.define("header-component", Header);
