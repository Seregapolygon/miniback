-- AlterTable
ALTER TABLE "DeviceModel" ADD COLUMN     "vendorUid" INTEGER;

-- AddForeignKey
ALTER TABLE "DeviceModel" ADD CONSTRAINT "DeviceModel_vendorUid_fkey" FOREIGN KEY ("vendorUid") REFERENCES "Vendor"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
