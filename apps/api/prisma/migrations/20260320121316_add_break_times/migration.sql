-- AlterTable
ALTER TABLE "Availability" ADD COLUMN     "breakEnd" TEXT,
ADD COLUMN     "breakStart" TEXT;

-- AlterTable
ALTER TABLE "DateException" ADD COLUMN     "breakEnd" TEXT,
ADD COLUMN     "breakStart" TEXT;
