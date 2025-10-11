// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import { Html } from "@elysiajs/html";

export function Queue() {
  return (
    <main class="min-h-screen p-6">
      <h1 class="mb-6 text-center text-3xl font-bold">
        <i class="fa-solid fa-music text-primary"></i>
        Music Queue
        <i class="fa-solid fa-compact-disc text-secondary animate-spin-slow"></i>
      </h1>

      <div id="now-playing-section" class="mb-8 hidden">
        <div class="card from-primary to-secondary text-primary-content bg-gradient-to-r shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <h2 class="card-title text-2xl">
                <i class="fa-solid fa-volume-high mr-2 animate-pulse"></i> Now
                Playing
              </h2>
              <div class="badge badge-accent">
                <i class="fa-solid fa-circle-play mr-1"></i> ACTIVE
              </div>
            </div>
            <div id="now-playing-content" class="py-2"></div>
            <div class="bg-base-100 bg-opacity-30 mt-2 h-2 w-full rounded-full">
              <div
                id="song-progress"
                class="bg-error h-2 rounded-full"
                style="width: 0%"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div id="upcoming-queue-section" class="mb-6">
        <div class="overflow-x-auto rounded-lg shadow-lg">
          <table class="table w-full">
            <thead>
              <tr class="bg-secondary text-secondary-content">
                <th class="rounded-tl-lg">
                  <i class="fa-solid fa-hashtag"></i>
                </th>
                <th>
                  <i class="fa-solid fa-music mr-1"></i> Title
                </th>
                <th class="hidden md:table-cell">
                  <i class="fa-solid fa-user-astronaut mr-1"></i> Artist
                </th>
                <th class="hidden sm:table-cell">
                  <i class="fa-solid fa-user mr-1"></i> Requested By
                </th>
                <th class="rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody id="queue" class="bg-base-200"></tbody>
          </table>
        </div>
      </div>

      <div id="empty-state" class="mt-4 text-center">
        <div class="alert alert-info shadow-lg">
          <div>
            <i class="fa-solid fa-circle-info text-lg"></i>
            <span>No songs in queue. Request a song to get started!</span>
          </div>
        </div>
      </div>

      <div id="error-state" class="mt-4 hidden">
        <div class="alert alert-error shadow-lg">
          <div class="flex-1">
            <i class="fa-solid fa-triangle-exclamation text-lg"></i>
            <span>Error loading queue data</span>
          </div>
        </div>
      </div>
    </main>
  );
}
