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
  id SERIAL PRIMARY KEY,
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
  id SERIAL PRIMARY KEY,
  carouselUrl VARCHAR NOT NULL,
  productId INT REFERENCES products (id)
);

-- ---
-- Table 'breadcrumbs'
--
-- ---

CREATE TABLE IF NOT EXISTS breadcrumbs (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  productId INT REFERENCES products (id)
);

-- ---
-- Table 'variants'
--
-- ---

CREATE TABLE IF NOT EXISTS variants (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  imageUrl VARCHAR NOT NULL,
  linkUrl VARCHAR NOT NULL,
  productId INT REFERENCES products (id)
);

CREATE INDEX ON carouselImages (productId);
CREATE INDEX ON breadcrumbs (productId);
CREATE INDEX ON variants (productId);

-- ---
-- excute file from terminal
-- psql -U javier postgres < schema.sql
-- ---
