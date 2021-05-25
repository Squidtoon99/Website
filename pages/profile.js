import useSWR from "swr";
import fetch from "../lib/fetch";

export default function Profile() {
  const { data, error } = useSWR("/api/user", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>Hello {data.name}!</div>;
}
