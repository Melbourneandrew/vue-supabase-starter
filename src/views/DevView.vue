<script setup lang="ts">
import { ref } from "vue";
import {
  signUpNewUser,
  signInUser,
  getSignedInUser,
  signOutUser,
} from "../lib/Repository";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import ExampleModal from "@/components/ExampleModal.vue";
const exampleModalVisible = ref(false);

const signUp = ref({
  displayName: "",
  email: "",
  password: "",
});

const signIn = ref({
  email: "",
  password: "",
});

async function handleSignUp() {
  const result = await signUpNewUser(
    signUp.value.displayName,
    signUp.value.email,
    signUp.value.password
  );
  console.log("Sign Up Result:", result);
}

async function handleSignIn() {
  const result = await signInUser(
    signIn.value.email,
    signIn.value.password
  );
  console.log("Sign In Result:", result);
}

async function handleGetSignedInUser() {
  const result = await getSignedInUser();
  console.log("Get Signed In User Result:", result);
}

async function handleSignOut() {
  const result = await signOutUser();
  console.log("Sign Out Result:", result);
}
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-6">
      Development Testing View
    </h1>
    <Button
      @click="exampleModalVisible = true"
      label="Open Welcome Modal"
      severity="success"
      class="mb-4"
    />
    <!-- Welcome Modal -->
    <Dialog
      v-model:visible="exampleModalVisible"
      modal
      header=" "
      class="bg-surface-0 text-black border-none w-[800px]"
    >
      <ExampleModal @close="exampleModalVisible = false" />
    </Dialog>
    <!-- Sign Up Section -->
    <section class="mb-8 p-5 border border-gray-300 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Sign Up Test</h2>
      <form
        @submit.prevent="handleSignUp"
        class="flex flex-col gap-3 max-w-sm"
      >
        <InputText
          v-model="signUp.displayName"
          placeholder="Display Name"
          class="p-2"
        />
        <InputText
          v-model="signUp.email"
          placeholder="Email"
          class="p-2"
        />
        <InputText
          v-model="signUp.password"
          type="password"
          placeholder="Password"
          class="p-2"
        />
        <Button
          type="submit"
          label="Test Sign Up"
          severity="success"
        />
      </form>
    </section>

    <!-- Sign In Section -->
    <section class="mb-8 p-5 border border-gray-300 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Sign In Test</h2>
      <form
        @submit.prevent="handleSignIn"
        class="flex flex-col gap-3 max-w-sm"
      >
        <InputText
          v-model="signIn.email"
          placeholder="Email"
          class="p-2"
        />
        <InputText
          v-model="signIn.password"
          type="password"
          placeholder="Password"
          class="p-2"
        />
        <Button
          type="submit"
          label="Test Sign In"
          severity="success"
        />
      </form>
    </section>

    <!-- Get Signed In User -->
    <section class="mb-8 p-5 border border-gray-300 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">
        Get Signed In User Test
      </h2>
      <Button
        @click="handleGetSignedInUser"
        label="Test Get Signed In User"
        severity="success"
      />
    </section>

    <!-- Sign Out User -->
    <section class="mb-8 p-5 border border-gray-300 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">
        Sign Out User Test
      </h2>
      <Button
        @click="handleSignOut"
        label="Test Sign Out"
        severity="success"
      />
    </section>
  </div>
</template>
