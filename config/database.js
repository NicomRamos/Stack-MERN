const mongoose = require('mongoose')
//conectar con la base de datos de mongoos
const { MONGODB_URI, MONGODB_URI_TEST, NODE_ENV } = process.env 

const connectionString = NODE_ENV === 'test' ? MONGODB_URI_TEST : MONGODB_URI

mongoose.connect(connectionString, 
{   useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database Connected"))
.catch(error => console.log(error))