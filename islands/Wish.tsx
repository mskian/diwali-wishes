import { useState } from "preact/hooks";
import { slugify } from "https://deno.land/x/slugify@0.3.0/mod.ts";

export default function AddProject() {
  const [userName, setTitle] = useState("");

  const addProject = () => {
    if (userName) {
      const seo_url = slugify(userName, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]+/g,
        lower: false,
      }) || "Your Name";
      const pageCatch = encodeURIComponent(seo_url).replace(/%20/g, "-");
      window.location.href = `/${pageCatch}`;
    } else {
      window.location.href = `/`;
    }
  };

  return (
    <>
      <div
        class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
        style="background-color: #94a3b8"
      >
        <div class="relative mt-1">
          <input
            type="text"
            onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-lg"
            placeholder="Your Name"
            autocomplete="off"
            required
          />
        </div>
        <button
          onClick={() => addProject()}
          class="block w-full px-5 py-3 text-lg font-medium text-gray-700 bg-purple-200 rounded-lg"
        >
          Create Now
        </button>
      </div>
    </>
  );
}
