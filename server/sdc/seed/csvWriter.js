const fs = require('fs');
const path = require('path')
const { productData, carouselImages, breadcrumbs, variants } = require('./dataGen.js');

const productsStream = fs.createWriteStream(path.resolve(__dirname + '/csvData/products.csv'));
const imagesCsv =  fs.createWriteStream(path.resolve(__dirname + '/csvData/images.csv'));
const breadcrumbsCsv =  fs.createWriteStream(path.resolve(__dirname +'/csvData/breadcrumbs.csv'));
const variantsCsv =  fs.createWriteStream(path.resolve(__dirname +'/csvData/variants.csv'));

const totalProducts = 10000000;

const productTable = (tableData, writer, encoding, callback) => {
  let i = totalProducts;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      const data = tableData() + '\n';
      if (i === 0) {
        // write last file and end writeStream
        writer.write(data, encoding, callback)
      } else {
        // if the internal buffer is less than the highWaterMark = true
        ok = writer.write(data,encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // highwater mark is reacher,
      writer.once('drain', write);
    }
  }
  write();
}

const otherTables = (tableData, min, max, writer, encoding, callback) => {
  let i = totalProducts;
  let perProduct = getRand(min, max);
  const write = () => {
    let ok = true;
    do {
      perProduct -= 1;
      if (perProduct === 0) {
        i -= 1;
        perProduct = getRand(min, max);
      }
      let data = tableData(i) + '\n';
      if (i === 0) {
        // write last file and end writeStream
        data = tableData(1) + '\n';
        writer.write(data, encoding, callback)
      } else {
        // if the internal buffer is less than the highWaterMark = true
        ok = writer.write(data,encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // highwater mark is reacher,
      writer.once('drain', write);
    }
  }
  write();
}

const getRand = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.time('CSV write time');
productTable(productData, productsStream, 'utf-8', () => productsStream.end());
otherTables(carouselImages, 6, 7, imagesCsv, 'utf-8', () => imagesCsv.end());
otherTables(breadcrumbs, 3, 5, breadcrumbsCsv, 'utf-8', () => breadcrumbsCsv.end());
otherTables(variants, 4, 5, variantsCsv, 'utf-8', () => {
  console.timeEnd('CSV write time');
  variantsCsv.end();
});