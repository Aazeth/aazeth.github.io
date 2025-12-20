function convert() {
  const input = document.getElementById("linkInput").value.trim()

  if (!input) {
    alert("pwease put a lwink fiwst")
    return
  }

  const match = input.match(/id=([^&]+)/)
  if (!match) {
    alert("dis link is not vawlid")
    return
  }

  const fileId = match[1]
  const viewLink = `https://drive.google.com/file/d/${fileId}/view`

  // isi hasil ke box
  document.getElementById("resultOutput").value = viewLink

  // tampilin box hasil
  document.getElementById("resultBox").classList.remove("hidden")
}

function clearLink() {
  document.getElementById("linkInput").value = ""
  document.getElementById("resultBox").classList.add("hidden")
}

function toggleUwu() {
  const box = document.getElementById("uwuBox")
  box.style.display = box.style.display === "block" ? "none" : "block"
}
