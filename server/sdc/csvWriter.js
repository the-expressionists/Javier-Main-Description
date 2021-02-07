const fs = require('fs');
const path = require('path')
const { productData, carouselImages, variants, breadcrumbs } = require('./dataGen.js');

const productsCsv = fs.createWriteStream(path.resolve(__dirname + '/csvData/products.csv'));
const imagesCsv = fs.createWriteStream(path.resolve(__dirname + '/csvData/images.csv'));
const variantsCsv = fs.createWriteStream(path.resolve(__dirname +'/csvData/variants.csv'));
const breadcrumbsCsv = fs.createWriteStream(path.resolve(__dirname +'/csvData/breadcrumbs.csv'));

const writeTable = (tableData, count, writer, encoding, callback) => {
  let i = count;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      const data = tableData() + '\n';
      if (i === 0) { //base case
        writer.write(data, encoding, callback)
      } else {
        ok = writer.write(data,encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

console.time('CSV write time');
writeTable(productData, 10000001, productsCsv, 'utf-8', () => productsCsv.end())
writeTable(carouselImages, 30000001, imagesCsv, 'utf-8', () => imagesCsv.end())
writeTable(variants, 20000001, variantsCsv, 'utf-8', () => variantsCsv.end())
writeTable(breadcrumbs, 30000001, breadcrumbsCsv, 'utf-8', () => {
  console.timeEnd('CSV write time')
  breadcrumbsCsv.end()
})
