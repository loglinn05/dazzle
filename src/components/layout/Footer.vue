<template>
  <div class="bg-violet-300">
    <div class="max-w-screen-2xl mx-auto p-10">
      <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10 sm:gap-20 gap-14">
        <div class="flex flex-col items-center">
          <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-5">Info</h3>
          <router-link
            to="/"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            Home
          </router-link>
          <router-link
            to="#"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            About Us
          </router-link>
          <router-link
            to="#"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            Payment
          </router-link>
          <router-link
            to="#"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            Delivery
          </router-link>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-5">Opening Hours</h3>
          <p class="text-violet-700 sm:text-lg text-base font-text">New York, Stylish str.</p>
          <p class="text-violet-700 sm:text-lg text-base font-text">Mon-Fri: 9:00 - 18:00</p>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-5">Contacts</h3>
          <a
            href="tel:+13687402345"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            +1 (368) 740-2345
          </a>
          <a
            href="tel:+16198702478"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            +1 (619) 870-2478
          </a>
          <a
            href="mailto:dazzle@example.com"
            class="text-rose-600 hover:text-rose-500 active:text-rose-500 focus:text-rose-500 visited:text-rose-800 sm:text-lg text-base font-text transition-all duration-500 text-shadow shadow-fuchsia-500 hover:shadow-transparent"
          >
            dazzle@example.com
          </a>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-5">Follow Us</h3>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="me-3"
            >
              <span
                class="pi pi-facebook text-5xl bg-clip-text bg-facebook-gradient text-transparent"
              ></span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
            >
              <span
                class="pi pi-instagram text-5xl bg-clip-text bg-instagram-gradient text-transparent"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
