/*
  Warnings:

  - The values [wonder] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [SizeM] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('men', 'women', 'kid', 'unisex');
ALTER TABLE "Product" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');
ALTER TABLE "Product" ALTER COLUMN "sizes" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "sizes" TYPE "Size_new"[] USING ("sizes"::text::"Size_new"[]);
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
ALTER TABLE "Product" ALTER COLUMN "sizes" SET DEFAULT ARRAY[]::"Size"[];
COMMIT;
