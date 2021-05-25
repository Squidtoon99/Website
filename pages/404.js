import Link from "next/link";

export default function Custom404() {
  return (
    <h1 className="flex h-screen">
      <div className="m-auto text-center">
        Uh Oh! Your not supposed to be here!
        <br />
        <Link href="/">
          <a className="text-3xl">
            <strong>Take me out of this place!</strong>
          </a>
        </Link>
      </div>
    </h1>
  );
}
