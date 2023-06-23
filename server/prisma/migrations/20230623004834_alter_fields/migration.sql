/*
  Warnings:

  - You are about to drop the column `cell_number` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `unit_ammount` on the `service` table. All the data in the column will be lost.
  - Added the required column `cellNumber` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitAmmount` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `cell_number`,
    DROP COLUMN `created_at`,
    DROP COLUMN `phone_number`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `cellNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `order` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `service` DROP COLUMN `phone_number`,
    DROP COLUMN `unit_ammount`,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `unitAmmount` VARCHAR(191) NOT NULL;
