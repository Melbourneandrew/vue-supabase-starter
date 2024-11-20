<template>
  <div class="flex flex-col mt-[-13px] px-[30px]">
    <div class="text-[36px] font-bold mb-4">
      Welcome to Vue-Supabase-Starter!
    </div>

    <div class="text-[18px] space-y-4">
      <p>
        This serves as a starting point for a Vue.js application
        that uses Supabase for authentication and database
        storage.
      </p>
    </div>

    <!-- Actions -->
    <div class="flex justify-end mt-[30px]">
      <Button
        label="Lets Go!"
        @click="$emit('close')"
        variant="filled"
        class="text-white bg-black"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
defineEmits(["close"]);
</script>
