/*
  Warnings:

  - A unique constraint covering the columns `[ordemNumber]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ordemNumber` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `ordemNumber` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Order_ordemNumber_key` ON `Order`(`ordemNumber`);
