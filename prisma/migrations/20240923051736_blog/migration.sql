-- CreateEnum
CREATE TYPE "BlogCategory" AS ENUM ('FINANCING', 'TECHNOLOGY', 'PRODUCTS', 'SCIENCE', 'OTHERS');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "category" "BlogCategory",
ADD COLUMN     "slug" TEXT;
