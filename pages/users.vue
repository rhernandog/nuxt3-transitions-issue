<script setup>
  import { gsap } from "gsap";

  import pageTransitionConfig from "@/static/pageTransitions";

  useHead({
    title: "Users"
  });

  definePageMeta({
    pageTransition: pageTransitionConfig,
  });
    
  const onEnterList = (el, done) => {
    console.log(el);
    console.log(el.dataset.index);
    // done();asd
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      delay: 0.7 + (0.05 * el.dataset.index),
      onComplete: done,
    });
  }

  const users = [
    {
      "id":"28c641fa-ce85-442c-abc6-e5f2ec68a72c",
      "name":"Rici Endon",
      "email":"rendon0@tmall.com",
      "country":"South Africa"
    },
    {
      "id":"668b021a-8310-402b-9627-7ca1bdfd49b3",
      "name":"Roth Camps",
      "email":"rcamps1@whitehouse.gov",
      "country":"Nigeria"
    },
    {
      "id":"a9fa6595-63e4-4e95-8a20-ed32cad20cb8",
      "name":"Pansy Perri",
      "email":"pperri2@time.com",
      "country":"Greece"
    },
    {
      "id":"2f198da2-a16e-453f-8bd5-2eaa86a6e24b",
      "name":"Cherice Derkes",
      "email":"cderkes3@shutterfly.com",
      "country":"Philippines"
    },
    {
      "id":"254e3cd5-d8b7-4c93-9bba-7d903fe81b08",
      "name":"Delores Kydd",
      "email":"dkydd4@yahoo.com",
      "country":"Mexico"
    },
    {
      "id":"fb5618b0-88c3-4c7b-aa23-6a38bd4483a4",
      "name":"Cthrine Parzis",
      "email":"cparzis5@who.int",
      "country":"Tunisia"
    },
    {
      "id":"07ad3192-16d0-4342-9c82-cb326cc9ae67",
      "name":"Deerdre Bantick",
      "email":"dbantick6@ocn.ne.jp",
      "country":"Russia"
    },
    {
      "id":"848649ef-b124-48f1-8ed4-1522c433e494",
      "name":"Inez Syson",
      "email":"isyson7@taobao.com",
      "country":"Argentina"
    },
    {
      "id":"8e205f80-7d10-4e91-a41d-b15848b36e93",
      "name":"Nicolas Struis",
      "email":"nstruis8@squidoo.com",
      "country":"Macedonia"
    },
    {
      "id":"4c212403-59a6-44c4-86f0-72b86edcf060",
      "name":"Zeb Perford",
      "email":"zperford9@indiegogo.com",
      "country":"China"
    }
  ];
</script>

<template>
  <main class="flex-grow bg-lime-200 opacity-0">
    <div class="container mx-auto px-4 py-8 pt-12">
      <h1 class="text-center font-semibold text-3xl mb-12">USERS</h1>
      <div class="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        <TransitionGroup
          :css="false"
          @enter="onEnterList"
          :appear="true"
        >
          <div
            v-for="(user, index) in users"
            :key="user.id"
            :data-index="index"
            class="bg-white rounded-lg p-6 border border-gray-200 shadow-md text-gray-800 opacity-0 scale-90"
          >
            <h3 class="text-xl text-center mb-4">{{ user.name }}</h3>
            <div>
              <p>Email: {{ user.email }}</p>
              <p>Country: {{ user.country }}</p>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </main>
</template>
