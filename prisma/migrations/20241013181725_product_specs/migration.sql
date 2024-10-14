/*
  Warnings:

  - You are about to drop the column `content` on the `ProductSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductSpecs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `ProductSpecs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ProductSpecs" DROP CONSTRAINT "ProductSpecs_productId_fkey";

-- AlterTable
ALTER TABLE "ProductSpecs" DROP COLUMN "content",
DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "ProductSubCategories" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "ProductSpecContent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "specsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductSpecContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductSpecContent_name_key" ON "ProductSpecContent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSpecs_name_key" ON "ProductSpecs"("name");

-- AddForeignKey
ALTER TABLE "ProductSpecContent" ADD CONSTRAINT "ProductSpecContent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSpecContent" ADD CONSTRAINT "ProductSpecContent_specsId_fkey" FOREIGN KEY ("specsId") REFERENCES "ProductSpecs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
