<template>
    <header class="flex flex-col h-10 mx-auto lg:flex-row lg:w-10/12 pt-5">          
      <a title="Farooq Ahmed Khan" href="//farooqahmedkhan.github.io" target="_blank" class="flex w-full-screen lg:w-2/12 text-2xl md:text-2xl lg:text-2xl 2xl:text-4xl justify-center lg:justify-left">
        Farooq Ahmed
      </a>      
      <div class="flex lg:w-10/12 lg:flex-row-reverse mt-5 lg:mt-2">
        <ul class="flex flex-inline my-auto px-2">
          <li><a href="javascript:void(0)" :class="'p-4' + ' ' + (this.currentTab == 'about-me' ? 'bg-blue-900 text-sky-50 ' : '')"      @click="() => this.currentTab = 'about-me'">About me</a></li>
          <li><a href="javascript:void(0)" :class="'p-4' + ' ' + (this.currentTab == 'experience' ? 'bg-blue-900 text-sky-50 ' : '')"    @click="() => this.currentTab = 'experience'">Experience</a></li>
          <li><a href="javascript:void(0)" :class="'p-4' + ' ' + (this.currentTab == 'side-projects' ? 'bg-blue-900 text-sky-50 ' : '')" @click="() => this.currentTab = 'side-projects'">Side Projects</a></li>
        </ul>
      </div>
    </header>
</template>

<script>
const HeaderComponent = {    
    data() {
        return {
          currentTab: 'about-me'
        }
    }  
}

export default HeaderComponent;

</script>
