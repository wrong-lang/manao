// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import { Html } from "@elysiajs/html";

export function Music({
  songTitle,
  songAuthor,
  songThumbnail,
}: {
  songTitle: string | undefined;
  songAuthor: string | undefined;
  songThumbnail: string | undefined;
}) {
  return (
    <>
      <div id="player">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          height="315"
          id="playframe"
          src="https://www.youtube.com/embed/{{ songID }}?autoplay=1&enablejsapi=1"
          width="560"
          title="YouTube video player"
        ></iframe>
      </div>

      <div class="flex flex-row gap-2 p-1" id="np">
        <img
          alt="Album art"
          class="h-20 w-20 animate-[spin_10s_linear_infinite] rounded-full object-cover shadow-lg"
          id="cover"
          src={songThumbnail}
        />
        <div class="w-[480px] rounded-lg" id="info-container">
          <div class="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-lg bg-black/50 px-4 py-2 text-white shadow-lg backdrop-blur-lg">
            <div>
              <h1 class="truncate text-xl font-extrabold" id="songTitle">
                {songTitle}
              </h1>
              <h1 class="truncate text-sm leading-none font-medium" id="author">
                {songAuthor}
              </h1>
            </div>
            <progress
              class="absolute bottom-0 left-0 h-px w-full rounded-none bg-[#75797c]"
              id="progress"
              max="100"
              value="0"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
}
