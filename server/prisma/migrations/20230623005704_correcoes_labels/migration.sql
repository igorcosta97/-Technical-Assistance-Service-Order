/*
  Warnings:

  - You are about to drop the column `address` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `ammount` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `address`,
    DROP COLUMN `ammount`;

-- AlterTable
ALTER TABLE `service` DROP COLUMN `address`,
    DROP COLUMN `phoneNumber`;
