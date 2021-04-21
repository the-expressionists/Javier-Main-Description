-- schema.sql
-- Droping databases for initial testing
-- DROP DATABASE IF EXISTS javier_items;  used in local system
DROP DATABASE IF EXISTS sdc;  -- used in production

CREATE DATABASE sdc;

-- connect to `sdc` database
\c sdc;
-- ---
-- Table 'item'
--
-- ---
CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY,
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
  productId INT
);

-- ---
-- Table 'breadcrumbs'
--
-- ---

CREATE TABLE IF NOT EXISTS breadcrumbs (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  productId INT
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
  productId INT
);


-- ---
-- excute file from terminal
-- psql -U javier postgres < schema.sql
-- ---

-- --
-- Adding foreign key and index after table creating
-- --

-- ALTER TABLE carouselImages
--     ADD CONSTRAINT fk_carouselImages_customers
--       FOREIGN KEY (productId)
--         REFERENCES products (id);

-- ALTER TABLE breadcrumbs
--     ADD CONSTRAINT fk_breadcrumbs_customers
--       FOREIGN KEY (productId)
--         REFERENCES products (id);

-- ALTER TABLE variants
--     ADD CONSTRAINT fk_variants_customers
--       FOREIGN KEY (productId)
--         REFERENCES products (id);

-- CREATE INDEX ON carouselImages (productId);
-- CREATE INDEX ON breadcrumbs (productId);
-- CREATE INDEX ON carouselImages (productId);