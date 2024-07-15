<template>
  <div>
    <h2 class="text-4xl sm:text-3xl text-pink-700 font-header mb-10">Categories</h2>
    <div class="grid grid-cols-6 gap-4">
      <div
        class="group relative lg:col-span-2 md:col-span-3 col-span-6 transition-all duration-700 hover:shadow-xl overflow-hidden"
      >
        <router-link
          to="/products/womens-clothes"
          class="absolute w-full h-full z-10 bg-purple-500/[0.2] flex justify-center items-end"
        >
          <h3
            class="sm:text-3xl text-2xl text-pink-700 font-header font-semibold text-shadow shadow-white"
          >
            Women's clothes
          </h3>
        </router-link>
        <img
          src="../../../assets/img/category-1.jfif"
          class="w-full h-full object-cover group-hover:scale-105 transform transition duration-500"
        />
      </div>
      <div
        class="group relative lg:col-span-2 md:col-span-3 col-span-6 transition-all duration-700 hover:shadow-xl overflow-hidden"
      >
        <router-link
          to="/products/womens-shoes"
          class="absolute w-full h-full z-10 bg-purple-500/[0.2] flex justify-center items-start"
        >
          <h3 class="sm:text-3xl text-2xl text-pink-700 font-header font-semibold">
            Women's shoes
          </h3>
        </router-link>
        <img
          src="../../../assets/img/category-2.jpg"
          class="w-full h-full object-cover group-hover:scale-105 transform transition duration-500"
        />
      </div>
      <div
        class="group relative lg:col-span-2 md:col-span-3 col-span-6 transition-all duration-700 hover:shadow-xl overflow-hidden"
      >
        <router-link
          to="/products/mens-clothes"
          class="absolute w-full h-full z-10 bg-purple-500/[0.2] flex justify-center items-start"
        >
          <h3
            class="sm:text-3xl text-2xl text-pink-700 font-header font-semibold text-shadow shadow-white"
          >
            Men's clothes
          </h3>
        </router-link>
        <img
          src="../../../assets/img/category-3.jpg"
          class="w-full h-full object-cover group-hover:scale-105 transform transition duration-500"
        />
      </div>
      <div
        class="group relative lg:col-span-3 md:col-span-3 col-span-6 transition-all duration-700 hover:shadow-xl overflow-hidden"
      >
        <router-link
          to="/products/mens-shoes"
          class="absolute w-full h-full z-10 bg-purple-500/[0.2] flex justify-center items-start"
        >
          <h3
            class="sm:text-3xl text-2xl text-pink-700 font-header font-semibold text-shadow shadow-white"
          >
            Men's shoes
          </h3>
        </router-link>
        <img
          src="../../../assets/img/category-4.avif"
          class="w-full h-full object-cover group-hover:scale-105 transform transition duration-500"
        />
      </div>
      <div
        class="group relative lg:col-span-3 col-span-6 transition-all duration-700 hover:shadow-xl overflow-hidden"
      >
        <router-link
          to="/products/accessories"
          class="absolute w-full h-full z-10 bg-purple-500/[0.2] flex justify-center items-start"
        >
          <h3
            class="sm:text-3xl text-2xl text-pink-700 font-header font-semibold text-shadow shadow-white"
          >
            Accessories
          </h3>
        </router-link>
        <img
          src="../../../assets/img/category-5.jpg"
          class="w-full h-full object-cover group-hover:scale-105 transform transition duration-500"
        />
      </div>
    </div>
  </div>
</template>
