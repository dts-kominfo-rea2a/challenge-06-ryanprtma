// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(
    file1,
    {
      encoding: 'utf8',
    },
    (err, data) => {
      const arrayOfObject1 = JSON.parse(data);
      const data1 = fnCallback(err, arrayOfObject1.message.substring(5, 10))
      fs.readFile(
        file2,
        {
          encoding: 'utf8',
        },
        (err, data) => {
          const arrayOfObject2 = JSON.parse(data);
          const data2 = fnCallback(err, arrayOfObject2[0].message.substring(5, 10))
          fs.readFile(
            file3,
            {
              encoding: 'utf8',
            },
            (err, data) => {
              const arrayOfObject3 = JSON.parse(data);
              const data3 = fnCallback(err, arrayOfObject3[0].data.message.substring(5, 10))
              const arr = [data1, data2, data3]
              return arr
            }
          )
        }
      )
    }
  )
}

const fnCallback = (err, data) => {
  if (err) {
    return console.log('Ada terjadi error: ' + err);
  }
  return data
}

const hasil = bacaData(fnCallback)
console.log(hasil)

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
