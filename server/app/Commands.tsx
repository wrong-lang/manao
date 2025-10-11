// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import { Html } from "@elysiajs/html";

export function CommandManager() {
  return (
    <main class="min-h-screen p-6">
      <h1 class="mb-6 text-center text-3xl font-bold">🚀 Command Manager</h1>

      <div class="mb-8 overflow-x-auto">
        <table class="bg-base-200 table w-full rounded-lg shadow">
          <thead>
            <tr>
              <th>Enabled</th>
              <th>Name</th>
              <th>Description</th>
              <th>Aliases</th>
              <th>Args</th>
            </tr>
          </thead>
          <tbody id="commands-table"></tbody>
        </table>
      </div>

      <div class="mb-4 flex justify-end">
        <button class="btn btn-primary" id="add-custom-btn">
          <i class="fas fa-plus"></i> Add Custom Command
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="bg-base-200 table w-full rounded-lg shadow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Aliases</th>
              <th>Args</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="custom-commands-table"></tbody>
        </table>
      </div>

      <dialog id="customCommandModal" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
          <h3 class="mb-4 text-lg font-bold">Custom Command</h3>
          <form id="customCommandForm" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="label">
                  Name (EN) <span class="text-error">*</span>
                </label>
                <input
                  type="text"
                  name="name_en"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label class="label">Name (TH)</label>
                <input
                  type="text"
                  name="name_th"
                  class="input input-bordered w-full"
                />
              </div>
              <div>
                <label class="label">Description (EN)</label>
                <input
                  type="text"
                  name="description_en"
                  class="input input-bordered w-full"
                />
              </div>
              <div>
                <label class="label">Description (TH)</label>
                <input
                  type="text"
                  name="description_th"
                  class="input input-bordered w-full"
                />
              </div>
              <div>
                <label class="label">Aliases (EN, comma-separated)</label>
                <input
                  type="text"
                  name="aliases_en"
                  class="input input-bordered w-full"
                />
              </div>
              <div>
                <label class="label">Aliases (TH, comma-separated)</label>
                <input
                  type="text"
                  name="aliases_th"
                  class="input input-bordered w-full"
                />
              </div>
            </div>
            <div>
              <label class="label">Execute Command (Script)</label>
              <textarea
                name="execute"
                class="textarea textarea-bordered w-full"
                rows="6"
                required
              ></textarea>
            </div>
            <div class="flex items-center gap-4">
              <label class="flex cursor-pointer items-center gap-2">
                <input type="checkbox" name="modsOnly" class="checkbox" /> Mods
                Only
              </label>
              <label class="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  name="broadcasterOnly"
                  class="checkbox"
                />{" "}
                Broadcaster Only
              </label>
            </div>
            <div class="modal-action">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                class="btn"
                onclick="() =>document.getElementById('customCommandModal').close()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </main>
  );
}
