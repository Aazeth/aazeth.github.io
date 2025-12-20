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

  // isi hasil ke input result
  const output = document.getElementById("resultOutput")
  output.value = viewLink

  // tampilkan box hasil
  const resultBox = document.getElementById("resultBox")
  resultBox.classList.remove("hidden")
}

function clearLink() {
  document.getElementById("linkInput").value = ""
  document.getElementById("resultOutput").value = ""
  document.getElementById("resultBox").classList.add("hidden")
}

function toggleUwu() {
  const box = document.getElementById("uwuBox")
  box.style.display = box.style.display === "block" ? "none" : "block"
}

function copyLink() {
  const output = document.getElementById("resultOutput")

  if (!output.value) {
    alert("nothing to copy :<")
    return
  }

  output.select()
  output.setSelectionRange(0, 99999)
  document.execCommand("copy")

  alert("copied~")
}

function openLink() {
  const output = document.getElementById("resultOutput")

  if (!output.value) {
    alert("no link yet")
    return
  }

  window.open(output.value, "_blank")
}
