// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import { Html } from "@elysiajs/html";
import { version } from "@/package.json";

export function Footer() {
  return (
    <footer class="footer from-base-300 to-base-200 text-base-content mt-12 rounded-t-xl bg-gradient-to-br p-4 shadow-lg sm:rounded-t-3xl sm:p-6 md:p-10">
      <div class="flex w-full flex-col items-center justify-center gap-6">
        <div class="mb-2">
          <div class="flex items-center justify-center gap-2">
            <img
              src="https://raw.githubusercontent.com/tinarskii/manao/refs/heads/main/docs/manao.svg"
              alt="manao"
              width="32"
            />
            <span class="text-xl font-bold">Manao</span>
          </div>
        </div>

        <div class="border-base-300 flex w-full flex-col items-center justify-center gap-4 border-t border-b py-4 sm:flex-row">
          <a
            href="https://github.com/tinarskii/manao/wiki"
            class="link link-hover hover:text-primary flex w-full items-center justify-center gap-2 py-2 transition-all sm:w-auto"
          >
            <i class="fa-solid fa-book"></i>
            <span>Documentation</span>
          </a>
          <div class="bg-base-300 hidden h-4 w-px sm:block"></div>
          <a
            href="https://github.com/tinarskii/manao/issues"
            class="link link-hover hover:text-primary flex w-full items-center justify-center gap-2 py-2 transition-all sm:w-auto"
          >
            <i class="fa-solid fa-bug"></i>
            <span>Report Bug</span>
          </a>
          <div class="bg-base-300 hidden h-4 w-px sm:block"></div>
          <a
            href="https://github.com/tinarskii/manao"
            class="link link-hover hover:text-primary flex w-full items-center justify-center gap-2 py-2 transition-all sm:w-auto"
          >
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>

        <div class="py-4">
          <div class="flex justify-center gap-4">
            <a
              href="https://github.com/tinarskii/manao"
              class="btn btn-circle btn-sm sm:btn-md btn-outline hover:bg-base-content hover:text-base-300 border-base-content transition-all duration-300"
            >
              <i class="fa-brands fa-github text-lg sm:text-xl"></i>
            </a>
            <a
              href="https://discord.gg/vkW7YMyYaf"
              class="btn btn-circle btn-sm sm:btn-md btn-outline border-base-content transition-all duration-300 hover:border-[#5865F2] hover:bg-[#5865F2] hover:text-white"
            >
              <i class="fa-brands fa-discord text-lg sm:text-xl"></i>
            </a>
            <a
              href="https://twitch.tv/tinarskii"
              class="btn btn-circle btn-sm sm:btn-md btn-outline border-base-content transition-all duration-300 hover:border-[#9146FF] hover:bg-[#9146FF] hover:text-white"
            >
              <i class="fa-brands fa-twitch text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>

        <div class="mt-2 text-center">
          <p class="flex items-center justify-center gap-2">
            Made with <i class="fas fa-heart text-error animate-pulse"></i> by
            <a
              href="https://github.com/tinarskii"
              class="hover:text-primary font-bold transition-all"
            >
              tinarskii
            </a>
          </p>
          <div class="mt-2 flex flex-col items-center text-xs opacity-70">
            <span class="flex items-center">
              <i class="fa-solid fa-server mr-1"></i> Running on localhost:3000
            </span>
            <span class="flex items-center">
              <i class="fa-solid fa-code-branch mr-1"></i> Version {version}
            </span>
          </div>
        </div>

        <div class="mt-4 mb-2">
          <button
            onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
            class="btn btn-circle btn-sm btn-primary shadow-lg"
            type="button"
          >
            <i class="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
