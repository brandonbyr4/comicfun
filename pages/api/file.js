import formidable from 'formidable'
// import fs from 'fs'

export const config = {
  api: {
    bodyParser: false
  }
}

const post = async (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async function (err, fields, files) {
    // await saveFile(files.file)
    console.log("file uploaded")
    return res.status(200).send("")
  })
}

// const saveFile = async (file) => {
//   const data = fs.readFileSync(file._writeStream.path)
//   fs.writeFileSync(`./public/temp/${file.originalFilename}`, data)
//   await fs.unlinkSync(file._writeStream.path)
//   return
// }

export default (req, res) => {
  req.method === "POST" ? post(req, res)
    : req.method === "PUT" ? console.log("PUT")
    : req.method === "DELETE" ? console.log("DELETE")
    : req.method === "GET" ? console.log("GET")
    : res.status(404).send("")
}
