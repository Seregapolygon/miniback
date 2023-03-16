-- CreateTable
CREATE TABLE "Vendor" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "photo" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "DeviceModel" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "vendorUid" INTEGER,

    CONSTRAINT "DeviceModel_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "DeviceReadingList" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deviceModelId" INTEGER,

    CONSTRAINT "DeviceReadingList_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "DeviceCommandList" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deviceModelId" INTEGER,

    CONSTRAINT "DeviceCommandList_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Account" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Asset" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "AssetTemplate" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "AssetTemplate_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "User" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Role" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Rls" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Rls_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Device" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Billing" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Dashboard" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "DashboardTemplate" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "DashboardTemplate_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Widget" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "WidgetTemplate" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "WidgetTemplate_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Kit" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Kit_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "KitTemplate" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "KitTemplate_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Notification" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "NotificationTemplate" (
    "uid" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "NotificationTemplate_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "DeviceModel" ADD CONSTRAINT "DeviceModel_vendorUid_fkey" FOREIGN KEY ("vendorUid") REFERENCES "Vendor"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceReadingList" ADD CONSTRAINT "DeviceReadingList_deviceModelId_fkey" FOREIGN KEY ("deviceModelId") REFERENCES "DeviceModel"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceCommandList" ADD CONSTRAINT "DeviceCommandList_deviceModelId_fkey" FOREIGN KEY ("deviceModelId") REFERENCES "DeviceModel"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
