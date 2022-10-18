import { useEffect, useState } from "preact/hooks";
import { slugify } from "https://deno.land/x/slugify@0.3.0/mod.ts";

export default function AddProject() {
  const [username, setTitle] = useState("");

  const subscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (username.trim().length !== 0) {
      const seo_url = slugify(username, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]+/g,
        lower: false,
      }) || "Your Name";
      console.log(seo_url);
      const pageCatch = encodeURIComponent(seo_url).replace(/%20/g, "-");
      window.location.href = `/${pageCatch}`;
    } else {
      console.log("empty input data");
    }
  }, [username]);

  return (
    <>
      <div class="container mx-auto px-4">
        <div class="flex flex-col justify-center items-center">
          <form method="GET" className="m-7 flex">
            <input
              id="username"
              name="username"
              method="POST"
              className="text-center rounded-l-lg p-0 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Your Name"
              autoComplete="off"
              onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
              value={username}
            />
            <button
              onClick={subscribe}
              className="px-4 rounded-r-lg bg-purple-400 text-gray-800 font-bold p-4 uppercase border-purple-500 border-t border-b border-r"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
