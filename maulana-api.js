const newman = require("newman")

newman.run({
    collection: "json-collection/maulana.postman_collection.json",
    environment: "json-env/maulana.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})

