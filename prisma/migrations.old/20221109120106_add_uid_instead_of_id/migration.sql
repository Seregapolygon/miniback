/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Asset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Asset` table. All the data in the column will be lost.
  - The primary key for the `AssetTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `AssetTemplate` table. All the data in the column will be lost.
  - The primary key for the `Billing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Billing` table. All the data in the column will be lost.
  - The primary key for the `Dashboard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Dashboard` table. All the data in the column will be lost.
  - The primary key for the `DashboardTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DashboardTemplate` table. All the data in the column will be lost.
  - The primary key for the `Device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Device` table. All the data in the column will be lost.
  - The primary key for the `DeviceCommandList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DeviceCommandList` table. All the data in the column will be lost.
  - The primary key for the `DeviceModel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DeviceModel` table. All the data in the column will be lost.
  - The primary key for the `DeviceReadingList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DeviceReadingList` table. All the data in the column will be lost.
  - The primary key for the `Kit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Kit` table. All the data in the column will be lost.
  - The primary key for the `KitTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `KitTemplate` table. All the data in the column will be lost.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Notification` table. All the data in the column will be lost.
  - The primary key for the `NotificationTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `NotificationTemplate` table. All the data in the column will be lost.
  - The primary key for the `Rls` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Rls` table. All the data in the column will be lost.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Role` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The primary key for the `Vendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Vendor` table. All the data in the column will be lost.
  - The primary key for the `Widget` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Widget` table. All the data in the column will be lost.
  - The primary key for the `WidgetTemplate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `WidgetTemplate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DeviceCommandList" DROP CONSTRAINT "DeviceCommandList_deviceModelId_fkey";

-- DropForeignKey
ALTER TABLE "DeviceReadingList" DROP CONSTRAINT "DeviceReadingList_deviceModelId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Asset_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "AssetTemplate" DROP CONSTRAINT "AssetTemplate_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "AssetTemplate_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Billing" DROP CONSTRAINT "Billing_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Billing_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Dashboard" DROP CONSTRAINT "Dashboard_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "DashboardTemplate" DROP CONSTRAINT "DashboardTemplate_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "DashboardTemplate_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Device" DROP CONSTRAINT "Device_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Device_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "DeviceCommandList" DROP CONSTRAINT "DeviceCommandList_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "DeviceCommandList_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "DeviceModel" DROP CONSTRAINT "DeviceModel_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "DeviceModel_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "DeviceReadingList" DROP CONSTRAINT "DeviceReadingList_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "DeviceReadingList_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Kit" DROP CONSTRAINT "Kit_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Kit_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "KitTemplate" DROP CONSTRAINT "KitTemplate_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "KitTemplate_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Notification_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "NotificationTemplate" DROP CONSTRAINT "NotificationTemplate_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "NotificationTemplate_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Rls" DROP CONSTRAINT "Rls_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Rls_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Vendor_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Widget" DROP CONSTRAINT "Widget_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Widget_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "WidgetTemplate" DROP CONSTRAINT "WidgetTemplate_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "WidgetTemplate_pkey" PRIMARY KEY ("uid");

-- AddForeignKey
ALTER TABLE "DeviceReadingList" ADD CONSTRAINT "DeviceReadingList_deviceModelId_fkey" FOREIGN KEY ("deviceModelId") REFERENCES "DeviceModel"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceCommandList" ADD CONSTRAINT "DeviceCommandList_deviceModelId_fkey" FOREIGN KEY ("deviceModelId") REFERENCES "DeviceModel"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
