function convert() {
  const input = document.getElementById("linkInput").value

  const match = input.match(/id=([^&]+)/)
  if (!match) {
    alert("lwinknyaa ga vawlid")
    return
  }

  const fileId = match[1]
  const viewLink = `https://drive.google.com/file/d/${fileId}/view`
  window.location.href = viewLink
}

function pasteLink() {
  navigator.clipboard.readText().then(text => {
    document.getElementById("linkInput").value = text
  })
}

function clearLink() {
  document.getElementById("linkInput").value = ""
}
