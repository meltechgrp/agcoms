/*
  Warnings:

  - You are about to drop the column `blogId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_blogId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_categoryId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "blogId",
DROP COLUMN "categoryId",
ADD COLUMN     "postId" TEXT,
ADD COLUMN     "productCategoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
