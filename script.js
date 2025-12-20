function toggleUwu() {
  const box = document.getElementById("uwuBox")
  box.style.display = box.style.display === "block" ? "none" : "block"
}

function clearAll() {
  document.getElementById("linkInput").value = ""
  document.getElementById("resultBox").classList.add("hidden")
  document.getElementById("uwuBox").style.display = "none"
}

function convert() {
  const input = document.getElementById("linkInput").value
  const match = input.match(/id=([^&]+)/)

  if (!match) {
    alert("lwink invalid uwu")
    return
  }

  const fileId = match[1]
  const viewLink = `https://drive.google.com/file/d/${fileId}/view`

  document.getElementById("resultLink").value = viewLink
  document.getElementById("resultBox").classList.remove("hidden")
}

function copyLink() {
  const text = document.getElementById("resultLink")
  text.select()
  document.execCommand("copy")
}

function openLink() {
  const link = document.getElementById("resultLink").value
  window.open(link, "_blank")
}
