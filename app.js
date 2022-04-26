// 引入 Mock
const Mock = require("mockjs");

const axios = require("axios");
const { Random } = require("mockjs");
let longitude = 113.032091
let latitude = 28.236334
function upload() {
  longitude += 0.000015
  latitude += 0.000010
  console.log('longitude', longitude.toFixed(6))
  let data = Mock.mock({
    sid: Number(Random.integer(1, 2)),
    battery: 80,
    speed: Number(Random.float(0, 5).toFixed(3)),
    hum: Random.integer(15, 35),
    temp: Random.integer(20, 80),
    algae_finish: Random.integer(0, 100),
    algae_weight: Random.integer(0, 20),
    longitude: Number(longitude.toFixed(6)), 
    latitude: Number(latitude.toFixed(6)),
    status: 1,
  });
  console.log("上传的数据", data);
  axios({
    method: "post",
    url: "http://127.0.0.1:8080/v1/ship/uploadData",
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFhV1FpT2pZc0luTmpiM0JsSWpvek1pd2lhV0YwSWpveE5qVXdPVFl4T1RjMUxDSmxlSEFpT2pFMk5URXdORGd6TnpWOS52TmZ5dlVtZ3cybmk2dW5xZzdUZ2FMY25xV2VvRzF3M1h6TjhnWHRWalZzOg==",
    },
  })
    .then((res) => {
      console.log(res.data.msg);
    })
    .catch((error) => {
      console.log("上传错误");
    });
}
setInterval(upload, 2000)
