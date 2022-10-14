/*
    유저 모델 및 스키마 생성
*/

const mongoose = require('mongoose'); // 몽고 모듈 가져오기

// 유저스키마 생성
const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type: String
    },
    tokenExp : {
        type : Number
    }
})

const User = mongoose.model('User', userSchema); // 유저스키마를 유저모델로 감싼다.

module.exports = {User}; // 이 모듈을 다른곳에서 사용할 수 있도록