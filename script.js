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

  window.location.href = viewLink
}

function pasteLink() {
  if (!navigator.clipboard || !navigator.clipboard.readText) {
    alert("clipboawd is not suppowted hewre")
    return
  }

  navigator.clipboard.readText()
    .then(text => {
      if (!text) {
        alert("clipboawd is empty")
        return
      }

      document.getElementById("linkInput").value = text
    })
    .catch(() => {
      alert("cannot paste fwom clipboawd. pwease allow pewmission")
    })
}

function clearLink() {
  document.getElementById("linkInput").value = ""
}
