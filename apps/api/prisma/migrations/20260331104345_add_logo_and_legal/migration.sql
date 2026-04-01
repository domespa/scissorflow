-- AlterTable
ALTER TABLE "ShopConfig" ADD COLUMN     "legalMode" TEXT NOT NULL DEFAULT 'generated',
ADD COLUMN     "legalText" TEXT,
ADD COLUMN     "legalUrl" TEXT,
ADD COLUMN     "logoStyle" TEXT NOT NULL DEFAULT 'badge-vintage',
ADD COLUMN     "logoUrl" TEXT;
