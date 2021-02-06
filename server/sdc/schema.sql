-- schema.sql
-- Droping databases for initial testing
DROP DATABASE IF EXISTS javier_items;

CREATE DATABASE javier_items;

-- connect to `javier_items` database
\c javier_items;

-- ---
-- Table 'item'
--
-- ---
CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  reviews SMALLINT NOT NULL,
  averageRating SMALLINT NOT NULL,
  liked BOOLEAN NOT NULL,
  price DECIMAL NOT NULL,
  shortName VARCHAR NOT NULL,
  longDescription TEXT NOT NULL,
  thumbImageURL VARCHAR NOT NULL,
  articleNumber VARCHAR NOT NULL,
  variantProduct BOOLEAN,
  variantType VARCHAR,
  variantCategory VARCHAR
);

-- ---
-- Table 'carouselImages'
--
-- ---

CREATE TABLE IF NOT EXISTS carouselImages (
  carouselImages_id SERIAL,
  carouselUrl VARCHAR NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY(carouselImages_id),
  CONSTRAINT fk_item
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

-- ---
-- Table 'breadcrumbs'
--
-- ---

CREATE TABLE IF NOT EXISTS breadcrumbs (
  breadcrumbs_id SERIAL,
  br1 VARCHAR NOT NULL,
  br2 VARCHAR NOT NULL,
  br3 VARCHAR NOT NULL,
  br4 VARCHAR NOT NULL,
  br5 VARCHAR NOT NULL,
  br6 VARCHAR NOT NULL,
  url1 VARCHAR NOT NULL,
  url2 VARCHAR NOT NULL,
  url3 VARCHAR NOT NULL,
  url4 VARCHAR NOT NULL,
  url5 VARCHAR NOT NULL,
  url6 VARCHAR NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY(breadcrumbs_id),
  CONSTRAINT fk_item
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

-- ---
-- Table 'variants'
--
-- ---

CREATE TABLE IF NOT EXISTS variants (
  variants_id SERIAL,
  name VARCHAR NOT NULL,
  imageUrl VARCHAR NOT NULL,
  linkUrl VARCHAR NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY(variants_id),
  CONSTRAINT fk_item
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

-- ---
-- excute file from terminal
-- psql -U javier postgres < server/sdc/schema.sql
-- ---
