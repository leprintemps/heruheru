const express = require('express');

const app = express();
const port = 3000

const monggose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require("./models/User"); // User.js모델 가져오기

const config = require('./config/key');

// application/x-www-form-urlendcoded 데이터를 분석할 수 있도록
app.use(bodyParser.urlencoded({extended: true}));

// application/json 데이터를 분석할 수 있도록 
app.use(bodyParser.json());

monggose.connect(config.mongoURI, {
    useNewUrlParser : true
}).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

// 회원가입을 위한 라우터
app.post('/resister', (req,res) => {
    // 회원가입할때 필요한 정보들을 client에서 가져오면 그 값들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);

    // 몽공db에 유저정보 저장
    user.save((err, userInfo) => {
        if(err){
            return res.json({success: false, err});
        } else {
            return res.status(200).json({
                success: true
            })
        }
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));