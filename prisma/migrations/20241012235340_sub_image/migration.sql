/*
  Warnings:

  - A unique constraint covering the columns `[name,slug]` on the table `ProductCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,slug]` on the table `ProductSubCategories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Made the column `subcategoryId` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_subcategoryId_fkey";

-- DropIndex
DROP INDEX "ProductCategories_name_key";

-- DropIndex
DROP INDEX "ProductSubCategories_name_key";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "productSubCategoryId" TEXT;

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "subcategoryId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategories_name_slug_key" ON "ProductCategories"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSubCategories_name_slug_key" ON "ProductSubCategories"("name", "slug");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "ProductSubCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productSubCategoryId_fkey" FOREIGN KEY ("productSubCategoryId") REFERENCES "ProductSubCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
