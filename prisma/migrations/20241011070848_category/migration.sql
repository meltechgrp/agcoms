/*
  Warnings:

  - You are about to drop the column `link` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Subcategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Subcategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `BlogCategory` table without a default value. This is not possible if the table is not empty.
  - Made the column `slug` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Subcategory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BlogCategory" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "link",
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "link",
ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_name_key" ON "Subcategory"("name");
