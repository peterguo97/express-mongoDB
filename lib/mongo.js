const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/book');

db.connection.on("error",function (err) {
    console.log("数据库连接失败：" + error)
})

db.connection.on("open",function () {
    console.log("数据库链接失败");
})

const BookSchema = Schema({
    title: {
        unique: true, // 唯一的不可重复
        type: 'String', // Schema.Type String类型
    },
    summary: 'String',
    price: 'Number',
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
})

exports.Book = mongoose.model("Book",BookSchema);