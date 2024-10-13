/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ProductCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ProductCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ProductSubCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ProductSubCategories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProductCategories_name_slug_key";

-- DropIndex
DROP INDEX "ProductSubCategories_name_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategories_name_key" ON "ProductCategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategories_slug_key" ON "ProductCategories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSubCategories_name_key" ON "ProductSubCategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSubCategories_slug_key" ON "ProductSubCategories"("slug");
