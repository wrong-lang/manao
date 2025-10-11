// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import { Html } from "@elysiajs/html";

export function SoundboardController() {
  return (
    <main class="flex min-h-screen flex-col space-y-8 p-6">
      <h1 class="text-center text-4xl font-bold">🔊 Soundboard Controller</h1>

      <div
        id="soundboard"
        class="mx-auto grid w-full grid-cols-3 gap-4 p-4 lg:grid-cols-5"
      ></div>

      <section class="rounded-lg bg-white/10 p-6 shadow-md">
        <h2 class="mb-3 text-2xl font-semibold">Add New Sound</h2>
        <div class="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <input
            id="soundName"
            type="text"
            placeholder="Sound name"
            class="input input-bordered flex-1"
          />
          <input
            id="soundUrl"
            type="text"
            placeholder="Sound URL"
            class="input input-bordered flex-1"
          />
          <button id="addSound" class="btn btn-accent">
            Add Sound
          </button>
        </div>
      </section>

      <section class="bg-base-100 flex flex-wrap justify-center gap-4 rounded-lg p-4 shadow-md">
        <button id="exportBtn" class="btn btn-success">
          Export Sounds
        </button>
        <label for="importFile" class="btn btn-warning cursor-pointer">
          Import Sounds
        </label>
        <input type="file" id="importFile" accept=".json" class="hidden" />
        <button id="resetBtn" class="btn btn-error">
          Reset to Default
        </button>
      </section>

      <div class="text-center">
        <a
          href="/soundplayer"
          target="_blank"
          class="btn btn-link"
          rel="noopener"
        >
          Open Sound Player
        </a>
      </div>

      <input type="checkbox" id="editModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="editModal"
            id="closeModal"
            class="btn btn-sm btn-circle absolute top-3 right-3"
          >
            ✕
          </label>
          <h3 class="mb-4 text-xl font-bold">Edit Sound</h3>
          <div class="flex flex-col space-y-3">
            <input
              id="editSoundName"
              type="text"
              placeholder="Sound name"
              class="input input-bordered w-full"
            />
            <input
              id="editSoundUrl"
              type="text"
              placeholder="Sound URL"
              class="input input-bordered w-full"
            />
            <div class="flex space-x-3">
              <button id="saveEditSound" class="btn btn-success flex-1">
                Save Changes
              </button>
              <button id="deleteSound" class="btn btn-error flex-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
