import { supabase } from "./supabaseClient";

export async function getSignedInUser() {
  return supabase.auth.getUser();
}

export async function isUserSignedIn() {
  const loggedIn = await supabase.auth.getSession();
  return loggedIn.data.session !== null;
}

export async function signUpNewUser(
  displayName: string,
  email: string,
  password: string
) {
  // First sign up the user
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        display_name: displayName,
      },
    },
  });

  if (error) {
    return { data, error };
  }

  // Then sign them in automatically
  const { data: signInData, error: signInError } =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

  return { data: signInData, error: signInError };
}

export async function signInUser(
  email: string,
  password: string
) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  return { data, error };
}

export async function signOutUser() {
  return await supabase.auth.signOut();
}
