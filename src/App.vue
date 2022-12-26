<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex flex-col h-1/6 mx-auto lg:w-10/12 pt-5">          
      <a title="Farooq Ahmed Khan" href="//farooqahmedkhan.github.io" target="_blank" class="flex w-full-screen h-1/2 text-2xl md:text-2xl lg:text-2xl 2xl:text-4xl justify-center">
        Farooq Ahmed
      </a>      
      <div class="flex mx-auto h-1/2">
        <ul class="flex flex-inline my-auto px-2">
          <li><a href="javascript:void(0)" :class="'p-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl ' + ' ' + (this.currentTab == 'about-me' ? 'bg-blue-900 text-sky-50 ' : '')"      @click="() => this.currentTab = 'about-me'">About me</a></li>
          <li><a href="javascript:void(0)" :class="'p-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl ' + ' ' + (this.currentTab == 'experience' ? 'bg-blue-900 text-sky-50 ' : '')"    @click="() => this.currentTab = 'experience'">Experience</a></li>
          <li><a href="javascript:void(0)" :class="'p-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl ' + ' ' + (this.currentTab == 'side-projects' ? 'bg-blue-900 text-sky-50 ' : '')" @click="() => this.currentTab = 'side-projects'">Side Projects</a></li>
        </ul>
      </div>
    </header>


    <section class="flex flex-col mt-10 w-10/12 mx-auto border-4 border-red-500 h-4/6 sm:mt-10">
      <strong class="my-auto h-0.1">Hello! I am Farooq</strong>
      <p class="my-auto h-0.1">
        Software developer & architect. Currently working at Nationwide Careservices as a backend developer.
      </p>
    </section>

    <footer class="w-10/12 mx-auto border-2 border-red-400 text-center my-2">
      <span class="mx-auto w-full">Copyright @ 2022 - Farooq Ahmed</span>
    </footer>
  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        currentTab: 'about-me'
      }
    }
  }

</script>
