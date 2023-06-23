/*
  Warnings:

  - You are about to drop the column `cellNumber` on the `client` table. All the data in the column will be lost.
  - Added the required column `cep` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `cellNumber`,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL;
