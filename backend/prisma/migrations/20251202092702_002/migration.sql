-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Caste" AS ENUM ('Brahmin', 'Kshatriya', 'Vaishya', 'Sudra');

-- CreateEnum
CREATE TYPE "Province" AS ENUM ('Koshi', 'Madhesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'SudurPachim');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('Food', 'Cloth', 'Books', 'Money');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "missing_report" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastSeenAddress" TEXT NOT NULL,
    "lastSeenTime" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "remarks" TEXT,
    "longitude" INTEGER NOT NULL,
    "latitude" INTEGER NOT NULL,
    "image" TEXT,
    "reporterId" TEXT NOT NULL,

    CONSTRAINT "missing_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation" (
    "id" TEXT NOT NULL,
    "weight" DECIMAL(10,2),
    "amount" DECIMAL(10,2),
    "type" "DonationType" NOT NULL,
    "donorId" TEXT NOT NULL,

    CONSTRAINT "donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "picture" TEXT,

    CONSTRAINT "volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kids_for_adoption" (
    "id" TEXT NOT NULL,
    "picture" TEXT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "caste" "Caste" NOT NULL,
    "gender" "Gender" NOT NULL,
    "province" "Province" NOT NULL,
    "description" TEXT NOT NULL,
    "isAdopted" BOOLEAN NOT NULL DEFAULT false,
    "adopterId" TEXT,

    CONSTRAINT "kids_for_adoption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adoption_request" (
    "kidId" TEXT NOT NULL,
    "adopterId" TEXT NOT NULL,

    CONSTRAINT "adoption_request_pkey" PRIMARY KEY ("kidId","adopterId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- AddForeignKey
ALTER TABLE "missing_report" ADD CONSTRAINT "missing_report_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kids_for_adoption" ADD CONSTRAINT "kids_for_adoption_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption_request" ADD CONSTRAINT "adoption_request_kidId_fkey" FOREIGN KEY ("kidId") REFERENCES "kids_for_adoption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption_request" ADD CONSTRAINT "adoption_request_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
