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
CREATE TABLE IF NOT EXISTS items (
  item_id SERIAL PRIMARY KEY,
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
  item_id INT NOT NULL,
  PRIMARY KEY(carouselImages_id),
  CONSTRAINT fk_item
    FOREIGN KEY (item_id)
      REFERENCES items(item_id)
);

-- ---
-- Table 'breadcrumbs'
--
-- ---

CREATE TABLE IF NOT EXISTS breadcrumbs (
  breadcrumbs_id SERIAL,
  name VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  item_id INT NOT NULL,
  PRIMARY KEY(breadcrumbs_id),
  CONSTRAINT fk_item
    FOREIGN KEY (item_id)
      REFERENCES items(item_id)
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
  item_id INT NOT NULL,
  PRIMARY KEY(variants_id),
  CONSTRAINT fk_item
    FOREIGN KEY (item_id)
      REFERENCES items(item_id)
);

-- ---
-- excute file from terminal
-- psql -U javier postgres < schema.sql
-- ---
