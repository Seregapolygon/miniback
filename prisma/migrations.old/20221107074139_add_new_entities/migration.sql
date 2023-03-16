-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceModel" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "DeviceModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceReadingList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deviceModelId" INTEGER,

    CONSTRAINT "DeviceReadingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceCommandList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deviceModelId" INTEGER,

    CONSTRAINT "DeviceCommandList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetTemplate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "AssetTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rls" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Rls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashboardTemplate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "DashboardTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Widget" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WidgetTemplate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "WidgetTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kit" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Kit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KitTemplate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "KitTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationTemplate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "NotificationTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DeviceReadingList" ADD CONSTRAINT "DeviceReadingList_deviceModelId_fkey" FOREIGN KEY ("deviceModelId") REFERENCES "DeviceModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceCommandList" ADD CONSTRAINT "DeviceCommandList_deviceModelId_fkey" FOREIGN KEY ("deviceModelId") REFERENCES "DeviceModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
