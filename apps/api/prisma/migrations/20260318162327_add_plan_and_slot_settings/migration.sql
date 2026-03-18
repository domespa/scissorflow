-- CreateEnum
CREATE TYPE "ShopPlan" AS ENUM ('FREE', 'PRO', 'BUSINESS', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "SlotMode" AS ENUM ('FIXED', 'DYNAMIC');

-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "plan" "ShopPlan" NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE "ShopConfig" ADD COLUMN     "slotInterval" INTEGER NOT NULL DEFAULT 30,
ADD COLUMN     "slotMode" "SlotMode" NOT NULL DEFAULT 'FIXED';
