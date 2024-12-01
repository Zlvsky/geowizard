export const uploadFileService = async (_: File) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        res: { location: '123tmplocation/tuchola.json' }
      })
    }, 1000)
  })
}

export const createProjectService = async (_: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        res: { id: '18100' }
      })
    }, 1000)
  })
}

export const failCreateProjectService = async (_: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 400,
        res: { message: 'Project creation failed' }
      })
    }, 1000)
  })
}
