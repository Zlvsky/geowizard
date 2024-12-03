Cypress.Commands.add(
  'upload',
  {
    prevSubject: 'element'
  },
  (subject, file, fileName) => {
    cy.window().then((window) => {
      const blob = b64toBlob(file, '', 512)
      const testFile = new window.File([blob], fileName)
      cy.wrap(subject).trigger('drop', {
        dataTransfer: { files: [testFile], types: ['Files'] }
      })
    })
  }
)

function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  const blob = new Blob(byteArrays, { type: contentType })
  return blob
}
