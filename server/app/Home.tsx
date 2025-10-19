// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import { Html } from "@elysiajs/html";

export function Home() {
  return (
    <>
      <div class="hero hero-pattern py-12 md:py-16">
        <div class="hero-content px-4 text-center">
          <div class="max-w-3xl">
            <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
              <i class="fas fa-robot mr-2"></i> Manao Dashboard
            </h1>
            <p class="mb-8 text-lg text-white/80 md:text-xl">
              Your all-in-one Twitch bot for music, overlays, soundboards, and
              custom commands
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <div class="mb-16">
          <h2 class="gradient-text mb-6 text-3xl font-bold">
            <i class="fas fa-bolt mr-2"></i> Quick Access
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="card bg-base-200 feature-card">
              <div class="card-body">
                <div class="mb-4 flex flex-col sm:flex-row sm:items-center">
                  <div class="bg-primary/20 mb-3 flex h-12 w-12 items-center justify-center rounded-full sm:mr-4 sm:mb-0">
                    <i class="fas fa-music text-primary text-2xl"></i>
                  </div>
                  <h3 class="card-title text-xl sm:text-2xl">Music Control</h3>
                </div>
                <p class="text-base-content/80">
                  Manage song requests and control the music player.
                </p>
                <div class="card-actions mt-4 flex-wrap justify-end">
                  <a href="/music" class="btn btn-primary btn-sm">
                    <i class="fas fa-play mr-1"></i> Music Player
                  </a>
                  <a href="/queue" class="btn btn-outline btn-sm">
                    <i class="fas fa-list mr-1"></i> Queue
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 feature-card">
              <div class="card-body">
                <div class="mb-4 flex flex-col sm:flex-row sm:items-center">
                  <div class="bg-secondary/20 mb-3 flex h-12 w-12 items-center justify-center rounded-full sm:mr-4 sm:mb-0">
                    <i class="fas fa-volume-up text-secondary text-2xl"></i>
                  </div>
                  <h3 class="card-title text-xl sm:text-2xl">Soundboard</h3>
                </div>
                <p class="text-base-content/80">
                  Play sound effects during your stream with a simple click.
                </p>
                <div class="card-actions mt-4 flex-wrap justify-end">
                  <a href="/soundboard" class="btn btn-secondary btn-sm">
                    <i class="fas fa-sliders-h mr-1"></i> Control Panel
                  </a>
                  <a href="/soundplayer" class="btn btn-outline btn-sm">
                    <i class="fas fa-volume-up mr-1"></i> Player
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 feature-card">
              <div class="card-body">
                <div class="mb-4 flex flex-col sm:flex-row sm:items-center">
                  <div class="bg-accent/20 mb-3 flex h-12 w-12 items-center justify-center rounded-full sm:mr-4 sm:mb-0">
                    <i class="fas fa-layer-group text-accent text-2xl"></i>
                  </div>
                  <h3 class="card-title text-xl sm:text-2xl">
                    Stream Overlays
                  </h3>
                </div>
                <p class="text-base-content/80">
                  Beautiful overlays to enhance your stream experience.
                </p>
                <div class="card-actions mt-4 flex-wrap justify-end">
                  <a href="/feed" class="btn btn-accent btn-sm">
                    <i class="fas fa-rss mr-1"></i> Feed
                  </a>
                  <a href="/overlay/Chat" class="btn btn-outline btn-sm">
                    <i class="fas fa-comments mr-1"></i> Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <div class="mb-6 flex items-center justify-between">
            <h2 class="gradient-text text-3xl font-bold">
              <i class="fas fa-list mr-2"></i> Page List
            </h2>
            <div class="dropdown dropdown-end">
              <p tabindex="0" class="btn btn-ghost btn-sm">
                <i class="fas fa-question-circle"></i> Help
              </p>
              <div
                tabindex="0"
                class="dropdown-content card card-compact bg-base-300 text-base-content z-[1] w-64 p-2 shadow"
              >
                <div class="card-body">
                  <h3 class="font-bold">Using Tokens</h3>
                  <p class="text-sm">
                    Your overlay token is stored in the <code>.env</code> file
                    as
                    <code>OVERLAY_TOKEN=xxxx</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <div class="overflow-x-auto">
                <table class="table-zebra table w-full">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>URL Format</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i class="fas fa-rss text-primary mr-2"></i> Feed
                        Overlay
                      </td>
                      <td>
                        <code>/feed?token=xxx</code>
                      </td>
                      <td>
                        <a href="/feed" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-comments text-primary mr-2"></i> Chat
                        Overlay
                      </td>
                      <td>
                        <code>/chat?token=xxx</code>
                      </td>
                      <td>
                        <a href="/overlay/Chat" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-music text-primary mr-2"></i> Music
                        Player Overlay
                      </td>
                      <td>
                        <code>/music?token=xxx</code>
                      </td>
                      <td>
                        <a href="/music" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-volume-up text-primary mr-2"></i> Sound
                        Player Overlay
                      </td>
                      <td>
                        <code>/soundplayer</code>
                      </td>
                      <td>
                        <a href="/soundplayer" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-sliders-h text-primary mr-2"></i>{" "}
                        Soundboard Controller
                      </td>
                      <td>
                        <code>/soundboard?token=xxx</code>
                      </td>
                      <td>
                        <a href="/soundboard" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-list text-primary mr-2"></i> Song Queue
                      </td>
                      <td>
                        <code>/queue</code>
                      </td>
                      <td>
                        <a href="/queue" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-lock text-primary mr-2"></i> Command
                        Manager
                      </td>
                      <td>
                        <code>/command?token=xxx</code>
                      </td>
                      <td>
                        <a href="/manager/Commands" class="btn btn-xs">
                          Open
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="gradient-text mb-8 text-3xl font-bold">
            <i class="fas fa-star mr-2"></i> Main Features
          </h2>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="card bg-base-200 shadow-xl">
              <figure>
                <div class="flex h-32 w-full items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
                  <i class="fas fa-music text-6xl text-white"></i>
                </div>
              </figure>
              <div class="card-body">
                <h3 class="card-title text-2xl">Music System</h3>
                <ul class="mt-2 space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>
                      Song requests from Twitch chat via
                      <code>!sr</code> command
                    </span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>
                      Queue management with <code>!skip</code>,{" "}
                      <code>!volume</code>, etc.
                    </span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Beautiful overlay with current song display</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Option to hide video and show only song info</span>
                  </li>
                </ul>
                <div class="card-actions mt-4 justify-end">
                  <a href="/music" class="btn btn-primary">
                    Open Music Player
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl">
              <figure>
                <div class="flex h-32 w-full items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
                  <i class="fas fa-volume-up text-6xl text-white"></i>
                </div>
              </figure>
              <div class="card-body">
                <h3 class="card-title text-2xl">Soundboard System</h3>
                <ul class="mt-2 space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Mobile-friendly control panel for quick access</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Add/remove/customize sound effects</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Import/export sound libraries between devices</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-circle-xmark text-error mt-1 mr-2"></i>
                    <span>
                      Trigger sounds from Twitch chat with custom commands
                    </span>
                  </li>
                </ul>
                <div class="card-actions mt-4 justify-end">
                  <a href="/soundboard" class="btn btn-primary">
                    Open Soundboard
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl">
              <figure>
                <div class="flex h-32 w-full items-center justify-center bg-gradient-to-r from-red-500 to-orange-500">
                  <i class="fas fa-comments text-6xl text-white"></i>
                </div>
              </figure>
              <div class="card-body">
                <h3 class="card-title text-2xl">Chat Overlays</h3>
                <ul class="mt-2 space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Beautiful Twitch chat display for your stream</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Customizable appearance and animations</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Emote support with proper scaling</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>Highlight messages from mods and subscribers</span>
                  </li>
                </ul>
                <div class="card-actions mt-4 justify-end">
                  <a href="/overlay/Chat" class="btn btn-primary">
                    Open Chat Overlay
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-xl">
              <figure>
                <div class="flex h-32 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500">
                  <i class="fas fa-rss text-6xl text-white"></i>
                </div>
              </figure>
              <div class="card-body">
                <h3 class="card-title text-2xl">Activity Feed</h3>
                <ul class="mt-2 space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>
                      Display recent follows, subscriptions, and donations
                    </span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-circle-xmark text-error mt-1 mr-2"></i>
                    <span>Animated notifications with customizable styles</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-success mt-1 mr-2"></i>
                    <span>
                      Support for Twitch bits and channel point redemptions
                    </span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-circle-xmark text-error mt-1 mr-2"></i>
                    <span>History tracking for all stream activities</span>
                  </li>
                </ul>
                <div class="card-actions mt-4 justify-end">
                  <a href="/feed" class="btn btn-primary">
                    Open Activity Feed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="gradient-text mb-6 text-3xl font-bold">
            <i class="fas fa-question-circle mr-2"></i> Help & Resources
          </h2>

          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <a
                  href="https://github.com/tinarskii/manao/wiki"
                  target="_blank"
                  rel="noreferrer"
                  class="card bg-base-300 hover:bg-base-300 cursor-pointer transition-colors"
                >
                  <div class="card-body p-4">
                    <h3 class="text-lg font-bold">
                      <i class="fas fa-book mr-2"></i> Documentation
                    </h3>
                    <p class="text-sm">
                      Read the full setup guide and documentation
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/tinarskii/manao/issues"
                  target="_blank"
                  rel="noreferrer"
                  class="card bg-base-300 hover:bg-base-300 cursor-pointer transition-colors"
                >
                  <div class="card-body p-4">
                    <h3 class="text-lg font-bold">
                      <i class="fas fa-bug mr-2"></i> Report Issues
                    </h3>
                    <p class="text-sm">Found a bug? Let us know on GitHub</p>
                  </div>
                </a>

                <a
                  href="https://github.com/tinarskii/manao"
                  target="_blank"
                  rel="noreferrer"
                  class="card bg-base-300 hover:bg-base-300 cursor-pointer transition-colors"
                >
                  <div class="card-body p-4">
                    <h3 class="text-lg font-bold">
                      <i class="fab fa-github mr-2"></i> Source Code
                    </h3>
                    <p class="text-sm">
                      View the source code or contribute to the project
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
