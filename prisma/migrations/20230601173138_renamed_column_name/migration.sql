/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pro_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `pro_image` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `pro_name` on the `products` table. All the data in the column will be lost.
  - Added the required column `id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
DROP COLUMN "pro_id",
DROP COLUMN "pro_image",
DROP COLUMN "pro_name",
ADD COLUMN     "id" UUID NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");
