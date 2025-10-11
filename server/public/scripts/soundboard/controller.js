const socket = createSocketConnection();

const defaultSounds = [
  { name: "Ba Dum Tss", url: "/mp3/ba-dum-tss.mp3" },
  { name: "Applause", url: "/mp3/applause.mp3" },
  { name: "Lucio Boop", url: "/mp3/boop-lucio.mp3" },
  { name: "Sombra Boop", url: "/mp3/boop-sombra.mp3" },
  { name: "Chicken Jockey", url: "/mp3/chicken-jockey.mp3" },
  { name: "Flint and Steel", url: "/mp3/flint-and-steel.mp3" },
  { name: "I... am Steve", url: "/mp3/i-am-steve.mp3" },
  { name: "Illuminati", url: "/mp3/illuminati.mp3" },
  { name: "Taco Bell", url: "/mp3/taco-bell.mp3" },
  { name: "The Nether", url: "/mp3/the-nether.mp3" },
  { name: "Vine Boom", url: "/mp3/vine-boom.mp3" },
];

let sounds =
  JSON.parse(localStorage.getItem("soundboardSounds")) || defaultSounds;

function saveSounds() {
  localStorage.setItem("soundboardSounds", JSON.stringify(sounds));
}

const modalToggle = document.getElementById("editModal");
const editSoundNameInput = document.getElementById("editSoundName");
const editSoundUrlInput = document.getElementById("editSoundUrl");
const saveEditSoundBtn = document.getElementById("saveEditSound");
const deleteSoundBtn = document.getElementById("deleteSound");

let currentEditIndex = -1;

function renderSoundButtons() {
  const soundboard = document.getElementById("soundboard");
  soundboard.innerHTML = "";

  sounds.forEach((sound, index) => {
    const btn = document.createElement("span");
    btn.className =
      "btn btn-xl btn-primary relative aspect-square flex flex-col items-center justify-center p-2 md:text-xl text-base font-bold whitespace-normal break-words w-full h-full";
    btn.textContent = sound.name;

    const editOverlay = document.createElement("div");
    editOverlay.className = "absolute top-1 right-1 transition";

    const editBtn = document.createElement("span");
    editBtn.className = "btn btn-xs btn-info";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openEditModal(index);
    });

    editOverlay.appendChild(editBtn);
    btn.appendChild(editOverlay);

    btn.addEventListener("click", () => {
      socket.emit("play-sound", { url: sound.url, name: sound.name });
    });

    soundboard.appendChild(btn);
  });
}

function openEditModal(index) {
  currentEditIndex = index;
  const sound = sounds[index];
  editSoundNameInput.value = sound.name;
  editSoundUrlInput.value = sound.url;
  modalToggle.checked = true;
}

function closeEditModal() {
  modalToggle.checked = false;
}

saveEditSoundBtn.addEventListener("click", () => {
  if (currentEditIndex < 0) return;
  const name = editSoundNameInput.value.trim();
  const url = editSoundUrlInput.value.trim();
  if (!name || !url)
    return alert("Please enter both a name and URL for the sound");
  sounds[currentEditIndex] = { name, url };
  saveSounds();
  renderSoundButtons();
  closeEditModal();
});

deleteSoundBtn.addEventListener("click", () => {
  if (currentEditIndex < 0) return;
  if (!confirm("Are you sure you want to delete this sound?")) return;
  sounds.splice(currentEditIndex, 1);
  saveSounds();
  renderSoundButtons();
  closeEditModal();
});

document.getElementById("addSound").addEventListener("click", () => {
  const nameInput = document.getElementById("soundName");
  const urlInput = document.getElementById("soundUrl");
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  if (!name || !url)
    return alert("Please enter both a name and URL for the sound");
  sounds.push({ name, url });
  saveSounds();
  renderSoundButtons();
  nameInput.value = "";
  urlInput.value = "";
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const data = JSON.stringify(sounds, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "soundboard-config.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

document.getElementById("importFile").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported) && imported.every((s) => s.name && s.url)) {
        if (
          confirm(
            `Import ${imported.length} sounds? This will replace your current sounds.`,
          )
        ) {
          sounds = imported;
          saveSounds();
          renderSoundButtons();
        }
      } else {
        alert("Invalid sound configuration file");
      }
    } catch (err) {
      alert(`Error parsing file: ${err.message}`);
    }
  };
  reader.readAsText(file);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (
    confirm("Reset to default sounds? This will remove all your custom sounds.")
  ) {
    sounds = [...defaultSounds];
    saveSounds();
    renderSoundButtons();
  }
});

socket.on("connect", () => console.log("Connected to server"));
socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
  alert("Could not connect to the server. Make sure the server is running.");
});

renderSoundButtons();
