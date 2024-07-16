const mongoose1 = require("mongoose");

const uri = 'mongodb+srv://AdminReparado:OESNKrqKtFBqAv2N@clusteradso2669734.etir8is.mongodb.net/reparado5?retryWrites=true&w=majority'

mongoose1.connect(uri);

module.exports = mongoose1