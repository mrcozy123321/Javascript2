const fs = require('fs')
const path = require('path')

// console.log(fs);

// LÄSA FILER

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err) {
//     console.log(err);
//     return
//   }

//   console.log(data);
//   // console.log(data.toString());
// })

// console.log('det här är efter');




// SKRIVA FILER

// fs.writeFile('./mapp/text.txt', 'Ny text.', () => {
//   console.log('ändrade på texten');
// })

// fs.appendFile('./mapp/text.txt', '\nDet här är text som vi har lagt till', () => {
//   console.log('la till text');
// })

// fs.writeFile('./mapp/text3.txt', 'En ny fil', () => {
//   console.log('skrev till filen');
// })



// DÖPA OM EN FIL

// fs.rename('./mapp/text3.txt', './mapp/text2.txt', (err) => {
//   if(err) {
//     console.log(err);
//   }

//   console.log('bytte namn på filen');
// })



// MAPPAR

// if(!fs.existsSync('./NyMapp')) {
//   fs.mkdir('./NyMapp', err => {
//   if(err) {
//     console.log(err);
//   }
//   console.log('mapp skapad');
//   })
// } else {
//   fs.rmdir('./NyMapp', err => {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       console.log('Mappen finns redan.. Tar bort den');
//     }
//   })
// }



// TA BORT FILER
// if(fs.existsSync('./mapp/text2.txt')) {
//   fs.unlink('./mapp/text2.txt', err => {
//   if(err)
//     console.log(err);
  
//   else
//     console.log('tar bort filen');
//   })
// }

// console.log(__dirname);

// fs.appendFile(path.join(__dirname, 'mapp', 'text.txt'), '\nNu lägger vi till mera text', err => {
//   if(err) {
//     console.log(err);
//     return
//   }

//   console.log('la till text... igen.');

// })



// LÄSA STORA FILER / STREAM

const readStream = fs.createReadStream('./mapp/stor.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./mapp/stor2.txt', )

// readStream.on('data', (buffer) => {
//   // console.log('----------------------------------Ny Data-------------------------------------------');
//   // console.log(buffer);
//   writeStream.write('\n----------------------------------Ny Data-------------------------------------------\n')
//   writeStream.write(buffer)
// })

readStream.pipe(writeStream)