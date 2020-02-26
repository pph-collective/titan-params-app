const axios = require("axios")
const yaml = require("yaml")
const fs = require("fs")

require('dotenv').config()

// default branch is master, but can overwrite with env
const branch = process.env.VUE_APP_TITAN_BRANCH || "master"
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_GH_TOKEN}`;

let url = `https://api.github.com/graphql`
let query = {query: `
  query {
    repository(owner: "marshall-lab", name: "TITAN") {
      folder: object(expression: "${branch}:titan/params") {
        ... on Tree {
          entries {
            oid
            object {
              ... on Blob {
                text
              }
            }
            name
          }
        }
      }
    }
    }
  `
}

let params = {}

axios
  .post(url, query)
  .then(response => {
    response.data.data.repository.folder.entries.map(val => {
      let name = val.name.split(".")[0]
      let param = yaml.parse(val.object.text)
      params[name] = param[name]
    })

    fs.writeFile("src/assets/data.json", JSON.stringify(params), 'utf8', function (err) {
      if (err) {
        console.log(err)
      }
    })
  })
  .catch(error => {
    console.log(error)
  })
