import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cdrzyjhfvjeaowbmhzgi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzk1OTY0MCwiZXhwIjoxOTQzNTM1NjQwfQ.WI3GoQmC7Icv3dzzlOrV9fd4AgJOPp8wnliga17jsdU"
);

export const storeQuestion = async (question, answer) => {
  const { data, error } = await supabase
    .from("membean")
    .upsert([{ question: question, answer: answer }]);

  if (error) {
    console.log(error.message);
    throw error;
  }

  return data || [];
};

export const getAnswer = async (question) => {
  const { data, error } = await supabase
    .from("membean")
    .select()
    .eq("question", question);

  if (error) {
    console.log(error.message);
    throw error;
  }

  return data || [];
};
